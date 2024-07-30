// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
// }

// document.body.addEventListener('click', function(event) {
//   let sidenav = document.getElementById("mySidenav");
//   if (sidenav.style.width === widthSidenav && !sidenav.contains(event.target) && !event.target.matches('.header_icon')) {
//     sidenav.style.width = "0";
//   }
// });

// document.querySelector('.addBtn').addEventListener('click', function() {

//   const colorValue = document.querySelector('.inputColor').value;

//   const hexColorPattern = /^#([0-9A-F]{3}){1,2}$/i;

//   if (hexColorPattern.test(colorValue)) {
//     document.querySelector('.colorDisplay').style.backgroundColor = colorValue;
//   } else {
//     alert("No es un código hexadecimal de color valido")
//   }

// });

let widthSidenav = "250px";

const hexColorPattern = /^#([0-9A-F]{3}){1,2}$/i;

function isValidHex(hex) {
  return hexColorPattern.test(hex);
}

function toggleNav() {
  var sidenav = document.getElementById("mySidenav");
  if (sidenav.style.width === widthSidenav) {
    sidenav.style.width = "0";
  } else {
    sidenav.style.width = widthSidenav;
  }
}



document.body.addEventListener('click', function(event) {
  const sidenav = document.getElementById("mySidenav");

  if (sidenav.style.width === widthSidenav && !sidenav.contains(event.target) && !event.target.matches('.header_icon') && !event.target.matches('.removeBlock')) {
      sidenav.style.width = "0";
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const colorContainer = document.querySelector('.formForColors');
  const colorFormTemplate = document.getElementById('colorFormTemplate').content;

  // Función para crear un nuevo bloque de inputs de color a partir del template
  function createColorBlock() {
      const colorBlock = document.importNode(colorFormTemplate, true);

      const inputColor = colorBlock.querySelector('.inputColor');
      const colorDisplay = colorBlock.querySelector('.colorDisplay');
      const removeBlockBtn = colorBlock.querySelector('.removeBlock');

      // Añadir el evento para cambiar el color del display al cambiar el input
      inputColor.addEventListener('input', () => {
          if (isValidHex(inputColor.value)) {
              colorDisplay.style.backgroundColor = inputColor.value;
          } else {
              colorDisplay.style.backgroundColor = 'white';
          }
      });

      removeBlockBtn.addEventListener('click', () => {
        removeBlockBtn.closest('.colorInputs').remove();
      });
      return colorBlock;
  }

  // Evento para añadir un nuevo bloque de inputs de color
  colorContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('addBlock')) {
          const colorBlock = createColorBlock();
          colorContainer.appendChild(colorBlock);
      }
  });

  // Inicializar el primer bloque de color
  const initialInput = document.querySelector('.inputColor');
  const initialDisplay = document.querySelector('.colorDisplay');

  initialInput.addEventListener('input', () => {
      if (isValidHex(initialInput.value)) {
          initialDisplay.style.backgroundColor = initialInput.value;
      } else {
          initialDisplay.style.backgroundColor = 'white';
      }
  });
});


