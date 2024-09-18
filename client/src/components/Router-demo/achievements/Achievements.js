import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavigationBar from '../navigationbar/NavigationBar'; 
import './Achievements.css';

function Achievements() {
    const [achievementsList, setAchievementsList] = useState([]);
    const [records, setRecords] = useState([]);
    const [department, setDepartment] = useState('');
    const [category, setCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    let { currentUser } = useSelector((state) => state.userAuthorLoginReducer);
    let navigate = useNavigate();

    const getAchievementOfCurrentFaculty = async () => {
        const token = localStorage.getItem('token');
        const axiosWithToken = axios.create({
            headers: { Authorization: `Bearer ${token}` }
        });
        let res = await axiosWithToken.get(`http://localhost:5000/user-api/achievements/`);
        console.log("response", res);
        setAchievementsList(res.data.payload);
        setRecords(res.data.payload);
    };

    useEffect(() => {
        getAchievementOfCurrentFaculty();
    }, []);

    useEffect(() => {
        let filteredRecords = achievementsList;

        if (searchTerm) {
            filteredRecords = filteredRecords.filter(data => data.facultyname.toLowerCase().includes(searchTerm.toLowerCase()));
            setDepartment('');
            setCategory('');
        } else if (department) {
            filteredRecords = filteredRecords.filter(data => data.department.toLowerCase().includes(department.toLowerCase()));
            setCategory('');
            setSearchTerm('');
        } else if (category) {
            filteredRecords = filteredRecords.filter(data => data.category.toLowerCase().includes(category.toLowerCase()));
            setDepartment('');
            setSearchTerm('');
        }

        setRecords(filteredRecords);
    }, [searchTerm, department, category, achievementsList]);

    const readAchievementByAchievementId = (achievementObj) => {
        console.log(achievementObj);
        navigate(`../achievement/${achievementObj.achievementId}`, { state: achievementObj });
    };

    return (
        <div className="page-container">
            <NavigationBar /> {/* Sidebar Navigation */}
            <div className="content-container">
                <div className="achievements-container">
                    <h3 className="articles-heading">All Achievements</h3>
                    <div className="filters-container">
                        {/* Your filtering options and search input */}
                        <div className="form-group">
          <select
            id="inputDepartment"
            className="form-control"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="">Select Department</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="Civil">Civil</option>
            <option value="Mech">Mech</option>
          </select>
        </div>

        <div className="form-group">
          <select
            id="inputCategory"
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Academics">Academics</option>
            <option value="Cultural">Cultural</option>
            <option value="Sports">Sports</option>
          </select>
        </div>

        <input
          type='text'
          className='search'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Search...'
        />
      </div>
                    

                    {records.length === 0 ? (
                        <p>No achievements to display</p>
                    ) : (
                        <div className="row">
                            {records.map((achievement) => (
                                <div className="col" key={achievement.achievementId}>
                                    <div className="card h-100">
                                        <div className='img-div'>
                                            <img
                                                src={require(`../../../../public/images/${achievement.achievementId}-${achievement.imagename}`)}
                                                alt={achievement.title}
                                                className="card-img-top"
                                            />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{achievement.title}</h5>
                                            <h6 className='card-name'>{achievement.facultyname}  ({achievement.department})</h6>
                                            <h6 className='card-category'>{achievement.category}</h6>
                                            <p className="card-text">
                                                {achievement.content.substring(0, 80) + "..."}
                                            </p>
                                            <button className="custom-btn btn-4" onClick={() => readAchievementByAchievementId(achievement)}>
                                                <span>Read More</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Achievements;
