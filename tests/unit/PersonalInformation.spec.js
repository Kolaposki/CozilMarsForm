import { FormWizard, TabContent } from "vue3-form-wizard";
import App from "@/App.vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import { fireEvent } from "@testing-library/vue";
import { mount,flushPromises } from "@vue/test-utils";

// Register the components globally for the test and mount the App component
const wrapper = mount(App, {
  global: {
    components: {
      FormWizard,
      TabContent,
      VueDatePicker,
    },
  },
});

describe("PersonalInformation", () => {
  it("validates the firstName field", async () => {
    // find the firstName input field
    const firstNameInput = wrapper.find('input[name="firstname"]');
    expect(firstNameInput.exists()).toBe(true);

    // set its value to an empty string
    await firstNameInput.setValue("");

    // trigger the blur event to validate the field
    await firstNameInput.trigger("blur");

    // find the "Next" button and simulate a click event
    const nextButton = wrapper.find('button[id="nextBtn"]');
    expect(nextButton.exists()).toBe(true);
    await nextButton.trigger("click");

    // check whether the component displays an error message
    const errorMessage = wrapper.find(
      'span[data-error-for="personalInformationFirstname"]'
    );
    expect(errorMessage.exists()).toBe(true);
    expect(errorMessage.text()).toBe("Value is required");

    // set the value of the firstName field to a valid value
    await firstNameInput.setValue("John");

    // trigger the blur event to validate the field
    await firstNameInput.trigger("blur");

    // check whether the error message is no longer displayed
    expect(
      wrapper
        .find('span[data-error-for="personalInformationFirstname"]')
        .exists()
    ).toBe(false);
  });

  it("validates the lastName field", async () => {
    const lastNameInput = wrapper.find('input[name="lastname"]');
    await lastNameInput.setValue("");
    await lastNameInput.trigger("blur");

    const nextButton = wrapper.find('button[id="nextBtn"]');
    await nextButton.trigger("click");

    const lastNameErrorMessage = wrapper.find(
      'span[data-error-for="personalInformationLastname"]'
    );
    expect(lastNameErrorMessage.text()).toBe("Value is required");

    await lastNameInput.setValue("Doe");
    await lastNameInput.trigger("blur");

    expect(
      wrapper
        .find('span[data-error-for="personalInformationLastname"]')
        .exists()
    ).toBe(false);
  });

  it("validates the email field", async () => {
    const emailInput = wrapper.find('input[name="personalInformationEmail"]');
    await emailInput.setValue("invalidemail");
    await emailInput.trigger("blur");

    const nextButton = wrapper.find('button[id="nextBtn"]');
    await nextButton.trigger("click");

    const emailErrorMessage = wrapper.find(
      'span[data-error-for="personalInformationEmail"]'
    );
    expect(emailErrorMessage.text()).toBe("Value is not a valid email address");

    await emailInput.setValue("johndoe@example.com");
    await emailInput.trigger("blur");

    expect(
      wrapper.find('span[data-error-for="personalInformationEmail"]').exists()
    ).toBe(false);
  });

  it("validates the phone field", async () => {
    const phoneInput = wrapper.find('input[name="personalInformationPhone"]');
    await phoneInput.setValue("1234567890");
    await phoneInput.trigger("blur");

    const nextButton = wrapper.find('button[id="nextBtn"]');
    await nextButton.trigger("click");

    const phoneErrorMessage = wrapper.find(
      'span[data-error-for="personalInformationPhone"]'
    );
    expect(phoneErrorMessage.text()).toBe("Invalid mobile number format.");

    await phoneInput.trigger("focus");
    await phoneInput.setValue("+16502530000");
    await phoneInput.trigger("blur");

    expect(
      wrapper.find('span[data-error-for="personalInformationPhone"]').exists()
    ).toBe(false);
  });

  it("validates the nationality field", async () => {
    const nationalityInput = wrapper.find('select[name="nationality"]');
    await nationalityInput.setValue("");
    await nationalityInput.trigger("blur");

    const nextButton = wrapper.find('button[id="nextBtn"]');
    await nextButton.trigger("click");

    const nationalityErrorMessage = wrapper.find(
      'span[data-error-for="personalInformationNationality"]'
    );
    expect(nationalityErrorMessage.text()).toBe("Value is required");

    await nationalityInput.setValue("american");
    await nationalityInput.trigger("blur");

    expect(
      wrapper
        .find('span[data-error-for="personalInformationNationality"]')
        .exists()
    ).toBe(false);
  });
  
  it("validates the personalInformationDate field", async () => {
    const datePicker = wrapper.findComponent(VueDatePicker);
    const dateInput = datePicker.find('input[placeholder="Date of Birth"]');

    // Set an invalid date
    await fireEvent.update(dateInput.element, "invalid-date");
    await datePicker.vm.$nextTick();

    const nextButton = wrapper.find('button[id="nextBtn"]');
    await nextButton.trigger("click");

    const dateErrorMessage = wrapper.find(
      'span[data-error-for="personalInformationDate"]'
    );
    expect(dateErrorMessage.text()).toBe("Value is required");

    // Set a valid date
    await fireEvent.click(dateInput.element); // Open the datepicker
    await fireEvent.update(dateInput.element, "2024-02-01");

    // Set focus and blur events
    await dateInput.trigger("focus");
    await dateInput.trigger("blur");

    await datePicker.vm.$nextTick();

    // Check if the input field's value is equal to the expected date
    expect(dateInput.element.value).toEqual("2024-02-01");

    await flushPromises();
  });
});
