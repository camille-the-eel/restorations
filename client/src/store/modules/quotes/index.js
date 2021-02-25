export default {
  namespaced: true,
  state() {
    return {
      quoteRequests: [],
    };
  },
  getters: {
    readQuoteRequests(state) {
      return state.quoteRequests;
    },
  },
  mutations: {
    createQuoteRequest(state, data) {
      state.quoteRequests.push(data);
    },
  },
  actions: {
    normalizeQuoteRequest(context, payload) {
      const formData = {
        id: "testing",
        firstName: payload.contact.firstName,
        lastName: payload.contact.lastName,
        email: payload.contact.email,
        phone: payload.contact.phone,
        address1: payload.contact.addressLine1,
        address2: payload.contact.addressLine2,
        city: payload.contact.city,
        state: payload.contact.state,
        zipCode: payload.contact.zipCode,
        make: payload.firearm.make,
        model: payload.firearm.model,
        serialNumber: payload.firearm.serialNumber,
        workType: payload.work.type,
        workDescription: payload.work.description.text,
      };
      context.commit("createQuoteRequest", formData);
    },
  },
};
