require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT;

const github  ={
    "login": "mahboob-2f",
  "id": 137830025,
  "node_id": "U_kgDOCDceiQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/137830025?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mahboob-2f",
  "html_url": "https://github.com/mahboob-2f",
  "followers_url": "https://api.github.com/users/mahboob-2f/followers",
  "following_url": "https://api.github.com/users/mahboob-2f/following{/other_user}",
  "gists_url": "https://api.github.com/users/mahboob-2f/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mahboob-2f/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mahboob-2f/subscriptions",
  "organizations_url": "https://api.github.com/users/mahboob-2f/orgs",
  "repos_url": "https://api.github.com/users/mahboob-2f/repos",
  "events_url": "https://api.github.com/users/mahboob-2f/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mahboob-2f/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "mahboob_2f",
  "company": null,
  "blog": "",
  "location": "Phagwara, Punjab, India",
  "email": null,
  "hireable": null,
  "bio": "Hi, I'm Mahboob Alam. I'm currently pursuing B Tech in Computer Science Engineering from Lovely Professional University.",
  "twitter_username": null,
  "public_repos": 29,
  "public_gists": 0,
  "followers": 3,
  "following": 4,
  "created_at": "2023-06-26T19:48:28Z",
  "updated_at": "2025-10-03T17:54:49Z"
}

app.get('/',(req,res)=>{
    res.send("hello mahi");
})

app.get("/ghost",(req,res)=>{
    res.send("<h1>hello this is ghost page</h1>")
})
app.get('/login',(req,res)=>{
    res.send('<h2>welcome to login page</h2>')
})

app.get('/github',(req,res)=>{
    res.json(github);
})


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})