function fakeFetch() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Open up pages/index.js to start working on your app!'), 1000);
  });
}

export default {
  namespace: 'foo',
  state: {
    text: '',
  },
  subscriptions: {
    setup({dispatch}) {
      dispatch({
        type: 'fetch',
      });
    },
  },
  effects: {
    *fetch(action, {call, put}) {
      const text = yield call(fakeFetch);
      yield put({
        type: 'fulfill',
        payload: {
          text,
        },
      });
    },
  },
  reducers: {
    fulfill(state, action) {
      // dva-immer
      state.text = action.payload.text;
    },
  },
};
