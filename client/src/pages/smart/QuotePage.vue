<template>
  <div>
    <h1>Request a Quote</h1>
    <quote-form @store-data="storeData"></quote-form>
    <p>{{ checkStore }}</p>
  </div>
</template>

<script>
import QuoteForm from "../../components/forms/QuoteForm.vue";

export default {
  components: {
    QuoteForm,
  },
  methods: {
    storeData(payload) {
      this.$store.dispatch('quote/normalizeQuoteRequest', payload)
    }
  },
  computed: {
    checkStore() {
      return this.$store.getters['quote/readQuoteRequests'];
    }
  }
}
</script>