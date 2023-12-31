import { useState } from 'react'
import Search from './components/Search'
import FoodList from './components/FoodList'
import Nav from './components/Nav'
import OuterContainer from './components/OuterContainer'
import InnerContainer from './components/InnerContainer'
import FoodDetail from './components/FoodDetail'

function App() {
  const [foodData, setFoodData] = useState([])
  const [foodId, setFoodId] = useState("656329")
  return (
    <div className="App">
      <Nav/>
      <Search foodData={foodData} setFoodData={setFoodData}/>
      <OuterContainer>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId}/>
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodId={foodId}/>
        </InnerContainer>
      </OuterContainer>
    </div>
  )
}

export default App
