import Header from "./Components/header"
import { Home_Best_House_Plants, Home_Take_Care } from "./Components/Home/home";
import './typography.css';

const App = () => {

  return (

    <>
    <div className="main_container">
      <div className="cstm_container">
        <Header />
        <Home_Best_House_Plants />
        <Home_Take_Care />
      </div>  
    </div>
    </>
  )
}

export default App