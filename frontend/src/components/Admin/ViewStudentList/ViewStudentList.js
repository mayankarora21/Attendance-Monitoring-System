import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';
import Loading from '../../Loading/Loading';
import Grid from '@material-ui/core/Grid';
import Row from '../Row/Row';
import LoginFirst from '../../LoginFirst/LoginFirst';

class ViewStudentList extends React.Component{
    componentWillMount(){
        if(this.props.isAdminLoggedIn)
            this.props.loadStudentListAll();
    }
    render(){
        if(this.props.isAdminLoggedIn){
//          console.log(this.props.studentListAll)
            const studentListAll=this.props.studentListAll
            if(studentListAll && studentListAll.map){
                if(studentListAll.length===0){
                    return (<div className="libraryBackground white"><h3 className="ma0">No student record found</h3></div>)
                }
                const studentArray=studentListAll.map((s,i)=>{
                    return <Row text1={s.roll} text2={s.name} text3={s.email} text4={s.contact} text5={s.classid} numColumns={5} key={i}></Row>
                })
                return(
                    <div className="libraryBackground white">
                        <h3 className="ma0">Student List</h3><br/>
                        <Grid container spacing={2} style={{fontSize:''}}>
                            <Row text1="Roll" text2="Name" text3="Email ID" text4="Contact" text5="Class ID" numColumns={5}></Row>
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
        studentListAll:state.loadStudentListAllReducer.studentListAll,
        isAdminLoggedIn:state.loadAdminReducer.isAdminLoggedIn
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        loadStudentListAll:()=>{
            dispatch(actions.loadStudentListAll());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewStudentList);