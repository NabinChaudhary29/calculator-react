import DisplayComponent from "./display";
import Numpad from "./numpad";
function CalculatorComponent() {
    let calculatorFunction = (str) => {
        console.log(str);
    }
    return (
      <div className ="calculator">
        <DisplayComponent/>
        <Numpad calculatorFunction={calculatorFunction}/>
      </div>
    );
  }
  
  export default CalculatorComponent;