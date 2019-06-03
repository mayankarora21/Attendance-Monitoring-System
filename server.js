const express=require('express');
const cors=require('cors');
const knex=require('knex');
const bodyParser=require('body-parser');
const pg=require('pg');

const app=express();
app.use(bodyParser.json());
app.use(cors());

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '',
    database : ''
  }
});

app.get('/',(req,res)=>{
    res.json('attendance monitoring system');
})


app.post('/addclass',(req,res)=>{
    const {classid,branch,semester,section}=req.body;
    db('class').select('classid').where({classid:classid})
    .then(data=>{
        if(data.length!==0){
            return res.json('class already exists');
        }
        else{
            db('class').insert({classid:classid,branch:branch,semester:semester,section:section})
            .then(data=>res.json('success'))
            .catch(err=>res.status(404).json(err));
        }
    }).catch(err=>res.status(404).json(err));
    
})

app.delete('/deleteclass',(req,res)=>{
    const {classid}=req.body;
    db('class').select('*').where({classid:classid})
    .then(data=>{
        if(data.length===0){
            return res.json('class does not exist');
        }
        else{
            db('class').where({classid:classid}).del().then(data=>res.json("class deleted"))
            .catch(err=>res.status(404).json(err));
        }
    }).catch(err=>res.status(404).json(err));
})

app.post('/addcourse',(req,res)=>{
    const {courseid,name,branch,semester} = req.body;
    
    db('course').select('courseid').where({courseid:courseid})
    .then(data=>{
        if(data.length!==0){
            return res.json('course already exists');
        }
        else{
            db('course').insert({courseid:courseid,name:name,branch:branch,semester:semester})
            .then(data=>res.json('course added'))
            .catch(err=>res.status(404).json(err));
        }
    }).catch(err=>res.status(404).json(err));
})

app.delete('/deletecourse',(req,res)=>{
    db('course').select('*').where({courseid:req.body.courseid})
    .then(data=>{
        if(data.length===0){
            return res.json('course does not exist');
        }
        else{
            db('course').where({courseid:req.body.courseid}).del()
            .then(data=>res.json('course deleted'))
            .catch(err=>res.status(404).json(err));
        }
    }).catch(err=>res.status(404).json(err));
})

app.post('/addfaculty',(req,res)=>{
    const {name,email,contact}=req.body;
    db('faculty').select('email').where({email:email})
    .then(data=>{
        if(data.length!==0){
            return res.json('faculty already exists');
        }
        else{
            db('faculty').insert({name:name,email:email,contact:contact})
            .returning('id')
            .then(data=>res.json(data))
            .catch(err=>{
                console.log(err)
                res.status(404).json(err)
            })
        }
    }).catch(err=>res.status(404).json(err));
})

app.delete('/deletefaculty',(req,res)=>{
//    on delete cascade
//    all the referencing tuples will also be deleted
    db('faculty').select('*').where({id:req.body.facultyid})
    .then(data=>{
        if(data.length===0){
            return res.json('faculty does not exist');
        }
        else{
            db('faculty').where({id:req.body.facultyid}).del()
            .then(data=>res.json('faculty deleted'))
            .catch(err=>res.status(404).json(err));
        }
    })
    
})


app.post('/addstudent',(req,res)=>{
    const {roll,name,email,contact,classid}=req.body;
    
    db('student').select('roll','email').where({roll:roll}).orWhere({email:email})
        .then(data=>{
        let studentFound=false;
        if(data.length!==0){
            studentFound=true;
//            console.log("exists")
            return res.json("student already exists");
        }
        if(studentFound===false){
//            console.log("not exists")
            db('class').select('classid').where({classid:classid})
            .then(data=>{
                if(data.length!==0){
                    db('student').insert({roll:roll,name:name,email:email,contact:contact,classid:classid})
                    .then(data=>res.json('student added'))
                    .catch(err=>res.status(404).json(err));
                }
                else{
                    return res.json("class does not exists");
                }
            }).catch(err=>res.status(404).json(err));
            
        }
    }).catch(err=>res.status(404).json(err));
})

