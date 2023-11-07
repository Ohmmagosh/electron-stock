const node = document.createElement('div')
const loop = () => {
  ret = ""
  for( i = 0 ; i < 10 ; i++) {
    ret += `<h1> Hello World ${i} </h1>`
  }
  return ret
}
node.innerHTML = loop()
document.body.appendChild(node)
