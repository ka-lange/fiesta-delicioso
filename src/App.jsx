import {Routes, Route}  from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';

export const App = () => {
    return(
        <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/about" element={ <About /> }/>
            <Route path="/menu" element={ <Menu /> }/>
        </Routes>
    );
}

export default App;
