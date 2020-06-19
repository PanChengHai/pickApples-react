import React, { Component } from 'react';
import AppleItem from "./AppleItem"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const index = 0;
    const name = "红苹果 --";
    const num = parseInt(Math.random() * 100000, 10);   //取随机数
    const weight = parseInt(Math.random() * 1000, 10);  //取随机数
    const obj = { name, num, weight, index };
    const list = [];
    list.push(obj);   //初始化初始状态的数据
    this.state = {
      list,  //保存子组件变量的对象
      number: list.length,  //当前苹果数量
      totalWeight: list[0].weight,   //当前苹果的总重量
      eatApples: 0,  //吃掉苹果的数量
      eatWeight: 0   //吃掉苹果的重量
    };
  }

  handleAddClick = () => {
    const { list } = this.state;
    const name = "红苹果 --";
    const num = parseInt(Math.random() * 100000, 10)
    const weight = parseInt(Math.random() * 1000, 10);
    let index;
    if (list.length !== 0) {
      index = list[list.length - 1].index;   //如果子组件的个数不为零,则取上一个组件的index,然后+1
      index++;
    } else {
      index = 0;  //如果子组件被清空,则重新计数
    }
    const obj = { name, num, weight, index };
    list.push(obj);  //保存新的数据到数组
    const totalWeight = this.getTotalWeight(list)
    const number = list.length;
    this.setState({  //刷新状态
      list,
      number,
      totalWeight
    })
  }

  changeWeight = (currentWeight) => {
    const { list } = this.state;
    list.forEach(item => {
      if (item.weight === currentWeight) {
        item.weight = parseInt(Math.random() * 1000, 10);   //如果苹果的重量和我们点击的那个苹果的重量相等,就改变点击的那个苹果的重量
      }
    })
    const totalWeight = this.getTotalWeight(list)
    this.setState({
      list,
      totalWeight
    })
  }

  eat = (index) => {
    let { list, eatApples, eatWeight } = this.state;
    const hasEatWeight = list.filter((v) => v.index === index)
    eatWeight += hasEatWeight[0].weight   //过滤出吃掉的苹果,累计求和一共吃掉的重量 
    const left = list.filter((v) => {
      return v.index !== index;
    })
    const number = left.length;  //过滤出剩下的苹果,其长度就是当前苹果的数量
    eatApples++;   //对每次吃掉的苹果进行计数
    const totalWeight = this.getTotalWeight(left)
    this.setState({
      list: left,
      number,
      eatApples,
      totalWeight,
      eatWeight
    })
  }

  getTotalWeight = (list) => list.reduce((total, item) => (total + item.weight), 0)

  render() {
    const { list, number, totalWeight, eatApples, eatWeight } = this.state;
    return (
      <div className="appleBasket">
        <div className="title">苹果篮子</div>
        <div className="stats">
            <div className="section">
              <div className="head">当前</div>
              <div className="content">{number}个苹果,{totalWeight}克</div>
            </div>
          <div className="section">
            <div className="head">已吃掉</div>
            <div className="content">{eatApples}个苹果,{eatWeight}克</div>
          </div>
        </div>
        {/* 通过数据生成子元素,数组有多少对象就有多少子元素,并向子元素传递方法和值 */}
        {list.map((value,key) => (
          <AppleItem 
            key={key} 
            changeWeight={weight => this.changeWeight(weight)} 
            eat={(index) => this.eat(index)} 
            apple={value} 
            index={value.index}
          />
        ))}
        <div className="btn-div">
          <button onClick={this.handleAddClick}>摘苹果</button>
        </div>
      </div>
    );
  }
}

export default App;
