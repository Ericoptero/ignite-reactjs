import React from 'react';
import { RepositoryItem } from './RepositoryItem';

export function RepositoryList() {

    const repository = {
        name: 'Unform'
    }

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    );
}