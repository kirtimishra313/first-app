import React from 'react';
import RepoItem from './RepoItem'
function RepoList({repos}){
    return(
        <ul>
            {
                repos.map((repo) => (
                    <RepoItem key = {repo.id} repo={repo} />
                ))
            }
        </ul>
    );
}

export default RepoList;