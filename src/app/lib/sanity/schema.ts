import { type SchemaTypeDefinition } from "sanity";
import { blogType } from "./schemaTypes/blog";
import { authorType } from "./schemaTypes/author";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogType, authorType],
};
