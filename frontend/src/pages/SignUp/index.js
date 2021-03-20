import React, { useState, useEffect } from 'react';
import { Container, PageArea, PageTitle} from './styled';


import { PageContainer } from '../../components/MainStyles';

// Page Transition
import { PageAnimation } from '../../animations';
import { useForm } from '../../lib/useForm';

const SignUp = () => {
    const { inputs, handleChange, clearForm } = useForm({
        name: '',
        email: '',
        password: '',
        confirm: ''
    });

    // States
    // const [name, setName] = useState('');
    // const [stateLoc, setStateLoc] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    // const [stateList, setStateList] = useState([])
    // const [disabled, setDisabled] = useState(false);
    // const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    } 

    return (
        <PageContainer
            variants={PageAnimation}
            initial='hidden'
            animate='visible'
            exit='exit'>
           <PageTitle>Cadastre-se.</PageTitle>
           <PageArea>
             <fieldset>
                <form onSubmit={handleSubmit}>
                    <label className="area" htmlFor="name">
                        <div className="area--title">Nome Completo</div>
                        <div className="area--input">
                            <input 
                                type="text"
                                name='name'
                                id='name'
                                required
                                value={inputs.name}
                                onChange={handleChange}
                            />
                        </div>
                    </label>
                    <label className="area" htmlFor="email">
                        <div className="area--title">Email</div>
                        <div className="area--input">
                            <input 
                                type="email"
                                name='email'
                                id='email'
                                required
                                value={inputs.email}
                                onChange={handleChange}
                            />
                        </div>
                    </label>
                    <label className="area" htmlFor="password">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input 
                                type="password"
                                name='password'
                                id='password'
                                required
                                value={inputs.password}
                                onChange={handleChange}
                            />
                        </div>
                    </label>
                    <label className="area" htmlFor="confirm">
                        <div className="area--title">Confirmar Senha</div>
                        <div className="area--input">
                            <input 
                                type="password"
                                required
                                name='confirm'
                                id='confirm'
                                value={inputs.confirm}
                                onChange={handleChange}
                            />
                        </div>
                    </label>
                    <label className="area" htmlFor="">
                        <div className="area--title"></div>
                        <div className="area--input">
                          <button>
                              Cadastrar
                          </button>
                        </div>
                    </label>
                </form>
             </fieldset>
           </PageArea>  
        </PageContainer>
    )
}

export default SignUp;
