# my-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

```javascript

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer:{
          type:'none'
        }
    },
    legend: {
        data:[
          {
            name:'最高气温',
          },
          {
            name:'最低气温'
          },
          {
            name:'其他'
          }],
        orient:'vertical',
        x:'left',
        y:'bottom',
        paddingBottom:'0px',
        backgroundColor:'yellow'
    },
    toolbox: {
        show : false,
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisTick:{
               show:false, 
            },
            axisLabel:{
              show:true,
              textStyle:{
                   color:'red',
                   baseline:'top',
                   fontSize:12
              }
            },
            axisLine:{
              show:false,
              onZero:true,
              lineStyle:{
                 color:'yellow',
                 type:'solid',
                 width:2
              }
          },
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value} °C'
            },
            axisTick:{
               show:false, 
            },
            axisLabel:{
              show:true,
              textStyle:{
                   color:'red',
                   baseline:'top',
                   fontSize:12
              }
            },
            axisLine:{
              show:false,
              onZero:true,
              lineStyle:{
                 color:'red',
                 type:'solid',
                 width:2
              }
          }
        }
    ],
    series : [
        {
            name:'最高气温',
            type:'line',
            itemStyle : {  
                normal : {  
                    color:'#fbb150',  
                    lineStyle:{  
                        color:'#fbb150'  
                    }  
                }  
            },
            smooth:false,
            markPoint : {
              data : [
                  {type : 'max', name: '最大值'}
              ]
            },
            data:[11, 11, 15, 13, 12, 13, 10]
        },
        {
            name:'最低气温',
            type:'line',
            itemStyle : {  
                normal : {  
                    color:'#f92454',  
                    lineStyle:{  
                        color:'#f92454'  
                    }  
                }  
            },
            smooth:false,
            markPoint : {
              data : [
                  {type : 'max', name: '最大值'}
              ]
            },
            data:[1, 5, 78, 4, 55, 23, 50]
        },
        {
            name:'其他',
            type:'line',
            itemStyle : {  
                normal : {  
                    color:'#4ec5f7',  
                    lineStyle:{  
                        color:'#4ec5f7'  
                    }  
                }  
            },
            smooth:false,
            markPoint : {
              data : [
                  {type : 'max', name: '最大值'}
              ]
            },
            data:[14, 5, 8, 4, 15, 23, 20]
        }
    ]
};

```

Echart 中主题的使用

	1、下载或复制以下的主题保存至 *.json 文件；
	2、读取该 JSON 文件，并使用 obj = JSON.parse(data) 将其转换成对象；
	3、调用 echarts.registerTheme('customed', obj) 注册主题；
	4、使用 echarts.init(dom, 'customed') 创建图表，第二个参数即为刚才注册的主题名字。
	5、文件在项目目录下，customed.json
