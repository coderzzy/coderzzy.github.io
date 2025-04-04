import React from 'react';
import { Layout, Row, Col, Image, Card, Divider, List, Tooltip } from 'antd';
import { GithubOutlined, ZhihuOutlined, WechatOutlined, RedEnvelopeOutlined } from '@ant-design/icons';
import GlobalHeader from '../components/GlobalHeader';
import styles from './PersonalDetailsPage.module.less';

const { Header, Content } = Layout;

const PersonalDetailsPage: React.FC = () => {
    return (
        <Layout className={styles.layout}>
            <Header>
                <GlobalHeader />
            </Header>
            <Content className={styles.content}>
                <Row gutter={[24, 24]} justify="center">
                    <Col xs={24} sm={20} md={18} lg={16}>
                        <Card className={styles.card}>
                            <h1 className={styles.title}>个人详情</h1>
                            <h2 className={styles.name}>张小刀</h2>
                            <p className={styles.slogan}>Slogan: 小刀需磨，方才不钝</p>
                            <Divider />
                            <h3 className={styles.subtitle}>社交媒体账号</h3>
                            <ul className={styles.list}>
                                <li>
                                    <a href="https://github.com/coderzzy" target="_blank" className={styles.link}>
                                        <GithubOutlined /> Github
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.zhihu.com/people/zhang-xiao-yu-41-25" target="_blank" className={styles.link}>
                                        <ZhihuOutlined /> 知乎
                                    </a>
                                </li>
                                <li className={styles.socialMediaItem}>
                                    <span className={styles.socialMediaText}>
                                        <WechatOutlined /> 微信公众号：
                                    </span>
                                    <Image
                                        width={100}
                                        src="/social_media/wechat_official_account.png"
                                        alt="微信公众号二维码"
                                        className={styles.socialMediaQrCode}
                                    />
                                </li>
                                <li className={styles.socialMediaItem}>
                                    <span className={styles.socialMediaText}>
                                        <RedEnvelopeOutlined /> 小红书号：
                                    </span>
                                    <Image
                                        width={100}
                                        src="/social_media/rednote_account.jpg"
                                        alt="小红书二维码"
                                        className={styles.socialMediaQrCode}
                                    />
                                </li>
                            </ul>
                            <Divider />
                            <h3 className={styles.subtitle}>独立开发者项目</h3>
                            <List
                                dataSource={[
                                    {
                                        title: '飞书多维表格插件 - 分账计算',
                                        link: 'https://v0j3dbddef2.feishu.cn/base/extension/replit_3d519d1a976ee3e5',
                                        description: '基于借贷记账法实现的分账功能，可自动计算多人AA制消费后的最优转账方案'
                                    },
                                    {
                                        title: 'Chrome浏览器插件 - 拼音小助手',
                                        link: 'https://chromewebstore.google.com/detail/hmojmlnloknlieigobgihcbjbflmfmli?utm_source=item-share-cb',
                                        description: '帮助用户快速查询汉字拼音的浏览器插件'
                                    },
                                    {
                                        title: 'Chrome浏览器插件 - 打工人小助手',
                                        link: 'https://chromewebstore.google.com/detail/elhofejeghpaedmaheibfaenfgbbjddl?utm_source=item-share-cb',
                                        description: '帮助用户快速查询工作状态的浏览器插件'
                                    }
                                ]}
                                renderItem={(item) => (
                                    <List.Item>
                                        <div>
                                            <Tooltip title={item.description}>
                                                <span>{item.title}</span>
                                            </Tooltip>
                                            <a 
                                                href={item.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className={styles.link}
                                                style={{ fontSize: '0.9em' }} // 临时使用内联样式调小字体
                                            >
                                                (插件链接)
                                            </a>
                                            <p className={styles.projectDesc}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default PersonalDetailsPage;
