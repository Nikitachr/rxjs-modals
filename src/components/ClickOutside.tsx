import React, { FC, useRef } from 'react';
import useOnClickOutside from '../hooks/use-click-outside';

const ClickOutside: FC<{clickOutside: () => void}> = ({children, clickOutside}) => {
    const ref = useRef(null);
    const handleClickOutside = () => {
        clickOutside();
    }
    useOnClickOutside(ref, handleClickOutside)
    return (
        <div ref={ref}>
            {children}
        </div>
    );
};

export default ClickOutside;
