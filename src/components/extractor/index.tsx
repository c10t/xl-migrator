import * as React from 'react'
import styled from 'styled-components'

import Icon from '../atoms/icon'

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
        <FileUpload fileLabel={fileLabel} fileName={fileName} fileUploadHandler={handleUploadFile} />
      </VerticalWrapper>
      <VerticalWrapper>
      <TabTable contents={[
        {id: 'foo1', title: 'foo', content: (<h2 className="title">foo</h2>)},
        {id: 'baar', title: 'bar', content: 'baz'}
      ]} />
      </VerticalWrapper>
    </div>
  )
}

const VerticalWrapper = styled.div`
  background-color: #60d2b6;
  & + & {
    margin-top: 1rem;
  }
`

interface TabTableProps {
  contents: Array<{ id: string, title: string, content: React.ReactNode }>
}

const TabTable: React.FC<TabTableProps> = ({ contents }) => {
  const [selected, setSelected] = React.useState(contents[0])

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

export default Extractor
