import React, { Component } from 'react';
import '../App.css';

class HowToPage extends Component {

    onClickWebcam = e => {
        e.preventDefault();
        document.getElementById("webcam").classList.toggle("w3-show");
    };
    onClickVideo = e => {
        e.preventDefault();
        document.getElementById("video").classList.toggle("w3-show");
    };
    onClickAudio = e => {
        e.preventDefault();
        document.getElementById("audio").classList.toggle("w3-show");
    };
    onClickBrowse = e => {
        e.preventDefault();
        document.getElementById("browse").classList.toggle("w3-show");
    };
    onClickCreator = e => {
        e.preventDefault();
        document.getElementById("creator").classList.toggle("w3-show");
    };
    onClickAssignments = e => {
        e.preventDefault();
        document.getElementById("assignments").classList.toggle("w3-show");
    };

    howTo() {
        return (
            <div className="w3-container">
                <h1>How To Use This Site</h1>
                <p>
                    Emotions & Me is a website for learning about emotions. By using the features
                    on this site, you can learn about how to express and understand emotions. Click
                    on the links below to read more about how to use each feature.
                </p>
                <h3 className="w3-padding-top">Features</h3>
                <div className="w3-container">
                    <button onClick={this.onClickWebcam} className="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Emotions on Your Face</button>
                    <div id="webcam" className="w3-hide w3-padding">
                        <p>
                            Go to the "Emotions on Your Face" feature. Click "Start". The webcam
                            will then open and you will be able to see your own face on the screen.
                            On the right side of the screen, an emoji and emotion label that
                            corresponds to the emotion on your face will appear. Practice different
                            facial expressions to show different emotions.
                        </p>
                    </div>
                    <button onClick={this.onClickVideo} className="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Emotions on Their Faces</button>
                    <div id="video" className="w3-hide w3-padding">
                        <p>
                            Go to the "Emotions on Their Faces" feature. Paste a YouTube video link
                            into the input box at the top of the page. Click "Submit". The YouTube
                            video will take a short time to process. Once finished, the video will
                            begin to play back. Each face in the video will be detected and
                            annotated to display the emotion for each person.
                        </p>
                    </div>
                    <button onClick={this.onClickAudio} className="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Emotions in Your Voice</button>
                    <div id="audio" className="w3-hide w3-padding">
                        <p>
                            Go to the "Emotions in Your Voice" feature. Click "Record". Speak
                            into your computer's recorder for about 3 seconds, then click "Stop".
                            The recorded audio will be saved and displayed in a list on the left
                            side of the screen. Click the play icon for an audio clip. Emojis
                            will then appear on the right side of the screen which correspond to
                            the emotion detected in the audio clip which is playing. Once finished
                            with the audio clip, click "Delete" next to the recording.
                        </p>
                    </div>
                    <button onClick={this.onClickBrowse} className="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Emotions in Photos & Audio</button>
                    <div id="browse" className="w3-hide w3-padding">
                        <p>
                            Go to the "Emotions in Photos & Audio" feature. Click either "Picture"
                            or "Audio". On the next page, click any emotion option to browse or
                            listen to pictures or audio clips corresponding to that emotion. On
                            browsing pictures, click the left or right arrows buttons to cycle
                            through photos. On browsing audio clips, click "Play All" to play all
                            available audio clips or click individual play icons to play a single
                            recording.
                        </p>
                    </div>
                    <button onClick={this.onClickCreator} className="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Assignment Creator</button>
                    <div id="creator" className="w3-hide w3-padding">
                        <p>
                            Go to the "Assignment Creator" feature. Click either "Quiz Maker" or
                            "Tasklist Creator". In the Quiz Maker, give the quiz any name. Then
                            choose to add or remove any number of questions. To create a question,
                            input text for a question and 4 multiple choice answers. Then select
                            the correct answer of the 4 options (A, B, C, D). You can also include
                            photos and audio clips from the "Emotions in Photos & Audio" feature
                            in the quiz. This can be done by selecting "Add Photo" or "Add Audio".
                            Selecting either of these will open a modal with two dropdown options.
                            The first is to select the emotion and the second is to select an
                            individual photo or audio clip. Photos and audio can be included in
                            both questions and answer options. Once questions are completed, select
                            and add the students that will receive this quiz at the bottom of the
                            page. Then, finally, click "Save & Send Quiz" to save and send the
                            assignment to the students.
                        </p>
                        <p>
                            In the Tasklist Creator, give the tasklist any name. Then choose to add
                            or remove any number of tasks. The first task option is for the "Emotions
                            on Your Face" task. On adding this task, an emotion must be chosen. The
                            second task option is for the "Emotions on Their Faces" task. On adding
                            this task, a YouTube link must be given for the student completing the
                            task to use in the specified feature. The third task option is for the
                            "Emotions in Your Voice" task. For this task, an emotion must be
                            chosen. The forth task option is for the "Emotions in Photos & Audio"
                            task. For this task, an emotion and photos or audio must be chosen.
                            Lastly, a "Take Quiz" task can be added to tell the student completing
                            the tasklist to complete a quiz specified in this tasklist creator. A
                            quiz must already be created in order to add this task. Once the tasks
                            are created, select and add students that will receive this tasklist at
                            the bottom of the page. Then, finally, click "Save & Send Tasklist" to
                            save and send the assignment to the specified students.
                        </p>
                    </div>
                    <button onClick={this.onClickAssignments} className="w3-padding-16 w3-theme w3-button w3-block w3-left-align">My Assignments</button>
                    <div id="assignments" className="w3-hide w3-padding">
                        <p>
                            Go to the "My Assignments" feature. For students, the assignments assigned
                            to them by their teachers will appear in a list in this feature. For
                            teachers, the assignments they have created and sent to students will
                            appear in a list in this feature. Both students and teachers, can
                            complete assignments. On a quiz selection, you can complete the quiz.
                            Questions and answer options will be displayed. On a submission of a
                            correct answer, a correct indicator will be shown. At the end of the
                            quiz, the number correct out all of questions will be displayed and you
                            will have the option to complete the quiz again or to return to the
                            homepage.
                        </p>
                        <p>
                            On a tasklist selection, you can complete the tasklist. A checklist will
                            be displayed with each task including instructions and "GO!" links to take
                            the user to the specified feature. On a "GO!" click, the task will be
                            marked and saved as completed. On each "GO!" feature redirection, there
                            will be options to return to the tasklist to finish completing other tasks.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (this.howTo());
    }
}

export default HowToPage;