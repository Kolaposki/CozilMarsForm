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
  
      // find the firstName input field
      const firstNameInput = wrapper.find('input[name="firstname"]');
      expect(firstNameInput.exists()).toBe(true);
  
      // set its value to an empty string
      await firstNameInput.setValue('');
  
      // trigger the blur event to validate the field
      await firstNameInput.trigger('blur');
  
      // find the "Next" button and simulate a click event
      const nextButton = wrapper.find('button[id="nextBtn"]');
      expect(nextButton.exists()).toBe(true);
      await nextButton.trigger('click');
  
      // check whether the component displays an error message
      const errorMessage = wrapper.find('span[data-error-for="firstname"]');
      expect(errorMessage.exists()).toBe(true);
      expect(errorMessage.text()).toBe('Value is required');
  
      // set the value of the firstName field to a valid value
      await firstNameInput.setValue('John');
  
      // trigger the blur event to validate the field
      await firstNameInput.trigger('blur');
  
      // check whether the error message is no longer displayed
      expect(wrapper.find('span[data-error-for="firstname"]').exists()).toBe(false);
  
    });
  
  });
  