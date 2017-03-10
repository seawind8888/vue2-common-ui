<template>
  <div class="cell-container">
    <div class="cell-left">
      {{cellName}}
    </div>
    <div class="cell-right">
      <img src="../../assets/img/come.png">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Cell',
    props: ['cell-name'],
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created: () => {

    }
  }

</script>
<style lang="scss" scoped>
  .cell-container {
    height: 6rem;
    display: flex;
    flex: 1;
    border-bottom: .05rem #dddddd solid;
    font-size:2rem
  }
  
  .cell-left {
    flex: 1;
    justify-content: center;
    display: flex;
    align-items: center;
  }
  
  .cell-right {
    width: 6rem;
    height: 6rem;
    justify-content: center;
    display: flex;
    align-items: center;
    img {
      width: 50%;
      height: 50%
    }
  }

</style>
