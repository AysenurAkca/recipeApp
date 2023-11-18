import styles from "./fooditem.module.css"
export default function FoodItem({food,setFoodId}){
    return(
        <div className={styles.itemContainer}>
            <img className={styles.itemImage} src={food.image} />
            <h1 className={styles.itemContent}>{food.title}</h1>
            <div className={styles.itemButtonContainer}>
                <button onClick={()=>setFoodId(food.id)} className={styles.itemButton}>View Recipe</button>
            </div>
            
        </div>
    )
}