import React, { Fragment, useEffect } from "react";
import { Form,Container, FormGroup, Input, Button } from "reactstrap";
const UpdateCourse=()=>{
    useEffect(()=>{
document.title="Update Course";
    });
    return (
        <Fragment>
            <h1 className="text-center">Update Course</h1>
            
            <Form>
                <FormGroup>
                <label for="userId">Course ID</label>
                <Input type="text" placeholder="Enter course ID"/>
                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter course title" name="title" id="title"/>

                </FormGroup>
                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea" placeholder="Enter description here" name="description" id="description"/>
                </FormGroup>
                <Container className="text-center">
                    <Button color="success">Update</Button>
                    <Button color="danger ml-2">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}
export default UpdateCourse;