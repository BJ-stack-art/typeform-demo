import React from 'react'
import { Typography , Button , Box } from '@mui/material'

const Start = ({setIsStart}) => {
  return (
    <div>
      <Box sx={{textAlign: "center"}}>
        <Typography variant="h5">Octopus Guild Presents: Airdrop Form for Myriad.Social!</Typography>
        <Box>
          <Typography variant="body">Actively share about Myriad Social on your mainstream social media, and get $MYRIA rewards in return!</Typography>
        </Box>
        <Box>
          <Typography variant="body">Examples -- postable on Twitter, Facebook, Reddit, etc: - "I just joined Myriad.Social to get control of my personal data! Join me here: myriad.social."</Typography>
        </Box>
        <Box>
          <Typography variant="body">- [Screenshot of Myriad Social app] "Here is my Myriad Social profile! I can tip you from Myriad even if you have not joined yet!"</Typography>
        </Box>
          <Button sx={{marginTop: 3}} variant="contained" onClick={() => setIsStart(true)}>Let's Start</Button>
      </Box>
    </div>
  )
}

export default Start
