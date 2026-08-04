import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';


const entries = defineCollection({

  loader: glob({

    pattern: '**/*.md',

    base: './src/content/entries',

  }),


  schema: z.object({

    title: z.string(),

    date: z.coerce.date(),


    description: z.string().optional(),


    cover: z.string().optional(),


    type: z.enum([

      'work',

      'lab',

      'note',

      'gallery',

    ]),


    category: z.string().optional(),


    tags: z.array(z.string()).optional(),


    tools: z.array(z.string()).optional(),


    featured: z.boolean().optional(),


  })

});


export const collections = {

  entries,

};