import * as React from "react"
import { Col, Container, Row } from "../../../src/index"
import Layout from "../components/layout"

const HomePage = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col colSpan={6}>
            <h1>Col One</h1>
          </Col>
          <Col colSpan={3}>
            <h1>Col Two</h1>
          </Col>
          <Col colSpan={3}>
            <h1>Col Three</h1>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default HomePage
