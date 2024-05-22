import { type SchemaTypeDefinition } from 'sanity'
import { blogType } from './schemaTypes/blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogType],
}
