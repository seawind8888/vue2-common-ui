<template>
  <div>
    <router-link v-for="(link, index) in routerList" :key="index" :to="link.path">
      <Cell :cell-name="link.name"></Cell>
    </router-link>
  </div>
</template>
<script>
  import Cell from './Cell/Cell'
  import RouterList from '../routes'
  export default {
    name: 'Index',
    components: {
      Cell
    },
    data() {
      return {
        routerList: RouterList
      }
    },
    created: () => {
      console.log(RouterList)

    }
  }

</script>
<style>
   a{
     text-decoration: none;
   }

</style>
