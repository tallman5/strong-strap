import * as React from 'react'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from "gatsby"
import { Container, Row, Col } from '../../../../src/index'
import * as s from '../../../../src/styles'

const PostTemplate = (props) => {
    const { location, data } = props
    // const hi = getHi(location, data)
    const fm = props.pageContext.frontmatter
    const aspectImage = getImage(props.data.mdx.frontmatter.imageAspect)

    // const disqusConfig = {
    //     url: hi.baseUrl + hi.relativePageUrl,
    //     identifier: fm.slug,
    //     title: hi.title,
    // }

    return (
        <Layout>
            <GatsbyImage image={aspectImage} alt={props.data.mdx.frontmatter.imageAlt} />
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
                        {props.children}
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

// function getHi(location, data) {
//     const fm = data.mdx.frontmatter

//     const hi = getDefaultHeaderInfo()
//     hi.description = fm.description
//     hi.imageAlt = fm.imageAlt
//     hi.relativeImageUrl = fm.image.childImageSharp.resize.src
//     hi.relativePageUrl = location.pathname
//     hi.title = fm.title

//     return hi
// }


// export const Head = ({ location, data }) => {
//     const hi = getHi(location, data)
//     const returnValue = getHeaderTags(hi)
//     return returnValue
// }


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
