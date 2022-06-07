const Ads = ({ className }) => {
  let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
  return <div className={'ads ' + className}>
    <div>
  <div className="slideshow-container">
    <div className="mySlides fade">
      <div className="numbertext">1 / 3</div>
      <img src="https://images7.alphacoders.com/110/thumbbig-1105631.webp" />
    </div>
    <div className="mySlides fade">
      <div className="numbertext">2 / 3</div>
      <img src="https://images5.alphacoders.com/109/thumbbig-1099191.webp" />
    </div>
    <div className="mySlides fade">
      <div className="numbertext">3 / 3</div>
      <img src="https://images8.alphacoders.com/112/thumbbig-1129503.webp" />
    </div>
  </div>
  <br />
  <div style={{textAlign: 'center'}}>
    <span className="dot" /> 
    <span className="dot" /> 
    <span className="dot" /> 
  </div>
</div>

  </div>;
  
};

export default Ads;
