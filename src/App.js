import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      monsters:[
        {
          name:'Frankenstein',
          id: '1'
        },
        {
          name:'Dracula',
          id: '2'
        },
        {
          name:'Zombie',
          id: '3'
        }
      ]
    }
  }
  render(){
    return(
      <div className="App">
        {
          this.state.monsters.map(monster => 
            (<h1 key={monster.id}> { monster.name } </h1>)
          )
        }
      </div>
    )
  }
}

export default App;
