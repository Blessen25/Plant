import { Footer } from "./Components/footer";
import Header from "./Components/header"
import { Home_Best_House_Plants, Home_Best_Seller, Home_Plant_Steps, Home_Take_Care, Inspired_Home, ReviewsSection, Special_offers } from "./Components/Home/home";
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
        <Inspired_Home />
        <Special_offers />
        <Footer />
      </div>  
    </div>
    </>
  )
}

export default App