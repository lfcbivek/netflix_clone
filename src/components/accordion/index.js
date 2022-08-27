import React, {createContext, useState, useContext} from "react";
import { Containe, Frame, Item, Header, Title, Inner, Body } from './styles/accordion';

const ToggleContext = createContext();
export default function Accordion({children, ...restProps}) {
    return(
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
}

Accordion.Title = function AccordionTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionTitle({children, ...restProps}) {
    const [toggleShow, setToggleShow] = useState(false);
    return (
       <ToogleContext.Provider value = {{ toggleShow, setToggleShow }}>
           <Item {...restProps}>{children}</Item>;
        </ToogleContext.Provider>
    )
};

Accordion.Header  = function AccordionHeader({children, ...restProps}) {
    const { toggleShow, setToggleShow } = useContext(ToggleContext);
    return( 
        <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)} 
            {...restProps}
        >
            
            {children}
        </Header>
    );
};

Accordion.Body  = function AccordionBody({children, ...restProps}) {
    const { toggleShow } = useContext(ToggleContext);

    return toggleShow ? <Body {...restProps}> {children} </Body> : null;
};