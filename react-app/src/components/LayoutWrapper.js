import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import request from '../utils/requestWrapper'
import { Container,
  Row, Col,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Card,
  CardBody,
  CardTitle, Button, Form, FormGroup, Label, Input} from 'reactstrap';


export default class LayoutWrapper extends Component {
    constructor(props) {
      super(props)
      this.state = {
        data: '',
        response:''
      }

      this.handleSubmit = this.handleSubmit.bind(this)
      this.logChange = this.logChange.bind(this)
    }
    componentDidMount(e) {

    }
    logChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
    handleSubmit(e) {
      e.preventDefault()

      let requestObject = {}
      requestObject['data'] = this.state.data
      let method = 'POST'
      let endPoint = '/api/text'
      request(endPoint, method,requestObject).then((response) => {
        console.log(requestObject);
        if (response.message) {
          alert(response.message);
        }else if (response.data) {
          alert(response.data);
        }

      })

     }
    render() {

      return (
        <div>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">react app</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
          </Navbar>
          <Container  className="app-content">
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>

              <Card>
                <CardBody>
                  <CardTitle>Send Text</CardTitle>
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <Label for="data">Text</Label>
                        <Input type="text"  onChange={this.logChange}  name="data" id="data" placeholder="enter a text" />
                    </FormGroup>
                    <Button color="primary">Submit</Button>
                  </Form>

                </CardBody>
              </Card>

            </Col>
          </Row>
          </Container>
        </div>

      )
    }
 }
