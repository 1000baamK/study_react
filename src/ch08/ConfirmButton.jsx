import React, {useState} from "react";

//class 컴포넌트
// class ConfirmButton extends React.Component{
//     constructor(props){
//         super(props);

//         this.state = {
//             isConfirmed: false
//         };

//         // this.handleConfim = this.handleConfim.bind(this);

//     }

//     // handleConfirm(){
//     //     this.setState((prevState) => ({
//     //         isConfirmed: !prevState.isConfirmed
//     //     }));
//     // }
//     handleConfirm = () => {
//         this.setState((prevState) => ({
//             isConfirmed: !prevState.isConfirmed
//         }));
//     }

//     render(){
//         return(
//             <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
//                 {this.state.isConfirmed ? "확인됨" : "확인하기"}
//             </button>
//         );
//     }
// }

//function 컴포넌트
function ConfirmButton(props){
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((previsConfirmed) => !previsConfirmed);
    };

    return(
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton;