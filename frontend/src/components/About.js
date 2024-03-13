import React, { useEffect } from "react";
import { Card, CardBody } from "reactstrap";
function About(){
    useEffect(()=>{
        document.title="About";
    });
return (
    <div>
        <Card className="text-center bg-secondary my-3">
            <CardBody>
                <h1>About Us</h1>
                <p>This is a CRUD API learning project developed using springboot and reactJS.
                    The importance of this project is the complete understanding of learning the relation between springboot and reactJS, the way both work in the internet
                </p>
            </CardBody>
        </Card>
    </div>
)
}
export default About;