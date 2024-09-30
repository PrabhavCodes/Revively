import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const Sendingmsg = () => {
    const [message, setMessage] = useState('');
    const [chatMessage, setChatMessage] = useState([]);

    useEffect(() => {
        socket.on('messageBroadcast', (msg) => {
            setChatMessage((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            socket.off('messageBroadcast');
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message) {
            socket.emit('sendMessage', message); 
            setMessage(''); 
        }
    };

    return (
        <div>
            <div>
                {chatMessage.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                />
                <button type='submit'>Send</button>
            </form>
        </div>
    );
};

export default Sendingmsg;