const BASE_URL = 'https://api.github.com';

export async function fetchRepos(username){
    try{
    const response = await fetch(`${BASE_URL}/users/${username}/repos`);
    if(!response.ok){
        throw new Error('User not found');
    }
    const data = await response.json();
    return data;
    }
    catch(error){
        console.error('Error fetching repositories:', error);
    throw error; // Propagate the error upwards
    }
}