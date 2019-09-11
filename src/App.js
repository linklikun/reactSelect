import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css'
const data = [
{name: '山西省', things: ['太原市','临汾市']},
{name: '山东省', things: ['济南市','青岛市']},
{name: '河南省', things: ['郑州市','洛阳市']},
];

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formselect:[{left:'',right:''}],
      arrEL:[0],
    };
  };

handleClicktj(e) {
  const arrELone = this.state.arrEL;
  const aindex = e.index+1;
  arrELone.splice(aindex,0,2);
  const obj = {left:'',right:''};
  const formselectone = this.state.formselect;
  formselectone.splice(aindex,0,obj);
  console.log(this.state.formselect);
  this.setState({
    arrEL:arrELone,
    formselect:formselectone,
  })
}

changeName(a,e){
  const leftname = e.target.value;
  const aindex = a.index;
  const formselectleft = this.state.formselect;
  formselectleft[aindex].left = leftname;
  console.log(this.state.formselect);
  this.setState({
    formselect:formselectleft,
  });
}

changeThings(a,e){
  const rightname = e.target.value;
  const aindex = a.index;
  const formselectright = this.state.formselect;
  formselectright[aindex].right = rightname;
  console.log(this.state.formselect);
  this.setState({
    formselect:formselectright,
  })
}

handleClicksc(e){
  const arrELsc = this.state.arrEL;
  arrELsc.splice(e.index,1);
  const formselectsc = this.state.formselect;
  formselectsc.splice(e.index,1);
  console.log(this.state.formselect);
  this.setState({
    arrEL:arrELsc,
    formselect:formselectsc,
  })
}

render() {
  const display2 = {
    display:this.state.arrEL.length >= 2 ? 'inline-block' :'none',
  }
  const display1 = {
    display:this.state.arrEL.length > 2 ? 'none' : 'inline-block',
  }
  return(
    <div className="box">
    {this.state.arrEL.map((item,index) => {
      return (
        <div key={index} className='form-group' >
          <select onChange={this.changeName.bind(this,{index})} value = {this.state.formselect[{index}.index].left} className="form-control">
            <option></option>
            {data.map((item,indexleft) => {
              return <option key={indexleft}>{item.name}</option>
          })}
          </select>
          {console.log({index}.index)}
          <select onChange={this.changeThings.bind(this,{index})}    value = {this.state.formselect[{index}.index].right} className="form-control">
            <option></option>
          {data.map((item,indexright) => {
        if( this.state.formselect[{index}.index].left !== '' ){
          if( this.state.formselect[{index}.index].left === item.name ){
            return item.things.map((item, indexrightone) =>
                <option key={indexrightone}>{item}</option>)
          }
        }
        })}
          </select>
        <button style={display1} className="btn btn-danger" onClick = {this.handleClicktj.bind(this,{index}) }>添加</button>
        <button style={display2} className="btn btn-danger" onClick = {this.handleClicksc.bind(this,{index})}>删除</button>
        </div>
        ) 
        })}
    </div>
    )
  }
}

export default App;
