(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t){t.exports={a:[{section:"cupertino",label:"Cupertino"},{section:"new-york-city",label:"New York City"},{section:"london",label:"London"},{section:"amsterdam",label:"Amsterdam"},{section:"tokyo",label:"Tokyo"},{section:"hong-kong",label:"Hong Kong"},{section:"sydney",label:"Sydney"}]}},11:function(t,e,n){t.exports=n(19)},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),a=n(9),c=n.n(a),l=(n(17),n(2)),r=n(3),s=n(5),d=n(4),u=n(6),m=n(7),p=n(8);function f(){var t=Object(m.a)(["\n\tposition: absolute;\n\tbottom: -2px;\n\theight: 2px;\n\tbackground-color: #1f1f1f;\n\ttransition: all 0.5s ease;\n\twidth: ","px;\n\tleft: ","px;\n\n\t@media only screen and (max-width: 980px) {\n\t\tdisplay: none;\n\t}\n"]);return f=function(){return t},t}function b(){var t=Object(m.a)(["\n\tpadding: 20px;\n\n\tul {\n\t\tposition: relative;\n\t\tdisplay: flex;\n\t\tjustify-content: space-evenly;\n\t\tborder-bottom: 2px solid #dbdbdb;\n\t\tpadding-bottom: 10px;\n\t\tli {\n\t\t\tdisplay: inline-block;\n\t\t\ta {\n\t\t\t\tcolor: #b2b2b2;\n\t\t\t\tletter-spacing: 1px;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tpadding-bottom: 10px;\n\t\t\t\t&:hover {\n\t\t\t\t\tcolor: #6ca0c5;\n\t\t\t\t}\n\t\t\t\t&.active {\n\t\t\t\t\tcolor: #1f1f1f;\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\tcolor: #1f1f1f;\n\t\t\t\t\t\tcursor: default;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t@media only screen and (max-width: 980px) {\n\t\tul {\n\t\t\tflex-direction: column;\n\t\t\tborder-bottom: none;\n\t\t\tli {\n\t\t\t\tpadding: 15px 0;\n\t\t\t\ta {\n\t\t\t\t\tpadding-bottom: 4px;\n\t\t\t\t\t&.active {\n\t\t\t\t\t\tborder-bottom: 2px solid #1f1f1f;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);return b=function(){return t},t}var v=p.a.nav(b()),h=p.a.span(f(),function(t){return t.activeItemWidth},function(t){return t.activeItemLeft}),y=function(t){function e(){var t,n;Object(l.a)(this,e);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(n=Object(s.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={selected:0,activeItemWidth:null,activeItemLeft:null},n.onClickHandler=function(t){n.setState({selected:t}),setTimeout(function(){n.updateUnderlinePosition()},100)},n.updateDimensions=function(){window.innerWidth>980&&n.updateUnderlinePosition()},n.updateUnderlinePosition=function(){n.setState({activeItemWidth:document.getElementsByClassName("active")[0].offsetWidth,activeItemLeft:document.getElementsByClassName("active")[0].offsetLeft})},n}return Object(u.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.updateUnderlinePosition(),window.addEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){var t=this;return o.a.createElement(v,null,o.a.createElement("ul",null,this.props.items.map(function(e,n){return o.a.createElement("li",{key:n},o.a.createElement("a",{href:"#"+e.section,onClick:function(){return t.onClickHandler(n)},className:t.state.selected===n?"active":null},e.label))}),o.a.createElement(h,{activeItemWidth:this.state.activeItemWidth,activeItemLeft:this.state.activeItemLeft})))}}]),e}(i.Component),x=n(10),g=function(t){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement(y,{items:x.a})))}}]),e}(i.Component);c.a.render(o.a.createElement(g,null),document.getElementById("root"))}},[[11,2,1]]]);
//# sourceMappingURL=main.44e4cfd7.chunk.js.map