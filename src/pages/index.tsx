import { graphql, PageProps } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import { getHeaderTags } from "../strong-strap"

const HomePage = () => {
  return (
    <Layout>
      <div className='container'>
        <div className='row'>
          <div className='col'><h1>strong-strap Test Site</h1></div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query HomePage {
    file(relativePath: {eq: "site.webp"}) {
      relativePath
      id
      childImageSharp {
        original {
          src
        }
      }
    }
    site {
      siteMetadata {
        description
        siteUrl
        title
        siteName
      }
    }
  }
`

export const Head = ({ data }: PageProps<Queries.HomePageQuery>) => {
  const returnValue = getHeaderTags({
    baseUrl: data.site?.siteMetadata?.siteUrl || '',
    description: data.site?.siteMetadata?.description || '',
    imageAlt: "Site Image",
    relativeImageUrl: data.file?.childImageSharp?.original?.src || '',
    relativePageUrl: "/",
    siteName: data.site?.siteMetadata?.siteName || '',
    title: data.site?.siteMetadata?.title || '',
    twitterName: "@somebody",
    type: "website"
  })
  return returnValue
}

export default HomePage
