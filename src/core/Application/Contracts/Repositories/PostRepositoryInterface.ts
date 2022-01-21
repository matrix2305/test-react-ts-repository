import {Post} from "../../../Domain/Entities/Post";

export interface PostRepositoryInterface{
    getPosts(): Post<undefined>[];
}