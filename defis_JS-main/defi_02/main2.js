let visibilite = document.getElementById('input');
let boutton = document.getElementById('btn') ;
let display = document.getElementById('display')

boutton.addEventListener('click', () => {
    if ( visibilite.type === 'password') {
        visibilite.type = 'text';
        display.textContent = 'Hide';
    } else {
        visibilite.type = 'password';
        display.textContent ='Show';
    }
});

visibilite.addEventListener('mousedown', () => {
        visibilite.type = 'text';
});

visibilite.addEventListener('mouseup', () => {
        visibilite.type = 'password';
});

visibilite.addEventListener('mouseleave', () => {
    visibilite.type = 'password';
});

