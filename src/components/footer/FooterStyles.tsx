import styled from "styled-components";

const Footer = styled.footer`
    background-color: cornflowerblue;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Name = styled.span`
    letter-spacing: 3px;
`

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
    list-style: none;
`

const SocialItem = styled.li`
`
const SocialLink = styled.a`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
    cursor: pointer;
    transform: translateY(-4px);
`

const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
`

export const S = {
    Footer,
    Name,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright
}