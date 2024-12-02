import React from 'react';
import { ColorPicker } from 'antd';
import { useGlobalContext } from '../context/GlobalContext'

interface GlobalHeaderProps {
    // props
}

const GlobalHeader: React.FC<GlobalHeaderProps> = ({ }) => {
    const { colorTextBase, setColorTextBase } = useGlobalContext();

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ marginInlineStart: 24, fontSize: '1.5rem' }}>张小刀的杂文</div>
        </div>
    );
}

export default GlobalHeader;
