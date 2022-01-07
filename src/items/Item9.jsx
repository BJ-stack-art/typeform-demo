import React from 'react'
import {Typography , Box , Button } from '@mui/material'

const Item9 = () => {
  return (
    <div>
      <Typography variant="h5" sx={{marginBottom: 1}}>Thank you for filling up the questioner!</Typography>
      <Typography variant="h5" sx={{marginBottom: 1}}>We try to improve our work to next and beyond!</Typography>
      <Box>
        <Button sx={{marginTop: 2}} variant="contained">Submit</Button>
      </Box>
    </div>
  )
}

export default Item9
