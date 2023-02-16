# TEST 1 #

***
### Task 1 ###

Write a function that finds the most frequent character in a string (case insensitive)

  * JS

[code](https://github.com/boryskerekesha/test_1/blob/main/scripts/maxFrequentChar.js)

How my function works?

  * Checks the validity of the string and provides a corresponding message.
  * Returns the most repeated character or an array of several of them
  * See examples of how the function works in your console

***

### Task 2 ###

Create simple HTML form with text field and buttons “Set” and “Clear”. On submit form set item to local storage with key “num23” and value from the text field. On click “Clear” button clean up text field and delete item “num23” from local storage. On page load get item “num23” from local storage, create paragraph element, set according value into paragraph, and insert it before form. Paint paragraph in red if item value is odd and in green if item value is even.

Text field should accept only numbers.
Form should not be submitted if the field value is empty.
Disable “Set” button if the field value is empty.


  * JS
  * Sass, css
  * Html

[link](https://boryskerekesha.github.io/test_1/)
[code_js](https://github.com/boryskerekesha/test_1/blob/main/scripts/form.js)
[index](https://github.com/boryskerekesha/test_1/blob/main/index.html)

How my form works?

  * On submit form set item to local storage.
  * On click “Clear” button clean up text field and delete item “num23” from local storage
  * On page load get item “num23” from local storage, create paragraph element
  * Paint paragraph in red if item value is odd and in green if item value is even.
  * Text field should accept only numbers.
  * Disable “Set” button if the field value is empty.

***

### Task 3 ###

Write script that will parse query params from url and transform it into object with according key and value.

URL example:

http://localhost:63342/test/index.html?em=world&ew=book

Object example:

{
	“em” : ”world”,
“ew” : ”book”
}

  * JS

[code_js](https://github.com/boryskerekesha/test_1/blob/main/scripts/queryParams.js)

How my function works?

  * Checks the validity of URL and and provides a corresponding message.
  * Returns the object with according key and value.
  * If you need to work with a real url, use the getObjParamsRealUrl function.
  * See examples of how the function works in your console

  ***

  ### Task 3 ###

  [link_readme](https://github.com/boryskerekesha/render_list)
  [link](https://boryskerekesha.github.io/render_list/)
  [code_js](https://github.com/boryskerekesha/render_list/blob/main/scripts/script.js)
