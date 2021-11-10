import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, FormControl } from 'react-bootstrap';
import './Search.css';

const Search = props => {
    const { register, handleSubmit, onSubmit } = props;

    return (
        <Container className="mt-4">
            <form onSubmit={handleSubmit(onSubmit)} className="input-group mb-3 search">
                <FormControl
                    placeholder="Search Tour"
                    className="form-control p-2"
                    {...register("searchText")}
                />
                <button className="input-group-text shadow-none px-4 btn-danger p-2">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        </Container>
    );
};

export default Search;