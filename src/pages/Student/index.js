import React from "react";
import './style.css';
import { FiCornerDownLeft, FiUserPlus } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";

export default function NewStudent(){
    
    const {studentid} = useParams();

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
                <form>
                        <input placeholder="Nome"/>
                        <input placeholder="Nome do Pai"/>
                        <input placeholder="Nome da Mãe"/>
                        <input placeholder="Endereço"/>
                        <input placeholder="Data de Nascimento"/>
                        <input placeholder="Idade"/>
                        <input placeholder="Série"/>
                        <input placeholder="Nota Média"/>
                        <button className="button" type="submit">
                        {studentid === "0"?"Incluir":"Atualizar"}
                        </button>
                    </form>
            </div>
        </div>
    )
}