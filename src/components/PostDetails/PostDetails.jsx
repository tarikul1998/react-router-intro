import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();

    // const params = useParams(); // useParams hook return current url
    const { postId } = useParams();
    console.log(postId);

    const { id, title, body } = post;

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h3>Post details about: {id}</h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>
                Go back
            </button>
        </div>
    );
};

export default PostDetails;