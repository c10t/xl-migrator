import * as React from 'react'
import { graphql } from 'gatsby'
import HTMLHead from '../components/html-head'
import AppNavbar from '../components/app-navbar'
import '../layouts/index.css'
import { SampleCsvDef, SampleCsvRecord, getRecord } from '../graphql/sample-csv';

interface IndexProps {
  data: SampleCsvDef
}

const Index: React.FC<IndexProps> = ({ data }) => {
  console.log(data)
  const records = getRecord(data)

  return (
    <>
      <HTMLHead></HTMLHead>
      <AppNavbar />
      <section className="section">
        <div className="container">
          <p>Container</p>
        </div>
      </section>
    </>
  )
}

export const IndexQuery = graphql`
  query {
    allSampleCsv {
      edges {
        node {
          id
          date
          name
          score
        }
      }
    }
  }
`

export default Index
