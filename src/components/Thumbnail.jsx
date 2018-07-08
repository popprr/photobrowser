import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Thumbnail = ({
    id,
    title,
    url
}) => (
    <Link to={`/photo/${id}`}>
        <img src={ url } alt={title}/>
    </Link>
);

Thumbnail.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default Thumbnail;