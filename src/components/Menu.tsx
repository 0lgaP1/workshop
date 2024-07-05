import React from 'react';
import styled from "styled-components";
// import scheduleImg from '.././components/assets/images/schedule.jpg';
// import marketsImg from '.././components/assets/images/markets.jpg';
// import galleryImg from '.././components/assets/images/gallery.jpg';
// import testimonialsImg from '.././components/assets/images/testimonials.jpg';
// import shopImg from '.././components/assets/images/shop.jpg';
// import aboutImg from '.././components/assets/images/about.jpg';
// import contactsImg from '.././components/assets/images/contacts.jpg';

type PropsMenu = {
    items: {
        id: number,
        title: string,
        href: string,
        imgSrc?: string,
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
        // imgSrc: scheduleImg
    },
    {
        id: 2,
        title: "Markets",
        href: "markets",
        // imgSrc: marketsImg
    },
    {
        id: 3,
        title: "Gallery",
        href: "gallery",
        // imgSrc: galleryImg
    },
    {
        id: 4,
        title: "Testimony",
        href: "about",
        // imgSrc: testimonialsImg
    },
    {
        id: 5,
        title: "Shop",
        href: "shop",
        // imgSrc: shopImg
    },
    {
        id: 6,
        title: "About us",
        href: "about",
        // imgSrc: aboutImg
    },
    {
        id: 7,
        title: "Contact",
        href: "contact",
        // imgSrc: contactsImg
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