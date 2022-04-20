import React, {useRef, useEffect} from "react";


const SlideShow = () =>{
    const slideShow = useRef(null);
    const intervaloSlideShow = useRef(null);

    useEffect(()=>{
        intervaloSlideShow.current = setInterval(()=>{
            moverDerecha();
        },5000);
      
        // slideShow.current.addEventListener('mouseenter',()=>{
        //     clearInterval(intervaloSlideShow.current);
        // })
        // //Volver a mover el Calesita
        // slideShow.current.addEventListener('mouseleave',()=>{
        //     intervaloSlideShow.current = setInterval(()=>{
        //         moverDerecha();
        //     },10000);
        // })
    },[])

  
    const moverDerecha = ()=>{
        if(slideShow.current!==undefined)
            if(slideShow.current.children.length>0){
            //console.log(slideShow.current);
            
            //Consigo la primer imagen
            const primerElemento = slideShow.current.children[0];
            
            //Mover el calesita ->
            slideShow.current.style.transition = '3000ms ease-out all';
            //Consigo el ancho de la imagen
            const ancho = slideShow.current.children[0].offsetWidth
            //Mover carousel
            slideShow.current.style.transform = 'translateX(-' + ancho + 'px)';
            //Elevento para la transicion del elemento
            const transicion = () => {
                slideShow.current.style.transition= 'none';
                slideShow.current.style.transform= 'translateX(0)';
                slideShow.current.appendChild(primerElemento);
                //Se remueve el evento del "slide" para que no mueva de nuevo
                slideShow.current.removeEventListener('transitionend',transicion)
            }
           //Se añade un evento al "slide" para mover el elemento mostrado al final
            slideShow.current.addEventListener('transitionend',transicion);
        }
    }
    
    const moverIzquierda = ()=>{
        if(slideShow.current.children.length>0){
            const indiceUltimoElemento = slideShow.current.children.length -1;
            const ultimoElemento = slideShow.current.children[indiceUltimoElemento];
            slideShow.current.insertBefore(ultimoElemento,slideShow.current.firstChild);


            slideShow.current.style.transition= 'none';
            const ancho = slideShow.current.children[indiceUltimoElemento].offsetWidth;

            slideShow.current.style.transform = 'translateX(-' + ancho + 'px)';

            setTimeout(()=>{
                slideShow.current.style.transition = '3000ms ease-out all';
                slideShow.current.style.transform = 'translateX(0)';
            }, 30)
           
        }
    }
    
    return (
        <div className="ContenedorSlicePrincipal">
            <div className="ContenedorSlideShow" ref={slideShow}>
                    <div className="Slide">
                        <img src="https://wallpapercave.com/wp/wp2273275.jpg" />
                        {/* <div className="TextoSlide">
                            <p >Imagen 3</p>
                        </div> */}
                    </div>
                    <div className="Slide">
                        <img src="https://wallpaperaccess.com/full/1971600.jpg" />
                        {/* <div className="TextoSlide">
                            <p >Imagen 3</p>
                        </div> */}
                    </div>
                    <div className="Slide">
                        <img src="https://images5.alphacoders.com/402/thumb-1920-402217.jpg" />
                        {/* <div className="TextoSlide">
                            <p>Imagen 2</p>
                        </div> */}
                    </div>
                    <div className="Slide">
                        <img src="https://wallpaperaccess.com/full/2528387.jpg" />
                        {/* <div className="TextoSlide">
                            <p >Imagen 3</p>
                        </div> */}
                    </div>
                    <div className="Slide">
                        <img src="https://images8.alphacoders.com/636/636629.jpg" />
                        {/* <div className="TextoSlide">
                            <Jimi />
                        </div> */}
                    </div>
                    <div className="Slide">
                        <img src="https://images.alphacoders.com/308/thumb-1920-308783.jpg" />
                        {/* <div className="TextoSlide">
                            <Jimi />
                        </div> */}
                    </div>
                    
            </div>
                {/* <div className="ControlesSlice" >
                    <button className="BotonSliceIzquierda" onClick={moverIzquierda}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                         <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                         </svg>
                    </button> 

                    <button className="BotonSliceDerecho" onClick={moverDerecha}>
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                         <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                         </svg>
                    </button> 
                </div> */}
            
        </div>
    )

}

export default SlideShow;