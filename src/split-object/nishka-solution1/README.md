# Split Object: use a built-in array method

Split an object into an array of objects. Each entry in the array will be one
key/value pair from the object.

## Strategy

I chose to use a built-in array method because I find them more simple to use.
Makes the code easier to read.

## Implementation

- I created an array to store the key and value pairs
- I used Object.keys which returns the keys of the object
- I then used a the forEach() method which calls a function for each element in
  an array.
- Using the for loop, I push each key/value pair inro the array
- and return the array

---
