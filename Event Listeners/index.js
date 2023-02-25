const grandParent = document.querySelector(".grand-parent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

// grandParent.addEventListener('click',function(e){
//     console.log('grand parent clicked ')
// },{capture: true})

// parent.addEventListener('click',function(e){
//     console.log('parent clicked')
// },{capture: true})


// child.addEventListener('click',function(e){
//     console.log('Child clicked')
// })

// document.addEventListener('click',function(e){
//     console.log('document clicked')
// },true)

// parent.addEventListener('click',function(e){
//     e.stopPropagation();
//     console.log('parent listener')
// })

// child.addEventListener('click',e => {
//     e.stopPropagation();
//     console.log("child event listener")
// })

// grandParent.addEventListener('click',function(e){
//     e.stopPropagation();
//     console.log("Grand Parent listener")
// })

// document.addEventListener('click',function(e){
//     console.log("document listner")
// })

// child.addEventListener('click',e => {
//     console.log('child event listener')
// },{once: true})

// child.addEventListener('click',printHi)
// function printHi(e){
//     console.log("hi")
// }
// setTimeout(()=>{
//     child.removeEventListener('click',printHi)
// },3000)

const divs = document.querySelectorAll('div')

addGlobalEventListener('click','div',function(e){
    console.log(e.target)
})

function addGlobalEventListener(type,element,callback){
    document.addEventListener(type,e=>{
        if(e.target.matches(element))
        callback(e)
    })
}
            //or
// document.addEventListener('click',e=>{
//     if(e.target.matches('div'))
//     console.log('hi')
// })

// const newDiv = document.createElement('div')
// newDiv.style.height = '200px'
// newDiv.style.width = '200px'
// newDiv.style.backgroundColor = "purple"
// document.body.appendChild(newDiv)


