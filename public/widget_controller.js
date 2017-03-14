$('document').ready(function(){
  // $('#markdown-box').on("submit", function(event){
  //   event.preventDefault();
  // })
      widgetController.load();

})

var transformable = new Widget();
var widgetController = {
  load: function(){
    widgetView.input().keyup(this.runProcess);
  },
  runProcess: function(){
    var input = $(this).val();
    var transformedInput = transformable.transform(input);
    widgetView.output().html(transformedInput);
  }
}
