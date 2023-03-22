(async()=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();var Bt,v,Gn,vt,$n,Kn,Ke,Xn,fe={},Zn=[],di=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function J(t,e){for(var n in e)t[n]=e[n];return t}function Jn(t){var e=t.parentNode;e&&e.removeChild(t)}function Q(t,e,n){var r,a,i,o={};for(i in e)i=="key"?r=e[i]:i=="ref"?a=e[i]:o[i]=e[i];if(arguments.length>2&&(o.children=arguments.length>3?Bt.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)o[i]===void 0&&(o[i]=t.defaultProps[i]);return Ht(t,o,r,a,null)}function Ht(t,e,n,r,a){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:a??++Gn};return a==null&&v.vnode!=null&&v.vnode(i),i}function mi(){return{current:null}}function W(t){return t.children}function K(t,e){this.props=t,this.context=e}function Wt(t,e){if(e==null)return t.__?Wt(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?Wt(t):null}function Qn(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Qn(t)}}function Xe(t){(!t.__d&&(t.__d=!0)&&vt.push(t)&&!_e.__r++||$n!==v.debounceRendering)&&(($n=v.debounceRendering)||Kn)(_e)}function _e(){var t,e,n,r,a,i,o,c;for(vt.sort(Ke);t=vt.shift();)t.__d&&(e=vt.length,r=void 0,a=void 0,o=(i=(n=t).__v).__e,(c=n.__P)&&(r=[],(a=J({},i)).__v=i.__v+1,Ze(c,i,a,n.__n,c.ownerSVGElement!==void 0,i.__h!=null?[o]:null,r,o??Wt(i),i.__h),sr(r,i),i.__e!=o&&Qn(i)),vt.length>e&&vt.sort(Ke));_e.__r=0}function tr(t,e,n,r,a,i,o,c,l,u){var s,d,f,_,h,A,y,x=r&&r.__k||Zn,N=x.length;for(n.__k=[],s=0;s<e.length;s++)if((_=n.__k[s]=(_=e[s])==null||typeof _=="boolean"||typeof _=="function"?null:typeof _=="string"||typeof _=="number"||typeof _=="bigint"?Ht(null,_,null,null,_):Array.isArray(_)?Ht(W,{children:_},null,null,null):_.__b>0?Ht(_.type,_.props,_.key,_.ref?_.ref:null,_.__v):_)!=null){if(_.__=n,_.__b=n.__b+1,(f=x[s])===null||f&&_.key==f.key&&_.type===f.type)x[s]=void 0;else for(d=0;d<N;d++){if((f=x[d])&&_.key==f.key&&_.type===f.type){x[d]=void 0;break}f=null}Ze(t,_,f=f||fe,a,i,o,c,l,u),h=_.__e,(d=_.ref)&&f.ref!=d&&(y||(y=[]),f.ref&&y.push(f.ref,null,_),y.push(d,_.__c||h,_)),h!=null?(A==null&&(A=h),typeof _.type=="function"&&_.__k===f.__k?_.__d=l=er(_,l,t):l=nr(t,_,f,x,h,l),typeof n.type=="function"&&(n.__d=l)):l&&f.__e==l&&l.parentNode!=t&&(l=Wt(f))}for(n.__e=A,s=N;s--;)x[s]!=null&&(typeof n.type=="function"&&x[s].__e!=null&&x[s].__e==n.__d&&(n.__d=rr(r).nextSibling),lr(x[s],x[s]));if(y)for(s=0;s<y.length;s++)cr(y[s],y[++s],y[++s])}function er(t,e,n){for(var r,a=t.__k,i=0;a&&i<a.length;i++)(r=a[i])&&(r.__=t,e=typeof r.type=="function"?er(r,e,n):nr(n,r,r,a,r.__e,e));return e}function tt(t,e){return e=e||[],t==null||typeof t=="boolean"||(Array.isArray(t)?t.some(function(n){tt(n,e)}):e.push(t)),e}function nr(t,e,n,r,a,i){var o,c,l;if(e.__d!==void 0)o=e.__d,e.__d=void 0;else if(n==null||a!=i||a.parentNode==null)t:if(i==null||i.parentNode!==t)t.appendChild(a),o=null;else{for(c=i,l=0;(c=c.nextSibling)&&l<r.length;l+=1)if(c==a)break t;t.insertBefore(a,i),o=i}return o!==void 0?o:a.nextSibling}function rr(t){var e,n,r;if(t.type==null||typeof t.type=="string")return t.__e;if(t.__k){for(e=t.__k.length-1;e>=0;e--)if((n=t.__k[e])&&(r=rr(n)))return r}return null}function pi(t,e,n,r,a){var i;for(i in n)i==="children"||i==="key"||i in e||de(t,i,null,n[i],r);for(i in e)a&&typeof e[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||n[i]===e[i]||de(t,i,e[i],n[i],r)}function ar(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||di.test(e)?n:n+"px"}function de(t,e,n,r,a){var i;t:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||ar(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||ar(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r||t.addEventListener(e,i?or:ir,i):t.removeEventListener(e,i?or:ir,i);else if(e!=="dangerouslySetInnerHTML"){if(a)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n??"";break t}catch{}typeof n=="function"||(n==null||n===!1&&e.indexOf("-")==-1?t.removeAttribute(e):t.setAttribute(e,n))}}function ir(t){return this.l[t.type+!1](v.event?v.event(t):t)}function or(t){return this.l[t.type+!0](v.event?v.event(t):t)}function Ze(t,e,n,r,a,i,o,c,l){var u,s,d,f,_,h,A,y,x,N,j,R,D,U,q,C=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,c=e.__e=n.__e,e.__h=null,i=[c]),(u=v.__b)&&u(e);try{t:if(typeof C=="function"){if(y=e.props,x=(u=C.contextType)&&r[u.__c],N=u?x?x.props.value:u.__:r,n.__c?A=(s=e.__c=n.__c).__=s.__E:("prototype"in C&&C.prototype.render?e.__c=s=new C(y,N):(e.__c=s=new K(y,N),s.constructor=C,s.render=bi),x&&x.sub(s),s.props=y,s.state||(s.state={}),s.context=N,s.__n=r,d=s.__d=!0,s.__h=[],s._sb=[]),s.__s==null&&(s.__s=s.state),C.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=J({},s.__s)),J(s.__s,C.getDerivedStateFromProps(y,s.__s))),f=s.props,_=s.state,s.__v=e,d)C.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(C.getDerivedStateFromProps==null&&y!==f&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(y,N),!s.__e&&s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(y,s.__s,N)===!1||e.__v===n.__v){for(e.__v!==n.__v&&(s.props=y,s.state=s.__s,s.__d=!1),s.__e=!1,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(z){z&&(z.__=e)}),j=0;j<s._sb.length;j++)s.__h.push(s._sb[j]);s._sb=[],s.__h.length&&o.push(s);break t}s.componentWillUpdate!=null&&s.componentWillUpdate(y,s.__s,N),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(f,_,h)})}if(s.context=N,s.props=y,s.__P=t,R=v.__r,D=0,"prototype"in C&&C.prototype.render){for(s.state=s.__s,s.__d=!1,R&&R(e),u=s.render(s.props,s.state,s.context),U=0;U<s._sb.length;U++)s.__h.push(s._sb[U]);s._sb=[]}else do s.__d=!1,R&&R(e),u=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++D<25);s.state=s.__s,s.getChildContext!=null&&(r=J(J({},r),s.getChildContext())),d||s.getSnapshotBeforeUpdate==null||(h=s.getSnapshotBeforeUpdate(f,_)),q=u!=null&&u.type===W&&u.key==null?u.props.children:u,tr(t,Array.isArray(q)?q:[q],e,n,r,a,i,o,c,l),s.base=e.__e,e.__h=null,s.__h.length&&o.push(s),A&&(s.__E=s.__=null),s.__e=!1}else i==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=gi(n.__e,e,n,r,a,i,o,l);(u=v.diffed)&&u(e)}catch(z){e.__v=null,(l||i!=null)&&(e.__e=c,e.__h=!!l,i[i.indexOf(c)]=null),v.__e(z,e,n)}}function sr(t,e){v.__c&&v.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(r){r.call(n)})}catch(r){v.__e(r,n.__v)}})}function gi(t,e,n,r,a,i,o,c){var l,u,s,d=n.props,f=e.props,_=e.type,h=0;if(_==="svg"&&(a=!0),i!=null){for(;h<i.length;h++)if((l=i[h])&&"setAttribute"in l==!!_&&(_?l.localName===_:l.nodeType===3)){t=l,i[h]=null;break}}if(t==null){if(_===null)return document.createTextNode(f);t=a?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,f.is&&f),i=null,c=!1}if(_===null)d===f||c&&t.data===f||(t.data=f);else{if(i=i&&Bt.call(t.childNodes),u=(d=n.props||fe).dangerouslySetInnerHTML,s=f.dangerouslySetInnerHTML,!c){if(i!=null)for(d={},h=0;h<t.attributes.length;h++)d[t.attributes[h].name]=t.attributes[h].value;(s||u)&&(s&&(u&&s.__html==u.__html||s.__html===t.innerHTML)||(t.innerHTML=s&&s.__html||""))}if(pi(t,f,d,a,c),s)e.__k=[];else if(h=e.props.children,tr(t,Array.isArray(h)?h:[h],e,n,r,a&&_!=="foreignObject",i,o,i?i[0]:n.__k&&Wt(n,0),c),i!=null)for(h=i.length;h--;)i[h]!=null&&Jn(i[h]);c||("value"in f&&(h=f.value)!==void 0&&(h!==t.value||_==="progress"&&!h||_==="option"&&h!==d.value)&&de(t,"value",h,d.value,!1),"checked"in f&&(h=f.checked)!==void 0&&h!==t.checked&&de(t,"checked",h,d.checked,!1))}return t}function cr(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){v.__e(r,n)}}function lr(t,e,n){var r,a;if(v.unmount&&v.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||cr(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){v.__e(i,e)}r.base=r.__P=null,t.__c=void 0}if(r=t.__k)for(a=0;a<r.length;a++)r[a]&&lr(r[a],e,n||typeof t.type!="function");n||t.__e==null||Jn(t.__e),t.__=t.__e=t.__d=void 0}function bi(t,e,n){return this.constructor(t,n)}function Et(t,e,n){var r,a,i;v.__&&v.__(t,e),a=(r=typeof n=="function")?null:n&&n.__k||e.__k,i=[],Ze(e,t=(!r&&n||e).__k=Q(W,null,[t]),a||fe,fe,e.ownerSVGElement!==void 0,!r&&n?[n]:a?null:e.firstChild?Bt.call(e.childNodes):null,i,!r&&n?n:a?a.__e:e.firstChild,r),sr(i,t)}function ur(t,e){Et(t,e,ur)}function hi(t,e,n){var r,a,i,o=J({},t.props);for(i in e)i=="key"?r=e[i]:i=="ref"?a=e[i]:o[i]=e[i];return arguments.length>2&&(o.children=arguments.length>3?Bt.call(arguments,2):n),Ht(t.type,o,r||t.key,a||t.ref,null)}function Je(t,e){var n={__c:e="__cC"+Xn++,__:t,Consumer:function(r,a){return r.children(a)},Provider:function(r){var a,i;return this.getChildContext||(a=[],(i={})[e]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&a.some(function(c){c.__e=!0,Xe(c)})},this.sub=function(o){a.push(o);var c=o.componentWillUnmount;o.componentWillUnmount=function(){a.splice(a.indexOf(o),1),c&&c.call(o)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}Bt=Zn.slice,v={__e:function(t,e,n,r){for(var a,i,o;e=e.__;)if((a=e.__c)&&!a.__)try{if((i=a.constructor)&&i.getDerivedStateFromError!=null&&(a.setState(i.getDerivedStateFromError(t)),o=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(t,r||{}),o=a.__d),o)return a.__E=a}catch(c){t=c}throw t}},Gn=0,K.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=J({},this.state),typeof t=="function"&&(t=t(J({},n),this.props)),t&&J(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),Xe(this))},K.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Xe(this))},K.prototype.render=W,vt=[],Kn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ke=function(t,e){return t.__v.__b-e.__v.__b},_e.__r=0,Xn=0;let g;const et=new Array(128).fill(void 0);et.push(void 0,null,!0,!1);function w(t){return et[t]}let qt=et.length;function vi(t){t<132||(et[t]=qt,qt=t)}function me(t){const e=w(t);return vi(t),e}const fr=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});fr.decode();let Yt=null;function Vt(){return(Yt===null||Yt.byteLength===0)&&(Yt=new Uint8Array(g.memory.buffer)),Yt}function yt(t,e){return fr.decode(Vt().subarray(t,t+e))}function S(t){qt===et.length&&et.push(et.length+1);const e=qt;return qt=et[e],et[e]=t,e}let wt=0;const pe=new TextEncoder("utf-8"),yi=typeof pe.encodeInto=="function"?function(t,e){return pe.encodeInto(t,e)}:function(t,e){const n=pe.encode(t);return e.set(n),{read:t.length,written:n.length}};function Gt(t,e,n){if(n===void 0){const c=pe.encode(t),l=e(c.length);return Vt().subarray(l,l+c.length).set(c),wt=c.length,l}let r=t.length,a=e(r);const i=Vt();let o=0;for(;o<r;o++){const c=t.charCodeAt(o);if(c>127)break;i[a+o]=c}if(o!==r){o!==0&&(t=t.slice(o)),a=n(a,r,r=o+t.length*3);const c=Vt().subarray(a+o,a+r),l=yi(t,c);o+=l.written}return wt=o,a}function $t(t){return t==null}let Kt=null;function Y(){return(Kt===null||Kt.byteLength===0)&&(Kt=new Int32Array(g.memory.buffer)),Kt}let Xt=null;function wi(){return(Xt===null||Xt.byteLength===0)&&(Xt=new Float64Array(g.memory.buffer)),Xt}function Qe(t){const e=typeof t;if(e=="number"||e=="boolean"||t==null)return`${t}`;if(e=="string")return`"${t}"`;if(e=="symbol"){const a=t.description;return a==null?"Symbol":`Symbol(${a})`}if(e=="function"){const a=t.name;return typeof a=="string"&&a.length>0?`Function(${a})`:"Function"}if(Array.isArray(t)){const a=t.length;let i="[";a>0&&(i+=Qe(t[0]));for(let o=1;o<a;o++)i+=", "+Qe(t[o]);return i+="]",i}const n=/\[object ([^\]]+)\]/.exec(toString.call(t));let r;if(n.length>1)r=n[1];else return toString.call(t);if(r=="Object")try{return"Object("+JSON.stringify(t)+")"}catch{return"Object"}return t instanceof Error?`${t.name}: ${t.message}
${t.stack}`:r}function ut(t,e){if(!(t instanceof e))throw new Error(`expected instance of ${e.name}`);return t.ptr}function V(t,e){try{return t.apply(this,e)}catch(n){g.__wbindgen_exn_store(S(n))}}function ki(t,e){return Vt().subarray(t/1,t/1+e)}const I=Object.freeze({Empty:0,0:"Empty",White:1,1:"White",Black:2,2:"Black"}),F=Object.freeze({Default:0,0:"Default",ForcedCapture:1,1:"ForcedCapture",FlyingKings:2,2:"FlyingKings",RegularCaptureBackwards:4,4:"RegularCaptureBackwards",PromotionMoveTermination:8,8:"PromotionMoveTermination"}),xi=Object.freeze({EnglishVariation:0,0:"EnglishVariation",RussianVariation:1,1:"RussianVariation"});class ft{static __wrap(e){const n=Object.create(ft.prototype);return n.ptr=e,n}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();g.__wbg_board_free(e)}constructor(){const e=g.board_new();return ft.__wrap(e)}static from_json(e){const n=Gt(e,g.__wbindgen_malloc,g.__wbindgen_realloc),r=wt,a=g.board_from_json(n,r);return ft.__wrap(a)}to_json(){try{const r=g.__wbindgen_add_to_stack_pointer(-16);g.board_to_json(r,this.ptr);var e=Y()[r/4+0],n=Y()[r/4+1];return yt(e,n)}finally{g.__wbindgen_add_to_stack_pointer(16),g.__wbindgen_free(e,n)}}init_default_state(){g.board_init_default_state(this.ptr)}get_pieces(){const e=g.board_get_pieces(this.ptr);return me(e)}handle_move(e){ut(e,_t),g.board_handle_move(this.ptr,e.ptr)}get_winner(){return g.board_get_winner(this.ptr)>>>0}is_game_over(e){return g.board_is_game_over(this.ptr,e)!==0}}class Si{__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();g.__wbg_checkersai_free(e)}static get_heuristic_value_js(e,n){return ut(e,ft),g.checkersai_get_heuristic_value_js(e.ptr,n)}static get_best_move_alphabeta(e,n,r,a,i){ut(e,ft);let o=0;$t(i)||(ut(i,_t),o=i.__destroy_into_raw());const c=g.checkersai_get_best_move_alphabeta(e.ptr,n,r,a,o);return c===0?void 0:_t.__wrap(c)}}class _r{__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();g.__wbg_checkerssettings_free(e)}static combine_js(e){return g.checkerssettings_combine_js(S(e))}static contains_js(e,n){return g.checkerssettings_contains_js(e,n)!==0}static from_preset(e){return g.checkerssettings_from_preset(e)}}class _t{static __wrap(e){const n=Object.create(_t.prototype);return n.ptr=e,n}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();g.__wbg_move_free(e)}get start_square(){return g.__wbg_get_move_start_square(this.ptr)}set start_square(e){g.__wbg_set_move_start_square(this.ptr,e)}get end_square(){return g.__wbg_get_move_end_square(this.ptr)}set end_square(e){g.__wbg_set_move_end_square(this.ptr,e)}get captured_piece(){const e=g.__wbg_get_move_captured_piece(this.ptr);return e===0?void 0:nt.__wrap(e)}set captured_piece(e){let n=0;$t(e)||(ut(e,nt),n=e.__destroy_into_raw()),g.__wbg_set_move_captured_piece(this.ptr,n)}get moved_piece(){const e=g.__wbg_get_move_moved_piece(this.ptr);return nt.__wrap(e)}set moved_piece(e){ut(e,nt);var n=e.__destroy_into_raw();g.__wbg_set_move_moved_piece(this.ptr,n)}get moved_piece_after_move(){const e=g.__wbg_get_move_moved_piece_after_move(this.ptr);return nt.__wrap(e)}set moved_piece_after_move(e){ut(e,nt);var n=e.__destroy_into_raw();g.__wbg_set_move_moved_piece_after_move(this.ptr,n)}static from_json(e){const n=Gt(e,g.__wbindgen_malloc,g.__wbindgen_realloc),r=wt,a=g.move_from_json(n,r);return _t.__wrap(a)}to_json(){try{const r=g.__wbindgen_add_to_stack_pointer(-16);g.move_to_json(r,this.ptr);var e=Y()[r/4+0],n=Y()[r/4+1];return yt(e,n)}finally{g.__wbindgen_add_to_stack_pointer(16),g.__wbindgen_free(e,n)}}get_forced_moves_js(){const e=g.move_get_forced_moves_js(this.ptr);return me(e)}}class Ci{__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();g.__wbg_movegenerator_free(e)}static get_valid_moves_js(e,n,r){ut(e,ft);const a=g.movegenerator_get_valid_moves_js(e.ptr,n,r);return me(a)}}class nt{static __wrap(e){const n=Object.create(nt.prototype);return n.ptr=e,n}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();g.__wbg_piece_free(e)}get color(){return g.__wbg_get_piece_color(this.ptr)>>>0}set color(e){g.__wbg_set_piece_color(this.ptr,e)}get king(){return g.__wbg_get_piece_king(this.ptr)!==0}set king(e){g.__wbg_set_piece_king(this.ptr,e)}}async function Ni(t,e){if(typeof Response=="function"&&t instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(t,e)}catch(r){if(t.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const n=await t.arrayBuffer();return await WebAssembly.instantiate(n,e)}else{const n=await WebAssembly.instantiate(t,e);return n instanceof WebAssembly.Instance?{instance:n,module:t}:n}}function Ai(){const t={};return t.wbg={},t.wbg.__wbg_piece_new=function(e){const n=nt.__wrap(e);return S(n)},t.wbg.__wbindgen_object_drop_ref=function(e){me(e)},t.wbg.__wbindgen_error_new=function(e,n){const r=new Error(yt(e,n));return S(r)},t.wbg.__wbg_move_new=function(e){const n=_t.__wrap(e);return S(n)},t.wbg.__wbindgen_string_get=function(e,n){const r=w(n),a=typeof r=="string"?r:void 0;var i=$t(a)?0:Gt(a,g.__wbindgen_malloc,g.__wbindgen_realloc),o=wt;Y()[e/4+1]=o,Y()[e/4+0]=i},t.wbg.__wbindgen_is_string=function(e){return typeof w(e)=="string"},t.wbg.__wbg_new_abda76e883ba8a5f=function(){const e=new Error;return S(e)},t.wbg.__wbg_stack_658279fe44541cf6=function(e,n){const r=w(n).stack,a=Gt(r,g.__wbindgen_malloc,g.__wbindgen_realloc),i=wt;Y()[e/4+1]=i,Y()[e/4+0]=a},t.wbg.__wbg_error_f851667af71bcfc6=function(e,n){try{console.error(yt(e,n))}finally{g.__wbindgen_free(e,n)}},t.wbg.__wbindgen_is_object=function(e){const n=w(e);return typeof n=="object"&&n!==null},t.wbg.__wbindgen_jsval_loose_eq=function(e,n){return w(e)==w(n)},t.wbg.__wbindgen_boolean_get=function(e){const n=w(e);return typeof n=="boolean"?n?1:0:2},t.wbg.__wbindgen_number_get=function(e,n){const r=w(n),a=typeof r=="number"?r:void 0;wi()[e/8+1]=$t(a)?0:a,Y()[e/4+0]=!$t(a)},t.wbg.__wbg_crypto_e1d53a1d73fb10b8=function(e){const n=w(e).crypto;return S(n)},t.wbg.__wbg_process_038c26bf42b093f8=function(e){const n=w(e).process;return S(n)},t.wbg.__wbg_versions_ab37218d2f0b24a8=function(e){const n=w(e).versions;return S(n)},t.wbg.__wbg_node_080f4b19d15bc1fe=function(e){const n=w(e).node;return S(n)},t.wbg.__wbg_require_78a3dcfbdba9cbce=function(){return V(function(){const e=module.require;return S(e)},arguments)},t.wbg.__wbindgen_is_function=function(e){return typeof w(e)=="function"},t.wbg.__wbindgen_string_new=function(e,n){const r=yt(e,n);return S(r)},t.wbg.__wbg_msCrypto_6e7d3e1f92610cbb=function(e){const n=w(e).msCrypto;return S(n)},t.wbg.__wbg_getRandomValues_805f1c3d65988a5a=function(){return V(function(e,n){w(e).getRandomValues(w(n))},arguments)},t.wbg.__wbg_randomFillSync_6894564c2c334c42=function(){return V(function(e,n,r){w(e).randomFillSync(ki(n,r))},arguments)},t.wbg.__wbg_get_27fe3dac1c4d0224=function(e,n){const r=w(e)[n>>>0];return S(r)},t.wbg.__wbg_length_e498fbc24f9c1d4f=function(e){return w(e).length},t.wbg.__wbg_new_b525de17f44a8943=function(){const e=new Array;return S(e)},t.wbg.__wbg_newnoargs_2b8b6bd7753c76ba=function(e,n){const r=new Function(yt(e,n));return S(r)},t.wbg.__wbg_next_b7d530c04fd8b217=function(e){const n=w(e).next;return S(n)},t.wbg.__wbg_next_88560ec06a094dea=function(){return V(function(e){const n=w(e).next();return S(n)},arguments)},t.wbg.__wbg_done_1ebec03bbd919843=function(e){return w(e).done},t.wbg.__wbg_value_6ac8da5cc5b3efda=function(e){const n=w(e).value;return S(n)},t.wbg.__wbg_iterator_55f114446221aa5a=function(){return S(Symbol.iterator)},t.wbg.__wbg_get_baf4855f9a986186=function(){return V(function(e,n){const r=Reflect.get(w(e),w(n));return S(r)},arguments)},t.wbg.__wbg_call_95d1ea488d03e4e8=function(){return V(function(e,n){const r=w(e).call(w(n));return S(r)},arguments)},t.wbg.__wbindgen_object_clone_ref=function(e){const n=w(e);return S(n)},t.wbg.__wbg_self_e7c1f827057f6584=function(){return V(function(){const e=self.self;return S(e)},arguments)},t.wbg.__wbg_window_a09ec664e14b1b81=function(){return V(function(){const e=window.window;return S(e)},arguments)},t.wbg.__wbg_globalThis_87cbb8506fecf3a9=function(){return V(function(){const e=globalThis.globalThis;return S(e)},arguments)},t.wbg.__wbg_global_c85a9259e621f3db=function(){return V(function(){const e=global.global;return S(e)},arguments)},t.wbg.__wbindgen_is_undefined=function(e){return w(e)===void 0},t.wbg.__wbg_isArray_39d28997bf6b96b4=function(e){return Array.isArray(w(e))},t.wbg.__wbg_push_49c286f04dd3bf59=function(e,n){return w(e).push(w(n))},t.wbg.__wbg_instanceof_ArrayBuffer_a69f02ee4c4f5065=function(e){let n;try{n=w(e)instanceof ArrayBuffer}catch{n=!1}return n},t.wbg.__wbg_call_9495de66fdbe016b=function(){return V(function(e,n,r){const a=w(e).call(w(n),w(r));return S(a)},arguments)},t.wbg.__wbg_entries_4e1315b774245952=function(e){const n=Object.entries(w(e));return S(n)},t.wbg.__wbg_buffer_cf65c07de34b9a08=function(e){const n=w(e).buffer;return S(n)},t.wbg.__wbg_new_537b7341ce90bb31=function(e){const n=new Uint8Array(w(e));return S(n)},t.wbg.__wbg_set_17499e8aa4003ebd=function(e,n,r){w(e).set(w(n),r>>>0)},t.wbg.__wbg_length_27a2afe8ab42b09f=function(e){return w(e).length},t.wbg.__wbg_instanceof_Uint8Array_01cebe79ca606cca=function(e){let n;try{n=w(e)instanceof Uint8Array}catch{n=!1}return n},t.wbg.__wbg_newwithlength_b56c882b57805732=function(e){const n=new Uint8Array(e>>>0);return S(n)},t.wbg.__wbg_subarray_7526649b91a252a6=function(e,n,r){const a=w(e).subarray(n>>>0,r>>>0);return S(a)},t.wbg.__wbindgen_debug_string=function(e,n){const r=Qe(w(n)),a=Gt(r,g.__wbindgen_malloc,g.__wbindgen_realloc),i=wt;Y()[e/4+1]=i,Y()[e/4+0]=a},t.wbg.__wbindgen_throw=function(e,n){throw new Error(yt(e,n))},t.wbg.__wbindgen_memory=function(){const e=g.memory;return S(e)},t}function Ei(t,e){return g=t.exports,dr.__wbindgen_wasm_module=e,Xt=null,Kt=null,Yt=null,g.__wbindgen_start(),g}async function dr(t){typeof t>"u"&&(t=new URL(""+new URL("wasm_checkers_bg-605548c5.wasm",import.meta.url).href,self.location));const e=Ai();(typeof t=="string"||typeof Request=="function"&&t instanceof Request||typeof URL=="function"&&t instanceof URL)&&(t=fetch(t));const{instance:n,module:r}=await Ni(await t,e);return Ei(n,r)}const mr=Symbol("Comlink.proxy"),Oi=Symbol("Comlink.endpoint"),Pi=Symbol("Comlink.releaseProxy"),tn=Symbol("Comlink.finalizer"),ge=Symbol("Comlink.thrown"),pr=t=>typeof t=="object"&&t!==null||typeof t=="function",ji={canHandle:t=>pr(t)&&t[mr],serialize(t){const{port1:e,port2:n}=new MessageChannel;return br(t,e),[n,[n]]},deserialize(t){return t.start(),vr(t)}},Mi={canHandle:t=>pr(t)&&ge in t,serialize({value:t}){let e;return t instanceof Error?e={isError:!0,value:{message:t.message,name:t.name,stack:t.stack}}:e={isError:!1,value:t},[e,[]]},deserialize(t){throw t.isError?Object.assign(new Error(t.value.message),t.value):t.value}},gr=new Map([["proxy",ji],["throw",Mi]]);function Ti(t,e){for(const n of t)if(e===n||n==="*"||n instanceof RegExp&&n.test(e))return!0;return!1}function br(t,e=globalThis,n=["*"]){e.addEventListener("message",function r(a){if(!a||!a.data)return;if(!Ti(n,a.origin)){console.warn(`Invalid origin '${a.origin}' for comlink proxy`);return}const{id:i,type:o,path:c}=Object.assign({path:[]},a.data),l=(a.data.argumentList||[]).map(kt);let u;try{const s=c.slice(0,-1).reduce((f,_)=>f[_],t),d=c.reduce((f,_)=>f[_],t);switch(o){case"GET":u=d;break;case"SET":s[c.slice(-1)[0]]=kt(a.data.value),u=!0;break;case"APPLY":u=d.apply(s,l);break;case"CONSTRUCT":{const f=new d(...l);u=Ui(f)}break;case"ENDPOINT":{const{port1:f,port2:_}=new MessageChannel;br(t,_),u=zi(f,[f])}break;case"RELEASE":u=void 0;break;default:return}}catch(s){u={value:s,[ge]:0}}Promise.resolve(u).catch(s=>({value:s,[ge]:0})).then(s=>{const[d,f]=ye(s);e.postMessage(Object.assign(Object.assign({},d),{id:i}),f),o==="RELEASE"&&(e.removeEventListener("message",r),hr(e),tn in t&&typeof t[tn]=="function"&&t[tn]())}).catch(s=>{const[d,f]=ye({value:new TypeError("Unserializable return value"),[ge]:0});e.postMessage(Object.assign(Object.assign({},d),{id:i}),f)})}),e.start&&e.start()}function Ri(t){return t.constructor.name==="MessagePort"}function hr(t){Ri(t)&&t.close()}function vr(t,e){return en(t,[],e)}function be(t){if(t)throw new Error("Proxy has been released and is not useable")}function yr(t){return Ot(t,{type:"RELEASE"}).then(()=>{hr(t)})}const he=new WeakMap,ve="FinalizationRegistry"in globalThis&&new FinalizationRegistry(t=>{const e=(he.get(t)||0)-1;he.set(t,e),e===0&&yr(t)});function Di(t,e){const n=(he.get(e)||0)+1;he.set(e,n),ve&&ve.register(t,e,t)}function Ii(t){ve&&ve.unregister(t)}function en(t,e=[],n=function(){}){let r=!1;const a=new Proxy(n,{get(i,o){if(be(r),o===Pi)return()=>{Ii(a),yr(t),r=!0};if(o==="then"){if(e.length===0)return{then:()=>a};const c=Ot(t,{type:"GET",path:e.map(l=>l.toString())}).then(kt);return c.then.bind(c)}return en(t,[...e,o])},set(i,o,c){be(r);const[l,u]=ye(c);return Ot(t,{type:"SET",path:[...e,o].map(s=>s.toString()),value:l},u).then(kt)},apply(i,o,c){be(r);const l=e[e.length-1];if(l===Oi)return Ot(t,{type:"ENDPOINT"}).then(kt);if(l==="bind")return en(t,e.slice(0,-1));const[u,s]=wr(c);return Ot(t,{type:"APPLY",path:e.map(d=>d.toString()),argumentList:u},s).then(kt)},construct(i,o){be(r);const[c,l]=wr(o);return Ot(t,{type:"CONSTRUCT",path:e.map(u=>u.toString()),argumentList:c},l).then(kt)}});return Di(a,t),a}function Li(t){return Array.prototype.concat.apply([],t)}function wr(t){const e=t.map(ye);return[e.map(n=>n[0]),Li(e.map(n=>n[1]))]}const kr=new WeakMap;function zi(t,e){return kr.set(t,e),t}function Ui(t){return Object.assign(t,{[mr]:!0})}function ye(t){for(const[e,n]of gr)if(n.canHandle(t)){const[r,a]=n.serialize(t);return[{type:"HANDLER",name:e,value:r},a]}return[{type:"RAW",value:t},kr.get(t)||[]]}function kt(t){switch(t.type){case"HANDLER":return gr.get(t.name).deserialize(t.value);case"RAW":return t.value}}function Ot(t,e,n){return new Promise(r=>{const a=Fi();t.addEventListener("message",function i(o){!o.data||!o.data.id||o.data.id!==a||(t.removeEventListener("message",i),r(o.data))}),t.start&&t.start(),t.postMessage(Object.assign({id:a},e),n)})}function Fi(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}const xr=vr(new Worker(new URL(""+new URL("wasm-checkers-5dba5d4f.js",import.meta.url).href,self.location),{type:"module"})),Bi="_description_1rj4h_155",Hi="_root_1rj4h_1",Wi="_main_1rj4h_173",qi="_board_1rj4h_179",Sr={description:Bi,root:Hi,main:Wi,board:qi};var xt,E,nn,Cr,Pt=0,Nr=[],we=[],Ar=v.__b,Er=v.__r,Or=v.diffed,Pr=v.__c,jr=v.unmount;function jt(t,e){v.__h&&v.__h(E,t,Pt||e),Pt=0;var n=E.__H||(E.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:we}),n.__[t]}function rt(t){return Pt=1,rn(Tr,t)}function rn(t,e,n){var r=jt(xt++,2);if(r.t=t,!r.__c&&(r.__=[n?n(e):Tr(void 0,e),function(c){var l=r.__N?r.__N[0]:r.__[0],u=r.t(l,c);l!==u&&(r.__N=[u,r.__[1]],r.__c.setState({}))}],r.__c=E,!E.u)){var a=function(c,l,u){if(!r.__c.__H)return!0;var s=r.__c.__H.__.filter(function(f){return f.__c});if(s.every(function(f){return!f.__N}))return!i||i.call(this,c,l,u);var d=!1;return s.forEach(function(f){if(f.__N){var _=f.__[0];f.__=f.__N,f.__N=void 0,_!==f.__[0]&&(d=!0)}}),!(!d&&r.__c.props===c)&&(!i||i.call(this,c,l,u))};E.u=!0;var i=E.shouldComponentUpdate,o=E.componentWillUpdate;E.componentWillUpdate=function(c,l,u){if(this.__e){var s=i;i=void 0,a(c,l,u),i=s}o&&o.call(this,c,l,u)},E.shouldComponentUpdate=a}return r.__N||r.__}function at(t,e){var n=jt(xt++,3);!v.__s&&cn(n.__H,e)&&(n.__=t,n.i=e,E.__H.__h.push(n))}function ke(t,e){var n=jt(xt++,4);!v.__s&&cn(n.__H,e)&&(n.__=t,n.i=e,E.__h.push(n))}function Yi(t){return Pt=5,an(function(){return{current:t}},[])}function Vi(t,e,n){Pt=6,ke(function(){return typeof t=="function"?(t(e()),function(){return t(null)}):t?(t.current=e(),function(){return t.current=null}):void 0},n==null?n:n.concat(t))}function an(t,e){var n=jt(xt++,7);return cn(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function Gi(t,e){return Pt=8,an(function(){return t},e)}function on(t){var e=E.context[t.__c],n=jt(xt++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub(E)),e.props.value):t.__}function $i(t,e){v.useDebugValue&&v.useDebugValue(e?e(t):t)}function Ki(){var t=jt(xt++,11);if(!t.__){for(var e=E.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var n=e.__m||(e.__m=[0,0]);t.__="P"+n[0]+"-"+n[1]++}return t.__}function Xi(){for(var t;t=Nr.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(xe),t.__H.__h.forEach(sn),t.__H.__h=[]}catch(e){t.__H.__h=[],v.__e(e,t.__v)}}v.__b=function(t){E=null,Ar&&Ar(t)},v.__r=function(t){Er&&Er(t),xt=0;var e=(E=t.__c).__H;e&&(nn===E?(e.__h=[],E.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=we,n.__N=n.i=void 0})):(e.__h.forEach(xe),e.__h.forEach(sn),e.__h=[])),nn=E},v.diffed=function(t){Or&&Or(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Nr.push(e)!==1&&Cr===v.requestAnimationFrame||((Cr=v.requestAnimationFrame)||Zi)(Xi)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==we&&(n.__=n.__V),n.i=void 0,n.__V=we})),nn=E=null},v.__c=function(t,e){e.some(function(n){try{n.__h.forEach(xe),n.__h=n.__h.filter(function(r){return!r.__||sn(r)})}catch(r){e.some(function(a){a.__h&&(a.__h=[])}),e=[],v.__e(r,n.__v)}}),Pr&&Pr(t,e)},v.unmount=function(t){jr&&jr(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{xe(r)}catch(a){e=a}}),n.__H=void 0,e&&v.__e(e,n.__v))};var Mr=typeof requestAnimationFrame=="function";function Zi(t){var e,n=function(){clearTimeout(r),Mr&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);Mr&&(e=requestAnimationFrame(n))}function xe(t){var e=E,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),E=e}function sn(t){var e=E;t.__c=t.__(),E=e}function cn(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function Tr(t,e){return typeof e=="function"?e(t):e}const Ji="_description_1tphd_155",Qi="_root_1tphd_1",to="_board_1tphd_173",eo={description:Ji,root:Qi,board:to};var Se={prefix:"fas",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},no={prefix:"fas",iconName:"chevron-up",icon:[448,512,[],"f077","M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},ro={prefix:"fas",iconName:"crown",icon:[576,512,[128081],"f521","M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"]},Ce={prefix:"fas",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"]},ao={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]};function Rr(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Rr(Object(n),!0).forEach(function(r){L(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Rr(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ne(t){return Ne=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ne(t)}function io(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Dr(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function oo(t,e,n){return e&&Dr(t.prototype,e),n&&Dr(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function L(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ln(t,e){return co(t)||uo(t,e)||Ir(t,e)||_o()}function Zt(t){return so(t)||lo(t)||Ir(t)||fo()}function so(t){if(Array.isArray(t))return un(t)}function co(t){if(Array.isArray(t))return t}function lo(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function uo(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,c;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(l){i=!0,c=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw c}}return r}}function Ir(t,e){if(t){if(typeof t=="string")return un(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return un(t,e)}}function un(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function fo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Lr=function(){},fn={},zr={},Ur=null,Fr={mark:Lr,measure:Lr};try{typeof window<"u"&&(fn=window),typeof document<"u"&&(zr=document),typeof MutationObserver<"u"&&(Ur=MutationObserver),typeof performance<"u"&&(Fr=performance)}catch{}var mo=fn.navigator||{},Br=mo.userAgent,Hr=Br===void 0?"":Br,dt=fn,O=zr,Wr=Ur,Ae=Fr;dt.document;var it=!!O.documentElement&&!!O.head&&typeof O.addEventListener=="function"&&typeof O.createElement=="function",qr=~Hr.indexOf("MSIE")||~Hr.indexOf("Trident/"),Ee,Oe,Pe,je,Me,ot="___FONT_AWESOME___",_n=16,Yr="fa",Vr="svg-inline--fa",St="data-fa-i2svg",dn="data-fa-pseudo-element",po="data-fa-pseudo-element-pending",mn="data-prefix",pn="data-icon",Gr="fontawesome-i2svg",go="async",bo=["HTML","HEAD","STYLE","SCRIPT"],$r=function(){try{return!0}catch{return!1}}(),P="classic",M="sharp",gn=[P,M];function Jt(t){return new Proxy(t,{get:function(e,n){return n in e?e[n]:e[P]}})}var Qt=Jt((Ee={},L(Ee,P,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),L(Ee,M,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),Ee)),te=Jt((Oe={},L(Oe,P,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),L(Oe,M,{solid:"fass",regular:"fasr"}),Oe)),ee=Jt((Pe={},L(Pe,P,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),L(Pe,M,{fass:"fa-solid",fasr:"fa-regular"}),Pe)),ho=Jt((je={},L(je,P,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),L(je,M,{"fa-solid":"fass","fa-regular":"fasr"}),je)),vo=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,Kr="fa-layers-text",yo=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,wo=Jt((Me={},L(Me,P,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),L(Me,M,{900:"fass",400:"fasr"}),Me)),Xr=[1,2,3,4,5,6,7,8,9,10],ko=Xr.concat([11,12,13,14,15,16,17,18,19,20]),xo=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ct={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ne=new Set;Object.keys(te[P]).map(ne.add.bind(ne)),Object.keys(te[M]).map(ne.add.bind(ne));var So=[].concat(gn,Zt(ne),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ct.GROUP,Ct.SWAP_OPACITY,Ct.PRIMARY,Ct.SECONDARY]).concat(Xr.map(function(t){return"".concat(t,"x")})).concat(ko.map(function(t){return"w-".concat(t)})),re=dt.FontAwesomeConfig||{};function Co(t){var e=O.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function No(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(O&&typeof O.querySelector=="function"){var Ao=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ao.forEach(function(t){var e=ln(t,2),n=e[0],r=e[1],a=No(Co(n));a!=null&&(re[r]=a)})}var Zr={styleDefault:"solid",familyDefault:"classic",cssPrefix:Yr,replacementClass:Vr,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};re.familyPrefix&&(re.cssPrefix=re.familyPrefix);var Mt=p(p({},Zr),re);Mt.autoReplaceSvg||(Mt.observeMutations=!1);var b={};Object.keys(Zr).forEach(function(t){Object.defineProperty(b,t,{enumerable:!0,set:function(e){Mt[t]=e,ae.forEach(function(n){return n(b)})},get:function(){return Mt[t]}})}),Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(t){Mt.cssPrefix=t,ae.forEach(function(e){return e(b)})},get:function(){return Mt.cssPrefix}}),dt.FontAwesomeConfig=b;var ae=[];function Eo(t){return ae.push(t),function(){ae.splice(ae.indexOf(t),1)}}var mt=_n,X={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Oo(t){if(!(!t||!it)){var e=O.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=O.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return O.head.insertBefore(e,r),t}}var Po="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ie(){for(var t=12,e="";t-- >0;)e+=Po[Math.random()*62|0];return e}function Tt(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function bn(t){return t.classList?Tt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Jr(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function jo(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Jr(t[n]),'" ')},"").trim()}function Te(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function hn(t){return t.size!==X.size||t.x!==X.x||t.y!==X.y||t.rotate!==X.rotate||t.flipX||t.flipY}function Mo(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),c="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(c)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function To(t){var e=t.transform,n=t.width,r=n===void 0?_n:n,a=t.height,i=a===void 0?_n:a,o=t.startCentered,c=o===void 0?!1:o,l="";return c&&qr?l+="translate(".concat(e.x/mt-r/2,"em, ").concat(e.y/mt-i/2,"em) "):c?l+="translate(calc(-50% + ".concat(e.x/mt,"em), calc(-50% + ").concat(e.y/mt,"em)) "):l+="translate(".concat(e.x/mt,"em, ").concat(e.y/mt,"em) "),l+="scale(".concat(e.size/mt*(e.flipX?-1:1),", ").concat(e.size/mt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Ro=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Qr(){var t=Yr,e=Vr,n=b.cssPrefix,r=b.replacementClass,a=Ro;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),c=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(c,".".concat(r))}return a}var ta=!1;function vn(){b.autoAddCss&&!ta&&(Oo(Qr()),ta=!0)}var Do={mixout:function(){return{dom:{css:Qr,insertCss:vn}}},hooks:function(){return{beforeDOMElementCreation:function(){vn()},beforeI2svg:function(){vn()}}}},st=dt||{};st[ot]||(st[ot]={}),st[ot].styles||(st[ot].styles={}),st[ot].hooks||(st[ot].hooks={}),st[ot].shims||(st[ot].shims=[]);var G=st[ot],ea=[],Io=function t(){O.removeEventListener("DOMContentLoaded",t),Re=1,ea.map(function(e){return e()})},Re=!1;it&&(Re=(O.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(O.readyState),Re||O.addEventListener("DOMContentLoaded",Io));function Lo(t){it&&(Re?setTimeout(t,0):ea.push(t))}function oe(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?Jr(t):"<".concat(e," ").concat(jo(r),">").concat(i.map(oe).join(""),"</").concat(e,">")}function na(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var zo=function(t,e){return function(n,r,a,i){return t.call(e,n,r,a,i)}},yn=function(t,e,n,r){var a=Object.keys(t),i=a.length,o=r!==void 0?zo(e,r):e,c,l,u;for(n===void 0?(c=1,u=t[a[0]]):(c=0,u=n);c<i;c++)l=a[c],u=o(u,t[l],l,t);return u};function Uo(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function ra(t){var e=Uo(t);return e.length===1?e[0].toString(16):null}function Fo(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function aa(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function wn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=aa(e);typeof G.hooks.addPack=="function"&&!a?G.hooks.addPack(t,aa(e)):G.styles[t]=p(p({},G.styles[t]||{}),i),t==="fas"&&wn("fa",e)}var De,Ie,Le,Rt=G.styles,Bo=G.shims,Ho=(De={},L(De,P,Object.values(ee[P])),L(De,M,Object.values(ee[M])),De),kn=null,ia={},oa={},sa={},ca={},la={},Wo=(Ie={},L(Ie,P,Object.keys(Qt[P])),L(Ie,M,Object.keys(Qt[M])),Ie);function qo(t){return~So.indexOf(t)}function Yo(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!qo(a)?a:null}var ua=function(){var t=function(r){return yn(Rt,function(a,i,o){return a[o]=yn(i,r,{}),a},{})};ia=t(function(r,a,i){if(a[3]&&(r[a[3]]=i),a[2]){var o=a[2].filter(function(c){return typeof c=="number"});o.forEach(function(c){r[c.toString(16)]=i})}return r}),oa=t(function(r,a,i){if(r[i]=i,a[2]){var o=a[2].filter(function(c){return typeof c=="string"});o.forEach(function(c){r[c]=i})}return r}),la=t(function(r,a,i){var o=a[2];return r[i]=i,o.forEach(function(c){r[c]=i}),r});var e="far"in Rt||b.autoFetchSvg,n=yn(Bo,function(r,a){var i=a[0],o=a[1],c=a[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:c}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:c}),r},{names:{},unicodes:{}});sa=n.names,ca=n.unicodes,kn=ze(b.styleDefault,{family:b.familyDefault})};Eo(function(t){kn=ze(t.styleDefault,{family:b.familyDefault})}),ua();function xn(t,e){return(ia[t]||{})[e]}function Vo(t,e){return(oa[t]||{})[e]}function Nt(t,e){return(la[t]||{})[e]}function fa(t){return sa[t]||{prefix:null,iconName:null}}function Go(t){var e=ca[t],n=xn("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function pt(){return kn}var Sn=function(){return{prefix:null,iconName:null,rest:[]}};function ze(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?P:n,a=Qt[r][t],i=te[r][t]||te[r][a],o=t in G.styles?t:null;return i||o||null}var _a=(Le={},L(Le,P,Object.keys(ee[P])),L(Le,M,Object.keys(ee[M])),Le);function Ue(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(e={},L(e,P,"".concat(b.cssPrefix,"-").concat(P)),L(e,M,"".concat(b.cssPrefix,"-").concat(M)),e),o=null,c=P;(t.includes(i[P])||t.some(function(u){return _a[P].includes(u)}))&&(c=P),(t.includes(i[M])||t.some(function(u){return _a[M].includes(u)}))&&(c=M);var l=t.reduce(function(u,s){var d=Yo(b.cssPrefix,s);if(Rt[s]?(s=Ho[c].includes(s)?ho[c][s]:s,o=s,u.prefix=s):Wo[c].indexOf(s)>-1?(o=s,u.prefix=ze(s,{family:c})):d?u.iconName=d:s!==b.replacementClass&&s!==i[P]&&s!==i[M]&&u.rest.push(s),!a&&u.prefix&&u.iconName){var f=o==="fa"?fa(u.iconName):{},_=Nt(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||_||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!Rt.far&&Rt.fas&&!b.autoFetchSvg&&(u.prefix="fas")}return u},Sn());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&c===M&&(Rt.fass||b.autoFetchSvg)&&(l.prefix="fass",l.iconName=Nt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=pt()||"fas"),l}var $o=function(){function t(){io(this,t),this.definitions={}}return oo(t,[{key:"add",value:function(){for(var e=this,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(o){e.definitions[o]=p(p({},e.definitions[o]||{}),i[o]),wn(o,i[o]);var c=ee[P][o];c&&wn(c,i[o]),ua()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(a){var i=r[a],o=i.prefix,c=i.iconName,l=i.icon,u=l[2];e[o]||(e[o]={}),u.length>0&&u.forEach(function(s){typeof s=="string"&&(e[o][s]=l)}),e[o][c]=l}),e}}]),t}(),da=[],Dt={},It={},Ko=Object.keys(It);function Xo(t,e){var n=e.mixoutsTo;return da=t,Dt={},Object.keys(It).forEach(function(r){Ko.indexOf(r)===-1&&delete It[r]}),da.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Ne(a[o])==="object"&&Object.keys(a[o]).forEach(function(c){n[o]||(n[o]={}),n[o][c]=a[o][c]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Dt[o]||(Dt[o]=[]),Dt[o].push(i[o])})}r.provides&&r.provides(It)}),n}function Cn(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Dt[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function At(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=Dt[t]||[];a.forEach(function(i){i.apply(null,n)})}function ct(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return It[t]?It[t].apply(null,e):void 0}function Nn(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||pt();if(e)return e=Nt(n,e)||e,na(ma.definitions,n,e)||na(G.styles,n,e)}var ma=new $o,Zo=function(){b.autoReplaceSvg=!1,b.observeMutations=!1,At("noAuto")},Jo={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return it?(At("beforeI2svg",t),ct("pseudoElements2svg",t),ct("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.autoReplaceSvgRoot;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,Lo(function(){ts({autoReplaceSvgRoot:e}),At("watch",t)})}},Qo={icon:function(t){if(t===null)return null;if(Ne(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Nt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ze(t[0]);return{prefix:n,iconName:Nt(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(b.cssPrefix,"-"))>-1||t.match(vo))){var r=Ue(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||pt(),iconName:Nt(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var a=pt();return{prefix:a,iconName:Nt(a,t)||t}}}},B={noAuto:Zo,config:b,dom:Jo,parse:Qo,library:ma,findIconDefinition:Nn,toHtml:oe},ts=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.autoReplaceSvgRoot,n=e===void 0?O:e;(Object.keys(G.styles).length>0||b.autoFetchSvg)&&it&&b.autoReplaceSvg&&B.dom.i2svg({node:n})};function Fe(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(n){return oe(n)})}}),Object.defineProperty(t,"node",{get:function(){if(it){var n=O.createElement("div");return n.innerHTML=t.html,n.children}}}),t}function es(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(hn(o)&&n.found&&!r.found){var c=n.width,l=n.height,u={x:c/l/2,y:.5};a.style=Te(p(p({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function ns(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(b.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:p(p({},a),{},{id:o}),children:r}]}]}function An(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,o=t.transform,c=t.symbol,l=t.title,u=t.maskId,s=t.titleId,d=t.extra,f=t.watchable,_=f===void 0?!1:f,h=r.found?r:n,A=h.width,y=h.height,x=a==="fak",N=[b.replacementClass,i?"".concat(b.cssPrefix,"-").concat(i):""].filter(function(z){return d.classes.indexOf(z)===-1}).filter(function(z){return z!==""||!!z}).concat(d.classes).join(" "),j={children:[],attributes:p(p({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:N,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(y)})},R=x&&!~d.classes.indexOf("fa-fw")?{width:"".concat(A/y*16*.0625,"em")}:{};_&&(j.attributes[St]=""),l&&(j.children.push({tag:"title",attributes:{id:j.attributes["aria-labelledby"]||"title-".concat(s||ie())},children:[l]}),delete j.attributes.title);var D=p(p({},j),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:c,styles:p(p({},R),d.styles)}),U=r.found&&n.found?ct("generateAbstractMask",D)||{children:[],attributes:{}}:ct("generateAbstractIcon",D)||{children:[],attributes:{}},q=U.children,C=U.attributes;return D.children=q,D.attributes=C,c?ns(D):es(D)}function pa(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,o=t.extra,c=t.watchable,l=c===void 0?!1:c,u=p(p(p({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[St]="");var s=p({},o.styles);hn(a)&&(s.transform=To({transform:a,startCentered:!0,width:n,height:r}),s["-webkit-transform"]=s.transform);var d=Te(s);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),i&&f.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),f}function rs(t){var e=t.content,n=t.title,r=t.extra,a=p(p(p({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Te(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var En=G.styles;function On(t){var e=t[0],n=t[1],r=t.slice(4),a=ln(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat(Ct.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Ct.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Ct.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var as={found:!1,width:512,height:512};function is(t,e){!$r&&!b.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Pn(t,e){var n=e;return e==="fa"&&b.styleDefault!==null&&(e=pt()),new Promise(function(r,a){if(ct("missingIconAbstract"),n==="fa"){var i=fa(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&En[e]&&En[e][t]){var o=En[e][t];return r(On(o))}is(t,e),r(p(p({},as),{},{icon:b.showMissingIcons&&t?ct("missingIconAbstract")||{}:{}}))})}var ga=function(){},jn=b.measurePerformance&&Ae&&Ae.mark&&Ae.measure?Ae:{mark:ga,measure:ga},se='FA "6.3.0"',os=function(t){return jn.mark("".concat(se," ").concat(t," begins")),function(){return ba(t)}},ba=function(t){jn.mark("".concat(se," ").concat(t," ends")),jn.measure("".concat(se," ").concat(t),"".concat(se," ").concat(t," begins"),"".concat(se," ").concat(t," ends"))},Mn={begin:os,end:ba},Be=function(){};function ha(t){var e=t.getAttribute?t.getAttribute(St):null;return typeof e=="string"}function ss(t){var e=t.getAttribute?t.getAttribute(mn):null,n=t.getAttribute?t.getAttribute(pn):null;return e&&n}function cs(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(b.replacementClass)}function ls(){if(b.autoReplaceSvg===!0)return He.replace;var t=He[b.autoReplaceSvg];return t||He.replace}function us(t){return O.createElementNS("http://www.w3.org/2000/svg",t)}function fs(t){return O.createElement(t)}function va(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?us:fs:n;if(typeof t=="string")return O.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){a.appendChild(va(o,{ceFn:r}))}),a}function _s(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var He={replace:function(t){var e=t[0];if(e.parentNode)if(t[1].forEach(function(r){e.parentNode.insertBefore(va(r),e)}),e.getAttribute(St)===null&&b.keepOriginalSource){var n=O.createComment(_s(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){var e=t[0],n=t[1];if(~bn(e).indexOf(b.replacementClass))return He.replace(t);var r=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var a=n[0].attributes.class.split(" ").reduce(function(o,c){return c===b.replacementClass||c.match(r)?o.toSvg.push(c):o.toNode.push(c),o},{toNode:[],toSvg:[]});n[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",a.toNode.join(" "))}var i=n.map(function(o){return oe(o)}).join(`
`);e.setAttribute(St,""),e.innerHTML=i}};function ya(t){t()}function wa(t,e){var n=typeof e=="function"?e:Be;if(t.length===0)n();else{var r=ya;b.mutateApproach===go&&(r=dt.requestAnimationFrame||ya),r(function(){var a=ls(),i=Mn.begin("mutate");t.map(a),i(),n()})}}var Tn=!1;function ka(){Tn=!0}function Rn(){Tn=!1}var We=null;function xa(t){if(Wr&&b.observeMutations){var e=t.treeCallback,n=e===void 0?Be:e,r=t.nodeCallback,a=r===void 0?Be:r,i=t.pseudoElementsCallback,o=i===void 0?Be:i,c=t.observeMutationsRoot,l=c===void 0?O:c;We=new Wr(function(u){if(!Tn){var s=pt();Tt(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!ha(d.addedNodes[0])&&(b.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&b.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&ha(d.target)&&~xo.indexOf(d.attributeName))if(d.attributeName==="class"&&ss(d.target)){var f=Ue(bn(d.target)),_=f.prefix,h=f.iconName;d.target.setAttribute(mn,_||s),h&&d.target.setAttribute(pn,h)}else cs(d.target)&&a(d.target)})}}),it&&We.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ds(){We&&We.disconnect()}function ms(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],c=i.slice(1);return o&&c.length>0&&(r[o]=c.join(":").trim()),r},{})),n}function ps(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=Ue(bn(t));return a.prefix||(a.prefix=pt()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Vo(a.prefix,t.innerText)||xn(a.prefix,ra(t.innerText))),!a.iconName&&b.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function gs(t){var e=Tt(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return b.autoA11y&&(n?e["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(r||ie()):(e["aria-hidden"]="true",e.focusable="false")),e}function bs(){return{iconName:null,title:null,titleId:null,prefix:null,transform:X,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Sa(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ps(t),r=n.iconName,a=n.prefix,i=n.rest,o=gs(t),c=Cn("parseNodeAttributes",{},t),l=e.styleParser?ms(t):[];return p({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:X,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},c)}var hs=G.styles;function Ca(t){var e=b.autoReplaceSvg==="nest"?Sa(t,{styleParser:!1}):Sa(t);return~e.extra.classes.indexOf(Kr)?ct("generateLayersText",t,e):ct("generateSvgReplacementMutation",t,e)}var gt=new Set;gn.map(function(t){gt.add("fa-".concat(t))}),Object.keys(Qt[P]).map(gt.add.bind(gt)),Object.keys(Qt[M]).map(gt.add.bind(gt)),gt=Zt(gt);function Na(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!it)return Promise.resolve();var n=O.documentElement.classList,r=function(s){return n.add("".concat(Gr,"-").concat(s))},a=function(s){return n.remove("".concat(Gr,"-").concat(s))},i=b.autoFetchSvg?gt:gn.map(function(s){return"fa-".concat(s)}).concat(Object.keys(hs));i.includes("fa")||i.push("fa");var o=[".".concat(Kr,":not([").concat(St,"])")].concat(i.map(function(s){return".".concat(s,":not([").concat(St,"])")})).join(", ");if(o.length===0)return Promise.resolve();var c=[];try{c=Tt(t.querySelectorAll(o))}catch{}if(c.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Mn.begin("onTree"),u=c.reduce(function(s,d){try{var f=Ca(d);f&&s.push(f)}catch(_){$r||_.name==="MissingIcon"&&console.error(_)}return s},[]);return new Promise(function(s,d){Promise.all(u).then(function(f){wa(f,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),s()})}).catch(function(f){l(),d(f)})})}function vs(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ca(t).then(function(n){n&&wa([n],e)})}function ys(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Nn(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Nn(a||{})),t(r,p(p({},n),{},{mask:a}))}}var ws=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,r=n===void 0?X:n,a=e.symbol,i=a===void 0?!1:a,o=e.mask,c=o===void 0?null:o,l=e.maskId,u=l===void 0?null:l,s=e.title,d=s===void 0?null:s,f=e.titleId,_=f===void 0?null:f,h=e.classes,A=h===void 0?[]:h,y=e.attributes,x=y===void 0?{}:y,N=e.styles,j=N===void 0?{}:N;if(t){var R=t.prefix,D=t.iconName,U=t.icon;return Fe(p({type:"icon"},t),function(){return At("beforeDOMElementCreation",{iconDefinition:t,params:e}),b.autoA11y&&(d?x["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(_||ie()):(x["aria-hidden"]="true",x.focusable="false")),An({icons:{main:On(U),mask:c?On(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:R,iconName:D,transform:p(p({},X),r),symbol:i,title:d,maskId:u,titleId:_,extra:{attributes:x,styles:j,classes:A}})})}},ks={mixout:function(){return{icon:ys(ws)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=Na,t.nodeCallback=vs,t}}},provides:function(t){t.i2svg=function(e){var n=e.node,r=n===void 0?O:n,a=e.callback,i=a===void 0?function(){}:a;return Na(r,i)},t.generateSvgReplacementMutation=function(e,n){var r=n.iconName,a=n.title,i=n.titleId,o=n.prefix,c=n.transform,l=n.symbol,u=n.mask,s=n.maskId,d=n.extra;return new Promise(function(f,_){Promise.all([Pn(r,o),u.iconName?Pn(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(h){var A=ln(h,2),y=A[0],x=A[1];f([e,An({icons:{main:y,mask:x},prefix:o,iconName:r,transform:c,symbol:l,maskId:s,title:a,titleId:i,extra:d,watchable:!0})])}).catch(_)})},t.generateAbstractIcon=function(e){var n=e.children,r=e.attributes,a=e.main,i=e.transform,o=e.styles,c=Te(o);c.length>0&&(r.style=c);var l;return hn(i)&&(l=ct("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),n.push(l||a.icon),{children:n,attributes:r}}}},xs={mixout:function(){return{layer:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.classes,r=n===void 0?[]:n;return Fe({type:"layer"},function(){At("beforeDOMElementCreation",{assembler:t,params:e});var a=[];return t(function(i){Array.isArray(i)?i.map(function(o){a=a.concat(o.abstract)}):a=a.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers")].concat(Zt(r)).join(" ")},children:a}]})}}}},Ss={mixout:function(){return{counter:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.title,r=n===void 0?null:n,a=e.classes,i=a===void 0?[]:a,o=e.attributes,c=o===void 0?{}:o,l=e.styles,u=l===void 0?{}:l;return Fe({type:"counter",content:t},function(){return At("beforeDOMElementCreation",{content:t,params:e}),rs({content:t.toString(),title:r,extra:{attributes:c,styles:u,classes:["".concat(b.cssPrefix,"-layers-counter")].concat(Zt(i))}})})}}}},Cs={mixout:function(){return{text:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,r=n===void 0?X:n,a=e.title,i=a===void 0?null:a,o=e.classes,c=o===void 0?[]:o,l=e.attributes,u=l===void 0?{}:l,s=e.styles,d=s===void 0?{}:s;return Fe({type:"text",content:t},function(){return At("beforeDOMElementCreation",{content:t,params:e}),pa({content:t,transform:p(p({},X),r),title:i,extra:{attributes:u,styles:d,classes:["".concat(b.cssPrefix,"-layers-text")].concat(Zt(c))}})})}}},provides:function(t){t.generateLayersText=function(e,n){var r=n.title,a=n.transform,i=n.extra,o=null,c=null;if(qr){var l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/l,c=u.height/l}return b.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,pa({content:e.innerHTML,width:o,height:c,transform:a,title:r,extra:i,watchable:!0})])}}},Ns=new RegExp('"',"ug"),Aa=[1105920,1112319];function As(t){var e=t.replace(Ns,""),n=Fo(e,0),r=n>=Aa[0]&&n<=Aa[1],a=e.length===2?e[0]===e[1]:!1;return{value:ra(a?e[0]:e),isSecondary:r||a}}function Ea(t,e){var n="".concat(po).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=Tt(t.children),o=i.filter(function(q){return q.getAttribute(dn)===e})[0],c=dt.getComputedStyle(t,e),l=c.getPropertyValue("font-family").match(yo),u=c.getPropertyValue("font-weight"),s=c.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&s!=="none"&&s!==""){var d=c.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?M:P,_=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?te[f][l[2].toLowerCase()]:wo[f][u],h=As(d),A=h.value,y=h.isSecondary,x=l[0].startsWith("FontAwesome"),N=xn(_,A),j=N;if(x){var R=Go(A);R.iconName&&R.prefix&&(N=R.iconName,_=R.prefix)}if(N&&!y&&(!o||o.getAttribute(mn)!==_||o.getAttribute(pn)!==j)){t.setAttribute(n,j),o&&t.removeChild(o);var D=bs(),U=D.extra;U.attributes[dn]=e,Pn(N,_).then(function(q){var C=An(p(p({},D),{},{icons:{main:q,mask:Sn()},prefix:_,iconName:j,extra:U,watchable:!0})),z=O.createElement("svg");e==="::before"?t.insertBefore(z,t.firstChild):t.appendChild(z),z.outerHTML=C.map(function(ht){return oe(ht)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Es(t){return Promise.all([Ea(t,"::before"),Ea(t,"::after")])}function Os(t){return t.parentNode!==document.head&&!~bo.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(dn)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Oa(t){if(it)return new Promise(function(e,n){var r=Tt(t.querySelectorAll("*")).filter(Os).map(Es),a=Mn.begin("searchPseudoElements");ka(),Promise.all(r).then(function(){a(),Rn(),e()}).catch(function(){a(),Rn(),n()})})}var Ps={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Oa,t}}},provides:function(t){t.pseudoElements2svg=function(e){var n=e.node,r=n===void 0?O:n;b.searchPseudoElements&&Oa(r)}}},Pa=!1,js={mixout:function(){return{dom:{unwatch:function(){ka(),Pa=!0}}}},hooks:function(){return{bootstrap:function(){xa(Cn("mutationObserverCallbacks",{}))},noAuto:function(){ds()},watch:function(t){var e=t.observeMutationsRoot;Pa?Rn():xa(Cn("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},ja=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,r){var a=r.toLowerCase().split("-"),i=a[0],o=a.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)},Ms={mixout:function(){return{parse:{transform:function(t){return ja(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-transform");return n&&(t.transform=ja(n)),t}}},provides:function(t){t.generateAbstractTransformGrouping=function(e){var n=e.main,r=e.transform,a=e.containerWidth,i=e.iconWidth,o={transform:"translate(".concat(a/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),s={transform:"".concat(c," ").concat(l," ").concat(u)},d={transform:"translate(".concat(i/2*-1," -256)")},f={outer:o,inner:s,path:d};return{tag:"g",attributes:p({},f.outer),children:[{tag:"g",attributes:p({},f.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:p(p({},n.icon.attributes),f.path)}]}]}}}},Dn={x:0,y:0,width:"100%",height:"100%"};function Ma(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ts(t){return t.tag==="g"?t.children:[t]}var Rs={hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-mask"),r=n?Ue(n.split(" ").map(function(a){return a.trim()})):Sn();return r.prefix||(r.prefix=pt()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides:function(t){t.generateAbstractMask=function(e){var n=e.children,r=e.attributes,a=e.main,i=e.mask,o=e.maskId,c=e.transform,l=a.width,u=a.icon,s=i.width,d=i.icon,f=Mo({transform:c,containerWidth:s,iconWidth:l}),_={tag:"rect",attributes:p(p({},Dn),{},{fill:"white"})},h=u.children?{children:u.children.map(Ma)}:{},A={tag:"g",attributes:p({},f.inner),children:[Ma(p({tag:u.tag,attributes:p(p({},u.attributes),f.path)},h))]},y={tag:"g",attributes:p({},f.outer),children:[A]},x="mask-".concat(o||ie()),N="clip-".concat(o||ie()),j={tag:"mask",attributes:p(p({},Dn),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,y]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:Ts(d)},j]};return n.push(R,{tag:"rect",attributes:p({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(x,")")},Dn)}),{children:n,attributes:r}}}},Ds={provides:function(t){var e=!1;dt.matchMedia&&(e=dt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:p(p({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=p(p({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:p(p({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:p(p({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:p(p({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:p(p({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:p(p({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:p(p({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:p(p({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Is={hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},Ls=[Do,ks,xs,Ss,Cs,Ps,js,Ms,Rs,Ds,Is];Xo(Ls,{mixoutsTo:B}),B.noAuto,B.config,B.library,B.dom;var In=B.parse;B.findIconDefinition,B.toHtml;var zs=B.icon;B.layer,B.text,B.counter;var k={},Us={get exports(){return k},set exports(t){k=t}},Fs="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Bs=Fs,Hs=Bs;function Ta(){}function Ra(){}Ra.resetWarningCache=Ta;var Ws=function(){function t(r,a,i,o,c,l){if(l!==Hs){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Ra,resetWarningCache:Ta};return n.PropTypes=n,n};Us.exports=Ws();function Da(t,e){for(var n in e)t[n]=e[n];return t}function Ln(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var r in e)if(r!=="__source"&&t[r]!==e[r])return!0;return!1}function zn(t,e){return t===e&&(t!==0||1/t==1/e)||t!=t&&e!=e}function Un(t){this.props=t}function qs(t,e){function n(a){var i=this.props.ref,o=i==a.ref;return!o&&i&&(i.call?i(null):i.current=null),e?!e(this.props,a)||!o:Ln(this.props,a)}function r(a){return this.shouldComponentUpdate=n,Q(t,a)}return r.displayName="Memo("+(t.displayName||t.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(Un.prototype=new K).isPureReactComponent=!0,Un.prototype.shouldComponentUpdate=function(t,e){return Ln(this.props,t)||Ln(this.state,e)};var Ia=v.__b;v.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),Ia&&Ia(t)};var Ys=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Vs(t){function e(n){var r=Da({},n);return delete r.ref,t(r,n.ref||null)}return e.$$typeof=Ys,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e}var La=function(t,e){return t==null?null:tt(tt(t).map(e))},Gs={map:La,forEach:La,count:function(t){return t?tt(t).length:0},only:function(t){var e=tt(t);if(e.length!==1)throw"Children.only";return e[0]},toArray:tt},$s=v.__e;v.__e=function(t,e,n,r){if(t.then){for(var a,i=e;i=i.__;)if((a=i.__c)&&a.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),a.__c(t,e)}$s(t,e,n,r)};var za=v.unmount;function Ua(t,e,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),t.__c.__H=null),(t=Da({},t)).__c!=null&&(t.__c.__P===n&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(r){return Ua(r,e,n)})),t}function Fa(t,e,n){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(r){return Fa(r,e,n)}),t.__c&&t.__c.__P===e&&(t.__e&&n.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=n)),t}function qe(){this.__u=0,this.t=null,this.__b=null}function Ba(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function Ks(t){var e,n,r;function a(i){if(e||(e=t()).then(function(o){n=o.default||o},function(o){r=o}),r)throw r;if(!n)throw e;return Q(n,i)}return a.displayName="Lazy",a.__f=!0,a}function ce(){this.u=null,this.o=null}v.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&t.__h===!0&&(t.type=null),za&&za(t)},(qe.prototype=new K).__c=function(t,e){var n=e.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var a=Ba(r.__v),i=!1,o=function(){i||(i=!0,n.__R=null,a?a(c):c())};n.__R=o;var c=function(){if(!--r.__u){if(r.state.__a){var u=r.state.__a;r.__v.__k[0]=Fa(u,u.__c.__P,u.__c.__O)}var s;for(r.setState({__a:r.__b=null});s=r.t.pop();)s.forceUpdate()}},l=e.__h===!0;r.__u++||l||r.setState({__a:r.__b=r.__v.__k[0]}),t.then(o,o)},qe.prototype.componentWillUnmount=function(){this.t=[]},qe.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Ua(this.__b,n,r.__O=r.__P)}this.__b=null}var a=e.__a&&Q(W,null,t.fallback);return a&&(a.__h=null),[Q(W,null,e.__a?null:t.children),a]};var Ha=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};function Xs(t){return this.getChildContext=function(){return t.context},t.children}function Zs(t){var e=this,n=t.i;e.componentWillUnmount=function(){Et(null,e.l),e.l=null,e.i=null},e.i&&e.i!==n&&e.componentWillUnmount(),t.__v?(e.l||(e.i=n,e.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),e.i.appendChild(r)},insertBefore:function(r,a){this.childNodes.push(r),e.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),e.i.removeChild(r)}}),Et(Q(Xs,{context:e.context},t.__v),e.l)):e.l&&e.componentWillUnmount()}function Js(t,e){var n=Q(Zs,{__v:t,i:e});return n.containerInfo=e,n}(ce.prototype=new K).__a=function(t){var e=this,n=Ba(e.__v),r=e.o.get(t);return r[0]++,function(a){var i=function(){e.props.revealOrder?(r.push(a),Ha(e,t,r)):a()};n?n(i):i()}},ce.prototype.render=function(t){this.u=null,this.o=new Map;var e=tt(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},ce.prototype.componentDidUpdate=ce.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){Ha(t,n,e)})};var Wa=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Qs=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,tc=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,ec=/[A-Z0-9]/g,nc=typeof document<"u",rc=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};function ac(t,e,n){return e.__k==null&&(e.textContent=""),Et(t,e),typeof n=="function"&&n(),t?t.__c:null}function ic(t,e,n){return ur(t,e),typeof n=="function"&&n(),t?t.__c:null}K.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(K.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var qa=v.event;function oc(){}function sc(){return this.cancelBubble}function cc(){return this.defaultPrevented}v.event=function(t){return qa&&(t=qa(t)),t.persist=oc,t.isPropagationStopped=sc,t.isDefaultPrevented=cc,t.nativeEvent=t};var Fn,Ya={configurable:!0,get:function(){return this.class}},Va=v.vnode;v.vnode=function(t){var e=t.type,n=t.props,r=n;if(typeof e=="string"){for(var a in r={},n){var i=n[a];if(!(a==="value"&&"defaultValue"in n&&i==null||nc&&a==="children"&&e==="noscript")){var o=a.toLowerCase();a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&i===!0?i="":o==="ondoubleclick"?a="ondblclick":o!=="onchange"||e!=="input"&&e!=="textarea"||rc(n.type)?o==="onfocus"?a="onfocusin":o==="onblur"?a="onfocusout":tc.test(a)?a=o:e.indexOf("-")===-1&&Qs.test(a)?a=a.replace(ec,"-$&").toLowerCase():i===null&&(i=void 0):o=a="oninput",o==="oninput"&&r[a=o]&&(a="oninputCapture"),r[a]=i}}e=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=tt(n.children).forEach(function(c){c.props.selected=r.value.indexOf(c.props.value)!=-1})),e=="select"&&r.defaultValue!=null&&(r.value=tt(n.children).forEach(function(c){c.props.selected=r.multiple?r.defaultValue.indexOf(c.props.value)!=-1:r.defaultValue==c.props.value})),t.props=r,n.class!=n.className&&(Ya.enumerable="className"in n,n.className!=null&&(r.class=n.className),Object.defineProperty(r,"className",Ya))}t.$$typeof=Wa,Va&&Va(t)};var Ga=v.__r;v.__r=function(t){Ga&&Ga(t),Fn=t.__c};var $a=v.diffed;v.diffed=function(t){$a&&$a(t);var e=t.props,n=t.__e;n!=null&&t.type==="textarea"&&"value"in e&&e.value!==n.value&&(n.value=e.value==null?"":e.value),Fn=null};var lc={ReactCurrentDispatcher:{current:{readContext:function(t){return Fn.__n[t.__c].props.value}}}};function uc(t){return Q.bind(null,t)}function Ka(t){return!!t&&t.$$typeof===Wa}function fc(t){return Ka(t)?hi.apply(null,arguments):t}function _c(t){return!!t.__k&&(Et(null,t),!0)}function dc(t){return t&&(t.base||t.nodeType===1&&t)||null}var mc=function(t,e){return t(e)},pc=function(t,e){return t(e)},gc=W;function Xa(t){t()}function bc(t){return t}function hc(){return[!1,Xa]}var vc=ke;function yc(t,e){var n=e(),r=rt({h:{__:n,v:e}}),a=r[0].h,i=r[1];return ke(function(){a.__=n,a.v=e,zn(a.__,e())||i({h:a})},[t,n,e]),at(function(){return zn(a.__,a.v())||i({h:a}),t(function(){zn(a.__,a.v())||i({h:a})})},[t]),n}var Za={useState:rt,useId:Ki,useReducer:rn,useEffect:at,useLayoutEffect:ke,useInsertionEffect:vc,useTransition:hc,useDeferredValue:bc,useSyncExternalStore:yc,startTransition:Xa,useRef:Yi,useImperativeHandle:Vi,useMemo:an,useCallback:Gi,useContext:on,useDebugValue:$i,version:"17.0.2",Children:Gs,render:ac,hydrate:ic,unmountComponentAtNode:_c,createPortal:Js,createElement:Q,createContext:Je,createFactory:uc,cloneElement:fc,createRef:mi,Fragment:W,isValidElement:Ka,findDOMNode:dc,Component:K,PureComponent:Un,memo:qs,forwardRef:Vs,flushSync:pc,unstable_batchedUpdates:mc,StrictMode:gc,Suspense:qe,SuspenseList:ce,lazy:Ks,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:lc};function Ja(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function bt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ja(Object(n),!0).forEach(function(r){Lt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ja(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ye(t){return Ye=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ye(t)}function Lt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function wc(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function kc(t,e){if(t==null)return{};var n=wc(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Bn(t){return xc(t)||Sc(t)||Cc(t)||Nc()}function xc(t){if(Array.isArray(t))return Hn(t)}function Sc(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Cc(t,e){if(t){if(typeof t=="string")return Hn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hn(t,e)}}function Hn(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Nc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ac(t){var e,n=t.beat,r=t.fade,a=t.beatFade,i=t.bounce,o=t.shake,c=t.flash,l=t.spin,u=t.spinPulse,s=t.spinReverse,d=t.pulse,f=t.fixedWidth,_=t.inverse,h=t.border,A=t.listItem,y=t.flip,x=t.size,N=t.rotation,j=t.pull,R=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":c,"fa-spin":l,"fa-spin-reverse":s,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":_,"fa-border":h,"fa-li":A,"fa-flip":y===!0,"fa-flip-horizontal":y==="horizontal"||y==="both","fa-flip-vertical":y==="vertical"||y==="both"},Lt(e,"fa-".concat(x),typeof x<"u"&&x!==null),Lt(e,"fa-rotate-".concat(N),typeof N<"u"&&N!==null&&N!==0),Lt(e,"fa-pull-".concat(j),typeof j<"u"&&j!==null),Lt(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(R).map(function(D){return R[D]?D:null}).filter(function(D){return D})}function Ec(t){return t=t-0,t===t}function Qa(t){return Ec(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Oc=["style"];function Pc(t){return t.charAt(0).toUpperCase()+t.slice(1)}function jc(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=Qa(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?e[Pc(a)]=i:e[a]=i,e},{})}function ti(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ti(t,l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var s=e.attributes[u];switch(u){case"class":l.attrs.className=s,delete e.attributes.class;break;case"style":l.attrs.style=jc(s);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=s:l.attrs[Qa(u)]=s}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,c=kc(n,Oc);return a.attrs.style=bt(bt({},a.attrs.style),o),t.apply(void 0,[e.tag,bt(bt({},a.attrs),c)].concat(Bn(r)))}var ei=!1;try{ei=!0}catch{}function Mc(){if(!ei&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ni(t){if(t&&Ye(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(In.icon)return In.icon(t);if(t===null)return null;if(t&&Ye(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Wn(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Lt({},t,e):{}}var Z=Za.forwardRef(function(t,e){var n=t.icon,r=t.mask,a=t.symbol,i=t.className,o=t.title,c=t.titleId,l=t.maskId,u=ni(n),s=Wn("classes",[].concat(Bn(Ac(t)),Bn(i.split(" ")))),d=Wn("transform",typeof t.transform=="string"?In.transform(t.transform):t.transform),f=Wn("mask",ni(r)),_=zs(u,bt(bt(bt(bt({},s),d),f),{},{symbol:a,title:o,titleId:c,maskId:l}));if(!_)return Mc("Could not find icon",u),null;var h=_.abstract,A={ref:e};return Object.keys(t).forEach(function(y){Z.defaultProps.hasOwnProperty(y)||(A[y]=t[y])}),Tc(h[0],A)});Z.displayName="FontAwesomeIcon",Z.propTypes={beat:k.bool,border:k.bool,beatFade:k.bool,bounce:k.bool,className:k.string,fade:k.bool,flash:k.bool,mask:k.oneOfType([k.object,k.array,k.string]),maskId:k.string,fixedWidth:k.bool,inverse:k.bool,flip:k.oneOf([!0,!1,"horizontal","vertical","both"]),icon:k.oneOfType([k.object,k.array,k.string]),listItem:k.bool,pull:k.oneOf(["right","left"]),pulse:k.bool,rotation:k.oneOf([0,90,180,270]),shake:k.bool,size:k.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:k.bool,spinPulse:k.bool,spinReverse:k.bool,symbol:k.oneOfType([k.bool,k.string]),title:k.string,titleId:k.string,transform:k.oneOfType([k.string,k.object]),swapOpacity:k.bool},Z.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Tc=ti.bind(null,Za.createElement);const Rc="_description_1xmb2_155",Dc="_root_1xmb2_1",Ic="_square_1xmb2_173",Lc="_squareFilled_1xmb2_278",zc="_squareMoveable_1xmb2_282",Uc="_blink_1xmb2_1",Fc="_squareIndex_1xmb2_305",Bc="_piece_1xmb2_315",Hc="_pieceBlack_1xmb2_316",Wc="_squareHighlighted_1xmb2_327",qc="_squareSelected_1xmb2_337",Yc="_pieceKingIcon_1xmb2_360",$={description:Rc,root:Dc,square:Ic,squareFilled:Lc,squareMoveable:zc,blink:Uc,squareIndex:Fc,piece:Bc,pieceBlack:Hc,squareHighlighted:Wc,squareSelected:qc,pieceKingIcon:Yc};var Vc=0;function m(t,e,n,r,a,i){var o,c,l={};for(c in e)c=="ref"?o=e[c]:l[c]=e[c];var u={type:t,props:l,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Vc,__source:a,__self:i};if(typeof t=="function"&&(o=t.defaultProps))for(c in o)l[c]===void 0&&(l[c]=o[c]);return v.vnode&&v.vnode(u),u}const ri=!1;function Gc({piece:t,index:e,highlighted:n,selected:r,selectedMoves:a,onMove:i,onSelect:o,onClearSelect:c}){if(t==null){const s=a.find(f=>f.end_square===e),d=[$.square,s?$.squareMoveable:"",n?$.squareHighlighted:""].join(" ");return m("div",{className:d,onClick:()=>{s?i(s):c()},children:ri})}const l=[$.square,$.squareFilled,r?$.squareSelected:"",n?$.squareHighlighted:""].join(" "),u=[$.piece,t.color===I.Black?$.pieceBlack:"",t.king?$.pieceKing:""].join(" ");return m("div",{className:l,onClick:()=>o(e),children:[m("div",{className:u,children:t.king&&m(Z,{className:$.pieceKingIcon,icon:ro})}),ri]})}var H=(t=>(t.INIT_BOARD="INIT_BOARD",t.START_GAME="START_GAME",t.END_GAME="END_GAME",t.UPDATE_GAME_SETTINGS="UPDATE_GAME_SETTINGS",t.UPDATE_PLAYER_MOVES="UPDATE_PLAYER_MOVES",t.MAKE_MOVE="MAKE_MOVE",t.ADVANCE_TURN="ADVANCE_TURN",t))(H||{});const $c=(t,e)=>{var a;const{type:n,payload:r}=e;switch(n){case H.INIT_BOARD:return ai();case H.START_GAME:{const i=t.gameSettings.playerColor===I.Empty?Math.floor(Math.random()*2+1):t.gameSettings.playerColor,o=i==I.White?I.Black:I.White;return{...t,startTime:new Date,gameStarted:!0,gameSettings:{...t.gameSettings,playerColor:i,opponentColor:o}}}case H.END_GAME:return{...t,endTime:new Date,gameStarted:!1};case H.UPDATE_GAME_SETTINGS:{const i=r;return{...t,gameSettings:{...t.gameSettings,...i}}}case H.UPDATE_PLAYER_MOVES:{const i=((a=t.moveHistory.reverse().find(c=>c.moved_piece.color==t.gameSettings.playerColor))==null?void 0:a.get_forced_moves_js())||[];if(i.length>0)return{...t,playerMoves:i};const o=Ci.get_valid_moves_js(t.board,t.gameSettings.playerColor,t.gameSettings.checkersSettings);return{...t,playerMoves:o}}case H.MAKE_MOVE:{const i=r,o=t.board;o.handle_move(i);const c=Si.get_heuristic_value_js(o,t.gameSettings.checkersSettings);if((i.get_forced_moves_js()||[]).length>0)return{...t,moveUpdate:!t.moveUpdate,moveHistory:[...t.moveHistory,i]};const l=t.currentColorToMove==I.White?I.Black:I.White,u=t.currentTurn+1;return{...t,board:o,currentEvaluation:c,currentTurn:u,currentColorToMove:l,moveUpdate:!t.moveUpdate,moveHistory:[...t.moveHistory,i]}}default:throw new Error("Invalid board reducer action provided.")}},ai=()=>({board:new ft,gameStarted:!1,moveHistory:[],playerMoves:[],currentTurn:0,currentEvaluation:0,currentColorToMove:I.White,startTime:new Date,endTime:new Date,moveUpdate:!1,gameSettings:{playerColor:I.White,opponentColor:I.Black,computerDepth:5,checkersSettings:_r.from_preset(xi.RussianVariation)}}),ii=Je(null),oi=Je(()=>{}),Kc=({children:t})=>{const[e,n]=rn($c,ai());return m(ii.Provider,{value:e,children:m(oi.Provider,{value:n,children:t})})};function zt(){return on(ii)}function le(){return on(oi)}const si=()=>({type:H.INIT_BOARD,payload:null}),Xc=()=>({type:H.START_GAME,payload:null}),Zc=()=>({type:H.END_GAME,payload:null}),Ve=t=>({type:H.UPDATE_GAME_SETTINGS,payload:t}),ci=()=>({type:H.UPDATE_PLAYER_MOVES,payload:null}),li=t=>({type:H.MAKE_MOVE,payload:t});function Jc({onGameEnd:t}){const{board:e,playerMoves:n,gameStarted:r,moveHistory:a,moveUpdate:i,currentColorToMove:o,gameSettings:c}=zt(),l=le(),[u,s]=rt([]),[d,f]=rt([]),[_,h]=rt(-1),[A,y]=rt([]);at(()=>{l(si()),s(x())},[]),at(()=>{if(r&&o==c.opponentColor){R();return}},[r,o,i]),at(()=>{l(ci()),s(x())},[r,a]),at(()=>{y([])},[r]),at(()=>{y([]),s(x())},[]),at(()=>{o===c.playerColor?f(n.filter(C=>C.start_square===_)):f([])},[n,_]);const x=()=>{const C=Array.from(e.get_pieces());return c.playerColor===I.White?C.reverse():C},N=()=>{e.is_game_over(c.checkersSettings)&&(t(),l(Zc()))},j=C=>{y([]),f([]),h(C.end_square),l(li(C)),l(ci()),N()},R=async()=>{f([]);const C=a.at(-1),z=(C==null?void 0:C.moved_piece.color)===c.opponentColor?C.to_json():null,ht=Date.now(),_i=await xr.getBestMove(e.to_json(),c.opponentColor,z,c);if(!_i)throw new Error("Something went wrong with getting the best opponent move.");const Vn=_t.from_json(_i),uu=Date.now()-ht;await new Promise(fu=>{setTimeout(()=>{fu()},Math.max(0,450-uu))}),y([...A,Vn.start_square,Vn.end_square]),l(li(Vn)),N()},D=C=>{h(C)},U=()=>{f([]),h(-1)},q=u.map((C,z)=>{const ht=c.playerColor===I.White?63-z:z;return m(W,{children:m(Gc,{piece:C,index:ht,selectedMoves:d,highlighted:A.includes(ht),selected:_===ht,onMove:j,onSelect:D,onClearSelect:U},ht)})});return m("div",{className:eo.board,children:q})}var qn={},Qc={get exports(){return qn},set exports(t){qn=t}};(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],a=0;a<arguments.length;a++){var i=arguments[a];if(i){var o=typeof i;if(o==="string"||o==="number")r.push(i);else if(Array.isArray(i)){if(i.length){var c=n.apply(null,i);c&&r.push(c)}}else if(o==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){r.push(i.toString());continue}for(var l in i)e.call(i,l)&&i[l]&&r.push(l)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(Qc);const ui=qn,tl="_description_1yy0j_155",el="_root_1yy0j_1",nl="_button_1yy0j_173",rl="_buttonSelected_1yy0j_192",al="_buttonGhost_1yy0j_196",il="_buttonSecondary_1yy0j_200",ol="_buttonWarning_1yy0j_204",sl="_buttonSmall_1yy0j_208",Ut={description:tl,root:el,button:nl,buttonSelected:rl,buttonGhost:al,buttonSecondary:il,buttonWarning:ol,buttonSmall:sl},ue=({children:t,selected:e,type:n,variant:r,size:a,onClick:i})=>m("button",{className:ui(Ut.button,{[Ut.buttonGhost]:n==="ghost",[Ut.buttonSecondary]:n==="secondary",[Ut.buttonSmall]:a==="small",[Ut.buttonWarning]:r==="warning",[Ut.buttonSelected]:e}),onClick:i,children:t}),cl="_description_1r51q_155",ll="_root_1r51q_1",ul="_overlay_1r51q_173",fl="_overlayCard_1r51q_188",_l="_overlayCardContent_1r51q_203",dl="_overlayCardFooter_1r51q_209",Ge={description:cl,root:ll,overlay:ul,overlayCard:fl,overlayCardContent:_l,overlayCardFooter:dl};function fi({children:t,footerContent:e}){return m("div",{className:Ge.overlay,children:m("div",{className:Ge.overlayCard,children:[m("div",{className:Ge.overlayCardContent,children:t}),e&&m("div",{className:Ge.overlayCardFooter,children:e})]})})}const ml="_description_19b4i_155",pl="_root_19b4i_1",gl="_content_19b4i_173",bl="_section_19b4i_179",hl="_sectionHeader_19b4i_186",vl="_sectionDescription_19b4i_192",yl="_sectionContent_19b4i_199",wl="_sectionTitle_19b4i_205",kl="_colorDescriptor_19b4i_212",xl="_settingsGrid_19b4i_217",Sl="_settingsButton_19b4i_226",Cl="_settingsButtonContent_19b4i_241",Nl="_settingsButtonDescription_19b4i_247",Al="_settingButtonIcon_19b4i_252",El="_difficultySlider_19b4i_256",Ol="_difficultySliderNumbers_19b4i_260",Pl="_difficultyGrid_19b4i_269",jl="_difficultyNumber_19b4i_280",Ml="_difficultyNumberSelected_19b4i_292",T={description:ml,root:pl,content:gl,section:bl,sectionHeader:hl,sectionDescription:vl,sectionContent:yl,sectionTitle:wl,colorDescriptor:kl,settingsGrid:xl,settingsButton:Sl,settingsButtonContent:Cl,settingsButtonDescription:Nl,settingButtonIcon:Al,difficultySlider:El,difficultySliderNumbers:Ol,difficultyGrid:Pl,difficultyNumber:jl,difficultyNumberSelected:Ml},Tl="_description_bfp8p_155",Rl="_root_bfp8p_1",Dl="_container_bfp8p_173",Il="_label_bfp8p_180",Ll="_button_bfp8p_186",zl="_buttonBlack_bfp8p_196",Ul="_buttonRandom_bfp8p_200",Fl="_buttonSelected_bfp8p_212",Ft={description:Tl,root:Rl,container:Dl,label:Il,button:Ll,buttonBlack:zl,buttonRandom:Ul,buttonSelected:Fl};function Yn({color:t,label:e}){const{gameSettings:{playerColor:n}}=zt(),r=le(),a=()=>{r(Ve({playerColor:t}))};return m("div",{className:Ft.container,children:[m("button",{className:ui(Ft.button,{[Ft.buttonBlack]:t==I.Black,[Ft.buttonRandom]:t===I.Empty,[Ft.buttonSelected]:n===t}),onClick:a}),m("span",{className:Ft.label,children:e})]})}const Bl="_container_mhmn5_1",Hl={container:Bl};function Wl(t){return m(W,{children:[m("h1",{children:"Player Color"}),m("div",{className:Hl.container,children:[m(Yn,{color:I.White,label:"White"}),m(Yn,{color:I.Empty,label:"Random"}),m(Yn,{color:I.Black,label:"Black"})]})]})}const ql="_description_1adyd_155",Yl="_root_1adyd_1",Vl="_container_1adyd_173",Gl="_row_1adyd_185",$l="_buttonWrapper_1adyd_190",Kl="_customButtonWrapper_1adyd_197",$e={description:ql,root:Yl,container:Vl,row:Gl,buttonWrapper:$l,customButtonWrapper:Kl},Xl=["107.84 \xB5s","784.43 \xB5s","3.3174 ms","15.049 ms","109.19 ms","475.58 ms","2.0749 s","9.7674 s","37.597 s"],Zl=["88.588 \xB5s","611.77 \xB5s","3.4002 ms","10.114 ms","32.819 ms","97.925 ms","362.23 ms","1.3533 s","2.2226 s"];function Jl(t){const[e,n]=rt(!1),{gameSettings:{computerDepth:r,checkersSettings:a}}=zt(),i=le(),o=_r.contains_js(a,F.FlyingKings),c=[{label:"Easy",difficulty:2,customDifficulties:[1,2,3]},{label:"Medium",difficulty:5,customDifficulties:[4,5,6]},{label:"Hard",difficulty:7,customDifficulties:[7,8,9]}],l=u=>{i(Ve({computerDepth:u}))};return m(W,{children:[m("h1",{children:"Difficulty"}),m("div",{className:$e.container,children:c.map(({label:u,difficulty:s,customDifficulties:d},f)=>m("div",{className:$e.buttonWrapper,children:[m(ue,{selected:d.includes(r),onClick:()=>l(s),children:u}),e&&m("div",{className:$e.customButtonWrapper,children:d.map((_,h)=>m(ue,{type:"secondary",variant:o&&_>=8?"warning":void 0,size:"small",selected:_===r,onClick:()=>l(_),children:_},`${_}-${h}`))})]},`${u}-${f}`))}),e&&m(W,{children:[m("p",{className:"description",children:"Selecting a custom difficulty changes the search depth of the underlying alpha-beta algorithm."}),o&&r>=8&&m("p",{className:"description",children:'Although it is technically possible to play with a depth of more than 8 with the "Flying Kings" game rule, it can take significantly more time per each computer move.'}),m("div",{className:$e.row,children:[m("p",{children:"Mean time per move"}),m("p",{children:o?Xl[r-1]:Zl[r-1]})]}),m("p",{className:"description",children:["Mean times have been generated by benchmarking the Rust WebAssembly"," ",m("a",{href:"https://github.com/tomszir/chemkers/tree/main/packages/wasm-checkers",target:"_blank",rel:"noopener noreferrer",children:"wasm-checkers"})," ","move generation library on an initial board state with a sample size of 10."]})]}),m(ue,{type:"ghost",size:"small",onClick:()=>n(!e),children:[m("span",{children:"Advanced"}),m(Z,{icon:e?no:ao})]})]})}function Ql(){const{gameSettings:t,gameStarted:e}=zt(),n=le(),[r,a]=rt([F.ForcedCapture,F.FlyingKings,F.RegularCaptureBackwards,F.PromotionMoveTermination]);at(()=>{n(Ve({...t,checkersSettings:r.reduce((c,l)=>c|=l,0)}))},[e,t.playerColor]);const i=()=>{n(Xc())},o=c=>{const l=r.includes(c)?r.filter(u=>u!==c):[...r,c];n(Ve({...t,checkersSettings:l.reduce((u,s)=>u|=s,0)})),a(l)};return m(fi,{footerContent:m(ue,{onClick:i,children:"Play"}),children:m("div",{className:T.content,children:[m("p",{children:"A game of checkers."}),m("div",{className:T.section,children:m(Wl,{})}),m("div",{className:T.section,children:m(Jl,{})}),m("div",{className:T.section,children:[m("h3",{className:T.sectionTitle,children:"Game Rules"}),m("div",{className:T.settingsGrid,children:[m("button",{className:T.settingsButton,onClick:()=>o(F.ForcedCapture),children:[m(Z,{className:T.settingButtonIcon,icon:r.includes(F.ForcedCapture)?Se:Ce}),m("div",{className:T.settingsButtonContent,children:["Forced Captures",m("p",{className:T.settingsButtonDescription,children:"Captures are forced. You must take a capture that is presented to you."})]})]}),m("button",{className:T.settingsButton,onClick:()=>o(F.RegularCaptureBackwards),children:[m(Z,{className:T.settingButtonIcon,icon:r.includes(F.RegularCaptureBackwards)?Se:Ce}),m("div",{className:T.settingsButtonContent,children:["Non-king Capture Backwards",m("p",{className:T.settingsButtonDescription,children:"Pieces that are not Kings can capture other pieces, even if it means going backwards."})]})]}),m("button",{className:T.settingsButton,onClick:()=>o(F.FlyingKings),children:[m(Z,{className:T.settingButtonIcon,icon:r.includes(F.FlyingKings)?Se:Ce}),m("div",{className:T.settingsButtonContent,children:["Flying Kings",m("p",{className:T.settingsButtonDescription,children:"Kings can move along diagonals any number of squares."})]})]}),m("button",{className:T.settingsButton,onClick:()=>o(F.PromotionMoveTermination),children:[m(Z,{className:T.settingButtonIcon,icon:r.includes(F.PromotionMoveTermination)?Se:Ce}),m("div",{className:T.settingsButtonContent,children:["Promotion Move Termination",m("p",{className:T.settingsButtonDescription,children:"Upon promoting to a king your move will end even if you were chaining captures."})]})]})]})]})]})})}const tu="_description_138x5_155",eu="_root_138x5_1",nu="_stats_138x5_173",ru="_content_138x5_179",au="_heading_138x5_185",iu="_section_138x5_193",ou="_sectionHeading_138x5_202",lt={description:tu,root:eu,stats:nu,content:ru,heading:au,section:iu,sectionHeading:ou};function su({onClose:t}){const{currentEvaluation:e,currentTurn:n,startTime:r,endTime:a,gameSettings:i}=zt(),o=e>0?I.White:I.Black;return m(fi,{footerContent:m(ue,{onClick:t,children:"Play Again"}),children:m("div",{className:lt.content,children:[m("h1",{className:lt.heading,children:o===i.playerColor?"You have won! \u{1F389}":"You lost \u{1F916}"}),m("div",{className:lt.stats,children:[m("div",{className:lt.section,children:[m("div",{className:lt.sectionHeading,children:"Score"}),o===i.playerColor?Math.abs(e):-Math.abs(e)]}),m("div",{className:lt.section,children:[m("div",{className:lt.sectionHeading,children:"Turn Count"}),Math.ceil(n/2)]}),m("div",{className:lt.section,children:[m("div",{className:lt.sectionHeading,children:"Time Taken"}),new Date(a.getTime()-r.getTime()).toISOString().slice(14,19)]})]})]})})}function cu(){const[t,e]=rt(!1),{gameStarted:n}=zt(),r=le(),a=()=>{e(!1),r(si())},i=()=>{e(!0)};return m("main",{className:Sr.main,children:[m("div",{class:Sr.board,children:m(Jc,{onGameEnd:i})}),!t&&!n&&m(Ql,{}),t&&m(su,{onClose:a})]})}await dr(),await xr.initWasm();const lu=document.getElementById("root");Et(m(Kc,{children:m(cu,{})}),lu)})();
