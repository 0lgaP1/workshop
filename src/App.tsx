import './App.css';
import styled from 'styled-components';
import {Header} from "./components/Header";
import {Menu} from "./components/Menu";
import {items} from "./components/Menu";
import {Footer} from "./components/footer/Footer";


function App() {
    return (
        <div className="App">
            <StartPage>Welcome to my shop</StartPage>
            <Header/>
            <Menu items={items}/>
            <Footer/>
        </div>
    );
}

export default App;

const StartPage = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #a1b433;
`;