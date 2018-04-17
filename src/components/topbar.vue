<template>
  <div class="topbar">
      <text v-for="itme in itemData" class="topbarItem" :key="itme.id">{{itme.name}}</text>
  </div>
</template>
<script>
export default {
  name: 'topBar',
  data () {
    return {
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
  }
}
</script>
<style>
    .topbar{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 80px;
        flex:1;
        flex-direction: row;
        justify-content: space-around;
        background: #fff;
        border-bottom: 1px solid #ddd;
    }
    .topbarItem {
        line-height: 80px;
        color: #333;
        font-size: 14px;
    }
</style>
