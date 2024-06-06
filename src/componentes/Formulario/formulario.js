import "./formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from 'react';

const Formulario = (props) => {

  const[titulo, setTitulo] = useState('')
  const[autor, setAutor] = useState('')
  const[imagem, setImagem] = useState('')
  const[categoria, setCategorias] = useState('')

 const aoSalvar = (evento) => {
  evento.preventDefault()

  props.aoLivroCadastrado({
    titulo,
    autor,
    imagem,
    categoria
  })
  setTitulo('')
  setAutor('')
  setImagem('')
  setCategorias('')

 }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para adicionar um novo Livro</h2>
        <CampoTexto 
         obrigatorio={true} 
         label="Título" 
         placeholder="Digite o título" 
         valor={titulo}
         aoAlterado={valor => setTitulo(valor)}
        />
        <CampoTexto 
         obrigatorio={true} 
         label="Autor" 
         placeholder="Digite o Autor" 
         valor={autor}
         aoAlterado={valor => setAutor(valor)}
        />
        <CampoTexto 
         label="Imagem" 
         placeholder="Digite o endereço de imagem" 
         valor={imagem}
         aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa 
         obrigatorio={true} 
         label="Categorias" 
         itens={props.categorias}
         valor={categoria}
         aoAlterado={valor => setCategorias(valor)}
        />
        <Botao texto="Criar card"/>
      </form>
    </section>
  );
};

export default Formulario;
