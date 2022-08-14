function signup(){
    let name=document.querySelector("#name").value
    let email=document.querySelector("#email").value
    let password=document.querySelector("#password").value
  
    let data=JSON.parse(localStorage.getItem("user")) || []

  let flag=false
     for(let i=0;i<data.length;i++){
         if(data[i].email==email){
             flag=true
          }
      }
      
  if(flag){
      alert("user email already existing")
  }
  else{
      
      if(email.length==0 || password.length==0 || name.length==0 ){
         alert("please fill credentials")
      }
      else if(email.length!=0 && password.length!=0){
          let data=JSON.parse(localStorage.getItem("user")) || []
          
          let sd= {"email":email, "password":password}
         
          data.push(sd)
          localStorage.setItem("user",JSON.stringify(data));
          window.location.href="login.html"
      }
  }
     
   }