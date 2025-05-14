import React, { useEffect,useState } from "react";
import imdb from "../assets/imdb.png";
import { FaBars } from 'react-icons/fa';
import { MdLocalMovies } from "react-icons/md";
import { IoTvOutline } from "react-icons/io5";
import { MdStars } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { TiWorld } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoIosStar } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import "react-multi-carousel/lib/styles.css";

import { fetchUsers, addUser, updateUser, deleteUser } from "../redux/movieSlice";



const MainPage = () => {
    //<div dangerouslySetInnerHTML={{ __html: movie.trailer }} />
    const [editId, setEditId] = useState(null);
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

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { allMovies, loading, error } = useSelector((state) => state.films);
    console.log(allMovies);


    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      dispatch(updateUser({ id: editId, movieData: form }));
    } else {
      dispatch(addUser(form));
    }
    resetForm();
  };

  const resetForm = () => {
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

  const handleEdit = (movie) => {
    setForm(movie);
    setEditId(movie._id);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (<div className="body">
        <nav className="navbar navbar-expand-lg navbar-light px-3">
            {/* Logo / Icon */}
            <a className="navbar-brand d-flex align-items-center" href="#" onClick={() => navigate("/")}>
                <img src={imdb} alt="Logo" width="70" height="70" className="d-inline-block align-text-top" />
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
                        <a className="nav-link text-white fw-bold" href="#" onClick={() => navigate("/addMovie")}>Add Movie</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white fw-bold" href="#">Logout</a>
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

        {/* <div className="container mt-5">
            <p className="fs-3 fw-bold text-white"><span><div class="border-start border-5 border-warning p-3">
                Top Picks <MdOutlineArrowForwardIos /></div></span></p>
            <Carousel responsive={responsive}>
                {top.map((movie) => (
                    <div key={movie._id} onClick={() => navigate(`/${movie._id}`)} className="card" style={{ height: "500px", width: "200px" }}>
                        <img src={movie.image} class="card-img-top" alt={movie.name} />
                        <div class="card-body boxs">
                            <h5 class="card-title text-white"><span className="mod"><IoIosStar /></span> {movie.rating}</h5>
                            <h5 class="card-title text-white mt-3">{movie.name}</h5>
                            <button className="watch mt-3 text-primary fw-bold">Watch Options</button>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div> */}

        <div className="container">
           <div className="row gap-4">
             {allMovies.map((movie) => (
                <div key={movie._id} className="card bg-dark" style={{ height: "500px", width: "200px" }}>
                    <img src={movie.image} class="card-img-top mt-2" alt={movie.name} />
                    <div className="card-body boxs mb-3">
                        <h5 className="card-title text-white"><span className="mod"><IoIosStar /></span> {movie.rating}</h5>
                        <h5 className="card-title text-white mt-3">{movie.name}</h5>
                        <button className="watch mt-3 text-primary fw-bold" onClick={() => navigate(`/${movie._id}`)}>Watch Options</button>
                        <div className="d-flex align-items-center justify-content-between mt-3 gap-2"> 
                            <button className="changes" onClick={() => handleEdit(movie)}><FaEdit /></button>
                            <button className="changes"  onClick={() => handleDelete(movie._id)}  ><MdDelete /></button>
                        </div>
                    </div>
                </div>
            ))}
           </div>
        </div>

    </div>)
}

export default MainPage;

// function MoviePage() {
//     const dispatch = useDispatch();
//     const { list: films,allMovies } = useSelector((state) => state.films);
//     console.log(allMovies)

//     const [editId, setEditId] = useState(null);
//     const [form, setForm] = useState({
//         name: "",
//         release: "",
//         plot: "",
//         image: "",
//         actorName: "",
//         actorGender: "",
//         actorDob: "",
//         actorBio: "",
//         producerName: "",
//         producerGender: "",
//         producerDob: "",
//         producerBio: "",
//         rating: "",
//         trailer: "",
//     });

//     useEffect(() => {
//         dispatch(fetchUsers());
//     }, [dispatch]);

//     const handleChange = (e) =>
//         setForm({ ...form, [e.target.name]: e.target.value });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (editId) {
//             dispatch(updateUser({ id: editId, data: form }));
//         } else {
//             dispatch(addUser(form));
//         }
//         setForm({
//             name: "",
//             release: "",
//             plot: "",
//             image: "",
//             actorName: "",
//             actorGender: "",
//             actorDob: "",
//             actorBio: "",
//             producerName: "",
//             producerGender: "",
//             producerDob: "",
//             producerBio: "",
//             rating: "",
//             trailer: "",
//         });
//         setEditId(null);
//     };

//     const handleDelete = (id) => {
//         dispatch(deleteUser(id));
//     };
//     return (<>
//         <div className="container">
//             <div className="d-flex container align-items-center justify-content-center height-100vh">
//                 <div className="d-flex flex-column align-items-center">
//                     <img src={imdb} alt="Logo" width="70" height="70" className="d-inline-block align-text-top" />
//                     <form onSubmit={handleSubmit}>
//                         <div className="container text-center">
//                             <div className="row">
//                                 <div className="col-6 col-md-4">
//                                     <input type="text" className="form-control" placeholder="Movie Name" aria-label="Username" aria-describedby="basic-addon1" name="name"
//                                         value={form.name}
//                                         onChange={handleChange} />
//                                 </div>

//                                 <div className="col-6 col-md-4"><input type="text" className="form-control" placeholder="Release Year" aria-describedby="basic-addon1" name="release"
//                                     value={form.release}
//                                     onChange={handleChange} /></div>

//                                 <div className="col-6 col-md-4">
//                                     <input type="text" className="form-control" placeholder="Movie Plot" aria-describedby="basic-addon1" name="plot"
//                                         value={form.plot}
//                                         onChange={handleChange} />
//                                 </div>
//                             </div>
//                             <div className="row mt-3">
//                                 <div className="col-12">
//                                     <input type="text" className="form-control" placeholder="Movie Poster Link" aria-describedby="basic-addon1" name="image"
//                                         value={form.image}
//                                         onChange={handleChange} />
//                                 </div>
//                             </div>
//                             <div className="row mt-3">
//                                 <div className="col-6">
//                                     <input type="text" className="form-control" placeholder="Rating" aria-label="Username" aria-describedby="basic-addon1" name="rating"
//                                         value={form.rating}
//                                         onChange={handleChange} />
//                                 </div>

//                                 <div className="col-6"><input type="text" className="form-control" placeholder="Trailer Link" aria-describedby="basic-addon1" name="trailer"
//                                     value={form.trailer}
//                                     onChange={handleChange} /></div>

//                             </div>
//                             <div className="row mt-3">
//                                 <div className="col-6 col-md-4">
//                                     <input type="text" className="form-control" placeholder="Actor Name" aria-label="Username" aria-describedby="basic-addon1" name="actorName"
//                                         value={form.actorName}
//                                         onChange={handleChange} />
//                                 </div>

//                                 <div className="col-6 col-md-4"><input type="text" className="form-control" placeholder="Actor Gender" aria-describedby="basic-addon1" name="actorGender"
//                                     value={form.actorGender}
//                                     onChange={handleChange} /></div>

//                                 <div className="col-6 col-md-4">
//                                     <input type="text" className="form-control" placeholder="Actor Dob" aria-describedby="basic-addon1" name="actorDob"
//                                         value={form.actorDob}
//                                         onChange={handleChange} />
//                                 </div>
//                             </div>
//                             <div className="row mt-3">
//                                 <div className="col-12">
//                                     <input type="text" className="form-control" placeholder="Actor BIO" aria-describedby="basic-addon1" name="actorBio"
//                                         value={form.actorBio}
//                                         onChange={handleChange} />
//                                 </div>
//                             </div>
//                             <div className="row mt-3">
//                                 <div className="col-6 col-md-4">
//                                     <input type="text" className="form-control" placeholder="Producer Name" aria-label="Username" aria-describedby="basic-addon1" name="producerName"
//                                         value={form.producerName}
//                                         onChange={handleChange} />
//                                 </div>

//                                 <div className="col-6 col-md-4"><input type="text" className="form-control" placeholder="Producer Gender" aria-describedby="basic-addon1" name="producerGender"
//                                     value={form.producerGender}
//                                     onChange={handleChange} /></div>

//                                 <div className="col-6 col-md-4">
//                                     <input type="text" className="form-control" placeholder="Producer Dob" aria-describedby="basic-addon1" name="producerDob"
//                                         value={form.producerDob}
//                                         onChange={handleChange} />
//                                 </div>
//                             </div>
//                             <div className="row mt-3">
//                                 <div className="col-12">
//                                     <input type="text" className="form-control" placeholder="Producer BIO" aria-describedby="basic-addon1" name="producerBio"
//                                         value={form.producerBio}
//                                         onChange={handleChange} />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <button className="btn btn-primary w-100" type="submit">
//                                 {editId ? "Update" : "Add"}
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//             {films.map((film) => (
//                 <div key={film._id}>
//                     <p>{film.name}</p>
//                 </div>
//             ))}
//         </div>

//         <div className="container">
//             {allMovies.map((movie) => (
//                 <div className="card" key={movie._id}>
//                     <img src={movie.image} className="card-img-top" alt={movie.name} />
//                     <div className="card-body boxs">
//                         <h5 className="card-title text-white"><span className="mod"><IoIosStar /></span> {movie.rating}</h5>
//                         <h5 classna="card-title text-white mt-3">{movie.name}</h5>
//                         <button className="watch mt-3 text-primary fw-bold">Watch Options</button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </>)
// }