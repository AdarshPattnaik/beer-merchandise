import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { Triangle } from 'react-loader-spinner';

export default function BeerCard({ id, img, name }) {

    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-center justify-content-center">
                <div className="beer-card d-flex flex-column justify-content-between">
                    <div className="card-img-box d-flex align-items-center justify-content-center">
                        {
                            loading
                                ? <Triangle
                                    height="80"
                                    width="80"
                                    color="#ff7272"
                                    ariaLabel="triangle-loading"
                                    wrapperStyle={{}}
                                    wrapperClassName=""
                                    visible={true}
                                />
                                : <img
                                    className='card-img'
                                    src={img}
                                    alt={`card-img-${id}/png`} />
                        }
                    </div>

                    <span className='card-title rubik'>{name}</span>

                    <Link
                        to={`/singlebeer/${id}`}
                        className='view-card-btn d-flex align-items-center justify-content-center'>
                        <FaEye />
                        <span>View</span>
                    </Link>
                </div>
            </div>
        </>
    );
};