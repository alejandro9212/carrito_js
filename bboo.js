const camb=document.getElementById("camb");
let body = document.getElementById("bood");
let body2 = document.getElementsByClassName("body"); 
   

   const Animar = ()=>{
        body.classList.toggle("bood_bd");
   }
    camb.addEventListener("click",(e)=>{
    //    body.classList.add("bood");      
           Animar();
           conte();
       
    })

    const conte=()=>{
     const fracmet=document.createDocumentFragment();
       const elemen=document.getElementById('container');
     const el=document.createElement('article');
        el.textContent='<h1>lorem*8</h1>';
        fracmet.appendChild(el);
        elemen.appendChild(fracmet);

         
    }
   
     
