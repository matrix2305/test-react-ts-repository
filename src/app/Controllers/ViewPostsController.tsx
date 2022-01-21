
import React, {useEffect, useState} from "react";
import PostsView from "../Views/posts-view";

export default function ViewPostsController() {
    const [data, setData] = useState();

    useEffect(() => {

    }, []);

    return (<PostsView posts={data}/>);
}