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

    // @ts-ignore
    public async getPosts(): Promise<>
    {
        try {
            let result: {data: PostAPI[]} = await this.axios.get('https://gorest.co.in/public/v1/posts');
            return result.data.map((post: PostAPI) => {
                let postEntity = new Post();
                postEntity.setId(post.id);
                postEntity.setTitle(post.title);
                postEntity.setBody(post.body);
                postEntity.setUserId(post.user_id);
                return postEntity;
            })
        } catch (e) {
            console.log(e);
        }
    }
}