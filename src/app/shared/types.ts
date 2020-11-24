export type PromiseResponse = Promise<undefined | { error: boolean }>;

export type PromiseFunction<T> = (data: T) => PromiseResponse;

export type DataHandlerProps<T> = {
  onSave: PromiseFunction<T>;
  data: T;
};
