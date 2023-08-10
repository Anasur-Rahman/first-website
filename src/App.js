import React from 'react';
import ReactDOM from 'react-dom';
import {data} from './data/data.js'; 
import StudentTable from './Component/StudentTable.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import CollegeChanceCalculator from './Component/CollegeChanceCalculator.js';



const App = () => {
  return (
    <div className='main'>

      <div className='header-text'>
        <h1 className='h1'>Calculate Your Chance To get into A GOVT. College</h1>
        <h2 className='h2'>This is valid only for Science Group</h2>
      </div>

      <CollegeChanceCalculator studentData={data} />
      <a className='anchor' href="#bottom">How This App Calculate Your Chance</a>
      <StudentTable data={data} itemsPerPage={100} />
      <p id='bottom'>Your chance to get into a above college is estimated based on your total mark and your position in CTG Board.It includes the total number of seats having by the College.This app also considers the student who may migrate to other districts .This chance may vary as Total Marks of a student can change after Recheck Result. </p>
      
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
export default App;