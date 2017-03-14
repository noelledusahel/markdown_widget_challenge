$('document').ready(function(){
  // $('#markdown-box').on("submit", function(event){
  //   event.preventDefault();
  // })
    $('#markdown-text').keyup(function(){
      var input = $(this).val()
      var transformedInput = transform(input)

      $('#preview').html(transformedInput)
      })

})
