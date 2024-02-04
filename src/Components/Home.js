import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div>
      <h1 className="h1t">Social Media For Travellers</h1>
      <input className="searchbar"  type="text" placeholder='🔍 Search'/>
      <div className="outer-container">
      {posts.map((post) => (
        <Link key={post.id} to={`/item/${post.id}`}>
          <div className="post-container">
                <img
                    src={`https://picsum.photos/200?random=${post.id}`}
                    alt="Post"
                    />
                <h1>{post.title}</h1>
                {/* <p>Title : {post.title}</p> */}
                <p> Body :{truncateText(post.body, 50)}</p>
                     {post.body.length > 50 && (
                <Link className="linkcard" to={`/item/${post.id}`}>Read More...</Link>
            )}
            
          </div>
        </Link>
      ))}
      </div>
    </div>
  );
};

export default Home;