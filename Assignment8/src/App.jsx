import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const movies = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Movie ${i + 1}`,
  image: `https://via.placeholder.com/150?text=Movie+${i + 1}`,
}));

function MovieList() {
  return (
    <div className="p-6 flex flex-wrap gap-4 justify-center">
      {movies.map((movie) => (
        <Link
          key={movie.id}
          to={`/movie/${movie.id}`}
          className="border p-4 rounded-lg text-center w-1/5"
        >
          <img src={movie.image} alt={movie.title} className="mb-2 w-full" />
          <h2 className="text-lg font-bold">{movie.title}</h2>
        </Link>
      ))}
    </div>
  );
}

function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));
  const navigate = useNavigate();

  return (
    <div className="p-6 text-center">
      <img src={movie.image} alt={movie.title} className="mx-auto mb-4" />
      <h1 className="text-2xl font-bold mb-4">{movie.title}</h1>
      <button
        onClick={() => navigate(`/book-seat/${id}`)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Book Seat
      </button>
    </div>
  );
}

function BookSeat() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/booking-confirmation/${id}`, {
      state: { ...form, bookingId: uuidv4() },
    });
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-bold mb-4">Book Your Seat</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile"
          value={form.mobile}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

function BookingConfirmation() {
  const { state } = useLocation();
  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-bold">Booking Confirmed!</h2>
      <p className="text-lg">
        Booking ID: <strong>{state?.bookingId}</strong>
      </p>
      <p>Name: {state?.name}</p>
      <p>Email: {state?.email}</p>
      <p>Mobile: {state?.mobile}</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/book-seat/:id" element={<BookSeat />} />
        <Route
          path="/booking-confirmation/:id"
          element={<BookingConfirmation />}
        />
      </Routes>
    </Router>
  );
}
