import "./App.css";
import React from "react";
import NavBar from "./components/Navbar";
import  News  from "./components/News";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const  App =()=>{
 
 
  
    return (
      <>
        <Router>
          <div>
            
            <NavBar />
            
            <Routes>
              <Route
                path="/"
                element={
                  < News 
                    key="general"
                    pageSize={9}
                    country="in"
                    category="General"
                  />
                }
              />
              <Route
                path="/business"
                element={
                  < News 
                    key="business"
                    pageSize={9}
                    country="in"
                    category="Business"
                  />
                }
              />
              <Route
                path="/sports"
                element={
                  < News 
                    key="sports"
                    pageSize={9}
                    country="in"
                    category="Sports"
                  />
                }
              />
              <Route
                path="/entertainment"
                element={
                  < News 
                    key="entertainment"
                    pageSize={9}
                    country="in"
                    category="Entertainment"
                  />
                }
              />
              <Route
                path="/health"
                element={
                  < News 
                    key="health"
                    pageSize={9}
                    country="in"
                    category="Health"
                  />
                }
              />
              <Route
                path="/science"
                element={
                  < News
                    key="science"
                    pageSize={9}
                    country="in"
                    category="Science"
                  />
                }
              />
            </Routes>
          </div>
        </Router>
      </>
    );
  
}

export default App;