import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';

function ProjectTitle(props) {

    return (
        <>

            {/* <div>
                <h3>Project Title</h3>
                <p>Status</p>
                <button>Create Task</button>
            </div> */}

            <div style={{ borderRadius: '0.8em', width: '80vw', backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '30px ', margin: '10px 0' }}>
                {/*Project Details*/}
                <div style={{ margin: '0 0 25px 0', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '65vw' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <h2>{props.title}</h2>
                        <EditIcon style={{ margin: '0 0 3px 13px', fontSize: '22px', cursor: 'pointer' }} />
                    </div>
                    <div style={{ backgroundColor: '#82C5F4', width: '100px', height: '30px', borderRadius: '1em' }}><p style={{ color: 'white' }}>ongoing</p></div>
                    {/* #C2F9A8 */} {/*color:'green'*/}
                </div>

                <div>
                    <button> <AddIcon />Create Task</button>
                    {/* <button style={{ margin: '0 10px' }}>Completed</button> */}
                </div>
            </div>
        </>
    )
}

export default ProjectTitle;
