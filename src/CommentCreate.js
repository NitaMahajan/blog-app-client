import React, {useState} from 'react';
import axios from 'axios';

const CommentCreate = (props) => {

    const [comment, setComment] = useState('');

    const addComment = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:4001/posts/${props.id}/comments`, { content: comment });
        setComment('');
    }

    return <div>
        <form onSubmit={addComment}>
            <div> Comment </div>
            <input id="commentCreate" onChange={(e) => setComment(e.target.value)} />
            <button type="submit"> Comment </button>
        </form>

    </div>
};

export default CommentCreate;
