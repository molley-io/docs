import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Molley',
  description: 'Your all-in-one platform for research, product development, and growth',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Molley',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/guide/' },
      { text: 'Features', link: '/features/' },
      { text: 'AI Assistant', link: '/ai/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/' },
            { text: 'Quick Start', link: '/guide/quick-start' },
            { text: 'Creating Your First Company', link: '/guide/first-company' },
            { text: 'Creating Projects', link: '/guide/projects' },
            { text: 'Browser Extension', link: '/guide/browser-extension' }
          ]
        }
      ],
      '/features/': [
        {
          text: 'Research',
          items: [
            { text: 'Overview', link: '/features/' },
            { text: 'Research Notes', link: '/features/research-notes' },
            { text: 'Knowledge Notebooks', link: '/features/knowledge-notebooks' },
            { text: 'Data Synthesis', link: '/features/data-synthesis' }
          ]
        },
        {
          text: 'Product Development',
          items: [
            { text: 'Product Wiki', link: '/features/product-wiki' },
            { text: 'Feature Ideas', link: '/features/feature-ideas' },
            { text: 'Feature Kanban', link: '/features/feature-kanban' },
            { text: 'Requirements', link: '/features/requirements' },
            { text: 'Bug Tracking', link: '/features/bugs' }
          ]
        },
        {
          text: 'Growth & Marketing',
          items: [
            { text: 'Outreach Tools', link: '/features/outreach-tools' },
            { text: 'Outreach Ideas', link: '/features/outreach-ideas' },
            { text: 'Marketing Plans', link: '/features/marketing-plans' },
            { text: 'CRM', link: '/features/crm' }
          ]
        },
        {
          text: 'Feedback',
          items: [
            { text: 'Feedback Forms', link: '/features/feedback-forms' }
          ]
        }
      ],
      '/ai/': [
        {
          text: 'Molley AI',
          items: [
            { text: 'Overview', link: '/ai/' },
            { text: 'Chat Interface', link: '/ai/chat' },
            { text: 'Context Awareness', link: '/ai/context' },
            { text: 'AI-Powered Features', link: '/ai/features' },
            { text: 'Group Conversations', link: '/ai/group-chat' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/molley-io/docs' }
    ],
    footer: {
      message: 'Built for solo entrepreneurs, sales teams, and product builders.',
      copyright: 'Copyright © 2024 Molley'
    }
  }
})
