
let data=JSON.parse(localStorage.getItem("booking")) || [];

let box=document.getElementById("hotel_details");



 append=(data)=>{
    box.innerHTML=null;

    data.forEach((elem)=>{
             let div=document.createElement("div");
            let img=document.createElement("img");
            img.src=elem.Images.one;
            let p=document.createElement("h3");
            p.innerText=elem.Title;
            let p1=document.createElement("h3");
            p1.innerText=`RS. ${elem.Price}`;

            
            div.append(img,p,p1);
            box.append(div);
    })
}
append(data);



function book(){

    setTimeout(function(){
        let user_name= document.getElementById("user_name").value;
        
        
        alert( `${user_name} booking is successfully`)
        location.href="index.html";
    },1000)
}