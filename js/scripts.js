$(function (){
  $("form#gallonsLiter").submit(function(event) {
    //debugger;
    var comment = $("input#gL").val();
    var result1 = gallonsLiter(comment);
    $("#output1").text(result1);
    event.preventDefault();
  });
});
