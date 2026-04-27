import Header from "./Components/header"
import { Home_Best_House_Plants, Home_Best_Seller, Home_Plant_Steps, Home_Take_Care, ReviewsSection } from "./Components/Home/home";
import './typography.css';

const App = () => {

  return (

    <>
    <div className="main_container">
      <div className="cstm_container">
        <Header />
        <Home_Best_House_Plants />
        <Home_Take_Care />
        <Home_Plant_Steps />
        <Home_Best_Seller />
        <ReviewsSection />
      </div>  
    </div>
    </>
  )
}

export default App