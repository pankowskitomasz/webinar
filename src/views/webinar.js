import React,{Component} from "react";
import WebinarList from "../components/webinar_list";

class Webinar extends Component{
    render(){
        return(          
            <main className="minh-footer-adj d-flex align-items-center bg-webinar">     
                <WebinarList/>
            </main>
        );
    }
}

export default Webinar;