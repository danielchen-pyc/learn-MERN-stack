import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import ExercisesList from "./components/exercisesList.component"
import EditExercise from "./components/editExercises.component"
import CreateExercise from "./components/createExercise.component"
import CreateUser from "./components/createUser.component"
import Navbar from "./components/navbar.component"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <br/>
        <Route path="/" component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
