import React, { useEffect, useState } from "react";
import "./App.css";
import Player from "./components/player";
import { buildings } from "./constants/buildingsLocations";
import Buildings from "./components/buildings/Buildings";
import ReactModal from "react-modal";
import Course from "./components/course/Course";
import { CourseTypes } from "./constants/CourseTypes";
import { getCourse } from "./utils/courseUtils";
import PlayerInfo from "./components/hud/playerInfo/PlayerInfo";
import SoundPlayer from "./components/soundPlayer/SoundPlayer";
import Chat from "./components/chat/Chat";

function App() {
  const [mapShown, setMapShown] = useState(true);
  const [selectedCourseId, setSelectedCourse] = useState(1);
  const [selectedCourseContent, setSelectedCourseContent] = useState<any>();

  useEffect(() => {
    setSelectedCourseContent(getCourse(selectedCourseId));
  }, [selectedCourseId]);

  return (
    <div className="App">
      <SoundPlayer />
      {mapShown ? (
        <div className={"map"}>
          <Player
            selectCourse={(selectedCourse: any) => {
              setSelectedCourse(selectedCourse);
              setMapShown(false);
            }}
            buildings={buildings}
            skin={"m1"}
          />
          <Buildings buildings={buildings} />
          <div className="player-info">
            <PlayerInfo
              avatar={
                "http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3"
              }
              nick="Airy Canine"
              rank="Pro"
              reputation="10"
              notes={{
                title: "Notatka",
                description: "Jakies pierdu pierdu tutaj piszę ;)",
              }}
              finishedCoursesIds={[1, 2, 3]}
            />
          </div>
        </div>
      ) : (
        <ReactModal
          isOpen={!mapShown}
          contentLabel="Inline Styles Modal Example"
          style={{
            content: {
              color: "ThreeDDarkShadow",
            },
          }}
        >
          <button onClick={() => setMapShown(true)}>WRACAM DO GRY</button>
          {selectedCourseId === CourseTypes.TAVERN ? (
            <Chat />
          ) : (
            <Course content={selectedCourseContent} />
          )}
        </ReactModal>
      )}
    </div>
  );
}

export default App;
