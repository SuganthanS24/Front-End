import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css'

const Profile = () => {
    const [profileData, setProfileData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem('profileData');
        if (data) {
            setProfileData(JSON.parse(data));
        }
    }, []);

    const navigateToQRCode = (media) => {
        localStorage.setItem('selectedMedia', media);
        navigate('/qrcode');
    };

    return (
        <div className="profile-container">
            <h2>Company Profile</h2>
            <div id="profileContent">
                {profileData.facebookUrl && (
                    <div className="profile-item" onClick={() => navigateToQRCode('facebook')}>
                        <strong>Facebook</strong>
                    </div>
                )}
                {profileData.googleMapUrl && (
                    <div className="profile-item" onClick={() => navigateToQRCode('googleMap')}>
                        <strong>Google Map</strong>
                    </div>
                )}
                {profileData.instagramUrl && (
                    <div className="profile-item" onClick={() => navigateToQRCode('instagram')}>
                        <strong>Instagram</strong>
                    </div>
                )}
                {profileData.websiteUrl && (
                    <div className="profile-item" onClick={() => navigateToQRCode('website')}>
                        <strong>Website</strong>
                    </div>
                )}
                {!Object.keys(profileData).length && <p>No profile data found.</p>}
            </div>
            <div className="button-container">
                <button onClick={() => navigate('/')} className="button back-button">
                    Back to Index
                </button>
                <button onClick={() => navigate('/editprofile')} className="button">
                    Edit
                </button>
            </div>
        </div>
    );
};

export default Profile;
