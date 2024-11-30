import React from 'react';
import styles from './MainPage.module.less'
import { Layout, Card } from 'antd';
import BlogList from '../components/BlogList'

const { Header, Content, Sider } = Layout;

interface MainPageProps {
    // props
}

const MainPage: React.FC<MainPageProps> = ({ }) => {
    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginInlineStart: 24, fontSize: '1.5rem' }}>张小刀的杂文</div>
            </Header>
            <Content>
                <div className={styles.brandContainer}>
                    <div className={styles.overlay}></div>
                    <div className={styles.brandText}>小刀需磨<br />方才不钝</div>
                </div>
                {/* <div className={styles.profileContainer}>
                    <Card style={{ marginTop: 10, width: 300, borderRadius: 10, backgroundColor: 'white', color: 'black' }}>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p>1111</p>
                        </div>
                    </Card>
                </div> */}
                <div className={styles.blogListContainer}>
                    <BlogList />
                </div>
            </Content>
        </Layout>
    );
}

export default MainPage;
