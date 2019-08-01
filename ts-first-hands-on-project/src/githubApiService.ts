import * as request from "request";
import { User } from "./user";
import { Repo } from "./repo";


const  OPTIONS: any = {
    headers : {
        "User-Agent": "request",
    },
    json : true
}

export class GithubApiService {

    getUserInfo(username:string, cb : (user : User) => any ) {      
        request.get("https://api.github.com/users/"+username, OPTIONS,
                (error: any, response: any, body: any) => {
                //console.log(error);
                //console.log(response);
                let user = new User(body);
                cb(user);
        } );
    }

    getRepos(username:string, cb : (repos : Repo[]) => any){
        request.get("https://api.github.com/users/"+username+"/repos", OPTIONS,
                    (error: any, response: any, body: any) => {
                let repoArray: any[] = body;
                let repos: Repo[] = repoArray.map ( (repo:any) => new Repo(repo) );
               cb(repos);
        } );
    }

}