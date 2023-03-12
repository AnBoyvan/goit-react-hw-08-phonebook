"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[453],{5453:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var a=n(9434),r=function(e){return e.contacts.items},s=function(e){var t=e.contacts,n=e.filter;if(!n)return t.items;var a=n.toLowerCase();return t.items.filter((function(e){return e.name.toLowerCase().includes(a)}))},i=function(e){return e.contacts.isLoading},c=n(5036),o=n(2791),l=n(5705),m=n(6747),u="ContactForm_form__MPIkR",d="ContactForm_formElement__LT2m8",h="ContactForm_input__t4J17",f="ContactForm_btn__MXzmJ",_=n(3329),x=function(){var e=(0,a.I0)(),t=(0,a.v9)(i);return(0,_.jsx)(m.Z,{margin:1,marginLeft:"auto",marginRight:"auto",width:"400px",backgroundColor:"#ffff",borderRadius:"5px",children:(0,_.jsx)(l.J9,{initialValues:{name:"",number:""},onSubmit:function(t,n){var a=n.resetForm;e((0,c.uK)(t)),a()},children:(0,_.jsxs)(l.l0,{className:u,autoComplete:"off",children:[(0,_.jsxs)("label",{className:d,htmlFor:"name",children:[(0,_.jsx)("span",{children:"Name"}),(0,_.jsx)(l.gN,{className:h,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,_.jsxs)("label",{className:d,htmlFor:"number",children:[(0,_.jsx)("span",{children:"Number"}),(0,_.jsx)(l.gN,{className:h,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,_.jsx)("button",{className:f,type:"submit",disabled:t,children:"Add contact"})]})})})},p=n(5126),j=n(383),b="ContactItem_item__ZJfpI",v="ContactItem_link__y+CCC",C="ContactItem_wrapper__-9jS0",g="ContactItem_contact__yE4A-",N="ContactItem_name__L6E4d",F="ContactItem_number__SJG7X",I="ContactItem_btn__lKa80",k=function(e){var t=e.id,n=e.name,r=e.number,s=(0,a.I0)(),o=(0,a.v9)(i);return(0,_.jsxs)("li",{className:b,children:[(0,_.jsxs)("div",{className:C,children:[(0,_.jsx)("a",{href:"tel: ".concat(r),className:v,children:(0,_.jsx)(p.Z,{})}),(0,_.jsxs)("span",{className:N,children:[n,": "]}),(0,_.jsx)("span",{className:F,children:r}),(0,_.jsx)("div",{className:g})]}),(0,_.jsx)("button",{className:I,type:"button",onClick:function(){return function(e){s((0,c.GK)(e))}(t)},disabled:o,children:(0,_.jsx)(j.Z,{})})]})},y="ContactList_list__ch-VD",L=function(){var e=(0,a.v9)(s);return(0,_.jsx)("ul",{className:y,children:e.map((function(e){var t=e.id,n=e.name,a=e.number;return(0,_.jsx)(k,{name:n,number:a,id:t},t)}))})},Z=n(5653),z=function(e){return e.filter},w="Filter_title__tvESX",A="Filter_input__ldudW",J=function(){var e=(0,a.v9)(z),t=(0,a.I0)(),n={filter:e};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("p",{className:w,children:"Find contacts by name"}),(0,_.jsx)(l.J9,{initialValues:n,onSubmit:function(e,n){var a=e.filter,r=n.resetForm;t((0,Z.T)(a)),r()},children:(0,_.jsx)(l.l0,{children:(0,_.jsx)(l.gN,{className:A,type:"text",name:"filter",value:e,onChange:function(e){t((0,Z.T)(e.currentTarget.value))}})})})]})},V="Phonebook_notification__Rxb-y",M=function(){var e=(0,a.v9)(r),t=(0,a.I0)();return(0,o.useEffect)((function(){t((0,c.yF)())}),[t]),(0,_.jsxs)(m.Z,{margin:1,marginLeft:"auto",marginRight:"auto",width:"400px",backgroundColor:"#ffff",borderRadius:"5px",display:"flex",flexDirection:"column",alignItems:"center",children:[(0,_.jsx)(x,{}),(0,_.jsx)("h2",{children:"Contacts"}),(0,_.jsx)(J,{}),!Boolean(e.length)&&(0,_.jsx)("p",{className:V,children:"There are no contacts in the phonebook"}),(0,_.jsx)(L,{})]})},R=function(){return(0,_.jsx)(M,{})}},383:function(e,t,n){var a=n(4836);t.Z=void 0;var r=a(n(5649)),s=n(3329),i=(0,r.default)((0,s.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");t.Z=i},5126:function(e,t,n){var a=n(4836);t.Z=void 0;var r=a(n(5649)),s=n(3329),i=(0,r.default)((0,s.jsx)("path",{d:"M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"}),"PhoneAndroid");t.Z=i}}]);
//# sourceMappingURL=453.ea4768cc.chunk.js.map