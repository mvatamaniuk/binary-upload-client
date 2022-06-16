import { Grid } from '@mui/material'

import { DropZoneForm } from './components/dropzone/dropzone.form'
import { FilesList } from './components/files-list/files.list'

function App() {
  return (
    <Grid container justifyContent='space-around'>
      <Grid item md={4}>
        <DropZoneForm />
      </Grid>
      <Grid item md={4}>
        <FilesList />
      </Grid>
    </Grid>
  )
}

export default App
