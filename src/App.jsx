import TodoList from './components/TodoList';
// import Counter from './counter';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import FilterButtons from './components/FilterButtons';
function App() {
    const [searchText, setSearchText] = useState('')
    const [filter, setFilter] = useState('all')
  return (
    <div className='wrap'>
      <h1>My Todo List:</h1>
      <div className='panel'>
        <div className='panel-label'>ຈຸດກວດທີ1</div>
        <SearchBar searchText={searchText} onChange={setSearchText} />
        <FilterButtons value={filter} onChange={setFilter} />
        
      </div>
      
      <TodoList searchText={searchText} filter={filter}/>
    </div>

  )
}
export default App
