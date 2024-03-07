// SyntaxError: Invalid regular expression, Nothing to repeat

// EXAMPLE 1 - Escape the special characters

const site = 'bobbyhadz.+*';

if (site.search(/[a-z]\.\+\*/) != -1) {
  // ✅ this runs
  console.log('regex matched');
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - If using a regex string, escape each escape character with a backslash

// const site = 'bobbyhadz.+*';

// if (site.search('[a-z]\\.\\+\\*') != -1) {
//   // ✅ this runs
//   console.log('regex matched');
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - To match a backslash character, use two backslashes

// const site = 'bobbyhadz.+*\\';

// console.log(site); // bobbyhadz.+*\

// if (site.search(/[a-z]\.\+\*\\/) != -1) {
//   // ✅ this runs
//   console.log('regex matched');
// }

// ------------------------------------------------------------------

// // EXAMPLE 4 - Make sure to not have multiple pluses + or asterisks * after one another

// const site = 'bobbyhadz';

// if (site.search(/\w+/) != -1) {
//   // ✅ this runs
//   console.log('regex matched');
// }
