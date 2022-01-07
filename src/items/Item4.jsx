import React from 'react'
import { InputBase  ,Typography , Box , Button , Stack } from '@mui/material'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

const Item4 = ({pageDown}) => {
  return (
    <div>
      <Typography variant="h5" sx={{marginBottom: 1}}>What is your Reddit username?</Typography>
      <InputBase sx={{color: "#fff" , borderBottom: "1px solid #fff" , width: "100%"}} placeholder="Type your answer here..."/>
      <Stack direction={'row'} alignItems={'center'} spacing={2}>
        <Button sx={{marginTop: 2}} onClick={pageDown} variant="contained" endIcon={<CheckRoundedIcon />} >OK</Button>
        <Typography variant="body2" sx={{display: 'block' , paddingTop: 1.5}}>press Enter</Typography>
      </Stack>
    </div>
  )
}

export default Item4
