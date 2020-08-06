import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import OrderPageTemplate from '../components/OrderPageTemplate'
import Layout from '../components/Layout'

const OrderPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <OrderPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
      />
    </Layout>
  )
}

OrderPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default OrderPage

export const OrderPageQuery = graphql`
  query OrderPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        meta_title
        meta_description
        heading
      }
    }
  }
`
