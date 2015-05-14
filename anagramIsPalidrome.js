// write a function that takes a string and returns
// true or false--return true if an anagram of the
// string is palindrome--false if not

// abab% => true
// baba%& => false
// anna => true


// Valid strings: There can be at most
// one character that appears an odd
// number of times in the string.

var anagramIsPalindrome = function(str){
  var letterCount = getLetterCount(str);
  var hasOdd = false;

  return reduce(letterCount, function(truthy, frequency){
    if (frequency % 2 === 1){
      truthy = !hasOdd; // will become false if there are two odd frequencies.
      hasOdd = true;
    }
    return truthy;
  }, true);
};



//////////////////////////////////////////////
//////////////////////////////////////////////
//            HELPER FUNCTIONS              //
//////////////////////////////////////////////
//////////////////////////////////////////////



// takes a string, returns an object with the
// with the character counts.
var getLetterCount = function(str){
  var array = str.split('');
  return reduce(array, function(charCount, letter){
    charCount[letter] = charCount[letter] && (charCount[letter] + 1) || 1;
    return charCount;
  }, {});
};

var each = function(collection, callback){
  if (Array.isArray(collection)){
    for (var i = 0; i < collection.length; i++){
      callback(collection[i]);
    }
  }else if (collection instanceof Object){
    for (var key in collection){
      collection.hasOwnProperty(key) && callback(collection[key]);
    }
  }
};

var reduce = function(collection, iterator, startValue){
  var init = arguments.length > 2;

  each(collection, function(value){
    if (!init){
      startValue = value;
      init = true;
    }else{
      startValue = iterator(startValue, value);
    }
  });

  return startValue;
};
