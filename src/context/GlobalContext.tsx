import React, { createContext, useState, useContext, ReactNode } from 'react';

// 创建 Context 
const GlobalContext = createContext<any>(null);

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
};

// 创建 Provider 组件
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
    // 定义全局状态变量
    const [colorTextBase, setColorTextBase] = useState('#ffffff');

    return (
        <GlobalContext.Provider value={{
            colorTextBase, setColorTextBase
        }}>
            {children}
        </GlobalContext.Provider>
    );
};