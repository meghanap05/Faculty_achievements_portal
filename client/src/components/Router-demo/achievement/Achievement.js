import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsClockFill } from "react-icons/bs";
import { IoCreate } from "react-icons/io5";
import { MdDelete, MdEdit, MdRestore } from "react-icons/md";
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import NavigationBar from '../navigationbar/NavigationBar';
//import { axiosWithToken } from '../../../axioswithtoken';
import axios from 'axios';
import './Achievement.css';

function Achievement() {
    let { currentUser, loginUserStatus } = useSelector(state => state.userAuthorLoginReducer);
    let { register, handleSubmit } = useForm();
    let state = useLocation();
    let navigate = useNavigate();
    let [achievementEditStatus, setAchievementEditStatus] = useState(false);
    let [achievementDeleteStatus, setAchievementDeleteStatus] = useState(state.state.status);
    console.log("stateobj", state.state)

    function ISOtoUTC(iso) {
        let date = new Date(iso).getUTCDate();
        let month = new Date(iso).getUTCMonth() + 1;
        let year = new Date(iso).getUTCFullYear();
        return `${date}/${month}/${year}`;
    }

    const enableEditStatus = () => {
        setAchievementEditStatus(true);
    };

    const token = localStorage.getItem('token');
    const axiosWithToken = axios.create({
        headers: { Authorization: `Bearer ${token}` }
    });

    const saveModifiedData = async (editedAchievement) => {
        console.log("editedAchievement", editedAchievement)
        let modifiedAchievement = { ...state.state, ...editedAchievement };
        modifiedAchievement.dateOfModification = new Date();
        delete modifiedAchievement._id;
        const token = localStorage.getItem('token');
        const axiosWithToken = axios.create({
            headers: { Authorization: `Bearer ${token}` }
        });
        let res = await axiosWithToken.put(`http://localhost:5000/user-api/achievement`, modifiedAchievement);
        if (res.data.message === 'Achievement updated') {
            setAchievementEditStatus(false);
            navigate(`/faculty-profile/achievement/${modifiedAchievement.achievementId}`, { state: res.data.achievement });
        }
    };

    const enableDeleteStatus = async () => {
        const token = localStorage.getItem('token');
        const axiosWithToken = axios.create({
            headers: { Authorization: `Bearer ${token}` }
        });
        let res = await axiosWithToken.put(`http://localhost:5000/user-api/achievement/${state.state.achievementId}`);
        if (res.data.message === 'Achievement deleted') {
            setAchievementDeleteStatus("false");
            console.log("deleted")
        }
    };

    const restoredAchievement = async () => {
        const token = localStorage.getItem('token');
        const axiosWithToken = axios.create({
            headers: { Authorization: `Bearer ${token}` }
        });
        let res = await axiosWithToken.put(`http://localhost:5000/user-api/restore-achievement/${state.state.achievementId}`);
        if (res.data.message === 'Achievement restored') {
            setAchievementDeleteStatus("true");
        }
    };

    return (
    <div className='home-container'>
      <NavigationBar />
      <div className='content'>
        <div className="achievement-container">
            {achievementEditStatus === false ? (
                <>
                    <div className="achievement-header">
                        <div className="achievement-meta">
                            <p className="achievement-title">{state.state.title}</p>
                            <span className="achievement-dates">
                                <small className="text-secondary me-4">
                                    <BsClockFill /> Created on: {ISOtoUTC(state.state.dateOfCreation)}
                                </small>
                                <small className="text-secondary">
                                    <IoCreate /> Modified on: {ISOtoUTC(state.state.dateOfModification)}
                                </small>
                            </span>
                        </div>
                        <div className="buttons">
                            {loginUserStatus === true && (
                                <>
                                    <button onClick={enableEditStatus} className="btn btn-primary">
                                        <MdEdit /> Edit
                                    </button>
                                    {achievementDeleteStatus === "true" ? (
                                        <button onClick={enableDeleteStatus} className="btn btn-danger">
                                            <MdDelete /> Delete
                                        </button>
                                    ) : (
                                        <button onClick={restoredAchievement} className="btn btn-warning">
                                            <MdRestore /> Restore
                                        </button>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                    <div className="achievement-content-container">
                        <img
                            src={require(`../../../../public/images/${state.state.achievementId}-${state.state.imagename}`)}

                            alt="Achievement"
                            className="achievement-image"
                        />
                        <div className="achievement-details">
                            <div className='right d-flex justify-content-end'>
                                <p className='fs-5'><strong>Username:</strong> {state.state.username}</p>
                            </div>
                            <div className='middle mt-5'>
                            <p className='fs-3'><strong>Faculty Name:</strong> {state.state.facultyname}</p>
                            <p className='fs-3'><strong>Department:</strong> {state.state.department}</p>
                            <p className='fs-3'><strong>Category:</strong> {state.state.category}</p>
                            </div>
                            <p className="achievement-content fs-3 p-4">{state.state.content}</p>
                            {/* <button className="remove-button">Remove</button> */}

                        </div>
                    </div>
                </>
            ) : (
                <form className="edit-achievement-form" onSubmit={handleSubmit(saveModifiedData)}>
                    <h2 className="form-heading text-secondary">Edit Achievement</h2>
                    <div className="form-group">
                        <label htmlFor="inputTitle">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputTitle"
                            defaultValue={state.state.title}
                            {...register("title")}
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-group ">
                            <label htmlFor="inputFaculty">Faculty Name</label>
                            <input type="text" className="form-control" id="inputFaculty" defaultValue={state.state.facultyname} {...register("facultyname")} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group ">
                            <label htmlFor="inputCatergory">Select Category</label>
                            <select id="inputCatergory" className="form-control" {...register("category")} defaultValue={state.state.category}>
                                <option>Academics</option>
                                <option>Cultural</option>
                                <option>Sports</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group ">
                            <label htmlFor="inputDepartment">Select Department</label>
                            <select id="inputDepartment" className="form-control" {...register("department")} defaultValue={state.state.department}>
                                <option selected>Select</option>
                                <option>CSE</option>
                                <option>ECE</option>
                                <option>EEE</option>
                                <option>Civil</option>
                                <option>Mech</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputContent">Description</label>
                        <textarea
                            className="form-control"
                            id="inputContent"
                            rows="10"
                            {...register("content")}
                            defaultValue={state.state.content}
                        ></textarea>
                    </div>
                    {/* <div className="form-row">
                        <div className="form-group ">
                            <label htmlFor="inputImage">Upload Image</label>
                            <input type="file" name='image' accept='image/*' className="form-control" id="inputImage" {...register("image")} />
                        </div>
                    </div> */}
                    <button type="submit" className="btn btn-success">Save</button>
                </form>
            )}
        </div>
      </div>
    </div>
    );
}

export default Achievement;
