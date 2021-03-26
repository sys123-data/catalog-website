import React from 'react';
import { VictoryBar,VictoryChart ,VictoryAxis, VictoryLine,VictoryTheme} from 'victory';
import axios from 'axios';


const config = {
    method: 'get',
    url: 'http://127.0.0.1:8080/api/catalog',
    };
let obj;
let j = 0;
let data = [];

class AllDataChart extends React.Component {
  state ={
    datax:[],
    up: false
  };

  componentDidMount(){
    axios(config)
    .then(function (response) {
        console.log(typeof response)
        obj  = response.data;
        for (const key in response.data[0]){
            if (j === 0 ){j++; continue;}
           
            data.push({'x':j, 'y':response.data[0][key]});
            j++;
        }

        this.setState({datax: data});
        this.setState({up: true});
    }.bind(this));
  }
 

  render(){
     const chartTheme = {
        axis: {
          style: {
            tickLabels: {
              // this changed the color of my numbers to white
              fill: 'yellow',
            },
          },
        },
      };
      return this.state.datax.length?
        (<VictoryChart
            theme={ chartTheme }
            domain={{x: [0, 51], y: [0, 10]}}>
                <VictoryAxis 
                orientation="top"
                />
                <VictoryAxis dependentAxis
                orientation="left"
                invertAxis
                />
        <VictoryLine
        style={{
            data: { stroke: "blue" },
            
           }}
          data={this.state.datax}
        />
        </VictoryChart>)
        :null;

  }
}
  

export default AllDataChart;