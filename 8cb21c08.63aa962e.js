(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{127:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return n?a.a.createElement(d,c({ref:t},s,{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),o=(n(0),n(127)),i={id:"heap",title:"Heap"},c={unversionedId:"algorithms/heap",id:"algorithms/heap",isDocsHomePage:!1,title:"Heap",description:"Study links",source:"@site/../contents/algorithms/heap.md",permalink:"/tech-interview-handbook/algorithms/heap",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/algorithms/heap.md",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1569463535,sidebar:"docs",previous:{title:"Hash Table",permalink:"/tech-interview-handbook/algorithms/hash-table"},next:{title:"Interval",permalink:"/tech-interview-handbook/algorithms/interval"}},l=[{value:"Study links",id:"study-links",children:[]},{value:"Notes",id:"notes",children:[]},{value:"Recommended LeetCode questions",id:"recommended-leetcode-questions",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"study-links"},"Study links"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://medium.com/basecs/learning-to-love-heaps-cef2b273a238"}),"Learning to Love Heaps"))),Object(o.b)("h2",{id:"notes"},"Notes"),Object(o.b)("p",null,"If you see a top or lowest ",Object(o.b)("em",{parentName:"p"},"k")," being mentioned in the question, it is usually a signal that a heap can be used to solve the problem, such as in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://leetcode.com/problems/top-k-frequent-elements/"}),"Top K Frequent Elements"),"."),Object(o.b)("p",null,"If you require the top ",Object(o.b)("em",{parentName:"p"},"k")," elements use a Min Heap of size ",Object(o.b)("em",{parentName:"p"},"k"),". Iterate through each element, pushing it into the heap. Whenever the heap size exceeds ",Object(o.b)("em",{parentName:"p"},"k"),", remove the minimum element, that will guarantee that you have the ",Object(o.b)("em",{parentName:"p"},"k")," largest elements."),Object(o.b)("h2",{id:"recommended-leetcode-questions"},"Recommended LeetCode questions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/merge-k-sorted-lists/"}),"Merge K Sorted Lists")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/top-k-frequent-elements/"}),"Top K Frequent Elements")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/find-median-from-data-stream/"}),"Find Median from Data Stream"))))}p.isMDXComponent=!0}}]);