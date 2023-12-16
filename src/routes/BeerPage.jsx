import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchBeers } from '../redux/actions/actions';
import BeerCard from '../components/BeerCard';
import BeerNavigation from '../components/BeerNavigation';
import { DNA, LineWave } from 'react-loader-spinner';

const mapStateToProps = (state) => ({
    beers: state.beer.beers,
    loading: state.beer.loading,
    error: state.beer.error
});

const BeerPage = ({
    beers,
    loading,
    error,
    fetchBeers
}) => {

    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchBeers();
    }, [fetchBeers]);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredBeers = beers.filter(beer =>
        beer.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) {
        return (
            <>
                <div style={{ height: "100vh" }}
                    className="loading-page w-100 d-flex align-items-center justify-content-center">
                    <DNA
                        visible={true}
                        height="100"
                        width="100"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper"
                    />
                </div>
            </>
        );
    };

    if (error) {
        return (
            <>
                <div style={{ height: "100vh", gap: "10px" }}
                    className="loading-page w-100 d-flex flex-column align-items-center justify-content-center">
                    <LineWave
                        height="100"
                        width="100"
                        color="#ff0c0c"
                        ariaLabel="line-wave"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                    <h1 className="ibm-plex-sans" style={{ fontSize: "20px" }}>Something Went Wrong</h1>
                </div>
            </>
        );
    };

    return (
        <>
            <section className="beer-page d-flex flex-column align-items-center justify-content-start">
                <h1 className="beer-page-heading ibm-plex-sans w-100 d-flex align-items-center justify-content-center text-uppercase">Merchandise</h1>

                <div className="search-box d-flex align-items-center justify-content-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </div>

                <div className="beer-container w-100 d-flex align-items-center justify-content-center">
                    <BeerNavigation path="" />
                    <div className="container-fluid h-100 w-100">
                        <div className="row g-5">
                            {filteredBeers.map((beer) => (
                                <BeerCard
                                    key={beer.id}
                                    id={beer.id}
                                    img={beer.image_url}
                                    name={beer.name} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default connect(mapStateToProps, { fetchBeers })(BeerPage);