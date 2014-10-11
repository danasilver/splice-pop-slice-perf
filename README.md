## slice vs pop vs slice to create subsets of an array

Original array of size 10000.

Small subsets have size 2. Large subsets have size 1000.

Doing multiple (2) pops is the fastest if the subsets are small, but calling pop
1000 times for the large subset becomes a bottleneck.  Slice is fastest for a
large subset.  Since slice doesn't modify the original array (unlike pop and
splice), after calling `Array.slice`, we set `Array.length -= n` where `n` is
the subset size.

### Results
```
splice (small subset) x 1,712 ops/sec ±0.70% (95 runs sampled)
slice (small subset) x 1,572 ops/sec ±0.52% (96 runs sampled)
multiple pops (small subset) x 2,428 ops/sec ±1.06% (94 runs sampled)
splice (large subset) x 17,063 ops/sec ±0.50% (97 runs sampled)
slice (large subset) x 15,644 ops/sec ±0.63% (95 runs sampled)
multiple pops (large subset) x 7,930 ops/sec ±0.34% (102 runs sampled)
Fastest is splice (large subset)
```

![Graph of results](results.png)

### Summary

Use pop if you only need to remove a few elements from the end of an array; use
slice (or splice) if you need to remove a large number of elements.