import React from 'react';

function RepoItem({repo}){
    return(
    <li>
        <a href = {repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
        </a>
        <p>{repo.description}</p>
    </li>
    );
}

export default RepoItem;