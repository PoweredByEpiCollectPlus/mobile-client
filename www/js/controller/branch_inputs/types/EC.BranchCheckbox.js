/*jslint vars: true , nomen: true, devel: true, plusplus:true*/
/*global $, jQuery*/
var EC = EC || {};
EC.BranchInputTypes = EC.BranchInputTypes || {};
EC.BranchInputTypes = ( function(module) {"use strict";

		module.checkbox = function(the_value, the_input) {

			//to cache dom lookups
			var obj;
			var span_label = $('div#branch-checkbox span.label');
			var clone = $('div#branch-checkbox div.clone');
			var double_entry;
			var value = the_value;
			var input = the_input;
			var CHECKBOX_CHECKED = "";
			var DISABLED = "";
			var SELECTED = "";
			var HTML = "";

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

			//if in editing mode, do not allow changes either if the field is a primary key or it triggers a jump
			if (window.localStorage.branch_edit_mode && (input.is_primary_key === '1' || input.has_jump === '1')) {
				DISABLED = 'disabled="disabled"';
			}

			//display all checkboxes options
			$(input.options).each(function(index) {

				var name = "choice";
				var option_value = this.value.trim();
                var option_label = this.label.trim();
				var option_id = 'checkbox-choice-' + (index + 1);
				var i;
				var iLength;

				//check if we have any value stored. For checkboxes, 'value' will be an array
				for ( i = 0, iLength = value.length; i < iLength; i++) {

					CHECKBOX_CHECKED = "";

					//if any match is found, pre-select that checkbox in the markup
					if (value[i] === option_value) {
						CHECKBOX_CHECKED = 'checked="checked"';
						break;
					}

				}

				HTML += '<label>';
				HTML += '<input type="checkbox" ' + CHECKBOX_CHECKED + ' ' + DISABLED + ' name="' + option_label;
				HTML += '" id="' + option_id;
				HTML += '" value="' + option_value;
				HTML += '" />' + option_label;
				HTML += '</label>';

			});

			span_label.append(HTML);
			$('div#branch-input-checkbox').trigger("create");

		};

		return module;

	}(EC.BranchInputTypes));
