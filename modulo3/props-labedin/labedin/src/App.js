import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="file:///C:/Users/ADMIN/OneDrive/Imagens/Fotos/Minhas/received_134898960683231.jpeg"
          nome="Jéssica Pereira" 
          descricao="Oi, eu sou a Jéssica. Sou aluna da labenu, estou apanhando muito para aprender os conteúdos, porém estou gostando bastante do curso de programação, full stack."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>
      <div> 
        <CardPequeno 
          imagem="file:///C:/Users/ADMIN/Downloads/o-email.png"
          nome="Email"
          descricao="jessikapereira369@outlook.com"
        />  
        
        <CardPequeno
          imagem="file:///C:/Users/ADMIN/Downloads/localizador-de-mapa.png"
          nome="Endereço"
          descricao="Rua Olimpio Rolim Loureiro"
        />
        </div>  
     
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          descricao="Não tenho experiências profissionais!" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
   </div>
  );
}

export default App;
