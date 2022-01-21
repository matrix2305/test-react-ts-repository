import {Post} from "../../Domain/Entities/Post";

export class PostDTO {
    public id : number;
    public userId : number;
    public title : string;
    public body : string;

    constructor(post : Post<number>) {
        this.id = post.getId();
        this.userId = post.getUserId();
        this.title = post.getTitle();
        this.body = post.getBody();
    }

    static fromArray(collection : Post<number>[]) : PostDTO[]
    {
        return collection.map((post) => {
            return new PostDTO(post);
        })
    }
}