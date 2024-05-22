import { defineType, defineField } from "sanity";

export const blogType = defineType({
    name: 'blog',
    type: 'document',
    title: 'Blog of Victor Buarque',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title of blog article',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug of blog article',
            options: {
                source: 'title'
            }
        }),
        defineField({
            name: 'titleImage',
            type: 'image',
        }),
        defineField({
            name: 'smallDescription',
            type: 'text',
            title: 'Small of blog',
        }),
        defineField({
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block',
                }
            ]
        })
    ],
})