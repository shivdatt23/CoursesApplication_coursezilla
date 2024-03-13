import logo from './logo.svg';
import './App.css';
// how to import button  from reactstrap
import { Button, Col, Container, Row } from 'reactstrap';
import { ToastContainer , toast } from 'react-toastify';
import Home from "./components/Home";
import Course from './components/Course';
import Allcourse from './components/Allcourses';
import AddCourse from './components/AddCourse';
import UpdateCourse from './components/UpdateCourse';
import Header from './components/Header';
import Menus from './components/Menus';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';

function App() {
const btnHandle=()=>{
toast.success("this is my first message",{
  position:'top-center'
});
};

  return (
    // <div> 
    //   <ToastContainer/>
    //   <h1>This is bootstrap component</h1>
    //   <Button color='warning' outline size='lg ' onClick={btnHandle}>First react Button</Button>
    // </div>
    
    
    <div>
      <BrowserRouter>
     <ToastContainer/>
     
<Container>
 <Header/>
<Row>
  <Col md={4}>
    <Menus/>
  </Col>
  <Col md={8}>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/add-course" element={<AddCourse/>} />
    <Route path="/view-courses" element={<Allcourse/>} />
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Routes>
    
    </Col>
</Row>
</Container>
</BrowserRouter>
      </div>
      
    
  );
}

export default App;
