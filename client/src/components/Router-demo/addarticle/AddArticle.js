import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../addarticle/AddArticle.css';

export default function AddArticle() {
    let { register, handleSubmit } = useForm();
    let [image, setImage]= useState('');
    console.log(image,11)
    let navigate = useNavigate();

    let token = localStorage.getItem('token');
    console.log(token);
    let { currentUser } = useSelector(state => state.userAuthorLoginReducer);
    console.log(currentUser);

    let axiosWithToken = axios.create({
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    const postNewArticle = async (achievement) => {
        console.log("achievementobj", achievement);

        // Create a FormData object
        const formData = new FormData();

        // Append form fields to FormData
        formData.append('dateOfCreation', new Date().toISOString());
        formData.append('dateOfModification', new Date().toISOString());
        formData.append('achievementId', Date.now());
        formData.append('imagename', achievement.image[0].name);
        formData.append('image', achievement.image[0]);
        formData.append('username', currentUser.username);
        formData.append('status', true);
        formData.append('title', achievement.title);
        formData.append('facultyname', achievement.facultyname);
        formData.append('department', achievement.department);
        formData.append('category', achievement.category);
        formData.append('content', achievement.content);

        console.log("formdata",...formData);  // Log FormData content for debugging

        try {
            // Make the HTTP POST request with FormData
            let res = await axiosWithToken.post('http://localhost:5000/user-api/achievement', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(res);
            if (res.data.message === 'new achievement created') {
                navigate(`/faculty-profile/achievements/${currentUser.username}`);
            }
        } catch (error) {
            console.error("Error posting new article", error);
        }
    };

    return (
        <div>
            <form className='new-article-form mx-auto' onSubmit={handleSubmit(postNewArticle)} encType="multipart/form-data">
                <h2 className='form-heading text-secondary'>Achievement Details</h2>
                
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="inputTitle">Title</label>
                        <input type="text" className="form-control" id="inputTitle" {...register("title")} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="inputFaculty">Faculty Name</label>
                        <input type="text" className="form-control" id="inputFaculty" {...register("facultyname")} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="inputDepartment">Select Department</label>
                        <select id="inputDepartment" className="form-control" {...register("department")}>
                            <option value="" selected>Select</option>
                            <option value="CSE">CSE</option>
                            <option value="ECE">ECE</option>
                            <option value="EEE">EEE</option>
                            <option value="Civil">Civil</option>
                            <option value="Mech">Mech</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="inputCategory">Select Category</label>
                        <select id="inputCategory" className="form-control" {...register("category")}>
                            <option value="" selected>Select</option>
                            <option value="Academics">Academics</option>
                            <option value="Cultural">Cultural</option>
                            <option value="Sports">Sports</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="inputContent">Description</label>
                        <textarea type='text' className="form-control" id="inputContent" {...register("content")} rows={10}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="inputImage">Upload Image</label>
                        <input type="file" name='image' accept='image/*' className="form-control" id="inputImage" {...register("image")} onChange={(e)=>setImage(e.target.files)} />
                    </div>
                </div>
                <button type="submit" className="btn  d-block mx-auto">Post</button>
            </form>
        </div>
    );
}
