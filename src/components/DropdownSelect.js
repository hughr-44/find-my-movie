import React from 'react'

import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

import Row from 'react-bootstrap/Row';

import Container from 'react-bootstrap/Container';

class DropdownSelect extends React.Component{
    genreSelectHandler(event){
        console.log("event")
        console.log(event)
        const boundObject = this
        const searchTerm = event
        console.log("term")
        console.log(searchTerm)
        boundObject.performSearch(searchTerm)
      }

    render(){
        return (
        <Container className="ui centered py-2" fluid={true}>
        <DropdownButton id="dropdown-menu-align-right" title="Choose Genre">
        <Row className="justify-content-center py-2">
            <Dropdown.Item as="button" eventKey="28" onClick={(event) => this.props.func("28")}>Action</Dropdown.Item>
        </Row>
        <Row className="justify-content-center py-2">
            <Dropdown.Item as="button" eventKey="12" onClick={(event) => this.props.func("12")}>Adventure</Dropdown.Item>
        </Row>
        <Row className="justify-content-center py-2"> 
            <Dropdown.Item as="button" eventKey="16" onClick={(event) => this.props.func("16")}>Animation</Dropdown.Item>
        </Row>
        <Row className="justify-content-center py-2">  
            <Dropdown.Item as="button" eventKey="35" onClick={(event) => this.props.func("35")}>Comedy</Dropdown.Item>
        </Row>
        <Row className="justify-content-center py-2">  
            <Dropdown.Item as="button" eventKey="80" onClick={(event) => this.props.func("80")}>Crime</Dropdown.Item>
        </Row>
        <Row className="justify-content-center py-2">  
            <Dropdown.Item as="button" eventKey="99" onClick={(event) => this.props.func("99")}>Documentary</Dropdown.Item>
        </Row>
        <Row className="justify-content-center py-2">  
            <Dropdown.Item as="button" eventKey="18" onClick={(event) => this.props.func("18")}>Drama</Dropdown.Item>
        </Row>
        <Row className="justify-content-center py-2">  
            <Dropdown.Item as="button" eventKey="10751" onClick={(event) => this.props.func("10751")}>Family</Dropdown.Item>
        </Row>
        <Row className="justify-content-center py-2">  
            <Dropdown.Item as="button" eventKey="14" onClick={(event) => this.props.func("14")}>Fantasy</Dropdown.Item>
        </Row>
        <Row className="justify-content-center py-2">  
            <Dropdown.Item as="button" eventKey="36" onClick={(event) => this.props.func("36")}>History</Dropdown.Item>
        </Row>
        <Row className="justify-content-center py-2">  
            <Dropdown.Item as="button" eventKey="27" onClick={(event) => this.props.func("27")}>Horror</Dropdown.Item>
        </Row>
        <Row className="justify-content-center py-2">  
            <Dropdown.Item as="button" eventKey="10402" onClick={(event) => this.props.func("10402")}>Music</Dropdown.Item>
        </Row>
        <Row className="justify-content-center py-2">  
            <Dropdown.Item as="button" eventKey="9648" onClick={(event) => this.props.func("9648")}>Mystery</Dropdown.Item>
        </Row>
        <Row className="justify-content-center py-2">  
            <Dropdown.Item as="button" eventKey="10749" onClick={(event) => this.props.func("10749")}>Romance</Dropdown.Item>
        </Row>
        <Row className="justify-content-center py-2">  
            <Dropdown.Item as="button" eventKey="878" onClick={(event) => this.props.func("878")}>Science Fiction</Dropdown.Item>
        </Row>
        <Row className="justify-content-center py-2">  
            <Dropdown.Item as="button" eventKey="10770" onClick={(event) => this.props.func("10770")}>TV Movie</Dropdown.Item>
        </Row>
        <Row className="justify-content-center py-2">  
            <Dropdown.Item as="button" eventKey="53" onClick={(event) => this.props.func("53")}>Thriller</Dropdown.Item>
        </Row>
        <Row className="justify-content-center py-2">  
            <Dropdown.Item as="button" eventKey="10752" onClick={(event) => this.props.func("10752")}>War</Dropdown.Item>
        </Row>
        <Row className="justify-content-center py-2">  
            <Dropdown.Item as="button" eventKey="37" onClick={(event) => this.props.func("37")}>Western</Dropdown.Item>
        </Row>
        </DropdownButton>
        </Container>
    )}
}

export default DropdownSelect