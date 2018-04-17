<template>
    <div class="listItem">
        <div class="listHead">
            <image class="userPic" src="https://avatars3.githubusercontent.com/u/29355109?v=4&s=120"/>
            <div class="userInfo">
                <text>{{listItem.name}}</text>
                <text>{{listItem.time}}</text>
            </div>
        </div>
        <div class="listbody">
            <text>{{listItem.title}}</text>
        </div>
        <div class="listbottom">
            <div class="gridItem">
                <text class="font" :style="{fontFamily:'iconfont',color:'red'}">
                    {{fontName}}
                </text>
                <text>
                    {{listItem.view}}
                </text>
            </div>
            <div class="gridItem">
                <text class="font" :style="{fontFamily:'iconfont',color:'red'}">
                    {{fontName}}
                </text>
                <text>{{listItem.commentNum}}</text>
            </div>
            <div class="gridItem">
                <text>{{listItem.timeBefore}}</text>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
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
        flex-flow: row;
        justify-content: center;
        flex:1;
        border-right: 1px solid #ddd;
        align-content: flex-start
    }
    .font{
        width: 60px;
        font-size:40px;
    }
</style>
