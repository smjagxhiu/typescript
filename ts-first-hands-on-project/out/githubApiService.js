"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var user_1 = require("./user");
var repo_1 = require("./repo");
var OPTIONS = {
    headers: {
        "User-Agent": "request",
    },
    json: true
};
var GithubApiService = /** @class */ (function () {
    function GithubApiService() {
    }
    GithubApiService.prototype.getUserInfo = function (username, cb) {
        request.get("https://api.github.com/users/" + username, OPTIONS, function (error, response, body) {
            //console.log(error);
            //console.log(response);
            var user = new user_1.User(body);
            cb(user);
        });
    };
    GithubApiService.prototype.getRepos = function (username, cb) {
        request.get("https://api.github.com/users/" + username + "/repos", OPTIONS, function (error, response, body) {
            var repoArray = body;
            var repos = repoArray.map(function (repo) { return new repo_1.Repo(repo); });
            cb(repos);
        });
    };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;
