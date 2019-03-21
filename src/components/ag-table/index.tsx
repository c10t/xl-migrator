import * as React from 'react'

import { AgGridReact } from 'ag-grid-react';
import styled from 'styled-components'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

interface AgTableProps {
  columnDefs: Array<{ headerName: string, field: string }>
  rowData: Array<Map<string, string | number>> // TODO: Check which is better using Object or using Map
}

const AgTable: React.FC<AgTableProps> = ({ columnDefs, rowData }) => {
  return (
    <TableWrapper className="ag-theme-balham">
      <AgGridReact columnDefs={columnDefs} rowData={rowData.map(r => mapToObject(r))} />
    </TableWrapper>
  )
}

const mapToObject = <T extends {}>(m: Map<string, T>): {[key: string]: T} => [...m].reduce((prev, [key, value]) => Object.assign(prev, {[key]: value}), {})

const TableWrapper = styled.div`
  height: 500px;
  width: 100%;
`

export default AgTable
