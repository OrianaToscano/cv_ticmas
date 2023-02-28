const formulario = document.getElementById('form-contacto');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    
    const inputs = Array.from(document.getElementsByClassName('form-control'));
    let valores = [];

    for(i=0 ; i<inputs.length ; i++){
        valores.push(inputs[i].value);
    };

    if(valores.every(elemento => elemento.lenght != 0) == false){
        alert('Todos los campos deben estar completados');
    }else if(valores[3].match(/[A-Z|a-z|ü|é]/i)){ // valores[3] es el numero de telefono
        alert('El campo telefono solo puede contener numeros');
    }else{
        alert('El mensaje fue enviado con éxito');
        
        // Se preparan los datos para un posible envio a un servidor
        let datosIngresados = {
            nombre: valores[0],
            apellido: valores[1],
            email: valores[2],
            telefono: valores[3],
            mensaje: valores[4]
        };
    };
});


const modoA = document.getElementById('modo-A');
const modoB = document.getElementById('modo-B');
const modoC = document.getElementById('modo-C');

const root = document.documentElement;

function cambiarModo(letra){
    for(i=0 ; i<4 ; i++){
        root.style.setProperty(`--actual-${i}`, `var(--modo-${letra}-${i})`);
    };
    switch(letra){
        case 'A':
            modoA.classList.remove('opacity-50');
            modoB.classList.add('opacity-50');
            modoC.classList.add('opacity-50');
            break;
        case 'B':
            modoA.classList.add('opacity-50');
            modoB.classList.remove('opacity-50');
            modoC.classList.add('opacity-50');
            break;
        case 'C':
            modoA.classList.add('opacity-50');
            modoB.classList.add('opacity-50');
            modoC.classList.remove('opacity-50');
            break;
    };
    
    localStorage.setItem('modo', letra);
}

modoA.addEventListener('click', () => {cambiarModo('A')});
modoB.addEventListener('click', () => {cambiarModo('B')});
modoC.addEventListener('click', () => {cambiarModo('C')});

