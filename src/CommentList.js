import React from 'react';

const CommentList = (props) => {

    // const [comments, setComments] = useState([]);

    // useEffect(async () => {
    //     let res = await axios.get(`http://localhost:4001/posts/${props.id}/comments`);
    //     setComments(res.data);
    // }, []);

    const renderedComments = props.comments.map((comment) => {
        return (
            <li style={{marginLeft:'20px'}} id={comment.id}>{comment.content}</li>
        )
    });

    return <div>
        {renderedComments}
    </div>
};

export default CommentList;
