<template>
  <div>
    <p>saves to message center, sends notification email</p>
    <h1>Contact Us</h1>
    <p>
      Any quote requests sent through this form will be ignored.
      <br />
      If you are looking for a quote, please see our
      <router-link to="/request-quote">'Request a Quote'</router-link> page.
    </p>
    <form
      @submit.prevent
      action="form-handler-goes-here"
      id="c-form"
      class="contact"
    >
      <div class="form-control">
        <label for="c-first-name">First Name:</label>
        <input
          type="text"
          id="c-first-name"
          name="c-first-name"
          class="contact"
          required
        /><br />
        <label for="c-last-name">Last Name:</label>
        <input
          type="text"
          id="c-last-name"
          name="c-last-name"
          class="contact re"
          required
        /><br />
        <label for="c-email">Email:</label>
        <input
          type="email"
          id="c-email"
          name="c-email"
          class="contact"
          required
        /><br />
        <label for="c-email-re">Re-enter Email:</label>
        <input
          type="email"
          id="c-email-re"
          name="c-email-re"
          class="contact re"
          required
        /><br />
        <label for="c-phone">Phone Number:</label>
        <input
          type="tel"
          id="c-phone"
          name="c-phone"
          class="contact"
          required
        /><br />
        <label for="c-phone-re">Re-enter Phone Number:</label>
        <input
          type="tel"
          id="c-phone-re"
          name="c-phone-re"
          class="contact re"
          required
        /><br />
        <label for="c-message">Message:</label>
        <textarea
          name="c-message"
          id="c-message"
          cols="30"
          rows="10"
          form="c-form"
          placeholder="Type your message here."
          required
        ></textarea>
        <br />
        <button class="contact reset">Reset</button>
        <button class="contact submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>
