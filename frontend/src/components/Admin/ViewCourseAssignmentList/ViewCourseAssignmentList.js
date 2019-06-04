import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';
import Loading from '../../Loading/Loading';
import Grid from '@material-ui/core/Grid';
import Row from '../Row/Row';
import LoginFirst from '../../LoginFirst/LoginFirst';

class ViewCourseAssignmentList extends React.Component{
    componentWillMount(){
        if(this.props.isAdminLoggedIn)
            this.props.loadCourseAssignmentListAll();
    }
    render(){
        if(this.props.isAdminLoggedIn){
//          console.log(this.props.courseAssignmentListAll)
            const courseAssignmentListAll=this.props.courseAssignmentListAll;
            if(courseAssignmentListAll && courseAssignmentListAll.map){
                if(courseAssignmentListAll.length===0){
                    return (<div className="libraryBackground white"><h3 className="ma0">No course Assignment record found</h3></div>)
                }
                const courseAssignmentArray=courseAssignmentListAll.map((c,i)=>{
                    return <Row text1={c.roll.toUpperCase()} text2={c.courseid.toUpperCase()}  numColumns={3} key={i}></Row>
                })
                return(
                    <div className="libraryBackground white">
                        <h3 className="ma0">Course Assignment List</h3><br/>
                        <Grid container spacing={2} style={{fontSize:''}}>
                            <Row text1="Roll" text2="Course ID" numColumns={3}></Row>
                            {courseAssignmentArray}
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
        courseAssignmentListAll:state.loadCourseAssignmentListAllReducer.courseAssignmentListAll,
        isAdminLoggedIn:state.loadAdminReducer.isAdminLoggedIn
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        loadCourseAssignmentListAll:()=>{
            dispatch(actions.loadCourseAssignmentListAll());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewCourseAssignmentList);