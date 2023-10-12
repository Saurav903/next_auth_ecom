import GhostContentAPI from "@tryghost/content-api";


const api = new GhostContentAPI({
    url:"http://localhost:2370",
    key:"257399b98e446036aafa98358b",
    version:"v5.0"
})


export async function getPosts(){
    return await api.posts
    .browse({
        include:["tags","authors"],
        limit:20
    }).catch(err=>{
        throw new Error(err)
    })
}