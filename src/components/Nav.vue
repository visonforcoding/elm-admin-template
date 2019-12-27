<template>
  <nav>
    <div class="box">
      <ul class="boxInner clear">
        <li class="menu"><a href="#/home">首页</a></li>
        <li class="menu"><a href="#/home">资讯</a></li>
        <li class="menu"><a href="#/home">文库</a></li>
      </ul>
    </div>
  </nav>
</template>
<style scoped>
/* 导航 */
nav ul {
  position: relative;
  margin: 0;
  padding: 0;
  width: 1080px; /*_width:1036px;*/
}
nav li {
  list-style: none;
}
nav .box {
  margin: 0 auto;
  width: 1160px; /*_position:relative;*/
  background: #b50000;
}
nav .box li {
  float: left;
  margin-right: 5px;
  width: 94px;
  height: 43px;
  line-height: 43px;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
}
nav .box li.mask {
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
}
nav .box .tecgroupCon li {
  width: 124px;
}
nav .box li.mask a {
  color: #feddb8;
}
nav .box li.mask ul {
  position: absolute;
  left: 0;
  background: #9e0b0e;
}
nav .clear {
  zoom: 1;
}
nav .clear:after {
  content: "";
  display: block;
  clear: both;
}
nav a {
  color: #fff;
  font-size: 16px;
}
nav a:hover {
  color: #fff;
  font-size: 16px;
}
.techExch .activeArrow,
.interCommu .activeArrow,
.tecgroup .activeArrow,
.moregroup .activeArrow {
  position: absolute;
  left: 866px;
  top: 20px;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
.interCommu .activeArrow {
  left: 972px;
}
.tecgroup .activeArrow {
  left: 280px;
}
.moregroup .activeArrow {
  left: 1054px;
}
.techExch:hover .activeArrow,
.interCommu:hover .activeArrow,
.tecgroup:hover .activeArrow,
.moregroup .activeArrow:hover {
  -ms-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}
.techExchCon,
.interCommuCon,
.tecgroupCon,
.moregroupCon {
  position: absolute;
  left: 0px;
  top: 43px;
  background: #ffffff;
  padding: 30px 50px;
  width: 1060px;
  height: auto;
  display: none;
  border: 1px solid #cdcdcd;
  -webkit-box-shadow: 0 0 8px #cdcdcd;
  -moz-box-shadow: 0 0 8px #cdcdcd;
  box-shadow: 0 0 8px #cdcdcd;
}

.techExchCon img {
  position: static;
}
.techExchCon li:hover img {
  -webkit-transform: scale(1.2);
}
nav .cLogo li {
  float: left;
  margin-right: 5px;
  margin-bottom: 10px;

  width: 126px;
  height: auto;
  text-align: left;
  overflow: hidden;
  cursor: pointer;
}

nav .cLogo img {
  width: 120px;
  height: 42px;
}
nav .cLogo em {
  display: block;
  width: 120px;
  height: 42px;
  border: solid 1px #ccc; /*-webkit-box-reflect: below 2px -webkit-linear-gradient(bottom,rgba(0,0,0,0.2) 0,rgba(0,0,0,0) 50%);*/
}
nav .cLogo span {
  display: block;
  padding-top: 5px;
  height: 20px;
  line-height: 20px;
  font-weight: normal;
  color: #3d3d3d;
  font-size: 12px;
  text-align: center;
}

nav .cTxt li {
  text-align: left;
  height: 28px;
  line-height: 28px;
  width: 128px;
  font-size: 14px;
  font-weight: normal;
}
nav .hdsq li {
  text-align: left;
  height: 28px;
  padding-top: 10px;
  width: 175px;
  color: #000;
  font-size: 14px;
  font-weight: normal;
}
nav .hdsq li a {
  color: #000000;
}
nav .hdsq li a:hover {
  color: #9e0b0e;
}
nav .hdsq li img {
  margin-right: 10px;
  padding: 4px;
  background: #fff;
  width: 30px;
  height: 30px;
  -webkit-border-radius: 50%;
  -webkit-transition: 1s;
  -moz-border-radius: 50%;
  -moz-transition: 1s;
  -o-border-radius: 50%;
  -o-transition: 1s;
  -khtml-border-radius: 50%;
  -khtml-transition: 1s;
  -ms-border-radius: 50%;
  -ms-transition: 1s;
  -rm-border-radius: 50%;
  -rm-transition: 1s;
  border-radius: 50%;
  transition: 1s;
  border: solid 1px #ccc;
  -webkit-box-reflect: below 2px -webkit-linear-gradient(bottom, rgba(
          0,
          0,
          0,
          0.2
        )
        0, rgba(0, 0, 0, 0) 50%);
}
nav .interCommuCon span {
  width: 42px;
  height: 42px;
  float: left;
  margin-right: 5px;
}
nav .cTxt li a {
  font-size: 12px;
  font-weight: normal;
  color: #000000;
}
nav .cTxt li a:hover {
  color: #9e0b0e;
}
.interCommuCon {
  height: 60px;
}

/* 新增 */
nav .box li.menu:hover {
  background: #9e0b0e;
}
.tecgroupCon li,
.moregroupCon li {
  height: 30px;
  line-height: 30px;
}
.tecgroupCon a,
.moregroupCon a {
  font-size: 16px;
  font-weight: normal;
  color: #000000;
  display: block;
}
.tecgroupCon a:hover,
.moregroupCon a:hover {
  font-size: 16px;
  font-weight: normal;
  color: #ffffff;
  background: #9e0b0e;
}
nav .box .moregroupCon li {
  width: auto;
}
nav .box .moregroupCon li a {
  display: block;
  padding: 0px 15px;
}
</style>