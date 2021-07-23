import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import './SingleCandidateList.css';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const SingleCandidateList = (props) => {
    const { name, email, mobileNo, address, source, resume} = props.list;
    const count = props.index + 1;
    return (
        <>
            <div className="col-12">
               <div className={useStyles.root}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography className={useStyles.heading}>Candidate {count}</Typography>
                        </AccordionSummary>
                        <AccordionDetails className="accordion-design">
                            <Typography>
                               <div>
                                  <p>Name: <span>{name}</span></p>
                                  <p>Email: <span>{email}</span></p>
                                  <p>Phone: <span>{mobileNo}</span></p>
                                  <p>Address: <span>{address}</span></p>
                                  <p>Get To Know The Company: <span>{source}</span></p>
                                  <p><a href={`https://talenthuntersbd.herokuapp.com/${resume}`} target="_blank" rel='noreferrer noopener'><FontAwesomeIcon className="pdf-icon" icon={faFilePdf} /></a></p>
                               </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </>
    );
};

export default SingleCandidateList;