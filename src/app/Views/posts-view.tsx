import React from "react";
import {PostModel} from "../Models/PostModel";

type props = {
  posts: PostModel[]|null
}

export default function PostsView({posts} : props) {
  console.log('Put posts on the view: ', posts);
  return(
    <></>
  )
}