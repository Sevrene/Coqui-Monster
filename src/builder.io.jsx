import { builder, Builder } from '@builder.io/react';
import BuilderComponents from './components/Builder.io Components';

const apiKey = process.env.REACT_APP_BUILDER_IO_ACCESS_TOKEN;

if (!apiKey) {
  console.error("Builder.io API key not found. Please create a .env with a valid API key to continue.");
}
else {
  builder.init(apiKey);
}

/**
  Builder Components
  @param {React.Component} component - The React component to register.
  All components from Builder.io Components folder are automatically imported under BuilderComponents.
  @param {Object} options - An object with properties defining the component's behavior and inputs.
  
  Properties for the Component Registration Object
  @property {string} name - The component name, a required property that specifies the name of the component as it will appear in the Builder editor.
  @property {string} image - An optional but highly recommended property that allows developers to set an image that will be displayed as a thumbnail for the component in the Builder editor.
  Utilize https://tabler-icons.io/ and copy the png download link
  @property {Array<Object>} inputs - An array of objects that defines the inputs that the component accepts. Each object in the array represents an input and can contain properties such as name, type, and defaultValue.

  Full Documentation
  https://www.builder.io/c/docs/custom-components-input-types
*/
Builder.registerComponent(BuilderComponents.reactList, {
  name: 'React List',
  inputs: [{
    name: 'items',
    type: 'list',
    defaultValue: [{
      text: 'Item 1',
      MaterialIcon: false,
      icon: 'iconName',
      iconName: 'Home',
      link: 'https://www.google.com'
    }],
    subFields: [
      { name: 'text', type: 'text', required: true },
      { name: 'MaterialIcon', type: 'boolean'},
      { name: 'icon', type: 'file', showIf: `!options.get('MaterialIcon')` },
      { name: 'iconName', type: 'text', showIf: `options.get('MaterialIcon')` },
      { name: 'link', type: 'url', required: true },
    ],
  },],
  image: 'https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png'
});

Builder.registerComponent(BuilderComponents.twitchEmbed, {
  name: 'Twitch Embed',
  image: 'https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png'
});

Builder.registerComponent(BuilderComponents.basicTabs, {
  name: 'Basic Tabs',
  inputs: [
    {
      name: 'defaultTabIndex',
      type: 'number',
      defaultValue: 0,
      required: true,
    },
    {
      name: 'centered',
      type: 'boolean',
      defaultValue: false,
    },
    {
      name: 'tabs',
      type: 'list',
      subFields: [
        {
          name: 'label',
          type: 'text',
          defaultValue: 'New tab',
        },
        {
          name: 'content',
          type: 'uiBlocks',
          defaultValue: [],
        },
      ],
      defaultValue: [
        {
          label: 'Tab 1',
          content: [],
        },
      ],
    },
  ],
});

/*
Builder.registerComponent(BuilderComponents.contentCard, {
  name: 'Content Card',
  inputs: [{
      name: 'header',
      type: 'boolean',
      helperText: 'Include header section',
      defaultValue: false,
    },{
      name: 'headerSettings',
      friendlyName: 'Header Settings',
      type: 'object',
      showIf: `options.get('header')`,
      subFields: [{
        name: 'title',
        type: 'richText',
      },{
        name: 'subtitle',
        type: 'richText',
      }],
    },{
      name: 'media',
      type: 'boolean',
      helperText: 'Include media section',
      defaultValue: false,
    },{
      name: 'mediaSettings',
      type: 'object',
      showIf: `options.get('media')`,
      subFields: [{
        name: 'Type',
        type: 'text',
        enum: ['img', 'video', 'audio' ]
      },{
        name: 'source',
        type: 'text',
      }],
    },{
      name: 'raised',
      type: 'boolean',
      helperText: 'Render the card raised above the content behind it',
      defaultValue: false,
    },
  ],
});
*/