<template>
  <div class="topbar">
      <text v-for="(itme, index) in itemData" class="topbarItem" :class="{'topbarItemactive': active===index}" :key="itme.id" @click="tabChange(index)" >{{itme.name}}</text>
  </div>
</template>
<script>
export default {
  name: 'topBar',
  data () {
    return {
      active: 0,
      itemData: [
        {
          name: '全部',
          id: 'all'
        },
        {
          name: '精华',
          id: 'good'
        },
        {
          name: '分享',
          id: 'share'
        },
        {
          name: '招聘',
          id: 'job'
        }
      ]
    }
  },
  methods: {
    tabChange (index) {
      this.active = index
      this.$parent.params.tab = 'ask'
      this.$parent.fetchData()
    }
  }
}
</script>
<style>
    .topbar{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        height: 80px;
        flex: 1;
        flex-direction: row;
        background: #fff;
        border-bottom: 1px solid #ddd;
    }
    .topbarItem {
        line-height: 80px;
        color: #333;
        font-size: 14px;
        flex: 1;
        align-self: center;
        text-align: center;
        border-bottom: 3px solid transparent
    }
    .topbarItemactive {
      border-bottom-color: #3eb4ff
    }
</style>
