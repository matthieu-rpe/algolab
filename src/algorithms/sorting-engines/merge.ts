import type { SortingEngine } from '@/types/algorithm';

/*
 * Merge sort
 *
 * Runtime : O(n*log(n))
 * Memory  : O(n)
 *
 * TODO: WRITE THIS PART
 */
export function* mergeSort(
  data: number[],
  start = 0,
  end = data.length - 1,
): Generator<SortingEngine, void, unknown> {
  if (start >= end) return; // Only one or zero data

  const mid = Math.floor((start + end) / 2);

  // 1. Divide data in two parts and sort them directly
  yield* mergeSort(data, start, mid);
  yield* mergeSort(data, mid + 1, end);

  // 2. We copy the left and right part to merge them
  const leftCopy = data.slice(start, mid + 1);
  const rightCopy = data.slice(mid + 1, end + 1);

  // 3. We iterate over the leftCopy and rightCopy, and put the lowest directly into data, then increment the copy and data pointers
  const rangeIndices = Array.from(
    { length: end - start + 1 },
    (_, k) => start + k,
  );

  let k = start; // index for data
  let i = 0; // index for left
  let j = 0; // index for right
  while (i < leftCopy.length || j < rightCopy.length) {
    const leftValue = leftCopy[i] as number;
    const rightValue = rightCopy[j] as number;

    if (
      j >= rightCopy.length ||
      (i < leftCopy.length && leftValue <= rightValue)
    ) {
      data[k] = leftValue;
      i++;
    } else {
      data[k] = rightValue;
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
