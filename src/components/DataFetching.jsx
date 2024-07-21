import axios from 'axios';
import React, { useEffect, useState } from 'react';

function DataFetching() {
  const [posts, setPosts] = useState([]); //[] leko because APi bata aaune data arrays of objects ma xa

  console.log(posts);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res); // yo res ma chai sab name:value properties haru aauxa
        setPosts(res.data); //tyo aako name:value properties ma chai "data" bhanne properties ma actual khojeko data haru hunxa
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default DataFetching;
