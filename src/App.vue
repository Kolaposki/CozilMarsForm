<!-- eslint-disable vue/no-unused-components -->
<!-- eslint-disable prettier/prettier -->
<!-- prettier-ignore -->
<!-- eslint-disable -->

<template>
  <main
    class="main-section"
    style="
      background-image: url('https://preetheme.com/html/multitier/demo/img/bg.jpg');
    "
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
          <div class="from-section-full">
            <div class="top-section">
              <h2>Journey to Mars</h2>
              <p>Welcome, strap in and enjoy your journey to mars.</p>
            </div>
            <div id="wizard_container">
              <div id="top-wizard">
                <div
                  id="progressbar"
                  :style="{ width: progressPercentage + '%' }"
                ></div>
              </div>
              <!-- /top-wizard -->

              <FormWizard
                @on-complete="onComplete"
                @on-change="onChange"
                :start-index="0"
                ref="wizard"
              >
                <h3 class="main_question">
                  <strong>{{ currentIndex }}/{{ totalIndex }}</strong>
                </h3>
                <div id="middle-wizard">
                  <TabContent :before-change="beforeTabSwitchTravelPreferences">
                    <div class="step">
                      <h6>Travel Preferences</h6>

                      <div class="row">
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label class="form-label" for="firstname"
                              >Departure Date</label
                            >
                            <VueDatePicker
                              :enable-time-picker="false"
                              v-model="travelPreferences.departureDate"
                            >
                            </VueDatePicker>
                            <span
                              v-if="v$.travelPreferences.departureDate.$error"
                            >
                              {{
                                v$.travelPreferences.departureDate.$errors[0]
                                  .$message
                              }}
                            </span>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label class="form-label" for="firstname"
                              >Return Date</label
                            >
                            <VueDatePicker
                              :enable-time-picker="false"
                              v-model="travelPreferences.returnDate"
                            >
                            </VueDatePicker>
                            <span v-if="v$.travelPreferences.returnDate.$error">
                              {{
                                v$.travelPreferences.returnDate.$errors[0]
                                  .$message
                              }}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <label
                          class="form-label mt-2"
                          for="accommodationPreference"
                          >Accommodation Preference
                        </label>
                        <span
                          class="error-message"
                          v-if="
                            v$.travelPreferences.accommodationPreference.$error
                          "
                        >
                          {{
                            v$.travelPreferences.accommodationPreference
                              .$errors[0].$message
                          }}
                        </span>
                        <div class="form-group mt-2">
                          <label class="container_radio version_2"
                            >Space Hotel
                            <input
                              type="radio"
                              name="accommodationPreference"
                              value="Space Hotel"
                              class="required"
                              v-model="
                                travelPreferences.accommodationPreference
                              "
                            />
                            <span class="checkmark"></span>
                          </label>
                        </div>
                        <div class="form-group">
                          <label class="container_radio version_2"
                            >Martian Base
                            <input
                              type="radio"
                              name="accommodationPreference"
                              value="Martian Base"
                              class="required"
                              v-model="
                                travelPreferences.accommodationPreference
                              "
                            />
                            <span class="checkmark"></span>
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group">
                          <div class="col-sm-12">
                            <label class="mb-2"
                              >Special Requests or Preferences</label
                            >
                            <textarea
                              name="specialRequests"
                              class="form-control"
                              style="height: 100px"
                              placeholder="Type here..."
                              v-model="travelPreferences.specialRequests"
                            ></textarea>
                            <span
                              class="error-message"
                              v-if="v$.travelPreferences.specialRequests.$error"
                            >
                              {{
                                v$.travelPreferences.specialRequests.$errors[0]
                                  .$message
                              }}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabContent>

                  <TabContent
                    :before-change="beforeTabSwitchPersonalInformation"
                  >
                    <div class="step">
                      <h6>Personal Information</h6>
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="form-group">
                            <!-- <label class="form-label" for="firstname">First Name</label> -->
                            <input
                              type="text"
                              name="firstname"
                              class="form-control required"
                              placeholder="First Name"
                              v-model="personalInformation.firstName"
                            />
                            <span
                              v-if="v$.personalInformation.firstName.$error"
                            >
                              {{
                                v$.personalInformation.firstName.$errors[0]
                                  .$message
                              }}
                            </span>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <input
                              type="text"
                              name="lastname"
                              class="form-control required"
                              placeholder="Last Name"
                              v-model="personalInformation.lastName"
                            />
                            <span v-if="v$.personalInformation.lastName.$error">
                              {{
                                v$.personalInformation.lastName.$errors[0]
                                  .$message
                              }}
                            </span>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <input
                              type="email"
                              name="email"
                              class="form-control required"
                              placeholder="Your Email"
                              v-model="personalInformation.email"
                            />
                            <small id="emailHelp" class="form-text text-muted"
                              >We'll never share your email with anyone
                              else.</small
                            >
                            <br />
                            <span v-if="v$.personalInformation.email.$error">
                              {{
                                v$.personalInformation.email.$errors[0].$message
                              }}
                            </span>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <input
                              type="text"
                              name="mobile"
                              class="form-control"
                              placeholder="Mobile Number"
                              v-model="personalInformation.mobile"
                            />

                            <small id="phoneHelp" class="form-text text-muted"
                              >Please enter your mobile number in international
                              format (e.g. +16502530000).</small
                            >
                            <br />

                            <span v-if="v$.personalInformation.mobile.$error">
                              {{
                                v$.personalInformation.mobile.$errors[0]
                                  .$message
                              }}
                            </span>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <VueDatePicker
                              :enable-time-picker="false"
                              v-model="personalInformation.date"
                            >
                            </VueDatePicker>
                            <span v-if="v$.personalInformation.date.$error">
                              {{
                                v$.personalInformation.date.$errors[0].$message
                              }}
                            </span>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <select
                              class="wide required"
                              name="nationality"
                              v-model="personalInformation.nationality"
                            >
                              <option value="">-- Nationality --</option>
                              <option value="afghan">Afghan</option>
                              <option value="albanian">Albanian</option>
                              <option value="algerian">Algerian</option>
                              <option value="american">American</option>
                              <option value="andorran">Andorran</option>
                              <option value="angolan">Angolan</option>
                              <option value="antiguans">Antiguans</option>
                              <option value="argentinean">Argentinean</option>
                              <option value="armenian">Armenian</option>
                              <option value="australian">Australian</option>
                              <option value="austrian">Austrian</option>
                              <option value="azerbaijani">Azerbaijani</option>
                              <option value="bahamian">Bahamian</option>
                              <option value="bahraini">Bahraini</option>
                              <option value="bangladeshi">Bangladeshi</option>
                              <option value="barbadian">Barbadian</option>
                              <option value="barbudans">Barbudans</option>
                              <option value="batswana">Batswana</option>
                              <option value="belarusian">Belarusian</option>
                              <option value="belgian">Belgian</option>
                              <option value="belizean">Belizean</option>
                              <option value="beninese">Beninese</option>
                              <option value="bhutanese">Bhutanese</option>
                              <option value="bolivian">Bolivian</option>
                              <option value="bosnian">Bosnian</option>
                              <option value="brazilian">Brazilian</option>
                              <option value="british">British</option>
                              <option value="bruneian">Bruneian</option>
                              <option value="bulgarian">Bulgarian</option>
                              <option value="burkinabe">Burkinabe</option>
                              <option value="burmese">Burmese</option>
                              <option value="burundian">Burundian</option>
                              <option value="cambodian">Cambodian</option>
                              <option value="cameroonian">Cameroonian</option>
                              <option value="canadian">Canadian</option>
                              <option value="cape verdean">Cape Verdean</option>
                              <option value="central african">
                                Central African
                              </option>
                              <option value="chadian">Chadian</option>
                              <option value="chilean">Chilean</option>
                              <option value="chinese">Chinese</option>
                              <option value="colombian">Colombian</option>
                              <option value="comoran">Comoran</option>
                              <option value="congolese">Congolese</option>
                              <option value="costa rican">Costa Rican</option>
                              <option value="croatian">Croatian</option>
                              <option value="cuban">Cuban</option>
                              <option value="cypriot">Cypriot</option>
                              <option value="czech">Czech</option>
                              <option value="danish">Danish</option>
                              <option value="djibouti">Djibouti</option>
                              <option value="dominican">Dominican</option>
                              <option value="dutch">Dutch</option>
                              <option value="east timorese">
                                East Timorese
                              </option>
                              <option value="ecuadorean">Ecuadorean</option>
                              <option value="egyptian">Egyptian</option>
                              <option value="emirian">Emirian</option>
                              <option value="equatorial guinean">
                                Equatorial Guinean
                              </option>
                              <option value="eritrean">Eritrean</option>
                              <option value="estonian">Estonian</option>
                              <option value="ethiopian">Ethiopian</option>
                              <option value="fijian">Fijian</option>
                              <option value="filipino">Filipino</option>
                              <option value="finnish">Finnish</option>
                              <option value="french">French</option>
                              <option value="gabonese">Gabonese</option>
                              <option value="gambian">Gambian</option>
                              <option value="georgian">Georgian</option>
                              <option value="german">German</option>
                              <option value="ghanaian">Ghanaian</option>
                              <option value="greek">Greek</option>
                              <option value="grenadian">Grenadian</option>
                              <option value="guatemalan">Guatemalan</option>
                              <option value="guinea-bissauan">
                                Guinea-Bissauan
                              </option>
                              <option value="guinean">Guinean</option>
                              <option value="guyanese">Guyanese</option>
                              <option value="haitian">Haitian</option>
                              <option value="herzegovinian">
                                Herzegovinian
                              </option>
                              <option value="honduran">Honduran</option>
                              <option value="hungarian">Hungarian</option>
                              <option value="icelander">Icelander</option>
                              <option value="indian">Indian</option>
                              <option value="indonesian">Indonesian</option>
                              <option value="iranian">Iranian</option>
                              <option value="iraqi">Iraqi</option>
                              <option value="irish">Irish</option>
                              <option value="israeli">Israeli</option>
                              <option value="italian">Italian</option>
                              <option value="ivorian">Ivorian</option>
                              <option value="jamaican">Jamaican</option>
                              <option value="japanese">Japanese</option>
                              <option value="jordanian">Jordanian</option>
                              <option value="kazakhstani">Kazakhstani</option>
                              <option value="kenyan">Kenyan</option>
                              <option value="kittian and nevisian">
                                Kittian and Nevisian
                              </option>
                              <option value="kuwaiti">Kuwaiti</option>
                              <option value="kyrgyz">Kyrgyz</option>
                              <option value="laotian">Laotian</option>
                              <option value="latvian">Latvian</option>
                              <option value="lebanese">Lebanese</option>
                              <option value="liberian">Liberian</option>
                              <option value="libyan">Libyan</option>
                              <option value="liechtensteiner">
                                Liechtensteiner
                              </option>
                              <option value="lithuanian">Lithuanian</option>
                              <option value="luxembourger">Luxembourger</option>
                              <option value="macedonian">Macedonian</option>
                              <option value="malagasy">Malagasy</option>
                              <option value="malawian">Malawian</option>
                              <option value="malaysian">Malaysian</option>
                              <option value="maldivan">Maldivan</option>
                              <option value="malian">Malian</option>
                              <option value="maltese">Maltese</option>
                              <option value="marshallese">Marshallese</option>
                              <option value="mauritanian">Mauritanian</option>
                              <option value="mauritian">Mauritian</option>
                              <option value="mexican">Mexican</option>
                              <option value="micronesian">Micronesian</option>
                              <option value="moldovan">Moldovan</option>
                              <option value="monacan">Monacan</option>
                              <option value="mongolian">Mongolian</option>
                              <option value="moroccan">Moroccan</option>
                              <option value="mosotho">Mosotho</option>
                              <option value="motswana">Motswana</option>
                              <option value="mozambican">Mozambican</option>
                              <option value="namibian">Namibian</option>
                              <option value="nauruan">Nauruan</option>
                              <option value="nepalese">Nepalese</option>
                              <option value="new zealander">
                                New Zealander
                              </option>
                              <option value="ni-vanuatu">Ni-Vanuatu</option>
                              <option value="nicaraguan">Nicaraguan</option>
                              <option value="nigerien">Nigerien</option>
                              <option value="north korean">North Korean</option>
                              <option value="northern irish">
                                Northern Irish
                              </option>
                              <option value="norwegian">Norwegian</option>
                              <option value="omani">Omani</option>
                              <option value="pakistani">Pakistani</option>
                              <option value="palauan">Palauan</option>
                              <option value="panamanian">Panamanian</option>
                              <option value="papua new guinean">
                                Papua New Guinean
                              </option>
                              <option value="paraguayan">Paraguayan</option>
                              <option value="peruvian">Peruvian</option>
                              <option value="polish">Polish</option>
                              <option value="portuguese">Portuguese</option>
                              <option value="qatari">Qatari</option>
                              <option value="romanian">Romanian</option>
                              <option value="russian">Russian</option>
                              <option value="rwandan">Rwandan</option>
                              <option value="saint lucian">Saint Lucian</option>
                              <option value="salvadoran">Salvadoran</option>
                              <option value="samoan">Samoan</option>
                              <option value="san marinese">San Marinese</option>
                              <option value="sao tomean">Sao Tomean</option>
                              <option value="saudi">Saudi</option>
                              <option value="scottish">Scottish</option>
                              <option value="senegalese">Senegalese</option>
                              <option value="serbian">Serbian</option>
                              <option value="seychellois">Seychellois</option>
                              <option value="sierra leonean">
                                Sierra Leonean
                              </option>
                              <option value="singaporean">Singaporean</option>
                              <option value="slovakian">Slovakian</option>
                              <option value="slovenian">Slovenian</option>
                              <option value="solomon islander">
                                Solomon Islander
                              </option>
                              <option value="somali">Somali</option>
                              <option value="south african">
                                South African
                              </option>
                              <option value="south korean">South Korean</option>
                              <option value="spanish">Spanish</option>
                              <option value="sri lankan">Sri Lankan</option>
                              <option value="sudanese">Sudanese</option>
                              <option value="surinamer">Surinamer</option>
                              <option value="swazi">Swazi</option>
                              <option value="swedish">Swedish</option>
                              <option value="swiss">Swiss</option>
                              <option value="syrian">Syrian</option>
                              <option value="taiwanese">Taiwanese</option>
                              <option value="tajik">Tajik</option>
                              <option value="tanzanian">Tanzanian</option>
                              <option value="thai">Thai</option>
                              <option value="togolese">Togolese</option>
                              <option value="tongan">Tongan</option>
                              <option value="trinidadian or tobagonian">
                                Trinidadian or Tobagonian
                              </option>
                              <option value="tunisian">Tunisian</option>
                              <option value="turkish">Turkish</option>
                              <option value="tuvaluan">Tuvaluan</option>
                              <option value="ugandan">Ugandan</option>
                              <option value="ukrainian">Ukrainian</option>
                              <option value="uruguayan">Uruguayan</option>
                              <option value="uzbekistani">Uzbekistani</option>
                              <option value="venezuelan">Venezuelan</option>
                              <option value="vietnamese">Vietnamese</option>
                              <option value="welsh">Welsh</option>
                              <option value="yemenite">Yemenite</option>
                              <option value="zambian">Zambian</option>
                              <option value="zimbabwean">Zimbabwean</option>
                            </select>
                            <span
                              v-if="v$.personalInformation.nationality.$error"
                            >
                              {{
                                v$.personalInformation.nationality.$errors[0]
                                  .$message
                              }}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabContent>

                  <TabContent :before-change="beforeTabSwitchHealthSafety">
                    <div class="step">
                      <h6>- Health and Safety</h6>

                      <div class="row">
                        <div class="col-sm-6">
                          <div class="form-group">
                            <input
                              type="text"
                              name="firstname"
                              class="form-control required"
                              placeholder="First Name"
                            />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <input
                              type="text"
                              name="lastname"
                              class="form-control required"
                              placeholder="Last Name"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabContent>
                </div>

                <!-- footer -->
                <template v-slot:footer="props">
                  <div id="bottom-wizard">
                    <button
                      v-if="props.activeTabIndex > 0"
                      @click="prevTab()"
                      class="backward mr-3"
                    >
                      Previous
                    </button>

                    <button
                      v-if="!props.isLastStep"
                      @click="nextTab()"
                      class="forward"
                    >
                      Next
                    </button>

                    <button v-else @click="confirmMethod" class="submit">
                      {{ props.isLastStep ? "Submit" : "Next" }}
                    </button>
                  </div>
                </template>
              </FormWizard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
