import React, {Component} from 'react'

class FilterAndSortForm extends Component {
    render() {
        return(
           <div> 
                <form>
                    <select onChange={(event) => this.props.handleFilterSelection(event.target.value)}>
                        <option value="all">All</option>
                        <option value="name">Name</option>
                        <option value="weight">Weight</option>
                    </select>
                </form>

                Greased<input onChange={(event) => this.props.handleGreasedToggler(event.target.checked)} type="checkbox"/>
            </div>
        )
    }
}

export default FilterAndSortForm;