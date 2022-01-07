import React from 'react'
import { InputBase  ,Typography , Box , Button } from '@mui/material'

const Item6 = ({pageDown}) => {
  return (
    <div>
      <Typography variant="h5" sx={{marginBottom: 1}}>Please upload the social media screenshots where you mention Myriad.Social to this page!</Typography>
      <Box>
        <Typography variant='body'>If you have multiple files, you can upload a zipped folder.</Typography>
      </Box>
      <Box>
        <Button sx={{marginTop: 2}} onClick={pageDown} variant="contained">OK</Button>
      </Box>
    </div>
  )
}

export default Item6
