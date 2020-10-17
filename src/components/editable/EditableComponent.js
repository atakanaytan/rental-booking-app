
import React from 'react';


class EditableComponent extends React.Component {

    constructor({entity, field}) {
        super();

        this.state = {
            value: entity[field],
            originValue: entity[field],
            isActiveInput: false
        }
    }

    update = () => {
        const { value, originValue } = this.state;
        const { onUpdate, field} = this.props;

        if (value !== originValue) {
            onUpdate(
             {[field]: value},
             () => this.setState({isActiveInput: false, originValue: value}),
             () => this.setState({isActiveInput: false, value: originValue}))
        }
    }

    activateInput = () => this.setState({isActiveInput: true});

    disableInput  = () =>
     this.setState({isActiveInput: false, value: this.state.originValue});

    handleChange = event => {
        this.setState({value: event.target.value})
    }

    handleKeyDown = event => {
        if (event.key === 'Enter') {
            this.update();
        } else if (event.key === 'Escape') {
            this.disableInput();
        }
    }

    renderComponentView = () => {
        const { value, isActiveInput} = this.state;
        const { className, transformView, renderComponent } = this.props; 
        if (isActiveInput) {
            return (
              <>
               { renderComponent(value, this.handleChange, this.handleKeyDown) }
               <div className="button-container">
                <button 
                    onClick={this.update}  
                    className="btn btn-success btn-success">Save
                </button>
                 <button 
                    onClick={this.disableInput}  
                    className="btn btn-danger btn-editable">Cancel
                </button>
               </div>
              </>
            )
        } 
        
        return (
            <>
             <span 
                className={`editable-item ${className}`}>
                {transformView ? transformView(value) : `${value}` }
             </span>
             <div className="button-container">
                <button 
                   onClick={this.activateInput}  
                   className="btn btn-warning btn-editable">Edit
                </button>
             </div>
            </>
        )
     }
 
     render() {
         const { inline } = this.props;
         return (
             <div className={`editable-component ${inline ? 'editable-component-inline' : ''}`}>
                {this.renderComponentView()}
             </div>   
         )
     }  
}

export default EditableComponent;