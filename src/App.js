import React, { Component } from 'react';
import AppleItem from "./AppleItem"
import './App.css';

class App extends Component {//类继承组件component
  constructor(props) {//React中constructor(props){},子类App必须在constructor方法中调用super方法，props作为参数
    super(props);//调用父类
    const index = 0;//定义变量，初始赋值
    const name = "红苹果 --";//定义变量，初始赋值
    const num = parseInt(Math.random() * 100000, 10); //定义变量，初始赋值  //取随机数
    const weight = parseInt(Math.random() * 1000, 10); //定义变量，初始赋值 //取随机数
    const obj = { name, num, weight, index };//定义数组，包含所有变量元素
    const list = [];//定义新的空数组
    list.push(obj);  //空数组调用push()方法，将数组obj作为一个元素增加到list数组尾部，并返回新的list数组长度，原数组改变 //初始化初始状态的数据
    this.state = {//当前组件，看成一个状态，可以被setstate刷新，对象字面量，，没有返回值
      list,  //list数组，已经push一次，有一个元素，包含所有苹果信息//保存子组件变量的对象
      number: list.length, //数字，赋值，list一个元素就是一个苹果，list长度就是多少个苹果，number只是一个表示字符 //当前苹果数量
      totalWeight: list[0].weight, //定义一个totalWeight表示字符，list[0]表示第一个苹果，.weight表示第一个苹果的重量  //当前苹果的总重量
      eatApples: 0, //定义一个字符，表示吃苹果数量，初值是0 //吃掉苹果的数量
      eatWeight: 0  //定义一个字符，表示吃苹果的重量，初值是0 //吃掉苹果的重量
    };
  }

  // handleAddClick = () => {}等价于//handleAddClick = function(){}//handleAddClick = constructor(){}?????猜想
  handleAddClick = () => {//构造函数，定义一个函数handleAddClick，对象字面量，无参，无返回值，功能：实现增加苹果
    const { list } = this.state;//es6的写法，最新，等价于const list=this.state.list;//周称呼为“解构”//与this.state.list建立关联
    const name = "红苹果 --";//定义变量，初始赋值
    const num = parseInt(Math.random() * 100000, 10);//定义变量，初始赋值  //取随机数
    const weight = parseInt(Math.random() * 1000, 10);//定义变量，初始赋值 //取随机数
    let index;//定义变量，未给定初始值，之后会赋值
    if (list.length !== 0) {//条件判断，list.length表示苹果的数量，！==0表示当前有不少于一个苹果

      //如果当前存在苹果，list.length-1表示减少一个苹果或者list数组下标index，list[list.length-1]表示数组末尾元素值value,index被赋值最后一个或者最新的苹果的下标index
      //被赋值的index表示数组obj[]苹果属性的index,为苹果的未定义字符，当前list.length为1
      index = list[list.length - 1].index;  //如果子组件的个数不为零,则取上一个组件的index,然后+1
      index++;//苹果计数
    } else {
      index = 0; //list.length==0,当前苹果为空，所以苹果数量为空 //如果子组件被清空,则重新计数
    }
    const obj = { name, num, weight, index };//定义数组，包含所有变量元素
    list.push(obj);  //空数组调用push()方法，将数组obj作为一个元素增加到list数组尾部，并返回新的list数组长度，原数组改变 //初始化初始状态的数据//保存新的数据到数组

    //等价于const totalWeigth  += list[index].weight;当前所有苹果重量求和
    const totalWeight = this.getTotalWeight(list)//,this.state.list,
    const number = list.length;//数字，赋值，list一个元素就是一个苹果，list长度就是多少个苹果，number只是一个表示字符 //当前苹果数量this.state.list.length
    this.setState({  //当前组件，数组属性刷新//刷新状态
      list,//list数组，已经push一次，有一个元素，包含所有苹果信息//保存子组件变量的对象
      number,//this.state.list.length当前苹果数量
      totalWeight//当前苹果总重量
    })
  }

  changeWeight = (currentWeight) => {//定义一个构造函数changeWeight，参数是currentWeight？？？？？？？？？？？？？？？？？？？，对象字面量this.setState({}),无返回值，功能：实现改变某个苹果重量
    const { list } = this.state;//es6的写法，最新，等价于const list=this.state.list;//周称呼为“解构”//与this.state.list建立关联
    list.forEach(item => {//list数组调用forEach()方法，对list数组所有元素进行条件处理，item元素单词
      if (item.weight === currentWeight) {//list数组元素苹果的重量===currentWeight,currentWeight未定义，？？？？？？？？？？？？
        item.weight = parseInt(Math.random() * 1000, 10);  //比较所有苹果，如果有相同的，重新重量赋值 //如果苹果的重量和我们点击的那个苹果的重量相等,就改变点击的那个苹果的重量
      }
    })
    const totalWeight = this.getTotalWeight(list)//,this.state.list,
    this.setState({  //当前组件，数组属性刷新//刷新状态
      list,//苹果重量发生改变，list数组元素随之发生改变，所以需要刷新
      totalWeight//苹果重量发生改变，list苹果总重量随之发生改变，所以需要刷新
    })
  }

  eat = (index) => {//定义一个构造函数eat，参数是index？？？？？？？？？？？？？？？？？？，对象字面量this.setState({}),无返回值，功能：实现吃掉某个苹果
    let { list, eatApples, eatWeight } = this.state;//es6的写法，最新，等价于const list=this.state.list;//周称呼为“解构”//与this.state.list+eatApples+eatWeight建立关联

    //list.value是苹果元素，苹果.index是元素下标====index,index???????????过滤出新的苹果组成的数组
    const hasEatWeight = list.filter((v) => v.index === index)//定义全新变量hasEatWeight,list数组调用filter()方法，过滤，返回新的数组hasEatWeight，元素满足判断条件，
    eatWeight += hasEatWeight[0].weight  //新的数组hasEatWeight第一个元素苹果的重量+一个初始值0 //过滤出吃掉的苹果,累计求和一共吃掉的重量 

    //定义全新的数组left,list数组调用filter()方法，过滤，返回新的数组left，元素满足判断条件，
    const left = list.filter((v) => {
      return v.index !== index;//===用来检测两个操作数是否严格相等,功能和==类似
    })
    const number = left.length;  //left数组的长度就是苹果数量，重新定义变量number//过滤出剩下的苹果,其长度就是当前苹果的数量
    eatApples++;  //吃掉一个苹果，两个新数组都会变动，吃掉苹果计数 //对每次吃掉的苹果进行计数
    const totalWeight = this.getTotalWeight(left)//,left新数组，剩余苹果重量
    this.setState({//当前组件，数组属性刷新//刷新状态
      list: left,//left数组传递给list
      number,//剩下苹果数量
      eatApples,//被吃掉的苹果数量
      totalWeight,//剩下苹果总的重量
      eatWeight//被吃掉的苹果总的重量
    })
  }


  ////定义一个构造函数getTotalWeight，参数是list，功能：实现吃掉某个苹果//list未定义？？？？？？？？？？？？？、
  //getTotalWeight=（）=> list.reduce(     ()=>()//函数运算   ,0 //初始值                                 )
  //list数组调用reduce（）方法，total初始值0，由0提供初始值，list数组所有元素.weight求和,返回值是一个数值总和
  getTotalWeight = (list) => list.reduce((total, item) => (total + item.weight), 0)

  render() {//render(){}
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
