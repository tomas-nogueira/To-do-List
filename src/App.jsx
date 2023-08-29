import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [listaTarefas, setListaTarefas] = useState( [] );
  const [tarefa, setTarefa] = useState( { id: '' , texto: "" } );
  
  function addTarefa(){

    if (tarefa.texto !== "") {
      setListaTarefas([...listaTarefas, tarefa]);
    }
  }

  function excluirTarefa(id){
    const novaLista = listaTarefas.filter((tarefa) => tarefa.id !== id);
    setListaTarefas( novaLista );
  }

  useEffect(()=> {
    setTarefa('');
  }, [ listaTarefas ])

  return (
    <>
      <header>
        <h1>Lista TO DO</h1>
      </header>
      <div>
        <input type="text" name='tarefa' placeholder='Digite sua tarefa'value={tarefa.texto} onChange={ (e) => setTarefa({id: Math.random(), texto: e.target.value}) }/>
        <button onClick={addTarefa}>Adicionar</button>
      </div>
      <div>
        <ul>
          {listaTarefas.map(( item, index )=> (<li key={index}>{item.texto} <button onClick={ () => excluirTarefa(item.id) }>X</button></li>))}
        </ul>
      </div>
    </>
  );
}

export default App;
