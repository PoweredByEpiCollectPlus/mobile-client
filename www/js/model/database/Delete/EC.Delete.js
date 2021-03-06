/*jslint vars: true , nomen: true, devel: true, plusplus:true*/
/*global $, jQuery*/
/*
 *
 * Comments here - todo
 *
 */
var EC = EC || {};
EC.Delete = EC.Delete || {};
EC.Delete = ( function() {
		"use strict";

		var deletion_counters = [];
		var deletion_entries = [];
		var deletion_files = [];
		var children_forms = [];
		var deletion_synced_entry_keys =[];

		//callback for a transaction error
		var errorCB = function(the_error) {
			console.log(EC.Const.TRANSACTION_ERROR);
			console.log("%c" + the_error.message, "color: red");
		};

		return {
			errorCB : errorCB,
			deletion_counters : deletion_counters,
			deletion_entries : deletion_entries,
			deletion_files : deletion_files,
			children_forms : children_forms
		};
	}());
