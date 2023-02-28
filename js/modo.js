window.addEventListener('load', () => {
    if(localStorage.getItem('modo')){
        cambiarModo(localStorage.getItem('modo'));
    };
})