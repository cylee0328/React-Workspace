import datatype from'prop-types';
import {Component} from 'react';
/*
    prop-types?
    일반적으로 자바스크립트의 유연한 특성은 개발을 하는데 있어 도움을 주지만,
    관리해야할 파일이 많아지면 생상성 및 유지보수성이 떨어진다라는 단점이 있음

    이런점 때문에 명확한 자료형으로 개발을 해야하는 타입스크립트가 각광받고 있는 추세인데,
    반드시 자바스크립트로 개발을 해야만 하는 상황에서는 이 문제를 PropTypes를 활요하여 해결한다.

    PropTypes는 부모로부터 전달받은 prop데이터의 type(자료형)을 검사해준다
    작식 컴포넌트에서 명시해 놓은 데이터 타입과 부모로부터넘겨 받은데이터 타입이 일치하지 않으면 
    콘솔에 경고가 띄어진다.
*/
class PropsDatatyps extends Component{
    render(){
        let {String,Number,Boolean,Array,ObjectJson,Function, IsRequired}=this.props;
        /**객체를 변수로 저장하는 es6 방식(구조 분해 할당) */

        return(
            <div style={{padding:"0px"}}>
                <p>StringProps:{String}</p>
                <p>NumberProps:{Number}</p>
                {/* boolean의 기본값은 true */}
                <p>BooleanProps:{Boolean.toString()}</p>
                <p>ArrayProps:{Array.toString()}</p>
                <p>ObjectJsonProps:{JSON.stringify(ObjectJson)}</p>
                <p>FunctionProps:{Function}</p>
                {/* <p>StringDefaultProps : {StringDefault}</p> */}
            </div>
        )
    }
}
PropsDatatyps.propTypes={
    //String : datatype.number ,/**자료형 불일치 에러. 대입된 값의 자료형을 명확하게 전달해줘야함 */
    String : datatype.string,
    Number : datatype.number,
    Boolean : datatype.bool,
    Array : datatype.array,
    ObjectJson : datatype.object,
    //객체내부에 자료형을 선언할때는 shape유형을 사용함
    ObjectJson : datatype.shape({
        React : datatype.string,
        today : datatype.number
    }),

    Function : datatype.func,
    isRequired : datatype.string.isRequired 
    // PropsDatatyps.StringDefaultProps={
    //     StringDefaul:"기본값",
    // }
}

/**
 * PropTypes 사용시 속성값의 타입만 알아도 해당 컴포넌트의 구조를 어느정도 파악하기 쉽다라는 장점이 있음
 *  따라서 각 컴포넌트(모듈)의 퀄리티를 높이이기 위해서 PropType사용을 권장한다.
 * 
 */

export default PropsDatatyps;