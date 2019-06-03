import React from 'react';
import Grid from '@material-ui/core/Grid';

const Row=(props)=>{
    if(props.numColumns){
        return(
            <React.Fragment>
                <Grid item xs={2} style={{overflowX:'auto'}}>
                    {props.text1}
                </Grid>
                <Grid item xs={3} style={{overflowX:'auto'}}>
                    {props.text2}
                </Grid>
                <Grid item xs={3} style={{overflowX:'auto'}}>
                    {props.text3}
                </Grid>
                <Grid item xs={3} style={{overflowX:'auto'}}>
                    {props.text4}
                </Grid>
                <Grid item xs={1} style={{overflowX:'auto'}}>
                    {props.text5}
                </Grid>
                <Grid item xs={12} style={{overflowX:'auto'}}>
                    {
                        (props.text1!=='Roll')?
                        <hr width="90%"></hr>
                        :<hr></hr>
                    }
                </Grid>
            </React.Fragment>
        );
    }
    
}

export default Row;