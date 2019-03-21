import * as React from 'react'
import styled from 'styled-components'

import Icon from '../atoms/icon'
import AgTable from '../ag-table'

const Extractor: React.FC = () => {
  const [fileName, setFileName] = React.useState('No file selected')
  const fileLabel = 'Import'

  const handleUploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    if (!event.target.files) {
      return
    }
    const file = event.target.files.item(0)
    if (file) {
      setFileName(file.name)
    }
  }

  return (
    <div className="container">
      <VerticalWrapper>
        <h2 className="title is-4">Choose your file</h2>
      </VerticalWrapper>
      <VerticalWrapper>
        <FileUpload fileLabel={fileLabel} fileName={fileName} fileUploadHandler={handleUploadFile} />
      </VerticalWrapper>
      <VerticalWrapper>
        <h2 className="title is-4">Import Result</h2>
      </VerticalWrapper>
      <VerticalWrapper>
      <TabTable contents={[
        {id: 'grid', title: 'qux', content: 
          (<AgTable
            columnDefs={[
              { headerName: "Make", field: "make" },
              { headerName: "Model", field: "model" },
              { headerName: "Price", field: "price" },
            ]}
            rowData={[
              { make: "Toyota", model: "Celica", price: 35000},
              { make: "Ford", model: "Mondeo", price: 32000 },
              { make: "Porsche", model: "Boxter", price: 72000 }
            ]} />)
        },
        {id: 'foo1', title: 'foo', content: (<h2 className="title">foo</h2>)},
        {id: 'baar', title: 'bar', content: 'baz'}
      ]} />
      </VerticalWrapper>
      <VerticalWrapper>
        <h2 className="title is-4">Convert Rule</h2>
      </VerticalWrapper>
      <VerticalWrapper>
        <TabTable contents={[
          {id: 'baaz', title: 'barz', content: (<ConvertRuleForm columns={[]} />)},
          {id: 'baal', title: 'barl', content: (<h4 className="title is-4">baaaaaa</h4>)},
          {id: 'baas', title: 'bars', content: (<ConvertRuleForm columns={[]} />)}
        ]} />
      </VerticalWrapper>
      <VerticalWrapper>
        <div><button className="button is-success is-fullwidth">EXPORT</button></div>
      </VerticalWrapper>
    </div>
  )
}

const VerticalWrapper = styled.div`
  & + & {
    margin-top: 1rem;
  }
`

interface TabTableProps {
  contents: Array<{ id: string, title: string, content: React.ReactNode }>
}

const TabTable: React.FC<TabTableProps> = ({ contents }) => {
  const [selected, setSelected] = React.useState(contents[0])

  if (contents.length < 1) { return (<></>) }

  return (
    <>
      <Tab tabs={contents.map((content) => ({
        id: content.id, 
        title: content.title, 
        isActive: selected.id === content.id,
        handler: () => setSelected(content)
        }))} />
      {selected.content}
    </>
  )
}

interface TabProps {
  tabs: Array<{ id: string, title: string, isActive?: boolean, handler: () => void }>
}

const Tab: React.FC<TabProps> = ({ tabs }) => (
  <div className="tabs">
    <ul>
      {tabs.map(({id, title, isActive, handler}) => isActive ? 
        (<li key={id} className="is-active"><a>{title}</a></li>) 
        : (<li key={id}><a onClick={() => handler()}>{title}</a></li>))}
    </ul>
  </div>
)

interface FileUploadProps {
  fileLabel: string
  fileName: string
  fileUploadHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const FileUpload: React.FC<FileUploadProps> = ({ fileLabel, fileName, fileUploadHandler }) => (
  <div className="file has-name is-fullwidth is-info">
    <label className="file-label">
      <input className="file-input" type="file" name="resume" onChange={(event) => fileUploadHandler(event)} />
      <span className="file-cta">
        <Icon name="fa-file-import" isFileIcon />
        <span className="file-label">{fileLabel}</span>
      </span>
      <span className="file-name">{fileName}</span>
    </label>
  </div>
)

interface ConvertRuleFormProps {
  columns: string[]
}

const ConvertRuleForm: React.FC<ConvertRuleFormProps> = ({ columns }) => {
  return (
    <div className="box">
      <div className="field is-horizontal">
        <FieldLabel label="column1" />
        <div className="field-body">
          <div className="field">
            <SelectControl options={[
              {id: '1', name: 'Business development'},
              {id: '2', name: 'Marketing'},
              {id: '3', name: 'Sales'}
            ]}/>
            <p className="help is-danger">
              This field is required
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const FieldLabel: React.FC<{ label: string }> = ({ label }) => (
  <div className="field-label is-normal">
    <label className="label"><input type="checkbox" />{label}</label>
  </div>
)

const SelectControl: React.FC<{ options: Array<{id: string, name: string}> }> = ({ options }) => (
  <div className="control">
    <div className="select is-fullwidth">
      <select>
        {options.map(({id, name}) => (<option key={id}>{name}</option>))}
      </select>
    </div>
  </div>
)

export default Extractor
