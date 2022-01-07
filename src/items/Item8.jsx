import React from 'react'
import { InputBase  ,Typography , Box , Button } from '@mui/material'

const Item8 = ({pageDown}) => {
  return (
    <div>
      <Typography variant="h5" sx={{marginBottom: 1}}>And finally, what's your email address?</Typography>
      <InputBase sx={{color: "#fff" , borderBottom: "1px solid #fff" , width: "100%"}} placeholder="Type your answer here..."/>
      <Box>
        <Button sx={{marginTop: 2}} onClick={pageDown} variant="contained">OK</Button>
      </Box>
    </div>
  )
}

export default Item8
