import React, { Component } from 'react';

class HabitAddForm extends Component {
    inputRef = React.createRef();

    onSubmit = (e) => {
        e.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.inputRef.current.value ='';
        // this.formRef.current.reset();
        // ㄴ이거 잘안된다...
        // this.inputRef.current.focus();
    }

    render() {
        return (
            <div>
                <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
                    <input ref={this.inputRef} type="text" className="add-input" placeholder="Habit"/>
                    <button className="add-button">Add</button>
                </form>
            </div>
        );
    }
}

export default HabitAddForm;