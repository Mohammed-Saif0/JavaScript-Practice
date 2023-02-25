
localStorage.setItem('name','bob')
localStorage.removeItem('name')
console.log(localStorage.getItem('name'))


sessionStorage.setItem('name','bob')
sessionStorage.removeItem('name')
console.log(sessionStorage.getItem('name'))

document.cookie = 'name=Mohammed Saif; expires='+new Date(2023,1,25).toUTCString;

document.cookie = 'game=pubg;'
console.log(document.cookie)

