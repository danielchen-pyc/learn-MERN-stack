import React, { Component } from 'react'
import axios from 'axios'


const Exercise = props => (
    <tr>
        <td>{ props.exercise.username }</td>
        <td>{ props.exercise.description }</td>
        <td>{ props.exercise.duration }</td>
        <td>{ props.exercise.date.substring(0, 10) }</td>
        <td>
            <button to={"/edit/" + props.exercise._id} className="btn btn-outline-primary btn-sm">edit</button> 
            &nbsp;&nbsp;&nbsp;
            <button type="submit" onClick={() => { props.deleteExercise(props.exercise._id) }} 
                value="Edit Exercise Log" className="btn btn-outline-dark btn-sm">delete</button>
        </td>
    </tr>
)


export default class ExercisesList extends Component {
    constructor(props) {
        super(props);
        this.deleteExercise = this.deleteExercise.bind(this);
        this.state = { exercises: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/exercises/')
            .then(response => {
                this.setState({ exercises: response.data })
            })
            .catch(err => console.log(err + ": component didn't mount exerciseList"));
    }


    deleteExercise(id) {
        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
        axios.delete(`http://localhost:3001/exercises/${id}`)
            .then(res => console.log(res));
    }


    exercisesList() {
        return this.state.exercises.map(currentexercise => {
            return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
        })
    }


    render() {
        return (
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Desciption</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.exercisesList() }
                    </tbody>
                </table>
            </div>
        );
    };
};