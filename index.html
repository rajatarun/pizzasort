<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
    <script src="https://unpkg.com/react@latest/dist/react.js"></script>
    <script src="https://unpkg.com/react-dom@latest/dist/react-dom.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
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
                "Sausage",
                "Cheese",
                "Pepperoni",
                "Hawaiian",
                "vegetable",
                "3 cheeSe",
                "macaroni",
                "Chicken",
                "Sausage and Pepperoni"
              ]
            }
        },
        componentWillMount: function(){
          this.setState({pizzas: this.state.pizzas})
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
            this.setState({pizzas: this.getInitialState().pizzas});
          }
      },
      sortFilteredList: function(){
          this.setState({pizzas: this.state.pizzas.sort().reverse()})
      },
      render: function(){
        return <div><form>
        <fieldset className="form-group">
        <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.textInputChange}/>
        <input type="button" value="sort pizzas" onClick={this.sortFilteredList} />
        </fieldset>
        </form><PizzaList values={this.state.pizzas} /></div>
      }
      });
      ReactDOM.render(<Pizzas/>, document.getElementById('root'));

    </script>
  </body>
</html>
