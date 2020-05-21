<template>
  <router-view></router-view>
</template>

<script>
import globalData from './utils/global_val'
export default {
  name: 'app',
  components: {
    
  },
  created:function(){
    this.get_windowsHeight()
  },
  methods:{
    get_windowsHeight:function(){
      globalData.windowsHeight=`${document.documentElement.clientHeight}`
      globalData.windowsWidth=`${document.documentElement.clientWidth}`
      console.log('窗口高度:'+globalData.windowsHeight)
      console.log('窗口宽度:'+globalData.windowsWidth)
      this.setRem()
    },
    //设置字体大小
    setRem:function(){
      if(document.documentElement.clientWidth<1920){
        `${document.documentElement.style.fontSize = "16px"}`
      }else if(document.documentElement.clientWidth>=1920){
        `${document.documentElement.style.fontSize = "21px"}`
      }
      console.log(document.documentElement.style.fontSize)
      //console.log()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  padding: 0;
  margin: 0;
}
*{
	margin:0;
	padding:0;
}
</style>
