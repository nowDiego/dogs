<template>   
    <ListFavorite :list="favorite" />
  
</template>

<script>
import ListFavorite from '@/components/ListFavorite.vue'
import {mapGetters} from 'vuex'
export default {
   computed:{
  ...mapGetters(['favorite','lenghtFavorite'])
 },
 components: {
  ListFavorite
  }


}
</script>

<style>

</style>


