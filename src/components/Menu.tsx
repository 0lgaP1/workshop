import React from 'react';
import styled from "styled-components";

type PropsMenu = {
    items: {
        id: number,
        title: string,
        href: string,
        imgSrc: string,
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
        title: "Workshop schedule",
        href: "registration",
        imgSrc: "../assets/schedule.jpg"
    },
    {
        id: 2,
        title: "Markets",
        href: "markets",
        imgSrc: "../assets/markets.jpg"
    },
    {
        id: 3,
        title: "Gallery",
        href: "gallery",
        imgSrc: "../assets/schedule.jpg"
    },
    {
        id: 4,
        title: "Testimony",
        href: "about",
        imgSrc: "../assets/testimonials.jpg"
    },
    {
        id: 5,
        title: "Shop",
        href: "shop",
        imgSrc: "../assets/schedule.jpg"
    },
    {
        id: 6,
        title: "About us",
        href: "about",
        imgSrc: "../assets/schedule.jpg"
    },
    {
        id: 7,
        title: "Contact",
        href: "contact",
        imgSrc: "../assets/contacts.jpg"
    }]
export const Menu: React.FC<PropsMenu> = ({items}) => {

        return (
            <div>
                <List>
                    {items.map(item => (
                        <ListItem key={item.id}>
                            <a href={item.href}>
                                <img src={item.imgSrc} alt={item.title}/>
                                {item.title}</a>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
;