import React from 'react'
import { Col, Container, Row } from '@tallman/strong-strap'
import Layout from '../../components/layout'

const PostsIndex = () => {
    return (
        <Layout>
            <Container>
                <Row>
                    <Col><h1>Posts</h1></Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default PostsIndex