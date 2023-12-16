import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBeers } from '../redux/actions/actions';
import { LuChevronRight } from "react-icons/lu";
import { GoDot } from "react-icons/go";
import { TiChevronRightOutline } from "react-icons/ti";
import { FaRegLightbulb } from "react-icons/fa6";
import BeerNavigation from '../components/BeerNavigation';
import { DNA, LineWave, Triangle } from 'react-loader-spinner';

const mapStateToProps = (state) => ({
    beers: state.beer.beers,
    loading: state.beer.loading,
    error: state.beer.error
});

const SingleBeer = ({
    beers,
    loading,
    error,
    fetchBeers
}) => {

    const { id } = useParams();
    const beer = beers[id - 1];
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        fetchBeers();
    }, [fetchBeers]);

    React.useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);

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

    console.log(id);

    return (
        <>
            {beer &&
                <div className="single-page d-flex flex-column align-items-start">
                    <BeerNavigation path="beerpage" />
                    <div className="single-img d-flex align-items-center justify-content-center mx-auto">
                        {
                            isLoading
                                ? <Triangle
                                    height="80"
                                    width="80"
                                    color="#ff7272"
                                    ariaLabel="triangle-loading"
                                    wrapperStyle={{}}
                                    wrapperClassName=""
                                    visible={true}
                                />

                                : <img src={beer.image_url} alt={`img-beer-${id}/png`} />
                        }
                    </div>

                    {/* Basic Information */}
                    <div className="info-box d-flex flex-column align-items-start">
                        <h3 className="info-head ibm-plex-sans">Basic Information:</h3>
                        <div className="info-box rubik d-flex flex-column align-items-start">
                            <div className="info-line d-flex flex-row align-items-start">
                                <b><LuChevronRight className="mb-1" /></b> <b>Name:</b> <span>{beer.name}</span>
                            </div>
                            <div className="info-line d-flex flex-row align-items-start">
                                <b><LuChevronRight className="mb-1" /></b> <b>Tagline:</b> <span>{beer.tagline}</span>
                            </div>
                            <div className="info-line d-flex flex-row align-items-start">
                                <b><LuChevronRight className="mb-1" /></b> <b>First Brewed:</b> <span>{beer.first_brewed}</span>
                            </div>
                            <div className="info-line d-flex flex-row align-items-start">
                                <b><LuChevronRight className="mb-1" /></b> <b>Description:</b> <span>{beer.description}</span>
                            </div>
                        </div>
                    </div>

                    {/* Beer Specifications */}
                    <div className="info-box d-flex flex-column align-items-start">
                        <h3 className="info-head ibm-plex-sans">Beer Specifications:</h3>
                        <div className="info-box rubik d-flex flex-column align-items-start">
                            <div className="info-line d-flex flex-row align-items-start">
                                <b><LuChevronRight className="mb-1" /></b> <b>ABV (Alcohol By Volume):</b> <span>{beer.abv}</span>
                            </div>
                            <div className="info-line d-flex flex-row align-items-start">
                                <b><LuChevronRight className="mb-1" /></b> <b>IBU (International Bitterness Units):</b> <span>{beer.ibu}</span>
                            </div>
                            <div className="info-line d-flex flex-row align-items-start">
                                <b><LuChevronRight className="mb-1" /></b> <b>Target FG (Final Gravity):</b> <span>{beer.target_fg}</span>
                            </div>
                            <div className="info-line d-flex flex-row align-items-start">
                                <b><LuChevronRight className="mb-1" /></b> <b>Target OG (Original Gravity):</b> <span>{beer.target_og}</span>
                            </div>
                            <div className="info-line d-flex flex-row align-items-start">
                                <b><LuChevronRight className="mb-1" /></b> <b>EBC (European Brewery Convention):</b> <span>{beer.ebc}</span>
                            </div>
                            <div className="info-line d-flex flex-row align-items-start">
                                <b><LuChevronRight className="mb-1" /></b> <b>SRM (Standard Reference Method):</b> <span>{beer.srm}</span>
                            </div>
                            <div className="info-line d-flex flex-row align-items-start">
                                <b><LuChevronRight className="mb-1" /></b> <b>pH value:</b> <span>{beer.ph}</span>
                            </div>
                            <div className="info-line d-flex flex-row align-items-start">
                                <b><LuChevronRight className="mb-1" /></b> <b>Attenuation Level:</b> <span>{beer.attenuation_level}</span>
                            </div>
                        </div>
                    </div>

                    {/* Volume Information */}
                    <div className="info-box d-flex flex-column align-items-start">
                        <h3 className="info-head ibm-plex-sans">Volume Information:</h3>
                        <div className="info-box rubik d-flex flex-column align-items-start">
                            <div className="info-line d-flex flex-row align-items-start">
                                <b><LuChevronRight className="mb-1" /></b> <b>Volume:</b> <span>{`${beer.volume.value} ${beer.volume.unit}`}</span>
                            </div>
                            <div className="info-line d-flex flex-row align-items-start">
                                <b><LuChevronRight className="mb-1" /></b> <b>Boil Volume:</b> <span>{`${beer.boil_volume.value} ${beer.boil_volume.unit}`}</span>
                            </div>
                        </div>
                    </div>

                    {/* Brewing Method */}
                    <div className="info-box d-flex flex-column align-items-start">
                        <h3 className="info-head ibm-plex-sans">Brewing Method:</h3>
                        <div className="info-box rubik d-flex flex-column align-items-start">
                            <div className="info-line d-flex flex-row align-items-start">
                                <b><LuChevronRight className="mb-1" /></b> <b>Mash Temperature:</b> <span>{`${beer.method.mash_temp[0].temp.value}°${beer.method.mash_temp[0].temp.unit} for ${beer.method.mash_temp[0].duration} minutes`}</span>
                            </div>
                            <div className="info-line d-flex flex-row align-items-start">
                                <b><LuChevronRight className="mb-1" /></b> <b>Fermentation Temperature:</b> <span>{`${beer.method.fermentation.temp.value}°${beer.method.fermentation.temp.unit}`}</span>
                            </div>
                            <div className="info-line d-flex flex-row align-items-start">
                                <b><LuChevronRight className="mb-1" /></b> <b>Twist:</b> <span>{`${beer.method.twist ? beer.method.twist : "Not Specified"}`}</span>
                            </div>
                        </div>
                    </div>

                    {/* Ingredients */}
                    <div className="info-box d-flex flex-column align-items-start">
                        <h3 className="info-head ibm-plex-sans">Ingredients:</h3>
                        <div className="info-box rubik d-flex flex-column align-items-start">
                            <h6>Malt:</h6>
                            {
                                beer.ingredients.malt.map((elem, ind) =>
                                    <div key={ind} className="info-line d-flex flex-row align-items-start">
                                        <b><GoDot className="mb-1" /></b> <b>{`${elem.name}:`}</b> <span>{`${elem.amount.value} ${elem.amount.unit}`}</span>
                                    </div>
                                )
                            }
                            <h6>Hops:</h6>
                            {
                                beer.ingredients.hops.map((elem, ind) =>
                                    <div key={ind} className="info-line d-flex flex-row align-items-start">
                                        <b><GoDot className="mb-1" /></b> <b>{`${elem.name}:`}</b> <span>{`${elem.amount.value} ${elem.amount.unit} (${elem.add}, ${elem.attribute})`}</span>
                                    </div>
                                )
                            }

                            <div className="info-line d-flex flex-row align-items-center">
                                <h6>Yeast:</h6>
                                <span className='mt-1'>
                                    {beer.ingredients.yeast}
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* Food Pairing Suggestions */}
                    <div className="info-box d-flex flex-column align-items-start">
                        <h3 className="info-head ibm-plex-sans">Food Pairing Suggestions:</h3>
                        <div className="info-box rubik d-flex flex-column align-items-start">
                            {
                                beer.food_pairing.map((elem, ind) =>
                                    <div key={ind} className="info-line d-flex flex-row align-items-start">
                                        <b><TiChevronRightOutline className='mb-1' /></b> <span>{`${elem}`}</span>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    {/* Brewer's Tips */}
                    <div className="info-box d-flex flex-column align-items-start">
                        <h3 className="info-head ibm-plex-sans">Brewer's Tips:</h3>
                        <div className="info-box rubik d-flex flex-column align-items-start">
                            <div className="info-line d-flex flex-row align-items-start">
                                <b><FaRegLightbulb className="mb-1" /></b> <span>{`${beer.brewers_tips}`}</span>
                            </div>
                        </div>
                    </div>

                    {/* Contributor Information */}
                    <div className="info-box d-flex flex-column align-items-start">
                        <h3 className="info-head ibm-plex-sans">Contributor Information:</h3>
                        <div className="info-box rubik d-flex flex-column align-items-start">
                            <div className="info-line d-flex flex-row align-items-start">
                                <b><LuChevronRight className="mb-1" /></b> <b>Contributed by:</b> <span>{beer.contributed_by}</span>
                            </div>
                        </div>
                    </div>

                </div>
            }
        </>
    );
};

export default connect(mapStateToProps, { fetchBeers })(SingleBeer);