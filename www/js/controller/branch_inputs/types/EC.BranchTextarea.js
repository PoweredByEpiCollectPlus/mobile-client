/*jslint vars: true , nomen: true, devel: true, plusplus:true*/
/*global $, jQuery*/
var EC = EC || {};
EC.BranchInputTypes = EC.BranchInputTypes || {};
EC.BranchInputTypes = ( function(module) {"use strict";

		module.textarea = function(the_value, the_input) {

			var obj;
			var span_label = $('span.label');
			var clone = $('div.clone');
			var double_entry;
			var value = the_value;
			var input = the_input;

			//update label text
			span_label.text(input.label);
			
			//Localise
			if (window.localStorage.DEVICE_LANGUAGE !== EC.Const.ENGLISH) {
				EC.Localise.applyToHTML(window.localStorage.DEVICE_LANGUAGE);
			}

			//Add attribute to flag the primary key input field
			if (parseInt(input.is_primary_key, 10) === 1) {

				span_label.attr('data-primary-key', 'true');

			} else {

				//reset the attribute to empty if not a primary key (JQM caches pages and we recycle views)
				span_label.attr('data-primary-key', '');
			}

			//check if we need to replicate this input
			double_entry = (parseInt(input.has_double_check, 10) === 1) ? true : false;

			//re-enable input if needed
			$('div#branch-input-textarea textarea').removeAttr('disabled');

			if (double_entry) {

				//duplicate textarea input
				clone.removeClass('not-shown');
				$('div.clone textarea').val(value);

				//if in editing mode, do not allow changes  if the field is a primary key
				if (window.localStorage.branch_edit_mode && input.is_primary_key === 1) {

					$('div.clone textarea').attr('disabled', 'disabled');
				}

			} else {

				//add not-shown class if missing
				clone.addClass('not-shown');

			}

			//Set value
			$('div#branch-input-textarea textarea').val(value);

			//if in editing mode, do not allow changes either if the field is a primary key
			if (window.localStorage.branch_edit_mode && input.is_primary_key === 1) {

				$('div#branch-input-textarea textarea').attr('disabled', 'disabled');
				$('div#branch-input-textarea p.primary-key-not-editable').removeClass("not-shown");
			} else {
				
				$('div#branch-input-textarea p.primary-key-not-editable').addClass("not-shown");
			}
			

		};

		return module;

	}(EC.BranchInputTypes)); 