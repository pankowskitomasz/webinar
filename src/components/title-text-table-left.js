import React,{Component} from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Table from "react-bootstrap/esm/Table";

class TitleTextTableLeft extends Component{
    render(){
        return(        
            <Container fluid className={"align-items-center d-flex px-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 minh-footer-adj mt-5 py-5">
                    <Col xs={12} md={6} lg={6} className="text-dark minh-50vh d-flex align-items-center">
                        <div className="w-100 text-center text-md-start text-white ps-md-5">
                            <h2 className="dispaly-6 fw-bold text-primary">
                                Pricing and Plans
                            </h2>
                            <p className="text-white">
                                With effective lead generation tools at your disposal, engage your contacts 
                                and bring them closer to your brand. Share informative and valuable content 
                                and deliver precise email communication.
                            </p>
                            <Table hover striped>
                                <thead>
                                    <tr className="text-primary">
                                        <th className="w-25">Name</th>
                                        <th className="w-50">Description</th>
                                        <th className="w-25">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>   
        );
    }
}

export default TitleTextTableLeft;