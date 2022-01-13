<template>

<div class="flex-h">

  <div v-for="item in list" :key="item.id" class="card">
  <div class="card-image">
  <img :src="item.image.url" alt="">
  </div>
  <div class="card-content">
    <div class="card-name">
      {{item.name}}
    </div>
    <div class="card-height">
      {{item.height.imperial}}
    </div>
    <div class="card-temperament">
      {{item.temperament}}
    </div>
    <div class="card-life">
      {{item.life_span}}
    </div>
    <div class="card-favorite">
      <span class="like" @click="remove(item)">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" width="34px" height="34px"><path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 8.7070312 7.2929688 L 7.2929688 8.7070312 L 10.585938 12 L 7.2929688 15.292969 L 8.7070312 16.707031 L 12 13.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13.414062 12 L 16.707031 8.7070312 L 15.292969 7.2929688 L 12 10.585938 L 8.7070312 7.2929688 z"/></svg>
         </span>
    </div>
  
</div>
      

  </div>

</div>

</template>

<script>
import {mapActions} from 'vuex'

export default {
    data(){
        return{     
       data:{
         name:'diego'
       }
        }
    },
    methods:{

  ...mapActions(['removeFavorite']),

   remove: function (e) {
     this.removeFavorite(e);
    
   }

    },
     components: {
   
  },
  props:{
   list:Array
  }



}
</script>


<style scoped>

.flex-h{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  
}

.card{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 500px;
margin-top: 5%;
font-size: 20px;
font-weight: 600;
}

.card-image{
  width: 500px;
  height: 450px;

}

.card-image img{
  width: 100%;
  height: 100%;
}
.card-favorite{
  padding-top:5px
}
.like{
  cursor: pointer;
}

@media (max-width: 600px)
{
  .card{
    width: 100vw;
  }
  .card-image{
    width: 90%;
 height: 100%;
  }
  
}

</style>