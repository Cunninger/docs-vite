要在`nav-top.vue`中增加控制侧边栏伸缩的按钮并修改现有代码，可以按以下步骤进行：

1. 在`nav-top.vue`中添加一个按钮来控制侧边栏的展开和收起。
2. 使用父组件中的状态来控制侧边栏的宽度。
3. 修改`layout.vue` ==父组件==以传递侧边栏状态到子组件。

以下是需要更改的代码部分：

### nav-top.vue

在`nav-top.vue`中添加一个按钮并绑定一个事件来控制侧边栏：

```html
<template>
  <el-container>
    <el-aside width="auto" class="header-logo tap">
      <img class="logo" src="@/assets/imgs/logo.png" alt="Logo" />
    </el-aside>
    <el-aside width="auto" class="header-logo tap">
      <el-avatar icon="el-icon-user-solid" class="headerLogo"></el-avatar>
    </el-aside>
    <el-button @click="toggleSidebar">{{ isCollapsed ? '展开' : '收起' }}</el-button>
  </el-container>
</template>

<script>
export default {
  props: {
    isCollapsed: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggle-sidebar');
    }
  }
};
</script>
```

### nav.vue

确保`nav.vue`接收`isCollapsed`作为prop并使用它来控制侧边栏的宽度：

```html
<template>
  <el-aside :width="isCollapsed ? '0px' : '200px'">
    <el-row class="tac">
      <el-col>
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-menu-item index="1" @click="goPage('home')">
            <i class="el-icon-menu"></i>
            <span slot="title">后台中心</span>
          </el-menu-item>
          <el-menu-item index="2" @click="goPage('order')">
            <i class="el-icon-s-order"></i>
            <span slot="title">订单列表</span>
          </el-menu-item>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>测试3</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">测试3-1</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="3" @click="goPage('user')">
            <i class="el-icon-user"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </el-aside>
</template>

<script>
export default {
  props: ['isCollapsed'],
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goPage(link) {
      if (link === "home") {
        this.$router.push("/").catch(error => error);
      } else if (link == "order") {
        this.$router.push("/order").catch(error => error);
      } else if (link === "user") {
        this.$router.push("/user").catch(error => error);
      }
    }
  }
};
</script>
```

### layout.vue

在`layout.vue`中管理侧边栏状态，并将其传递给子组件：

```vue
<style>
.el-main {
  background-color: #f5f7f9;
}

.el-header,
.el-footer {
  background-color: white;
  box-sizing: border-box;
  border-bottom: 1px solid #f5f1f1;
}

.el-container {
  height: 100%;
}
</style>

 <template>
  
  <el-container>
    <!-- header部分 -->
    <el-header>
      <navtop :is-collapsed="isCollapsed" @toggle-sidebar="toggleSidebar"></navtop>
    </el-header>
    <el-container>
       <!-- aside部分 -->
      <leftNav :is-collapsed="isCollapsed"></leftNav>
      <el-main>
         <!-- main部分 -->

        <router-view />
      </el-main>
      
    </el-container>
 
  </el-container>
  
</template>


 <script>
import navtop from "@/components/nav-top.vue";
import leftNav from "@/components/nav.vue";
export default {
  components: {
    navtop,
    leftNav
  },
  data() {
    return {
      isCollapsed: false
    };
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    }
  }
};
</script>

```

这样就完成了在`nav-top.vue`中添加按钮来控制侧边栏伸缩的功能，并通过`layout.vue`进行状态管理。

## 效果

![image-20240524201255078](/img/sidebar01.png)

![image-20240524201312963](/img/sidebar02.png)

==接下来优化展开按钮的位置和侧边栏缩略图== 





### 优化展开按钮位置

修改`nav-top`模板中排列顺序

```vue

<template>
  <el-container>
  
    <el-aside width="auto" class="header-logo tap">

      <img class="logo" src="@/assets/imgs/logo.png" alt="Logo" />
        // 修改这个按钮的排放顺序
      <el-button @click="toggleSidebar">{{ isCollapsed ? '展开' : '收起' }}</el-button>
        
    </el-aside>

    <el-aside width="auto" class="header-logo tap">
      <el-avatar icon="el-icon-user-solid" class="headerLogo"></el-avatar>
    </el-aside>

  </el-container>
</template>

```





![image-20240524201348130](/img/sidebar03.png)



- 可能会出现不能完全与侧边栏对齐的情况

  可以考虑更改侧边栏的宽度

```vue
<!-- 左边的导航 -->
<style scoped>
.el-row {
    height: 100%;
}

.el-menu {
    border-right: none;
}

.el-aside {
    border-right: 1px solid #f5f1f1;
}
</style>

<template>
// 这里做一个简略的实现，收缩距离刚好卡在图标位置，充当缩略图了😂
  <el-aside :width="isCollapsed ? '53.5px' : '242px'">
//
      <el-row class="tac">
        <el-col>
          <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-menu-item index="1" @click="goPage('home')">
              <i class="el-icon-menu"></i>
              <span slot="title">后台中心</span>
            </el-menu-item>
            <el-menu-item index="2" @click="goPage('order')">
              <i class="el-icon-s-order"></i>
              <span slot="title">订单列表</span>
            </el-menu-item>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>测试3</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">测试3-1</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="4" @click="goPage('user')"> 
              <i class="el-icon-user"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
    props: ['isCollapsed'],
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      goPage(link) {
        if (link === "home") {
          this.$router.push("/").catch(error => error);
        } else if (link == "order") {
          this.$router.push("/order").catch(error => error);
        } else if (link === "user") {
          this.$router.push("/user").catch(error => error);
        }
      }
    }
  };
  </script>
  
  
```



