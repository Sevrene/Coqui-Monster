const schemaTypes = [];

const schemaFiles = require.context('.', true, /\.js$/);
schemaFiles.keys().forEach((fileName) => {
  if (fileName === './index.js') return; // ignore the current file
  schemaTypes.push(schemaFiles(fileName).default);
});

export { schemaTypes };

// TODO: Consider moving some sections into an ignored abstract folder

//import SiteConfig from './siteConfig';

//export const schemaTypes = [SiteConfig];
