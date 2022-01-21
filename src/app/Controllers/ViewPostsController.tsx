import React, {useEffect, useState} from "react";
import PostsView from "../Views/posts-view";
import {GetPostsUseCaseInterface} from "../../core/Application/UseCases/GetPosts/GetPostsUseCaseInterface";
import {GetPostsUseCase} from "../../core/Application/UseCases/GetPosts/GetPostsUseCase";
import {PostDTO} from "../../core/Application/DTO/PostDTO";

export default function ViewPostsController() {
    const getPostsUseCase : GetPostsUseCaseInterface = new GetPostsUseCase();
    const [data, setData] = useState<PostDTO[]>([]);

    useEffect(() => {
        getAllPosts().then(result => {
            setData(result);
        })
    }, []);

    const getAllPosts = async () => {
        return getPostsUseCase.execute();
    }

    return (<PostsView posts={data}/>);
}