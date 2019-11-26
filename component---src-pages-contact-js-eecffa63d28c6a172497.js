(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{282:function(e,t,a){"use strict";a.r(t);a(118);var n=a(0),l=a.n(n),s=a(64),c=a(278),r=a(279);a(366);var i=function(e){var t,a;function n(){var t;return(t=e.call(this)||this).state={nameText:"",nameStatus:null,emailText:"",emailStatus:null,contactText:"",contactStatus:null,agreeStatus:null,textLimit:400},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.componentDidMount=function(){var e=document.createElement("script");e.src="https://sdk.form.run/js/v2/formrun.js",e.async=!0,document.body.appendChild(e),$('[data-toggle="tooltip"]').tooltip()},i.renderButton=function(){var e=this.state;return e.agreeStatus&&e.emailStatus&&e.nameStatus&&e.contactStatus?l.a.createElement("button",{className:"submit-btn allowed",type:"submit"},"送信"):l.a.createElement("span",{className:"submit-btn un-allowed d-flex justify-content-center align-items-center"},"送信")},i.handleChange=function(e,t){var a=e.target.value;switch(t){case"name":this.setState({nameText:a,nameStatus:a.length>0});break;case"email":var n=a.length>0&&a.match(/[^\s]@[^\s]/),l=null!==n&&!1!==n&&n[0].length>0;this.setState({emailText:a,emailStatus:l});break;case"contact":this.setState({contactText:a,contactStatus:a.length>0&&a.length<this.state.textLimit})}},i.render=function(){var e=this,t=this.props,a=t.location;t.data;return l.a.createElement(c.a,{location:a},l.a.createElement(r.a,{site:s.siteMetadata,title:"Contact"}),l.a.createElement("section",{className:"contact"},l.a.createElement("h2",{className:"mb-3"},l.a.createElement("span",{className:"title"},"お問い合わせ"),l.a.createElement("span",{className:"title-shadow"},"Contact")),l.a.createElement("form",{className:"formrun px-md-5 px-sm-2 px-0 d-flex justify-content-center",action:"https://form.run/api/v1/r/jol9epjdor5ncy1f8itqzwld",method:"post"},l.a.createElement("div",{className:"formbox-wrap pt-3"},l.a.createElement("div",{className:"formbox"},l.a.createElement("div",{className:"label-wrap"},l.a.createElement("label",{className:"category"},l.a.createElement("span",null,"お名前"),l.a.createElement("span",{className:"badge required"},"必須"),l.a.createElement("span",{className:"far fa-check-circle judge-mark check-mark\n                      "+(null===this.state.nameStatus?"unvisible":"visible")+"\n                      "+(!1===this.state.nameStatus?"d-none":"d-inline-block")+"\n                      "}),l.a.createElement("span",{className:"far fa-times-circle judge-mark x-mark\n                      "+(null===this.state.nameStatus?"unvisible":"visible")+"\n                      "+(!0===this.state.nameStatus?"d-none":"d-inline-block")+"\n                      ","data-toggle":"tooltip",title:"入力してください"}))),l.a.createElement("input",{name:"client-name",type:"text",onChange:function(t){return e.handleChange(t,"name")}})),l.a.createElement("div",{className:"formbox"},l.a.createElement("div",{className:"label-wrap"},l.a.createElement("label",{className:"category align-middle"},l.a.createElement("span",{className:"d-flex align-items-center"},l.a.createElement("span",null,"メールアドレス"),l.a.createElement("span",{className:"badge required"},"必須"),l.a.createElement("span",{className:"far fa-check-circle judge-mark check-mark\n                        "+(null===this.state.emailStatus?"unvisible":"visible")+"\n                        "+(!1===this.state.emailStatus?"d-none":"d-inline-block")+"\n                        "}),l.a.createElement("span",{className:"far fa-times-circle judge-mark x-mark\n                        "+(null===this.state.emailStatus?"unvisible":"visible")+"\n                        "+(!0===this.state.emailStatus?"d-none":"d-inline-block")+"\n                        ","data-toggle":"tooltip",title:"正しく入力してください"})))),l.a.createElement("input",{name:"email-addres",type:"text",onChange:function(t){return e.handleChange(t,"email")}})),l.a.createElement("div",{className:"formbox"},l.a.createElement("div",{className:"label-wrap"},l.a.createElement("label",{className:"category"},l.a.createElement("span",null,"お問い合わせ"),l.a.createElement("span",{className:"badge required"},"必須"),l.a.createElement("span",{className:"far fa-check-circle judge-mark check-mark\n                        "+(null===this.state.contactStatus?"unvisible":"visible")+"\n                        "+(!1===this.state.contactStatus?"d-none":"d-inline-block")+"\n                        "}),l.a.createElement("span",{className:"far fa-times-circle judge-mark x-mark\n                        "+(null===this.state.contactStatus?"unvisible":"visible")+"\n                        "+(!0===this.state.contactStatus?"d-none":"d-inline-block")+"\n                        ","data-toggle":"tooltip",title:"正しく入力してください"}))),l.a.createElement("textarea",{rows:"8",name:"contact-content",onChange:function(t){return e.handleChange(t,"contact")}}),l.a.createElement("div",{className:"d-flex justify-content-end"},l.a.createElement("span",{className:"warning"},"残り",this.state.textLimit-this.state.contactText.length,"文字"))),l.a.createElement("div",{className:"checkbtn"},l.a.createElement("div",{className:"label-wrap d-flex align-items-center"},l.a.createElement("div",{className:"checkbox-wrap d-inline-block"},l.a.createElement("label",{className:"category"},l.a.createElement("span",null,"個人情報利用同意"),l.a.createElement("span",{className:"badge required"},"必須"))),l.a.createElement("input",{className:"d-none",id:"agree-checkbox",type:"checkbox",onClick:function(){return e.setState({agreeStatus:!e.state.agreeStatus})}}),l.a.createElement("label",{className:"agree-checkbox",htmlFor:"agree-checkbox"}),l.a.createElement("span",{className:"warning \n                    "+(null===this.state.agreeStatus||!0===this.state.agreeStatus?"unshowed":"showed")+"\n                    "},"同意してください"))),l.a.createElement("div",{className:"_formrun_gotcha",style:{position:"absolute!important",height:"1px",width:"1px",overflow:"hidden"}},l.a.createElement("label",{htmlFor:"_formrun_gotcha"},"If you are a human, ignore this field"),l.a.createElement("input",{type:"text",name:"_formrun_gotcha",id:"_formrun_gotcha",tabIndex:"-1"})),l.a.createElement("div",{className:"btn-wrap d-flex justify-content-end mt-4"},this.renderButton())))))},n}(l.a.Component);t.default=i}}]);
//# sourceMappingURL=component---src-pages-contact-js-eecffa63d28c6a172497.js.map