import React, { useState, useEffect } from 'react';
import { Table, InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/StudentTable.css";
//import Navbar from '../Component/Navbar';

const StudentTable = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filtered = data.filter(
      (student) =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.roll.toString().includes(searchQuery)
    );
    setFilteredData(filtered);
  }, [data, searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset pagination when the search query changes
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // Calculate total pages based on the number of items per page
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className="container mt-4">
      <h1 className='display-4'>Board STAND</h1>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search by name or roll"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </InputGroup>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll</th>
            <th>GPA</th>
            <th>Number</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.slice(startIndex, endIndex).map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.roll}</td>
              <td>{student.gpa}</td>
              <td>{student.total_number}</td>
              <td>{student.position}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-center mt-4">
        <Button
          variant="primary"
          disabled={currentPage === 1}
          onClick={handlePrevPage}
          className="mr-2"
        >
          Previous
        </Button>
        <Button
          variant="primary"
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
          className='mr-2'
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default StudentTable;
