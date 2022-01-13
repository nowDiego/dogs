<template>
  <header>
    <div class="nav">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/favorite" class="notification">Favorite 
          <span v-if="lenghtFavorite>0"    class="badge">{{lenghtFavorite}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
   computed:{
  ...mapGetters(['lenghtFavorite'])
 },
}

</script>

<style scoped>
.nav { 
  height: 80px;
  background-image: radial-gradient(
    circle at 53.4% 37.33%,
    #7937f4 0,
    #592aea 50%,
    #2a1ee0 100%
  );
}
.nav ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    
}
.nav ul li {
    margin: 10px;
   
}
.nav a {
    font-size: 20px;
     color: white; 
}

.nav a:hover{
    color: rgba(255, 255, 255, 0.801);
}

.notification {
  padding: 15px 26px;
  position: relative;
  display: inline-block;
}

.badge {
  position: absolute;
  top: -2px;
  right: -5px;
  padding: 5px 10px;
  border-radius: 50%;
  background: white;
  color: rgba(51, 88, 209, 0.753);
  font-size: 15px;
  font-weight: 600;
}

</style>