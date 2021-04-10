import React, {useRef, useState} from 'react'
import ReactDOM from 'react-dom'
import {FocusInputProps, FocusInput} from './focusabble-input'

function App() {
  const myRef = useRef()
  const comProp: FocusInputProps = {
    focussed: true,
    passedRef: myRef,
  }
  const [propdata, setPropdata] = useState(comProp)
  console.log(propdata)
  const onButtonClick = () => {
    setPropdata((preValue) => {
      return {...preValue, focussed: !preValue.focussed}
    })
  }

  return (
    <>
      <FocusInput {...propdata} />

      <button onClick={onButtonClick}> change </button>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
