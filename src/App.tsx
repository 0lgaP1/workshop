import './App.css';
import styled from 'styled-components';
import {Header} from "./components/Header";
import {Menu} from "./components/Menu";
import {items} from "./components/Menu";


function App() {
    return (
        <div className="App">
            <Title>Welcome to my shop</Title>
            <Header/>
            <Menu items={items}/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #a1b433;
`;