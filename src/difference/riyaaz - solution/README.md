# Difference

Write a function that removes specific values from an array. The values to
remove are provided as a second array argument.

---

## Strategy

I chose the filter method in conjunction with the includes() method because it
seems to be the easiest for me when I need to return specific values from an
array or compare values as is needed in this case.

## Implementation

The filter method returns a shallow copy of an array, "filtered" down to just
the elements that pass the test implementation.

So I filtered over the first array to loop over the elements and then within the
callback of the filter I used the includes() method to filter over the second
array and check that the elements within the second array do not match the
element from the first array and save and return the result of it to an array
called result.

## use case

A use case for this type of function could be filtering out unwanted data from a
larger array. For example, let's say you have a list of all the employees in a
company and you want to filter out all the employees who have quit the company.
You have another array which has the list of employees who have quit. You can
use the checkDifference function to get a list of all the employees who are
still working in the company by filtering out the employees who have quit.
Here's an example:

```js
const allEmployees = [1, 2, 3, 4, 5, 6, 7, 8];
const quitEmployees = [2, 4, 6];

const activeEmployees = checkDifference(allEmployees, quitEmployees);

console.log(activeEmployees);
// Output: [1, 3, 5, 7, 8]
```

### inspiration

The filter method along with the other higher order functions like map() and
forEach() were the functions I discovered earlier on in my coding experience
when were busy with the JavaScript Module, Once I discovered these and how to
use it, the exercises became so much more easier to do and it's always been my
main go to functions when presented with a JS challenge, of course where
applicable.

## Read more about these functions here:

[filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

[includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
