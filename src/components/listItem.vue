<template>
  <div class="listItem">
    <div class="listHead">
      <image class="userPic" :src="listItem.author.avatar_url"/>
      <div class="userInfo">
        <text>{{listItem.author.loginname}}</text>
        <text class="f30">{{listItem.create_at | formateTime}}</text>
      </div>
    </div>
    <div class="listbody" @click="viewDetail(listItem.id)">
      <text>{{listItem.title}}</text>
    </div>
    <div class="listbottom">
      <div class="gridItem">
        <div class="wrapicon">
          <image class="texticon" src="data:image/png;base64,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" />
        </div>
        <div class="viewtext">
          <text class="text">{{listItem.visit_count}}</text>
        </div>
      </div>
      <div class="gridItem">
        <div class="wrapicon">
          <image class="texticon" src="data:image/png;base64,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" />
        </div>
        <div class="viewtext flex2">
          <text class="text">{{listItem.reply_count}}</text>
        </div>
      </div>
      <div class="gridItem bdr-none">
        <text class="text">{{listItem.last_reply_at | formateTime}}</text>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import {dateFormate} from '@/utils/index.js'
import router from '@/router/router.js'
export default {
    name: 'listItem',
    data () {
      return {
        fontName: '\ue661'
      }
    },
    props: {
      listItem: {
          type: Object
      }
    },
    created () {
        // console.log(this.listItem)
    },
    methods: {
      viewDetail (id) {
        router.push('article')
      }
    },
    filters: {
      formateTime (val) {
          const time = new Date(val)
          return dateFormate('MM-dd hh:mm:ss', time)
      }
    }
}
</script>

<style type="text/css">
    .listItem{
        padding: 20px 24px 0 24px;
        margin-bottom: 20px;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        justify-content: flex-start;
        background: #fff
    }
    .listHead{
        justify-content:space-around;
        flex-flow: row;
    }
    .userPic{
        width: 80px;
        height: 80px;
        border-radius: 8px;
    }
    .userInfo{
        flex: 1;
        margin-left: 20px;
    }
    .listbody{
        padding: 10px 0;
        font-size: 30px;
        color:#000;
        border-bottom: 1px solid #ddd;
    }
    .listbottom{
        flex-flow:row;
    }
    .gridItem{
        height: 40px;
        margin: 20px 0;
        font-size: 24px;
        flex-flow: row;
        justify-content: center;
        flex:1;
        border-right: 1px solid #ddd;
        align-content: flex-start;
    }
    .wrapicon{
        flex: 2;
    }
    .texticon{
        width: 40px;
        height: 40px;
        align-self:flex-end;
    }

    .viewtext{
        flex: 3;
        line-height: 40px;
    }
    .flex2{
        flex: 2
    }
    .text{
        font-size: 24px;
        text-indent: 6px;
        line-height: 44px;
    }
    .bdr-none{
        border-right: none
    }
    .f30{
        font-size: 30px;
    }
</style>
