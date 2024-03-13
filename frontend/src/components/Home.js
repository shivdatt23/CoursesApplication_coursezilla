import React, { useEffect } from "react";
//importing jumbotron from bootstrap 4 because it is deprecated from bootstrap5
import { Container ,Buttom, Button } from "reactstrap";
const Home=()=>{
    useEffect(()=>{
        document.title="Home || Code with Shivdatt";
    },[]);
    return (
        <div class="jumbotron text-center ">
          
                <h1 > Code with Shivdatt</h1>
                <p> All the courses provided are genuine and very helpful for the students who are learning Computer Science
                    These couses provided are project based. It will definitely increase your coding skills and development activities.
                </p>
                <Container>
                    <Button color="secondary">Start Using</Button>
                </Container>
        

        </div>
    )
}

export default Home;