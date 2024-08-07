import React,{useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './student.css';
import logoCadastro from '../../assets/cadastro1.png';
import { FiEdit, FiUserX, FiXCircle } from 'react-icons/fi';

import api from '../../services/api'

export default function Student(){
        
        //filtar dados
        const [searchInput, setSearchInput] = useState('');
        const [filtro, setFiltro] = useState([]);

        const [students, setStudents] = useState([]);
        const navigate = useNavigate()
        const userName = localStorage.getItem('UserName');
        const token = localStorage.getItem('token');
        const authorization = {
            headers:{
                authorization:`Bearer ${token}`
            }
        }

       const searchStudents = (searchValue)=>{
            setSearchInput(searchValue);
            if(setSearchInput !== ''){
                const dadosFiltrados = students.filter((item) =>{
                    return Object.values(item).join('').toLowerCase()
                                 .includes(searchInput.toLowerCase())
                });
                setFiltro(dadosFiltrados);
            }
            else{
                setFiltro(students);
            }
       }

       async function deleteStudent(id){
            try{
                if(window.confirm("Deseja deletar o student de id = " + id + " ?"))
                {
                    await api.delete(`delete-student/${id}`, authorization);
                    setStudents(students.filter(student => student.id != id));
                }
            }
            catch(error){
                alert('Não foi possível excluir o student')
            }
       }


        useEffect(()=>{
            api.get('/list-all-students', authorization ).then(
                response=>{setStudents(response.data);
                },token)
        })

        async function logout(){
            try{
                    localStorage.clear();
                    localStorage.setItem('token','');
                    authorization.headers = '';
                    navigate('/')
            }
            catch(error){
                alert('Não foi possível fazer o logout ' + error)
            }
        }

        async function editStudent(id){
            try{
                navigate(`/student/new/${id}`)
            }
            catch(error){
                    alert('Não foi possivel editar o student ' + error);
            }
        }

    return(
        <div className="student-container">
            <header>
                <img src={logoCadastro} alt="Cadastro"/>
                <span>
                    Bem-Vindo, 
                    <strong> {userName}</strong>!
                </span>
                <Link className="button" to="/student/new/0">Novo Aluno</Link>
                <button title='Logout' onClick={logout} type="button">
                    <FiXCircle size={35} color="#17202a" />
                </button>
            </header>
            <form>
                <input 
                    type="text" 
                    placeholder='Filtrar por Nome'
                    onChange={(e)=> searchStudents(e.target.value)}
                />
            </form>
            <h1>Lista de Alunos</h1>
            {searchInput.length > 1 ? (
            <ul>
                {filtro.map(student =>(
                <li key={student.id}>
                    <b>Nome: </b>{student.nome}<br/><br/>
                    <b>Nome do Pai: </b>{student.nomePai}<br/><br/>
                    <b>Nome da Mãe: </b>{student.nomeMae}<br/><br/>        
                    <button title='Editar' onClick={()=> editStudent(student.id)}>
                       <FiEdit size={35} color="#17202a" />
                    </button>
                    <button title='Excluir' onClick={()=>deleteStudent(student.id)}>
                        <FiUserX size={35} color="#17202a" />
                    </button>
                </li>
                 ))}
            </ul>
            ):(
                <ul>
                {students.map(student =>(
                <li key={student.id}>
                    <b>Nome: </b>{student.nome}<br/><br/>
                    <b>Nome do Pai: </b>{student.nomePai}<br/><br/>
                    <b>Nome da Mãe: </b>{student.nomeMae}<br/><br/>        
                    <button onClick={()=> editStudent(student.id)}>
                       <FiEdit size={35} color="#17202a" />
                    </button>
                    <button title='Editar' onClick={()=>deleteStudent(student.id)}>
                        <FiUserX size={35} color="#17202a" />
                    </button>
                </li>
                 ))}
            </ul>
            )}
        </div>
    )
}