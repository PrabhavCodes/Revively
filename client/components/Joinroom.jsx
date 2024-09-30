import React from 'react'

let socket;

const Joinroom = () => {
    const[message,setMessage] = usestate('');
    const[room,setRoom] = usestate('');
    const[chatMessages,setChatMessages] = usestate('');

    socket = io('http://localhost:5000');

    useEffect(()=>{
        socket.on('message',(msg)=>{
            setChatMessages((prevmessages)=>[...prevmessages,msg])
        });

        return ()=>{
            socket.of();
        }
    },[])

  return (
    <div>
      
    </div>
  )
}

export default Joinroom
