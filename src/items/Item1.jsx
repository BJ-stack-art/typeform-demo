import React from 'react'
import { Typography , Button , Stack , Box } from '@mui/material'

const Item1 = ({pageDown}) => {
  return (
    <div>
      <Typography variant="h5" sx={{marginBottom: 3}}>Double Myriad Airdrop: Mainstream Social Media Edition</Typography>
      <Typography variant="h5" sx={{marginBottom: 1}}>If you post on your mainstream social media about Myriad.Social, you might be eligible for rewards! </Typography>
      <Box>
        <Typography variant="body">Disclaimer: To utilize this form, you will need to provide screenshots and links to your social media profiles. It is your choice to skip questions that you are unwilling to answer.</Typography>
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
