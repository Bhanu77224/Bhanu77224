// import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Corona from './Component/Corona';
import Corona2 from './Component/Corona2';
import Corona3 from './Component/Corona3';
import Ahmedabad from './Component/Ahmedabad';
import Ahmedabad2 from './Component/Ahmedabad2';
import Ahmedabad3 from './Component/Ahmedabad3';
import Technology from './Component/Technology'
import Technology2 from './Component/Technology2';
import Technology3 from './Component/Technology3';
import World from './Component/World'
import World2 from './Component/World2';
import World3 from './Component/World3';
import Gujrat from './Component/Gujrat'
import Gujrat2 from './Component/Gujrat2';
import Gujrat3 from './Component/Gujrat3';
import Business from './Component/Business'
import Business2 from './Component/Business2';
import Business3 from './Component/Business3';
import Entertainment from './Component/Entertainment';
import Beauty from './Component/Beauty';
import Food from './Component/Food';

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/corona" element={<Corona />}></Route>
                    <Route path="/corona2" element={<Corona2 />}></Route>
                    <Route path="/corona3" element={<Corona3 />}></Route>
                    <Route path="/ahmedabad" element={<Ahmedabad />}></Route>
                    <Route path="/ahmedabad2" element={<Ahmedabad2 />}></Route>
                    <Route path="/ahmedabad3" element={<Ahmedabad3 />}></Route>
                    <Route path="/gujrat" element={<Gujrat />}></Route>
                    <Route path="/gujrat2" element={<Gujrat2 />}></Route>
                    <Route path="/gujrat3" element={<Gujrat3 />}></Route>
                    <Route path="/business" element={<Business />}></Route>
                    <Route path="/business2" element={<Business2 />}></Route>
                    <Route path="/business3" element={<Business3 />}></Route>
                    <Route path="/technology" element={<Technology />}></Route>
                    <Route path="/technology2" element={<Technology2 />}></Route>
                    <Route path="/technology3" element={<Technology3 />}></Route>
                    <Route path="/world" element={<World />}></Route>
                    <Route path="/world2" element={<World2 />}></Route>
                    <Route path="/world3" element={<World3 />}></Route>
                    <Route path="/food" element={<Food />}></Route>
                    <Route path="/Entertainment" element={<Entertainment />}></Route>
                    <Route path="/beauty" element={<Beauty />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
