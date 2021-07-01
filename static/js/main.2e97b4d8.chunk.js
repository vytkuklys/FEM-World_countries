(this.webpackJsonpcountriesreact=this.webpackJsonpcountriesreact||[]).push([[0],{29:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(22),i=n.n(c),l=n(11),r=n(12),o=n(7),u=n(15),d=n(14),j=(n(29),n(0));var h=function(e){return Object(j.jsx)("header",{className:"header",children:Object(j.jsxs)("div",{className:"header__container",children:[Object(j.jsx)("h2",{className:"header__title",children:"Where in the world?"}),Object(j.jsx)("button",{className:"header__button","aria-label":"Change theme",onClick:e.handleClick,children:e.darkTheme?"Light Mode":"Dark Mode"})]})})},b=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={open:!1},e.handleClick=e.handleClick.bind(Object(o.a)(e)),e}return Object(r.a)(n,[{key:"handleClick",value:function(){var e=this.state.open;this.setState({open:!e})}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"controls ".concat(this.state.open?"controls--JS":""),children:[Object(j.jsxs)("div",{className:"controls__input",children:[Object(j.jsx)("input",{className:"controls__input-text",type:"text",placeholder:"Search for a country...","aria-label":"Search bar",onChange:this.props.handleChange}),Object(j.jsx)("button",{className:"controls__input-btn","aria-label":"close button"})]}),Object(j.jsxs)("div",{className:"controls__select",onClick:this.handleClick,children:[Object(j.jsxs)("p",{className:"controls__title",children:["Filter by Region",Object(j.jsx)("span",{classprops:"controls__title-arrow"})]}),Object(j.jsxs)("div",{className:"controls__select-menu",children:[Object(j.jsx)("button",{className:"controls__select-item",onClick:this.props.handleRegionClick,children:"All"}),Object(j.jsx)("button",{className:"controls__select-item",onClick:this.props.handleRegionClick,children:"Africa"}),Object(j.jsx)("button",{className:"controls__select-item",onClick:this.props.handleRegionClick,children:"Americas"}),Object(j.jsx)("button",{className:"controls__select-item",onClick:this.props.handleRegionClick,children:"Asia"}),Object(j.jsx)("button",{className:"controls__select-item",onClick:this.props.handleRegionClick,children:"Europe"}),Object(j.jsx)("button",{className:"controls__select-item",onClick:this.props.handleRegionClick,children:"Oceania"})]})]})]})}}]),n}(a.Component),m=n(8),p=n(2);var O=function(e){return Object(j.jsxs)(m.b,{to:"/".concat(e.country.name),className:"text-link output__box",children:[Object(j.jsx)("div",{className:"output__flag",style:{backgroundImage:"url('".concat(e.country.flag,"')")}}),Object(j.jsxs)("div",{className:"output__info",children:[Object(j.jsx)("h3",{className:"output__info-title",children:e.country.name}),Object(j.jsxs)("p",{className:"output--bold",children:["Population: ",Object(j.jsx)("span",{className:"output__info-population",children:e.country.population.toLocaleString()})]}),Object(j.jsxs)("p",{className:"output--bold",children:["Region: ",Object(j.jsx)("span",{className:"output__info-region",children:e.country.region})]}),Object(j.jsxs)("p",{className:"output--bold",children:["Capital: ",Object(j.jsx)("span",{className:"output__info-capital",children:e.country.capital})]})]})]})};var x=function(e){var t;return e.countries.length&&(t=e.countries.map((function(e){return Object(j.jsx)(O,{country:e},e.name)}))),Object(j.jsx)("div",{className:"output",children:t})},_=n(20),g=n.n(_),f=n(24),v=n(13);var N=function(e){var t=Object(a.useState)([]),n=Object(v.a)(t,2),s=n[0],c=n[1],i=e.border;return Object(a.useEffect)((function(){var t=e.getFullName(i);c(t)}),[e,i]),Object(j.jsx)(m.b,{to:"/".concat(s),children:Object(j.jsx)("button",{className:"details__btn",children:s})})};var C=function(e){var t=e.country.topLevelDomain.map((function(e){return e})),n=e.country.currencies.map((function(e,t){return t?", ".concat(e.code):e.code})),a=e.country.languages.map((function(e,t){return t?", ".concat(e.name):e.name})),s=e.country.borders.map((function(t){return Object(j.jsx)(N,{border:t,getFullName:e.getFullName},t)})),c=Object(p.f)();return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"details__return",children:Object(j.jsx)("button",{"aria-label":"return to previous page",className:"details__return-btn",onClick:function(){c.goBack()},children:"Back"})}),Object(j.jsxs)("article",{className:"details",children:[Object(j.jsx)("div",{className:"details__img",children:Object(j.jsx)("img",{src:e.country.flag,alt:"Country flag",className:"details__flag"})}),Object(j.jsxs)("div",{className:"details__info",children:[Object(j.jsx)("h3",{className:"details__title",children:e.country.name}),Object(j.jsxs)("div",{className:"details__list",children:[Object(j.jsxs)("ul",{className:"details__list-items",children:[Object(j.jsxs)("li",{className:"details__list-item",id:"nativeName",children:["Native Name: ",Object(j.jsx)("span",{children:e.country.nativeName})]}),Object(j.jsxs)("li",{className:"details__list-item",id:"population",children:["Population: ",Object(j.jsx)("span",{children:e.country.population.toLocaleString()})]}),Object(j.jsxs)("li",{className:"details__list-item",id:"region",children:["Region: ",Object(j.jsx)("span",{children:e.country.region})]}),Object(j.jsxs)("li",{className:"details__list-item",id:"subregion",children:["Sub Region: ",Object(j.jsx)("span",{children:e.country.subregion})]}),Object(j.jsxs)("li",{className:"details__list-item",id:"capital",children:["Capital: ",Object(j.jsx)("span",{children:e.country.capital})]})]}),Object(j.jsxs)("ul",{className:"details__list-items",children:[Object(j.jsxs)("li",{className:"details__list-item",id:"topLevelDomain",children:["Top Level Domain: ",Object(j.jsx)("span",{children:t})]}),Object(j.jsxs)("li",{className:"details__list-item",id:"currencies",children:["Currencies: ",Object(j.jsx)("span",{children:n})]}),Object(j.jsxs)("li",{className:"details__list-item",id:"languages",children:["Languages: ",Object(j.jsx)("span",{children:a})]})]})]}),Object(j.jsxs)("div",{className:"details__btns",children:[Object(j.jsx)("span",{className:"details__btn-title--display",id:"details__title",children:"Border Countries:"}),s]})]})]})]})};var k=function(){return Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)("div",{className:"spinner"})})};var y=function(e){var t=Object(a.useState)([]),n=Object(v.a)(t,2),s=n[0],c=n[1],i=Object(p.g)().name;Object(a.useEffect)((function(){(function(){var e=Object(f.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/name/".concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]);var l=0!==Object.keys(s).length;return Object(j.jsx)("div",{children:l?Object(j.jsx)(C,{country:s[0],getFullName:e.getFullName}):Object(j.jsx)(k,{})})},F=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={darkTheme:!1,countries:[],data:[]},e.handleClick=e.handleClick.bind(Object(o.a)(e)),e.setCountries=e.setCountries.bind(Object(o.a)(e)),e.handleRegionClick=e.handleRegionClick.bind(Object(o.a)(e)),e.handleChange=e.handleChange.bind(Object(o.a)(e)),e.isDataFetched=e.isDataFetched.bind(Object(o.a)(e)),e.getFullName=e.getFullName.bind(Object(o.a)(e)),e}return Object(r.a)(n,[{key:"setCountries",value:function(e){this.setState({countries:e,data:e,isLoading:!1})}},{key:"handleRegionClick",value:function(e){e.preventDefault();var t=e.target.textContent;if("All"!==t){var n=this.state.data.filter((function(e){return e.region===t}));console.log(this.state.data.filter((function(e){return"Africa"===e.region}))),this.setState({countries:n})}else this.setCountries(this.state.data)}},{key:"handleClick",value:function(){var e=this.state.darkTheme;this.setState({darkTheme:!e})}},{key:"handleChange",value:function(e){var t=e.target.value,n=this.state.data.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));this.setState({countries:n})}},{key:"isDataFetched",value:function(e){return e.length}},{key:"getFullName",value:function(e){return this.state.data.filter((function(t){return t.alpha3Code===e}))[0].name}},{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),this.isDataFetched(this.state.data)||fetch("https://restcountries.eu/rest/v2/all?fields=flag;name;capital;population;region;nativeName;subregion;currencies;languages;borders;topLevelDomain;alpha3Code").then((function(e){return e.json()})).then((function(t){e.setCountries(t)}))}},{key:"render",value:function(){return Object(j.jsx)(m.a,{children:Object(j.jsxs)("div",{className:"App ".concat(this.state.darkTheme?"dark-mode":""),children:[Object(j.jsx)(h,{handleClick:this.handleClick,darkTheme:this.state.darkTheme}),Object(j.jsx)("main",{children:Object(j.jsxs)(p.c,{children:[Object(j.jsxs)(p.a,{path:"/",exact:!0,children:[Object(j.jsx)(b,{handleRegionClick:this.handleRegionClick,handleChange:this.handleChange}),0!==this.state.countries.length?Object(j.jsx)(x,{countries:this.state.countries}):Object(j.jsx)(k,{})]}),Object(j.jsx)(p.a,{path:"/:name",children:Object(j.jsx)(y,{getFullName:this.getFullName})})]})})]})})}}]),n}(a.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root")),S()}},[[37,1,2]]]);
//# sourceMappingURL=main.2e97b4d8.chunk.js.map