//GalleryPageTemplate index.js

import React from 'react'
import Helmet from 'react-helmet'
import Gallery from '../Gallery'
import PropTypes from 'prop-types'

const GalleryPageTemplate = ({
  title,
  meta_title,
  meta_description,
  gallery,
}) => (
  <div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section section--gradient'>
      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <h2 className='has-text-weight-semibold is-size-2'>
                  {gallery.heading}
                </h2>
                <p className='is-size-5'>{gallery.description}</p>
                <Gallery data={gallery.pics} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

GalleryPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  gallery: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    pics: PropTypes.array,
  }),
}

export default GalleryPageTemplate
