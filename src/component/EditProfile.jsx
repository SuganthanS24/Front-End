import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EditProfile.css';

const EditProfile = () => {
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState({
        facebookUrl: '',
        googleMapUrl: '',
        instagramUrl: '',
        websiteUrl: ''
    });
    const [updateStatus, setUpdateStatus] = useState('');

    useEffect(() => {
        const storedProfileData = JSON.parse(localStorage.getItem('profileData'));
        if (storedProfileData) {
            setProfileData(storedProfileData);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const updateField = (fieldId) => {
        const updatedData = { ...profileData };
        localStorage.setItem('profileData', JSON.stringify(updatedData));
        setUpdateStatus(`${fieldId.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} updated successfully.`);
    };

    const updateAllFields = () => {
        localStorage.setItem('profileData', JSON.stringify(profileData));
        setUpdateStatus('All fields updated successfully.');
    };

    return (
        <div className="form-container">
            <h2>Edit Profile</h2>
            <form id="profileForm">
                <div className="form-group">
                    <label htmlFor="facebookUrl">Facebook URL</label>
                    <input type="text" id="facebookUrl" name="facebookUrl" value={profileData.facebookUrl} onChange={handleChange} />
                    <button type="button" onClick={() => updateField('facebookUrl')} className="submit-button">Update</button>
                </div>
                <div className="form-group">
                    <label htmlFor="googleMapUrl">Google Map URL</label>
                    <input type="text" id="googleMapUrl" name="googleMapUrl" value={profileData.googleMapUrl} onChange={handleChange} />
                    <button type="button" onClick={() => updateField('googleMapUrl')} className="submit-button">Update</button>
                </div>
                <div className="form-group">
                    <label htmlFor="instagramUrl">Instagram URL</label>
                    <input type="text" id="instagramUrl" name="instagramUrl" value={profileData.instagramUrl} onChange={handleChange} />
                    <button type="button" onClick={() => updateField('instagramUrl')} className="submit-button">Update</button>
                </div>
                <div className="form-group">
                    <label htmlFor="websiteUrl">Website URL</label>
                    <input type="text" id="websiteUrl" name="websiteUrl" value={profileData.websiteUrl} onChange={handleChange} />
                    <button type="button" onClick={() => updateField('websiteUrl')} className="submit-button">Update</button>
                </div>
                <button type="button" onClick={updateAllFields} className="overall-button">Submit All</button>
                <button type="button" onClick={() => navigate('/weblinks')} className="back-button">Back to Profile</button>
                <div id="updateStatus" className="update-status">{updateStatus}</div>
            </form>
        </div>
    );
};

export default EditProfile;
