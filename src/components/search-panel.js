import React from "react";

const SearchPanel = () => {
    const searchStyle = {
        fontSize: '20px'
    };
    return (<input style={searchStyle} type="text" placeholder='Type here to search'/>);
};

export default SearchPanel;