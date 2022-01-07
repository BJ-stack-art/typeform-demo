import React from 'react'
import { Typography , Button , Stack , Box } from '@mui/material'

const Item1 = ({pageDown}) => {
  return (
    <div>
      <Typography variant="h5" sx={{marginBottom: 3}}>This is a sample questioner based on data from Salesforce</Typography>
      <Box>
        <Typography variant="body">You should check wether this question is capable enough to cover what you need</Typography>
      </Box>
      <Stack sx={{marginTop: 2}}>
        <Box>
          <Button variant="contained" onClick={pageDown}>Agree</Button>
        </Box>
      </Stack>
    </div>
  )
}

export default Item1
