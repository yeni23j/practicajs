let user = prompt(`Ingrese su Usuario`)
let password = prompt(`Ingrese su Password`) 

console.log(user)
console.log(password)

if (user == `yeni` && password == `1122`) {
    alert(`Bienvenido a su cuenta`)
    location.href = `ingreso.html`
}else{
    alert (`Usuario o password incorrectos`)
    location.href = `error.html`
}