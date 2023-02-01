# Split Object: using for-in loop

Split an object into an array of objects. Each entry in the array will be one
key/value pair from the object.

---

## Strategy

I chose to used for-in loop to solve this challenge because I enjoy using loops.

---

## Implementation

The function uses a for-in loop to iterate over the properties of the object.
The key and value of each property are added to a new object, and the new object
is then pushed into the result array.

---

## Use Cases

1.Splitting an object into an array of objects makes it easier to iterate over
its properties, allowing you to perform actions on each key-value pair.

2.By converting an object into an array, you can sort its properties based on
their keys or values.

3.Can be useful when manipulating data, as arrays are more suitable for certain
operations, such as filtering, mapping, and reducing.

---

## Inspiration

[This article from freeCodeCamp.org](https://www.freecodecamp.org/news/how-to-iterate-over-objects-in-javascript/)



