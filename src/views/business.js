import React,{Component} from "react";
import BusinessDesc from "../components/business-desc";
import BusinessExt from "../components/business-ext";

class Business extends Component{
    render(){
        return(          
            <main className="minh-footer-adj">     
                <BusinessDesc/>
                <BusinessExt/>
            </main>
        );
    }
}

export default Business;