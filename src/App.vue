<!-- eslint-disable vue/no-unused-components -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<!-- prettier-ignore -->

<template>
	<main class="main-section" style="background-image: url('https://preetheme.com/html/multitier/demo/img/bg.jpg');">
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
								<div id="progressbar" :style="{ width: progressPercentage + '%' }"></div>
							</div>
							<!-- /top-wizard -->

							<FormWizard @on-complete="onComplete" @on-change="onChange" :start-index="0" ref="wizard">
								<h3 class="main_question"><strong>{{ currentIndex }}/{{ totalIndex }}</strong></h3>
								<div id="middle-wizard">

									<TabContent>
										<div class="step">
											<h6>Personal Information </h6>
											<div class="row">
												<div class="col-sm-6">
													<div class="form-group">
														<input type="text" name="firstname"
															class="form-control required" placeholder="First Name">
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<input type="text" name="lastname" class="form-control required"
															placeholder="Last Name">
													</div>
												</div>
											</div>
										</div>
									</TabContent>

									<TabContent>
										<div class="step">
											<div class="row">
												<div class="col-sm-6">
													<div class="form-group">
														<input type="text" name="firstname"
															class="form-control required" placeholder="First Name">
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<input type="text" name="lastname" class="form-control required"
															placeholder="Last Name">
													</div>
												</div>
												<div class="col-sm-6">
												<div class="form-group">
													<select class="wide required" name="city">
														<option value="">Your City</option>
														<option value="city_1">City 1</option>
														<option value="city_2">City 2</option>
														<option value="city_3">City 3</option>
														<option value="city_4">City 4</option>
														<option value="city_5">City 5</option>                             
													</select>
												</div>
											</div>
											</div>
										</div>
									</TabContent>

								</div>

								<!-- footer -->
								<template v-slot:footer="props" >
									
									<div id="bottom-wizard" >
										<button v-if="props.activeTabIndex > 0" @click="prevTab()" class="backward mr-3" >
											Previous
										</button>

										<button v-if="!props.isLastStep" @click="nextTab()" class="forward">
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
// prettier-ignore

import { FormWizard, TabContent } from "vue3-form-wizard";
// import "vue3-form-wizard/dist/style.css";
// import "@/assets/bootstrap.min.css";
// import "@/assets/demo.css";

export default {
  name: "App",
  components: {
    FormWizard,
    TabContent,
    // WizardStep,
  },
  data() {
    return {
      currentIndex: 1,
      totalIndex: 3, // total number of steps in our form
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
  background-color: #5f3afc; /* Change this to your desired progress bar color */
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.step > h6 {
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin-bottom: 10px;
}
</style>

<style>
@import url("@/assets/css/bootstrap.min.css");
@import url("@/assets/css/bootstrap-icons.css");
@import url("@/assets/css/normalize.css");
@import url("@/assets/style.css");
</style>
