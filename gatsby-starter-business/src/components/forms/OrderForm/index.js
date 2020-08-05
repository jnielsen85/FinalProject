import React from 'react'
import { Formik, Field } from 'formik'
import { naviagte } from 'gatsby-link'
import validationSchema from './validationSchema'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const OrderForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        last_name: '',
        email: '',
        confirm_email: '',
        address: '',
        city: '',
        state: '',
        postcode: '',
        country: '',
        mobile_number: '',
        length: '',
        width: '',
        thickness: '',
        height: '',
        weight: '',
        years: '',
        additional: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        fetch("/?no-cache=1", {                                 //eslint-disable-line
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'order',
            ...values,
          }),
        })
          .then(() => {
            navigate('/contact/success')
            setSubmitting(false)
          })
          .catch(error => {
            console.log(error)
            alert("Error: Please Try Again!");                            //eslint-disable-line
            setSubmitting(false)
          })
      }}
      render={({
        errors,
        touched,
        isSubmitting,
        handleSubmit,
        handleReset,
      }) => (<form
        name='order'
        onSubmit={handleSubmit}
        onReset={handleReset}
        data-netlify='true'
        data-netlify-honeypot='bot-field'
      >
        <div className='field'>
          <label className='label'>First Name</label>
          <div className='control'>
            <Field className='input' type='text' placeholder='First Name' name='name' id='name' />
          </div>
          {touched.name && errors.name && <small className='has-text-danger'>{errors.name}</small>}
        </div>

        <div className='field'>
          <label className='label'>Last Name</label>
          <div className='control'>
            <Field className='input' type='text' placeholder='Last Name' name='last_name' id='last_name' />
          </div>
          {touched.last_name && errors.last_name && <small className='has-text-danger'>{errors.last_name}</small>}
        </div>

        <div className='field'>
          <label className='label'>Email</label>
          <div className='control'>
            <Field className='input' type='email' placeholder='Email' name='email' id='email' />
          </div>
          {touched.email && errors.email && <small className='has-text-danger'>{errors.email}</small>}
        </div>

        <div className='field'>
          <label className='label'>Email</label>
          <div className='control'>
            <Field className='input' type='email' placeholder='Email' name='confirm_email' id='confirm_email' />
          </div>
          {touched.confirm_email && errors.confirm_email && <small className='has-text-danger'>{errors.confirm_email}</small>}
        </div>

        <div className='field'>
          <label className='label'>Address</label>
          <div className='control'>
            <Field className='input' type='text' placeholder='Street Address' name='address' id='address' />
          </div>
          {touched.address && errors.address && <small className='has-text-danger'>{errors.address}</small>}
        </div>

        <div className='field'>
          <label className='label'>City</label>
          <div className='control'>
            <Field className='input' type='text' placeholder='City' name='city' id='city' />
          </div>
          {touched.city && errors.city && <small className='has-text-danger'>{errors.city}</small>}
        </div>

        <div className='field'>
          <label className='label'>State</label>
          <div className='control'>
            <Field className='input' type='text' placeholder='State' name='state' id='state' />
          </div>
          {touched.state && errors.state && <small className='has-text-danger'>{errors.state}</small>}
        </div>

        <div className='field'>
          <label className='label'>Postcode</label>
          <div className='control'>
            <Field className='input' type='text' placeholder='Postcode' name='postcode' id='postcode' />
          </div>
          {touched.postcode && errors.postcode && <small className='has-text-danger'>{errors.postcode}</small>}
        </div>

        <div className='field'>
          <label className='label'>Country</label>
          <div className='control'>
            <Field className='input' type='text' placeholder='Country' name='country' id='country' />
          </div>
          {touched.country && errors.country && <small className='has-text-danger'>{errors.country}</small>}
        </div>

        <div className='field'>
          <label className='label'>Mobile Number</label>
          <div className='control'>
            <Field className='input' type='text' placeholder='0400 000 000' name='mobile_number' id='mobile_number' />
          </div>
          {touched.mobile_number && errors.mobile_number && <small className='has-text-danger'>{errors.mobile_number}</small>}
        </div>

        <div className='field'>
          <label className='label'>Length</label>
          <div className='control'>
            <Field className='input' type='text' placeholder='length' name='length' id='length' />
          </div>
          {touched.length && errors.length && <small className='has-text-danger'>{errors.length}</small>}
        </div>

        <div className='field'>
          <label className='label'>Width</label>
          <div className='control'>
            <Field className='input' type='text' placeholder='Width' name='width' id='width' />
          </div>
          {touched.width && errors.width && <small className='has-text-danger'>{errors.width}</small>}
        </div>

        <div className='field'>
          <label className='label'>Thickness</label>
          <div className='control'>
            <Field className='input' type='text' placeholder='Thickness' name='thickness' id='thickness' />
          </div>
          {touched.thickness && errors.thickness && <small className='has-text-danger'>{errors.thickness}</small>}
        </div>

        <div className='field'>
          <label className='label'>Height (CM)</label>
          <div className='control'>
            <Field className='input' type='text' placeholder='Height' name='height' id='height' />
          </div>
          {touched.height && errors.height && <small className='has-text-danger'>{errors.height}</small>}
        </div>

        <div className='field'>
          <label className='label'>Weight (KG)</label>
          <div className='control'>
            <Field className='input' type='text' placeholder='Weight' name='weight' id='weight' />
          </div>
          {touched.weight && errors.weight && <small className='has-text-danger'>{errors.weight}</small>}
        </div>

        <div className='field'>
          <label className='label'>Years Surfing</label>
          <div className='control'>
            <Field className='input' type='text' placeholder='Years Surfing' name='years' id='years' />
          </div>
          {touched.years && errors.years && <small className='has-text-danger'>{errors.years}</small>}
        </div>

        <div className='field'>
          <label className='label'>Additional Information</label>
          <div className='control'>
            <Field className='textarea' component='textarea' placeholder='Tail, fin set up, special design requests' name='additional' id='additional' rows='6' />
          </div>
          {touched.additional && errors.additional && <small className='has-text-danger'>{errors.additional}</small>}
        </div>

        <div className='field is-grouped is-pulled-right'>
          <div className='control'>
            <button className='button' type='reset'>Clear</button>
          </div>
          <div className='control'>
            <button className='button is-primary' type='submit' disabled={isSubmitting}>Submit</button>
          </div>
        </div>
      </form>)}
    />
  )
}

export { OrderForm }
