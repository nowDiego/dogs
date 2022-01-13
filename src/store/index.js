import { createStore } from 'vuex'

export default createStore({
  state: {
   favorite: JSON.parse(localStorage.getItem("favorite")) || []

  },
  mutations: {
    
    addFavorite(state, payload) {     
      state.favorite.push(payload)
      localStorage.setItem('favorite',JSON.stringify(state.favorite));
  },

  removeFavorite(state, payload) {     
    state.favorite = state.favorite.filter(item => item.id != payload.id)
    localStorage.setItem('favorite',JSON.stringify(state.favorite));
},

  },
  actions: {

    addFavorite(ctx, payload) {
      return new Promise((resolve) => {
        console.log(payload);
        ctx.commit('addFavorite', payload) 
        resolve(payload)    

      })
  },

  removeFavorite(ctx,payload) {
    return new Promise((resolve) => {
         ctx.commit('removeFavorite', payload) 
      resolve(payload)    

    })
},


  },

   getters :{
    favorite(state) {
        return state.favorite
    },
    lenghtFavorite(state){
        return state.favorite.length
    }
 
},


  modules: {
  }
})
