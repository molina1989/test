import React, { Component } from 'react'
import { Card, CardBody,
  CardTitle, Button, Form, FormGroup, Label, Input} from 'reactstrap'

export default class TextForm extends Component {
    constructor(props) {
      super(props)
      this.state = {

      }
    }
    render() {
      return (
        <div>
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Text</Label>
                  <Input type="text" name="data" id="data" placeholder="enter a text" />
                </FormGroup>
              </Form>
              <Button>Submit</Button>
            </CardBody>
          </Card>
        </div>

      )
    }
 }
