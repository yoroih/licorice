// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
// }

let widthSidenav = "250px";

function toggleNav() {
  var sidenav = document.getElementById("mySidenav");
  if (sidenav.style.width === widthSidenav) {
    sidenav.style.width = "0";
  } else {
    sidenav.style.width = widthSidenav;
  }
}

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

document.body.addEventListener('click', function(event) {
  const sidenav = document.getElementById("mySidenav");

  if (sidenav.style.width === widthSidenav && !sidenav.contains(event.target) && !event.target.matches('.header_icon')) {
      sidenav.style.width = "0";
  }

  if (event.target.matches('.addBlock')) {
      const colorValue = document.querySelector('.inputColor').value;
      const hexColorPattern = /^#([0-9A-F]{3}){1,2}$/i;

      if (hexColorPattern.test(colorValue)) {
          document.querySelector('.colorDisplay').style.backgroundColor = colorValue;
          document.querySelector('.colors').style.backgroundColor = colorValue;
      } else {
          alert("No es un código hexadecimal de color valido")
      }
  }

});


