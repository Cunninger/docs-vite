import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',// 自定义域名配置这样配置.
  title: "游晓竹",
  description: "A memory site",
  head: [["link", { rel: "icon", href: "/img/sqp.png" }]],
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
          // 前端布局设置英文:front-layout-setting
          { text: '前端布局设置', link: '/article/backmanage/front-layout-setting' },
          { text: 'backmanage', link: '/backmanage' },
          { text: '增加可伸缩侧边栏', link: '/article/backmanage//addsidebar' },
        ]
      },
      {
        text: '开发常见问题',
        collapsed: false, // 设置为 false 表示默认情况下是展开的
        items: [
          { text: 'vitepress的public', link: '/article/dev-question/vitepresspublic' },
        ]
      },
      {
        text: '建站Record',
        collapsed: false, // 设置为 false 表示默认情况下是展开的
        items: [
          { text: '增加时间记录', link: '/article/makesiteideas/addTime' },
        ]
      },

      {
        text: '有趣的项目',
        collapsed: false, // 设置为 false 表示默认情况下是展开的
        items: [
          { text: '汇总', link: '/article/interesting-project/index' },
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
