import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../api/PostService";
import { Loader } from "../UI/Loader/Loader";

function PostIdPage() {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [fetchPostByID, isLoading, postError] = useFetching(async (idPost) => {
    const response = await PostService.getByID(idPost);
    setPost(response.data);
  });
  const [fetchComments, isLoadingComments, postErrorComments] = useFetching(
    async (idPost) => {
      const response = await PostService.getCommentsByID(idPost);
      setComments(response.data);
    }
  );
  useEffect(() => {
    fetchPostByID(params.id);
    fetchComments(params.id);
  }, [params.id]);
  return (
    <div>
      <h2>You open post page with ID : {params.id}</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post?.id}. {post?.title}
        </div>
      )}
      <h3>Comments:</h3>
      {isLoadingComments ? (
        <Loader />
      ) : (
        <div>
          {comments.map((item) => {
            return (
              <div key={item.email}>
                <h5>{item.email}</h5>
                <p>{item.body}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export { PostIdPage };
