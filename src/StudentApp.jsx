import React, { Component } from 'react'
import './StudentApp.css'

export default class StudentApp extends Component {
    constructor(){
        super();
        this.state = {
            showGrades:false,
            student:{
                name:"P.Narendra",
                id:"2500090288",
                department:"Computer Science",
                cgpa:9.9,
                courses:["Algorithms","Database System","UI/UX Design"]
            }
        };
    }
    toggleGrades = () => {
      this.setState((prevState) => ({ showGrades: !prevState.showGrades }));
    };
  render() {
    const { student, showGrades } = this.state;
    return (
      <div className="card">
        <h2>{student.name}</h2>
        <p><strong>ID:</strong> {student.id}</p>
        <p><strong>Department:</strong> {student.department}</p>
         
         {showGrades && (
          <div className="grades">
            <p><strong>CGPA:</strong> {student.cgpa}</p>
            <p><strong>Enrolled courses:</strong></p>
            <ul>
              {student.courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
            </div>
          )}
        <button className="btn" onClick={this.toggleGrades}>
            {showGrades ? "Hide Academic Details" : "Show Academic Details"}
        </button>
      </div>
    )
  }
}