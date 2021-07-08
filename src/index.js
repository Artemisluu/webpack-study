import x from './assets/c.js'
import jpeg from './assets/1.jpeg'
import jpeg1 from './assets/2.jpeg'

console.log(jpeg);

const div = document.getElementById('app')
div.innerHTML = `<img src="${jpeg}"><img src="${jpeg1}">`


const button = document.createElement('button')
button.innerText ='懒加载'
button.onclick = ()=>{
  const promise = import('./assets/lazy.js')
  promise.then((module)=>{
    const fn = module.default
    fn()
  },()=>{
    console.log(模块加载错误);
  })
}

div.appendChild(button)