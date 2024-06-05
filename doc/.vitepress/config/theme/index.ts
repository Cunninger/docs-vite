import DefaultTheme from 'vitepress/theme'
import './styles/vars.css';
import './styles/custom.css';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // extend default theme custom behaviour.
    DefaultTheme.enhanceApp(ctx);

    // 全局挂载 API 接口

    // register your custom global components
    // ctx.app.component('MyGlobalComponent' /* ... */)
  }
}