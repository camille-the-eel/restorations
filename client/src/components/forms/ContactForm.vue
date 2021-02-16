<template>
  <div>
    <form
      id="c-form"
      class="contact"
      ref="contactForm"
      @submit.prevent="checkForm"
    >
      <div class="form-errors" v-if="errors.length">
        <p>Please correct the following errors:</p>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </div>
      <div class="form-control contact">
        <div>
          <label for="c-first-name">First Name:</label>
          <input
            type="text"
            id="c-first-name"
            name="c-first-name"
            required
            v-model.trim="contactForm.firstName"
          /><br />
        </div>
        <div>
          <label for="c-last-name">Last Name:</label>
          <input
            type="text"
            id="c-last-name"
            name="c-last-name"
            required
            v-model.trim="contactForm.lastName"
          /><br />
        </div>
        <div>
          <label for="c-email">Email:</label>
          <input
            type="email"
            id="c-email"
            name="c-email"
            required
            v-model.trim="contactForm.email"
          /><br />
          <label for="c-email-re">Re-enter Email:</label>
          <input
            type="email"
            id="c-email-re"
            :class="errorClass.eEmail"
            required
            v-model.trim="validate.vEmail"
            @focus="clearErrorClass('eEmail')"
          /><br />
        </div>
        <div>
          <label for="c-phone">Phone Number:</label>
          <input
            type="tel"
            id="c-phone"
            name="c-phone"
            required
            v-mask="'(###)###-####'"
            v-model.trim="contactForm.phone"
          /><br />
          <label for="c-phone-re">Re-enter Phone Number:</label>
          <input
            type="tel"
            id="c-phone-re"
            :class="errorClass.ePhone"
            required
            v-mask="'(###)###-####'"
            v-model.trim="validate.vPhone"
            @focus="clearErrorClass('ePhone')"
          /><br />
        </div>
        <div>
          <label for="c-subject">Subject Line:</label>
          <input
            type="text"
            id="c-subject"
            required
            v-model.trim="contactForm.subject"
          />
        </div>
        <div>
          <label for="c-message">Message:</label>
          <textarea
            name="c-message"
            id="c-message"
            cols="30"
            rows="10"
            form="c-form"
            placeholder="Type your message here."
            required
            :class="errorClass.eMessage"
            v-model.trim="contactForm.message"
            @focus="clearErrorClass('eMessage')"
          ></textarea>
          <br />
        </div>
        <div>
          <input type="reset" value="reset" @click="resetForm" />
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {mask} from 'vue-the-mask';

export default {
  directives: {mask},
  emits: ["store-data"],
  data() {
    return {
      errors: [],
      contactForm: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      },
      validate: {
        vEmail: "",
        vPhone: "",
      },
      errorClass: {
        eEmail: null,
        ePhone: null,
        eMessage: null,
      },
    };
  },
  methods: {
    checkForm() {
      this.validateForm();
      if (this.errors.length != 0) {
        return false;
      }
      let formData = this.contactForm;
      this.$emit("store-data", formData);

      this.clearForm();
    },
    validateForm() {
      this.errors = [];

      if (this.contactForm.email != this.validate.vEmail) {
        this.errors.push("Email address inputs must match.");
        this.errorClass.eEmail = "error-active";
      }
      if (this.contactForm.phone != this.validate.vPhone) {
        this.errors.push("Phone number inputs must match.");
        this.errorClass.ePhone = "error-active";
      }
      if (this.contactForm.message.length <= 50) {
        this.errors.push(
          "Please include more details in your message (minimum of 50 characters)."
        );
        this.errorClass.eMessage = "error-active";
      }
    },
    resetErrors() {
      this.errors = [];
      this.errorClass.eEmail = null;
      this.errorClass.ePhone = null;
      this.errorClass.eMessage = null;
    },
    clearErrorClass(input) {
      this.errorClass[input] = null;
    },
    clearForm() {
      var self = this;

      Object.keys(this.contactForm).forEach(function(key) {
        self.contactForm[key] = "";
      });

      Object.keys(this.validate).forEach(function(key) {
        self.validate[key] = "";
      });
    },
  },
};
</script>

<style scoped>
.error-active {
  color: red;
}
</style>
