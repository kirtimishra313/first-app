import React, {useState} from "react";
import './App.css';
import SearchUser from './components/SearchUser';
import RepoList from './components/RepoList';
import { fetchRepos } from "./Services/github";

function App(){
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (username)=>{
    try{
      const data = await fetchRepos(username);
      setRepos(data);
      setError('');
    }
    catch(err){
      setError(err.message);
      setRepos([]);
    }
  };

  return(
    <div className="App">
       <header className= "App-header">
        <h1>Github Repositories Viewers</h1> 
        <SearchUser onSearch={handleSearch}/>
        {error && <p>{error}</p>}
        <RepoList repos= {repos}/>
       </header>
    </div>
  );
}
 export default App;