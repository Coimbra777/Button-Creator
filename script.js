const controles = document.querySelector("#controles");
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");

// evento adicionado ao tipos de input
controles.addEventListener("change", handleChange);

// objeto com métos para o elemento botão
const handleStyle = {
  element: btn,
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "rem";
  },
};

// função para capturar os métodos do objeto
function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;
  // btn.style.color = value;
  // btn.style.backgroundColor = value;
  // console.log(name, value);
  handleStyle[name](value);
  showValues(name, value);
  showCss();
}

// Função para adicionar os estilos css na tela
function showCss() {
  cssText.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join(";</span><span>");
}

// função para salvar dados no localStorage
function showValues(name, value) {
  localStorage[name] = value;
}
// função para setar os valores
// dos inputs com o valor armazenado em localstorage
function saveValues() {
  const properties = Object.keys(localStorage);
  properties.forEach((propertie) => {
    handleStyle[propertie](valocalStorage[propertie]);
    controles.element[propertie].value = localStorage[propertie];
  });
  showCss();
}
