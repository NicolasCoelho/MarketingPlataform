import { reactive } from 'vue'
import { IValidatorFields, IValidatorProperties } from '~/interfaces/IValidator'
import ValidationRules from '~/enums/ValidationRules'

export default class Validator implements IValidator {
  public props: IValidatorProperties
  public form: object
  public t: any
  
  constructor(f: object, v: IValidatorFields, translations: any) {
    this.form = f
    let tempProps: IValidatorProperties = {}
    this.t = translations

    Object.keys(v).forEach(key => {
      tempProps[key] = {
        rules: v[key],
        errors: []
      }
    })
    this.props = reactive(tempProps)
  }

  public validateField(e: string | any) {
    const name = e?.target?.id ?? e.toString()
    const keyTyped = name as keyof typeof this.props
    const keyTypedForm = name as keyof typeof this.form 
    const value = e.target ? e.target.value : this.form[keyTypedForm]
  
    this.props[keyTyped].errors = []
    this.typedKeys(this.props[keyTyped].rules).forEach((key) => { 
      switch (key) {
        case ValidationRules.minLength:
          const min: number = <any>(this.props[keyTyped])?.rules.minLength
          if (min > value.toString().length)
            this.props[keyTyped].errors.push(this.t('Form.ErrorsMessages.MinLength', { length: min }))
          break;
        case ValidationRules.maxLength:
          const max: number = <any>(this.props[keyTypedForm])?.rules.maxLength
          if (value.length > max)
            this.props[keyTyped].errors.push(this.t('Form.ErrorsMessages.MaxLength', { length: max }))
          break;
        case ValidationRules.required:
          if (value.toString() === '')
            this.props[keyTyped].errors.push(this.t('Form.ErrorsMessages.Required'))
          break; 
        default:
          break;
      }
    })
  } 

  isAllValid() : Boolean {
    let result = true

    Object.keys(this.props).forEach((key) => {
      this.validateField(key)
      result = this.props[key].errors.length == 0
    })
    return result
  }

  private typedKeys<T>(o: T): (keyof T)[] {
    return Object.keys(<object>o) as (keyof T)[];
  }
}