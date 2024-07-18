let btn = document.getElementById("btn")

btn.addEventListener("click",function(){
    getPerson()
  
})

function getPerson(){
    fetch('https://randomuser.me/api/')
    .then(function(response){
        return response.json()
    }).then(function(data){
        console.log(data.results)
        data.results.forEach(info)
    })

    function info(re){
        let firstN = document.getElementById("first")
        let lastN = document.getElementById("last")
        let location = document.getElementById("location")
        let phone = document.getElementById("phone")
        let email = document.getElementById("email")
        let img = document.getElementById("img")
        let nameOf = document.getElementById("name") 
        img.src = re.picture.large        
        firstN.innerHTML = re.name.first
        lastN.innerHTML = re.name.last
        nameOf.innerHTML = re.id.name
        email.innerHTML = re.email
        phone.innerHTML = re.phone
        location.innerHTML = re.location.city
        
       }
    
}