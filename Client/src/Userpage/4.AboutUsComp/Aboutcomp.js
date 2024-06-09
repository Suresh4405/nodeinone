import React from "react";
import "./about.css";
import programmer from "../../assets/programmer.png"

const Aboutcomp = () => {
  return (
    <div className="about-container">
      <h1 className="main-title">WHO WE ARE</h1>
      <span className="company-details">About Ninjascribe</span>

      <div className="About-container">
        <div className="image-About">
          <img className="company-image" src={programmer} alt="Ninjascribe" />
        </div>
        <div className="text-About">
          <h1 className="subtitle">Creating Technology Solutions That Enables<br></br>Bussiness TO Achive Success.</h1>
          <p className="paragraph">
           Dedicated and experienced software engineers, seasoned technical <br></br>
           professionals, enthusiastic designers, and imaginative mobile<br></br> application
           developers support NinjaScribe, a unique and young IT enterprise.
          </p>
          <p className="paragraph">
          We have been actively providing an extensive checklist of IT services to<br></br>
          various offshore IT clients worldwide. We oversee our clients' whole IT<br></br>
          environments by offering smart and reliable support services that build<br></br>
          innovation and creativity at every turn while incurring the minimal<br></br>expenditures.
          </p>
          <p className="paragraph">
          With a client-first approach whether big or small,we work to enhance<br></br>
          the importance of product and its users by exceeding the<br></br>
          expectations in creativity or functionality
          </p>
        </div>
      </div>
      <div style={{marginBottom:"40px"}}>
      </div>
    </div>
  );
};

export default Aboutcomp;
