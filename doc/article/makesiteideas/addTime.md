要将上述 Vue 代码嵌入到 VitePress 的主页模板中，可以按照以下步骤操作。我们需要在 VitePress 的配置文件中添加 Vue 组件，然后引用这个组件使其显示在页面顶端。

首先，创建一个新的 Vue 组件文件，例如 `CurrentTime.vue`，并将 Vue 代码放入其中：

### `CurrentTime.vue`
```vue
<template>
  <div id="app">
    <h3>当前时间: {{ now }}</h3>
    <p>自上学以来已经过了: {{ count }} 天</p>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const now = ref(new Date().toLocaleString());
    const count = ref(0);

    onMounted(() => {
      const startDay = new Date("2022-09-01").getTime();
      const nowDay = new Date().getTime();
      count.value = Math.floor((nowDay - startDay) / (1000 * 60 * 60 * 24)) + 1;
      setInterval(() => {
        now.value = new Date().toLocaleString();
      }, 1000);
    });

    return {
      now,
      count
    };
  }
};
</script>
```

然后，在 VitePress 的配置文件（通常是 `docs/.vitepress/theme/index.js` 或 `docs/.vitepress/theme/index.ts`）中，注册这个组件。

### `index.js` 或 `index.ts`
```js
import DefaultTheme from 'vitepress/theme'
import CurrentTime from './CurrentTime.vue' // 假设 CurrentTime.vue 与 index.js 位于同一目录

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('CurrentTime', CurrentTime)
  }
}
```

接下来，在 `docs/index.md` 文件中，引用并使用这个组件：

### `docs/index.md`
```markdown
---
layout: home
hero:
  name: "游晓竹知识库"
  text: Focus-Insight-Share
  tagline: 个人技术知识库，记录 & 分享个人碎片化、结构化、体系化的技术知识内容。
  image:
    src: img/logo.png
    alt: 背景图
  actions:
    - theme: brand
      text: 快速开始
      link: /markdown-examples
    - theme: alt
      text: 在GitHub查看
      link: https://github.com/Cunninger/docs-vite

features:
  - icon:
      src: img/focus.png
    title: 保持专注
    details: “简单比复杂更难，你必须努力让你的想法变得清晰明了，让它变得简单。一旦你做到了简单，你就能搬动大山。” -- 乔布斯
  - icon:
      src: img/insight.png
    title: 善于洞察
    details: “我既没有突出的理解力，也没有过人的机智。只在觉察那些稍纵即逝的事物并对其进行精细观察的能力上，我可能在普通人之上。” -- 达尔文
  - icon:
      src: img/knowledge.png
    title: 乐于分享
    details: 关于分享，有形的物品越分越少，无形的知识越分越多。在记录与分享的过程中, 梳理所学, 交流所得, 必有所获。
---

<CurrentTime />

<div class="image-container">
  <img src="https://ghchart.rshah.org/cunninger" alt="cunninger 's Github chart"  class="styled-image" />
  <figcaption class="image-caption">我的 GitHub 代码贡献表</figcaption>
</div>

<style scoped>
.image-container {
  margin-top: 40px;
  margin-left: 250px
}

.styled-image {
  border: 2px solid #ccc;
  border-radius: 10px;
  max-width: 100%;
  height: auto;
}

.image-caption {
  margin-top: 10px;
  margin-left:250px;
  font-size: 14px;
  color: #666;
}
</style>
```