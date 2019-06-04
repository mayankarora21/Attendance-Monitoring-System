import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';
import Loading from '../../Loading/Loading';
import Grid from '@material-ui/core/Grid';
import Row from '../Row/Row';
import LoginFirst from '../../LoginFirst/LoginFirst';

class ViewClassList extends React.Component{
    componentWillMount(){
        if(this.props.isAdminLoggedIn)
            this.props.loadClassListAll();
    }
    render(){
        if(this.props.isAdminLoggedIn){
            const classListAll=this.props.classListAll;
            if(classListAll && classListAll.map){
                if(classListAll.length===0){
                    return (<div className="libraryBackground white"><h3 className="ma0">No class record found</h3></div>)
                }
                const classArray=classListAll.map((c,i)=>{
                    return <Row text1={c.classid.toUpperCase()} text2={c.branch.toUpperCase()} text3={c.semester} text4={c.section.toUpperCase()} numColumns={4} key={i}></Row>
                })
                return(
                    <div className="libraryBackground white">
                        <h3 className="ma0">Class List</h3><br/>
                        <Grid container spacing={2} style={{fontSize:''}}>
                            <Row text1="ID" text2="Branch" text3="Semester" text4="Section" numColumns={4}></Row>
                            {classArray}
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
        classListAll:state.loadClassListAllReducer.classListAll,
        isAdminLoggedIn:state.loadAdminReducer.isAdminLoggedIn
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        loadClassListAll:()=>{
            dispatch(actions.loadClassListAll());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewClassList);