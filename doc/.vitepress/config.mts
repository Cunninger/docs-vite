import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'src',
  base: '/',// 自定义域名配置这样配置.
  title: "游晓竹",
  description: "A memory site",
  head: [["link", { rel: "icon", href: "public/image/sqp.png" }]],
  themeConfig: {
    outlineTitle: '文章目录',
    outline: [2,6],


    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [


      {

        text: 'Vue后台管理系统',
        collapsed: false, // 设置为 false 表示默认情况下是展开的
        items: [
          { text: '前端布局设置', link: '/前端布局设置' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'introduce', link: '/introduce' },
          { text: 'backmanage', link: '/backmanage' }
        ]
      },
      {
        text: 'Another Group',
        collapsed: false, // 设置为 false 表示默认情况下是展开的
        items: [
          { text: 'Item 1', link: '/another-group/item1' },
          { text: 'Item 2', link: '/another-group/item2' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Cunninger' }
    ],

    footer: {
      copyright: "<strong>Copyright @ 2024 You Xiao Zhu</strong>"
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  }
})
