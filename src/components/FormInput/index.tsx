import React, { ChangeEvent } from 'react'

import './FormInput.scss'

type FormInputProps = {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const FormInput = (props: FormInputProps) => <input type="text" className="c-form-input" onChange={props.onChange}/>

export default FormInput