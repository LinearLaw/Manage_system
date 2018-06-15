<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ name: 'Index' }">{{ $t('tabs.index')}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ $t('tabs.aftermarket_process')}}</el-breadcrumb-item>
    </el-breadcrumb>


    <div class="block">
      <el-tree
        :data="data5"
        show-checkbox
        node-key="id"
        default-expand-all
        :expand-on-click-node="false">
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>{{ node.label }}</span>
          <span>
            <el-button
              type="text"
              size="mini"
              @click="() => append(data)">
              Append
            </el-button>
            <el-button
              type="text"
              size="mini"
              @click="() => remove(node, data)">
              Delete
            </el-button>
          </span>
        </span>
      </el-tree>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AfterProcess',
  data () {
    return {
      data5:[]
    }
  },
  mounted:function(){
    let _this = this;
    let arr = [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{ id: 9, label: '三级 1-1-1'},{ id: 10,label: '三级 1-1-2' }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{ id: 5, label: '二级 2-1' }, { id: 6,label: '二级 2-2' }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{ id: 7, label: '二级 3-1' }, { id: 8, label: '二级 3-2' }]
      }];

    setTimeout(function(){
      _this.$set(_this.$data,'data5',arr);
    },1000);
  },
  methods: {
      append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
  }
}
</script>
<style scoped>

</style>
