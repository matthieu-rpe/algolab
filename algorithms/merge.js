/*
 * Merge sort
 *
 * Runtime : O(n*log(n))
 * Memory  : O(n)
 *
 * TODO: WRITE THIS PART
 */
export function* mergeSort(data, start = 0, end = data.length - 1) {
  if (start >= end) return; // Only one or zero data

  let mid = Math.floor((start + end) / 2);

  // 1. Divide data in two parts and sort them directly
  yield* mergeSort(data, start, mid);
  yield* mergeSort(data, mid + 1, end);

  // 2. We copy the left and right part to merge them
  let leftCopy = data.slice(start, mid + 1);
  let rightCopy = data.slice(mid + 1, end + 1);

  // 3. We iterate over the leftCopy and rightCopy, and put the lowest directly into data, then increment the copy and data pointers
  const rangeIndices = Array.from(
    { length: end - start + 1 },
    (_, k) => start + k
  );

  let k = start; // index for data
  let i = 0; // index for left
  let j = 0; // index for right
  while (i < leftCopy.length || j < rightCopy.length) {
    if (
      j >= rightCopy.length ||
      (i < leftCopy.length && leftCopy[i] <= rightCopy[j])
    ) {
      data[k] = leftCopy[i];
      i++;
    } else {
      data[k] = rightCopy[j];
      j++;
    }

    yield {
      data,
      comparing: rangeIndices,
      moving: [k],
    };

    k++;
  }

  yield {
    data,
    comparing: [],
    moving: [],
    sorted: Array.from({ length: end - start + 1 }, (_, k) => start + k),
  };
}
