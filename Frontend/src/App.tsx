import Header from "./Components/header"
import Home from "./Components/Home/home";
import './typography.css';

const App = () => {

  return (

    <>
    <div className="main_container">
      <div className="cstm_container">
        <Header />
        <Home />
      </div>  
    </div>
    </>
  )
}

export default App