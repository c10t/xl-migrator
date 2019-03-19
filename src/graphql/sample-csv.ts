export interface SampleCsvDef {
  allSampleCsv: {
    edges: [{
      node: SampleCsvRecord
    }]
  }
}

export interface SampleCsvRecord {
  id: number
  date: Date
  name: string
  score: number
}

export const getRecord = (gql: SampleCsvDef): SampleCsvRecord[] => gql.allSampleCsv.edges.map(n => ({ ...n.node }))
