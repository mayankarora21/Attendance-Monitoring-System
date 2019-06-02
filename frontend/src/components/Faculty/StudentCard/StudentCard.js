import React,{Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

const StudentCard=(props)=>{
    const CustomCheckBox = withStyles({
      root: {
        color: '#FFFFFF',
      },
      checked: {},
    })(props => <Checkbox color="default" {...props} />);
    const {mode}=props;
       
    if(mode==='view'){
        return(
            <Fragment>
                <Grid item xs={3}>
                    {props.text1}
                </Grid>
                <Grid item xs={3}>
                    {
                        (props.text1!=='Roll')?props.text2.toUpperCase():props.text2
                    }
                </Grid>
                <Grid item xs={2}>
                    {props.text3}
                </Grid>
                <Grid item xs={2}>
                    {props.text4}
                </Grid>
                <Grid item xs={2}>
                    {props.text5}
                </Grid>
                <Grid item xs={12}>
                {
                    (props.text1!=='Roll')?<hr width="90%"></hr>:<hr/>
                }
            </Grid>
            </Fragment>
        );
    }
    return(
        <Fragment>
            <Grid item xs={3}>
            {props.text1}
            </Grid>
            <Grid item xs={3}>
                {
                    (props.text1!=='Roll')?props.text2.toUpperCase():props.text2
                }
            </Grid>
            <Grid item xs={4}>
                {
                    (props.text1==='Roll')?
                    props.text3:
                    <CustomCheckBox id={props.text1} value={props.text1}/>
                }
            </Grid>
            <Grid item xs={12}>
                {
                    (props.text1!=='Roll')?<hr width="90%"></hr>:<hr/>
                }
            </Grid>
        </Fragment>
    )
        
    
}

export default StudentCard;