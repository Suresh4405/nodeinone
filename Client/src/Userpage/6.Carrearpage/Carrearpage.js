import React,{useEffect,useState} from 'react';
import "./Carrear.css"
import {GetAlljobs} from "../../Pages/Apicalls/Jobs"
import Jobcardcomp from './Jobcardcomp';


const Carrearpage = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      async function fetchjobs() {
        try {
          const response = await GetAlljobs();
          if (response.success) {
            setData(response.data);
          } else {
            console.error(
              "Data fetched is not in the expected format:",
              response
            );
          }
        } catch (error) {
          console.log(error, "error in table fetch");
        }
      }
      fetchjobs();
    }, []);

    return (
        <div>
        <div className='Carrear-back'> 
        <div >
            <h1 className='dis-page'> Discover your </h1>
            <h1 className='dis2-page'>new career </h1>
            <br></br>
            <h3 className='dis3pa'>Explore opportunities</h3>
            <button className='Button-sear'>Search</button>

            <div className="card-align">
        <div div className="row">
          {data.map((dd, index) => (
            <div key={index} className="col-3">
              <Jobcardcomp
                jobtitle={dd.jobtitle}
                Skills={dd.Skills}
                Education={dd.Education}
                Experience={dd.Experience}
                Posted={dd.Posted}

              />
            </div>
          ))}
          <div style={{marginBottom:"80px"}}>

</div>
        </div>
        </div>
        </div>  
        </div>
        
        </div>
    );
}

export default Carrearpage;
