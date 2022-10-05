type SN = string | null

export type LocalGithubUser = {
    "login": string,
    "avatar": string,
    "name": SN,
    "company": SN,
    "blog": SN,
    "location": SN,
    "bio": SN,
    "twitter": SN,
    "repos": number,
    "followers": number,
    "following": number,
    "created": string,
}

export type GithubUser = {
    "login": string,
    "id": number,
    "avatar_url": string,
    "name": SN,
    "company": SN,
    "blog": SN,
    "location": SN,
    "bio": SN,
    "twitter_username": SN,
    "public_repos": number,
    "followers": number,
    "following": number,
    "created_at": string,
}

export type NotFoundUserError = {
    "message": string,
    "documentation_url": string,
}

