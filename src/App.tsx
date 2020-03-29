import React, { useState, useEffect, useCallback } from 'react'
import './App.css'
import { buildReplyText } from 'line-message-builder'

function App() {
  useEffect(() => {
    liff.init({ liffId: process.env.REACT_APP_LIFF_ID! }).then(() => {
      if (!liff.isLoggedIn()) {
        liff.login()
      }
    })
  }, [])
  const pushShareTargetPicker = useCallback(() =>
    liff.shareTargetPicker([buildReplyText(message)])
  , [])
  const [message, setMessage] = useState<string>('')
  return (
    <div className="App">
      <input value={message} onChange={e => setMessage(e.target.value)} />
      <button onClick={pushShareTargetPicker}>送信</button>
    </div>
  )
}

export default App
