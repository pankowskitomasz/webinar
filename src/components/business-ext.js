import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class BusinessExt extends Component{
    render(){
        return(        
            <Container fluid className={"business-ext p-0 minh-50vh d-flex align-items-start "+this.props.classExt}>
                <Row className="mx-auto text-center w-100">  
                    <Col xs={6} className="text-center px-0 d-flex align-items-start">
                        <img alt="about"
                            className="img-fluid w-75 ms-0"
                            src="img/business/business_ext_img.png"/>
                    </Col>                 
                    <Col xs={12} md={6} className="text-center text-md-start p-4 d-flex align-items-center">
                        <div className="text-shadow">
                            <h2 className="mb-3 mt-5 text-white">
                                Our mision
                            </h2>
                            <p className="lead text-white">
                                Our mission is to build upon the existing strengths of school districts 
                                to remove barriers to learning and support the whole child through 
                                technical assistance, professional development, and the creation of 
                                Communities of Practice that advance the community schools strategy.
                            </p>
                        </div>
                    </Col> 
                </Row>
            </Container>      
        );
    }
}

export default BusinessExt;