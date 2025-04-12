import React from 'react';
import styles from './GlobalFooter.module.less';

const GlobalFooter: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2025 张小刀. </p>
            <p>本项目借助 <a href="https://www.trae.com.cn" target="_blank" rel="noopener noreferrer">Trae AI Coding</a> 助力生成。</p>
            <p>如需联系作者，请发送邮件至 <a href="mailto:zyzhang_dev@163.com">zyzhang_dev@163.com</a>。</p>
        </footer>
    );
};

export default GlobalFooter;