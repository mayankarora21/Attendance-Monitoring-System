import React,{Fragment} from 'react';
import Grid from '@material-ui/core/Grid';

const CourseAttendance=(props)=>{
    return(
            <Fragment>
                <Grid item xs={2}>
                    {
                        (props.text1!=='Course ID')?
                        props.text1.toUpperCase():props.text1
                    }
                </Grid>
                <Grid item xs={4}>
                    {
                        (props.text1!=='Course ID')?
                        props.text2.toUpperCase():props.text2
                    }
                </Grid>
                <Grid item xs={2}>
                    {
                        (props.text1!=='Course ID')?
                        ((props.text3.toUpperCase)?props.text3.toUpperCase():props.text3):props.text3
                    }
                </Grid>
                <Grid item xs={2}>
                    {
                        (props.text1!=='Course ID')?
                        ((props.text4.toUpperCase)?props.text4.toUpperCase():props.text4):props.text4
                    }
                </Grid>
                <Grid item xs={2}>
                    {
                        (props.text1!=='Course ID')?
                        ((props.text5.toUpperCase)?props.text5.toUpperCase():props.text5):props.text5
                    }
                </Grid>
                {
                (props.text1!=='Course ID')?
                <Grid item xs={12}>
                    <hr width="90%"></hr>
                </Grid>:null
                }
            </Fragment>
    )
    
}

export default CourseAttendance;