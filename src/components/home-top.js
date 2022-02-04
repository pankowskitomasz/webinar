import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";

class HomeTop extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-primary" className="rounded-pill">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"align-items-center d-flex px-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 minh-footer-adj">
                    <Col xs={9} md={5} lg={6} className="text-dark p-0 d-flex align-items-start float-start">
                        <img alt="about"
                            className="img-fluid ms-0 w-75"
                            src="img/home/home-img.png"/>
                    </Col>
                    <Col xs={12} md={7} lg={6} className="mx-auto p-0 d-flex align-items-center">
                        <div className="p-5 text-lg-end text-center">
                            <h1 className="display-6 text-white fw-bold text-uppercase text-shadow">
                                Webinar
                            </h1>
                            <h1 className="lead text-primary text-shadow fw-bold text-uppercase">
                                Where business begins
                            </h1>
                            <p className="text-white text-shadow">
                                Our world is changing everyday, new technologies, new solutions, 
                                new daily life. Don't stay behind, look into the future now!
                            </p>
                            {linking}
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default HomeTop;