import * as React from 'react'

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
      <FileUpload fileLabel={fileLabel} fileName={fileName} fileUploadHandler={handleUploadFile} />
    </div>
  )
}

const TabController: React.FC = () => (
  <>
    <div className="tabs">
      <ul></ul>
    </div>
    {}
  </>
)

interface TabProps {
  tabs: Array<{ id: string, title: string, isActive?: boolean }>
}

const Tab: React.FC<TabProps> = ({ tabs }) => (
  <div className="tabs">
    <ul>
      {tabs.map(({id, title, isActive}) => isActive ? (<li key={id} className="is-active"><a>{title}</a></li>) : (<li key={id}><a>{title}</a></li>))}
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
