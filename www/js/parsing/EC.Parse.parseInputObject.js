/*jslint vars: true , nomen: true, devel: true, plusplus:true*/
/*global $, jQuery*/
/*
 * @module EC
 * @submodulemodule Parser
 */
var EC = EC || {};
EC.Parse = ( function(module) {"use strict";

		var self;

		/*
		 * Return the position of an input within a form based on form name AND the input @ref (uniqueness is given by the composite key)
		 */
		var _getInputPosition = function(the_ref, the_form_name) {

			var ref = the_ref;
			var form_name = the_form_name;
			var input_position;
			var i;
			var iLength = self.form_inputs_positions.length;
			var j;
			var jLength;
			var current_num;
			var current_ref;
			var inputs;

			//loop all forms
			for ( i = 0; i < iLength; i++) {

				//loop all inputs within a form
				inputs = self.form_inputs_positions[i];
				jLength = inputs.length;
				for ( j = 0; j < jLength; j++) {

					if (inputs[j].form_name === form_name && inputs[j].ref === ref) {

						return inputs[j].position;

					}

				}

			}

		};
		
		/*
		 * Get an array of objects to loop and pass to "parseInputObject" for parsing
		 */
		module.parseInputArray = function(the_raw_array, the_type, the_form_num, the_form_type, the_form_name) {

			var self = this;

			$.each(the_raw_array, function(key, value) {
				self.parseInputObject(value, the_type, the_form_num, the_form_type, the_form_name);
			});
		};


		module.parseInputObject = function(the_raw_input, the_type, the_form_num, the_form_type, the_form_name) {

			var i;
			var iLength;
			var j;
			var jLenght;
			var input_position;
			var ref;
			var form_num;
			var form_type;
			var form_name;
			var is_genkey_hidden;

			self = this;
			ref = the_raw_input["@ref"];
			form_num = the_form_num;
			form_type = the_form_type;
			form_name = the_form_name;

			//get input position
			input_position = _getInputPosition(ref, form_name);

			//skip this input if position is set to 'skip'
			if (input_position === "skip") {
				return;
			}

			var parsed_input = {

				position : input_position,
				label : the_raw_input.label,
				type : the_type,
				ref : ref,
				datetime_format : "",
				has_jump : "",
				jumps : "",
				has_advanced_jump : ""

			};

			parsed_input.is_genkey = (the_raw_input["@genkey"] === undefined) ? "" : 1;

			is_genkey_hidden = (the_raw_input["@display"] === undefined) ? 0 : 1;

			if (parsed_input.is_genkey === 1 && is_genkey_hidden === 1) {
				self.is_form_genkey_hidden = 1;
			}

			//Set primary key flag to true  if the input is the primary key for current form
			parsed_input.is_primary_key = (parsed_input.ref === self.form_key) ? 1 : 0;
			
			//#handle a bug in the form builder when a NOT autogenerated key can be hidden (LOL): when a primary key input is hidden, force it to be autogenerated
			if(parsed_input.is_primary_key === 1 && is_genkey_hidden === 1){
				self.is_form_genkey_hidden = 1;
			}

			//if @default is present, there is a default value set for this input
			parsed_input.default_value = (the_raw_input["@default"] === undefined) ? "" : parsed_input.default_value = the_raw_input["@default"];

			//if @integer is present, convert the type to integer (it defaults to text)
			if (the_raw_input["@integer"] !== undefined) {
				parsed_input.type = "integer";

			}

			//if @decimal is present, convert the type to integer (it defaults to text)
			if (the_raw_input["@decimal"] !== undefined) {
				parsed_input.type = "decimal";

			}

			//if @setdate or @date  is present, convert the type to date (it defaults to text) and add the "format" attribute
			if (the_raw_input["@setdate"] !== undefined || the_raw_input["@date"] !== undefined) {

				parsed_input.type = "date";
				parsed_input.datetime_format = the_raw_input["@setdate"] || the_raw_input["@date"];

				//also add the setdate value as default to indicate it needs to default to current date
				parsed_input.default_value = the_raw_input["@setdate"] || "";

			}

			//if @settime or @time is present, convert the type to time (it defaults to text) and add the "format" attribute
			if (the_raw_input["@settime"] !== undefined || the_raw_input["@time"] !== undefined) {

				parsed_input.type = "time";
				parsed_input.datetime_format = the_raw_input["@settime"] || the_raw_input["@time"];

				//also add the settime value as default to indicate it needs to default to current time
				parsed_input.default_value = the_raw_input["@settime"] || "";
			}

			//set regex if any @regex is specified
			parsed_input.regex = (the_raw_input["@regex"] === undefined) ? "" : the_raw_input["@regex"];

			//set max and min value if any specified (not numeric fields will get "none")
			parsed_input.max_range = (the_raw_input["@max"] === undefined) ? "" : the_raw_input["@max"];
			parsed_input.min_range = (the_raw_input["@min"] === undefined) ? "" : the_raw_input["@min"];

			//set is_required to true or false based on the @required present or not
			parsed_input.is_required = (the_raw_input["@required"] === undefined) ? 0 : 1;

			//set search flag: this will be used for the advanced search function
			parsed_input.is_searchable = (the_raw_input["@search"] === undefined) ? 0 : 1;

			/*
			 * set title to true or false based on the @title present or not
			 *
			 * !--XML form builder needs to force at least one occurrence of @title --!
			 */
			parsed_input.is_title = (the_raw_input["@title"] === undefined) ? 0 : 1;

			//set is_double_entry flag based on @verify present or not
			parsed_input.has_double_check = (the_raw_input["@verify"] === undefined) ? 0 : 1;

			if (the_raw_input["@jump"] !== undefined) {

				//Set flag about this input triggering a jump or not
				parsed_input.has_jump = 1;

				parsed_input.jumps = the_raw_input["@jump"];
			}

			//<radio>, <select> (checkbox), <select1>(select) will have list of available options attached as "item" array
			if (the_type === EC.Const.RADIO || the_type === EC.Const.CHECKBOX || the_type === EC.Const.DROPDOWN) {

				//add set of options to options array, to link back to each input using @ref, @num

				//options for hierarchy forms (main)
				if (form_type === "main") {
					self.options.push({
						num : the_form_num,
						ref : the_raw_input["@ref"],
						options : the_raw_input.item
					});
				} else {

					//options for branch form
					self.branch_options.push({
						num : the_form_num,
						ref : the_raw_input["@ref"],
						options : the_raw_input.item
					});
				}

			}//if

			//if the type is branch, set branch_form value
			parsed_input.branch_form_name = (the_raw_input["@branch_form"] === undefined) ? "" : the_raw_input["@branch_form"];

			//store input
			self.input_list.push(parsed_input);
		};

		return module;

	}(EC.Parse));
