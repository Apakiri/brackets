module.exports = function check(str, bracketsConfig) {
  // your solution

  str.split('');
  var stack = [];
  var brackets = {};
  var open_brackets = [];
  var close_brackets = [];
  for (var i = 0; i < bracketsConfig.length; ++i) { ///division for open and closing brackets
    open_brackets[i] = bracketsConfig[i][0];
    close_brackets[i] = bracketsConfig[i][1];
  }
  //console.log(open_brackets);
  //console.log(close_brackets);
  // console.log(str[0]);
  for (var i = 0; i < bracketsConfig.length; ++i) {/// creating object witch contain oll bracket types
    brackets[open_brackets[i]] = close_brackets[i];
  }
  // console.log(brackets);


  for (var i = 0; i < str.length; ++i) {

var l = str.length;

    if (open_brackets.indexOf(str[i]) !== -1) {
      stack.push(str[i]);
      if (stack.length !== 1) {//case with open/close
        if (open_brackets.indexOf(str[i]) !== -1 && close_brackets.indexOf(str[i]) !== -1) {
          if (stack.indexOf(str[i]) !== -1) {
            var maybe_close_same_bracket = stack.pop();
            var maybe_open_same_bracket = stack.pop();
            if (maybe_close_same_bracket !== maybe_open_same_bracket && i !== (str.length - 1)){
              stack.push(maybe_open_same_bracket);
              stack.push(maybe_close_same_bracket)
            }
            if (maybe_close_same_bracket !== maybe_open_same_bracket && i === (str.length - 1)){
              return false;
            }

          }

        }
      }
    }
    else {
      var maybe_close_bracket = stack.pop();///deletes open beacket
      if (str[i] !== brackets[maybe_close_bracket]) {//comparig current close bracket with  required bracket for deleted open bracket
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
}
