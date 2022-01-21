import {PostDTO} from "../../core/Application/DTO/PostDTO";

export class PostModel {
    public id : number;
    public userId : number;
    public title: string;
    public body : string;

    constructor(postDTO: PostDTO) {
        this.id = postDTO.id;
        this.userId = postDTO.userId;
        this.title = postDTO.title;
        this.body = postDTO.body;
    }

    static listModel(collection: PostDTO[]) : PostModel[]
    {
        return collection.map(postDTO => {
            return new PostModel(postDTO);
        })
    }
}