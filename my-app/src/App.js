
import './App.css';
/*
  리액트란? 컴포넌트다
  UI를 구축하는 JS"라이브러리"겸 프레임워크. 동적으로 사용자가 보게될 화면을 꾸밀수 있다.

  컴포넌트?
  Ui구성을 확장성있고, 유연하게 만들어주기 위해 만들어짐
  어떻게? 화면을 이루는 구성요서 하나하나를 "컴포넌트"로 만들어서 재사용성을 늘렸다.

  리액트에서는 버튼,폼,다이얼로그,화면 모든것들을 컴포넌트로 표현
  
*/
import LifecycleUpdate from './01_Lifecycle';
import PropsDatatyps from './02_PropsDataType';
/**
 * 
 * JSX(JavascriptXml)문법 : javascript의 문법 안에서 HTML요소가 함께들어가 있는 형태의 언어.
 * 리액트에서 ui를 구성하기 위해 보편적으로 사용되는 문법. 자바스크림터의 문법을 통해HTML 요소를 생성하는 역할을함
 * 
 * documnet.createElement("div")(명령적 방식)
 * let body = document.querySelector("body");
 *  let div = document.querySelector("div");
 *  let h2 = document.querySelector("h2");
 * 
 * body.appendChid(div.appendChild(h2));
 * 
 * 따라서 개발자는 복잡한 자바스크립트 코드를 짤 필요 없이 동적을 추가되는 DOM요소를 단순 코드 선언만으로 만들수 있다 
 * 
 * 내가 작성한 JSX코드가 실제로 실행될때 리액트가 브라우저에서 구동되는 자바스크립트 코드로 자동으로 컴파일되면서
 * 구동이된다
 */
function App() {
  return (
    // <h2>start react</h2>여기는 js영역
   <div>
    {/* jsx문법영역 안에서 주석을 사용하는 방법*/}
    {/* <h2>Hello World</h2> */}
    {/* <h2>start react</h2> */}
    {/* 임포트해온 컴포넌트 클래스를 그대로 태그(마크업)으로써 사용하면 된다. */}
      {/* <LifecycleUpdate prop_value="From App.js"></LifecycleUpdate> */}
      {/* 
        props? 부머컴호넌트가 자식 컴포넌트에 넘겨주는 객체 형태의 데이터({kew:value})
        자식 컴포넌트의 시작태그에 작성하는 ㄴ속성은 key값으로 , 속성값은 value값의 형태로 넘어간다.
      */}
      <PropsDatatyps 
      String="react" 
      Number={200}
      Boolean
      Array={[0,2,8]}
      ObjectJson={{React:"리액트",today:"20230510"}}
      Function={console.log("Function Props")}
      StringDefault
      ></PropsDatatyps>
   </div>
  );
}

export default App;
