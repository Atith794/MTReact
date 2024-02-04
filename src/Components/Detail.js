import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Detail = () => {
  const { id } = useParams();
  const posts = useSelector((state) => state.posts);
  const post = posts.find((post) => post.id === parseInt(id));

  const[detai,setDetai] = React.useState(false);
  const[userinf,setUserinf] = React.useState(false);

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className='detail-container'>
      <h1>Post Number {post.id}</h1>
      <div>
        <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
        <div>
        <button className='detailss' onClick={() => setDetai(!detai)} style={{ backgroundColor: detai ? 'rgb(240, 90, 34, 1)' : 'white' }}>Details</button>
        <button className='userinfo' onClick={() => setUserinf(!userinf)} style={{ backgroundColor: detai ? 'rgb(240, 90, 34, 1)' : 'white' }} >User Info</button>
        {/* {
            detai ? <p className='pbody'>{post.body}</p>:<p className='pbody'>Post was posted by:{post.userId}</p>
        }
             */}
        </div>
        

      </div>
      
      {/* <p>User ID : {post.userId}</p>
      <p>Title : {post.title}</p> */}
      
      
      
    </div>
  );
};

export default Detail;