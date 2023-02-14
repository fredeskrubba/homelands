import React from 'react'
import styled from 'styled-components'
import EmployeeCard from './EmployeeCard'

const EmployeeCont = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5vw;
    .employee-grid{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        box-sizing: border-box;
        gap: 2vw;
        margin: 1vw 18vw;
    }
`

const Employees = ({employees}) => {
  return (
    <EmployeeCont>
        <h2>Mød vores ansatte</h2>
        <div className='employee-grid'>
            {employees.map((employee)=>{
                return <EmployeeCard img={employee.image} name={`${employee.firstname} ${employee.lastname}`} position={employee.position} email={employee.email} phone={employee.phone}/>
            })}
        </div>
    </EmployeeCont>
  )
}

export default Employees