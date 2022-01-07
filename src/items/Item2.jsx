import React from 'react'
import { InputBase  ,Typography , Box , Button } from '@mui/material'

const Item2 = ({pageDown}) => {
  return (
    <div>
      <Typography variant="h5" sx={{marginBottom: 1}}>What's your Myriad Social username?*</Typography>
      <Box>
        <Typography variant='body'>If you don't have a username, please create one here.</Typography>
      </Box>
      <InputBase sx={{color: "#fff" , borderBottom: "1px solid #fff" , width: "100%" , marginTop: 1}} placeholder="Type your answer here..."/>
      <Box>
        <Button sx={{marginTop: 2}} onClick={pageDown} variant="contained">OK</Button>
      </Box>
    </div>
  )
}

export default Item2
