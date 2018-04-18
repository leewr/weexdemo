<template>
  <div class="wrapper">
    <list class="listWrap" @loadmore="loadmore" loadmoreoffset="50">
      <cell v-for="item in listData" :key="item.id">
        <listItem :listItem="item"/>
      </cell>
      <loading class="loading" @loading="onloading" :display="loadinging ? 'show' : 'hide'">
        <text class="indicator-text">Loading ...</text>
        <loading-indicator class="indicator"></loading-indicator>
      </loading>
    </list>
    <TopBar />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import TopBar from '@/components/topBar.vue'
import listItem from '@/components/listItem.vue'
const stream = weex.requireModule('stream')
export default {
  name: 'home',
  components: {
    HelloWorld,
    TopBar,
    listItem
  },
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
      listData: [],
      loadinging: false,
      params: {
        page: 1,
        tab: '',
        limit: 10,
        mdrender: false
      }
    }
  },
  created () {
    // this.fetchData(this.params)
    const me = this
    stream.fetch({
      method: 'GET',
      url: `https://cnodejs.org/api/v1/topics?page=${this.params.page}&limit=${this.params.limit}&tab=${this.params.tab}`,
      type: 'json'
    }, res => {
      console.log(res)
      if (res.data.success) {
        console.log(me.listData.length - 1)
        if (me.listData.length && me.listData[me.listData.length - 1].error) {
          console.log()
          me.listDat.splice(me.listData.length - 1, 1)
        } else {
          this.loadinging = false
          me.params.page++
          me.listData.push(...res.data.data)
        }
      } else {
        me.listData.push({'error': 'request failed'})
      }
    })
  },
  methods: {
    fetchData () {
      const me = this
      stream.fetch({
        method: 'GET',
        url: `https://cnodejs.org/api/v1/topics?page=${this.params.page}&limit=${this.params.limit}&tab=${this.params.tab}`,
        type: 'json'
      }, res => {
        console.log(res)
        if (res.data.success) {
          console.log(me.listData.length - 1)
          if (me.listData.length && me.listData[me.listData.length - 1].error) {
            console.log()
            me.listDat.splice(me.listData.length - 1, 1)
          } else {
            this.loadinging = false
            me.params.page++
            me.listData.push(...res.data.data)
          }
        } else {
          me.listData.push({'error': 'request failed'})
        }
      })
    },
    loadmore () {
      console.log(1)
    },
    onloading () {
      console.log(2)
      this.loadinging = true
      this.fetchData()
    }
  }
}
</script>

<style>
  .wrapper {
    justify-content: flex-start;
    align-items: center;
  }
  .listWrap{
    margin-top: 75px;
    flex-direction:column;
    width: 100%;
    background: #eee;
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
