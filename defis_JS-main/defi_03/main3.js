let inpt = document.getElementById('input')
let warn = document.getElementById('warning')

// inpt.addEventListener('keyup', function (event) {
// 	if (event.getModifierState("CapsLock") === true) {
//         warn.style.display = 'block';
//     } else {
//         warn.style.display = 'none';
//     }
// })

// inpt.addEventListener('keyup', function (event) {
// 	if (event.getModifierState("CapsLock")) {
//         warn.style.display = 'block';
//         warn.innerText = "⚠️ Caps Lock is activated..."
//     } else if (event.getModifierState("NumLock")) {
//         warn.style.display = 'block';
//         warn.innerText = "🔢 Num Lock is activated..."
//     }else if (event.getModifierState("NumLock")) && (event.getModifierState("CapsLock")) {
//         warn.innerText = "⚠️ Caps Lock and 🔢 Num Lock are activated..."
//     }
//     else { 
//         warn.style.display = 'none';
//     }
// })

inpt.addEventListener('keyup', function (event) {
    if (event.getModifierState("NumLock") && event.getModifierState("CapsLock")) {
        warn.innerText = "⚠️ Caps Lock and 🔢 Num Lock are activated...";
    } else if (event.getModifierState("NumLock")) {
        warn.style.display = 'block';
        warn.innerText = "🔢 Num Lock is activated...";
    } else if (event.getModifierState("CapsLock")) {
        warn.style.display = 'block';
        warn.innerText = "⚠️ Caps Lock is activated...";
    }
    else {
        warn.style.display = 'none';
    }
})