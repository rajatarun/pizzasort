var PizzaList = React.createClass({
    render: function(){
        return(<ul className="list-group">
            {
                this.props.values.map(function(item) {
                return <li className="list-group-item" data-category={item} key={item}>{item}</li>
            })
    }
        </ul>)
    }
});
var Pizzas = React.createClass({
    getInitialState: function(){
        return {
            pizzas: [
            ]
        }
    },
    setPizzas:function(){
        this.setState({loading: true});
        fetch('http://localhost:3000/pizzas.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({pizzas: responseJson.pizzas})
                this.setState({loading: false});
            });
    },
    componentDidMount: function(){
        this.setPizzas();
    },
    textInputChange: function(event){
        var updatedList = this.state.pizzas;
        if(event.target.value){
            updatedList = updatedList.filter(function(item){
                return item.toLowerCase().search(
                        event.target.value.toLowerCase()) !== -1;
            });
            this.setState({pizzas: updatedList});
        }
        else{
            this.setPizzas();
        }
    },
    sortFilteredList: function(){
        this.setState({pizzas: this.state.pizzas.sort().reverse()})
    },
    render: function(){
        return this.state.loading?<div>Loading</div>:<div><form>
        <fieldset className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.textInputChange}/>
        <input type="button" value="sort pizzas" onClick={this.sortFilteredList} />
        </fieldset>
        </form><PizzaList values={this.state.pizzas} /></div>
    }
});
ReactDOM.render(<Pizzas/>, document.getElementById('root'));