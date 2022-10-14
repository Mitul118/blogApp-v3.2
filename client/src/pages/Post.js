import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'

export default function Post() {
    let { postId } = useParams()

    const [post, setPost] = useState({})

    useEffect(() => {
        Axios.get(`http://localhost:3007/api/getFormId/${postId}`).then((data) => {
            setPost({
                title: data.data[0].title,
                postText: data.data[0].post_text,
                userName: data.data[0].user_name,
                likes:data.data[0].likes,
            });
        });
    }, []);
    return (
        <div className='individualPost'>

            <div className='Post individual'>
                <h1 className='title'>{post.title}</h1>
                
                <p>{post.postText}</p>
                <h3>Like count: { post.likes }</h3>
                <h4 className='author'>{post.userName}</h4>
            </div>
        </div>
    )
}
