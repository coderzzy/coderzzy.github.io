import React from 'react';
import styles from './MainPage.module.less';
import { Layout } from 'antd';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import BlogList from '../components/BlogList';

const { Header, Content } = Layout;

interface MainPageProps {
    // props
}

const MainPage: React.FC<MainPageProps> = ({ }) => {
    return (
        <Layout className={styles.layout}>
            <Header>
                <GlobalHeader />
            </Header>
            <Content className={styles.content}>
                <div className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>小刀需磨</h1>
                        <p className={styles.heroSubtitle}>方才不钝</p>
                        <div className={styles.heroProfile}>
                            <img src="/images/avatar.jpg" alt="avatar" className={styles.avatar} />
                            <h2 className={styles.profileName}>张小刀</h2>
                            <div className={styles.socialLinks}>
                                <a href="https://github.com/coderzzy" target="_blank" className={styles.socialIcon}>
                                    <img src="/images/social_media/github.svg" alt="GitHub" />
                                </a>
                                <a href="https://www.zhihu.com/people/zhang-xiao-yu-41-25" target="_blank" className={styles.socialIcon}>
                                    <img src="/images/social_media/zhihu.svg" alt="ZhiHu" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.blogListContainer}>
                    <BlogList />
                </div>
            </Content>
            <GlobalFooter />
        </Layout>
    );
};

export default MainPage;
