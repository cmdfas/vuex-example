import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todoList: [
      { id: 1, text: 'todo1', done: true },
      { id: 2, text: 'todo2', done: false },
    ]
  },
  getters: {
    doneTodoList: state => {
      return state.todoList.filter(todo => todo.done)
    },
    doneTodoListCount: (state, getters) => {
      return getters.doneTodoList.length
    },
    getTodoById: (state) => (id) => {
      return state.todoList.find(todo => todo.id === id)
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    incrementN (state, n) {
      state.count += n
    },
    incrementAny (state, payload) {
      state.count += payload.num
    },
    decrement (state) {
      state.count--
    },
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    incrementDest ({commit}) {
      commit('increment')
    },
    incrementAsync ({commit}) {
      setTimeout(() => {
        commit('increment')
      }, 1500)
    },
    incrementAnyAsync ({commit}, payload) {
      setTimeout(() => {
        commit('incrementAny', payload)
      }, 1500)
    },
    actionA ({commit}) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment')
          resolve()
        }, 1000)
      })
    },
    actionB ({dispatch, commit}) {
      return dispatch('actionA').then(() => {
        commit('incrementAny', {
          num: 10
        })
      })
    },
    async actionC ({dispatch, commit}) {
      await dispatch('actionA')
      commit('incrementAny', {
        num: 20
      })
    }


  },
  modules: {
    cart,
    products
  }
})
