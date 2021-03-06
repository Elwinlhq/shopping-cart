import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: []
    },

    getters: {
        productsCount (){

        }
    },

    mutations: {
        setProducts(state, products){
            state.products = products
        }
    }
})