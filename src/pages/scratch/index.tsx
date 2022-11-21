import { Link } from 'gatsby'
import React, { CSSProperties, useEffect, useState } from 'react'
import Layout from '../../components/layout'
import { AspectRatioContainer, Card, CardWall, Col, Container, Row, Size, useMedia } from '../../strong-strap'
import * as s from '../../strong-strap/styles'

const radius = '5px'

const ImageStyle: CSSProperties = {
    ...s.AspectRatioItem,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
}

const LinkStyle: CSSProperties = {
    color: 'var(--bs-body-color)',
    padding: '5px',
    textDecoration: 'none',
}

const ScratchIndex = () => {
    const [imageUrls, setImageUrls] = useState<string[]>([])
    const colWidth = useMedia(
        ['(min-width: 1400px)', '(min-width: 1200px)', '(min-width: 1000px)', '(min-width: 800px)', '(min-width: 600px)', '(min-width: 400px)'],
        ['14.28%', '16%', '20%', '25%', '33.33%', '50%'], '100%'
    )
    console.log(colWidth)

    const linkStyle: CSSProperties = {
        ...LinkStyle,
        width: colWidth
    }

    useEffect(() => {
        if (imageUrls.length > 0) return
        const urls: string[] = []
        for (let index = 0; index < 50; index++) {
            urls.push('https://image.tmdb.org/t/p/w185/lnWkyG3LLgbbrIEeyl5mK5VRFe4.jpg')
        }
        setImageUrls(urls)
    }, [imageUrls])

    return (
        <Layout>
            <Container>
                <Row>
                    <Col><h1>Scratch</h1></Col>
                </Row>
                <br />
            </Container>
            <Container size={Size.fluid}>
                <Row>
                    <Col>
                        <CardWall>
                            {
                                imageUrls.map((iUrl, index) => {
                                    return (
                                        <Link key={index} to="#" style={linkStyle}>
                                            <Card>
                                                <div>
                                                    <AspectRatioContainer paddingTop='150%'>
                                                        <img style={ImageStyle} src={iUrl} alt='Movie' />
                                                    </AspectRatioContainer>
                                                </div>
                                            </Card>
                                        </Link>
                                    )
                                })
                            }
                        </CardWall>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default ScratchIndex