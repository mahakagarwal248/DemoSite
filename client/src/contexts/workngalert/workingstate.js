import Workingcontext from "./workingcontext";

const WorkingState = (props) => {
  const notworkingalert = () => {
    alert("website is in developoning state");
  };

  return (
    <Workingcontext.Provider value={{ notworkingalert }}>
      {props.children}
    </Workingcontext.Provider>
  );
};
export default WorkingState;
