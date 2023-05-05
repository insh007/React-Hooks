import React, {useState, useEffect} from 'react'
import axios from 'axios'

const DataFetching12 = () => {
    // const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)
    
    // useEffect(() => {
    //     axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //     .then((res) => {
    //         console.log(res)
    //         // setPosts(res.data)
    //         setPost(res.data)
    //     })
    //     .catch((err) => {
    //         console.log(err.message)
    //     })
    // }, [id])

    // using button
    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then((res) => {
            console.log(res)
            // setPosts(res.data)
            setPost(res.data)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }, [idFromButtonClick])

    return (
        <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={handleClick} > Fetch Post </button>
            {/* <div> {posts.title} </div> */}
            <div> {post.title} </div>
            {/* <ul>
                {
                    posts.map((post) => <li key={post.id} > {post.title} </li> )
                }
            </ul> */}
        </div>
    )
}

export default DataFetching12
