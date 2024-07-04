import * as React from 'react';
import {S} from './FooterStyles'
import {Icon} from "../Icon";

const footerIconsArray = [
    {
        iconId: 'instagram',
        href: 'instagram.com/chatkapl',
        viewBox: '0 0 35 25'
    },
    {
        iconId: 'whatsapp',
        href: 'whatsapp/chatkapl',
        viewBox: '0 0 30 32'
    },
    {
        iconId: 'youtube',
        href: 'youtube.com/chatkapl',
        viewBox: '0 0 34 38'
    },
]
export const Footer = () => {
    return (
        <S.Footer>
            <S.Name>Olga Patapchuk</S.Name>
            <S.SocialList>
                {footerIconsArray.map((i, index) => {
                    return (
                        <S.SocialItem key={index}>
                            <S.SocialLink
                                href={i.href}
                                target={"_blank"}>
                                <Icon
                                    viewBox={i.viewBox}
                                    iconId={i.iconId}/>
                            </S.SocialLink>

                        </S.SocialItem>
                    )
                })}
            </S.SocialList>
        </S.Footer>
    );
};