import React from 'react';
import { useHistory } from 'react-router';
import { useForm } from '../../lib/useForm';
import { gql, useMutation } from '@apollo/client';

import { PageArea, PageTitle} from './styled';
import { PageContainer } from '../../components/MainStyles';

// Page Transition
import { PageAnimation } from '../../animations';



const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    createUser(data: { email: $email, name: $name, password: $password, isAdmin: false })
    {
      id
      email
      name
    }
  }
`;

const SignUp = () => {
    const history = useHistory();
    const { inputs, handleChange, clearForm } = useForm({
        name: '',
        email: '',
        password: '',
    });

    const [signup, { loading }] = useMutation(SIGNUP_MUTATION, {
        variables: inputs
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup();
            clearForm();
            history.push('/signin');
        }catch(error){
            console.log(error);
        }
    } 

    return (
        <PageContainer
            variants={PageAnimation}
            initial='hidden'
            animate='visible'>
           <PageArea>
           <PageTitle>Criar Conta</PageTitle>
             <fieldset disabled={loading}>
                <form method="POST" onSubmit={handleSubmit}>
                    <label className="area" htmlFor="name">
                        <div className="area--title">Nome Completo</div>
                        <div className="area--input">
                            <input 
                                type="text"
                                name='name'
                                id='name'
                                placeholder='Nome'
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
                                placeholder='Email'
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
                                placeholder="Senha"
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
                                placeholder='Confirmar Senha'
                                id='confirm'
                                value={inputs.confirm}
                                onChange={handleChange}
                            />
                        </div>
                    </label>
                    <label className="area" htmlFor="">
                        <div className="area--input">
                          <button type="submit">
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
