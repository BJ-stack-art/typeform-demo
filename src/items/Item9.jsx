import React from 'react'
import {Typography , Box , Button } from '@mui/material'

const Item9 = () => {
  return (
    <div>
      <Typography variant="h5" sx={{marginBottom: 1}}>Thank you for filling in the form!</Typography>
      <Typography variant="h5" sx={{marginBottom: 1}}>Please note that you also might be eligible for rewards if you are active on the Myriad.Social platform itself. Go here for more info on our on-Myriad airdrop!</Typography>
      <Box>
        <Button sx={{marginTop: 2}} variant="contained">Submit</Button>
      </Box>
    </div>
  )
}

export default Item9
