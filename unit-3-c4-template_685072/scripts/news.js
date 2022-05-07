// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";

let n = document.querySelector("#navbar")
n.innerHTML = navbar()

let data = JSON.parse(localStorage.getItem("news"))

let dis = document.getElementById("detailed_news")

data.map((ele)=>{
    console.log(ele)

    let news = document.createElement("div")


    let img = document.createElement("img")
    img.src = ele.urlToImage

    let parti = document.createElement("div")

    let title = document.createElement("h3")
    title.innerText = ele.title

    let des = document.createElement("p")
    des.innerText = ele.description

    let content = document.createElement("p")
    content.innerText = ele.content

    parti.append(title,des,content)
    news.append(img,parti)
    dis.append(news)
})