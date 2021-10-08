import { BrowserRouter,Route,Switch } from "react-router-dom";
import AddMovie from "./pages/AddMovie";
import Admin from "./pages/Admin";
import AdminSpace from "./pages/AdminSpace";
import AlbumMovie from "./pages/AlbumMovie";
import Detail from "./pages/Detail";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Signin from "./pages/Signin";




function App() {
  return (
    <>
    <BrowserRouter>
    
   
    
    <Switch>
                    <Route exact path="/" component={AlbumMovie} />
                    <Route path="/addMovie" component={AddMovie} />
                    <Route path="/admin" component={Admin}/>
                    <Route path="/detail/:id" component={Detail}/>
                    
                    <Route path="/admin" component={AdminSpace}/>
                    </Switch>
                    <Footer/>
    </BrowserRouter>
      
    </>
  );
}

export default App;
