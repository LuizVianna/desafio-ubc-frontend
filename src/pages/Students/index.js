import React from 'react';
import { Link } from 'react-router-dom';
import './student.css';
import logoCadastro from '../../assets/cadastro1.png';
import { FiEdit, FiUserX, FiXCircle } from 'react-icons/fi';

export default function Student(){
    return(
        <div className="student-container">
            <header>
                <img src={logoCadastro} alt="Cadastro"/>
                <span>
                    Bem-Vindo, 
                    <strong>Luiz Claudio Vianna</strong>!
                </span>
                <Link className="button" to="/student/new/0">Novo Aluno</Link>
                <button type="button">
                    <FiXCircle size={35} color="#17202a" />
                </button>
            </header>
            <form>
                <input type="text" placeholder='Nome'/>
                <button>
                    Filtrar aluno por nome (parcial)
                </button>
            </form>
            <h1>Lista de Alunos</h1>
            <ul>
                <li>
                    <b>Nome:</b>Paulo<br/><br/>
                    <b>Idade:</b>14<br/><br/>
                    <b>Data Nascimento:</b>18/04/2010<br/><br/>
                    <button>
                       <FiEdit size={35} color="#17202a" />
                    </button>
                    <button>
                        <FiUserX size={35} color="#17202a" />
                    </button>
                </li>
                <li>
                    <b>Nome:</b>Antônio<br/><br/>
                    <b>Idade:</b>13<br/><br/>
                    <b>Data Nascimento:</b>23/05/2010<br/><br/>
                    <button>
                       <FiEdit size={35} color="#17202a" />
                    </button>
                    <button>
                        <FiUserX size={35} color="#17202a" />
                    </button>
                </li>
            </ul>
        </div>
    )
}