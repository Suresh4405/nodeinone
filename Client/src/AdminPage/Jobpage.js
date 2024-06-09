import React,{useState,useEffect} from 'react';
import { Table, message, Button } from 'antd';
import { GetAlljobs ,Deletejobs} from '../Pages/Apicalls/Jobs';
import Addjob from "./Addjob"
import moment from 'moment';
const Jobpage = () => {


    const [showjobform, setShowjobform] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [selectedjob, setSelectedjob] =useState(null);
    const [formType, setFormType] = useState("add");


    const getData = async () => {
      try {
        const response = await GetAlljobs();
        if (response.success) {
          setJobs(response.data);
        } else {
          message.error(response.message);
        }
      } catch (error) {
        message.error(error.message);
      }
    };
  
  
    const handleDelete = async (jobsId) => {
      try {
        const response = await Deletejobs({
          jobsId,
        });
        if (response.success) {
          message.success(response.message);
          getData();
        } else {
          message.error(response.message);
        }
        
      } catch (error) {
        message.error(error.message);
      }
    };
  

const jobdata=[
    {
    title:'jobtitle',
    dataIndex:'jobtitle'

},
{
    title:'Roles And Responsiblity',
    dataIndex:'Roles'
},
{
    title:'Skills',
    dataIndex:'Skills'

},
{
    title:'Education',
    dataIndex:'Education'
},
{
    title:'Experience',
    dataIndex:'Experience'
},
{
    title:'Location',
    dataIndex:'Location'
},
{
    title:'Salary',
    dataIndex:'Salary'
},
{
    title: 'posted Date',
    dataIndex: 'Posted',
    render: (text, record) => moment(record.Posted).format('DD-MM-YYYY'),
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (text, record) => (
      <div className="flex gap-1" style={{display:"flex"}}>

      <button style={{border:"none"}} onClick={() => {
            setShowjobform(true)
            setSelectedjob(record);
            setFormType("edit");;
          }}> <i class="ri-pencil-line" Button  style={{fontSize:"20px",color:"green"}}
         ></i></button>
       <button style={{border:"none"}} onClick={() => {
              handleDelete(record._id);
            }}>  <i class="ri-delete-bin-7-line"  style={{fontSize:"20px",color:"brown"}}  ></i></button>

      </div>
    ),
  },
]

useEffect(() => {
  getData();
}, []);

    return (
        <div>
             <div className='Addbutcomp'>
        <Button
          title="Add Jobs"
          variant="outlined"
          onClick={() => {
            setShowjobform(true);
            setFormType("add")
          }}
      className='Addbutcolor'  >
          Add Jobs
        </Button>
      </div>
      <div style={{marginTop:"15px"}}>
      <Table columns={jobdata} dataSource={jobs} />
      
      {showjobform && (

        <Addjob
        showjobform={showjobform}
          setShowjobform={setShowjobform}
          selectedjob={selectedjob}
          setSelectedjob={setSelectedjob}
          formType={formType}
           getData={getData}
        />
      )}
      </div>

        </div>
    );
}

export default Jobpage;
