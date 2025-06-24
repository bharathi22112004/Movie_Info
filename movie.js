let name=document.getElementById("tit")
let boc=document.getElementById("bc")
let coc=document.getElementById("cd")
let doc=document.getElementById("de")
let eoc=document.getElementById("fg")
let foc=document.getElementById("gh")
let goc=document.getElementById("hr")
let hoc=document.getElementById("re")
let ioc=document.getElementById("ge")
let pic=document.getElementById("photo")



function movie(){
   movname=document.getElementById("abc")
   let url='https://www.omdbapi.com/?apikey=61e576a4&t='+movname.value
   fetch(url).then((res)=>{
       return res.json()
       .then(data=>{
        console.log(data);
         name=document.getElementById("tit").innerText=data.Title
         boc=document.getElementById("bc").innerText=data.BoxOffice
         coc=document.getElementById("cd").innerText=data.Plot
        doc=document.getElementById("de").innerText=data.Released
        eoc=document.getElementById("fg").innerText=data.Director
        foc=document.getElementById("gh").innerText=data.Actors
         goc=document.getElementById("hr").innerText=data.Writer
        hoc=document.getElementById("re").innerText=data.Awards
         ioc=document.getElementById("ge").innerText=data.imdbRating
         pic=document.getElementById("photo").src=data.Poster
       





      

         
         
         
         

        

       

       }
   
   )
   
})
}


