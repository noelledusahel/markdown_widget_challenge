

function transform(input){
  var regex = /[*]([^*].+[^*])[*]/;
  return input.replace( regex, "<em>$1</em>")
}
