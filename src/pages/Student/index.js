import React, {useEffect, useState} from "react";
import './style.css';
import { FiCornerDownLeft, FiUserPlus } from "react-icons/fi";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from '../../services/api';

export default function NewStudent(){
    const [id,setId] = useState(null);
    const [nome,setNome] = useState('');
    const [nomePai,setNomePai] = useState('');
    const [nomeMae,setNomeMae] = useState('');
    const [endereco,setEndereco] = useState('');
    const [serie,setSerie] = useState('');
    const [notaMedia,setNotaMedia] = useState('');
    const [dataNascimento,setDataNascimento] = useState('');
    const [idade,setIdade] = useState(0);
    const navigate = useNavigate();
    const {studentid} = useParams();

    const token = localStorage.getItem('token');
    const authorization = {
        headers:{
            authorization:`Bearer ${token}`
        }
    }

    useEffect(()=>{
        if(studentid === '0')
            return;
        else
            loadStudent();
    },[studentid]);


    async function loadStudent(){
        try{
                const response = await api.get(`/select-student/${studentid}`, authorization);
                console.log(response);
                setId(response.data.id);
                setNome(response.data.nome);
                setNomePai(response.data.nomePai);
                setNomeMae(response.data.nomeMae);
                setIdade(response.data.idade);
                setEndereco(response.data.endereco);
                setSerie(response.data.serie);
                setNotaMedia(response.data.notaMedia);
                setDataNascimento(response.data.dataNascimento);
        }
        catch(error){
                alert('Error ao recuperar  os dados do student ' + error);
                navigate('/students')
        }
    }


    async function saveOrUpdate(event){
        event.preventDefault();

        const data = {
            nome,
            idade,
            nomePai,
            nomeMae,
            idade,
            serie,
            dataNascimento,
            endereco,
            notaMedia
        }

        try{
                if(studentid === '0')
                {
                    await api.post('add-student',data,authorization);
                }
                else{
                    data.id = id;
                    await api.put(`update-student/${id}`,data,authorization);
                }
        }
        catch(error)
        {
            alert('Erro ao gravar o student' + error);
        }

        navigate('/students');
    }


    return(
        <div className="new-student-container">
            <div className="content">
              
                <section className="form">
                    <FiUserPlus size={105} color="#17202a" />
                    <h1>{studentid === "0"?"Incluir Novo Student":"Atualizar Student"}</h1>
                    <Link className="back-link" to="/students">
                        <FiCornerDownLeft size={25} color="#17202a" />
                        Retornar
                    </Link>
                </section>
                <form onSubmit={saveOrUpdate}>
                        <input placeholder="Nome" 
                               value={nome}
                               onChange={u=>setNome(u.target.value)}/>
                        <input placeholder="Nome do Pai" 
                               value={nomePai}
                               onChange={u=>setNomePai(u.target.value)}/>
                        <input placeholder="Nome da Mãe" 
                               value={nomeMae}
                               onChange={u=>setNomeMae (u.target.value)}/>
                        <input placeholder="Endereço"
                               value={endereco}
                               onChange={u=>setEndereco (u.target.value)}/>
                        <input placeholder="Data de Nascimento (yyyy-MM-dd)"
                                value={dataNascimento}
                                onChange={u=>setDataNascimento (u.target.value)}/>
                        <input placeholder="Idade" 
                               value={idade}
                               onChange={u=>setIdade(u.target.value)}/>
                        <input placeholder="Série"
                                 value={serie}
                                 onChange={u=>setSerie (u.target.value)}/>

                        <input placeholder="Nota Média"
                               value={notaMedia}
                               onChange={u=>setNotaMedia (u.target.value)}/>
                        <button className="button" type="submit">
                        {studentid === "0"?"Incluir":"Atualizar"}
                        </button>
                    </form>
            </div>
        </div>
    )
}