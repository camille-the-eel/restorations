<template>
  <div>
    <form
      id="c-form"
      class="contact"
      ref="contactForm"
      @submit.prevent="checkForm"
      action="form-handler-goes-here"
      method="post"
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
            :class="errorClass.eEmail"
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
          /><br />
        </div>
        <div>
          <small class="format-note">
            Please format your 10-digit phone number without any spaces or
            special characters. </small
          ><br />
          <label for="c-phone">Phone Number:</label>
          <input
            type="tel"
            id="c-phone"
            name="c-phone"
            pattern="[0-9]{10}"
            :class="errorClass.ePhone"
            required
            v-model.trim="contactForm.phone"
          /><br />
          <label for="c-phone-re">Re-enter Phone Number:</label>
          <input
            type="tel"
            id="c-phone-re"
            pattern="[0-9]{10}"
            :class="errorClass.ePhone"
            required
            v-model.trim="validate.vPhone"
          /><br />
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
            :class="errorClass.eMessage"
            required
            v-model.trim="contactForm.message"
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
export default {
  emits: ["store-data"],
  data() {
    return {
      errors: [],
      contactForm: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
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
      this.errors = [];

      if (this.contactForm.email != this.validate.vEmail) {
        this.errors.push("Email address inputs must match.");
        this.errorClass.eEmail = "error-active";
      }
      if (this.contactForm.phone != this.validate.vPhone) {
        this.errors.push("Phone number inputs must match.");
        this.errorClass.ePhone = "error-active";
      }
      if (this.contactForm.message.length <= 100) {
        this.errors.push("Please include more details in your message.");
        this.errorClass.eMessage = "error-active";
      }

      //form submission
      let formData = this.contactForm;
      console.log(formData);
      this.$emit("store-data", formData);
    },
    resetForm() {
      this.errors = [];
      this.errorClass.eEmail = null;
      this.errorClass.ePhone = null;
      this.errorClass.eMessage = null;
    },
  },
};
</script>

<style scoped>
.error-active {
  color: red;
}
</style>
