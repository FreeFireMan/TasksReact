import Result from "./components/Result";

export default function App() {
    //todo ми маємо масив кнопок, маємо передати у компонету батонс і там відмалювати їх
    const btns = [1,-1,100,-100]
    return (
        <div className='app-box'>
            <Result/>
            //todo тут мають бути компонети батонс і інпут
        </div>
    );
}
















