import React from 'react'

const SocketConnect = () => {
  return (
    <div>
        {/* import { useEffect, useState } from 'react';
import io from 'socket.io-client'

let socket;
function App() {
  const[connection,setconnection] = useState(false);
  useEffect(()=>{
    socket = io('http://localhost:5000');

    socket.on('connect',()=>{
      setconnection(true);
    })
    socket.on('disconnect',()=>{
      setconnection(false);
    })

    return ()=>{
      socket.disconnect();
    }

  },[])
  
  const handleConnect = () => {
    if(!connection){
      socket.connect();
    }
  }

  const handleDisconnect = () => {
    if(connection){
      socket.disconnect();
    }
  }
  return (
    <>
      <h1>Socket.io Client</h1>
      <button onClick={handleConnect}>connect</button>   
      <button onClick={handleDisconnect}>disconnect</button>   
    </>
  )
}

export default App

       */}
    </div>
  )
}

export default SocketConnect
