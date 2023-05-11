/*
    함수형 컴포넌트
    return값이 있는 function과 동일한 구조의 컴포넌트.

    state가 없고, 생명주기함수(construtor, render, component...)를 사용할 수 없음
    부모컴포넌트에게 props와 context를 파라미터로 전달받아 사용하고
    redner함수가 없기 때문에 return만 사용하여 화면을 그려준다

    함수형 컴포넌트에서 state와 생명주기함수의 기능을 사용해야하는 경우 hook 추가한다.

    대표적인 hook함수 
    1) userState() : state변수값을 선언하게 해주는 메서드
    2) userEffect() : 생명주기 함수 중 componentDidMount와 동일한 역할을 함
*/
import {userState, userEffect} from 'react';

function FunctionComponent(props){
    
   const [stateString , setString] = userState('react');

   /*
        userState메서드는 길이 2짜리 배열을 반환해줌. 이를 구조분해할당을 이용하여 반환된 값을 저장
        반환된 값을 담아줄 첫번째 인자(stateString) : state의 변수명 (state.stateString)
        반환된 값을 담아줄 두번째 인자(setString)   : stateString값을 변경해주는 함수를 저장 (setState()와 비슷한 역할)
   */

    userEffect( () => {
        console.log("userEffect 테스트");
    });

    /*
        userEffect 생명주기함수 중 componentDidMount와 동일한 기능을 수행함.
        return 되는 html코드들이 화면에 그려진 후(랜더링완료된 후) 실행됨.
        최초 페이지 로딩될때 한번 실행되고, setString() 함수로 state값이 변경되면 다시한번 랜더링되면서 랜더링 완료 후
        재실행된다.
    */

        return(
            <div style={{padding:"0px"}}>
                <h2>{stateString}</h2>
                <button onClick={ () => setString('setContents 테스트')}>클릭</button>
            </div>
        )
       
}

export default FunctionComponent;