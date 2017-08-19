import Vue from 'vue'
import Vuex from 'vuex'
import {dateFormat} from 'vux'

Vue.use(Vuex)

let now = new Date(dateFormat(new Date(), 'YYYY/MM/DD').split('/'))

const state = {
  isLoading: false,
  isShowFotter: true,
  headerConfig: {
    title: '',
    topTitle: '',
    showRight: false
  },
  user: {},
  system: {},
  room: {},
  order: {
    begin: now,
    end: new Date((new Date()).setDate(now.getDate()+1)),
    total_day: 1
  }
}
export default new Vuex.Store({
  state,
  mutations: {
    UPDATE_LOADING (state, payload) {
      state.isLoading = payload.isLoading
    },
    UPDATE_SHOW_FOTTER (state, payload) {
      state.isShowFotter = payload.isShowFotter
    },
    UPDATE_HEADER (state, payload) {
      for(let key in payload) {
        state.headerConfig[key] = payload[key]
      }
    },
    UPDATE_USER (state, payload) {
      for(let key in payload) {
        state.user[key] = payload[key]
      }
    },
    UPDATE_SYSTEM (state, payload) {
      for(let key in payload) {
        state.system[key] = payload[key]
      }
    },
    UPDATE_ROOM (state, payload) {
      state.room = payload.room
    },
    UPDATE_ORDER (state, payload) {
      for(let key in payload) {
        state.order[key] = payload[key]
      }
    }
  }
})
