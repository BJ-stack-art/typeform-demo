import React from 'react'
import { InputBase  ,Typography , Box , Button , Stack } from '@mui/material'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

const Item7 = ({pageDown}) => {
  return (
    <div>
      <Typography variant="h5" sx={{marginBottom: 1}}>Please inform us the social media links where you mention Myriad.Social to this page!</Typography>
      <Box>
        <Typography variant='body'>You can separate the links with a line break (Shift+Enter)</Typography>
      </Box>
      <InputBase sx={{color: "#fff" , borderBottom: "1px solid #fff" , width: "100%"}} placeholder="Type your answer here..."/>
      <Stack direction={'row'} alignItems={'center'} spacing={2}>
        <Button sx={{marginTop: 1}} onClick={pageDown} variant="contained" endIcon={<CheckRoundedIcon />} >OK</Button>
        <Typography variant="body2" sx={{display: 'block' , paddingTop: 1.5}}>press Enter</Typography>
      </Stack>
    </div>
  )
}

export default Item7
