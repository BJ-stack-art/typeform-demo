import React from 'react'
import {Box , Grid} from '@mui/material'

const Item = ({children , color, id}) => {
  return (
    <div id={id} >
      <Box sx={{backgroundColor: color , height: "100vh" , width: "100vw" , color: "#fff"}}>
        <Grid container sx={{height: "100%" , width: "100%"}} alignItems={'center'} justifyContent={'center'}>
          <Grid item md={5}>
            {children}
          </Grid>
        </Grid>
      </Box>      
    </div>
  )
}

export default Item
