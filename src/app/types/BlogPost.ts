import type { Image, PortableTextBlock } from "sanity"

export interface Author {
  _id: string
  name: string
  slug: {
    current: string
  }
  image: Image
  bio?: string
}

export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  author: Author
  mainImage: Image
  publishedAt: string
  excerpt: string
  content: PortableTextBlock[]
}