import CalculateComponent from "./calculateField";
import InputComponent from "./inputField";
function DisplayComponent() {
    return (
      <div className ="display">

        <InputComponent/>
        <CalculateComponent/>
       
      </div>
    );
  }
  
  export default DisplayComponent;
  