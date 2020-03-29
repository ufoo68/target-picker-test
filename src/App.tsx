import React, { useState } from 'react'
import './App.css'
import { buildReplyText } from 'line-message-builder'

function App() {
  const [message, setMessage] = useState<string>('')
  const pushShareTargetPicker = () =>
    liff.init({ liffId: process.env.REACT_APP_LIFF_ID! }).then(() => {
      if (!liff.isLoggedIn()) {
        liff.login()
      }
      liff.shareTargetPicker([buildReplyText(message)])
        .then(() =>
          console.log('send: ', message)
        ).catch((err: Error) =>
          alert(err)
        )
    })
  return (
    <div className="App">
      <input value={message} onChange={e => setMessage(e.target.value)} />
      <button onClick={pushShareTargetPicker}>送信</button>
    </div>
  )
}

export default App
