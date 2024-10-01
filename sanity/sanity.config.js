'use client';

import { defineConfig } from 'sanity';
import logo from '/public/images/brand/logo/3amLogo.svg';
import { schemaTypes } from './schemas';
import { structureTool } from 'sanity/structure';

const singletonActions = new Set(['publish', 'discardChanges', 'restore']);
const singletonTypes = new Set(['siteConfig']);

export default defineConfig({
  title: 'Coqui.Monster',
  basePath: '/admin',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  icon: logo, // TODO: Make this a Coqui logo
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Config')
              .id('siteConfig')
              .child(
                S.document().schemaType('siteConfig').documentId('siteConfig')
              ),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
