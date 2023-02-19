

// const btnFru = document.getElementById('btnFru')
// const btnVeg = document.getElementById('btnVeg')
// const fruits = document.getElementById('fruits')
// const clearFru = document.getElementById('clearFru')
// const clearVeg = document.getElementById('clearVeg')
// const vegetables = document.getElementById('vegetables')
// clearFru.addEventListener('click',clearDiv.bind(null,fruits))
// clearVeg.addEventListener('click',clearDiv.bind(null,vegetables))
// function clearDiv(divEle){
//     divEle.innerHTML = ' '
// }
// btnFru.addEventListener('click',fruitHandler.bind(null,fruits,'fruit.json'))
// btnVeg.addEventListener('click',fruitHandler.bind(null,vegetables,'fruit.json'))
// function fruitHandler(fruits,jsonFileName){
//     console.log(jsonFileName)
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET',jsonFileName,true)

//     xhr.onload = function(){
//         let fruitsjson = JSON.parse(this.responseText)
//         let str = "<ol>";
//         for(x in fruitsjson)
//         {
//             str+=`<li>${fruitsjson[x].name}</li>`
//         }
//         str+="</ol>"
//         fruits.innerHTML += str
//     }

//     xhr.send()

// }



function postRequest(){
    const xhr = new XMLHttpRequest();
    xhr.open('POST','https://dummy.restapiexample.com/api/v1/create',true)

    xhr.getResponseHeader('Content-type','application/json')
    xhr.onload = function(){
        console.log(this.responseText)
    }
    xhr.send({"name":"saif","salary":"123","age":"23"})
}


postRequest()