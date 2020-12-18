import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component { 
  state = {
    pessoas: [  
      {
        nomeUsuario: 'Rodrigo',
        fotoUsuario: 'https://picsum.photos/50/50',
        postUsuario: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'Fernando',
        fotoUsuario: 'https://picsum.photos/50/51',
        postUsuario: 'https://picsum.photos/200/151'
      },
      {
        nomeUsuario: 'Jose Guilherme',
        fotoUsuario: 'https://picsum.photos/50/52',
        postUsuario: 'https://picsum.photos/200/152'
      }
    ]
  };

  render() {
    const listaDeComponentes = this.state.pessoas.map((pessoa) => {
      return (
        <Post
          {
          nome: pessoa.nomeUsuario
          {pessoa.fotoUsuario}
          {pessoa.postUsuario}
        />
      );
    });

    return (
      <div className={'app-container'}>
        <div> {listaDeComponentes} </div>
      </div>
    );
  }
}

export default App;
