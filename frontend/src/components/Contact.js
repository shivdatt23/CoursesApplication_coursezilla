import React, { useEffect } from "react";
import { Card, CardBody } from "reactstrap";
function Contact(){
    useEffect(()=>{
        document.title="Contact";
    });
    return(
        <div>
            <Card className="text-center bg-secondary my-3">
                <CardBody>
                    <h1>Contact Us</h1>
                    <h5>Developed by : Shivdatt Bibhar</h5>
                    <h5>Java Developer </h5>
                    
                </CardBody>
            </Card>
        </div>
    )
}
export default Contact;