import { defineType, defineField } from "sanity";
import { CalendarIcon } from "@sanity/icons";
import TitleInput from "./components/TitleInput";

// Custom Structure will define wich document lists are displayed you can check it again in: https://www.sanity.io/learn/course/day-one-with-sanity-studio/structure-customization
// If you need to define document views for document types without overwritten in structure, you will need to instal npm install sanity-plugin-documents-pane

export const blogType = defineType({
  name: "blog",
  type: "document",
  title: "Blog of Victor Buarque",
  icon: CalendarIcon, // To have this icons need to install: pnpm add @sanity/icons
  groups: [
    { name: "details", title: "Details" }, //Will create tabs in the studio to better visualization.
    { name: "contents", title: "Content" },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title of blog article",
      group: ["details", "contents"],
      components: {
        input: TitleInput, // we could create personalized components with react
      },
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug of blog article",
      description: "This will generate a unique slug name",
      options: {
        source: "title",
      },
      hidden: ({ document }) => !document?.title, //Will hide this field if dont have a title
      validation: (rule) => rule.required().error(`You must provide a slug`), //validation rules to block advance without fill the right fields
      group: ["details"],
    }),
    defineField({
      name: "image",
      type: "image",
      group: ["contents"],
    }),
    defineField({
      name: "smallDescription",
      description: "One small description of the post",
      type: "text",
      title: "Small Description",
      group: ["details"],
    }),
    defineField({
      name: "content",
      description: "The main content of the blog post",
      type: "array",
      title: "Content",
      of: [
        {
          type: "block",
        },
      ],
      group: ["contents"],
    }),
    defineField({
      name: "date",
      type: "datetime",
      title: "Date of blog",
      description: "The publication date of the blog post.",
      options: {
        dateFormat: "DD MMMM, YYYY",
        timeFormat: "HH:mm",
      },
      group: ["details"],
    }),
  ],
  preview: {
    select: {
      title: "title",
      image: "image",
      description: "smallDescription",
      date: "date",
    },
    prepare({ title, image, description, date }) {
      const nameFormatted = title || "Untitled title";
      const dateFormatted = date
        ? new Date(date).toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
          })
        : "No date";
      const descriptionFormatted = description || "No description";

      return {
        title: nameFormatted,
        subtitle: descriptionFormatted
          ? `${descriptionFormatted} at ${dateFormatted}`
          : dateFormatted,
        media: image || CalendarIcon,
      };
    },
  },
});
