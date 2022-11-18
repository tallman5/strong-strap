import * as React from 'react'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from "gatsby"
import { Col, Container, Row } from '../../strong-strap'
import * as s from '../../strong-strap/styles'

const PostTemplate = ({ data, ...rest }: any) => {

  const fm = data.mdx.frontmatter
  const aspectImage = getImage(fm.imageAspect)

  return (
    <Layout>
      {
        (aspectImage)
          ? <GatsbyImage image={aspectImage} alt={fm.imageAlt} />
          : null
      }
      <hr style={{ margin: 0 }} />
      <br />
      <Container>
        <Row>
          <Col>
            <h1>{fm.title}</h1>
            <div style={s.Lead}>{fm.description}</div>
            <span style={{ fontSize: 'smaller' }}><cite>Published {(new Date(fm.date)).toLocaleDateString()} by {fm.author}</cite></span>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            {rest.children}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        description
        slug
        imageAlt
        imageAspect: image {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 6
              layout: FULL_WIDTH
            )
          }
        }
        image {
          childImageSharp {
            gatsbyImageData
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
    }
  }
`

export default PostTemplate

export const Head = (props: any) => {
  return <>
    <title>{props.data.mdx.frontmatter.title}</title>
  </>
}