app.delete('/deletestudent',(req,res)=>{
//    on delete cascade
//    all the referencing tuples will also be deleted
    db('student').select('*').where({roll:req.body.roll})
    .then(data=>{
        if(data.length===0){
            return res.json('student does not exist');
        }
        else{
            db('student').where({roll:req.body.roll}).del()
            .then(data=>res.json('student deleted'))
            .catch(err=>res.status(404).json(err));
        }
    }).catch(err=>res.status(404).json(err));
    
})

app.post('/assignfaculty',(req,res)=>{
    const {facultyid,classid,courseid}=req.body;
    db('faculty_teaches').select('*').where({facultyid:facultyid,classid:classid,courseid:courseid})
    .then(data=>{
        if(data.length!==0){
            return res.json('assignment already exist');
        }
        else{
            db('faculty').select('*').where({id:facultyid})
            .then(data=>{
                if(data.length===0){
                    return res.json('faculty does not exist');
                }
                else{
                    db('course').select('*').where({courseid:courseid})
                    .then(data=>{
                        if(data.length===0){
                            return res.json('course does not exist');
                        }
                        else{
                            db('class').select('*').where({classid:classid})
                            .then(data=>{
                                if(data.length===0){
                                    return res.json('course does not exist');
                                }
                                else{
                                    db('faculty_teaches').insert({facultyid:facultyid,classid:classid,courseid:courseid})
                                    .then(data=>res.json('faculty assigned'))
                                    .catch(err=>res.status(404).json(err))
                                }
                            }).catch(err=>res.status(404).json(err))
                        }
                    }).catch(err=>res.status(404).json(err));
                }
            }).catch(err=>res.status(404).json(err))
        }
    }).catch(err=>res.status(404).json(err));
    
    
})
app.delete('/deassignfaculty',(req,res)=>{
    const {facultyid,classid,courseid}=req.body;
    db('faculty_teaches').select('*').where({facultyid:facultyid,classid:classid,courseid:courseid})
    .then(data=>{
        if(data.length===0){
            return res.json('assignment does not exist');
        }
        else{
            db('faculty_teaches').where({facultyid:facultyid,classid:classid,courseid:courseid}).del()
            .then(data=>res.json('faculty deassigned'))
            .catch(err=>res.status(404).json(err));
        }
    }).catch(err=>res.status(404).json(err));
})

app.post('/assigncourse',(req,res)=>{
    const {roll,courseid}=req.body;
    db('student_studies').select('*').where({roll:roll,courseid:courseid})
    .then(data=>{
        if(data.length!==0){
            return res.json('assignment already exists');
        }
        else{
            db('student').select('roll').where({roll:roll})
            .then(data=>{
                if(data.length===0){
                    return res.json('student does not exist');
                }
                else{
                    db('course').select('*').where({courseid:courseid})
                    .then(data=>{
                        if(data.length===0){
                            return res.json('course does not exist');
                        }
                        else{
                            db('student_studies').insert({roll:roll,courseid:courseid})
                            .then(data=>res.json('course assigned'))
                            .catch(err=>res.status(404).json(err));
                        }
                    }).catch(err=>res.status(404).json(err));
                }
            }).catch(err=>res.status(404).json(err));
            
        }
    }).catch(err=>res.status(404).json(err));
    
})

app.delete('/deassigncourse',(req,res)=>{
    const {roll,courseid}=req.body;
    db('student_studies').select('*').where({roll:roll,courseid:courseid})
    .then(data=>{
        if(data.length===0){
            return res.json('assignment does not exist');
        }
        else{
            db('student_studies').where({roll:roll,courseid:courseid}).del()
            .then(data=>res.json('course deassigned'))
            .catch(err=>res.status(404).json(err));
        }
    }).catch(err=>res.status(404).json(err));
})

app.post('/getattendance',(req,res)=>{
    const {roll,courseid}=req.body;
   db.from('student_studies').innerJoin('course','course.courseid','student_studies.courseid').select('*').where({roll:roll})
    .then(data=>{
//       console.log(data);
       res.json(data);
   }).catch(err=>res.status(404).json(err));
})

