import React from 'react';
import styles from './MainPage.module.less'
import { Layout, Card } from 'antd';
import GlobalHeader from '../components/GlobalHeader'
import BlogList from '../components/BlogList'

const { Header, Content, Sider } = Layout;

interface MainPageProps {
    // props
}

const MainPage: React.FC<MainPageProps> = ({ }) => {
    return (
        <Layout className={styles.layout}>
            <Header className={styles.header}>
                <GlobalHeader />
            </Header>
            <Content className={styles.content}>
                <div className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>小刀需磨</h1>
                        <p className={styles.heroSubtitle}>方才不钝</p>
                    </div>
                </div>
                <div className={styles.blogListContainer}>
                    <BlogList />
                </div>
            </Content>
        </Layout>
    );
}

export default MainPage;
