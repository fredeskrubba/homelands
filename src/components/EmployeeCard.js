import React from 'react'
import styled from 'styled-components'

const Employee = styled.article`
    margin-bottom: 5vw;
    h2 {
        margin: 0;
        font-size: 1.5vw;
    }
    p{
        margin: 0;
        margin-bottom: 0.5vw;
    }
.box {
  height: 18vw;
  width: 100%;
  overflow: hidden;
  border: 1px solid black;
  background-image: url(${props => props.background});
  background-size: cover;
}
.hid-box {
    padding: 1vw;
  top: 75%;
  position: relative;
  transition: all .3s ease-out;
  background: #fffd;
  height: 100%;
  border: 1px solid black;
}

.box:hover > .hid-box{
  top: 50%;
  background-color: #000a;
  color: #fff;
}
`
const EmployeeCard = ({img, name, position, email, phone}) => {
  return (
    <Employee background={img}>
        <div class="box">
            <div class="hid-box">
                <h2>{name}</h2>
                <p>{position}</p>
                <p>{`Email: ${email}`}</p>
                <p>{`Mobil: ${phone}`}</p>
            </div>
        </div>
    </Employee>
  )
}

export default EmployeeCard