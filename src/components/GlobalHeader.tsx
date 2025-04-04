import React from 'react';

interface GlobalHeaderProps {
    // props
}

const GlobalHeader: React.FC<GlobalHeaderProps> = ({ }) => {

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '1rem', cursor: 'pointer' }} onClick={() => { window.location.href = './' }}>张小刀的杂文</div>
        </div>
    );
}

export default GlobalHeader;
