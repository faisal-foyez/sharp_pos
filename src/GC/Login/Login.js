import React,{useState} from 'react';
import classes from './Login.module.css';
import Header from '../Header/Header';
import axios from 'axios';
const style = {
    txtBox:{
        alignSelf: 'center', 
        fontWeight: 700, 
        color: 'white'
    },
    txtBoxContainer:{
        position: 'absolute', 
        top: 124, 
        left: '36%', 
        display: 'flex', 
        flexDirection: 'column', 
        fontSize: '1.3rem'
    }
}
const Login =(props) =>{
    const [state,setState] = useState({
        username:'',
        password:''
    })
    const onChangeInput = (control,event) =>{
        if(control == 'username'){
    
        }
        setState({
            ...state,
            [control]:event.target.value
        })
    }
    const onSubmit = () =>{
        //console.log(state.username,state.password)
        // userService['login'](state.username,state.password)
        // .then(res=>{
        //     console.log(res);
        // }).catch(err=>console.log(err));
        axios.post("http://localhost:51095/api/Login",{
            Name:state.username,
            Password: state.password
        },{
            headers: {
                'Content-Type':'application/json'
              }
        }).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
    }
    
    return(
        <div className={classes.loginContainer}>
            <Header />
            <div className={classes.loginBox}>
                <div style={style.txtBoxContainer}>
                    <div style={{display:'flex',flexDirection:'row',marginBottom:25}}>
                        <span style={{...style.txtBox,marginRight:9}}>Username:</span>
                        <input onChange={(event)=>onChangeInput('username',event)} value={state.username} type="text" className={classes.InputElement}/>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <span style={{ ...style.txtBox,marginRight:13}}>Password:</span>
                        <input onChange={(event) => onChangeInput('password',event)} value={state.password} type="password" className={classes.InputElement}/>
                    </div>
                    <button onClick={onSubmit} >Login</button>
                </div>
                <div className={classes.seperator}>
                </div>
            </div>
        </div>
    )
}
export default Login;