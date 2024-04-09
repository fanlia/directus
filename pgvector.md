
# pgvector

add pgvector to directus

## todo

- `cd api && pnpm install pgvector`
- enable pgvector to knex
- add field

## knex

```js
Import the library

import pgvector from 'pgvector/knex';


// Enable the extension

await knex.schema.enableExtension('vector');

// Create a table

await knex.schema.createTable('items', (table) => {
  table.increments('id');
  table.vector('embedding', 3);
});

// Insert vectors

const newItems = [
  {embedding: pgvector.toSql([1, 2, 3])},
  {embedding: pgvector.toSql([4, 5, 6])}
];
await knex('items').insert(newItems);

// Get the nearest neighbors to a vector

const items = await knex('items')
  .orderBy(knex.l2Distance('embedding', [1, 2, 3]))
  .limit(5);

```

## password
admin@example.com
aZ9Sr8JmzSro

## token
_KW5dy0DWzGmyYMLSEljvtFUq1hNasZD
