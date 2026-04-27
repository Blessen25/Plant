import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_one">
        <img src="/Assets/logo/plantyxlogo.jpg" alt="Planty'x Logo" loading='lazy'/>
      </div>
      <div className="footer_two">
        <p className='text-normal'>Help</p>
        <p className='text-normal'>Contact Us</p>
        <p className='text-normal'>Privacy & Terms</p>
      </div>
      <div className="footer_three">
        <i className="fa-brands fa-facebook icon-md"></i>
        <i className="fa-brands fa-instagram icon-md"></i>
        <i className="fa-brands fa-twitter icon-md"></i>
      </div>
    </footer>
  );
};