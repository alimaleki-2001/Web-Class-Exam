let get= document.querySelector("div#root")
let html = ""
let fetchProduct = () => {
    axios.get("http://localhost:3000/products").then((res) => {
        res.data.forEach((element)=>{
            html += `
            <p>${element.title}</p>
                <img src="${element.img}" alt=""/>
            </div>
            `
        })
        document.querySelector("div#root").innerHTML=html

    })
}
fetchProduct
document.addEventListener(DOMContentLoaded,fetchProduct)