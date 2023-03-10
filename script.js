const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já adicionado ❌")
    return
  }

  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("nlwSetup@habits", JSON.stringify(nlwSetup.data))
}

const Data = JSON.parse(localStorage.getItem("nlwSetup@habits")) || {}
nlwSetup.setData(Data)
nlwSetup.load()