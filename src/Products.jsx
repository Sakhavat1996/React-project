export default function Products() {
    const products = 'https://dummyjson.com/docs/products'
    fetch(products)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    return(
        <>
            <h1>smth</h1>
        </>
    )
}