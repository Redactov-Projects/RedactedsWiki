import { defineConfig } from 'vitepress'
const telegramSvg = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`;
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Redacted's Wiki",
  description: "Wiki for Brick Rigs things",
  
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/',
      themeConfig: {
        nav: [
          { text: 'Brick Rigs', items:[
            {text: 'Modding',link: '/br/modding'},
            { text: 'API', link: '/br/api' },
            { text: 'Other guides', link: '/br/guides' }
          ] },
          { text: 'Support', link: '/support' },
          { text: 'Authors', link: '/authors' }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/Redactov-Projects/RedactedsWiki' }
        ],
        footer: {
          message: '',
          copyright: '© 2024 – 2025, Redactov P'
        }
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      link: '/ru/',
      themeConfig: {
        nav: [
          { text: 'Brick Rigs', items:[
            {text: 'Моддинг',link: '/ru/br/modding'},
            { text: 'API', link: '/ru/br/api' },
            { text: 'Другие гайды', link: '/ru/br/guides' }
          ] },
          { text: 'Поддержать', link: '/ru/support' },
          { text: 'Авторы', link: '/ru/authors' }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/Redactov-Projects/RedactedsWiki' },
          { icon: { svg: telegramSvg }, link: 'https://t.me/red1ctedxd00' },
        ],
        footer: {
          message: '',
          copyright: '© 2024 – 2025, Редактов П'
        }
      }
    }
  },
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    search: {
      provider: 'local'
    },
    

    sidebar: {
      '/btsl/': [
      {
        text: 'Brick Tools & Server Library',
        items: [
          { text: 'What are Brick Tools and Server Library', link: '/btsl/what-are-brick-tools-and-server-library' },
          {
            text: "Redacted's Server Library",
            items: [
              { text: 'Commands', link: '/btsl/rsl/commands' },
              { text: 'Getting started', link: '/btsl/rsl/getting-started' },
              { text: 'Custom sounds', link: '/btsl/rsl/custom-sounds' },
              { text: 'Custom meshes', link: '/btsl/rsl/custom-models' },
              { text: 'Custom animations', link: '/btsl/rsl/custom-animations' },
              { text: 'Cooking content', link: '/btsl/rsl/content-cook' },
    
            ]
          }
        ]
      }
        
    ],
    '/ru/btsl/': [
      {
        text: 'Brick Tools & Server Library',
        items: [
          { text: 'Что такое Brick Tools и Server Library?', link: '/ru/btsl/what-are-brick-tools-and-server-library' },
          {
            text: "Redacted's Server Library",
            items: [
              { text: 'Команды', link: '/ru/btsl/rsl/commands' },
              { text: 'Первые шаги', link: '/ru/btsl/rsl/getting-started' },
              { text: 'Кастомные звуки', link: '/ru/btsl/rsl/custom-sounds' },
              { text: 'Кастомные модели', link: '/ru/btsl/rsl/custom-models' },
              { text: 'Кастомные анимации', link: '/ru/btsl/rsl/custom-animations' },
              { text: 'Приготовление контента', link: '/ru/btsl/rsl/content-cook' },
    
            ]
          }
        ]
      }
    ],
    '/ru/': [
      {
        text: ''
      }
    ],
    '/': [
      {
        text: ''
      }
    ]
    }

  }
})
