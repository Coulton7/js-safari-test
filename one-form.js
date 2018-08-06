(function($){

  $(function () {
    var clickCount = 0;
    $("#edit-submit").click(function(event){
        if(clickCount++ > 0) {
            event.preventDefault()
        }
      });
    });
});


function aesinternational_form_alter(&$form, &$form_state, &$form_id) {
drupal_add_js(drupal_get_path('aesinternational','js').'one-form.js')
};
