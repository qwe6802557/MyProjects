<template>
  <div class="top-box">
    <div class="box-content">
      <div class="box-left">
        <span>{{title}}</span>
      </div>
      <div class="box-right">
        <span :style="{color}">{{number}}</span>
        <span class="number-line" :style="{backgroundColor: color}"/>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TopBox",
        props: ['title', 'color', 'number'],
        data(){
          return {

          }
      },
    }
</script>

<style scoped lang="less">
  .top-box {
    width: 168px;
    height: 48px;
    background-color: #e0e8f9;
    border-radius: 8px;
    margin-left: 24px;
    .box-content {
      padding: 0 16px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      .box-left {
        font-size: 12px;
        color: #5f8ac9;
      }
      .box-right {
        font-size: 24px;
        position: relative;
      }
      .number-line {
        display: block;
        width: 18px;
        height: 4px;
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
</style>
