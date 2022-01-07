import React , {useState, useEffect} from 'react'
import { Box  ,Typography , Button , Stack } from '@mui/material'
import {apiPostalCode} from '../datasources/postalCodeRepo'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Select from 'react-select'

const Item4 = ({pageDown}) => {
  // get list postal code
    const [showOptionPostalCode, setShowOptionPostalCode] = useState(false)
    const [suggestionPostalCode, setSuggestionPostalCode] = useState([])
    function getPostalCode(_postal) {
        apiPostalCode({ postalCode: _postal })
        .then((res) => {
            let _tmpData = res.data;
            _tmpData = _tmpData.slice(0,20).map(item => {
                return {
                    value: item.POSTCODE,
                    label: item.POSTCODE,
                    data: item,
                }
            })
            setSuggestionPostalCode( _tmpData);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    const onChangePostalCode = (text) => {
        getPostalCode(text)
        setShowOptionPostalCode(text !== "" ? true : false)
    }

    useEffect(() =>  onChangePostalCode('1'),[])
  
  return (
    <div>
      <Typography variant="h5" sx={{marginBottom: 1}}>What is your postal code?</Typography>
      <Box sx={{color: "#333"}}>
        <div
          onKeyUp={(e) => {
              onChangePostalCode(e.target.value)

              if(e.target.value?.length === 6) {
                  const item = suggestionPostalCode.find(item => item.data.POSTCODE === e.target.value)
                  if(item) {
                      const {data} = item
                      setShowOptionPostalCode(false)
                  }
              } 
          }}
        >
          <Select 
                classNamePrefix="Postal Code"  
                options={suggestionPostalCode} />
        </div>
      </Box>
      <Stack direction={'row'} alignItems={'center'} spacing={2}>
        <Button sx={{marginTop: 2}} onClick={pageDown} variant="contained" endIcon={<CheckRoundedIcon />} >OK</Button>
        <Typography variant="body2" sx={{display: 'block' , paddingTop: 1.5}}>press Enter</Typography>
      </Stack>
    </div>
  )
}

export default Item4
