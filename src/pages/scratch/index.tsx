import { graphql, Link, PageProps } from 'gatsby'
import React from 'react'
import Layout from '../../components/layout'
import { Seo } from '../../strong-strap'

const ScratchIndex = ({ data }: PageProps<Queries.ScratchIndexQuery>) => {
    return (
        <Layout>
            <Seo headerInfo={{
                baseUrl: data.site?.siteMetadata?.siteUrl || '',
                description: 'A collection of pages showing various components.',
                imageAlt: "Site Image",
                relativeImageUrl: data.file?.childImageSharp?.original?.src || '',
                relativePageUrl: "/scratch/",
                siteName: data.site?.siteMetadata?.siteName || '',
                title: 'Scratch',
                twitterName: "@somebody",
                type: "website"
            }} />

            <div className='container'>
                <div className='row'>
                    <div className='col'><h1>Scratch</h1></div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <Link to='./carouselSample/'>Carousel</Link><br />
                        <Link to='./horizScroll/'>Horizontal Scoll</Link><br />
                        <Link to='./iconsSample/'>Icons</Link><br />
                        <Link to='./infiniteScroll/'>Infinite Scroll</Link><br />
                        <Link to='./messages/'>Messages</Link><br />
                        <Link to='./motions/'>Motion</Link><br />
                        <Link to='./qr-code/'>QR Code</Link><br />
                        <Link to='./symbols/'>Symbols</Link><br />
                        <Link to='./walls/'>Walls</Link><br />
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export const query = graphql`
  query ScratchIndex {
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

export default ScratchIndex
