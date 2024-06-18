
import './App.css'
import { RevenueCard } from './component/RevenueCard'

function App() {
 

  return (
    <div className='grid grid-cols-3'>
  <RevenueCard   title={"Amount pending"} amount={"22,434,32"} orderCount={"23"}/>
      
    </div>
  )
}


export default App
