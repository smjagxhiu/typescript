"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var githubApiService_1 = require("./githubApiService");
if (process.argv.length < 3)
    console.log("Please pass the username argument !");
else {
    var username_1 = process.argv[2];
    var src_1 = new githubApiService_1.GithubApiService();
    src_1.getUserInfo(username_1, function (user) {
        src_1.getRepos(username_1, function (repos) {
            var sortedRepos = _.sortBy(repos, function (repo) { return repo.forkCount * -1; });
            var filteredRepos = _.take(sortedRepos, 5);
            user.repos = filteredRepos;
            console.log(user);
        });
    });
}
