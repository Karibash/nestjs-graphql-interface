import { FieldNames } from './field-names.type';

export type Fields<T> = { [P in FieldNames<T>]: T[P] };