/* eslint-disable */
/* eslint-disable */
/* prettier-ignore */

// prettier-ignore
// eslint-disable prettier/prettier

import VueDatePicker from '@vuepic/vue-datepicker';
import "@vuepic/vue-datepicker/dist/main.css";
import { required, email, minLength, maxLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import libphonenumber from "libphonenumber-js";
// import { helpers } from "@vuelidate/validators";
import { FormWizard, TabContent } from "vue3-form-wizard";

export default {
  name: "App",
  components: {
    FormWizard,
    TabContent,
    VueDatePicker,
  },
  data() {
    return {
      v$: useVuelidate(),
      currentIndex: 1,
      totalIndex: 3, // total number of steps in our form
      personalInformation: {
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        nationality: "",
        date: null,
      },
      travelPreferences: {
        departureDate: null,
        returnDate: null,
        accommodationPreference: "",
        specialRequests: "",
      },
    };
  },
  computed: {
    progressPercentage() {
      return (this.currentIndex / this.totalIndex) * 100;
    },
  },
  methods: {
    onComplete() {
      alert("Yay. Done!");
    },
    onChange(prevIndex, nextIndex) {
      this.currentIndex = nextIndex + 1; // Index is zero-based, so we add 1
    },
    prevTab() {
      this.$refs.wizard.prevTab();
    },
    nextTab() {
      this.$refs.wizard.nextTab();
    },
    beforeTabSwitchPersonalInformation() {
      // Validate the fields in the PersonalInformation tab before switching
      this.v$.personalInformation.$touch(); // mark all fields in the personalInformation object as touched
      this.v$.personalInformation.$validate(); // validate all fields in the personalInformation object

      //   console.log(this.v$.$errors);
      //   console.log(this.v$.$error);
      console.log(this.v$.personalInformation);

      console.log(
        "personalInformation errors = > ",
        this.v$.personalInformation.$errors
      );

      if (!this.v$.personalInformation.$error) {
        // if ANY fail validation
        //   alert("Form successfully submitted.");
      } else {
        alert("Form failed validation");
        return false;
      }

      // If there are no validation errors, allow the tab switch
      return true;
    },
    beforeTabSwitchTravelPreferences() {
      // Validate the fields in the TravelPreferences tab before switching

      this.v$.travelPreferences.$touch(); // mark all fields in the personalInformation object as touched
      this.v$.travelPreferences.$validate(); // validate all fields in the personalInformation object

      console.log(
        "travelPreferences errors = > ",
        this.v$.travelPreferences.$errors
      );

      if (!this.v$.travelPreferences.$error) {
        // if ANY fail validation
        //   alert("Form successfully submitted.");
      } else {
        alert("Form failed validation");
        return false;
      }

      return true;
    },
    beforeTabSwitchHealthSafety() {
      // Validate the fields in the HealthSafety tab before switching
      return true;
    },
  },
  validations() {
    return {
      personalInformation: {
        date: { required },
        firstName: {
          required,
          minLength: minLength(2),
          maxLength: maxLength(50),
        },
        lastName: {
          required,
          minLength: minLength(2),
          maxLength: maxLength(50),
        },
        email: {
          required,
          email,
        },
        mobile: {
          required,
        },
        nationality: {
          required,
        },
      },
      travelPreferences: {
        departureDate: { required },
        returnDate: { required },
        accommodationPreference: { required },
        specialRequests: { required },
      },
    };
  },
};
</script>

<style>
.wizard-nav .wizard-nav-pills,
div.wizard-progress-with-circle,
div.wizard-navigation > ul {
  display: none !important;
}

#top-wizard {
  position: relative;
  background-color: #e7e7e7;
  width: 100%;
  border-radius: 10%;
  margin-bottom: 10px;
}

#progressbar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #5f3afc;
  /* Change this to your desired progress bar color */
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.step > h6 {
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin-bottom: 10px;
}

.form-label {
  margin-bottom: 0.5rem;
  color: #333;
}

.form-group > span,
span.error-message {
  color: red;
  font-size: 0.8em;
  text-align: left;
}
</style>

<style>
@import url("@/assets/css/bootstrap.min.css");
@import url("@/assets/css/bootstrap-icons.css");
@import url("@/assets/css/normalize.css");
@import url("@/assets/style.css");
</style>
