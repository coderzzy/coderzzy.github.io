import React from 'react';
import styles from './MainPage.module.less'
import { Layout, Image } from 'antd';

const { Header, Content, Sider } = Layout;

interface MainPageProps {
    // props
}

const MainPage: React.FC<MainPageProps> = ({ }) => {
    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginInlineStart: 24, fontSize: 24 }}>张小刀的杂文</div>
            </Header>
            <Content>
                <div className={styles.background}>
                    
                </div>
            </Content>
        </Layout>
    );
}

export default MainPage;