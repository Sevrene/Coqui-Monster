import Redirects from './redirects';

const SiteConfig = {
  name: 'siteConfig',
  type: 'document',
  title: 'Site Configuration',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site Title',
      description: 'The title of the site.',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Site Description',
      description: 'The description of the site.',
    },
    Redirects,
  ],
};

export default SiteConfig;
