export interface IValidator {
  props: IValidatorProperties
  form: object
  t: any
  validateField(): void
  validateAll(): Boolean
}

export interface IValidatorProperties {
  [key: string]: IKey
}

export interface IValidatorFields {
  [key: string]: IRules
}

export interface IKey {
  rules: IRules
  errors: Array<string>
}

export interface IRules extends Object {
  required?: boolean
  minLength?: number
  maxLength?: number
}
