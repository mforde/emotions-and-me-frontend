import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Link from "react-router-dom/es/Link";

function TasklistList(props) {
        return (
        <div className="tasklistList">
            <h3 className="w3-center w3-margin-bottom w3-padding-top">Tasklists</h3>
            <>
                {props.tasklists.map(tasklist => (
                    <div className="w3-row-padding w3-center w3-display-container" key={tasklist.tasklistName}>
                        <Link to={{
                            pathname: '/tasklistpage',
                            state: {tasklistName: tasklist.tasklistName, tasklistData: tasklist.tasklistData}
                        }} style={{textDecoration: 'none'}}>
                            <div className="w3-theme w3-card w3-container w3-hover-shadow w3-hover-light-gray w3-threequarter">
                                <h4>{tasklist.tasklistName}</h4>
                            </div>
                        </Link>
                        <div className="w3-display-right w3-quarter">
                            <button type="button" className="w3-button w3-hover-red" onClick={() => props.remove(tasklist.tasklistName)}>Remove Tasklist</button>
                        </div>
                    </div>
                ))}
            </>
        </div>
    );
}

TasklistList.propTypes = {
    tasklists: PropTypes.array.isRequired,
    remove: PropTypes.func.isRequired
};

export default TasklistList;