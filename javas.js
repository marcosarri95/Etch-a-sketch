
function limpiarBoton(a){
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        switch(a){
            case "color":
                if(button.classList.value != "color seleccion"){
                    button.classList.remove("seleccion");
                }
            break;
            case "arcoi":
                if(button.classList.value != "arcoi seleccion"){
                    button.classList.remove("seleccion");
                }
            break;
            case "borrar":
                if(button.classList.value != "borrar seleccion"){
                    button.classList.remove("seleccion");
                }
            break;
            default:
            if(button.classList.value != "limpiar seleccion"){
                button.classList.remove("seleccion");
            }
            
        }
        
    });
    }



const rango = document.querySelector('#rango');
rango.addEventListener('input',function(e){
const rango1 = document.querySelector('.rango1');
const rango2 = document.querySelector('.rango2');
rango1.textContent = String(rango.value);
rango2.textContent = String(rango.value);

const grilla = document.querySelector(".grilla");

});

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener('click', function(e){
    let a = this.classList.value;
    e.stopPropagation();
    
    if(a == "color efecto cursor"){
        this.classList.remove("efecto");
        this.classList.remove("cursor");
        const but = document.querySelector('.color');
        but.classList.add('seleccion');
        limpiarBoton("color");
    }
    else if(a == "arcoi efecto cursor"){
        this.classList.remove("efecto");
        this.classList.remove("cursor");
        const but = document.querySelector('.arcoi');
        but.classList.add('seleccion');
        limpiarBoton("arcoi");
    }
    else if(a == "borrar efecto cursor"){
        this.classList.remove("efecto");
        this.classList.remove("cursor");
        const but = document.querySelector('.borrar');
        but.classList.add('seleccion');
        limpiarBoton("borrar");
    }
    else if(a == "limpiar efecto cursor"){
        this.classList.remove("efecto");
        this.classList.remove("cursor");
        const but = document.querySelector('.limpiar');
        but.classList.add('seleccion');
        limpiarBoton("limpiar");
    }
    else{

    }
}));

buttons.forEach(button => button.addEventListener('mouseover', function(e) {
    let a = this.classList.value;
    //console.log(a);
    e.stopPropagation(); // stop bubbling!
    if(a == "color"){
        const but = document.querySelector('.color');
        but.classList.add('efecto');
        but.classList.add('cursor');
    }
    else if(a == "arcoi"){
        const but = document.querySelector('.arcoi');
        but.classList.add('efecto');
        but.classList.add('cursor');
    }
    else if(a == "borrar"){
        const but = document.querySelector('.borrar');
        but.classList.add('efecto');
        but.classList.add('cursor');
    }
    else if(a == "limpiar"){
        const but = document.querySelector('.limpiar');
        but.classList.add('efecto');
        but.classList.add('cursor');
    }
    else{

    }
}));

buttons.forEach(button => button.addEventListener('mouseout', function(e) {
this.classList.remove('efecto');
this.classList.remove('cursor');
}));