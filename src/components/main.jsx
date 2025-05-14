import React, { useState, useEffect } from "react";
import imdb from "../assets/imdb.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, updateUser, addUser, deleteUser } from "../redux/movieSlice";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars } from 'react-icons/fa';
import { IoIosStar } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";




const Main = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { allMovies, loading } = useSelector((state) => state.films);
    const [form, setForm] = useState({
        name: "",
        release: "",
        plot: "",
        image: "",
        actorName: "",
        actorGender: "",
        actorDob: "",
        actorBio: "",
        producerName: "",
        producerGender: "",
        producerDob: "",
        producerBio: "",
        rating: "",
        trailer: "",
    });

    const [editId, setEditId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleShowAdd = () => {
        setForm({
            name: "",
            release: "",
            plot: "",
            image: "",
            actorName: "",
            actorGender: "",
            actorDob: "",
            actorBio: "",
            producerName: "",
            producerGender: "",
            producerDob: "",
            producerBio: "",
            rating: "",
            trailer: "",
        });
        setEditId(null);
        setShowModal(true);
    };

    const handleShowEdit = (movie) => {
        setForm({
            name: movie.name,
            release: movie.release,
            plot: movie.plot,
            image: movie.image,
            actorName: movie.actorName,
            actorGender: movie.actorGender,
            actorDob: movie.actorDob,
            actorBio: movie.actorBio,
            producerName: movie.producerName,
            producerGender: movie.producerGender,
            producerDob: movie.producerDob,
            producerBio: movie.producerBio,
            rating: movie.rating,
            trailer: movie.trailer,
        });
        setEditId(movie._id);
        setShowModal(true);
    };


    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editId) {
            dispatch(updateUser({ id: editId, data: form }));
        } else {
            dispatch(addUser(form));
        }
        setShowModal(false);
        setForm({
            name: "",
            release: "",
            plot: "",
            image: "",
            actorName: "",
            actorGender: "",
            actorDob: "",
            actorBio: "",
            producerName: "",
            producerGender: "",
            producerDob: "",
            producerBio: "",
            rating: "",
            trailer: "",
        });
        setEditId(null);
    };

        const handleLogout = () => {
            localStorage.removeItem("token");
            navigate("/login"); 
        };

        return (
            <div className="body">
                <nav className="navbar navbar-expand-lg navbar-light px-3">
                    <a className="navbar-brand d-flex align-items-center" href="#" onClick={() => navigate("/")}>
                        <img src={imdb} alt="Logo" width="70" height="70" className="d-inline-block align-text-top" />
                    </a>
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
                                <a className="nav-link text-white fw-bold" href="#" onClick={() => navigate("/addMovie")}>Add Movie</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fw-bold" href="#" onClick={handleLogout}>Logout</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container mb-5">
                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <iframe width="100%" height="480" src="https://www.youtube.com/embed/fsQgc9pCyDU" title="Mission: Impossible – The Final Reckoning | Official Trailer (2025 Movie) - Tom Cruise" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                            <div className="carousel-item">
                                <iframe width="100%" height="480" src="https://www.youtube.com/embed/uhUht6vAsMY" title="Superman | Official Teaser Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                            <div className="carousel-item">
                                <iframe width="100%" height="480" src="https://www.youtube.com/embed/oFkbsEKaoSE" title="Predator: Badlands | Teaser Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                            <div className="carousel-item">
                                <iframe width="100%" height="480" src="https://www.youtube.com/embed/bKGxHflevuk" title="Sinners | Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                            <div className="carousel-item">
                                <iframe width="100%" height="480" src="https://www.youtube.com/embed/UWMzKXsY9A4" title="Final Destination Bloodlines | Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div className="container">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="text-white">Movie List</h2>
                        <button className="btn btn-primary" onClick={handleShowAdd}>
                            + Add Movie
                        </button>
                    </div>

                    {loading ? (
                        <h4 className="text-center">Loading...</h4>
                    ) : (

                        <div className="container">
                            <div className="row gap-4">
                                {allMovies.map((movie) => (
                                    <div key={movie._id} className="card bg-dark" style={{ height: "500px", width: "200px" }} >
                                        <img src={movie.image} class="card-img-top mt-2" alt={movie.name} />
                                        <div className="card-body boxs mb-3">
                                            <h5 className="card-title text-white"><span className="mod"><IoIosStar /></span> {movie.rating}</h5>
                                            <h5 className="card-title text-white mt-3">{movie.name}</h5>
                                            <button className="watch mt-3 text-primary fw-bold" onClick={() => navigate(`/${movie._id}`)}>Watch Options</button>
                                            <div className="d-flex align-items-center justify-content-between mt-3 gap-2">
                                                <button className="changes" onClick={() => handleShowEdit(movie)}><FaEdit /></button>
                                                <button className="changes" onClick={() => handleDelete(movie._id)}><MdDelete /></button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* MODAL */}
                <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{editId ? "Edit Movie" : "Add Movie"}</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={handleSubmit}>
                        <Modal.Body>
                            <input
                                type="text"
                                className="form-control mb-2"
                                name="name"
                                placeholder="Movie Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                className="form-control mb-2"
                                name="release"
                                placeholder="Release Year"
                                value={form.release}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                className="form-control mb-2"
                                name="plot"
                                placeholder="Plot"
                                value={form.plot}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                className="form-control mb-2"
                                name="image"
                                placeholder="Poster Image URL"
                                value={form.image}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                className="form-control mb-2"
                                name="image"
                                placeholder="Actor Name"
                                value={form.actorName}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                className="form-control mb-2"
                                name="image"
                                placeholder="Actor Gender"
                                value={form.actorGender}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                className="form-control mb-2"
                                name="image"
                                placeholder="Actor Dob"
                                value={form.actorDob}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                className="form-control mb-2"
                                name="image"
                                placeholder="Actor Bio"
                                value={form.actorBio}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                className="form-control mb-2"
                                name="image"
                                placeholder="Producer Name"
                                value={form.producerName}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                className="form-control mb-2"
                                name="image"
                                placeholder="Producer Gender"
                                value={form.producerGender}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                className="form-control mb-2"
                                name="image"
                                placeholder="Producer Dob"
                                value={form.producerDob}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                className="form-control mb-2"
                                name="image"
                                placeholder="Actor Bio"
                                value={form.actorBio}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                className="form-control mb-2"
                                name="image"
                                placeholder="Rating"
                                value={form.rating}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                className="form-control mb-2"
                                name="image"
                                placeholder="Trailer"
                                value={form.trailer}
                                onChange={handleChange}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowModal(false)}>
                                Cancel
                            </Button>
                            <Button type="submit" variant="primary">
                                {editId ? "Update" : "Add"}
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>

            </div>
        );
    };

    export default Main;
