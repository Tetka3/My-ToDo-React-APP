
import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import TaskList from "../../components/taskList/TaskList";


const Home = () => {
     
    

  return ( 
    <div className="home">
      <Navbar />
      <Header />
      <TaskList />
      
    </div>
  )
}

export default Home;