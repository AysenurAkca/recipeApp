import { useEffect, useState } from "react"
import styles from "./search.module.css"
const url = "https://api.spoonacular.com/recipes/complexSearch"
const apiKey = "0a1c4dd385f64f81959c43fbbfb0a340"
export default function Search({foodData, setFoodData}){
    const [order,setOrder] = useState("pizza")
    useEffect(()=>{
        fetch(`${url}?query=${order}&apiKey=${apiKey}`)
        .then(response=>{
            return response.json()
        })
        .then(data=>{
            console.log(data.results);
            setFoodData(data.results)
        })
        .catch(err=>{
            console.log(err);
        })
    },[order])
    
    return(
        <div className={styles.searchContainer}>
            <input className={styles.input} type="text" value={order}  onChange={(e)=>setOrder(e.target.value)}/>
        </div>
    )
}