import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'
import styles from './App.module.css'
import { useState } from 'react'

function App() {
  let [calVal, setCalVal] = useState("");

  const buttonClicked = (buttonText) => {
    if (buttonText === 'C') {
      setCalVal("")
    } else if (buttonText === '=') {
      const result = eval(calVal)
      setCalVal(result)
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }


  return (
    <div classNameName={styles.calculator} >
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={buttonClicked} />
    </div>
  )
}


export default App;
