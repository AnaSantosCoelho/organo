
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/formulario';
import Categoria from './componentes/Categorias';
import Rodape from './componentes/rodape';

function App() {
  const categorias = [
    {
      nome:'Romance',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome:'Ficção Científica',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF'
    },
    {
      nome:'Drama',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2'
    },
    {
      nome:'True Crime',
      corPrimaria:'#E06B69',
      corSecundaria:'#FDE7E8'
    },
    {
      nome:'Terror',
      corPrimaria:'#DB6EBF',
      corSecundaria:'#FAE9F5'
    }
    
  ]

  const [livros, setLivros] = useState([])
  const aoNovoLivroAdicionado =(livro) =>{ 
    
    setLivros([...livros, livro])
  }

  return (
    <div className="App">
       <Banner/>
       <Formulario categorias ={categorias.map(categoria => categoria.nome)} aoLivroCadastrado={livro => aoNovoLivroAdicionado(livro)}/>
       {categorias.map(categoria => <Categoria 
         livros={livros.filter(livro => livro.categoria === categoria.nome)} 
         key={categoria.nome} 
         nome= {categoria.nome} 
         corPrimaria={categoria.corPrimaria} 
         corSecundaria={categoria.corSecundaria}/> 
       )}
       <Rodape/>
    </div>
  );
}

export default App;
