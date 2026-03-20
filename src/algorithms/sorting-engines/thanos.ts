import type { SortingEngine } from '@/types/algorithm';

/*
 * Thanos sort
 *
 * Runtime : O(N)
 * Memory  : O(-K log(N))
 * Totally unstable
 *
 * We delete half the data and repeat until the array is sorted
 */
export function* thanosSort(
  data: number[],
): Generator<SortingEngine, void, unknown> {
  let sorted = true;
  for (const [i, v] of data.entries()) {
    if (!v) continue;

    const nextIndex = data.findIndex((v, j) => j > i && !!v);

    if (nextIndex && v > data[nextIndex]!) {
      sorted = false;
      break;
    }
  }

  if (!sorted) {
    const availableIndices = data.map((v, i) => i).filter(() => true);
    const indicesToDelete: number[] = [];

    for (let i = 0; i < availableIndices.length / 2; i++) {
      let randomIndex: number | null = null;

      while (randomIndex === null || indicesToDelete.includes(randomIndex)) {
        randomIndex = Math.floor(Math.random() * availableIndices.length);
      }
      indicesToDelete.push(availableIndices[randomIndex]!);

      yield {
        data,
        comparing: indicesToDelete,
        moving: [],
        sorted: [],
      };
    }

    for (const i of indicesToDelete) {
      delete data[i];
      yield {
        data,
        comparing: indicesToDelete,
        moving: [],
        sorted: [],
      };
    }

    yield* thanosSort(data);
  } else {
    const remainings = data.map((v, i) => i).filter(() => true);
    const sorted = [];
    for (let i = 0; i < remainings.length; i++) {
      sorted.push(remainings[i]!);
      yield {
        data,
        comparing: [],
        moving: [],
        sorted,
      };
    }
  }
}
