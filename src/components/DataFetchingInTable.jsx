import React from 'react'

const DataFetchingInTable = () => {
    const [products, setProducts] = useState([])

    // useEffect(() => {
    //     axios.get("https://fakestoreapi.com/products")
    //         .then((response) => {
    //             console.log(response.data)
    //             // console.log('hello')
    //             setProducts(response.data)
    //         })
    //         .catch((err) => {
    //             console.log(err.message)
    //         })
    // }, [])

    // using async await 
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("https://fakestoreapi.com/products")
                setProducts(response.data)

            }
            catch (err) {
                console.log(err.message)
            }
        }
        fetchData()
    }, [])


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Category</th>
                    </tr>
                </thead>

                <tbody>

                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>{product.category}</td>
                        </tr>
                    ))}

                    {/* Using for loop */}

                    {/* {(() => {
                        let rows = [];
                        for (let i = 0; i < products.length; i++) {
                            const product = products[i];
                            rows.push(
                                <tr key={product.id}>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td>{product.category}</td>
                                </tr>
                            );
                        }
                        return rows;
                    })()} */}

                </tbody>
            </table>
        
        </div>
    )
}

export default DataFetchingInTable
