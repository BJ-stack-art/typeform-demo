import React , {useRef , useEffect , useState} from 'react'
import Item from "./Item";
import * as Scroll from 'react-scroll';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { purple , indigo } from '@mui/material/colors'
import './app.css'
import Start from './items/Start'
import Item1 from './items/Item1'
import Item2 from './items/Item2'
import Item3 from './items/Item3'
import Item4 from './items/Item4'
import Item5 from './items/Item5'
import Item6 from './items/Item6'
import Item7 from './items/Item7'
import Item8 from './items/Item8'
import Item9 from './items/Item9'

let scroll = Scroll.animateScroll;


function App() {
  const container = useRef(null)
  const [isStart, setIsStart] = useState(false)
  const [scaleScroll, setScaleScroll] = useState(0)
  const [items, setItems] = useState(0)
  const [count, setCount] = useState(1)

  const pageUp = () => {
    scroll.scrollMore(scaleScroll * -1)
    if(count > 1) setCount(count-1)
  }
  
  const pageDown = () => {
    scroll.scrollMore(scaleScroll)
    if(count <= items) setCount(count+1)
  }

  useEffect(() => {
    setItems(container.current.children.length)
    setScaleScroll(container.current.firstElementChild.scrollHeight)
  }, [])

  useEffect(() => {
    scroll.scrollTo((count-1) * scaleScroll)
  }, [count])
  
  return (
    <div style={{overflowX: "hidden"}}>
      <Box sx={{position: "fixed" , bottom:30, right:30}}>
        <ButtonGroup variant="contained" sx={{backgroundColor: "#fff"}}>
          <Button disabled={count === 1} onClick={pageUp}>
            <KeyboardArrowUpOutlinedIcon />
          </Button>
          <Button disabled={count >= 9} onClick={pageDown}>
            <KeyboardArrowDownOutlinedIcon />
          </Button>
        </ButtonGroup>
      </Box>


      <Box sx={{transform: isStart ? "translateY(-100vh)" : "translateY(0)", position: "fixed" , top: 0, left: 0, zIndex: 1000 , transition: ".8s"}}>
        <Item color={indigo[300]}>
          <Start setIsStart={setIsStart} />
        </Item>
      </Box>

      <Box ref={container}>
        <Item color={purple[300]}>
          <Item1 pageDown={pageDown} />
        </Item>
        <Item color={indigo[300]}>
          <Item2 pageDown={pageDown} />
        </Item>
        <Item color={purple[300]}>
          <Item3 pageDown={pageDown} />
        </Item>
        <Item color={indigo[300]}>
          <Item4 pageDown={pageDown} />
        </Item>
        <Item color={purple[300]}>
          <Item5 pageDown={pageDown} />
        </Item>
        <Item color={indigo[300]}>
          <Item6 pageDown={pageDown} />
        </Item>
        <Item color={purple[300]}>
          <Item7 pageDown={pageDown} />
        </Item>
        <Item color={indigo[300]}>
          <Item8 pageDown={pageDown} />
        </Item>
        <Item color={purple[300]}>
          <Item9 pageDown={pageDown} />
        </Item>
      </Box>

    </div>
  );
}

export default App;
