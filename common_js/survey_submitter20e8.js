var SurveySubmitter = (function()
{
	var ret = new Object();

	ret.submit = function(event, form, is_secure, cb)
	{
		//Stop the onSubmit page redirect from occurring
		event.preventDefault();

		//Stop any action if the form didn't validate (desktop sites only)
		if ($(form).valid && !$(form).valid()) return;

		//Convert the form element into a FormData object, turning all input elements into post data.
		var form_data = new FormData(form);

		//If the "is_secure" flag is set to true, use the secure handler. Otherwise, the unsecure one.
		if (is_secure)
		{
			rwsAJAXPostFormAJAXWithWaitFade('/SURVEY_AJAX/TAKE_SURVEY_SECURE', form_data, cb || afterSubmit);
		}
		else
		{
			rwsAJAXPostFormAJAXWithWaitFade('/SURVEY_AJAX/TAKE_SURVEY', form_data, cb || afterSubmit);
		}
	};

	function afterSubmit(response)
	{
		console.log(response);
		if (response.success)
		{
			//If a redirect was set, use it.
			var redirect = $('[name=\"RED\"]').val();
			if ( redirect )
			{
				//if ( redirect.indexOf('?') < 0 ) redirect += "?";
				document.location = redirect; //+ "&success_message=true";
			}
			//Otherwise, just display a results message.
			else
			{
				surveyAjaxToggleVisible('success_message', 'error_message');
			}
		}
		//If the response failed, display an error message.
		else
		{
			surveyAjaxToggleVisible('error_message', 'success_message');
			$('#error_message #survey_error_text').html(response.error_msg);
		}
	}

	return ret;
}());

function surveyAjaxToggleVisible(show_id, hide_id)
{
	$('#' + show_id).addClass("in");
	$('#' + show_id).removeClass("visibility-fix");

	$('#' + hide_id).removeClass("in");
	$('#' + hide_id).addClass("visibility-fix");
}
