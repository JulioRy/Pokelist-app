import React from "react";
import "./pokemon.css";

const Pokemon = ({name, type, image}) => {
    return(  
        React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("p", {}, type),
        React.createElement("img", {src: image, alt: name})

    ])
    );

    
};

export default Pokemon;