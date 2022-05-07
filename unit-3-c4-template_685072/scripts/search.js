// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";

let n = document.querySelector("#navbar")
n.innerHTML = navbar()

let newsBySearch = async (value) =>{
    console.log(value)
    try{
    
    let res = await fetch( `https://masai-mock-api.herokuapp.com/news?q=${value}`)
    let {articles} = await res.json()
      append(articles)
    console.log(articles)
}catch(err){
    console.log('err',err)
    
}
}