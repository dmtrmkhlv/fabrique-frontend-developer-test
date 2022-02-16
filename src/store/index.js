import {
  createStore
} from 'vuex'

const API_URL = 'http://localhost:8080';

export default createStore({
  state: {
    quizSelectList: [],
    quizList: [],
  },
  getters: {
    getQuizSelectList(state) {
      return [...state.quizSelectList];
    }
  },
  mutations: {
    addQuizList(state, payload) {
      state.quizList = [...payload];
    },
    changeQuizList(state, payload) {
      let index = state.quizList.findIndex((quiz) => payload.quize_id == quiz.quize_id);
      state.quizList[index] = payload;
    },
    removeFromQuizList(state, id) {
      let index = state.quizList.findIndex((quiz) => id == quiz.quize_id);
      state.quizList.splice(index, 1);
    },
  },
  actions: {
    fetchQuizSelectList({
      commit
    }) {
      return fetch(`${API_URL}/quizeSelect`)
        .then((response) => response.json())
        .then((data) => {
          commit('addQuizSelectList', data);
        })
    },
    addToQuizList({
      commit
    }, quize) {
      return fetch(`${API_URL}/quize`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(quize)
        })
        .then((response) => {
          if (response.status == 200) {
            commit('addQuizList', quize);
          }
          return response.status;
        })
    },
    deleteFromeQuizList({
      commit
    }, id) {
      return fetch(`${API_URL}/quize/${id}`, {
          method: 'DELETE'
        })
        .then((response) => {
          if (response.status == 200) {
            commit('removeFromQuizList', id);
          }
        })
    },
  }
})