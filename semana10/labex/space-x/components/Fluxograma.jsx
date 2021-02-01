import React from 'react'   
import './fluxograma.css'



export default function Fluxograma() {
    return (
        <div id="container">
            <div id="header">
                <div id="header1"><p>logo <b> Space-X</b></p> </div>
                <div id="header1"><p><b><i>Component </i></b> Header</p></div>
                <div id="header1"><p><b><i>Button</i></b> de login</p></div>
            </div>

            <div id="slider">
                <div id="slider1"><p><b><i>Component </i> </b>slider</p></div>
                <div id="slider1"><p>Background com imagem ilustrativa</p></div>
                <div id="slider1"><p><b><i>Button</i></b> com dizeres "Saiba Mais" que redirecionarão para uma single-page</p></div>
            </div>

            <div id="adv1">
                <p><b><i>Component </i></b> separador.  (Para inserir frase de chamada) </p> {'\n'}
                
            </div>

            <div id="slider2">
                <div id="slider1"><p><b><i>Component </i> </b>slider</p></div>
                <div id="slider1"><p>Background com imagem ilustrativa</p></div>
                <div id="slider1"><p><b><i>Button</i></b> com dizeres "Saiba Mais" que redirecionarão para uma single-page</p></div>
            </div>
            <div id="slider3">
                <div id="slider-medio">
                <div id="slider1"><p><b><i>Component </i> </b>slider2</p></div>
                <div id="slider1"><p>Background com imagem ilustrativa</p></div>
                <div id="slider1"><p><b><i>Button</i></b> "Saiba Mais" redireciona p/ single-page</p></div>
                </div>

                <div id="slider-medio">
                    <div id="slider1"><p><b><i>Component </i> </b>slider2</p></div>
                    <div id="slider1"><p>Background com imagem ilustrativa</p></div>
                    <div id="slider1"><p><b><i>Button</i></b> "Saiba Mais" redireciona p/ single-page</p></div>
                </div>
            </div>
            
            <div id="footer">
            <p><b><i>Component </i> </b>footer</p>
            </div>
    </div>
    )
}