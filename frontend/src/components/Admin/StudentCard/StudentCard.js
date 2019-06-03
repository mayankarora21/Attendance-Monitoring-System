import React from 'react';
import Grid from '@material-ui/core/Grid';

const StudentCard=(props)=>{
    return(
        <React.Fragment>
            <Grid item xs={4}>
                {props.text1}
            </Grid>
            <Grid item xs={2}>
                {props.text2}
            </Grid>
            <Grid item xs={4}>
                {props.text3}
            </Grid>
            <Grid item xs={2}>
                {props.text4}
            </Grid>
            <Grid item xs={12}>
                {
                    (props.text1!=='Roll')?
                    <hr width="90%"></hr>
                    :<hr></hr>
                }
            </Grid>
        </React.Fragment>
    );
}

export default StudentCard;