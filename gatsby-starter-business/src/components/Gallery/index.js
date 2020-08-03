//pricing index.js

import React from 'react'
import PropTypes from 'prop-types'

const Gallery = ({ data }) => (
  <div className='columns is-multiline'>
    {data.map(picture => (
      <div key={picture.image} className='column is-6' style={{ border: '1px solid #eaecee' }}>
        <section className='section'>
          <p className='has-text-centered'>
            <img alt='' src={picture.image} />
          </p>

          <p>{picture.description}</p>
        </section>
      </div>
    ))}
  </div>
)

Gallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      description: PropTypes.string,
    })
  ),
}

export default Gallery
