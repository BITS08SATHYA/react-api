import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';


//
// axios.interceptors.response.use(response => {
//     console.log('Response', response);
//     return response;
// });

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Authorization': 'Bearer ',
        'Content-Type': 'application/json'

    }
});

api.interceptors.request.use(request => {
    console.log('Starting request...');
    return request;
});

function App(){

    const [data, setData] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newPost = {
            title: 'foo',
            body: 'bar',
            userId: '1'
        }

        api.post('https://jsonplaceholder.typicode.com/posts',newPost)
            .then(response => {
                console.log('New Post Added: ', response.data)
                setData([response.data]);
            })
    };

    return(
        <div>
            <h1>Api's in react</h1>
            <form onSubmit={handleSubmit}>
                <button type='submit'>Add Post</button>
            </form>
        </div>
    )
}

export default App