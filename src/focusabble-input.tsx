import React, {useEffect} from 'react'

export interface FocusInputProps {
  focussed: boolean
  passedRef: React.RefObject<HTMLInputElement>
}

export function FocusInput(prop: FocusInputProps) {
  useEffect(() => {
    if (prop.focussed) {
      console.log(prop.focussed)
      prop.passedRef.current.focus()
    }
  })
  return <input ref={prop.passedRef} />
}
