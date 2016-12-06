/*
=======================================================
** Week 2 - Project 1 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the results can be displayed into the
HTML page. In some cases, you may want to check
within the console for verification of the array.

console.log();

=======================================================
*/


// 0. Connect the main.js document to the HTML page.
/*    Add to the bottom of the HTML page: <script src="main.js"></script>*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");




// 1. Declare a variable whose value is an empty array.
//    Use any method you choose to add at least 4 items to it.

var empty = [];
empty.push('sure');
empty.push('ya');
empty.push('uh');
empty.push('sigh');


document.getElementById('q1').innerHTML = ('My array: ' + empty)
    // 2. Add an additional item to the beginning of your array.
empty.unshift('meh');
document.getElementById('q2').innerHTML = ('My array using the unshift method: ' + empty)



// 3. Remove the second and third items in your array.


empty.splice(1, 2);
document.getElementById('q3').innerHTML = ('My array after removing the second and third items: ' + empty)


// 4. Add two new items after the second item.

empty.splice(2, 0, 'OMG', 'jeez');
document.getElementById('q4').innerHTML = ('My array adding two new items after the second item: ' + empty)



// 5. Log to the console: 'The current length of the array is....' using the .length method

console.log('The current length of the array is ' + empty.length)
document.getElementById('q5').innerHTML = ('Check the console')





// Use the following Array for questions 6-9:
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];

// 6. Change 'mouse' to 'keyboard'
console.log(things);
things[2]='keyboard'
document.getElementById('q6').innerHTML = ('New array changing mouse to keyboard: ' + things)





// 7. Combine all of the elements of the array into a string.
//    (Hint: check out the 'join' method.)

var thingsAsString = things.join(` & `);
document.getElementById('q7').innerHTML = (`'things' array as a string: ` + thingsAsString);




// 8. Remove the first item.
console.log(things);
var thingsClipped = things.shift();
console.log(things);
console.log(thingsClipped);
document.getElementById('q8a').innerHTML = (`'things' array with first item removed: ` + things)




// 9. Remove all items from the things array.
things = [];
document.getElementById('q9').innerHTML = (`('things' array with all items removed) ` + things);






// Use the following array for question 10:
var people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug'];

// 10. Arrange the items alphabetically. Store this Array as orderedPeople
var orderedPeople = people.sort()
document.getElementById('q10').innerHTML = (`'people' array alphabetically: ` + orderedPeople);






// 11. Create an array of arrays with the following three arrays:
var array1 = ["Fido", "Spot", "Rex", "Sparky"]
var array2 = ["Bulldog", "Lab", "Dalmation", "Beagle"]
var array3 = ["White", "Black", "Spotted", "Tri-color"]

// Goal:
var array4 = [
    ["Fido", "Spot", "Rex", "Sparky"],
    ["Bulldog", "Lab", "Dalmation", "Beagle"],
    ["White", "Black", "Spotted", "Tri-color"]
]
var array5 = [array1, array2, array3]

document.getElementById('q11').innerHTML = (`arrays within arrays: ` + array5);




// 12. Remove "Sparky" and "White" from the above array of arrays.


array5[0].splice(3,1);
array5[2].splice(2,0);
document.getElementById('q12').innerHTML = (`array 5 after splicing out "Sparky" and "White": ` + array5);




// ADVANCED TRACK
// Use the following campingItems array for question 13
var campingItems = ['tent', 'hiking boots', 'picnic table', 'corn on the cob', 'cooler'];

// 13. Declare an array called lastItem using .pop() on the campingItems array.

var lastItem = new Array;

lastItem = [campingItems.pop()];
console.log(lastItem);
document.getElementById('q13').innerHTML = (`last item popped off array: ` + lastItem);




// 14. Add two new items to lastItem, one at the beginning and one at the end.
lastItem.unshift('hammock');
lastItem.splice(5,0,'dog');
document.getElementById('q14').innerHTML = (`Adding two new items: ` + lastItem);




// 15. Add s'mores to the lastItem array.

lastItem.push(`s'mores`);
document.getElementById('q15').innerHTML = (`Pushing to a new array: ` + lastItem);



// 16. Create a new Array called reversedItems.
//    The items should be the same as lastItem, only in reverse order.


reversedItems = [lastItem.reverse()];
document.getElementById('q16').innerHTML = (`Reversed array: ` + reversedItems);




// 17. Using the Arrays below, create a single Array
//     called numberPets whose value is [12, 5, 9, 27, 'fish', 'dog']
var firstArray = [12, 5, 9, 27];
var secondArray = ['fish', 'dog'];

numberPets = [firstArray,secondArray]
document.getElementById('q17').innerHTML = (`Combo array: ` + numberPets);


// 18: Try to arrange the following items from smallest to largest:
var sortingNumbers = [2, 5, 98, 55, 77, 300];
// If it doesn't sort as expected, explain why.
sortingNumbers.sort(function(a,b){
  return a - b
});
document.getElementById('q18').innerHTML = (`sorted numbers ` + sortingNumbers);








/* SANDBOX TRACK

Solving all of these problems is a great step in the right direction,
but the next step is coming up with your own arrangements to solve
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates!

Also, consider how you can add/remove CSS styles to create added presentation with the results.

*/
