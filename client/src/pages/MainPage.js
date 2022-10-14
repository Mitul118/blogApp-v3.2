import React, { useEffect, useState } from 'react'
import Axios from 'axios'

import { useNavigate } from 'react-router-dom'

export default function MainPage() {

  const [postList, setPostList] = useState([])
  let navigate = useNavigate();

  useEffect(() => {
    Axios.get("http://localhost:3007/api/get").then((data) => {
      setPostList(data.data)
    })
  }, []);

  const refreshPage = () => {
    window.location.reload();
  }
  const likePost = (id) => {
    refreshPage();
    Axios.post(`http://localhost:3007/api/like/${id}`).then((response) => {


    });
  }
  const dislikePost = (id) => {
    refreshPage();
    Axios.post(`http://localhost:3007/api/dislike/${id}`).then((response) => {

    });
  }

  const deletePost = (id) => {
    refreshPage();
    alert('Post has been deleted');
    Axios.delete(`http://localhost:3007/api/delete/${id}`).then((response) => {

    });
  }



  console.log(postList);

  return (

    <div className='MainPage'>
      <div className='PostContainer'>


        {postList
          .sort((a, b) => a > b ? 1 : -1)
          .map((val, key) => {
            return (<div
              className='Post'
              key={key}
            >
              <h1 className='title'>{val.title}</h1>
              <p>{
                val.post_text.length > 200
                  ? val.post_text.substring(0, 200) + '...'
                  : val.post_text}</p>

              <div className='buttons'>
                <div className='crud--button'>

                  <button
                    className='Single'
                    key={key}
                    onClick={() => {
                      navigate(`/post/${val.id}`)
                    }
                    } >Read More</button>

                  <button onClick={() => {
                    deletePost(val.id)
                  }}>
                    Delete
                  </button>
                </div>

                <div className='reaction--button'>

                  <button 
                  className='reaction' 
                  onClick={() => {
                    likePost(val.id)
                  }}>
                    Like
                  </button>

                  <h4>{val.likes}</h4>

                  <button 
                  className='reaction'
                  onClick={() => {
                    dislikePost(val.id)
                  }}>
                    Dislike
                  </button>
                </div>

              </div>
              <div className='bottom'>
                <h4 className='author'>:-{val.user_name}</h4>

              </div>

            </div>)
          })}

      </div>
    </div>

  )
}
