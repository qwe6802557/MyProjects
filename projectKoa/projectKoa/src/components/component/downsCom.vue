<template>
  <div class="downs-area">
    <div class="floor-title">{{floorTitle}}</div>
    <div class="downs-show">
      <div class="floor1">
        <img :src="floor1.image" alt="" width="100%">
      </div>
      <div class="downs-show-other">
        <div class="floor2">
          <img :src="floor2.image" alt="" width="100%">
        </div>
        <div class="floor3">
          <img :src="floor3.image" alt="" width="100%">
        </div>
      </div>
    </div>
    <div class="origin">
      <div v-for="(item,i) in floorDatas.slice(3)" :key="i">
        <img :src="item.image" alt="" width="100%" >
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "downsCom",
        props:['floorDatas','floorTitle'],
        data(){
          return{
            floor1:'',
            floor2:'',
            floor3:'',
          }
        },
      watch:{
          floorDatas(val){
            this.floor1=val[0]
            this.floor2=val[1]
            this.floor3=val[2]
          },
        floorTitle(val){
            this.floorTitle=val
    }
      }
    }
</script>

<style scoped>
  .floor-title{
    height: 1.8rem;
    line-height:1.8rem;
    font-size: 14px;
    text-align: center;
  }
  .downs-show{
    display: flex;
    flex-direction: row;
    background: #ffffff;
  }
  .floor1{
    border-right:  1px #dddddd solid;
  }
  .floor2{
    border-bottom: 1px #dddddd solid;
  }
  .origin{
    display: flex;
    flex-direction: row;
    border-top: 1px #dddddd solid;
    border-bottom:1px #dddddd solid;
  }
  .origin>div:nth-child(odd){
    border-right: 1px #dddddd solid;
  }
  .downs-area{
    background: white;
  }
  .floor-title{
    background: #eeeeee;
    color: black;
  }
</style>
