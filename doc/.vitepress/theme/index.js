import DefaultTheme from 'vitepress/theme'
import CurrentTime from './CurrentTime.vue' // 假设 CurrentTime.vue 与 index.js 位于同一目录

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('CurrentTime', CurrentTime)
  }
}
