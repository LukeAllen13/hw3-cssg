"use client";
import {Product} from "@/components/product";
import React from "react";
export default function ProductPage( {params} ) {
// variable, function to change that variable
const[count, setCount] = React.useState(0);

    return (
        <div>
            <h1>This is the product page!</h1>
            <Product productID = {params.productID}/>
            <p>Mini calculator!!</p>
            <button onClick={ () => setCount(count * count)} > Click me to square!</button>
            <button onClick={ () => setCount(Math.sqrt(count))} > Click me take the square root!</button>
            <button onClick={ () => setCount(count + 1)} > Click me to increase!</button>
            <button onClick={ () => setCount(count - 1)} > Click me to decrease!</button>
            <button onClick={ () => setCount(0)} > Click me to reset to 0!</button>
            <h1>{count}</h1>
         
        </div>
    )
}