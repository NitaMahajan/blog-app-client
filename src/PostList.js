import React, {useEffect, useState} from 'react';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';
import axios from 'axios';

const PostList = () => {

    const [posts, setPosts] = useState({});

    useEffect(() => {
        async function fetchData() {
            let posts = await axios({ method: 'get', url: 'http://localhost:4002/posts'});
            setPosts(posts.data);
        }
        fetchData();
    }, []);

    const renderedPosts = Object.values(posts).map((post) => {
        return (
            <div className="card" style={{width:'30%', marginBottom:'20px'}} key={post.id}>
                <div className="card-body">
                    <h3>{post.title}</h3>
                </div>
                <div className="card-body">
                    <CommentList id={post.id} comments={posts[post.id].comments}/>
                    <CommentCreate id={post.id}/>
                </div>
            </div>
        )
    });

    return <div className="d-flex flex-row flex-wrap justify-content"> {renderedPosts} </div>
};

export default PostList;
