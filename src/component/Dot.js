import react from "react";

function Dots({ ActiveIndex, onClick, imageSlider }) {
  return (
    <div className="all-dots">
      {imageSlider.map((slide, index) => (
        <span
          key={index}
          className={`${ActiveIndex === index ? "dot active-dot" : "dot"}`}
          onClick={()=>onClick(index)}
        ></span>
      ))}
    </div>
  );
}
export default Dots