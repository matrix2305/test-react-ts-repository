import axios, {Axios} from 'axios';

export class BaseRepository {
    protected axios : Axios;

    constructor() {
        this.axios = axios;
    }
}