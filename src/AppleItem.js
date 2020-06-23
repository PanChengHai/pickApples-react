import React from 'react';

const AppleItem = ({//函数变量AppleItem = ({}) => { changeAppleWeight = () => {} return ()},定义，一个小的组件
  changeWeight,//已定义，改变重量
  eat,//已定义，吃掉苹果
  apple,//已定义，list.value,一个元素苹果
  index,//已定义list.value.index,一个苹果数组的元素下标,按照苹果的下标吃苹果，一个数组有value和value.index组成，下标就是值
                  }) =>//对以上函数进行处理，箭头函数
                   {
  const changeAppleWeight = () => {//定义函数变量，无参，对已存在函数或变量进行处理
    changeWeight(apple.weight)//apple=value,单个苹果的重量，currentWeight=apple.weight
  }

  const eatApple = () => eat(index)//定义函数变量，无参，对已存在函数或变量进行处理

  return (
    // 一级标签，标签名
    <div className="appleItem">
      {/* 二级标签，标签名 */}
      <div className="apple">
        {/* html,图片路径，显示异常名称 */}
        <img src="./apple.png" alt="apple" />
      {/* 二级标签结束 */}
      </div>
      {/* 二级标签，标签名 */}
      <div className="info">
        {/* 三级标签，标签名 */}
        <div className="name">
            {/* 变量表达式{} */}
            {apple.name}{apple.num}号
        {/* 三级标签结束 */}
        </div>
        {/* 三级标签，标签名 */}
        <div className="weight">
          {/* 变量表达式{} */}
          {apple.weight}克
        {/* 三级标签结束 */}
        </div>
      {/* 二级标签，结束 */}
      </div>
      {/* 二级标签，标签名 */}
      <div className="btn-div">
        {/* 三级标签，标签属性：onClick,变量表达式{eatApple} ,html*/}
        <button onClick={eatApple}>吃掉</button>
          {/* 三级标签，标签属性：onClick,变量表达式{eatApple} ,html*/}
        <button onClick={changeAppleWeight}>重量改变</button>   {/* 调用方法,将子组件方法传递到父组件 */}
      {/* 二级标签结束 */}
      </div>
    {/* 一级标签结束 */}
    </div> 
  )
}

export default AppleItem;//输出函数AppleItem