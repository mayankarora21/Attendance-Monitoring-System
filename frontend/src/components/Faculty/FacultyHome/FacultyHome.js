import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';
import CourseAndClass from '../CourseAndClass/CourseAndClass';
import Grid from '@material-ui/core/Grid';
import Loading from '../../Loading/Loading';
import LoginFirst from '../../LoginFirst/LoginFirst'

class FacultyHome extends React.Component{
    componentWillMount(){
        if(this.props.isFacultyLoggedIn){
            const facultyID=this.props.currFaculty.id;
            this.props.loadCourseAndClass(facultyID);
        }
        
    }
    render(){
//        console.log(this.props.isFacultyLoggedIn)
//        console.log(this.props.currFaculty)
        if(this.props.isFacultyLoggedIn){
            const courseAndClass=this.props.courseAndClass;
//        if(courseAndClass)
//            console.log('render',courseAndClass);
            if(courseAndClass && courseAndClass.map){
                const courseAndClassArray=courseAndClass.map((c,i)=>{
                    return <CourseAndClass text1={c.classid} text2={c.name} key={i} courseid={c.courseid}></CourseAndClass>
                })
                return(
                    <div className="facultyHomeBackground white">
                        <h3 className="ma0">Welcome {this.props.currFaculty.name.toUpperCase()}</h3><br/>
                        <Grid container spacing={3}>
                            <CourseAndClass text1="Class" text2="Course"></CourseAndClass>
                            {courseAndClassArray}
                        </Grid>
                    </div>
                );
            }
            else return <Loading></Loading>;
        }
        else return <LoginFirst></LoginFirst>
        
    }
    
} 

const mapStateToProps=(state)=>{
    return{
        courseAndClass:state.loadCourseClassReducer.courseAndClass,
        isFacultyLoggedIn:state.loginFacultyReducer.isFacultyLoggedIn,
        currFaculty:state.loadFacultyReducer.currFaculty
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        loadCourseAndClass:(facultyID)=>{
            dispatch(actions.loadCourseAndClass(facultyID))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FacultyHome);