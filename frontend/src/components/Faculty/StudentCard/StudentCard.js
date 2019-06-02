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
    return(
        <Fragment>
            <Grid item xs={3}>
            {props.text1}
            </Grid>
            <Grid item xs={3}>
                {
                    (props.text1!=='Roll')?props.text2.toUpperCase():props.text1
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
                    (props.text1!=='roll')?<hr width="90%"></hr>:<hr/>
                }
            </Grid>
        </Fragment>
    )
        
    
}

export default StudentCard;