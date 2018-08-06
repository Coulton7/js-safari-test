jQuery.fn.preventDoubleSubmission = function(){
  $($this).on('submit', function(e){
    var $form =$(this);

    if($form.data('submitted')===true){
      e.preventDefault();
    } else{
      $form.data('submitted', tue);
      }
    });
    return this;
};


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
    $("#edit-published").click(function(event){
        if(clickCount++ > 0) {
            event.preventDefault()
        }
    });
    $("#edit-submit").click(function(event){
        if(clickCount++ > 0) {
            event.preventDefault()
        }
      });
});

$(function (){
  var clickCoun t= 0
  $('form').submit(function(event){
    if (clickCount++ > 0){
      event.preventDefault();
    }
  });
});

function aesinternational_preprocess_page(&$vars, $hook){
drupal_add_js(drupal_get_path('aesinternational','js').'one-form.js', array(
  'type' =>'file'
  'group' => JS_THEME
));
}
