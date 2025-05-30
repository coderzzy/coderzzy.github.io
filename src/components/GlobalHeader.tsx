import { Menu } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './GlobalHeader.module.less';

interface GlobalHeaderProps {
    // props
}

const GlobalHeader: React.FC<GlobalHeaderProps> = ({ }) => {
    const navigate = useNavigate();

    const handleMenuClick = (e: { key: string }) => {
        if (e.key === 'about') {
            navigate('/personal-details');
        }
        if (e.key === 'knowledge') {
            navigate('/knowledge');
        }
    };

    return (
        <div className={styles.header}>
            <div style={{ fontSize: '1rem', cursor: 'pointer' }} onClick={() => { window.location.href = './' }}>张小刀的博客</div>
            <Menu
                mode="horizontal"
                onClick={handleMenuClick}
            >
                <Menu.Item key="knowledge">知识库</Menu.Item>
                <Menu.Item key="about">关于</Menu.Item>
            </Menu>
        </div>
    );
}

export default GlobalHeader;
