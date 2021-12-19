import React  from 'react';
import './App.css';
import DialogContainer from './components/DialogContainer';
import { dialog } from './services/dialog.service';
import Test from './components/test';

function App() {
    const openDialog = () => {
        dialog.open(<Test/>, {data: 'Test Data'}).afterClosed.subscribe(res => console.log(res))
    }

    return (
        <>
            <DialogContainer/>
            <div className="App">
                <button onClick={openDialog}>Open</button>
            </div>
        </>

    );
}

export default App;
