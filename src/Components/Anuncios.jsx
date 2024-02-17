import React from 'react';
import { useRef ,useEffect} from 'react';
import img1 from './../img/1.png';
import img2 from './../img/2.png';
import img3 from './../img/3.png';
import img4 from './../img/4.png';
import styled from 'styled-components';

const Anuncios = () => {
    const slideshow = useRef(null);

    const siguiente = ()=>{
        if(slideshow.current.children.length > 0){
            
            const primerElemento = slideshow.current.children[0];
            slideshow.current.style.transition = `800ms ease-out all`;

            const tamanoSlide = slideshow.current.children[0].offsetWidth;


            slideshow.current.style.transform = `translateX(-${tamanoSlide}px)`;

            const transicion = ()=>{
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;

                slideshow.current.appendChild(primerElemento);
                slideshow.current.removeEventListener('transitionend', transicion);
            }

            slideshow.current.addEventListener('transitionend',transicion);
        }
    };
    
    const anterior = ()=>{
        if(slideshow.current.children.length > 0){
            const index = slideshow.current.children.length - 1 ;
            const ultimoElemento = slideshow.current.children[index];
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
            slideshow.current.style.transition = `none`;

            const tamanoSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${tamanoSlide}px)`;

            setTimeout(()=>{
                slideshow.current.style.transition = `800ms ease-out all`;
                slideshow.current.style.transform = `translateX(0)`;
            },30)
        }
    };

    useEffect(()=>{
        setInterval(()=>{
            siguiente();
        },4000);
    },[])

    return ( 
      <ContenedorPrincipal>
        <ContenedorSlideShow ref={slideshow}>
            <Slide>
                    <img src={img1} alt="" />
            </Slide>
            <Slide>
                    <img src={img2} alt="" />
            </Slide>
            <Slide>
                    <img src={img3} alt="" />
            </Slide>
            <Slide>
                    <img src={img4} alt="" />
            </Slide>
        </ContenedorSlideShow>
        <Controles>
            <Boton onClick={anterior}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
            </Boton>
            <Boton $derecho={true} onClick={siguiente}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
            </Boton>
        </Controles>
      </ContenedorPrincipal>
     );
}

const ContenedorPrincipal = styled.div`
    position: relative;
`;

const ContenedorSlideShow = styled.div`
    display: flex;
    flex-wrap: nowrap;

`;

const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: all.3s ease all;
    z-index: 10;
    max-height: 43.25rem;
    position: relative;

    img {
        width: 100%;
        vertical-align: top;
    }
`;

const Controles = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    pointer-events: none;
`;

const Boton = styled.button`
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 3.125rem;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: .3s ease all;
    &:hover{
        background: rgba(0,0,0,.2);
        path{
            fill: #ffffff
        }
    }

    ${props => props.$derecho ? 'right: 0': 'left:0'}

`;
export default Anuncios;