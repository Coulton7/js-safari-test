Drupal.behaviors.formSingleSubmit = {
  attach: function (){
    function onFormSubmit (e) {
      var $form = $(e.currentTarget);
      var formValues = $form.serialize();
      var previousValues = $form.attr('data-drupal-form-submit-last');
      if (previousValues === formValues){
        e.preventDefault();
      }
      else{
        $form.attr('data-drupal-form-submit-last', formValues);
      }
    }

    $('body').once('form-single-submit')
      .on('submit.singleSubmit', 'form:not([method~="GET"])', onFormSubmit);
  }
};

$(function () {
    var clickCount = 0;
    $("#edit-submit").click(function(event){
        if(clickCount++ > 0) {
            event.preventDefault()
        }
      });
});

function aesinternational_form_alter(&$form, &$form_state, &$form_id) {
drupal_add_js(drupal_get_path('aesinternational','js').'one-form.js')
};
