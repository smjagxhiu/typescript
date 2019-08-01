import * as _ from "lodash";

import { GithubApiService } from "./githubApiService";
import { User } from "./user";
import { Repo } from "./repo";


if (process.argv.length < 3)
    console.log("Please pass the username argument !");
else {
    let username: string = process.argv[2];
    let src = new GithubApiService();
    src.getUserInfo(username, (user: User) => {
        src.getRepos(username, (repos: Repo[]) => {
            let sortedRepos: Repo[] = _.sortBy(repos, (repo: Repo) => repo.forkCount * -1);
            let filteredRepos: Repo[] = _.take(sortedRepos, 5);
            user.repos = filteredRepos;
            console.log(user);
        });
    });
}


