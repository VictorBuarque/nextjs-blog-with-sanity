import { defineType, defineField } from "sanity"
import { UserIcon } from "@sanity/icons"

export const authorType = defineType({
  name: "author",
  type: "document",
  title: "Author",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessibility.",
          validation: (rule) => rule.required(),
        },
      ],
    }),
    defineField({
      name: "bio",
      type: "text",
      title: "Bio",
      description: "A brief biography of the author",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
})

