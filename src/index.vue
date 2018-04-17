<template>
  <div class="wrapper">
    <TopBar />
    <div class="listWrap">
      <listItem v-for="item in listData" :listItem="item" :key="item"/>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import TopBar from '@/components/topBar.vue'
import listItem from '@/components/listItem.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    TopBar,
    listItem
  },
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
      listData: [
        {
          title: 'React Native 初始化项目运行报错',
          name: 'Hyurl',
          time: '20180417',
          view: 2209,
          commentNum: 22,
          timeBefore: '1小时前'
        },
        {
          title: '新手爬虫，教你如何爬掘金（一）',
          name: 'fruit-memory',
          time: '20180417',
          view: 1102,
          commentNum: 11,
          timeBefore: '2小时前'
        }
      ]
    }
  }
}
</script>

<style>
  @font-face {
    font-family: 'iconfont';  /* project id 267539 */
    src: url('//at.alicdn.com/t/font_267539_fkwl88carr7ldi.eot');
    src: url('//at.alicdn.com/t/font_267539_fkwl88carr7ldi.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_267539_fkwl88carr7ldi.woff') format('woff'),
    url('//at.alicdn.com/t/font_267539_fkwl88carr7ldi.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_267539_fkwl88carr7ldi.svg#iconfont') format('svg');
  }
  .wrapper {
    justify-content: flex-start;
    align-items: center;
  }
  .listWrap{
    margin-top: 79px;
    flex-direction:column;
    width: 100%;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
