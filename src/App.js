import { BrowserRouter,Route,Switch } from "react-router-dom";
import AddMovie from "./pages/AddMovie";

import AlbumMovie from "./pages/AlbumMovie";
import Detail from "./pages/Detail";
import Footer from "./component/Footer";

import AdminPage from "./pages/AdminPage";




function App() {
  return (
    <>
    <BrowserRouter>
    
   
    
    <Switch>
                    <Route exact path="/" component={AlbumMovie} />
                    <Route path="/addMovie" component={AddMovie} />
                  
                    <Route path="/detail/:id" component={Detail}/>
                    
                   
                    <Route path="/adminHome" component={AdminPage}/>
                    </Switch>
                    <Footer/>
    </BrowserRouter>
      
    </>
  );
}

export default App;
