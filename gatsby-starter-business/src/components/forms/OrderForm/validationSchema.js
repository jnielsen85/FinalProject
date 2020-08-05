import * Yup from 'yup'

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
    .oneOf([Yup.ref('email'), null])
    .required('Must confirm email'),
  address: Yup.string()
    .required('Address is Required!'),
  city: Yup.string()
    .required('City is Required!'),
  state: Yup.string()
    .required('State is Required!'),
  postcode: Yup.string()
    .number('Post code must be number')
    .integer()
    .max(4, 'Too Long!')
    .required('Name is Required!'),
  country: Yup.string()
    .required('Country is Required!'),
  mobile_number: Yup.string()
    .number('Must be a number')
    .integer()
    .max(10, 'Too Long!')
    .required('Phone number is Required!'),
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
  years: Yup.string(),
  additional: Yup.string()
    .required('Please provide some additioal details'),
})

export default validationSchema
