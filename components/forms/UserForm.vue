<template>
  <form @submit.prevent="submit()">
    <div class="input-wrapper">
      <label for="fullName">Nome</label>
      <InputText v-model="form.fullName" @blur="validator.validateField('fullName')" id="fullName" :class="{'p-invalid': validator.props.fullName.errors.length}" />
      <div v-if="validator.props.fullName.errors.length">
        <small class="p-error" v-for="err,i in validator.props.fullName.errors" :key="i">{{ err }}</small>
      </div>
    </div>
    <div class="input-wrapper">
      <label for="email">Email</label>
      <InputText v-model="form.email" @blur="validator.validateField('email')" id="email" :class="{'p-invalid': validator.props.email.errors.length}" />
      <div v-if="validator.props.email.errors.length">
        <small class="p-error" v-for="err,i in validator.props.email.errors" :key="i">{{ err }}</small>
      </div>
    </div>
    <div class="input-wrapper">
      <label for="birthDay">Data de Nascimento</label>
      <Calendar class="full" inputId="birthDay" v-model="form.birthDay" autocomplete="off" dateFormat="dd/mm/yy" @blur="validator.validateField('birthDay')" id="birthDay" :class="{'p-invalid': validator.props.birthDay.errors.length}" />
      <div v-if="validator.props.birthDay.errors.length">
        <small class="p-error" v-for="err,i in validator.props.birthDay.errors" :key="i">{{ err }}</small>
      </div>
    </div>
    <div class="input-wrapper">
      <label for="country">País</label>
      <Dropdown class="full" v-model="form.country" :options="countries" optionLabel="title" optionValue="value" @blur="validator.validateField('country')" id="country" :class="{'p-invalid': validator.props.country.errors.length}" />
      <div v-if="validator.props.country.errors.length">
        <small class="p-error" v-for="err,i in validator.props.country.errors" :key="i">{{ err }}</small>
      </div>
    </div>
    <div class="input-wrapper">
      <label for="password">Senha</label>
      <Password class="full" v-model="form.password" toggleMask  @blur="validator.validateField('password')" id="password" :class="{'p-invalid': validator.props.password.errors.length}"></Password>
      <div v-if="validator.props.password.errors.length">
        <small class="p-error" v-for="err,i in validator.props.password.errors" :key="i">{{ err }}</small>
      </div>
    </div>
    <div class="text-center">
      <Button type="submit" label="Cadastrar"/>
    </div>
  </form>
</template>
<script setup lang='ts'>
import { reactive, ref } from 'vue'
import IUserForm from '~/interfaces/IUserForm'

const { $createFormValidator } = useNuxtApp()

const form: IUserForm = reactive({
  fullName: '',
  email: '',
  birthDay: new Date(), 
  country: 0,
  password: ''
})

const countries = ref([
  { title: 'Brasil', value: 1},
  { title: 'França', value: 2},
  { title: 'Argentina', value: 3},
  { title: 'Estados Unidos', value: 4},
  { title: 'Alemanha', value: 5},
  { title: 'Italia', value: 6}
])

const validator = $createFormValidator(form, {
  fullName: {
    minLength: 8,
    required: true
  },
  email: {
    minLength: 5,
    required: true
  },
  birthDay: {
    required: true
  },
  country: {
    required: true
  },
  password: {
    minLength: 6,
    required: true
  }
})

const emit = defineEmits(['submit'])

const submit = () => {
  if (validator.isAllValid())
    emit('submit', form)
}
</script>
