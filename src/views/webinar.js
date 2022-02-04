import React,{Component} from "react";
import WebinarList from "../components/webinar_list";
import TitleTextTableLeft from "../components/title-text-table-left"

class Webinar extends Component{
    render(){
        return(          
            <main className="minh-footer-adj d-flex align-items-center bg-webinar">     
                <TitleTextTableLeft/>
            </main>
        );
    }
}

export default Webinar;