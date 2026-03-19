import type { SortingEngine } from '@/types/algorithm';

/*
 * Selection sort
 *
 * Runtime : O(n^2)
 * Memory  : O(1)
 *
 * Find the smallest element using a linear scan. The put it to the front after the last sorted element.
 * Repeat this O(N) times to move every element one by one to the beginning.
 */
export function* selectionSort(
  data: number[],
): Generator<SortingEngine, void, unknown> {
  const n = data.length;

  // Move the 'n' elements to the beginning
  for (let i = 0; i < n; i++) {
    const sorted = Array.from({ length: i }, (_, k) => k);
    let smallestIndex = i; // first unsorted element

    yield {
      data,
      comparing: [],
      moving: [smallestIndex],
      sorted,
    };

    // From the next element to the end of the table, seek the smallest number
    for (let j = i + 1; j <= n; j++) {
      if ((data[smallestIndex] as number) > (data[j] as number)) {
        smallestIndex = j;
      }

      yield {
        data,
        comparing: [j],
        moving: [smallestIndex],
        sorted,
      };
    }

    [data[i], data[smallestIndex]] = [
      data[smallestIndex] as number,
      data[i] as number,
    ];
  }

  yield {
    data,
    comparing: [],
    moving: [],
    sorted: Array.from({ length: n }, (_, k) => k),
  };
}
