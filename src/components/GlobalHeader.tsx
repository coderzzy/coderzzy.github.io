import React from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

interface GlobalHeaderProps {
    // props
}

const GlobalHeader: React.FC<GlobalHeaderProps> = ({ }) => {
    const navigate = useNavigate();

    const handleMenuClick = (e: { key: string }) => {
        if (e.key === 'about') {
            navigate('/personal-details');
        }
    };

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '1rem', cursor: 'pointer' }} onClick={() => { window.location.href = './' }}>张小刀的杂文</div>
            <Menu
                mode="horizontal"
                onClick={handleMenuClick}
            >
                <Menu.Item key="about">关于</Menu.Item>
            </Menu>
        </div>
    );
}

export default GlobalHeader;
