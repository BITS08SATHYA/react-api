import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';

axios.interceptors.request.use(request => {
    console.log('Starting request...');
    return request;
});

axios.interceptors.response.use(response => {
    console.log('Response', response);
    return response;
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

        axios.post('https://jsonplaceholder.typicode.com/posts',newPost)
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