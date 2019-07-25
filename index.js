
import fForm from './src/f-form.vue';
import fFormItem from './src/f-form-item.vue';
import fInput from './src/f-input.vue';
import css from './src/style.css'

const formValidator = {
  fForm,
  fFormItem,
  fInput
};

const install = function(Vue, local) {
  for (const i in formValidator) {
    Vue.component(i, formValidator[i]);
  }
}

formValidator.install = install;

export { formValidator };
