import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Exercise = props => (
    <tr>
        <td>(props.exercise.username)</td>
        <td>(props.exercise.description)</td>
        <td>(props.exercise.duration)</td>
        <td>(props.exercise.date.substring(0, 10))</td>
        <td>
            <Link to={"/edit/" + props.exercise._id}>Edit</Link> 
                | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>Delete</a>
        </td>
    </tr>
)


export default class exercisesList extends Component {
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
            .catch(err => console.log(err));
    }


    deleteExercise(id) {
        axios.delete('http://localhost:3001/exercises/', id)
            .then(res => console.log(res));
        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        });
    }


    exercisesList() {
        return this.state.exercises.map(currentExercises => {
            return <Exercise exercises={currentExercises} deleteExercise={this.deleteExercise} key={currentExercises._id}/>;
        })
    }


    render() {
        return (
            <div>
                <h3>Logged Exerciese</h3>
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