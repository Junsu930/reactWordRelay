const React = require('react');
const { Component } = React;

class WordRelay extends Component {
    state = {
        word : '김밥말이',
        value : '',
        result : '',
    };

    onSubmitForm = e =>{
        e.preventDefault();
        if(this.state.word[this.state.word.length-1] === this.state.value[0]){
            this.setState({
                word : this.state.value,
                result : '딩동뎅',
                value : '',
            });
            this.input.focus();    
        }else{
            this.setState({
                result : '떙',
                value : '',
                

            });
            this.input.focus();
        }
    };

    onChange = e =>{
        this.setState({ value : e.target.value})
    };

    input;

    onRefInput = c =>{
        this.input = c;
    }

    render(){
        return(
            <>
                <div>{this.state.word}</div>
                <form onSubmit = {this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChange}/>
                    <button>입력</button>    
                </form>
                <div>{this.state.result}</div>       
            </>
        );
    }
}

module.exports = WordRelay;