import React from 'react'
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import { Stack  ,Typography , Box , Button } from '@mui/material'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

const Item6 = ({pageDown}) => {
  return (
    <div>
      <Typography variant="h5" sx={{marginBottom: 1}}>Please upload the social media screenshots where you mention Myriad.Social to this page!</Typography>
      <Box>
        <Typography variant='body'>If you have multiple files, you can upload a zipped folder.</Typography>
      </Box>
      <Box sx={{marginTop: 2}}>
        <FilePond
          allowMultiple={false}
          name="files" 
          labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        />
      </Box>
      <Stack  direction={'row'} alignItems={'center'} spacing={2}>
        <Button sx={{marginTop: 2}} onClick={pageDown} variant="contained" endIcon={<CheckRoundedIcon />} >OK</Button>
        <Typography variant="body2" sx={{display: 'block' , paddingTop: 1.5}}>press Enter</Typography>
      </Stack>
    </div>
  )
}

export default Item6
