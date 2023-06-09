import React,{useRef} from 'react';
import styled from 'styled-components';

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 1rem 0rem;
    background : ${({color}) => (color)};
`;

const Container = styled.div`
    padding: 1rem calc((100vw - 1200px) / 2);
    display: grid;

    grid-template-columns: 1fr 1fr;
    grid-template-rows: 750px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-itmes: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '2' : '1')};

    h1{
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p{
        margin-bottom: 1rem;
    }
`;

const ColumnRight = styled.div`
    padding: 1rem 2rem;
    display:flex;
    justify-content: center;
    align-items: center;
    order: ${({reverse}) => (reverse ? '1' : '2')};

    @media screen and (max-width: 768px) {
        order: ${({reverse}) => (reverse ? '2' : '1')};
    }

    @media screen and (max-width: 768px) {
        img {
        width: 90%;
        height: 90%;
        }
    }
`;

const InfoSection = ({
    id,
    heading,
    paragraphOne, 
    image,
    reverse,
    color,
    }) => {
    let myRef = useRef();
    window.scrollTo({ behavior: 'smooth', top: myRef.current});
    return (
        <Section color= {color} className = {id} ref={myRef}>
            <Container>
                <ColumnLeft reverse = {reverse}>
                <h1>{heading}</h1>
                <p>{paragraphOne}</p>
                </ColumnLeft>
                <ColumnRight reverse= {reverse}>
                <img src = {image} alt="" />
                </ColumnRight>
            </Container>
        </Section>
    );
}

export default InfoSection;
