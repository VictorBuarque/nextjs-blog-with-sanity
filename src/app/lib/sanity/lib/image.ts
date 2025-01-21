import createImageUrlBuilder from "@sanity/image-url"
import { client } from "./client"
import { Image } from "sanity"


const imageBuilder = createImageUrlBuilder(client)

export const urlForImage = (source: Image | null | undefined) => {
  if (!source) {
    return null
  }
  return imageBuilder?.image(source).auto("format").fit("max")
}

