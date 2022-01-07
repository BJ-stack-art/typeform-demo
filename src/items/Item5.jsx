import React from 'react'
import { InputBase  ,Typography , Stack , Button } from '@mui/material'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

const Item5 = ({pageDown}) => {
  return (
    <div>
      <Typography variant="h5" sx={{marginBottom: 1}}>What is your Facebook profile or page link?</Typography>
      <InputBase sx={{color: "#fff" , borderBottom: "1px solid #fff" , width: "100%"}} placeholder="Type your answer here..."/>
      <Stack direction={'row'} alignItems={'center'} spacing={2}>
        <Button sx={{marginTop: 2}} onClick={pageDown} variant="contained" endIcon={<CheckRoundedIcon />} >OK</Button>
        <Typography variant="body2" sx={{display: 'block' , paddingTop: 1.5}}>press Enter</Typography>
      </Stack>
    </div>
  )
}

export default Item5
