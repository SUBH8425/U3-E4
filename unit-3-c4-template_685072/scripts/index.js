// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";

let n = document.querySelector("#navbar")
n.innerHTML = navbar()
// console.log("hello")


let searchNews = async (value) =>{
    try{
        if(value === undefined){
            value = "in";
        }
        let res = await fetch( `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`)
        let {articles} = await res.json()
         append(articles)
       // console.log(articles)
    }catch(err){
        console.log('err',err)
        
    }
}
searchNews()

let result = document.getElementById("results")

function append(data){
    //console.log(content,description,title,urlToImage)
    data.forEach((ele)=>{
        
        let news = document.createElement("div")
        news.setAttribute("id","news")
        news.addEventListener("click", function(){
            showfull(ele)
        })

        let img = document.createElement("img")
        img.src = ele.urlToImage

        let parti = document.createElement("div")

        let title = document.createElement("h3")
        title.innerText = ele.title

        let des = document.createElement("p")
        des.innerText = ele.description

        parti.append(title,des)
        news.append(img,parti)
        result.append(news)

    })
}

//let nData = []
function showfull(ele){
    console.log(ele)
    //nData.push(ele)
    localStorage.setItem("news",JSON.stringify(ele))
    window.location.href="news.html"
}
 let countries = document.querySelector("#sidebar").children
// // console.log(countries)
function cSearch(){
    console.log(this.id)
    result.innerHTML = null
    searchNews(this.id)

}

for (let i of countries){
    i.addEventListener("click",cSearch)
}





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

newsBySearch()

/// search feature 
let search = (e) =>{
    if(e.key === 'Enter'){
        result.innerHTML = null
        let val = document.querySelector("#search_input").value
        newsBySearch(val)

    }
}

document.querySelector("#search_input").addEventListener("keydown", search)