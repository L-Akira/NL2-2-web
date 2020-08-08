import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeatcherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://styles.redditmedia.com/t5_2ftab4/styles/profileIcon_mhr08gwl2gd51.jpg?width=256&height=256&crop=256:256,smart&s=fb51915b7271c95a3096e34f1db34377970c8940" alt="Leonardo"/>
                <div>
                    <strong>Frederica</strong>
                    <span>Psicologia</span>
                </div>
            </header>

            <p>blablablablalbalblalbllal</p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeatcherItem;