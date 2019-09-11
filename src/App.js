import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css'
const data = [
  {
    name: '山西省',
    children: ['太原市','临汾市']
  },
  {
    name: '山东省', children: ['济南市','青岛市']
  },
  {
    name: '河南省', children: ['郑州市','洛阳市']
  },
]

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      str1:[{left:'',right:''}],
      value1:[0],
    }
  }

handleClickAdd(e) {
  const value1one = this.state.value1;
  const aindex = e.index+1
  value1one.splice(aindex,0,2)
  const obj = {left:'',right:''}
  const str1one = this.state.str1
  str1one.splice(aindex,0,obj)
  console.log(this.state.str1)
  this.setState({
    value1:value1one,
    str1:str1one,
  })
}

handleOnChangeLeft(a,e){
  const leftname = e.target.value
  const aindex = a.index
  const str1left = this.state.str1
  str1left[aindex].left = leftname
  console.log(this.state.str1)
  this.setState({
    str1:str1left,
  })
}

handleOnChangeRight(a,e){
  const rightname = e.target.value
  const aindex = a.index
  const str1right = this.state.str1
  str1right[aindex].right = rightname
  console.log(this.state.str1)
  this.setState({
    str1:str1right,
  })
}

handelOnClickDel(e){
  const value1sc = this.state.value1
  value1sc.splice(e.index,1)
  const str1sc = this.state.str1
  str1sc.splice(e.index,1)
  console.log(this.state.str1)
  this.setState({
    value1:value1sc,
    str1:str1sc,
  })
}

render() {
  const display2 = {
    display:this.state.value1.length >= 2 ? 'inline-block' :'none',
  }
  const display1 = {
    display:this.state.value1.length > 2 ? 'none' : 'inline-block',
  }
  return(
    <div className="box">
    {this.state.value1.map((item,index) => {
      return (
        <div key={index} className='form-group' >
          <select onChange={this.handleOnChangeLeft.bind(this,{index})} value = {this.state.str1[{index}.index].left} className="form-control">
            <option></option>
            {data.map((item,indexleft) => {
              return <option key={indexleft}>{item.name}</option>
          })}
          </select>
          {console.log({index}.index)}
          <select onChange={this.handleOnChangeRight.bind(this,{index})}    value = {this.state.str1[{index}.index].right} className="form-control">
            <option></option>
          {data.map((item,indexright) => {
        if( this.state.str1[{index}.index].left !== '' ){
          if( this.state.str1[{index}.index].left === item.name ){
            return item.children.map((item, indexrightone) =>
                <option key={indexrightone}>{item}</option>)
          }
        }
        })}
          </select>
        <button style={display1} className="btn btn-danger" onClick = {this.handleClickAdd.bind(this,{index}) }>添加</button>
        <button style={display2} className="btn btn-danger" onClick = {this.handelOnClickDel.bind(this,{index})}>删除</button>
        </div>
        ) 
        })}
    </div>
    )
  }
}

export default App;
