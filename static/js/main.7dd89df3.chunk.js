(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{24:function(e,t,a){e.exports=a(34)},34:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),l=a.n(r),o=a(17),i=a(18),m=a(22),p=a(19),s=a(23),u=(a(8),a(10)),h=a(9);var b=function(e){var t=e.id,a=e.name;return c.a.createElement("div",{className:" pokemons ma1 tc dib  "},c.a.createElement(h.b,{to:"".concat(t)},c.a.createElement("img",{className:"pokeimage",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t,".png"),alt:"",width:"160px",height:"160px"}),c.a.createElement("br",null),c.a.createElement("div",{className:"pokenames tc dib pa1"},a)))};var E=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){l()}),[]);var l=function(){fetch("https://pokeapi.co/api/v2/pokemon?limit=807").then((function(e){return e.json()})).then((function(e){return r(e.results)}))};return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"pokedex"},c.a.createElement("img",{src:"http://pngimg.com/uploads/pokeball/pokeball_PNG8.png",alt:"",width:"60px",height:"60px"}),c.a.createElement("h2",null,"POKEDEX")),a.map((function(e,t){return c.a.createElement(b,{id:t+1,key:t,name:e.name})})))},d=a(5);var k=function(e){var t=e.match,a=Object(n.useState)([]),r=Object(u.a)(a,2),l=r[0],o=r[1];Object(n.useEffect)((function(){i()}),[]);var i=function(){fetch("https://pokeapi.co/api/v2/pokemon/".concat(t.params.pokemon)).then((function(e){return e.json()})).then((function(e){return o(e)}))};return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"pokedex"},c.a.createElement("img",{src:"http://pngimg.com/uploads/pokeball/pokeball_PNG8.png",alt:"",width:"60px",height:"60px"}),c.a.createElement("h2",null,"POKEDEX")),c.a.createElement("div",null,c.a.createElement("img",{className:" detailimg tc dib pa1 ma2 ",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t.params.pokemon,".png"),alt:"",width:"200px",height:"200px"})),c.a.createElement("div",{className:"details dib"},"ID: ",l.id,c.a.createElement("br",null),c.a.createElement("br",null),"name: ",l.name,c.a.createElement("br",null),c.a.createElement("br",null),"height: ",l.height,c.a.createElement("br",null),c.a.createElement("br",null),"weight: ",l.weight,c.a.createElement("br",null),c.a.createElement("br",null),"type: ",l.types&&l.types[0].type.name,c.a.createElement("br",null),c.a.createElement("br",null),"abilities:"," ",l.abilities&&l.abilities[0].ability.name))},g=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(h.a,{basename:"/pokedex"},c.a.createElement(d.c,null,c.a.createElement(d.a,{path:"/",exact:!0,component:E}),c.a.createElement(d.a,{path:"/:pokemon",component:k})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){}},[[24,1,2]]]);
//# sourceMappingURL=main.7dd89df3.chunk.js.map