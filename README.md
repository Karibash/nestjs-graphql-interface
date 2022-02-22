# nestjs-graphql-interface

Example of implementing an interface resolver with the GraphQL module of Nest.js.

An error occurs when using the field resolver in the interface resolver.

The following query can be executed to test the behavior.

```shell
curl 'http://localhost:3000/graphql' \
  -H 'content-type: application/json' \
  --data-raw '{"operationName":null,"variables":{},"query":"{\n  books {\n    id\n    title\n    titleLength\n  }\n}\n"}'
```
