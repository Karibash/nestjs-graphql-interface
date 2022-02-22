export type FieldNames<T> = {
  [P in keyof T]: T[P] extends (...args: any[]) => any ? never : P
}[keyof T];
