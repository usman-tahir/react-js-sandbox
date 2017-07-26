import React from 'react';

class ListTable extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.editItem = this.editItem.bind(this);
    }

    render() {
        const {items, addItem} = this.props;

        return(
            <div>
                <table>
                    <tbody>
                        {map(items, (item, index) => {
                            return(
                                <tr key={index}>
                                    <td>
                                        <input onChange={this.editItem.bind(null, index)} type="text" value={item}/>
                                    </td>
                                    <td>
                                        <button onClick={this.removeItem.bind(null, index)} className="delete">
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <button onClick={this.addItem} className="add">
                    <i className="fa fa-plus"></i>
                </button>
                <InfoBox/>
            </div>
        );
    }

    addItem() {

    }

    removeItem() {

    }

    editItem() {

    }
}