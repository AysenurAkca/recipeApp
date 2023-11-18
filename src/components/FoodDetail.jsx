import { useEffect, useState } from "react"
import styles from "./fooddetail.module.css";

export default function FoodDetail({foodId}){
    const [currentDetail, setCurrentDetail] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY = "0a1c4dd385f64f81959c43fbbfb0a340"
    useEffect(()=>{
       async function fetchDetail(){
        const response = await fetch(`${URL}?apiKey=${API_KEY}`)
        const data = await response.json()
        console.log(data);
        setCurrentDetail(data)
        setIsLoaded(true)
       } 
       fetchDetail()    
    },[foodId])
    return(
        <div className={styles.recipeCard}>
            <h1>{currentDetail.title}</h1>
            <img src={currentDetail.image} />
            <div className={styles.details}>
                <span>⏰{currentDetail.readyInMinutes} Minutes</span>
                <span>{currentDetail.vegetarian ? "🥕Vegetarian" : "🥓 Non-vegetarian"}</span>
                <span>👨‍👩‍👧‍👦Serve for {currentDetail.servings}</span>
            </div>
            <div>
                <h2>Ingredients</h2>  
                <ul>
                    {isLoaded ? currentDetail.extendedIngredients.map(item=>(
                        <li>{item.original} </li>
                    )): <p>Page is loading</p>}
                </ul>
            </div>
            <div>
                <h2>Instructions</h2>
                <ul>
                    {isLoaded ? currentDetail.analyzedInstructions[0].steps.map(step=>(
                        <li>{step.step}</li> )) : <p>Page is loading</p>}
                </ul>
            </div>
        </div>
    )
}