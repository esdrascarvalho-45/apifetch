
let obter=()=>{
fetch("https://jsonplaceholder.typicode.com/users").then((a)=>{
    return a
}).then((dados)=>{
       return dados.json()
}).then(function(f){
    let name =document.querySelector(".name")
    f.map((post)=>{

       let nome= document.createElement('h2');
       let email= document.createElement('span');
       
       name.appendChild(nome);
       name.appendChild(email)
      
       nome.innerText =post.name
       email.innerText="email: "+post.email
       
    })
}).catch(function(e){
    let name =document.querySelector(".name")
    name.innerHTML="ocorreu um erro: " +e
})
}
obter()

let add= async()=>{
    let name =document.querySelector(".address")
    let div =document.createElement("div")
    name.appendChild(div)

    let pessoa={
        nome:'bacurau',
        email: 'bacurau@gmail.com',
       }
       
       let cabecalho={
        method:"post",
        body: JSON.stringify(pessoa)
       }
   let res= await fetch("https://jsonplaceholder.typicode.com/users",cabecalho);

   await res.json()
   
   
   
}

add()


