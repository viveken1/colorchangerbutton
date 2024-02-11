import { useState } from 'react'
import './App.css'

function App() {
  let aqua = "#9bcffa";
  const [bgcolor,setbgcolor]=useState(aqua)
  const changeRed = ()=> {
    let red = "#e62e2e"
    setbgcolor(red)
  }
  const changeBlue = ()=> {
    let blue = "#3c43cf"
    setbgcolor(blue)
  }
  const changeOrange = ()=> {
    let orange = "#f59520"
    setbgcolor(orange)
  }
  const changeGreen = ()=> {
    let green = "#76f553"
    setbgcolor(green)
  }
  const changeYellow = ()=> {
    let yellow = "#eff241"
    setbgcolor(yellow)
  }

  return (
    <>

<div style={{background:bgcolor}} className='background'>
      <h1 className='heading'>BACKGROUND COLOR CHANGING BUTTONS</h1>
<button onClick={changeRed}>Red</button>
<button onClick={changeBlue}>Blue</button>
<button onClick={changeOrange}>Orange</button>
<button onClick={changeGreen}>Green</button>
<button onClick={changeYellow}>Yellow</button>

    </div>
    </>
  )
}

export default App
