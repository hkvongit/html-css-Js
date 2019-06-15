const ar1=['honda','ford','e']

ar1.forEach(function(car){
    console.log(car)
})

const ar2=[
    {id:01,name:"ak"},
    {id:02,name:"pilla"}
]

const ids=ar2.map(function(usr){
    console.log(usr.id,usr.name)
})
