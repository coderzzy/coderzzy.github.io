import React from 'react';
import { Layout, Row, Col, Image } from 'antd'; // 添加Image导入
import GlobalHeader from '../components/GlobalHeader';
import styles from './PersonalDetailsPage.module.less';

const { Header, Content } = Layout;

const PersonalDetailsPage: React.FC = () => {
    return (
        <Layout className={styles.layout}>
            <Header>
                <GlobalHeader/>
            </Header>
            <Content className={styles.content}>
                <Row gutter={[24, 24]} justify="center">
                    <Col xs={24} sm={20} md={18} lg={16}>
                        <div className={styles.card}>
                            <h1 className={styles.title}>个人详情</h1>
                            <h2 className={styles.name}>张小刀</h2>
                            <p className={styles.slogan}>Slogan: 小刀需磨，方才不钝</p>
                            <h3 className={styles.subtitle}>社交媒体账号</h3>
                            <ul className={styles.list}>
                                <li>
                                    <a href="https://github.com/coderzzy" target="_blank" className={styles.link}>
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.zhihu.com/people/zhang-xiao-yu-41-25" target="_blank" className={styles.link}>
                                        知乎
                                    </a>
                                </li>
                                {/* 修改微信公众号二维码部分 */}
                                <li className={styles.socialMediaItem}>
                                    <span className={styles.socialMediaText}>微信公众号：</span>
                                    <Image
                                        width={100}
                                        src="/social_media/wechat_official_account.png"
                                        alt="微信公众号二维码"
                                        className={styles.socialMediaQrCode}
                                    />
                                </li>
                                
                                {/* 修改小红书二维码部分 */} 
                                <li className={styles.socialMediaItem}>
                                    <span className={styles.socialMediaText}>小红书号：</span>
                                    <Image
                                        width={100}
                                        src="/social_media/rednote_account.jpg"
                                        alt="小红书二维码"
                                        className={styles.socialMediaQrCode}
                                    />
                                </li>
                            </ul>
                            <h3 className={styles.subtitle}>独立开发者项目</h3>
                            <ul className={styles.list}>
                                <li className={styles.projectItem}>飞书多维表格插件</li>
                                <li className={styles.projectItem}>Chrome浏览器插件</li>
                                <li className={styles.projectItem}>微信小程序</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default PersonalDetailsPage;
