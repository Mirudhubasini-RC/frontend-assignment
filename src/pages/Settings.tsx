import React, { useState } from 'react';
import '../styles/Settings.css';
import avatarDefault from '../assets/user_avatar.webp';
import coverDefault from '../assets/cover.png';
import { BsLockFill } from 'react-icons/bs';


interface SettingsProps {
  darkMode: boolean;
  isSidebarCollapsed: boolean;
}

const Settings: React.FC<SettingsProps> = ({ darkMode, isSidebarCollapsed }) => {
  const settingsClass = `settings-container ${darkMode ? 'dark' : 'light'} ${isSidebarCollapsed ? 'collapsed' : 'expanded'}`;

  const [avatar, setAvatar] = useState<string>(avatarDefault);
  const [cover] = useState<string>(coverDefault);
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const reader = new FileReader();
      reader.onloadend = () => setAvatar(reader.result as string);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handlePasswordChange = (field: string, value: string) => {
    setPasswords(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password update submitted:', passwords);
  };

  return (
    <div className={settingsClass}>
      <div className="settings-content">
        {/* Cover Image Banner */}
        <div className="settings-cover">
          <img className="cover-img" src={cover} alt="Cover" />
        </div>

        {/* Profile Card */}
        <div className="settings-profile-section">
          <div className="avatar-column">
            <img className="profile-avatar" src={avatar} alt="User avatar" />
            <label className="avatar-upload-btn">
              Change Avatar
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleAvatarChange} 
                style={{ display: 'none' }}
              />
            </label>
          </div>
          <div className="user-info-column">
            <h3 className="profile-name">Mirudhubasini RC</h3>
            <span className="profile-role">Admin</span>
            <p className="profile-email">mirudhu@example.com</p>
          </div>
        </div>

        {/* Password Form */}
        <div className="settings-form-area">
          <h2 className="form-title">Update Password</h2>
          <form className="password-form" onSubmit={handleSubmit}>
            <label>
              Current Password
              <div className="input-with-icon">
                <BsLockFill className="input-icon-bootstrap" />
                <input 
                  type="password" 
                  value="********" 
                  readOnly 
                  aria-label="Current password (read-only)"
                />
              </div>
            </label>

            <label>
              New Password
              <input 
                type="password" 
                placeholder="Enter new password"
                value={passwords.new}
                onChange={(e) => handlePasswordChange('new', e.target.value)}
                required
                minLength={8}
                aria-label="New password"
              />
            </label>

            <label>
              Confirm New Password
              <input 
                type="password" 
                placeholder="Confirm new password"
                value={passwords.confirm}
                onChange={(e) => handlePasswordChange('confirm', e.target.value)}
                required
                minLength={8}
                aria-label="Confirm new password"
              />
            </label>

            <button type="submit">Save Password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;