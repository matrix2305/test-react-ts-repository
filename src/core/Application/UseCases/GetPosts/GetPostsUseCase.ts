import {PostRepositoryInterface} from "../../Contracts/Repositories/PostRepositoryInterface";
import PostRepository from "../../../Infrastructrue/DataAccess/Repositories/PostRepository";
import {PostDTO} from "../../DTO/PostDTO";
import {GetPostsUseCaseInterface} from "./GetPostsUseCaseInterface";

export class GetPostsUseCase implements GetPostsUseCaseInterface{
    private postRepository : PostRepositoryInterface;

    constructor() {
        this.postRepository = new PostRepository();
    }


    public async execute() : Promise<PostDTO[]>
    {
        let data = await this.postRepository.getPosts();
        return PostDTO.fromArray(data);
    }
}