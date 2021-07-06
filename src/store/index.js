import { createStore } from "vuex";
import createPlugin from "logrocket-vuex";
import LogRocket from "logrocket";
const logrocketPlugin = createPlugin(LogRocket);

const store = createStore({
  plugins: [logrocketPlugin],
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

export default store;
