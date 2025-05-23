import { useState, useEffect } from 'react'
import './App.css'

function App() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                setData(json)
                setLoading(false)
                throw new Error('Something went wrong')
            })
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
