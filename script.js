function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
  
    //pegar a tag imag
    const img = document.querySelector("#profile img")
  
    //substituir a imagem
    if (html.classList.contains("light")) {
      //se tiver light mode, adicionar a imagem light
      //avatar escuro
      img.setAttribute("src", "./assets/avatar-light.png")
      img.setAttribute("alt", "Fofo secund")
    } else {
      //se tiver sem light mode, mandar a imagem nomarl
      //trocar avatar
      img.setAttribute("src", "./assets/Avatar1.png")
      img.setAttribute("alt", "Fofo prime")
    }
  }