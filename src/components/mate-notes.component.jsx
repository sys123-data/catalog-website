import React from 'react';
import { VictoryBar,VictoryChart ,VictoryAxis, VictoryLine,VictoryTheme} from 'victory';
import axios from 'axios';


const config = {
    method: 'get',
    url: 'http://127.0.0.1:8080/api/catalog',
    };
let obj;
let j = 1;
let data = [];
let check_mate_data= ['AM1','AM2','GAD','AN','MCM','ED','TP','AC','MS','EFM','ANA','AR','TSCO1','MDC','TLH','SDGD','TSCO2','AF','AS','FB','Cript','TAEFSS','EISS','TITC','CVAI','AL','Fr','TAPI'];

class MateDataChart extends React.Component {
  state ={
    datax:[],

  };

  componentDidMount(){
    axios(config)
    .then(function (response) {
        console.log(typeof response)
        obj  = response.data;
        for (const key in response.data[0]){
            
            if(check_mate_data.includes(Object.keys(response.data[0])[j]) && response.data[0][key]>4)
               {data.push({'x':j, 'y':response.data[0][key]});j++;}
            
        }
        console.log(data);
        this.setState({datax: data});
    
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
            theme={chartTheme}
            domain={{x: [0, 30], y: [0, 10]}}>
                <VictoryAxis 
                orientation="top"
                />
                <VictoryAxis dependentAxis
                orientation="left"
                invertAxis
                />
        <VictoryLine
        style={{
            data: { strokeWidth: 3,stroke: "blue" },
            
           }}
          data={this.state.datax}
        />
        </VictoryChart>)
        :null;

  }
}
  

export default MateDataChart;