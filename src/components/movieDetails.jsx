import React, { useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { fetchMovieById } from "../redux/dataslice";
import imdb from "../assets/imdb.png";
import { FaBars } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosStar } from "react-icons/io";
import "react-multi-carousel/lib/styles.css";
import { MdLocalMovies } from "react-icons/md";
import { IoTvOutline } from "react-icons/io5";
import { MdStars } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { TiWorld } from "react-icons/ti";





const MovieDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { selected } = useSelector((state) => state.movies);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchMovieById(id));
    }, [dispatch, id]);

    if (!selected) return <p>Loading details...</p>;

    return (<div className="container-fluid details">
        <nav className="navbar navbar-expand-lg bg-dark navbar-light px-3">
            {/* Logo / Icon */}
            <a className="navbar-brand d-flex align-items-center" href="#" onClick={()=>navigate("/")}>
                <img src={imdb} alt="Logo" width="70" height="70" class="d-inline-block align-text-top" />
            </a>

            {/* Toggle button for mobile */}
            <button
                className="navbar-toggler bg-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon bg-white"></span>
            </button>

            {/* Collapsible content */}
            <div className="collapse navbar-collapse" id="navbarContent">
                {/* Centered Search Bar */}
                <form className="d-flex mx-auto my-2" style={{ maxWidth: '800px', width: '100%' }}>
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search IMDb"
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </form>

                {/* Right side links */}
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link text-white fw-bold" href="#" data-bs-toggle="modal" data-bs-target="#showmodal"> <FaBars className="me-2" />Menu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white fw-bold" href="#">Sign In</a>
                    </li>
                    <li className="nav-item dropdown ">
                        <a
                            className="nav-link dropdown-toggle text-white fw-bold"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                        >
                            EN
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item text-white fw-bold" href="#">Action</a></li>
                            <li><a className="dropdown-item text-white fw-bold" href="#">Something else</a></li>
                        </ul>
                        
                    </li>                    
                </ul>
            </div>
        </nav>

        <div className="modal fade" id="showmodal" tabindex="-1" aria-labelledby="showmodal" aria-hidden="true">
                    <img src={imdb} alt="Logo" className="imdb" />
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content bg-dark">
                            <div className="modal-body row">
                                <div className="col">
                                    <p className="mod"><MdLocalMovies /> <span className="text-white fw-bold">Movies</span></p>
                                    <p className="text-white">Release Calender</p>
                                    <p className="text-white">Top 250 Movies</p>
                                    <p className="text-white">Most Popular Movies</p>
                                    <p className="text-white">Browse Movies by Gener</p>
                                    <p className="text-white">Top Box Office</p>
                                    <p className="text-white">Showtimes & Tickets</p>
                                    <p className="text-white">Movie News</p>
                                    <p className="text-white">India Movie Spotlight</p>
                                </div>
                                <div className="col text-white">
                                    <p className="mod"><IoTvOutline /> <span className="text-white fw-bold">TV Shows</span></p>
                                    <p className="text-white">What's on TV & Streaming</p>
                                    <p className="text-white">Top 250 Movies</p>
                                    <p className="text-white">Most Popular Movies</p>
                                    <p className="text-white">Browse TV Show by Gener</p>
                                    <p className="text-white">Top Box Office</p>
                                    <p className="text-white">TV News</p>
                                </div>
                                <div className="col text-white">
                                    <p className="mod"><MdStars /> <span className="text-white fw-bold">Awards & Events</span></p>
                                    <p className="text-white">Oscars</p>
                                    <p className="text-white">Cannes Film Festival</p>
                                    <p className="text-white">Star Wars</p>
                                    <p className="text-white">Asian Pacific American Heritage Month</p>
                                    <p className="text-white">Summer watch Guide</p>
                                    <p className="text-white">STARmeter Awards</p>
                                    <p className="text-white">Awards Central</p>
                                    <p className="text-white">Festival Central</p>
                                    <p className="text-white">All Events</p>
                                </div>
                                <div className="row">
                                    <div className="col text-white">
                                        <p className="mod"><FaUserFriends /> <span className="text-white fw-bold">Celebs</span></p>
                                        <p className="text-white">Born Today</p>
                                        <p className="text-white">Most Popular Celebs</p>
                                        <p className="text-white">Celebrity News</p>
                                    </div>
                                    <div className="col text-white">
                                        <p className="mod"><BsFillCollectionPlayFill /> <span className="text-white fw-bold">Watch</span></p>
                                        <p className="text-white">Watch to watch </p>
                                        <p className="text-white">Latest Trailer</p>
                                        <p className="text-white">IMDb Originals</p>
                                        <p className="text-white">IMDb Picks</p>
                                        <p className="text-white">IMDb Spotlight</p>
                                        <p className="text-white">IMDb Podcast</p>
                                    </div>
                                    <div className="col text-white">
                                        <p className="mod"><TiWorld /> <span className="text-white fw-bold">Community</span></p>
                                        <p className="text-white">Help Center</p>
                                        <p className="text-white">Contributor Zone</p>
                                        <p className="text-white">Polls</p>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn bg-dark text-white" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex flex-column align-items-center">
                <p className="fs-1 text-white">{selected.name}<br /><span className="fs-5">{selected.release}</span></p>

            </div>
            <div className="d-flex flex-column align-items-center">
                <p className="rating">IMDb RATING</p>
                <p className="text-white"><span className="mod"><IoIosStar /></span> {selected.rating}</p>
            </div>
        </div>

        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 col-12 mb-3"><img src={selected.image} alt={selected.name} className="img-fluid" style={{ height: "360px" }} /></div>
                <div className="col-md-6 col-12 mb-3"><div className="ratio ratio-16x9" dangerouslySetInnerHTML={{ __html: selected.trailer }} /></div>
            </div>
            <div></div>
        </div>

        <div className="container">
            <div className="d-flex align-items-center gap-3">
                <button type="button" class="btn btn-outline-warning">Action</button>
                <button type="button" class="btn btn-outline-warning">Drama</button>
                <button type="button" class="btn btn-outline-warning">Thriller</button>
                <button type="button" class="btn btn-outline-warning">Horror</button>
                <button type="button" class="btn btn-outline-warning">Comedy</button>
            </div>
        </div>

        <div className="container mt-5 text-white">
            <p>{selected.plot}</p>
            <hr class="border border-1 opacity-100" />
            <p className="fw-bold">Actor <span className="actors fw-bold">{selected.actorName}</span> </p>
            <hr class="border border-1 opacity-100" />
            <p className="fw-bold">Actor Bio <span className="actors fw-bold">{selected.actorBio}</span> </p>
            <hr class="border border-1 opacity-100" />
            <p className="fw-bold">Producer <span className="actors fw-bold">{selected.producerName}</span> </p>
            <hr class="border border-1 opacity-100" />
            <p className="fw-bold">Producer Bio <span className="actors fw-bold">{selected.producerBio}</span> </p>
        </div>
    </div>)
}

export default MovieDetails;