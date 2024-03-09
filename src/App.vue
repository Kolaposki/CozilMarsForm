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

              <FormWizard @on-change="onChange" :start-index="0" ref="wizard">
                <h3 class="main_question">
                  <strong>{{ currentIndex }}/{{ totalIndex }}</strong>
                </h3>
                <div id="middle-wizard">
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
                              :class="{
                                'is-invalid':
                                  v$.personalInformation.firstName.$error,
                              }"
                            />
                            <span
                              class="error-message"
                              data-error-for="personalInformationFirstname"
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
                              :class="{
                                'is-invalid':
                                  v$.personalInformation.lastName.$error,
                              }"
                            />
                            <span
                              v-if="v$.personalInformation.lastName.$error"
                              data-error-for="personalInformationLastname"
                            >
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
                              name="personalInformationEmail"
                              class="form-control required"
                              placeholder="Your Email"
                              v-model="personalInformation.email"
                              :class="{
                                'is-invalid':
                                  v$.personalInformation.email.$error,
                              }"
                            />
                            <small id="emailHelp" class="form-text text-muted"
                              >We'll never share your email with anyone
                              else.</small
                            >
                            <br />
                            <span
                              v-if="v$.personalInformation.email.$error"
                              data-error-for="personalInformationEmail"
                            >
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
                              name="personalInformationPhone"
                              class="form-control"
                              placeholder="Mobile Number"
                              v-model="personalInformation.mobile"
                              :class="{
                                'is-invalid':
                                  v$.personalInformation.mobile.$error,
                              }"
                              ref="personalInformationPhoneInput"
                            />

                            <small id="phoneHelp" class="form-text text-muted"
                              >Please enter your mobile number in international
                              format (e.g. +16502530000).</small
                            >
                            <br />

                            <span
                              v-if="v$.personalInformation.mobile.$error"
                              data-error-for="personalInformationPhone"
                            >
                              <template
                                v-if="
                                  v$.personalInformation.mobile.$errors[0]
                                    .$message
                                "
                              >
                                {{
                                  v$.personalInformation.mobile.$errors[0]
                                    .$message
                                }}
                              </template>
                              <template v-else> Invalid mobile number</template>
                            </span>
                            <br />
                            <span
                              v-if="personalInformationPhoneError"
                              data-error-for="personalInformationPhone"
                              >Invalid mobile number format.</span
                            >
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <VueDatePicker
                              :enable-time-picker="false"
                              id="personalInformationDate"
                              v-model="personalInformation.date"
                              :class="{
                                'is-invalid':
                                  v$.personalInformation.date.$error,
                              }"
                              placeholder="Date of Birth"
                            >
                            </VueDatePicker>
                            <span
                              v-if="v$.personalInformation.date.$error"
                              data-error-for="personalInformationDate"
                            >
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
                              :class="{
                                'is-invalid':
                                  v$.personalInformation.nationality.$error,
                              }"
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
                              data-error-for="personalInformationNationality"
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
                              :class="{
                                'is-invalid':
                                  v$.travelPreferences.departureDate.$error,
                              }"
                              placeholder="Departure Date"
                              ref="departureDatePicker"
                            >
                            </VueDatePicker>
                            <span
                              v-if="v$.travelPreferences.departureDate.$error"
                              data-error-for="travelPreferencesDepartureDate"
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
                              :class="{
                                'is-invalid':
                                  v$.travelPreferences.returnDate.$error,
                              }"
                              placeholder="Return Date"
                            >
                            </VueDatePicker>
                            <span
                              v-if="v$.travelPreferences.returnDate.$error"
                              data-error-for="returnDate"
                            >
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
                          data-error-for="travelPreferencesAccommodationPreference"
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
                              :class="{
                                'is-invalid':
                                  v$.travelPreferences.accommodationPreference
                                    .$error,
                              }"
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
                              :class="{
                                'is-invalid':
                                  v$.travelPreferences.accommodationPreference
                                    .$error,
                              }"
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
                              :class="{
                                'is-invalid':
                                  v$.travelPreferences.specialRequests.$error,
                              }"
                            ></textarea>
                            <span
                              class="error-message"
                              v-if="v$.travelPreferences.specialRequests.$error"
                              data-error-for="travelPreferencesSpecialRequests"
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

                  <TabContent>
                    <div class="step">
                      <h6>Health and Safety</h6>

                      <div class="row">
                        <span>Emergency Contact Information</span>
                        <div class="col-sm-4">
                          <div class="form-group">
                            <input
                              type="text"
                              name="fullName"
                              class="form-control required"
                              placeholder="Full Name"
                              v-model="healthSafety.fullName"
                              :class="{
                                'is-invalid': v$.healthSafety.fullName.$error,
                              }"
                            />
                            <span
                              v-if="v$.healthSafety.fullName.$error"
                              data-error-for="healthSafetyFullName"
                            >
                              {{ v$.healthSafety.fullName.$errors[0].$message }}
                            </span>
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div class="form-group">
                            <input
                              type="text"
                              name="healthSafetyMobile"
                              class="form-control required"
                              placeholder="Mobile Number"
                              v-model="healthSafety.mobile"
                              :class="{
                                'is-invalid': v$.healthSafety.mobile.$error,
                              }"
                              ref="healthSafetyMobileInput"
                            />
                            <span
                              v-if="v$.healthSafety.mobile.$error"
                              data-error-for="healthSafetyMobile"
                            >
                              {{ v$.healthSafety.mobile.$errors[0].$message }}
                            </span>
                            <br />
                            <span
                              v-if="healthSafetyPhoneError"
                              data-error-for="healthSafetyMobile"
                              >Invalid mobile number format.</span
                            >
                          </div>
                        </div>

                        <div class="col-sm-4">
                          <div class="form-group">
                            <select
                              name="relationship"
                              id="relationship"
                              v-model="healthSafety.relationship"
                              :class="{
                                'is-invalid':
                                  v$.healthSafety.relationship.$error,
                              }"
                            >
                              <option value="">Relationship</option>
                              <option value="spouse">Spouse</option>
                              <option value="partner">Partner</option>
                              <option value="parent">Parent</option>
                              <option value="child">Child</option>
                              <option value="sibling">Sibling</option>
                              <option value="friend">Friend</option>
                              <option value="other">Other</option>
                            </select>

                            <span
                              v-if="v$.healthSafety.relationship.$error"
                              data-error-for="healthSafetyRelationship"
                            >
                              {{
                                v$.healthSafety.relationship.$errors[0].$message
                              }}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="form-group">
                          <div class="col-sm-12">
                            <label class="mb-2"
                              >Any Medical Conditions (if applicable)</label
                            >
                            <textarea
                              name="medicalConditions"
                              class="form-control"
                              style="height: 100px"
                              placeholder="Type here..."
                              v-model="healthSafety.medicalConditions"
                              :class="{
                                'is-invalid':
                                  v$.healthSafety.medicalConditions.$error,
                              }"
                            ></textarea>
                            <small class="form-text text-muted"
                              >Enter none if not applicable</small
                            ><br />
                            <span
                              class="error-message"
                              v-if="v$.healthSafety.medicalConditions.$error"
                              data-error-for="healthSafetymedicalConditions"
                            >
                              {{
                                v$.healthSafety.medicalConditions.$errors[0]
                                  .$message
                              }}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div class="form-group terms health-declaration">
                        <span>Health Declaration</span>
                        <p>
                          1. I declare that I am of good health and I do not
                          have any physical defect, deformity or disability. I
                          further declare that I perform all my routine
                          activities independently, that I do not have any
                          history of, have never suffered from, am not currently
                          suffering from, nor have I received, nor am I
                          currently receiving, nor do I expect to receive any
                          treatment, nor been hospitalized, nor do I expect to
                          be hospitalized for any ailment or disease.
                        </p>

                        <p>
                          2. I have not had any application for life, accident,
                          health or critical illness insurance on my life ever
                          been declined, postponed or accepted at other than
                          normal terms.
                        </p>

                        <label class="container_check"
                          >I accept the <a href="#">health declaration</a>
                          <input
                            type="checkbox"
                            name="healthDeclaration"
                            value="Yes"
                            class="required"
                            required
                            v-model="healthSafety.healthDeclaration"
                            :class="{
                              'is-invalid':
                                v$.healthSafety.healthDeclaration.$error,
                            }"
                          />
                          <span class="checkmark"></span>
                          <br />
                          <span
                            class="error-message"
                            v-if="v$.healthSafety.healthDeclaration.$error"
                            data-error-for="healthSafetyhealthDeclaration"
                          >
                            {{
                              v$.healthSafety.healthDeclaration.$errors[0]
                                .$message
                            }}
                          </span>
                        </label>
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
                      id="prevBtn"
                    >
                      Previous
                    </button>

                    <button
                      v-if="!props.isLastStep"
                      @click="nextTab()"
                      class="forward"
                      id="nextBtn"
                    >
                      Next
                    </button>

                    <button
                      v-else
                      @click="submitForm"
                      class="submit"
                      id="submitBtn"
                    >
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

    <Modal :isOpen="showModal" @update:isOpen="showModal = $event" />
  </main>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import { required, email, minLength, maxLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { FormWizard, TabContent } from "vue3-form-wizard";
import { useToast } from "vue-toastification";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    FormWizard,
    TabContent,
    VueDatePicker,
    Modal,
  },
  data() {
    return {
      v$: useVuelidate(),
      currentIndex: 1,
      totalIndex: 3, // total number of steps in our form
      personalInformationPhoneError: false,
      healthSafetyPhoneError: false,
      showModal: false,
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
      healthSafety: {
        medicalConditions: "",
        healthDeclaration: "",
        fullName: "",
        mobile: "",
        relationship: "",
      },
    };
  },
  computed: {
    progressPercentage() {
      // Calculate the progress percentage based on the current index and total index
      return (this.currentIndex / this.totalIndex) * 100;
    },
  },
  methods: {
    onChange(prevIndex, nextIndex) {
      // Update the current index when the tab changes
      // Index is zero-based, so we add 1
      this.currentIndex = nextIndex + 1;
    },
    prevTab() {
      // Go to the previous tab in the wizard
      this.$refs.wizard.prevTab();
    },
    nextTab() {
      // Go to the next tab in the wizard
      this.$refs.wizard.nextTab();
    },
    beforeTabSwitchPersonalInformation() {
      // Validate the fields in the PersonalInformation tab before switching

      // mark all fields in the personalInformation object as touched
      // validate all fields in the personalInformation object
      this.v$.personalInformation.$touch();
      this.v$.personalInformation.$validate();

      const toast = useToast();

      // Check if the phone number is in the correct format
      const phoneRegex =
        /^\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/;
      if (!phoneRegex.test(this.personalInformation.mobile)) {
        this.personalInformationPhoneError = true;
      }

      // If any fields fail validation, show an error toast and prevent the tab switch
      if (
        this.v$.personalInformation.$error ||
        this.personalInformationPhoneError
      ) {
        toast.error(
          "Oops! There seems to be an error in your personal information.",
          {
            position: "top-right",
            timeout: 5000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
          }
        );
        return false;
      }

      // If there are no validation errors, allow the tab switch
      return true;
    },
    beforeTabSwitchTravelPreferences() {
      // Validate the fields in the TravelPreferences tab before switching

      // mark all fields in the travelPreferences object as touched
      // validate all fields in the travelPreferences object
      this.v$.travelPreferences.$touch();
      this.v$.travelPreferences.$validate();

      const toast = useToast();

      // If any fields fail validation, show an error toast and prevent the tab switch
      if (this.v$.travelPreferences.$error) {
        toast.error(
          "Oops! There seems to be an error in your travel preferences.",
          {
            position: "top-right",
            timeout: 5000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
          }
        );
        return false;
      }
      return true;
    },
    submitForm() {
      // Validate the fields in the HealthSafety tab before submission

      // mark all fields in the healthSafety object as touched
      // validate all fields in the healthSafety object
      this.v$.healthSafety.$touch();
      this.v$.healthSafety.$validate();

      // Check if the phone number is in the correct format
      const phoneRegex =
        /^\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/;
      if (!phoneRegex.test(this.healthSafety.mobile)) {
        this.healthSafetyPhoneError = true;
      }

      const toast = useToast();

      // If any fields fail validation, show an error toast and prevent form submission
      if (this.v$.healthSafety.$error || this.healthSafetyPhoneError) {
        toast.error(
          "Oops! There seems to be an error in the health and safety.",
          {
            position: "top-right",
            timeout: 5000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
          }
        );
        return false;
      }

      this.allDone();
    },
    initialState() {
      // Represents the initial state of all data properties
      return {
        personalInformationPhoneError: false,
        healthSafetyPhoneError: false,
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
        healthSafety: {
          medicalConditions: "",
          healthDeclaration: "",
          fullName: "",
          mobile: "",
          relationship: "",
        },
      };
    },

    resetData() {
      // Sets the data properties to their initial values
      const initialData = this.initialState();
      this.personalInformation = initialData.personalInformation;
      this.travelPreferences = initialData.travelPreferences;
      this.healthSafety = initialData.healthSafety;
      this.personalInformationPhoneError =
        initialData.personalInformationPhoneError;
      this.healthSafetyPhoneError = initialData.healthSafetyPhoneError;
    },

    allDone() {
      // End of cycle
      this.showModal = true;
      this.$refs.wizard.reset(); // reset wizard state
      this.resetData(); // reset the data to its initial state
      this.v$.$reset(); // reset the vuelidate state
    },
  },

  validations() {
    // using vuelidate for form validation

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
      healthSafety: {
        fullName: { required },
        mobile: { required },
        relationship: { required },
        healthDeclaration: { required },
        medicalConditions: { required },
      },
    };
  },
  mounted() {
    // Add focus event listeners to the phone number input fields
    this.$refs.personalInformationPhoneInput.addEventListener("focus", () => {
      this.personalInformationPhoneError = false;
    });
    this.$refs.healthSafetyMobileInput.addEventListener("focus", () => {
      this.healthSafetyPhoneError = false;
    });
  },
  beforeUnmount() {
    // Remove focus event listeners from the phone number input fields
    this.$refs.personalInformationPhoneInput.removeEventListener(
      "focus",
      () => {
        this.personalInformationPhoneError = false;
      }
    );
    this.$refs.healthSafetyMobileInput.removeEventListener("focus", () => {
      this.healthSafetyPhoneError = false;
    });
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

.health-declaration > span {
  text-align: left;
  font-size: 15px;
  font-weight: 500;
  color: #333;
}
.health-declaration > p {
  margin-bottom: 10px;
}
</style>

<style>
@import url("@/assets/css/bootstrap.min.css");
@import url("@/assets/css/bootstrap-icons.css");
@import url("@/assets/css/normalize.css");
@import url("@/assets/style.css");
</style>
