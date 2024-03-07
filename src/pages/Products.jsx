import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/card/Card";
import classes from '../components/card/card.module.css'

export default function Products() {
    const products = 'https://dummyjson.com/products'
    // const laptops = 'https://dummyjson.com/products/search?q=laptop'
    //    const home = 'https://dummyjson.com/products/search?q=home'
    //  const phones = 'https://dummyjson.com/products/search?q=phones'
    
    const [productsData, setProductsData] = useState([])
    // const [laptopsData, setLaptopsData] = useState([])
    // const [homeData, setHomeData] = useState([])
    // const [phonesData, setPhonesData] = useState([])
    
    useEffect(() => {
        fetch(products)
        .then(response => response.json())
        .then(data => {
            setProductsData(data.products);
        })
    },[])
    
    // useEffect(() => {
    //     fetch(laptops)
    //     .then(response => response.json())
    //     .then(data => {
    //         setLaptopsData(data.products);
    //     })
    // },[])
    
    // useEffect(() => {
    //     fetch(home)
    //     .then(response => response.json())
    //     .then(data => {
    //         setHomeData(data.products);
    //     })
    // },[])
    
    // useEffect(() => {
    //     fetch(phones)
    //     .then(response => response.json())
    //     .then(data => {
    //         setPhonesData(data.products);
    //     })
    // },[])
    
    // function deleteElement(productId) {
    //     useEffect(() => {
    //         const updatedProductsData = productsData.filter(product => product.id !== productId)
    //         setProductsData(updatedProductsData)
    //     }, [])
    // }
    
    return(
        <div className="products-main-container">
            <div className="links-container">
                <Link to={'/products/laptops'} className="category">Laptops</Link>
                <Link to={'/products/smartphones'}>Smartphones</Link>
                <Link to={'/products/groceries'}>Groceries</Link>
            </div>
            <div className={classes['product-card']}>
                {productsData.map(product => (
                    <Card key={product.id} product={product}/>
                ))}
            </div>
        </div>
    )
}