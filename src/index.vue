<template>
  <div class="wrapper">
    <TopBar />
    <div class="listWrap">
      <listItem v-for="item in listData" :listItem="item"/>
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
          title: '1111111',
          time: '11111'
        },
        {
          title: '2222',
          time: '11111'
        }
      ]
    }
  }
}
</script>

<style scoped>
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
