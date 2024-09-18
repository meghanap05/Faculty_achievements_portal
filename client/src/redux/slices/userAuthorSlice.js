//create redux slice
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

//make http req using redux-thunk middleware
export const userAuthorLoginThunk = createAsyncThunk('user-author-login', async(userCredObj, thunkApi)=>{
    console.log("usercredobj",userCredObj);
    
    try {
        //if(userCredObj.usertype === 'user'){
            const res = await axios.post('http://localhost:5000/user-api/login',userCredObj)
            console.log(res);
            if(res.data.message==='login success'){
                //store token in local/session storage
                localStorage.setItem('token',res.data.token)
    
                //return data
            }else{
                return thunkApi.rejectWithValue(res.data.message)
            }
            return res.data;
        //}
        //else if(userCredObj.usertype==='author'){
        //     const res = await axios.post('http://localhost:4000/author-api/login',userCredObj)
        //     console.log(res);
        //     if(res.data.message==='login success'){
        //         //store token in local/session storage
        //         localStorage.setItem('token',res.data.token)
    
        //         //return data
        //     }else{
        //         return thunkApi.rejectWithValue(res.data.message)
        //     }
        //     return res.data;
        // }
    } catch (err) {
        return thunkApi.rejectWithValue(err)
    }
})

export const userAuthorSlice = createSlice({
    name : 'user-author-login',
    initialState : {
        isPending:false,
        loginUserStatus:false,
        currentUser:{},
        errorOccurred:false,
        errMsg:''
    },
    reducers : {
        resetState:(state,action)=>{
            state.isPending=false;
            state.currentUser={};
            state.loginUserStatus=false;
            state.errorOccurred=false;
            state.errMsg='';
        }
    },
    extraReducers: builder=>builder
    .addCase(userAuthorLoginThunk.pending, (state, action) =>{
        state.isPending=true;
    })
    .addCase(userAuthorLoginThunk.fulfilled,(state,action)=>{
        state.isPending=false;
        state.currentUser=action.payload.user;
        state.loginUserStatus=true;
        state.errorOccurred=false;
        state.errMsg=''
    })
    .addCase(userAuthorLoginThunk.rejected,(state,action)=>{
        state.isPending=false;
        state.currentUser={};
        state.loginUserStatus=false;
        state.errorOccurred=true;
        state.errMsg=action.payload
    })
})


//export action creator functions
export const {resetState} = userAuthorSlice.actions

//export root reducer of this slice
export default userAuthorSlice.reducer