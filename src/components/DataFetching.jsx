import axios from 'axios';
import React, { useEffect, useState } from 'react';

// Initially return bhitra ko html render bhaye paxi matra useEffect ko code run hunxa

function DataFetching() {
  // const [posts, setPosts] = useState([]); //[] leko because APi bata aaune data arrays of objects ma xa
  const [post, setPost] = useState({}); //mathi array thyo yaha  { } xa because yaha id through bat single object GET garinxa so
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  // console.log(post);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res); // yo res ma chai sab (name:value) properties haru aauxa
        setPost(res.data); //tyo mathi aayeko (name:value) properties ma chai "data" bhanne properties ma actual khojeko data haru hunxa example : "userId": 1 - "id": 1 - "title": "sunt aut facere" - "body": "quia et suscipit nsuscipit recusandae"
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  return (
    <>
      <input type='text' value={id} onChange={(e) => setId(e.target.value)} />

      <button type='button' onClick={handleClick}>
        Fetch Post
      </button>

      <p>Title: {post.title}</p>
      <h4>Body: {post.body}</h4>

      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </>
  );
}

export default DataFetching;
