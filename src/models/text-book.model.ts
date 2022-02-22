import { Book } from './book.model';
import { Fields } from '../types/fields.type';

export class TextBook implements Book {
  public readonly id: number;
  public readonly title: string;

  constructor(props: Fields<Book>) {
    Object.assign(<Book>this, props);
  }
}
