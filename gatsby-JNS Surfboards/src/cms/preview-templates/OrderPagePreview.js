import React from 'react'
import PropTypes from 'prop-types'
import OrderPageTemplate from '../../components/OrderPageTemplate'

const OrderPagePreview = ({ entry, getAsset }) => {
  return (
    <OrderPageTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
    />
  )
}

OrderPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default OrderPagePreview
