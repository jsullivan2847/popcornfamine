import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Technology from './Components/Technology/Technology';
import Music from './Components/Music/Music';
import Background from './Components/Background/Background';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "About",
    element: <About/>,
  },
  {
    path: "Technology",
    element: <Technology/>,
  },
  {
    path: "Music",
    element: <Music/>,
  }
]);

function App() {
  return (
    <div className="App">
      <Background/>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
