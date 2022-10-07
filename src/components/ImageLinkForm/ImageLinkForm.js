import React from "react";
import "./ImageLinkForm.css";
const ImageLinkForm = ({onLinkChange, linkButtonPressed}) => {
    return(
        <div>
           
            <p className="f2 ma4">
                {`Hello Mayank, enter any image link to see if this is working`}
            </p>
            <div className="center">
            <div className="pa4 br3 shadow-5 center form">
            <input className ="f4 pa2 w-70 center " type={"url"} placeholder="Please enter image URL" onChange={onLinkChange}></input>
            <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={linkButtonPressed}>Impress me!</button>
        </div>
        </div>
        </div>
    );
};

export default ImageLinkForm;