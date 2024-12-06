import "../App.css";

const MyFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Meteo.it, tutto cio di cui hai
          bisogno.
        </p>
      </div>
    </footer>
  );
};

export default MyFooter;
