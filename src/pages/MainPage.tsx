import React from 'react';
import styles from './MainPage.module.less'
import { Layout, Card } from 'antd';
import GlobalHeader from '../components/GlobalHeader'
import BlogList from '../components/BlogList'
import FloatingAssistant from '../components/FloatingAssistant/HuskyAssistant'

const { Header, Content, Sider } = Layout;

interface MainPageProps {
    // props
}

const MainPage: React.FC<MainPageProps> = ({ }) => {
    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <GlobalHeader />
            </Header>
            <Content>
                <div className={styles.brandContainer}>
                    <div className={styles.overlay}></div>
                    <div className={styles.brandText}>小刀需磨<br />方才不钝</div>
                </div>
                <div className={styles.blogListContainer}>
                    <BlogList />
                </div>
            </Content>
            <FloatingAssistant />
        </Layout>
    );
}

export default MainPage;
