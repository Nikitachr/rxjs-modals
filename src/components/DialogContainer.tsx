import React, { FC } from 'react';
import useObservable from '../hooks/use-observable';
import { dialog, TDialog } from '../services/dialog.service';
import ClickOutside from '../components/ClickOutside';

export const DialogContext = React.createContext<Pick<TDialog, 'context'> | null>(null)

const DialogContainer: FC = () => {
    const popup = useObservable<TDialog | null>(dialog.showComponent$$.asObservable())

    return (
        <div style={{position: 'fixed'}}>
            {popup &&
                <div style={{
                    position: 'fixed',
                    background: 'rgba(0, 0, 0, 0.2)',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <DialogContext.Provider value={popup.context as unknown as Pick<TDialog, 'context'>}>
                        <ClickOutside clickOutside={() => popup.context.close(null)}>
                            {popup.component}
                        </ClickOutside>
                    </DialogContext.Provider>
                </div>
            }
        </div>
    );
};

export default DialogContainer;

