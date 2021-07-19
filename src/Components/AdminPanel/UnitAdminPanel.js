import React from 'react';

const UnitAdminPanel = (props) => {
    
    const {title, description,status, category,_id } = props.single;
    return (
        <div className="card col-lg-2 col-md-4 col-sm-6 m-3 Style">
        <div className="card-body">
        <h5 className="card-title textStyle">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-title text-primary">Category: {category}</p>
        
        <select id="status" className="mb-2" defaultValue={status} required>
            <option value="pending">Pending</option>
            <option value="approve">Approve</option>
        </select>
      <input type="submit" className="btn btn-success" value="Submit" onClick={()=>props.handleStatusUpdate(_id)} />
     </div>
     </div>
    );
};

export default UnitAdminPanel;