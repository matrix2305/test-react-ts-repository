import {Post} from "../../../Domain/Entities/Post";

export interface PostRepositoryInterface{
    getPosts(): Promise<Post<number>[]>
}