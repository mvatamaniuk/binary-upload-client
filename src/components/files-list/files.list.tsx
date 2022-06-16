import { Box, Typography } from '@mui/material'
import { FC, useEffect, useState } from 'react'

import { filesApi } from '../../api/files.api'
import { IFile } from '../../types/IFile'

export const FilesList: FC = () => {
  const [files, setFiles] = useState<Array<IFile>>([])

  useEffect(() => {
    const loadFiles = async () => {
      const filesData = await filesApi().get()

      const { data } = filesData

      setFiles(data.files)
    }

    loadFiles()
  }, [])

  return (
    <Box>
      {files.map((file) => (
        <Box sx={{ my: 1, border: '1px solid silver', borderRadius: 5, p: 3 }}>
          <img
            src={`data:image/png;base64,${file.source.file}`}
            alt=''
            style={{ width: 50, height: 30 }}
          />

          <Typography>{file.name}</Typography>
        </Box>
      ))}
    </Box>
  )
}
