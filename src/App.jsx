import { useEffect, useState } from 'react';
import './App.css';
import Feito from './photos/feito.png'
import NF from './photos/nao feito.png'

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
        <div className='titulo'><h1>LIST TO </h1><div className='do'>DO</div></div>
      </header>
      <div className='container'>
        <input className='input' type="text" name='tarefa' placeholder='DIGITE SUA TAREFA'value={tarefa.texto} onChange={ (e) => setTarefa({id: Math.random(), texto: e.target.value, status: false}) }/>
        <input type="date"/>
      </div>
      <button className='add' onClick={addTarefa}>ADD</button>
      <div className='container-list'>
        <ul>
          {listaTarefas.map(( item, index )=>
          (
            <li className="item" key={index}>
              <div className='text'>
                {item.texto} 
              </div>
              <div className='divbtn'>
                <button className='btns' type='submit'onClick={ () => statusTarefa(item.id, item.status) }>{item.status ? <img src={NF}/> : <img src={Feito}/>}</button>
                <button className='lixo' onClick={ () => excluirTarefa(item.id) }><i class="fa-solid fa-trash"></i></button>
              </div>
            </li>
          ))} 
        </ul>
      </div>
    </>
  );
}

export default App;
