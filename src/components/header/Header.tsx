import * as React from 'react';
import {S} from './HeaderStyles'
import {items, Menu} from "../Menu";

type Props = {};


export const Header = (props: Props) => {

    return (
        <S.Header >
            <p>A place where inspiration lives</p>
        <Menu items={items}/>
        </S.Header>
    );
};