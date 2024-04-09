import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Task from '../Tasks/Task';
import ProjectDetails from './ProjectDetails';
import ProjectTitle from './ProjectTitle';

function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await Axios.get('http://10.0.2.63:8000/');
                setProjectData(response.data.projectdata[1]);
            } catch (error) {
                console.error('Error fetching project data:', error);
            }

        }

        fetchData();
    }, []);


    // View Logs
    useEffect(() => {
        async function showLogs(id) {


        }
    }, []);



    return (
        <>
            <Navbar />
            {projectData && (
                <>
                    <ProjectTitle title={projectData.project.pname} />
                    <ProjectDetails
                        description={projectData.project.pdesc}
                        time={projectData.project.created_date}
                        Members={projectData.names.map(member => member.uname)}
                    />
                    <h3>Task</h3>

                    {projectData.tasks.map(task => (
                        <Task
                            key={task.tid}
                            title={task.tname}
                            description={task.tdesc}
                            Time={task.created_date}
                            CreatedBy={task.uname}
                            projectId={projectData.project.pid}
                        />
                    ))}

                </>
            )}
            <Footer />
        </>
    );
}

export default Project;
