import styled from './DetalhesComponentes.module.css'

export default function DetalhesComponentes({imagem, titulo, descricao}){
    return(
        <div className={styled.div}>
            <img src={imagem} alt={titulo}></img>
            <p>{titulo}</p>
            <hr style={{backgroundColor: "#F7D400", height: '1px'}}></hr>
            <p className={styled.descricao}>{descricao}</p>
        </div>
    )
}