app.post('/getstudentslist',(req,res)=>{
    const {classid,courseid}=req.body;
    db.from('student').innerJoin('student_studies','student.roll','student_studies.roll').where({
        courseid:courseid,
        classid:classid
    }).then(data=>res.json(data))
    .catch(err=>res.status(404).json(err));
})

//app.get('/login',(req,res)=>{
//    const {email,password} = req.body;
//    db('login').select('*').where({email:email,password:password})
//        .then(data=>{
//        if(data.length===0){
//            res.json('wrong credentials')
//        }
//        else{
//            res.json('right credentials');
//        }
//    }).catch(err=>res.status(404).json(err));
//})

app.post('/studentlogin',(req,res)=>{
    const {email,password} = req.body;
    db('student_login').select('*').where({email:email,password:password})
        .then(data=>{
        if(data.length===0){
            res.json('wrong credentials')
        }
        else{
//            res.json('right credentials');
            db('student').select('*').where({email:email}).then(data=>res.json(data));
        }
    }).catch(err=>res.status(404).json(err));
})

app.post('/facultylogin',(req,res)=>{
    const {email,password} = req.body;
    db('faculty_login').select('*').where({email:email,password:password})
        .then(data=>{
        if(data.length===0){
            res.json('wrong credentials')
        }
        else{
//            res.json('right credentials');
            db('faculty').select('*').where({email:email})
            .then(data=>res.json(data));
        }
    }).catch(err=>res.status(404).json(err));
})
//app.post('/signup',(req,res)=>{
//    const {email,password} = req.body;
//    db('login').insert({email:email,password:password})
//    .then(data=>res.json('signed up'))
//    .catch(err=>res.status(404).json(err));
//})
app.post('/studentsignup',(req,res)=>{
    const {email,password} = req.body;
    db('student_login').select('*').where({email:email})
    .then(data=>{
        if(data.length!==0){
            res.json('email already exist');
        }
        else{
            db('student').select('*').where({email:email})
            .then(data=>{
                if(data.length===0){
                    return res.json('student does not exist');
                }
                else{
                    db('student_login').insert({email:email,password:password})
                    .then(data=>res.json('signed up'))
                    .catch(err=>res.status(404).json(err));
                }
            }).catch(err=>res.status(404).json(err));
            
        }
    }).catch(err=>res.status(404).json(err));
    
})

app.post('/facultysignup',(req,res)=>{
    const {email,password} = req.body;
    db('faculty_login').select('*').where({email:email})
    .then(data=>{
        if(data.length!==0){
            res.json('email already exist');
        }
        else{
            db('faculty').select('*').where({email:email})
            .then(data=>{
                if(data.length===0){
                    return res.json('faculty does not exist');
                }
                else{
                    db('faculty_login').insert({email:email,password:password})
                    .then(data=>res.json('signed up'))
                    .catch(err=>res.status(404).json(err));
                }
            }).catch(err=>res.status(404).json(err));
            
        }
    }).catch(err=>res.status(404).json(err));
})

//app.put('/updatepassword',(req,res)=>{
//    db('login').where({email:req.body.email})
//    .update({password:req.body.password})
//    .then(data=>res.json('password updated'))
//    .catch(err=>res.status(404).json(err));
//})

app.put('/studentupdatepassword',(req,res)=>{
    db('student_login').where({email:req.body.email,password:req.body.oldPassword}).select('*').then(data=>{
        if(data.length===0){
            return res.json('wrong credentials');
        }
        else{
            db('student_login').where({email:req.body.email,password:req.body.oldPassword})
            .update({password:req.body.newPassword})
            .then(data=>res.json('password updated'))
            .catch(err=>res.status(404).json(err));
        }
    }).catch(err=>res.status(404).json(err));
})

app.put('/facultyupdatepassword',(req,res)=>{
    db('faculty_login').select('*').where({email:req.body.email,password:req.body.oldPassword})
    .then(data=>{
        if(data.length===0){
            return res.json('wrong credentials');
        }
        else{
            db('faculty_login').where({email:req.body.email,password:req.body.oldPassword})
            .update({password:req.body.newPassword})
            .then(data=>res.json('password updated'))
            .catch(err=>res.status(404).json(err));
        }
    }).catch(err=>res.status(404).json(err));
    
})

