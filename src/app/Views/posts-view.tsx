import React from "react";
import {PostDTO} from "../../core/Application/DTO/PostDTO";

type props = {
  posts: PostDTO[]
}

export default function PostsView({posts} : props) {
  console.log(posts);
  return(
    <></>
  )
}