import './style.scss'
import './js/scroll-magic.js'

const app = document.getElementById('app')

function component() {
  const element = document.createElement('h1')

  element.classList.add('hello')
  element.innerHTML = 'Hello webpack'

  return element
}

app.append(component())
