var Widget = function( ){
}

Widget.prototype.transform = function(input){
  var change = this.bold(input)
  change = this.italics(change)
  change = this.underline(change)

  return change
}

Widget.prototype.bold = function(input){
  return input.replace( regexBold, "<b>$1</b>")
}

Widget.prototype.italics = function(input){
  return input.replace( regexItalics, "<em>$1</em>")
}

Widget.prototype.underline = function(input){
  return input.replace( regexUnderline, "<u>$1</u>")
}

  var regexBold = /\s?[*]{2}([^*].+[^*])[*]{2}\s?/;
  var regexItalics = /\s?[*]{1}([^*].+[^*])[*]{1}\s?/;
  var regexUnderline = /\s?[_]([^_].+[^_])[_]\s?/;

// function transform(input){
//   var regexUnderline = /[_]([^_].+[^_])[_])/;
//
//   return input.replace( regexBold, "<b>$1</b>")
// }
