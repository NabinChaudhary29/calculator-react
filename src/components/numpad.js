import ButtonComponent from "./button";
function Button(props) {
    let calculatorFunction = props.calculatorFunction;
    return (
        <div className ="button">
        
            <ButtonComponent calculatorFunction={calculatorFunction} btnClass="operatorgrey" operator="AC"/>
            <ButtonComponent calculatorFunction={calculatorFunction} btnClass="operatorgrey" operator="±" />
            <ButtonComponent calculatorFunction={calculatorFunction} btnClass="operatorgrey" operator="%" />
            <ButtonComponent calculatorFunction={calculatorFunction} btnClass="operator" operator="/" />
            <ButtonComponent calculatorFunction={calculatorFunction} operator="7" />
            <ButtonComponent calculatorFunction={calculatorFunction} operator="8" />
            <ButtonComponent calculatorFunction={calculatorFunction} operator="9" />
            <ButtonComponent calculatorFunction={calculatorFunction} btnClass="operator" operator="x" />
            <ButtonComponent calculatorFunction={calculatorFunction} operator="4" />
            <ButtonComponent calculatorFunction={calculatorFunction} operator="5" />
            <ButtonComponent calculatorFunction={calculatorFunction} operator="6" />
            <ButtonComponent calculatorFunction={calculatorFunction} btnClass="operator" operator="-" />
            <ButtonComponent calculatorFunction={calculatorFunction} operator="1" />
            <ButtonComponent calculatorFunction={calculatorFunction} operator="2" />
            <ButtonComponent calculatorFunction={calculatorFunction} operator="3" />
            <ButtonComponent calculatorFunction={calculatorFunction} btnClass="operator" operator="+" />
            <ButtonComponent calculatorFunction={calculatorFunction} btnClass="zero" operator="0" />
            <ButtonComponent calculatorFunction={calculatorFunction}  operator="." />
            <ButtonComponent calculatorFunction={calculatorFunction} btnClass="operator" operator="=" />
            
            {/* <ButtonComponent class="operatorgrey" onclick="clearGar()" name="AC"/>
            <ButtonComponent class="operatorgrey" onclick="" name="±"/>
            <ButtonComponent class="operatorgrey" onclick="displayGar('%')" name="%"/>
            <ButtonComponent class="operator" onclick="displayGar('/')" name="÷"/>
            <ButtonComponent onclick="displayGar('7')" name="7"/>
            <ButtonComponent onclick="displayGar('8')" name="8"/>
            <ButtonComponent onclick="displayGar('9')" name="9"/>
            <ButtonComponent class="operator" onclick="displayGar('*')" name="x"/>
            <ButtonComponent onclick="displayGar('4')" name="4"/>
            <ButtonComponent onclick="displayGar('5')" name="5"/>
            <ButtonComponent onclick="displayGar('6')" name="6"/>
            <ButtonComponent class="operator" onclick="displayGar('-')" name="-"/>
            <ButtonComponent onclick="displayGar('1')" name="1"/>
            <ButtonComponent onclick="displayGar('2')" name="2"/>
            <ButtonComponent onclick="displayGar('3')" name="3"/>
            <ButtonComponent class="operator" onclick="displayGar('+')" name="+"/>
            <ButtonComponent class="zero" onclick="displayGar('0')" name="0"/>
            
            <ButtonComponent onclick="displayGar('.')" name="."/>
            <ButtonComponent class="operator" onclick="calculateGar('=')" name="="/> */}
        </div>
    );
}

export default Button;