import './style.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';

function Item({ item }) {

    return (
        <div className='produtoContainer'>
            <figure>
                <img src={item.imagem} alt={item.imagemAlt} />
            </figure>
            <h2>{item.nome.toUpperCase()}</h2>
            <span>R$ {item.preco.toFixed(2).replace('.', ',')}</span>
            <Link to={`/produto/${item.id}`}>
                <button className='btnDetalhes'>Detalhes do produto</button>
            </Link>
        </div>
    );
}

export default Item