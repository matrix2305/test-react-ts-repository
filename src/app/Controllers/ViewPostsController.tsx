import React, {useEffect, useState} from "react";
import PostsView from "../Views/posts-view";
import {GetPostsUseCaseInterface} from "../../core/Application/UseCases/GetPosts/GetPostsUseCaseInterface";
import {GetPostsUseCase} from "../../core/Application/UseCases/GetPosts/GetPostsUseCase";
import {PostModel} from "../Models/PostModel";

export default function ViewPostsController() {
    const getPostsUseCase : GetPostsUseCaseInterface = new GetPostsUseCase();
    const [data, setData] = useState<PostModel[]|null>(null);

    useEffect(() => {
        getAllPosts()
    }, []);

    const getAllPosts = () => {
        getPostsUseCase.execute().then(result => setData(PostModel.listModel(result)))
    };

    const createPost = () => {

    }

    return (<PostsView posts={data}/>);
}