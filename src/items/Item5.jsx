import React from 'react'
import { InputBase  ,Typography , Stack , Button , FormControlLabel , Checkbox } from '@mui/material'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

const Item5 = ({pageDown}) => {
  return (
    <div>
      <Typography variant="h5" sx={{marginBottom: 1}}>What is your skill?</Typography>
      <Stack direction={'row'}>
        <FormControlLabel 
          label={"HTML"}
          control={  <Checkbox sx={{color: "#fff" , "&.Mui-checked" : {color: "#fff"}}} />}
        />
        <FormControlLabel 
          label={"CSS"}
          control={  <Checkbox sx={{color: "#fff" , "&.Mui-checked" : {color: "#fff"}}} />}
        />
        <FormControlLabel 
          label={"Javascript"}
          control={  <Checkbox sx={{color: "#fff" , "&.Mui-checked" : {color: "#fff"}}} />}
        />
        <FormControlLabel 
          label={"Java"}
          control={  <Checkbox sx={{color: "#fff" , "&.Mui-checked" : {color: "#fff"}}} />}
        />
        <FormControlLabel 
          label={"Rust"}
          control={  <Checkbox sx={{color: "#fff" , "&.Mui-checked" : {color: "#fff"}}} />}
        />
        <FormControlLabel 
          label={"Go Lang"}
          control={  <Checkbox sx={{color: "#fff" , "&.Mui-checked" : {color: "#fff"}}} />}
        />
      </Stack>
      <Stack direction={'row'} alignItems={'center'} spacing={2}>
        <Button sx={{marginTop: 2}} onClick={pageDown} variant="contained" endIcon={<CheckRoundedIcon />} >OK</Button>
        <Typography variant="body2" sx={{display: 'block' , paddingTop: 1.5}}>press Enter</Typography>
      </Stack>
    </div>
  )
}

export default Item5
