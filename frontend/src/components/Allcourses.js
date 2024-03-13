import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import base_url from "../api/bootapi";
import Course from "./Course";


const Allcourse=()=>{

    //useeffect function to load
    useEffect(()=>{
        document.title="All Courses";
    },[]);
     //the [] at last states that the useeffect will run once after load

//function to call server
const getAllCoursesFromServer=()=>{
    axios.get(`${base_url}/courses`).then(
        (response)=>{
            //success
            console.log(response.data);
            toast.success("course has been loaded",{
            position : "bottom-center"});
            setCourses(response.data);
        },(error)=>{
            //for error
            console.log(error);
            toast.error("something went wrong",{position:"bottom-center"});
        }
    );
};

//calling loading course function
useEffect(()=>{
    getAllCoursesFromServer()
},[]);



    //react hooks
    // const [courses,setCourses]=useState([ 
    //     //useState is a hook which provide the functionality to store the data between two components
    //     {title:"Java course",description:"this is demo course"},
    //     {title:"Django course",description:"this is demo course"},
    //     {title:"ReactJS course",description:"this is demo course"},
    //     {title:"Python Course",description:"this is demo course"}

    // ])
    const [courses,setCourses]=useState([]);

    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=>c.id!=id));

    };

    return(
<div>
    <h1>All Courses</h1>
    <p>List of Courses</p>
    {
        courses.length>0 ? courses.map((item)=>(
            <Course key={item.id} course={item} update={updateCourses}></Course>
        )):"No courses Available"
    }
</div>
        
    )
}
export default Allcourse;