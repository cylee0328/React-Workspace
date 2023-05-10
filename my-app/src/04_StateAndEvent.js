import{Component} from 'react';
/**
 * state? 컴포넌트 내부에서 전역 변수로 활용하기 위해 사용되는 속성.
 * 
 * 리액트 이벤트 부여방식. JSX함수로 태그에 인라인 방식으로 on+이벤트명(click,load)부여가능
 */
/**
 * 부모로부터 전달받은 props를 전역변수에 저장후 버튼클릭시 state에담긴 값을 변경해주면서 화면에 출력해보는기능을 추가
 */
class StateAndEvent extends Component{

    constructor(props){
        super(props);
        this.state={
            StateString : '클릭전',
            flag  :true
        }
    }

    stateChange = () => {   
        // if(flag == 'click'){
        //     this.state.StateString="클릭됨";
      
        // }
        // console.log("state? ?" + this.state.StateString);
        // this.forceUpdate();
        //화면을 강제로 새로고침하는 방식
        //화면 변환이 불필요한 경우에도 실행시키게 되므로 비효울적인 방식.

        //setState()메소드 활용
        //state의 상태도 변경시키면서 화면에 변겨된 값을 불러오는 방법
        //setState사용시 컴포넌트의 State값이 변경됐다고 간주하여 render메서드를 자동으로 호출한다.
       
            this.setState({flag:!this.state.flag})
        
    }

    render(){
        console.log("lender 호출");
        return(
            <div style={{padding:"0px"}}>
                <button onClick={(e) => this.stateChange('click',e)}>클릭</button>
                현재 state ::: StateString : {this.state.flag ?"클릭됨":"클릭전"}
            </div>
        )
    }
}
export default StateAndEvent;