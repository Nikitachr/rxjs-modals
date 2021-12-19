import React, { useContext } from 'react';
import { DialogContext } from '../components/DialogContainer';

const Test = () => {
    const dialogContext = useContext<any>(DialogContext)

    const handleClick = () => {
      dialogContext.close('close');
    }

    return (
        <div style={{ padding: '20px', backgroundColor: 'antiquewhite' }}>
            Test
            {dialogContext?.data && <p>{dialogContext.data}</p>}
            <button onClick={handleClick}>Close</button>
        </div>
    );
};

export default Test;
