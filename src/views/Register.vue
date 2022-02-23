<template>
  <div class="form-demo">
    <Dialog v-model:visible="showMessage" :breakpoints="{ '960px': '80vw' }" :style="{ width: '30vw' }" position="top">
      <div class="flex align-items-center flex-column pt-6 px-3">
        <i class="pi pi-check-circle" :style="{fontSize: '5rem', color: 'var(--green-500)' }"></i>
        <h5>Registration Successful!</h5>
        <p :style="{lineHeight: 1.5, textIndent: '1rem'}">
          Your account is registered under name <b>{{name}}</b> ; it'll be valid next 30 days without activation. Please check <b>{{email}}</b> for activation instructions.
        </p>
      </div>
      <template #footer>
        <div class="flex justify-content-center">
          <Button label="OK" @click="toggleDialog" class="p-button-text" />
        </div>
      </template>
    </Dialog>

    <div class="flex justify-content-center">
      <div class="card">
        <h3 class="text-center">Регистрация</h3>
        <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
          <div class="field">
            <div class="p-float-label">
              <InputText id="name" v-model="v$.name.$model" :class="{'p-invalid':v$.name.$invalid && submitted}" />
              <label for="name" :class="{'p-error':v$.name.$invalid && submitted}">Имя*</label>
            </div>
            <small v-if="(v$.name.$invalid && submitted) || v$.name.$pending.$response" class="p-error">{{v$.name.required.$message.replace('Value', 'Name')}}</small>
          </div>
          <div class="field">
            <div class="p-float-label p-input-icon-right">
              <i class="pi pi-envelope" />
              <InputText id="email" v-model="v$.email.$model" :class="{'p-invalid':v$.email.$invalid && submitted}" aria-describedby="email-error"/>
              <label for="email" :class="{'p-error':v$.email.$invalid && submitted}">Почтовый ящик*</label>
            </div>
            <span v-if="v$.email.$error && submitted">
                            <span id="email-error" v-for="(error, index) of v$.email.$errors" :key="index">
                            <small class="p-error">{{error.$message}}</small>
                            </span>
                        </span>
            <small v-else-if="(v$.email.$invalid && submitted) || v$.email.$pending.$response" class="p-error">{{v$.email.required.$message.replace('Value', 'Email')}}</small>
          </div>
          <div class="field">
            <div class="p-float-label">
              <Password id="password" v-model="v$.password.$model" :class="{'p-invalid':v$.password.$invalid && submitted}" toggleMask>
                <template #header>
                  <h6>Выберете пароль</h6>
                </template>
                <template #footer="sp">
                  {{sp.level}}
                  <Divider />
                  <p class="mt-2">Рекомендации</p>
                  <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                    <li>Хотя бы одну букву нижнего регистра</li>
                    <li>Хотя бы одну букву верхнего регистра</li>
                    <li>Хотя бы одно число</li>
                    <li>Минимум 8 символов</li>
                  </ul>
                </template>
              </Password>
              <label for="password" :class="{'p-error':v$.password.$invalid && submitted}">Пароль*</label>
            </div>
            <small v-if="(v$.password.$invalid && submitted) || v$.password.$pending.$response" class="p-error">{{v$.password.required.$message.replace('Value', 'Password')}}</small>
          </div>
          <div class="field">
            <div class="p-float-label">
              <Calendar id="date" v-model="date" :showIcon="true" />
              <label for="date">День рождения</label>
            </div>
          </div>
          <div class="field">
            <div class="p-float-label">
              <Dropdown id="country" v-model="country" :options="countries" optionLabel="name" />
              <label for="country">Страна</label>
            </div>
          </div>
          <div class="field-checkbox">
            <Checkbox id="accept" name="accept" value="Accept" v-model="v$.accept.$model" :class="{'p-invalid':v$.accept.$invalid && submitted}" />
            <label for="accept" :class="{'p-error': v$.accept.$invalid && submitted}">Я согласен на ваши приколы*</label>
          </div>
          <Button type="submit" label="Зарегистрироваться" class="mt-2" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button'
import Dialog from 'primevue/dialog';
import Divider from 'primevue/divider';
import Password from 'primevue/password';
import { email, required } from "@vuelidate/validators"
import { useVuelidate } from "@vuelidate/core"
import CountryService from './service/CountryService'

export default {
  name: 'Register',
  setup: () => ({ v$: useVuelidate() }),
  components: {
    InputText,
    Dialog,
    Divider,
    Password,
    Calendar,
    Dropdown,
    Checkbox,
    Button,
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      date: null,
      country: null,
      accept: null,
      submitted: false,
      countries: null,
      showMessage: false
    }
  },
  countryService: null,
  validations() {
    return {
      name: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required
      },
      accept: {
        required
      }
    }
  },
  created() {
    this.countryService = new CountryService();
  },
  mounted() {
    this.countryService.getCountries().then(data => this.countries = data);
  },
  methods: {
    handleSubmit(isFormValid) {
      this.submitted = true;

      if (!isFormValid) {
        return;
      }

      this.toggleDialog();
    },
    toggleDialog() {
      this.showMessage = !this.showMessage;

      if(!this.showMessage) {
        this.resetForm();
      }
    },
    resetForm() {
      this.name = '';
      this.email = '';
      this.password = '';
      this.date = null;
      this.country = null;
      this.accept = null;
      this.submitted = false;
    }
  }

}
</script>

<style lang="scss" scoped>
.form-demo {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  .card {
    min-width: 450px;

    form {
      margin-top: 2rem;
    }

    .field {
      margin-bottom: 1.5rem;
    }
  }

  @media screen and (max-width: 960px) {
    .card {
      width: 80%;
    }
  }
}

</style>
