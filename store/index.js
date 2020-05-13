export const state = () => ({
  reset_token: null,
  valid_token: true,
  active: 'dashboard',
  users: [],
  options: ['hey','new','test'],
});
export const mutations = {
  SET_TOKEN(state, reset_token) {
    state.reset_token = reset_token
  },
  SET_VALID_TOKEN(state, valid_token) {
    state.valid_token = valid_token;
  },
  SET_ACTIVE(state, active) {
    state.active = active;
  },
  SET_USERS(state, users) {
    state.users = users;
  }
};
