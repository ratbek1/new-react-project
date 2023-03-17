import React from 'react';
import {arr} from './data'
const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero">
                    <h1 className="title">Вкусные рецепты</h1>
                    {
                        arr.map((el) => (
                            <div>
                                <h2 className="Name">{el.name}</h2>
                                <p className="ingredients">{el.ingredients.map(el => (
                                        <p className="nameP">{el.name} {el.amount} {el.measurement}</p>
                                ))}</p>
                                <h2 className="instruction">Инструкция по приготовлению</h2>
                                <h4 className="steps">{el.steps}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Hero;