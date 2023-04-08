import React from 'react';
import "./SectionArea.css";
import sectionimage1 from './Image/sectionimage1.jpg';
import sectionimage2 from './Image/sectionimage2.jpg';
import sectionimage3 from './Image/sectionimage3.jpg';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import profimage from './Image/profimage.jpg';
import chef from './Image/chef.jpg';
import hotcake from './Image/hotcake.jpg';
import pizza from './Image/pizza.jpg';
import continental from './Image/continental.jpg';
import sushi from './Image/sushi.jpg';
import hotcake2 from './Image/hotcake2.jpg';
import pizza2 from './Image/pizza2.jpg';
import dona from './Image/dona.jpg';
import rosa from './Image/rosa.jpg';
import pasta from './Image/pasta.jpg';
import orange from './Image/orange.jpg';
import foodimage from './Image/foodimage.jpg';
import { IoPizzaOutline} from "react-icons/io5";
import { GiNoodles } from "react-icons/gi";
import { CiBurger } from "react-icons/ci";
import { CiBowlNoodles } from "react-icons/ci";
import { GiFruitBowl } from "react-icons/gi";
import { GiCupcake } from "react-icons/gi";
import { BiMap} from "react-icons/bi";




const SectionArea = () => {
  return (
    <div>
      <div className='Section-Area-1'>
        <div className='Details'>
            <h3 className='De-tu'>
            De tu fonda favorita
            </h3>
            <h2 div className='La-comida'>
            La comida que <br/>ya conoces al mejor precio
            </h2>
            <div className='Input-button'>
                <input type='text' className='section-details' placeholder='Busca tu platillo favorito'/>
                <button>Buscar</button>
            </div>
            <div className='social-icons'>
                <div className='facebook'>
                    <FaFacebook className='fa-icon'/>
                </div>
                <div className='twitter'>
                    <FaTwitter className='twit-icon' />
                </div>
                <div className='instagram'>
                    <FaInstagram className='insta-icon'/>
                </div>
            </div>
        </div>
        <div className='Image-section'>
            <img src={sectionimage1} className='Section-image1'/>
            <img src={sectionimage2} className='Section-image2'/>
            <img src={sectionimage3} className='Section-image3'/>
        </div>
      </div>
      <div className='Section-Area-2'>
        <h5 className='Categorías'>
            Categorías
        </h5>
        <h5 className='Las-favoritas'>
            Las favoritas
        </h5>
        <div className='food-box'>
            <div className='categries-box'>
                <div className='food-icon'>
                 <IoPizzaOutline className='foodicon'/>
                </div>
                <div className='food-name'>
                    <h6>Pizza</h6>
                    <p>Desde $60</p>
                </div>
            </div>
            <div className='categries-box'>
                <div className='food-icon'>
                    <GiCupcake className='foodicon' />
                </div>
                <div className='food-name'>
                    <h6>Postres</h6>
                    <p>Desde $50</p>
                </div>
            </div>
            <div className='categries-box'>
                <div className='food-icon'>
                <GiNoodles className='foodicon' />
                </div>
                <div className='food-name'>
                    <h6>Sushi</h6>
                    <p>Desde $50</p>
                </div>
            </div>
            <div className='categries-box'>
                <div className='food-icon'>
                    <CiBurger className='foodicon' />
                </div>
                <div className='food-name'>
                <h6>Hamburguesas</h6>
                    <p>Desde $50</p>
                </div>
            </div>
            <div className='categries-box'>
                <div className='food-icon'>
                    <GiFruitBowl className='foodicon'/>
                </div>
                <div className='food-name'>
                    <h6>Veggie</h6>
                    <p>Desde $50</p>
                </div>
            </div>
            <div className='categries-box'>
                <div className='food-icon'>
                    <CiBowlNoodles className='foodicon'/>
                </div>
                <div className='food-name'>
                <h6>Sopas </h6>
                    <p>Desde $50</p>
                </div>
            </div>
        </div>
      </div>
      <div className='Section-Area-3'>
        <h5 className='Fonditas'>
            Fonditas
        </h5>
        <h5 className='Fondas-cercanas'>
            Fondas cercanas
        </h5>
        <p className='Estás-son'>
        ‘Estás son las fondas que se encuentran cerca!
        </p>
        <div className='Fondas-contanier'>
            <div className='Fondas-box'>
                <div className='Fondas-image'>
                <img src={dona} className='dona'/>
                </div>
                <div className='Fondasfood-details'>
                    <h4>Doña Laura</h4>
                    <h6>20-30 min</h6> <span>Fonditas</span>
                </div>
            </div>
            <div className='Fondas-box'>
                <div className='Fondas-image'>
                <img src={rosa} className='rosa'/>
                </div>
                <div className='Fondasfood-details'>
                    <h4>Rosa Cafe</h4>
                    <h6>~45 min</h6><span>Lonchería</span>
                </div>
            </div>
            <div className='Fondas-box'>
                <div className='Fondas-image'>
                <img src={pasta} className='pasta'/>
                </div>
                <div className='Fondasfood-details'>
                    <h4>Le cottidiene</h4>
                    <h6>15-20 min</h6><span>Sushi</span>
                </div>
            </div>
            <div className='Fondas-box'>
                <div className='Fondas-image'>
                <img src={orange} className='orange'/>
                </div>
                <div className='Fondasfood-details'>
                    <h4>Querreque</h4>
                    <h6>~50 min</h6><span>Veggies</span>
                </div>
            </div>
        </div>
      </div>
      <div className='Section-Area-4'>
            <div className='Map-image'>
            <img src={profimage} className='profimage'/>
            </div>
            <div className='Mapa-Section'>
                <h5 className='Mapa'>
                    Mapa
                </h5>
                <h4 className='Encuentra'>
                    Encuentra en <br/>el mapa las mejores fondas
                </h4>
                <p className='Encuentralas'>
                Encuentra las fondas cercanas por sí quieres hacer pick up directo en las tiendas. 
                </p>
                <div className='Mapa-input'>
                <input type='text' placeholder='Tu código postal'/>
                 <button><BiMap className='Map-icon'/></button>
                </div>
                <button className='Map-button'>Buscar en mapa</button>
            </div>
        </div>
        <div className='Section-Area-5'>
            <h5 className='Fonditas'>
                Fonditas
            </h5>
            <h4 className='Los-mejores'>
                Los mejores menús
            </h4>
            <p className='Aquí-están'>
                Aquí están los mejores menús de la semana, y decide que vas a pedir  
            </p>
            <div className='section5-container'>
                <div className='section5-box'>
                    <div className='Reciepe-image'>
                        <img src={hotcake} className='hotcake'/>
                    </div>
                    <div className='Reciepe-details'>
                        <h6>Hot Cakes</h6>
                        <h4>Hot caketerías</h4>
                        <p>Incluye dos toppics</p>
                        <h5>20-30 min</h5> <span>Desde $70</span>
                    </div>
                </div>
                <div className='section5-box'>
                    <div className='Reciepe-image'>
                        <img src={pizza} className='pizza'/>
                    </div>
                    <div className='Reciepe-details'>
                        <h6>Pizza</h6>
                        <h4>Pizzería</h4>
                        <p>Chingo de pzzas</p>
                        <h5>~45 min</h5> <span>Desde $70</span>
                    </div>
                </div>
                <div className='section5-box'>
                    <div className='Reciepe-image'>
                    <img src={continental} className='continental'/>
                    </div>
                    <div className='Reciepe-details'>
                        <h6>Continental</h6>
                        <h4>Desayunos</h4>
                        <p>Incluye huevo y tostadas</p>
                        <h5>15-20 min</h5> <span>Desde $70</span>
                    </div>
                </div>
                <div className='section5-box'>
                    <div className='Reciepe-image'>
                    <img src={sushi} className='sushi'/>
                    </div>
                    <div className='Reciepe-details'>
                        <h6>Sushi</h6>
                        <h4>Ensaladish</h4>
                        <p>Muchas frutas</p>
                        <h5>30-40 min</h5> <span>Desde $70</span>
                    </div>
                </div>
                <div className='section5-box'>
                    <div className='Reciepe-image'>
                    <img src={hotcake2} className='hotcake'/>
                    </div>
                    <div className='Reciepe-details'>
                        <h6>Hot cakes</h6>
                        <h4>Otros desayunos</h4>
                        <p>Incluye dos jugos y tocinito</p>
                        <h5>~20 min</h5> <span>Desde $50</span>
                    </div>
                </div>
                <div className='section5-box'>
                    <div className='Reciepe-image'>
                    <img src={pizza2} className='pizza'/>
                    </div>
                    <div className='Reciepe-details'>
                        <h6>Pizza</h6>
                        <h4>Pastish</h4>
                        <p>Una súper duper pasta</p>
                        <h5>10-20 min</h5> <span>Desde $50</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='Section-Area-6'>
            <div className='Map-image'>
            <img src={chef} className='chef'/>
            </div>
            <div className='Mapa-Section'>
                <h5 className='Mapa'>
                fondas
                </h5>
                <h4 className='Encuentra'>
                Sube tu fonda <br/>a fonditas duplica <br/>tus ingresos 
                </h4>
                <p className='Encuentralas'>
                Inscríbete a nuestra plataforma y comienza a generar<br/> en estos momentos de crísis 
                </p>
                <button className='Subir-mi'>Subir mi fonda</button>
            </div>
        </div>
        <div className='Section-Area-7'>
            <div className='Estiempo'>
                Es tiempo de <br/>ayudarnos,<br/>Te unes?
            </div>
            <div className='Section7-image'>
                <div className='section7fonditas'>
                    Fonditas
                </div>
                <div className='Section7-foodimage'>
                    <img src={foodimage} className='foodimage'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionArea
