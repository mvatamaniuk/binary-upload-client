import { Box, Button, Typography } from '@mui/material'
import { FC, FormEvent, useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import { filesApi } from '../../api/files.api'

export const DropZoneForm: FC = () => {
  const [file, setFile] = useState<File>()

  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    setFile(acceptedFiles[0])
  }, [])

  const { getRootProps, getInputProps, isDragReject } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg'],
      'application/pdf': ['.pdf'],
    },
  })

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!file) return

    const formData = new FormData()

    formData.append('file', file)

    try {
      await filesApi().upload(formData)
      alert('File  has been uploaded')
    } catch (err) {}
  }

  return (
    <Box>
      <Box sx={{ mt: 10 }}>
        <form onSubmit={handleFormSubmit}>
          <Box
            {...getRootProps()}
            sx={{ border: '1px solid silver', height: 300 }}
          >
            <input {...getInputProps()} />

            {isDragReject ? (
              <Typography>Wrong file format</Typography>
            ) : (
              <>
                <Typography>
                  Drag 'n' drop some files here, or click to select files
                </Typography>
                <Typography variant='caption'>
                  Only png, jpeg and pdf files supported
                </Typography>
              </>
            )}
          </Box>
          <Typography sx={{ my: 2 }}>{file?.name}</Typography>

          <Button type='submit' variant='contained' sx={{ my: 3 }}>
            upload image
          </Button>
        </form>
      </Box>
    </Box>
  )
}
