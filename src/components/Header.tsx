import * as React from 'react';

type Props = {};


export const Header = (props: Props) => {
    const headerInlineStyles: React.CSSProperties = {
        border: '2px solid red',
        textAlign: 'end',
    }

    return (
        <div style={headerInlineStyles}>
            A place where inspiration lives
        </div>
    );
};