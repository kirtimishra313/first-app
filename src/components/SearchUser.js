import React , {useState, usestate} from 'react';

function SearchUser({onSearch}){
    const [username, setUsername] = useState('');

const handleSubmit = (e)=>{
    e.preventDefault();
    onSearch(username);
};
return(
    <form onSubmit = {handleSubmit}>
        <input 
        type = "text"
        value = {username}
        onChange = {(e)=> setUsername(e.target.value)}
        placeholder = "Enter Github username"
        />
        <button type="submit">Search</button>
    </form>
);
}; 

export default SearchUser;