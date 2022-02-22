import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { BooksModule } from './modules/books/books.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      typePaths: ['./src/schemas/*.graphql'],
    } as ApolloDriverConfig),
    BooksModule,
  ],
})
export class AppModule {}
