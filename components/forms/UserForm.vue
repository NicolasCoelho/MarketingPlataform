<template>
  <form @submit.prevent="handleSubmit()">
    <div class="input-wrapper">
      <label for="username2">Nome</label>
      <InputText v-model="form.fullName" @blur="validator.validateField('fullName')" id="fullName" :class="{'p-invalid': validator.props.fullName.errors.length}" />
      <div v-if="validator.props.fullName.errors.length">
        <small class="p-error" v-for="err,i in validator.props.fullName.errors" :key="i">{{ err }}</small>
      </div>
    </div>
    <Button type="submit" label="Enviar"/>
  </form>
</template>
<script setup lang='ts'>
import { reactive } from 'vue'
import IUserForm from '~/interfaces/IUserForm'

const { $createFormValidator } = useNuxtApp()

const form: IUserForm = reactive({
  fullName: '',
  email: '',
  birthDay: new Date(), 
  country: 0,
  password: ''
})

const validator = $createFormValidator(form, {
  fullName: {
    minLength: 8
  }
})

const handleSubmit = () => {
  console.log(form)
}
</script>
