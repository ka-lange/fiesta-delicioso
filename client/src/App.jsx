import {Routes, Route}  from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './pages/Home';
import About from './pages/About';

// function App() {
//   return (
//     <div className="App bg-pink">
//       <Routes />
//       <Header />
//       <Home />
//       <Footer />
//     </div>
//   );
// }

export const App = () => {
    return(
        <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/about" element={ <About /> }/>
        </Routes>
    );
}

export default App;
