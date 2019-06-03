import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';
import Loading from '../../Loading/Loading';
import Grid from '@material-ui/core/Grid';
import Row from '../Row/Row';
import LoginFirst from '../../LoginFirst/LoginFirst';

class ViewFacultyList extends React.Component{
    componentWillMount(){
        if(this.props.isAdminLoggedIn)
            this.props.loadFacultyListAll();
    }
    render(){
        if(this.props.isAdminLoggedIn){
//          console.log(this.props.facultyListAll)
            const facultyListAll=this.props.facultyListAll;
            if(facultyListAll && facultyListAll.map){
                if(facultyListAll.length===0){
                    return (<div className="libraryBackground white"><h3 className="ma0">No faculty record found</h3></div>)
                }
                const facultyArray=facultyListAll.map((f,i)=>{
                    return <Row text1={f.id} text2={f.name} text3={f.email} text4={f.contact} numColumns={4} key={i}></Row>
                })
                return(
                    <div className="libraryBackground white">
                        <h3 className="ma0">Faculty List</h3><br/>
                        <Grid container spacing={2} style={{fontSize:''}}>
                            <Row text1="ID" text2="Name" text3="Email ID" text4="Contact" text5="Class ID" numColumns={4}></Row>
                            {facultyArray}
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
        facultyListAll:state.loadFacultyListAllReducer.facultyListAll,
        isAdminLoggedIn:state.loadAdminReducer.isAdminLoggedIn
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        loadFacultyListAll:()=>{
            dispatch(actions.loadFacultyListAll());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewFacultyList);