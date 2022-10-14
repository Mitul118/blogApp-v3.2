import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import "../App.css";
import { useNavigate } from 'react-router-dom'


export default function CreatePost() {

  let navigate = useNavigate();

  const [userName, setUserName] = useState("")
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")



  const submitPost = () => {

    Axios.post('http://localhost:3007/api/create', {
      userName: userName,
      title: title,
      text: text,
    });
    navigate(`/`)
  };

  return (
    <div className='createPost'>
      <div className='uploadPost'>
        <label>User name</label>
        <input type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <label>Title</label>
        <input type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Post Text</label>
        <textarea onChange={(e) => {
          setText(e.target.value);
        }}
        />

        <button onClick={submitPost}>Submit Post</button>
      </div>
    </div>
  )
}

