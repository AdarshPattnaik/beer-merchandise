import React from 'react';
import { Link } from 'react-router-dom';
import { LuChevronLeftCircle } from "react-icons/lu";

export default function BeerNavigation({ path }) {
    return (
        <>
            <Link
                to={`/${path}`}
                className="beer-nav-btn d-flex align-items-center justify-content-center">
                <LuChevronLeftCircle />
            </Link>
        </>
    );
};