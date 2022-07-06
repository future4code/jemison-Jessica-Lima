import minhaFoto from './img/foto.jpg'
import './App.css';

function App() {
  const boasVindas = "Olá! Seja bem-vindo! Me chamo Jéssica!"
  const mandarMensagem =()=>{
    alert("Olá! O botão foi clicado!")
  }
   
  return (
    <div className="App">

      <h2>{boasVindas}</h2>
      <img src={minhaFoto} className="Foto" alt="Minha imagem"/>
      <p>Este é o meu primeiro site React!</p>
      <button onClick={mandarMensagem}>Clique aqui</button>
    
    </div>
  )
}

export default App;
