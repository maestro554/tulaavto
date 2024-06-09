$(document).ready(function(){
    $(".jquery-button").on("click", function() {
        $(".take-form_hidden").show(0, function() {
          $(".take-form_hidden").fadeOut(6000);
        });
      });
      $(".take-form_hidden").hide();
});
