import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";

class BusinessDesc extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-dark" className="rounded-pill">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"business-desc p-0 minh-50vh d-flex align-items-center py-3 border-bottom border-primary "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 pt-5 pb-2">
                    <Col xs={12} md={7} className="text-center text-md-start p-4 d-flex align-items-center">
                        <div className="w-75 mx-auto text-shadow">
                            <h2 className="mb-3 mt-5 fw-bold text-white">
                                Whe we are
                            </h2>
                            <p className="lead text-white">
                                We represent initiative to build capacity for community schools that 
                                emphasize family engagement, have strong community partnerships, and 
                                provide additional supports for students and families designed to 
                                counter environmental factors that impede student achievement. Each 
                                Technical Assistance Center provides school personnel and community 
                                partners with free quality resources, guidance, and training.                                              
                            </p>
                            {linking}
                        </div>
                    </Col>
                    <Col xs={12} md={5} className="text-center mx-auto d-flex align-items-center">
                        <img alt="about"
                            className="img-fluid w-75 mx-auto"
                            src="img/business/business_desc_img.png"/>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default BusinessDesc;