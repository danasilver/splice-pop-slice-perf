## slice vs pop vs slice to create subsets of an array

### Results
```
❯ splice-pop-slice-perf git/master node index.js
splice (small subset) x 333,455,435 ops/sec ±16.80% (60 runs sampled)
slice (small subset) x 364,985,843 ops/sec ±15.00% (67 runs sampled)
multiple pops (small subset) x 561,996,466 ops/sec ±0.60% (96 runs sampled)
splice (large subset) x 564,402,165 ops/sec ±0.24% (101 runs sampled)
slice (large subset) x 572,840,888 ops/sec ±0.25% (96 runs sampled)
multiple pops (large subset) x 383,924,836 ops/sec ±15.79% (68 runs sampled)
Fastest is slice (large subset)
```