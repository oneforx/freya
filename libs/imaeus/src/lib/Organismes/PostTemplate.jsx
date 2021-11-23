import React from "react";
import PostContent from "../Components/PostContent";
import PostTitle from "../Components/PostTitle";
import usePostId from "../Hooks/store/use-post-id";


const PostTemplate = ({ postId = -1, titleData, postData }) => {
    const { loading, error, data } = usePostId(postId);

    return (
        loading ? <div className="text-center bg-white shadow-sm mt-3 p-2 text-gray-700 rounded">
            <span className="font-bold">Chargement en cours </span><i className="fa-solid fa-tire fa-lg fa-spin"></i>
        </div> :
        <div className="flex flex-col overflow-x-auto md:rounded-md bg-white shadow rounded mt-3">
            <PostTitle titleData={ postId > -1 ? data.titleData : titleData } />
            { postData !== null ? <PostContent postData={ postId > -1 ? data.postData : postData } /> : null }
        </div>
    );
}

export default PostTemplate;