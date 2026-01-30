import React, { Component } from 'react'
import './StudentApp.css'
export default class StudentApp extends Component {
  constructor(){
    super();
    this.state={
      showGrades: false,
      student:{
        name:"P.Narendra",
        id:"2500090288",
        department:"cse",
        cgpa:9.17,
        courses:["alogorithms","database systems","ui/ux design"]
      }
    }
  }
  toggleGrades=()=>{
    this.setState({showGrades:!this.state.showGrades})
  }
  render() {
    const {student,showGrades}=this.state;
    return (
      <div className="card">
        <h2>Student.name</h2>
        <p><strong>ID:</strong>{student.id}</p>
        <p><strong>Department:</strong>{student.department}</p>
        <p><strong>CGPA:</strong>{student.cgpa}</p>
        {showGrades && (
          <div className='details'>
            <p><strong>Current CGPA:</strong>{student.cgpa}</p>
            <p><strong>Courses Enrolled:</strong></p>
            <ul>
              {student.courses.map((course,index)=>(
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        )}
        <button onClick={this.toggleGrades}>
          {showGrades ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
    )
  }
}