import React from 'react';
// import {S} from '../Header_Styles';
import styled from "styled-components";

type PropsMenu = {
    items: {
        id: number,
        title: string,
        href: string
    }[]
}
const List = styled.ul`
    list-style: none;
    border: 2px solid red;
    display: flex;
    justify-content: flex-end;
    gap: 5px;
`
const ListItem = styled.li`
    gap: 5px;
    display: flex;
`
export const items = [
    {
        id: 1,
        title: "Register now",
        href: "registration"
    },
    {
        id: 2,
        title: "Video library",
        href: "video"
    },
    {
        id: 3,
        title: "Gallery",
        href: "gallery"
    },
    {
        id: 4,
        title: "News",
        href: "news"
    },
    {
        id: 5,
        title: "Shop",
        href: "shop"
    },
    {
        id: 6,
        title: "About us",
        href: "about"
    },
    {
        id: 7,
        title: "Contact",
        href: "contact"
    }]
export const Menu: React.FC<PropsMenu> = ({items}) => {

        return (
            <div>
                <List>
                    {items.map(item => (
                        <ListItem key={item.id}>
                            <a href={item.href}>{item.title}</a>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
;