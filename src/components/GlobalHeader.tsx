import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Menu, Button, Dropdown } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { useGlobalContext } from '../context/GlobalContext'

type MenuItem = Required<MenuProps>['items'][number];

interface GlobalHeaderProps {
    // props
}

const GlobalHeader: React.FC<GlobalHeaderProps> = ({ }) => {
    const items: MenuItem[] = [
        {
            key: 'tools',
            label: (
                <div onClick={() => navigate('/tools')}>
                    小工具
                </div>
            ),
        }
    ];

    const { colorTextBase, setColorTextBase } = useGlobalContext();
    const [windowWidth, setWindowWidth] = useState(0);
    const [currentMenuKey, setCurrentMenuKey] = useState(items[0]?.key);
    const [menuCollapsed, setMenuCollapsed] = useState(false);

    const navigate = useNavigate();

    // 监听窗口大小变化
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // 组件加载时和窗口变化时都触发
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggedMenuCollapsed = () => {
        setMenuCollapsed(!menuCollapsed);
    };

    const onMenuClick: MenuProps['onClick'] = (e) => {
        setCurrentMenuKey(e.key);
    };

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '1rem', cursor: 'pointer' }} onClick={() => { window.location.href = './' }}>张小刀的杂文</div>
            <div>
                {
                    windowWidth > 480
                        ? (<Menu onClick={onMenuClick} theme='dark' selectedKeys={[currentMenuKey as string]} mode="horizontal" items={items} />)
                        : (
                            <div>
                                <Dropdown menu={{ items }}>
                                    <Button type="primary" onClick={toggedMenuCollapsed} style={{ marginBottom: 16 }}>
                                        {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                    </Button>
                                </Dropdown>
                            </div>
                        )
                }
            </div>
        </div>
    );
}

export default GlobalHeader;
