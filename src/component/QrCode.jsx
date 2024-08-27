import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QRCode.css';

const QRCode = () => {
    const navigate = useNavigate();
    const [url, setUrl] = useState('');
    const [heading, setHeading] = useState('');
    const [websiteName, setWebsiteName] = useState('');
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const profileData = JSON.parse(localStorage.getItem('profileData')) || {};
        const selectedMedia = localStorage.getItem('selectedMedia');

        if (selectedMedia) {
            let url = '';
            let heading = '';
            let websiteName = '';

            switch (selectedMedia) {
                case 'facebook':
                    url = profileData.facebookUrl;
                    heading = 'Facebook URL';
                    websiteName = 'facebook.com';
                    break;
                case 'googleMap':
                    url = profileData.googleMapUrl;
                    heading = 'Google Map URL';
                    websiteName = 'google.com/maps';
                    break;
                case 'instagram':
                    url = profileData.instagramUrl;
                    heading = 'Instagram URL';
                    websiteName = 'instagram.com';
                    break;
                case 'website':
                    url = profileData.websiteUrl;
                    heading = 'Website URL';
                    websiteName = profileData.websiteUrl.split('/')[2];
                    break;
                default:
                    break;
            }

            setUrl(url);
            setHeading(heading);
            setWebsiteName(websiteName);
            setLoading(false);
        } else {
            setLoading(false);
        }
    }, []);

    return (
        <div className="qr-container">
            <h2>QR Code</h2>
            {loading ? (
                <div id="loadingMessage">Generating QR Code...</div>
            ) : (
                url ? (
                    <div id="qrContent">
                        <h2>{heading}</h2>
                        <img className="qr-code" src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(url)}`} alt="QR Code" />
                        <p>{websiteName}</p>
                    </div>
                ) : (
                    <p>No QR code data found.</p>
                )
            )}
            <div className="button-container">
                <button onClick={() => navigate('/weblinks')} className="button">Back to Profile</button>
            </div>
        </div>
    );
};

export default QRCode;
