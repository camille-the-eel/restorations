export default {
  namespaced: true,
  state() {
    return {
      contactRequests: [
        {
        id: 'testing-01',
        firstName: 'Camille',
        lastName: 'Hughes',
        email: 'camille@zmail.com',
        phone: '7771112222',
        message: 'Hello! Welcome to your message center. Here you will find all the contact requests from your users.',
        read: false,
        }
      ]
    }
  },
  getters: {
    readContactRequests(state) {
      return state.contactRequests;
    },
    readCheck(state) {
      return state.contactRequests;
    }
  },
  mutations: {
    createContactRequest(state, data) {
      state.contactRequests.push(data);
    }
  },
  actions: {
    normalizeContactRequest(context, payload) {
      const formData = {
        id: 'testing',
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        phone: payload.phone,
        message: payload.message,
        read: false
      }
      context.commit('createContactRequest', formData);
    }
  },
}