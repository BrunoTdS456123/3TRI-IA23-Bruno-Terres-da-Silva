/*const btToggleMenu = document.querySelector(".menu-hamburger")
const info = document.querySelector("dialog")
btToggleMenu.addEventListener("click", () => {
  document.body.classList.toggle("open-nav")
})

const dialog = document.querySelector("dialog")
const btDialog = document.querySelector(".bt-dialog")
const btModal = document.querySelector(".bt-modal")

btDialog.addEventListener('click', () => dialog.show())
btModal.addEventListener('click', () => dialog.showModal())

document.querySelectorAll("dialog button").forEach(
  bt => bt.addEventListener("click", () => dialog.close(),
  btModal.addEventListener('click', ev => {
    info.innerHTML=`
    <h1>Seleção de tema</h1>
    <p>Qual tema você gostaria de usar?</p>
    <div class="action">

      
    </div>
    `
    dialog.classList.remove("dialog")
    dialog.showModal()
  })
  )
)
btDialog.addEventListener("click",  ev => {  
  info.innerHTML = `
  <h1>Capitões históricos</h1>
  <p>
        Augusto	1945–1954 ;

        Bellini	1954–1961 ;
          Alcir Portela	1963–1975 ;
        Roberto Dinamite*	1975–1993 ;
        Edmundo	1997 e 2008 ; 
        Mauro Galvão	1998–1999 ;
        Romário**	2000–2006 ;
        Juninho Pernambucano***	2011–2013 ;
      </p>
  <div class="action">
      <button data-theme="dark">fechar</button>
      
  </div>
  `
  info.querySelectorAll(".action").forEach(
    bt => bt.addEventListener("click", () => dialog.close()
    )
  )      
  }
)
const fechar= document.querySelectorAll(" .action button")
fechar.forEach(fechar => {
  fechar.addEventListener("click", () => dialog.close() )
})*/

const btToggleMenu = document.querySelector(".menu-hamburger")

btToggleMenu.addEventListener("click", () => {
  document.body.classList.toggle("open-nav")
})

const dialog = document.querySelector("dialog")
const btDialog = document.querySelector(".bt-dialog")
const btModal = document.querySelector(".bt-modal")

btDialog.addEventListener('click', () => dialog.show())
btModal.addEventListener('click', () => dialog.showModal())

document.querySelectorAll("dialog button").forEach(
  bt => bt.addEventListener("click", () => dialog.close()
  )
)

btdialog.innerHtml ='   '
