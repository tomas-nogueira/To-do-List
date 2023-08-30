import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [listaTarefas, setListaTarefas] = useState( [] );
  const [tarefa, setTarefa] = useState( { id: '' , texto: "", status: "" } );
  
  function addTarefa(){

    if (tarefa.texto !== "") {
      setListaTarefas([...listaTarefas, tarefa]);// add a lista antiga + a nova//
    }
  }

  function excluirTarefa(id){
    const novaLista = listaTarefas.filter((tarefa) => tarefa.id !== id);
    setListaTarefas( novaLista );
  }

  function statusTarefa(id, status){
    const index = listaTarefas.findIndex((tarefa) => tarefa.id === id);
    listaTarefas[index].status = !status;
    setListaTarefas([...listaTarefas]) //Spread Operator, vai pegar tudo que estava na lista//
  }

  useEffect(()=> {
    setTarefa({id:'', texto:''});
  }, [ listaTarefas ])

  return (
    <>
      <header>
        <h1>Lista TO DO</h1>
      </header>
      <div>
        <input type="text" name='tarefa' placeholder='Digite sua tarefa'value={tarefa.texto} onChange={ (e) => setTarefa({id: Math.random(), texto: e.target.value, status: false}) }/>
        <button onClick={addTarefa}>Adicionar</button>
      </div>
      <div>
        <ul>
          {listaTarefas.map(( item, index )=> (<li key={index}>{item.texto} <button onClick={ () => statusTarefa(item.id, item.status) }>{item.status ? 'Concluída' : 'Não Concluída'}</button> <button onClick={ () => excluirTarefa(item.id) }>X</button></li>))} 
        </ul>
      </div>
    </>
  );
}

export default App;
