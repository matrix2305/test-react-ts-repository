import {BaseRepository} from "./BaseRepository";
import {Post, PostType} from "../../../Domain/Entities/Post";
import {PostRepositoryInterface} from "../../../Application/Contracts/Repositories/PostRepositoryInterface";

type PostAPI = {
    id: number,
    title: string,
    body: string,
    user_id: number
}

export default class PostRepository extends BaseRepository implements PostRepositoryInterface{

    public async getPosts(): Promise<Post<number>[]>
    {
        return this.axios.get('https://gorest.co.in/public/v1/posts').then(response => {
            return response.data.data.map((post: PostAPI) => {
                let postEntity = new Post();
                postEntity.setId(post.id);
                postEntity.setTitle(post.title);
                postEntity.setBody(post.body);
                postEntity.setUserId(post.user_id);
                return postEntity;
            })
        })
    }
}