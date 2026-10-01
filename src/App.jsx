import './App.css'

function situacaoCarro(velocidade) {
  if (velocidade <= 60) {
    return 'Não vai tomar multa'
  } else {
    return 'Vai tomar multa'
  }
}

function App() {
  const nome = 'BMW'
  const velocidade = 80

  return (
    <>
      <h1>Situação do Carro</h1>

      <p>Carro: {nome}</p>

      <p>Velocidade: {velocidade} km/h</p>

      <p>Situação: {situacaoCarro(velocidade)}</p>
    </>
  )
}

export default App