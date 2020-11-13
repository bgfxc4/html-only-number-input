# html-only-number-input
A possibility to allow the user to put only numbers in a html input field.

I made this because I could not find any solution for this in the internet.

You can change the regex in the index.js file to finetune what you want to allow: 
`var re = new RegExp("^[0-9. ]*$");` if you want to allow spaces, dots and numbers
`var re = new RegExp("^[0-9.]*$");` dots and numbers
`var re = new RegExp("^[0-9]*$");` only numbers

and you can replace the `*` in the regex with an `+` to require at least one character.

