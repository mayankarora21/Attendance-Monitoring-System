import React,{Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import Menu from '../Menu/Menu';

const CourseAndClass=(props)=>{
    if(props.text1==='Class'){
        return(
            <Fragment>
                <Grid item xs={2}>
                    {props.text1.toUpperCase()}
                </Grid>
                <Grid item xs={5}>
                    {props.text2.toUpperCase()}
                </Grid>
                <Grid item xs={12}>
                    <hr></hr>
                </Grid>
            </Fragment>
        );
    }
    else{
        return(
            <Fragment>
                <Grid item xs={2}>
                    {
                        props.text1.toUpperCase()
                    }
                </Grid>
                <Grid item xs={5}>
                    {
                        props.text2.toUpperCase()
                    }
                </Grid>
                <Grid item xs={5}>
                    <Menu></Menu>
                </Grid>
                <Grid item xs={12}>
                    <hr width="90%"></hr>
                </Grid>
            </Fragment>
        )
    }
}

export default CourseAndClass;