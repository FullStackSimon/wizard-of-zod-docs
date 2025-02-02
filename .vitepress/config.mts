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
      { text: 'Documentation', link: '/documentation/guide/' },
      { text: 'xExamples', link: '/markdown-examples' }
    ],

    outline: {
      level: [2, 4] // Includes headings from h2 to h4
    },

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Wizard of Zod?', link: '/documentation/guide/' },
          { text: 'Getting Started', link: '/documentation/guide/getting-started' },
          { text: 'Contributing', link: '/documentation/guide/contributing' },
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
        text: 'xExamples',
        items: [
          { text: 'xMarkdown Examples', link: '/markdown-examples' },
          { text: 'xRuntime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Other Pages',
        items: [
          { text: 'Code of Conduct', link: '/documentation/other/code-of-conduct' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
