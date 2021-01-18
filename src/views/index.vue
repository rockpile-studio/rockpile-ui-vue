<template>
  <div class="index-wrap">
    <div>
      <!-- 侧栏导航菜单 -->
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
               :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
      <!--        <div v-for="module in moduleTree">-->
      <!--          <h3>{{ module.name }}</h3>-->
      <!--          <ul>-->
      <!--            <li v-for="item in module.subtitles">-->
      <!--              <a :href="item.link">{{ item.name }}</a>-->
      <!--              &lt;!&ndash; span标签被用来组合文档中的行内元素 &ndash;&gt;-->
      <!--              <span v-if="item.hot" class="hot-tag">HOT</span>-->
      <!--            </li>-->
      <!--          </ul>-->
      <!--        </div>-->
    </div>

    <div class="index-right">

    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        isCollapse: true,
        moduleTree: [
          {
            name: '产品模块',
            link: '/module',
            subtitles: [
              {name: '新建流程服务', link: '/diagram-design', hot: true},
              {name: '拖拽服务', link: '/draggable', hot: false},
            ],
          },
        ],
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
  }
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .index-wrap {
    width: auto;
    margin: 20px auto;
    overflow: hidden;
  }

  .index-left {
    float: left;
    width: 300px;
    text-align: left;
  }

  .index-left-block .hr {
    margin-bottom: 20px;
  }

  .index-left-block h2 {
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }

  .index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }

  .index-left-block ul {
    padding: 10px 15px;
  }

  .index-left-block li {
    padding: 5px;
  }

  .index-right {
    float: left;
    width: 900px;
  }

  .hot-tag {
    background: red;
    color: #fff;
  }

</style>
