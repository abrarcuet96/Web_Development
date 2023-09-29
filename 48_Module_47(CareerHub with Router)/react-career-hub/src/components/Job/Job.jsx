import { MdLocationOn} from 'react-icons/md';
import { AiOutlineDollar  } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Job = ({ job }) => {
    const { id,logo, job_title,company_name,remote_or_onsite,location,job_type,salary} = job;
    return (
        <div className="card card-compact bg-base-100 border rounded-lg">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-semibold border rounded border-lime-500 mr-4 text-lime-500">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-semibold border rounded border-lime-500 mr-4 text-lime-500">{job_type}</button>
                </div>
                <div className='mt-4 flex mr-3'>
                    <h2 className='flex'><MdLocationOn className="text-2xl mr-2"></MdLocationOn>{location}</h2>
                    <h2 className='flex'><AiOutlineDollar className="text-2xl mr-2"></AiOutlineDollar>{salary}</h2>
                </div>
                <div className="card-actions">
                    
                    <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Job;