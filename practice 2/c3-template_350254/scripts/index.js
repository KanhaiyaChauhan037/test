
let serch=document.querySelector("#query");

serch.addEventListener("keypress",(ele)=>{
    if(ele.key==="Enter"){
        // ele.preventDefault();
        getdata()
    }
})




//  search=()=>{
    
//     getdata()
// }

getdata = async()=>{
    let city=document.querySelector("#query").value;
    let api=`https://masai-mock-api.herokuapp.com/hotels/search?city=${city}`
    try{
        let res=await fetch(api)
        let data=await res.json()
        console.log(data)
        append(data.hotels)
        // let places=data.hotels
    }
    catch(err){
        console.log(err)
    }
    
}


 append=(hotels)=>{
    let cont=document.querySelector("#hotels_list")
    cont.innerHTML=null
    
    hotels.forEach((data) => {
       
        let card=document.createElement("div")
        card.setAttribute("id","hotel")

        let img=document.createElement('img')
        img.src=data.Images.one;

        let name=document.createElement("h3")
        name.innerText=data.Title;

        let price=document.createElement("p")
        price.innerText=`"Price:" ${data.Price}`;

        let ac=document.createElement("p")
        ac.innerText=`"AC:" ${data.Ac}`;

        let rating=document.createElement("p")
        rating.innerText=data.Rating;

        let but=document.createElement("button")
        but.innerText="book";

        but.setAttribute("class","book")

        but.addEventListener("click",function(){
            book(data)
        });
        card.append(img,name,price,ac,rating,but);
        cont.append(card);

    });
}

 book=(item)=>{
    let login=false;
let data=JSON.parse(localStorage.getItem("user")) || [];
if(data.length>0){
    login=true;
}
   if(login===true){
    location.href="checkout.html"
   }
   else{
    alert("log in first")
    location.href="login.html";
   }
   let booking=[]
   booking.push(item);
   localStorage.setItem("booking",JSON.stringify(booking));
}



// function sort_lth(places){
//     places.sort(function(a,b){
//     return (a.price - b.price) 
    
       
//     })
//     sort_lth(places);
// }










// async function lth(){

//     let city=document.querySelector("#query").value;
//     let api=`https://masai-mock-api.herokuapp.com/hotels/search?city=${city}`
    
//         let res=await fetch(api)
//         let data=await res.json()
//         // console.log(data)
//         append(data.hotels)
//         let places=data.hotels
    
//    places.sort(function(a,b){
//     return a.Price - b.Price
//    })

//    append(places)
// }
// async function htl(){

//     let city=document.querySelector("#query").value;
//     let api=`https://masai-mock-api.herokuapp.com/hotels/search?city=${city}`
    
//         let res=await fetch(api)
//         let data=await res.json()
//         // console.log(data)
//         append(data.hotels)
//         let places=data.hotels
    
//    places.sort(function(a,b){
//     return b.Price - a.Price
//    })

//    append(places)
// }
// async function ac(){

//     let city=document.querySelector("#query").value;
//     let api=`https://masai-mock-api.herokuapp.com/hotels/search?city=${city}`
    
//         let res=await fetch(api)
//         let data=await res.json()
//         // console.log(data)
//         append(data.hotels)
//         let places=data.hotels
//        let bag=[]
       
//    places.forEach(function(data){
//     console.log(data)
//     if(data.Ac===true){
//         bag.push(data)
//         console.log(data)

//     }
//    })
//    console.log(bag)

//    append(bag)
// }
// async function nonac(){

//     let city=document.querySelector("#query").value;
//     let api=`https://masai-mock-api.herokuapp.com/hotels/search?city=${city}`
    
//         let res=await fetch(api)
//         let data=await res.json()
//         // console.log(data)
//         append(data.hotels)
//         let places=data.hotels
//        let bag=[]
       
//    places.forEach(function(data){
//     console.log(data)
//     if(data.Ac!==true){
//         bag.push(data)
//         console.log(data)

//     }
//    })
//    console.log(bag)

//    append(bag)
// }