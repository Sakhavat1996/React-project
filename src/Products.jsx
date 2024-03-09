import { useEffect } from "react"

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(err=>console.log(err))
    },[])
    return(
        <>
            <h1>smth</h1>
        </>
    )
}