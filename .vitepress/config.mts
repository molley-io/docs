import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Molley Docs',
  description: 'Documentation for Molley',
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/guide/' },
          { text: 'Installation', link: '/guide/installation' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Molley-io' }
    ]
  }
})
