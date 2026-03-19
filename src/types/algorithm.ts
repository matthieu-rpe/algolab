export interface Algorithm<T> {
  id: string;
  engine: Generator<T, void, unknown>;
  state: T;
  time: number;
  done: boolean;
}

export interface SortingEngine {
  data: number[];
  comparing: number[];
  moving: number[];
  sorted?: number[];
}
