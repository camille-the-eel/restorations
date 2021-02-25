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
        subject: 'Welcome to the message center!',
        message: 'Hello! Here you will find all the contact requests from your users.',
        // read: false,
        // resolved: false ... or other filters? 
        }
      ]
    }
  },
  getters: {
    readContactRequests(state) {
      return state.contactRequests;
    },
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
        subject: payload.subject,
        message: payload.message,
      }
      context.commit('createContactRequest', formData);
    }
  },
}