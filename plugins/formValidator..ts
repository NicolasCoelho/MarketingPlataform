import { IValidatorFields } from "~~/interfaces/IValidator"
import Validator from "~~/utils/Validator"

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      createFormValidator: (form: object, validations: IValidatorFields) => new Validator(form, validations, nuxtApp.vueApp.$nuxt.$i18n.t)
    }
  }
})