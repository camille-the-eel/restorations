<template>
  <div>
    <base-modal v-if="resetModal" version="reset">
      <h3>Confirm Reset</h3>
      <p>Are you sure you want to clear all input?</p>
      <button class="no-emphasis" @click="confirmReset">Yes, clear it.</button>
      <button class="high-emphasis" ref="modalFocus" @click="denyReset">
        No, keep my input.
      </button>
    </base-modal>
    <form id="q-form" class="quote" ref="quoteForm" @submit.prevent="checkForm">
      <div class="form-errors" v-if="errors.length">
        <p>Please correct the following errors:</p>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </div>
      <div class="form-control quote">
        <div class="contact-info">
          <h3>Contact Information</h3>
          <div class="text">
            <label for="first-name">First Name:</label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              maxlength="35"
              required
              v-model.trim="quoteForm.contact.firstName"
            /><br />
          </div>
          <div class="text">
            <label for="last-name">Last Name:</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              maxlength="35"
              required
              v-model.trim="quoteForm.contact.lastName"
            /><br />
          </div>
          <div class="email">
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              maxlength="255"
              required
              v-model.trim="quoteForm.contact.email"
            /><br />
            <label for="email-re">Re-enter Email:</label>
            <input
              type="email"
              id="email-re"
              maxlength="255"
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
              maxlength="18"
              required
              v-mask="'(###)###-####x####'"
              v-model.trim="quoteForm.contact.phone"
            /><br />
            <label for="phone-re">Re-enter Phone Number:</label>
            <input
              type="tel"
              id="phone-re"
              :class="errorClass.ePhone"
              maxlength="18"
              required
              v-mask="'(###)###-####x####'"
              v-model.trim="validate.vPhone"
              @focus="clearErrorClass('ePhone')"
            /><br />
          </div>
          <div class="address">
            <!-- <h4>Address</h4> -->
            <label for="address-1">Address Line 1:</label>
            <input
              type="text"
              id="address-1"
              name="address-1"
              maxlength="255"
              required
              v-model.trim="quoteForm.contact.addressLine1"
            /><br />
            <label for="address-2">Address Line 2:</label>
            <input
              type="text"
              id="address-2"
              name="address-1"
              maxlength="255"
              v-model.trim="quoteForm.contact.addressLine2"
            /><br />
            <label for="city">City/County:</label>
            <input
              type="text"
              id="city"
              name="city"
              maxlength="100"
              required
              v-model.trim="quoteForm.contact.city"
            /><br />
            <label for="state">State:</label>
            <select
              id="state"
              name="state"
              required
              v-model="quoteForm.contact.state"
            >
              <option value="---">---</option>
              <option value="Alabama">Alabama</option>
              <option value="Alaska">Alaska</option>
              <option value="Arizona">Arizona</option>
              <option value="Arkansas">Arkansas</option>
              <option value="California">California</option>
              <option value="Colorado">Colorado</option>
              <option value="Connecticut">Connecticut</option>
              <option value="Delaware">Delaware</option>
              <option value="District of Columbia">
                District of Columbia
              </option>
              <option value="Florida">Florida</option>
              <option value="Georgia">Georgia</option>
              <option value="Guam">Guam</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Idaho">Idaho</option>
              <option value="Illinois">Illinois</option>
              <option value="Indiana">Indiana</option>
              <option value="Iowa">Iowa</option>
              <option value="Kansas">Kansas</option>
              <option value="Kentucky">Kentucky</option>
              <option value="Louisiana">Louisiana</option>
              <option value="Maine">Maine</option>
              <option value="Maryland">Maryland</option>
              <option value="Massachusetts">Massachusetts</option>
              <option value="Michigan">Michigan</option>
              <option value="Minnesota">Minnesota</option>
              <option value="Mississippi">Mississippi</option>
              <option value="Missouri">Missouri</option>
              <option value="Montana">Montana</option>
              <option value="Nebraska">Nebraska</option>
              <option value="Nevada">Nevada</option>
              <option value="New Hampshire">New Hampshire</option>
              <option value="New Jersey">New Jersey</option>
              <option value="New Mexico">New Mexico</option>
              <option value="New York">New York</option>
              <option value="North Carolina">North Carolina</option>
              <option value="North Dakota">North Dakota</option>
              <option value="Ohio">Ohio</option>
              <option value="Oklahoma">Oklahoma</option>
              <option value="Oregon">Oregon</option>
              <option value="Pennsylvania">Pennsylvania</option>
              <option value="Rhode Island">Rhode Island</option>
              <option value="South Carolina">South Carolina</option>
              <option value="South Dakota">South Dakota</option>
              <option value="Tennessee">Tennessee</option>
              <option value="Texas">Texas</option>
              <option value="Utah">Utah</option>
              <option value="Vermont">Vermont</option>
              <option value="Virginia">Virginia</option>
              <option value="Washington">Washington</option>
              <option value="West Virginia">West Virginia</option>
              <option value="Wisconsin">Wisconsin</option>
              <option value="Wyoming">Wyoming</option> </select
            ><br />
            <label for="zip-code">Zip/Postal Code:</label>
            <input
              type="text"
              id="zip-code"
              name="zip-code"
              maxlength="10"
              required
              v-mask="'#####-####'"
              v-model.trim="quoteForm.contact.zipCode"
            /><br />
            <label for="country">Country:</label>
            <input
              type="text"
              id="country"
              name="country"
              value="United States"
              disabled
            />
          </div>
        </div>
        <div class="firearm-info">
          <h3>Firearm Information</h3>
          <label for="make">Make:</label>
          <input
            type="text"
            id="make"
            name="make"
            maxlength="50"
            v-model.trim="quoteForm.firearm.make"
            required
          /><br />
          <label for="model">Model:</label>
          <input
            type="text"
            id="model"
            name="model"
            maxlength="255"
            v-model.trim="quoteForm.firearm.model"
            required
          /><br />
          <label for="serial-number">Serial Number:</label>
          <input
            type="text"
            id="serial-number"
            name="serial-number"
            maxlength="255"
            v-model.trim="quoteForm.firearm.serialNumber"
            required
          />
        </div>
        <div class="work-info">
          <h3>Work Request Details</h3>
          <h5>What type of work would you like quoted?</h5>
          <div class="work-type" :class="errorClass.eWorkType">
            <br />
            <small>Please check all that apply.</small><br />
            <input
              type="checkbox"
              id="full"
              name="full"
              value="Full Restoration"
              v-model="quoteForm.work.type"
              v-on:change="clearCheckboxError()"
            />
            <label for="full-restoration"> Full Restoration</label>
            <input
              type="checkbox"
              id="parts"
              name="parts"
              value="Parts Refinishing"
              v-model="quoteForm.work.type"
              v-on:change="clearCheckboxError()"
            />
            <label for="parts"> Parts Refinishing</label>
            <input
              type="checkbox"
              id="stock"
              name="stock"
              value="Stock/Wood Repair"
              v-model="quoteForm.work.type"
              v-on:change="clearCheckboxError()"
            />
            <label for="stock"> Stock/Wood Repair</label>
            <input
              type="checkbox"
              id="mechanical"
              name="mechanical"
              value="Mechanical Issues"
              v-model="quoteForm.work.type"
              v-on:change="clearCheckboxError()"
            />
            <label for="mechanical"> Mechanical Issues</label>
            <input
              type="checkbox"
              id="bluing"
              name="bluing"
              value="Bluing"
              v-model="quoteForm.work.type"
              v-on:change="clearCheckboxError()"
            />
            <label for="bluing"> Bluing</label>
            <input
              type="checkbox"
              id="other"
              name="other"
              value="Other"
              v-model="quoteForm.work.type"
              v-on:change="clearCheckboxError()"
            />
            <label for="other"> Other</label>
          </div>
          <div class="textarea">
            <small
              >List all work you would like done. Be as specific as possible.
            </small>
            <br />
            <label for="description">Description of Work:</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              form="q-form"
              placeholder="Type your message here."
              :maxlength="quoteForm.work.description.maxlength"
              required
              :class="errorClass.eDescription"
              v-model.trim="quoteForm.work.description.text"
              @focus="clearErrorClass('eDescription')"
            ></textarea>
            <br />
            <div class="notice-maxlength">
              Character limit remaining:
              {{ descriptionLimit }}
            </div>
          </div>
        </div>
        <div class="action">
          <input type="reset" value="Reset" @click.prevent="resetRequest" />
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
      quoteForm: {
        contact: {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          addressLine1: "",
          addressLine2: "",
          city: "",
          state: "",
          zipCode: "",
        },
        firearm: {
          make: "",
          model: "",
          serialNumber: "",
        },
        work: {
          type: [],
          description: {
            text: "",
            maxlength: 2000,
          },
        },
      },
      validate: {
        vEmail: "",
        vPhone: "",
      },
      errorClass: {
        eEmail: null,
        ePhone: null,
        eWorkType: null,
        eDescription: null,
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
      let formData = this.quoteForm;
      this.$emit("store-data", formData);

      this.clearForm();
    },
    validateForm() {
      this.errors = [];

      if (this.quoteForm.contact.email != this.validate.vEmail) {
        this.errors.push("Email address inputs must match.");
        this.errorClass.eEmail = "error-active";
      }
      if (this.quoteForm.contact.phone != this.validate.vPhone) {
        this.errors.push("Phone number inputs must match.");
        this.errorClass.ePhone = "error-active";
      }
      if (!this.quoteForm.work.type[0]) {
        this.errors.push("Please check at least one box under 'Work Details'.");
        this.errorClass.eWorkType = "error-active";
      }
      if (this.quoteForm.work.description.text.length <= 100) {
        this.errors.push(
          "Please include more details in your work request description (minimum of 100 characters)."
        );
        this.errorClass.eDescription = "error-active";
      }
    },
    resetErrors() {
      this.errors = [];
      this.errorClass.eEmail = null;
      this.errorClass.ePhone = null;
      this.errorClass.eWorkType = null;
      this.errorClass.eDescription = null;
    },
    clearErrorClass(input) {
      this.errorClass[input] = null;
    },
    clearForm() {
      var self = this;

      // iterates through each object field by name (key = name)
      Object.keys(this.quoteForm.contact).forEach(function(key) {
        self.quoteForm.contact[key] = "";
        //"this" used here would refer to "Object.keys" (hence why we need self)
      });

      Object.keys(this.quoteForm.firearm).forEach(function(key) {
        self.quoteForm.firearm[key] = "";
      });

      Object.keys(this.validate).forEach(function(key) {
        self.validate[key] = "";
      });

      this.quoteForm.work.type = [];
      this.quoteForm.work.description.text = "";
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
    },
    clearCheckboxError() {
      if (!this.quoteForm.work.type[0]) {
        return false;
      } else {
        this.errorClass.eWorkType = null;
      }
    },
  },
  computed: {
    descriptionLimit() {
      return (
        this.quoteForm.work.description.maxlength -
        this.quoteForm.work.description.text.length
      );
    },
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

.form-errors {
  background-color: red;
  color: white;
}
</style>
