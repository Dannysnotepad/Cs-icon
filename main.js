/*
*CS icon
*from
*Dannysnotepad
*/

const container = document.querySelector('.body')
const textEl = document.querySelector('h3')
let text = 'Pencil Icon'
alert('Double click screen edge to change icon')

document.body.addEventListener('dblclick', () => {
  
  
  if (text == 'Pencil Icon') {
    text = 'Facebook'
    container.innerHTML = `
      <div class="facebook">
              <h3>Facebook</h3>
              <div class="fbLogo">.
             <span>f</span>
              </div>
            </div>
    `
  }else if(text == 'Facebook'){
    text = 'Burger'
    container.innerHTML = `
      <div class="burger">
            <h3>Burger<h3>
              <button class="toping"></button>
              <br>
              <button class="middle"></button>
              <br>
              <button class="buttom"></button>
            </div>
    `
  }else if(text == 'Burger'){
    text = 'Pencil Icon'
    container.innerHTML = `
      <div class="pencil">
              <h3>Pencil Icon</h3>
              <button class="eraser"></button>
              <br>
              <button class="penBody"></button>
              <br><br>
              <div class="triangle"></div>
            </div>
    `
  }
})
