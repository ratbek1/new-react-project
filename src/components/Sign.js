import React from 'react';

const Signin = () => {
    return (
        <section id="sign"  >
            <div className="container">
                <div className="sign">
                    <div className="sign-block">
                        <div className="text">
                            <h1>Вход</h1>
                        </div>
                        <form id="tg">
                            <div className="inputs">
                                <input type="email" placeholder="Телефон или адрес эл. почты" name="name" className=""/>
                                <input type="password" placeholder="Пароль" name="tel" className=""/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="check1" className="form-labell">
                                    front
                                    <input id="check1" type="checkbox" value="porter" name="radio"/>
                                </label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="check2" className="form-labell">
                                    ux\ui
                                    <input type="checkbox" id="check2" value="srinter" name="radio"/>
                                </label>

                            </div>
                            <div className="form-group">
                                <label htmlFor="check3" className="form-labell">
                                    back
                                    <input id="check3" type="checkbox" name="radio" value="musor"/>
                                </label>

                            </div>
                            <div className="form-group">
                                <label htmlFor="check4" className="form-labell">
                                    smm
                                    <input id="check4" type="checkbox" value="gruz" name="radio"/>
                                </label>

                            </div>
                            <button type="submit" className="login">Войти</button>
                        </form>
                        {/*<div className="liners">*/}
                        {/*    <div className="line"></div>*/}
                        {/*    <h2>ИЛИ</h2>*/}
                        {/*    <div className="line"></div>*/}
                        {/*</div>*/}
                        <div className="logo">
                        </div>
                        {/*<a href="#" className="password">Забыли пароль?</a>*/}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Signin;