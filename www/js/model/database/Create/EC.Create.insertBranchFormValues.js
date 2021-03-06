/*jslint vars: true , nomen: true devel: true, plusplus: true*/
/*global $, jQuery*/
/**
 * @module EC
 * @submodule Create
 *
 */

var EC = EC || {};
EC.Create = EC.Create || {};
EC.Create = ( function(module) {"use strict";

		var self;
		var branch_form_values = [];
		var branch_forms_data = [];
		var entries = [];
		var entry_key;
		var local_branch_form_id;
		var branch_form_total_entries;
		var deferred;

		//callback for a transaction error
		var _errorCB = function(the_tx, the_result) {
			console.log(EC.Utils.TRANSACTION_ERROR);
			console.log(the_result);
		};

		var _insertBranchFormValuesTX = function(tx) {

			var i;
			var iLength = branch_form_values.length;
			var remote_flag = 0;
			var is_cached = 1;
			var is_stored = 0;

			for ( i = 0; i < iLength; i++) {

				var query = "";
				var obj = branch_form_values[i];

				query += 'INSERT INTO ec_branch_data (';
				query += 'input_id, ';
				query += 'form_id, ';
				query += 'hierarchy_entry_key_ref, ';
				query += 'hierarchy_entry_key_value, ';
				query += 'position, ';
				query += 'label, ';
				query += 'ref, ';
				query += 'value, ';
				query += 'is_title, ';
				query += 'entry_key, ';
				query += 'type, ';
				query += 'is_data_synced, ';
				query += 'is_media_synced, ';
				query += 'is_cached, ';
				query += 'is_stored, ';
				query += 'created_on, ';
				query += 'is_remote) ';
				query += 'VALUES ("';
				query += obj.input_id + '", "';
				query += obj.form_id + '", "';
				query += obj.hierarchy_entry_key_ref + '", "';
				query += obj.hierarchy_entry_key_value + '", "';
				query += obj.position + '", "';
				query += obj.label + '", "';
				query += obj.ref + '", "';
				query += obj.value + '", "';
				query += obj.is_title + '", "';
				query += obj.entry_key + '", "';
				query += obj.type + '", "';
				query += obj.is_data_synced + '", "';
				query += obj.is_media_synced + '", "';
				query += is_cached + '", "';
				query += is_stored + '", "';
				query += obj.created_on + '", "';
				query += remote_flag + '");';

				tx.executeSql(query, [], _insertBranchFormValuesSQLSuccessCB, _errorCB);

			}//for

		};

		var _insertBranchFormValuesSuccessCB = function() {

			var branch_form_id = branch_form_values[0].form_id;

			//update branch entries counter, + 1
			$.when(EC.Update.updateCountersOnSingleBranchEntryInsertion(entry_key, branch_form_id)).then(function() {
				deferred.resolve(entry_key);
			}, function() {
				deferred.reject();
			});

		};

		var _insertBranchFormValueserrorCB = function(the_tx, the_result) {
			console.log(the_result);
			deferred.reject();
		};

		var _insertBranchFormValuesSQLSuccessCB = function() {
		};

		/*
		 * Commit a branch form to database; each value is a row in the table ec_data:
		 * when committed, the branch form is set as is_cached = 1, is_stored = 0
		 * the is_stored flag is set to one when the main form is saved.
		 * If the user leaves the main form without saving, the branch entries only cached (is_stored = 0) will be deleted
		 */
		module.insertBranchFormValues = function(the_branch_form_values, the_key_value) {

			branch_form_values = the_branch_form_values;
			entry_key = the_key_value;
			deferred = new $.Deferred();

			EC.db.transaction(_insertBranchFormValuesTX, _errorCB, _insertBranchFormValuesSuccessCB);

			return deferred.promise();

		};

		return module;

	}(EC.Create));
