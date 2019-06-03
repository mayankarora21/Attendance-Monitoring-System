import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';
import Loading from '../../Loading/Loading';
import Grid from '@material-ui/core/Grid';
import Row from '../Row/Row';
import LoginFirst from '../../LoginFirst/LoginFirst';

class ViewFacultyAssignmentList extends React.Component{
    componentWillMount(){
        if(this.props.isAdminLoggedIn)
            this.props.loadFacultyAssignmentListAll();
    }
    render(){
        if(this.props.isAdminLoggedIn){
//          console.log(this.props.facultyAssignmentListAll)
            const facultyAssignmentListAll=this.props.facultyAssignmentListAll;
            if(facultyAssignmentListAll && facultyAssignmentListAll.map){
                if(facultyAssignmentListAll.length===0){
                    return (<div className="libraryBackground white"><h3 className="ma0">No Faculty Assignment record found</h3></div>)
                }
                const facultyAssignmentArray=facultyAssignmentListAll.map((f,i)=>{
                    return <Row text1={f.facultyid} text2={f.classid.toUpperCase()} text3={f.courseid.toUpperCase()} numColumns={3} key={i}></Row>
                })
                return(
                    <div className="libraryBackground white">
                        <h3 className="ma0">Faculty Assignment List</h3><br/>
                        <Grid container spacing={2} style={{fontSize:''}}>
                            <Row text1="ID" text2="Class ID" text3="Course ID" numColumns={3}></Row>
                            {facultyAssignmentArray}
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
        facultyAssignmentListAll:state.loadFacultyAssignmentListAllReducer.facultyAssignmentListAll,
        isAdminLoggedIn:state.loadAdminReducer.isAdminLoggedIn
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        loadFacultyAssignmentListAll:()=>{
            dispatch(actions.loadFacultyAssignmentListAll());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewFacultyAssignmentList);