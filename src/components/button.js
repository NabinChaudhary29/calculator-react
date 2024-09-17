function ButtonComponent(props) {
    let calculatorFunction = props.calculatorFunction;
    return (
       <button onClick={() => {calculatorFunction(props.operator)}} className={props.btnClass}>{ props.operator}</button>
    );
  }
  
  export default ButtonComponent;
  