import { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
position: fixed;
z-index: 1;
left: 0;
width: 100%;
height: 100%;
overflow: auto;
background-color = rgba(0, 0, 0, 0.5); 
`;
const ModalBody = styled.div`
background-color = white;
width: 50%;
padding: 20px;
margin: 10% auto;
`;

export const Modal = ({children}) => {
    const [shouldShow, setShouldShow] = useState(false);

    return(
        <>
        <button onClick={() => setShouldShow(true)}> Show Modal</button>
        {shouldShow && (
        <ModalBackground onClick={() => setShouldShow(false)}>

            {/* to avoid close the modal we need to add e.stopProp... */}
            <ModalBody onClick={e => e.stopPropagation()}>
            <button onClick={() => setShouldShow(false)}>Hide Modal</button>
                {children}
            </ModalBody>
        </ModalBackground>
    )}
    </>
    )
}