import {PostRepositoryInterface} from "../../Contracts/Repositories/PostRepositoryInterface";
import PostRepository from "../../../Infrastructrue/DataAccess/Repositories/PostRepository";
import {PostDTO} from "../../DTO/PostDTO";
import {GetPostsUseCaseInterface} from "./GetPostsUseCaseInterface";

export class GetPostsUseCase implements GetPostsUseCaseInterface{
    private postRepository : PostRepositoryInterface;

    constructor() {
        this.postRepository = new PostRepository();
    }

    // @ts-ignore
    public execute() : PostDTO[]
    {
        try {
            return PostDTO.fromArray(this.postRepository.getPosts());
        }catch (e){
            console.log(e);
        }
    }
}