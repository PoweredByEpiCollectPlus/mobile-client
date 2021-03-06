/*jslint vars: true , nomen: true, devel: true, plusplus:true*/
/*global $, jQuery*/
/*
 *
 * Comments here - todo
 *
 */
var EC = EC || {};
EC.Delete = EC.Delete || {};
EC.Delete = ( function(module) {
		"use strict";

		var project_id;
		var project_name;
		var deferred;

		var _deleteProjectTX = function(tx) {

			//executePragmaStatement is available only on Android
			if (window.device.platform === EC.Const.ANDROID) {
				//enable PRAGMA to use foreign keys constraint: it is OFF by default
				EC.db.executeSql("PRAGMA foreign_keys=ON;", [], function(res) {
					EC.db.executeSql("PRAGMA foreign_keys;", [], function(res) {
						console.log("PRAGMA res: " + JSON.stringify(res));
					});
				});
			}

			if (window.device.platform === EC.Const.IOS) {
				// enable PRAGMA to use foreign keys constraint: it is OFF by default
				EC.db.executeSql("PRAGMA foreign_keys = ON;", [], function(res) {
					console.log("PRAGMA res: " + JSON.stringify(res));
				});

			}

			var query = "DELETE FROM ec_projects WHERE _id=?";
			tx.executeSql(query, [project_id], _deleteProjectSQLSuccessCB, _deleteProjectErrorCB);

		};

		var _deleteProjectSQLSuccessCB = function(the_tx, the_result) {
			console.log(the_result);
		};

		var _deleteProjectSuccessCB = function() {

			//delete media files (if any) for the project just deleted
			$.when(EC.File.deleteAllMedia(project_name, true, [EC.Const.PHOTO_DIR, EC.Const.AUDIO_DIR, EC.Const.VIDEO_DIR])).then(function() {
				deferred.resolve();
			});

		};

		var _deleteProjectErrorCB = function(the_tx, the_result) {
			console.log(the_result);
			deferred.reject();
		};

		//Delete a project and related tables: database integrity will be kept with
		// triggers (see EC.DBAdapter)
		module.deleteProject = function(the_project_id, the_project_name) {

			project_id = the_project_id;
			project_name = the_project_name;
			deferred = new $.Deferred();

			EC.db.transaction(_deleteProjectTX, _deleteProjectErrorCB, _deleteProjectSuccessCB);

			return deferred.promise();

		};

		return module;

	}(EC.Delete));
