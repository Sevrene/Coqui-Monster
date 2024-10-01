import { NextStudio } from 'next-sanity/studio';
import config from '/sanity/sanity.config.js';

export default function AdminPage() {
  return (
    <body>
      <NextStudio config={config} />
    </body>
  );
}
