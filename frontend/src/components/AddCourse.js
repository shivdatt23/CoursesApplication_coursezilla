import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../api/bootapi";
const AddCourse=()=>{
    useEffect(()=>{
        document.title="Add Course";
    });

const [course,setCourse]=useState({});

//form handler function
const handleForm=(e)=>{
    console.log(course);
    postDataToServer(course);
    e.preventDefault();
};


//creating function to post data to server
const postDataToServer=(data)=>{
    axios.post(`${base_url}/courses`,data).then(
        (response)=>{
            console.log(response);
            console.log("success");
            toast.success("Course Added");
            setCourse({id: "",title:"",description:""});
        },
        (error)=>{
            console.log(error);
            console.log("error");
            toast.error("Error !! Something went wrong");
            
        }
    );
};




    return (
        //using fragment is same as using div it is from react for small small fragments
        <Fragment>
            <h1 className="text-center my-3">Fill course details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text" placeholder="Enter here" name="userId" id="userId"
                    onChange={(e)=>{
                        setCourse({...course, id: e.target.value});
                    }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter title" name="title" id="title"
                    onChange={(e)=>{
                        setCourse({...course,title:e.target.value});
                    }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="description">Course description</label>
                  
                    <Input type="textarea" placeholder="Enter description here" name="description" id="description" style={{height:150}}
                    onChange={
                        (e)=>{
                            setCourse({...course, description: e.target.value})
                        }
                    }
                    
                    />
                </FormGroup>
                <Container className="text-center" >
                    <Button type="submit" color="success">Add Course</Button>
                    <Button type="reset" color="warning ml-2" onClick={(e)=>{setCourse({});}}>Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}

export default AddCourse;