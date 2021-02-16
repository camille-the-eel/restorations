<template>
  <div>
    <!-- TO DO -->
    <!-- saves to message center, sends notification email -->
    <!-- post req handled through vuex action -->
    <h1>Contact Us</h1>
    <p>
      Any quote requests sent through this form will be ignored.
      <br />
      If you are looking for a quote, please see our
      <router-link to="/request-quote">'Request a Quote'</router-link> page.
    </p>
      <contact-form @store-data="storeData"></contact-form>
    <p>{{ checkStore }}</p>
  </div>
</template>

<script>
import ContactForm from '../../components/forms/ContactForm.vue';

export default {
  components: { 
    ContactForm, 
  },
  methods: {
    storeData(payload) {
      this.$store.dispatch('contact/normalizeContactRequest', payload);
    },
  },
  computed: {
  checkStore() {
     return this.$store.getters['contact/readCheck'];
  }
  }
};
</script>

<style scoped>

</style>
