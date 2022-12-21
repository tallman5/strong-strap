import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"

const HomePage = () => {
  return (
    <Layout>
      <div className='container'>
        <div className='row'>
          <div className='col'>
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
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
