import React from "react";

export const Meme = ({ template, onClick }) => {
    return (
        <img 
           style={{width: 200}} 
           src={template.url} 
           key={template.id} 
           alt={template.name} 
           onClick={onClick}
           />
    );
};