import * as React from 'react'

import Icon from '../atoms/icon'

const Extractor: React.FC = () => {
  const [filename, setFilename] = React.useState('No file selected')
  const fileLabel = 'Import'

  const handleUploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    if (!event.target.files) {
      return
    }
    const file = event.target.files.item(0)
    if (file) {
      setFilename(file.name)
    }
  }

  return (<>
    <div className="file has-name is-fullwidth is-info">
      <label className="file-label">
        <input className="file-input" type="file" name="resume"
          onChange={(event) => handleUploadFile(event)} />
        <span className="file-cta">
          <Icon name="fa-file-import" isFileIcon />
          <span className="file-label">{fileLabel}</span>
        </span>
        <span className="file-name">{filename}</span>
      </label>
    </div>
  </>)
}

export default Extractor
