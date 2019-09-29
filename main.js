let html = document.querySelector('#html')
let style = document.querySelector('#style')

let str = `
/*你好，我是一名前端新人 
*接下来我要展示我的前端功底了 
*我要制作一个太极八卦图
*首先画一个圆出来
**/
#div {
  width: 400px;
  height: 400px;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border-radius: 50%;
}
/* 背景有点单调，我们给背景上点色 */
body {
  background: #ddd;
}
/* 八卦图分为阴阳两极 */
#div {
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
#div::before {
  content: '';
  display: block;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
#div::after {
  content: '';
  display: block;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #000;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
/* 太极生两仪，两仪生四象，四象生八卦 */
#div::before {
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);
}
#div::after {
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
}
/* 接下来，我们让这个八卦图动起来
* 道生一，一生二，二生三，三生万物
**/
#div {
  animation:move 5s linear infinite ;
}
@keyframes move {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
/* 谢谢观赏 */
`
/* str = str.replace(/\n/g,"<br>") */
let n = -1
let str2 = ''
/* demo.innerHTML = str.substring(0,n) */
/* setInterval(()=>{
  demo.innerHTML++
},1000) */

// 老手用 setTimeout 递归实现 setInterval,因为更好进行条件判断

let step = () => {
  setTimeout(()=>{
    n = n + 1
    if( str[n] === "\n" ) {
      str2 += "<br>"
    } else if( str[n] === " " ){
      str2 += '&nbsp'
    }else{
      str2 += str[n]
    }
    html.innerHTML = str2
    style.innerHTML = str.substring(0,n)
    window.scrollTo(0,999999)
    html.scrollTo(0, 99999);
    if(n < str.length -1) {
      step()
    }
  },30)
}

step()