import React from 'react';

import whatsappIcon from '../../assests/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (

        <article className="teacher-item">
            <header>
                <img src="https://pbs.twimg.com/profile_images/950150931/OQAAAEfCZCPN8qr1SPwJ81Ffp28WL56qyjjSdwjHkDALhZDl7kJE_e9Hsls0E0eIp9Q3_e3xbqMZ1Npk1N8XNYddgJsAm1T1UKayV4nrOj3VGh8ezS1g4UI-dli3_normal.jpg" alt="Michael Rocha Leles"/>
                <div>
                    <strong>Michael Rocha Leles</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta dos melhores tecnologias de química avançada. Que vai mudar a sua vida.
                <br />
                <br />
                Apaixonado por explodir as coisas.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsAppMichael"/>
                    Entrar em contato.
                </button>
            </footer>
        </article>

    );
}

export default TeacherItem;

