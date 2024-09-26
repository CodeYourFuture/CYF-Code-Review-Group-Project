# Deep-Flat

Write a function that flattens nested arrays into a single array with no nesting

---

## Strategy

I chose to use this method because I remember previously having found the
array.flatMap method and actually mistakenly thought I could use that for this
challenge, when it did not work, because the flatMap only flattens the array by
one level, it prompted me to further look on
[MDN'S Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
if there was another method similar to it that would enable the flattening of
multiple levels of nested arrays.

---

## Implementation

So according to
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat),
The flat() method creates a new array with all sub-array elements concatenated
into it recursively up to the specified depth.

The flat() method only needs for you to specify the depth at which you'd like
the array to be flattened by and then it goes to work with no side-effects
because it returns a new array without modifying the original one.

---

## Use Cases

1. UI Development: In UI Development, arrays can be used to store hierarchical
   data, such as a tree-like structure. flattening the array can make it easier
   to display the data in a tabular format.

2. Algorithm Optimization: In some algorithms, nested arrays can be used to
   store data in a hierarchical structure. Flattening these arrays can make it
   easier to process the data and improve the performance of the algorithm.

## Inspiration

as Stated before, i happened across the flatMap() method previously and somehow
still remembered it to this day so the inspiration come from the memory of it
and also the
[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
that enabled me to quickly look if there was an alternate method I could use
that would be more suitable to this challenge.
