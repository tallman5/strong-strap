import * as React from "react"
import { Col, Container, Row } from "../../../src/index"
import Layout from '../components/layout'

const NotFoundPage = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <h1>Page Not Found</h1>
            <p></p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default NotFoundPage