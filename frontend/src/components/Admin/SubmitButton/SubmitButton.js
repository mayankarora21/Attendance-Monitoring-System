import React from 'react';
import Button from '@material-ui/core/Button';

const SubmitButton=(props)=>{
    const {text} = props;
    return(
        <Button variant="contained" color="secondary" style={{padding:'0px'}}><input type="submit" className="transparentBackground ba0 ph3 pv2 pointer white" value={text}></input></Button>
    );
}

export default SubmitButton;