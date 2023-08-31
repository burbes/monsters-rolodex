// import { Component } from 'react';
import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState(''); // [ value, setValue ]
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]); // [ value, setValue ]
  const [filterMonsters, setFilterMonsters] = useState([]); // [ value, setValue
 
  console.log('App.js - App()');

  // only run once (when has some change in the array), when the component is mounted
  useEffect(
    () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setMonsters(users))
    }, []);

  useEffect(() => { 
      const newFilteredMonsters = monsters.filter(monster => {
        return monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
      });
      setFilterMonsters(newFilteredMonsters) 
  }, [monsters, searchField] ); 

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };  
  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  };  

  return (
    <div className="App">
      <h1 className='app-title'>{title}</h1>

      {<SearchBox onChangeHandler={onSearchChange} placeholder='Search Monster' className='monsters-search-box' />}
      <br/>
      {<SearchBox onChangeHandler={onTitleChange} placeholder='Set Title' className='title-search-box' />}
      {<CardList monsters={filterMonsters} />}
    </div>
  );
}

// class App extends Component {

//   //1
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//     // console.log('1 - constructor');
//   }

//   //3
//   componentDidMount() {
//     // console.log('3 - componentDidMount');
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users =>
//         this.setState(
//           () => { return { monsters: users } },
//           // () => { console.log(this.state) } //callback
//         )
//       )
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => { return { searchField } });
//   }

//   //2
//   render() {
//     // console.log('2 - render');

//     // Optimized code
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()));

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         {<SearchBox onChangeHandler={onSearchChange} placeholder='Search Monster' className='monsters-search-box'/>}
//         {<CardList monsters={filteredMonsters} />}
//       </div>
//     );
//   } 
// }

export default App;
