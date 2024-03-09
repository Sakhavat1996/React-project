import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/card/Card";
import classes from '../components/card/card.module.css'

export default function Category(){
    const {category} = useParams();
    const [products , setProducts] = useState([])
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/category/${category}`)
        .then(res=>res.json())
        .then(data=>{
            setProducts(data.products)
        })
    }, [category])
    return(
        <div className={`category-data category-${category} ${classes['product-card']}`}>
            {
                products.map(item=>(
                    <Card key={item.id} product={item}/>
                ))
            }
        </div>
    )
}