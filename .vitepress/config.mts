import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/wizard-of-zod-docs/',
  title: "Wizard of Zod",
  description: "Documentation for the Wizard of Zod Vue component.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: 'documentation/guide' },
    ],

    outline: {
      level: [2, 4] // Includes headings from h2 to h4
    },

    sidebar: [
      {
        text: 'Introduction',
        link: '/documentation/guide/',
        items: [
          { text: 'Getting Started', link: '/documentation/guide/getting-started' }
        ]
      },
      {
        text: 'API',
        link: '/documentation/api/',
        items: [
          { text: 'Props', link: '/documentation/api/props' },
          { text: 'Slots', link: '/documentation/api/slots' },
          { text: 'Events', link: '/documentation/api/events' },
          { text: 'Methods', link: '/documentation/api/methods' },
          { text: 'Types', link: '/documentation/api/types' }
        ]
      },
      {
        text: 'Customisation',
        items: [
          { text: 'i18n', link: '/documentation/customisation/i18n' },
          { text: 'Styling', link: '/documentation/customisation/styling' },
          {
            text: 'Templates',
            items: [
              {text: 'Layout', link: '/documentation/customisation/layout'},
              {text: 'Preview', link: '/documentation/customisation/preview'},
              {text: 'Progress Indicator', link: '/documentation/customisation/progress-indicator'},
            ]
          }
        ]
      },
      {
        text: 'Examples',
        collapsed: true,
        items: [
          { text: 'Kitchen Sink', link: '/documentation/examples/kitchen-sink' },
          {
            text: 'Layout',
            collapsed: true,
            items: [
              { text: 'Basic', link: '/documentation/examples/layout/basic' },
              { text: 'Default', link: '/documentation/examples/layout/default' }
            ]
          },
          {
            text: 'i18n',
            collapsed: true,
            items: [
              { text: 'Lang', link: '/documentation/examples/i18n/lang' },
              { text: 'Custom I18n', link: '/documentation/examples/i18n/custom-i18n' }
            ]
          },
          { text: 'Classes', link: '/documentation/examples/classes' },
          {
            text: 'Forms',
            collapsed: true,
            items: [
              { text: 'Two Steps', link: '/documentation/examples/forms/two-steps' },
              { text: 'Three Steps', link: '/documentation/examples/forms/three-steps' },
            ]
          },
          { text: 'Initial Answers', link: '/documentation/examples/initial-answers' },
          {
            text: 'Preview',
            collapsed: true,
            items: [
              { text: 'Cards', link: '/documentation/examples/preview/cards' },
              { text: 'List', link: '/documentation/examples/preview/list' },
              { text: 'Table', link: '/documentation/examples/preview/table' }
            ]
          },
          {
            text: 'Progress Indicator',
            collapsed: true,
            items: [
              { text: 'Bar', link: '/documentation/examples/progress-indicator/bar' },
              { text: 'Stepper', link: '/documentation/examples/progress-indicator/stepper' },
              { text: 'Custom', link: '/documentation/examples/progress-indicator/custom' }
            ]
          },
        ]
      },
      {
        text: 'Other Pages',
        items: [
          { text: 'Contributing', link: '/documentation/other/contributing' },
          { text: 'Code of Conduct', link: '/documentation/other/code-of-conduct' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FullStackSimon/wizard-of-zod' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Simon Kinsella'
    },

    editLink: {
      pattern: 'https://github.com/FullStackSimon/wizard-of-zod-docs/edit/master/:path'
    },

    lastUpdated: true
  }
})
