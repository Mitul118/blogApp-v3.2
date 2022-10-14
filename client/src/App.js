import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainPage from './pages/MainPage.js'
import CreatePost from './pages/CreatePost'
import Post from './pages/Post';
import Logo from './images/logo.png'

function App() {
    return (
        <BrowserRouter>
            <div className='App'>

                <div className='navbar'>
                    <a href='/'>
                        <img className='logo' src={Logo} alt='' />
                    </a>
                    <a href='/' className='links' id='title'>
                        Blog It
                    </a>

                    <div className='links'>
                        <a href='/'>Home</a>
                        <a href='/createpost'>Create Post</a>
                    </div>
                </div>

                <Routes>
                    <Route path="/" index element={<MainPage />} />
                    <Route path="/createpost" element={<CreatePost />} />
                    <Route path="/post/:postId" element={<Post />} />
                </Routes>
                <footer>
                <img className='logo' src={Logo} alt="" />
                
                <h3>
                    Made with ♥️ and <b>React.js</b>.
                </h3>
                <h3>
                    Made by M&M
                </h3>
            </footer>
            </div>

        </BrowserRouter>


    )
}

export default App