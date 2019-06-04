import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';
import Loading from '../../Loading/Loading';
import Grid from '@material-ui/core/Grid';
import StudentCard from '../StudentCard/StudentCard';
import LoginFirst from '../../LoginFirst/LoginFirst';

class ViewDetentionList extends React.Component{
    componentWillMount(){
        if(this.props.isAdminLoggedIn)
            this.props.loadDetentionList();
    }
    render(){
        if(this.props.isAdminLoggedIn){
            //        console.log(this.props.detentionList)
            const detentionList=this.props.detentionList
            if(detentionList && detentionList.map){
                if(detentionList.length===0){
                    return (<div className="detentionListBackground white"><h3 className="ma0">No student is detained</h3></div>)
                }
                const studentArray=detentionList.map((s,i)=>{
                    const percentage=((s.classesattended/s.totalclasses)*100).toFixed(2);

                    return <StudentCard text1={s.roll} text2={s.courseid.toUpperCase()} text3={s.name.toUpperCase()} text4={percentage+"%"} key={i}></StudentCard>
                })
                return(
                    <div className="detentionListBackground white">
                        <h3 className="ma0">Detention List</h3><br/>
                        <Grid container spacing={2}>
                            <StudentCard text1="Roll" text2="Course ID" text3="Course Name" text4="%"></StudentCard>
                            {studentArray}
                        </Grid>
                    </div>
                );
            }
            else{
                return <Loading></Loading>
            }
        }
        else{
            return <LoginFirst></LoginFirst>
        }
    }
}
const mapStateToProps=(state)=>{
    return{
        detentionList:state.loadDetentionListReducer.detentionList,
        isAdminLoggedIn:state.loadAdminReducer.isAdminLoggedIn
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        loadDetentionList:()=>{
            dispatch(actions.loadDetentionList());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewDetentionList);