
export class Post {
    private id : number|undefined;
    private userId : number|undefined;
    private title : string|undefined;
    private body : string|undefined;


    public getId() : number
    {
        return <number>this.id;
    }

    public setId(id : number) : void
    {
        this.id = id;
    }

    public getUserId() : number
    {
        return <number>this.userId;
    }

    public setUserId(userId : number) : void
    {
        this.userId = userId;
    }

    public getTitle() : string
    {
        return <string>this.title;
    }

    public setTitle(title : string) : void
    {
        this.title = title;
    }

    public getBody() : string
    {
        return <string>this.body;
    }

    public setBody(body : string) : void
    {
        this.body = body;
    }
}