app.put('/enterattendance',(req,res)=>{         ////////////create transaction
    const {studentList,courseid}=req.body;
    let error=false;
//    console.log("student 0 is ",studentList[0],courseid)
//    studentList is an array of student objects
    studentList.forEach((student,i)=>{
//        console.log("student ",student)
        db('student_studies').where({roll:student.roll,courseid:courseid})
        .increment('totalclasses',1).then(()=>{
            if(student.isPresent===true){
//            console.log('present')
                db('student_studies').where({roll:student.roll,courseid:courseid})
                .increment('classesattended',1).then(()=>{
                    return res.json('attendance entered')
                }).catch(err=>{
                    error=true;
                    return res.status(404).json(err);
                });
            }
        }).catch(err=>{
            error=true;
//            console.log('error is',error)
//            console.log(err)
            return res.status(404).json(err);
        });    
    })
})

app.post('/getcourseandclass',(req,res)=>{
    const {facultyID} =req.body;
    db.from('faculty_teaches').innerJoin('course','faculty_teaches.courseid','course.courseid')
    .select('*').where({facultyid:facultyID})
    .then(data=>{
        res.json(data)
    }).catch(err=>res.status(404).json(err));
//    db('faculty_teaches').select('classid','courseid').where({facultyid:facultyID})
//    .then(data=>res.json(data))
//    .catch(err=>res.status(404).json(err));
});

app.put('/updateattendance',(req,res)=>{
    const {studentList,courseid}=req.body;
    studentList.forEach((student,i)=>{
        db('student_studies').where({roll:student.roll,courseid:courseid})
        .update({
            classesattended:student.classesattended
        }).then().catch(err=>res.status(404).json(err))
    })
    res.json('attendance updated');
})

app.post('/adminlogin',(req,res)=>{
    const {username,password}=req.body;
    if(username==='admin' && password==='admin'){
        return res.json('right credentials');
    }
    else{
        return res.json('wrong credentials');
    }
})

app.get('/getdetentionlist',(req,res)=>{
    db.from('student_studies').innerJoin('course','student_studies.courseid','course.courseid')
    .whereRaw('classesattended < 0.75*totalclasses')
    .then(data=>{
        return res.json(data);
    }).catch(err=>res.status(404).json(err))
})

app.listen(3000,()=>{
    console.log('app is running on port 3000');
});

/*

/addstudent --> post --> 'success/failure'                  //done
/addfaculty --> post --> 'success/failure'                  //done  should return id  //done
/addcourse  --> post  --> 'success/failure'                 //done
/addclass-->post-->'success/failure'                        //done
/deleteclass --> delete --> 'success/failure'               //done
/deletestudent --> delete --> 'success/failure'             //done
/deletefaculty --> delete --> 'success/failure'             //done
/deletecourse --> delete --> 'success/failure'              //done
/assigncourse --> post --> 'success/failure'                //done
/deassigncourse-->delete-->'success/failure'                //done
/assignfaculty -->post-->'success/failure'                  //done
/deassignfaculty-->delete-->'success/failure'               //done
/getattendance --> post --> attendance of a student in all courses   //done
/getstudentslist-->post--> list of all students of a class   //done  multiple cases  //done
/enterattendance-->put-->'success/failure'                  //done

/studentlogin-->post-->'success/failure'                            //done
/studentupdatepassword-->get-->'success/failure'                   //done
/studentsignup-->post-->'success/failure'                          //done
/facultylogin-->post-->'success/failure'                            //done
/facultyupdatepassword-->get-->'success/failure'                   //done
/facultysignup-->post-->'success/failure'                          //done
/getcourseandclass-->post-->list of courses and classes that the faculty is assigned     //done
/updateattendance-->put-->'success/failure'                 //done
/adminlogin-->post-->'success/failure'                      //done
/getdetentionlist-->get-->detentionlist                     //done

/login-->get-->'success/failure'                            //done
/updatepassword-->get-->'success/failure'                   //done
/signup-->post-->'success/failure'                          //done
*/