import * as React from 'react'
import { graphql } from "gatsby"
import HTMLHead from '../components/html-head'
import '../layouts/index.css'
import { SampleCsvDef, SampleCsvRecord, getRecord } from '../graphql/sample-csv';

interface IndexProps {
  gqlData: SampleCsvDef
}

const Index: React.FC<IndexProps> = ({ gqlData }) => {
  console.log(gqlData)
  const data = getRecord(gqlData)

    return (
      <>
        <HTMLHead></HTMLHead>
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
          category
          amount
          y
          m
          d
        }
      }
    }
  }
`

export default Index
