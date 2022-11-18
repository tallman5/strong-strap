import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import { Col, Container, Row } from "../strong-strap"

const HomePage = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <h1>Page not found</h1>
            <p>
              Sorry 😔, we couldn't find what you were looking for.
              <br />
              {
                (process.env.NODE_ENV === "development")
                  ?
                  <>
                    <br />
                    Try creating a page in <code>src/pages/</code>.
                    <br />
                  </>
                  :
                  null
              }
              <br />
              <Link to="/">Go home</Link>.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default HomePage
