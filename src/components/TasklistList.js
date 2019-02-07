import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function TasklistList(props) {
    return (
        <div className="tasklistList">
            <h3 className="w3-center w3-margin-bottom">Tasklists</h3>
            <>
                {props.tasklists.map(tasklist => (
                    <div className="w3-row-padding w3-center" key={tasklist.tasklistName}>
                        <div className="w3-theme w3-card w3-container w3-hover-shadow w3-hover-light-gray"
                             onClick={props.onClick(tasklist.tasklistName)}>
                            <h4>{tasklist.tasklistName}</h4>
                        </div>
                    </div>
                ))}
            </>
        </div>
    );
}

TasklistList.propTypes = {
    tasklists: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default TasklistList;