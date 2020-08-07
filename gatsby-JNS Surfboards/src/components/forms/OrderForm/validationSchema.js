import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is Required!'),
  last_name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Last name is Required!'),
  email: Yup.string()
    .email('Enter a Valid Email!')
    .required('Email is Required!'),
  confirm_email: Yup.string()
    .oneOf([Yup.ref('email'), null], 'emails must match')
    .required('Must confirm email'),
  address: Yup.string()
    .required('Address is Required!'),
  city: Yup.string()
    .required('City is Required!'),
  state: Yup.string()
    .required('State is Required!'),
  postcode: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(4, 'Postcode must be 4 digits')
    .max(4, 'Postcode must be 4 digits')
    .required('Postcode is Required!'),
  country: Yup.string()
    .required('Country is Required!'),
  mobile_number: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(9, 'Please use valid phonenumber')
    .max(10, 'Please use valid phonenumber')
    .required('Phone Number is Required!'),
  length: Yup.string()
    .required('Board Length is Required!'),
  width: Yup.string()
    .required('Board Width is Required!'),
  thickness: Yup.string()
    .required('Thickness is Required!'),
  height: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!'),
  weight: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!'),
  years: Yup.string()
    .required('Please let us know how long youve been surfing'),
  additional: Yup.string()
    .required('Please provide some additioal details'),
})

export default validationSchema
