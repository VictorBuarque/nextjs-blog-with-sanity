import { defineType, defineField } from "sanity"
import { CalendarIcon } from "@sanity/icons"


export const blogType = defineType({
  name: "blog",
  type: "document",
  title: "Blog of Victor Buarque",
  icon: CalendarIcon,
  groups: [
    { name: "details", title: "Details" },
    { name: "contents", title: "Content" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title of blog article",
      group: ["details", "contents", "seo"],
      validation: (rule) => rule.required().min(10).max(100),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug of blog article",
      description: "This will generate a unique URL-friendly name",
      options: {
        source: "title",
        maxLength: 96,
      },
      hidden: ({ document }) => !document?.title,
      validation: (rule) => rule.required().error(`You must provide a slug`),
      group: ["details", "seo"],
    }),
    defineField({
      name: "author",
      type: "reference",
      title: "Author",
      to: [{ type: "author" }],
      group: ["details"],
    }),
    defineField({
      name: "mainImage",
      type: "image",
      title: "Main image",
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
      group: ["contents", "seo"],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      description: "The date and time this article was published.",
      options: {
        dateFormat: "DD MMMM, YYYY",
        timeFormat: "HH:mm",
        timeStep: 15,
      },
      group: ["details"],
    }),
    defineField({
      name: "excerpt",
      type: "text",
      title: "Excerpt",
      description: "A short summary of the blog post",
      rows: 3,
      validation: (rule) => rule.max(200),
      group: ["details", "seo"],
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      description: "The main content of the blog post",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Important for SEO and accessibility.",
              validation: (rule) => rule.required(),
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
              description: "Image caption",
            },
          ],
        },
      ],
      group: ["contents"],
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
      publishedAt: "publishedAt",
    },
    prepare({ title, author, media, publishedAt }) {
      const dateFormatted = publishedAt
        ? new Date(publishedAt).toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : "Unpublished"

      return {
        title: title || "Untitled",
        subtitle: `by ${author || "Unknown author"} on ${dateFormatted}`,
        media: media || CalendarIcon,
      }
    },
  },
})

