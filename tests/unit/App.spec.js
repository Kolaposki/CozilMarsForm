import { mount } from '@vue/test-utils';
import { FormWizard, TabContent } from 'vue3-form-wizard';
import App from '@/App.vue';

// Register the FormWizard and TabContent components globally for the test
const globalComponents = {
  components: {
    FormWizard,
    TabContent,
  },
};
describe('App', () => {
  it('validates the firstName field', async () => {
    const wrapper = mount(App, globalComponents); // Mount the App component with global components


    // find the firstName input field and set its value to an empty string
    const firstNameInput = wrapper.find('input[name="firstname"]');
    await firstNameInput.setValue('');

    // trigger the blur event to validate the field
    await firstNameInput.trigger('blur');


    // find the "Next" button inside the slot and simulate a click event
    const footerWrappers = wrapper.findAll('template[v-slot="props"]');
    const nextButton = footerWrappers.wrappers[0].find('button.forward');

    await nextButton.trigger('click');

    // check whether the component displays an error message
    const errorMessage = wrapper.find('span.error-message');

    expect(errorMessage.text()).toBe('field is required');

    // set the value of the firstName field to a valid value
    await firstNameInput.setValue('John');

    // check whether the error message is no longer displayed
    expect(errorMessage.exists()).toBe(false);
  });

  // add more test cases as needed
});
