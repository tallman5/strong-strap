import * as React from "react"
import Layout from "../components/layout"
import { Col, Container, Row } from "../strong-strap"

const HomePage = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col><h1>strong-strap Test Site</h1></Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default HomePage
