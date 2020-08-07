import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { OrderForm } from '../forms'

const OrderPageTemplate = ({ title, subtitle, meta_title, meta_description }) => {
  return <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='hero is-primary is-bold is-medium'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='title'>
                  {title}
                </h1>
                <h2 className='subtitle'>
                  {subtitle}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section'>
      <div className='container'>
        <OrderForm />
      </div>
    </section>
  </div>
}

OrderPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
}

export default OrderPageTemplate
