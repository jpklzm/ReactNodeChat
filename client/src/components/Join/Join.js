import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';
// import Check from '../Check/Check';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');


    return (
       <div className="joinOuterContainer">
           <div className="joinInnerContainer">
                <h1 className="heading">Multi<span className="chat">Chat</span></h1>
                <h2 className="subtitle">Faça login para se comunicar no chat ou entre um nickname para entrar como observador</h2>
                <div><input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /></div>
                <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} /></div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className={'button mt-20'} type="submit">Entrar como observador</button>
                </Link>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className={'button mt-20'} type="submit">Logar</button>
                </Link>
           </div>
       </div>
    )
}

export default Join;