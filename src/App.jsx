import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios.all([
            axios.get('https://jsonplaceholder.typicode.com/posts'),
            axios.get('https://jsonplaceholder.typicode.com/users')
        ]).then(axios.spread((posts,users) => {
                setData(posts.data)
                setLoading(false)
                // throw new Error('Something went wrong')
            }))
            .catch(error => {
                console.log(`Error fetching data from ${error}`)
                setError('Failed to fetch the data!')
                setLoading(false)
            }
            )
    }, []);

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }


  return (
      <div>
        <h2>API's</h2>
      <ul>
          {data.map((post) => (
              <li key={post.id}>
                  <p>{post.title}</p>
                  <p>{post.body}</p>
              </li>
          ))}
      </ul>
      </div>

  )
}

export default App
