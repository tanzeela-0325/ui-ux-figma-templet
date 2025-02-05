import { type SchemaTypeDefinition } from 'sanity'
import Product from './Product'

import imageUrlBuilder from '@sanity/image-url'
import { client } from '../lib/client' // Ensure this file is correctly set up

const builder = imageUrlBuilder(client)

export function urlFor(source:SchemaTypeDefinition) {
  return builder.image(source)
}



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product],
}
