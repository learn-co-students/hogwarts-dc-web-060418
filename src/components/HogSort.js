import React from 'react';

class HogSort extends React.Component {
    render() {
        return (
            <div>
                <div className="ui form">
                    <div className="inline fields">
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="sort" onClick={() => this.props.toggleSort(true)}/>
                                <label>Sort by name </label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="sort" onClick={() => this.props.toggleSort(false)}/>
                                <label>Sort by weight </label>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="ui checkbox">
                <input type="checkbox" checked={this.props.filterGreased} onChange={this.props.handleFilter}/>
                <label>Show only greased hogs </label>
            </div>

            </div>
        )
    }
}

export default HogSort;