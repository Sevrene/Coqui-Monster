import { IconSwitch3 } from '@tabler/icons-react';
import { isSlug } from '../utils/validationHelpers';

const Redirects = {
  name: 'redirects',
  type: 'array',
  title: 'Redirects',
  description:
    'A list of redirects for the site. Will generate a new endpoint for each redirect.',
  of: [
    {
      type: 'object',
      title: 'Redirect',
      preview: {
        select: {
          title: 'internalName',
          slug: 'path.current',
        },
        prepare: ({ title, slug }) => ({
          title: title,
          subtitle: `/${slug}`,
          media: <IconSwitch3 />,
        }),
      },
      initialValue: {
        internalName: 'Redirect',
      },
      fields: [
        {
          name: 'internalName',
          type: 'string',
          title: 'Internal Name',
          description: 'The name of the redirect.',
          validation: (rule) => rule.required(),
        },
        {
          name: 'path',
          type: 'slug',
          title: 'Path',
          description: 'The path to redirect from.',
          validation: (rule) =>
            rule
              .required()
              .custom((slug) =>
                slug === undefined ? isSlug()('') : isSlug()(slug.current)
              ),
          options: {
            isUnique: (slug, context) => {
              const paths = context.document.redirects
                .filter((r) => r.path !== undefined)
                .map((r) => r.path.current);
              const uniquePaths = new Set(paths);
              return uniquePaths.size === paths.length;
            },
          },
        },
        {
          name: 'url',
          type: 'url',
          title: 'URL',
          description: 'The URL to redirect to.',
          validation: (rule) => rule.required(),
        },
      ],
    },
  ],
};

export default Redirects;
