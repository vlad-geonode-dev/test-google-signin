import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

const Dashboard = () => {
  const { user, loggedIn, checkLoginState } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  const serverUrl = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    const fetchPosts = async () => {
      if (loggedIn === true) {
        try {
          const response = await axios.get(`${serverUrl}/getUserDetails`);
          setPosts(response.data.posts);
        } catch (err) {
          console.error(err);
        }
      }
    };

    fetchPosts();
  }, [loggedIn, serverUrl]);

  const handleLogout = async () => {
    try {
      await axios.post(`${serverUrl}/auth/logout`);
      checkLoginState();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Dashboard</h3>
      <button className='btn' onClick={handleLogout}>
        Logout
      </button>
      <h4>{user ? user.name : 'User Name'}</h4>
      <br />
      <p>{user ? user.email : 'User Email'}</p>
      <br />
      <img src={user ? user.picture : ''} alt={user ? user.name : 'User'} />
      <br />
      <div>
        <h4>Posts</h4>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
