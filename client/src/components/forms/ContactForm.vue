<template>
<div>
  <base-modal v-if="resetModal" version="reset">
    <h3>Confirm Reset</h3>
    <p>Are you sure you want to clear all input?</p>
    <button class="no-emphasis" @click="confirmReset">Yes, clear it.</button>
    <button class="high-emphasis" ref="modalFocus" @click="denyReset">No, keep my input.</button>
  </base-modal>
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
        <div class="text">
          <label for="first-name">First Name:</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            required
            v-model.trim="contactForm.firstName"
          /><br />
        </div>
        <div class="text">
          <label for="last-name">Last Name:</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            required
            v-model.trim="contactForm.lastName"
          /><br />
        </div>
        <div class="email">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            v-model.trim="contactForm.email"
          /><br />
          <label for="email-re">Re-enter Email:</label>
          <input
            type="email"
            id="email-re"
            :class="errorClass.eEmail"
            required
            v-model.trim="validate.vEmail"
            @focus="clearErrorClass('eEmail')"
          /><br />
        </div>
        <div class="phone">
          <label for="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            v-mask="'(###)###-####'"
            v-model.trim="contactForm.phone"
          /><br />
          <label for="phone-re">Re-enter Phone Number:</label>
          <input
            type="tel"
            id="phone-re"
            :class="errorClass.ePhone"
            required
            v-mask="'(###)###-####'"
            v-model.trim="validate.vPhone"
            @focus="clearErrorClass('ePhone')"
          /><br />
        </div>
        <div class="text">
          <label for="subject">Subject Line:</label>
          <input
            type="text"
            id="subject"
            required
            v-model.trim="contactForm.subject"
          />
        </div>
        <div class="textarea">
          <label for="message">Message:</label>
          <textarea
            name="message"
            id="message"
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
        <div class="action">
          <input
            type="reset"
            value="Reset"
            @click.prevent="resetRequest"
          />
        </div>
        <div class="action">
          <input type="submit" value="Submit" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";

export default {
  directives: { mask },
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
      resetModal: false,
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

      // iterates through each object field by name (key = name)
      Object.keys(this.contactForm).forEach(function(key) {
        self.contactForm[key] = "";
        //"this" used here would refer to "Object.keys" (hence why we need self)
      });

      Object.keys(this.validate).forEach(function(key) {
        self.validate[key] = "";
      });
    },
    resetRequest() {
      this.resetModal = true;
    },
    denyReset() {
      this.resetModal = false;
    },
    confirmReset() {
      this.resetErrors();
      this.clearForm();
      this.resetModal = false;
    }
  },
};
</script>

<style scoped>
.error-active {
  color: red;
}

form .testing {
  background: #fff;
}
</style>
