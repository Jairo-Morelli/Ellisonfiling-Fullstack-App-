import { useState } from 'react'
import './App.css'
import axios from "axios"

function Client() {

  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');



  const sendMessage = async() =>{
    try{
      const res = await axios.post("http://192.168.1.16/api/message",{
        text:message,
      });
      setResponse(res.data.response);
    }catch(err){
      console.error(err);
    }
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
      <h1>Frontend → Backend Example</h1>
      <input
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      <p><strong>Backend reply:</strong> {response}</p>
      </div>
    </>
  );
}

export default Client