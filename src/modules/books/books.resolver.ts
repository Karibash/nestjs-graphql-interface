import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { Book } from '../../models/book.model';
import { PictureBook } from '../../models/picture-book.model';
import { TextBook } from '../../models/text-book.model';

@Resolver('Book')
export class BooksResolver {
  @ResolveField()
  public __resolveType(book: Book): string {
    return book.constructor.name;
  }

  @ResolveField()
  public titleLength(@Parent() book: Book): number {
    return book.title.length;
  }

  @Query()
  public books(): Book[] {
    return [
      new PictureBook({ id: 1, title: 'Picture Book' }),
      new TextBook({ id: 2, title: 'Text Book' }),
    ];
  }
}
