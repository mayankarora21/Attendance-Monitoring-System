import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';
import Loading from '../../Loading/Loading';
import Grid from '@material-ui/core/Grid';
import Row from '../Row/Row';
import LoginFirst from '../../LoginFirst/LoginFirst';

class ViewCourseList extends React.Component{
    componentWillMount(){
        if(this.props.isAdminLoggedIn)
            this.props.loadCourseListAll();
    }
    render(){
        if(this.props.isAdminLoggedIn){
//          console.log(this.props.courseListAll)
            const courseListAll=this.props.courseListAll;
            if(courseListAll && courseListAll.map){
                if(courseListAll.length===0){
                    return (<div className="libraryBackground white"><h3 className="ma0">No course record found</h3></div>)
                }
                const courseArray=courseListAll.map((c,i)=>{
                    return <Row text1={c.courseid.toUpperCase()} text2={c.name.toUpperCase()} text3={c.branch.toUpperCase()} text4={c.semester} numColumns={4} key={i}></Row>
                })
                return(
                    <div className="libraryBackground white">
                        <h3 className="ma0">Course List</h3><br/>
                        <Grid container spacing={2} style={{fontSize:''}}>
                            <Row text1="ID" text2="Name" text3="Branch" text4="Semester" numColumns={4}></Row>
                            {courseArray}
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
        courseListAll:state.loadCourseListAllReducer.courseListAll,
        isAdminLoggedIn:state.loadAdminReducer.isAdminLoggedIn
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        loadCourseListAll:()=>{
            dispatch(actions.loadCourseListAll());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewCourseList);