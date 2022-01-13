<template>
   <Header/>   
    <main><router-view/></main>
       <Footer/>


</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: { Header,Footer },
 
}
</script>

<style>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

main{
  min-height: 80vh;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a{
  text-decoration: none;
}

</style>
