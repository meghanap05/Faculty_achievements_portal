import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AchievementsByFaculty.css';

function AchievementsByFaculty() {
  const [achievementsList, setAchievementsList] = useState([]);
  const { currentUser } = useSelector((state) => state.userAuthorLoginReducer);
  const navigate = useNavigate();

  const getAchievementOfCurrentFaculty = async () => {
    const token = localStorage.getItem('token');
    const axiosWithToken = axios.create({
      headers: { Authorization: `Bearer ${token}` }
    });
    const res = await axiosWithToken.get(`http://localhost:5000/user-api/achievements/${currentUser.username}`);
    console.log("response", res);
    setAchievementsList(res.data.payload);
  };

  useEffect(() => {
    getAchievementOfCurrentFaculty();
  }, []);

  const readAchievementByAchievementId = (achievementObj) => {
    navigate(`../achievement/${achievementObj.achievementId}`, { state: achievementObj });
  };

  return (
    <div className="container mt-5">
      {achievementsList.length > 0 ? (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {achievementsList.map((achievement) => (
            <div className="col" key={achievement.achievementId}>
              <div className="card h-100">
                <div className='card-image'>
                  <img
                    src={`/images/${achievement.achievementId}-${achievement.imagename}`}
                    alt={achievement.title}
                    className="card-img-top"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{achievement.title}</h5>
                  <h6 className="card-name">{achievement.facultyname}</h6>
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
      ) : (
        <div className="no-achievements">
          <h3 className='no-achievements-text'>No Achievements to Display</h3>
        </div>
      )}
    </div>
  );
}

export default AchievementsByFaculty;
