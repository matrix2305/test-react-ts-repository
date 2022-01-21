import {PostDTO} from "../../DTO/PostDTO";

export interface GetPostsUseCaseInterface {
    execute() : Promise<PostDTO[]>;
}