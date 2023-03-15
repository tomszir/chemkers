(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var Ye,v,Er,ce,Pn,Cr,Bt,Or,ht={},Pr=[],Ha=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function V(e,t){for(var n in t)e[n]=t[n];return e}function Nr(e){var t=e.parentNode;t&&t.removeChild(e)}function K(e,t,n){var r,a,i,o={};for(i in t)i=="key"?r=t[i]:i=="ref"?a=t[i]:o[i]=t[i];if(arguments.length>2&&(o.children=arguments.length>3?Ye.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)o[i]===void 0&&(o[i]=e.defaultProps[i]);return Me(e,o,r,a,null)}function Me(e,t,n,r,a){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:a??++Er};return a==null&&v.vnode!=null&&v.vnode(i),i}function Ba(){return{current:null}}function Q(e){return e.children}function B(e,t){this.props=e,this.context=t}function Fe(e,t){if(t==null)return e.__?Fe(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Fe(e):null}function Ir(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ir(e)}}function Yt(e){(!e.__d&&(e.__d=!0)&&ce.push(e)&&!bt.__r++||Pn!==v.debounceRendering)&&((Pn=v.debounceRendering)||Cr)(bt)}function bt(){var e,t,n,r,a,i,o,l;for(ce.sort(Bt);e=ce.shift();)e.__d&&(t=ce.length,r=void 0,a=void 0,o=(i=(n=e).__v).__e,(l=n.__P)&&(r=[],(a=V({},i)).__v=i.__v+1,un(l,i,a,n.__n,l.ownerSVGElement!==void 0,i.__h!=null?[o]:null,r,o??Fe(i),i.__h),$r(r,i),i.__e!=o&&Ir(i)),ce.length>t&&ce.sort(Bt));bt.__r=0}function Tr(e,t,n,r,a,i,o,l,c,f){var s,m,u,d,h,S,g,k=r&&r.__k||Pr,w=k.length;for(n.__k=[],s=0;s<t.length;s++)if((d=n.__k[s]=(d=t[s])==null||typeof d=="boolean"||typeof d=="function"?null:typeof d=="string"||typeof d=="number"||typeof d=="bigint"?Me(null,d,null,null,d):Array.isArray(d)?Me(Q,{children:d},null,null,null):d.__b>0?Me(d.type,d.props,d.key,d.ref?d.ref:null,d.__v):d)!=null){if(d.__=n,d.__b=n.__b+1,(u=k[s])===null||u&&d.key==u.key&&d.type===u.type)k[s]=void 0;else for(m=0;m<w;m++){if((u=k[m])&&d.key==u.key&&d.type===u.type){k[m]=void 0;break}u=null}un(e,d,u=u||ht,a,i,o,l,c,f),h=d.__e,(m=d.ref)&&u.ref!=m&&(g||(g=[]),u.ref&&g.push(u.ref,null,d),g.push(m,d.__c||h,d)),h!=null?(S==null&&(S=h),typeof d.type=="function"&&d.__k===u.__k?d.__d=c=Mr(d,c,e):c=Lr(e,d,u,k,h,c),typeof n.type=="function"&&(n.__d=c)):c&&u.__e==c&&c.parentNode!=e&&(c=Fe(u))}for(n.__e=S,s=w;s--;)k[s]!=null&&(typeof n.type=="function"&&k[s].__e!=null&&k[s].__e==n.__d&&(n.__d=Rr(r).nextSibling),Fr(k[s],k[s]));if(g)for(s=0;s<g.length;s++)jr(g[s],g[++s],g[++s])}function Mr(e,t,n){for(var r,a=e.__k,i=0;a&&i<a.length;i++)(r=a[i])&&(r.__=e,t=typeof r.type=="function"?Mr(r,t,n):Lr(n,r,r,a,r.__e,t));return t}function G(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){G(n,t)}):t.push(e)),t}function Lr(e,t,n,r,a,i){var o,l,c;if(t.__d!==void 0)o=t.__d,t.__d=void 0;else if(n==null||a!=i||a.parentNode==null)e:if(i==null||i.parentNode!==e)e.appendChild(a),o=null;else{for(l=i,c=0;(l=l.nextSibling)&&c<r.length;c+=1)if(l==a)break e;e.insertBefore(a,i),o=i}return o!==void 0?o:a.nextSibling}function Rr(e){var t,n,r;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(r=Rr(n)))return r}return null}function Ya(e,t,n,r,a){var i;for(i in n)i==="children"||i==="key"||i in t||gt(e,i,null,n[i],r);for(i in t)a&&typeof t[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||n[i]===t[i]||gt(e,i,t[i],n[i],r)}function Nn(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Ha.test(t)?n:n+"px"}function gt(e,t,n,r,a){var i;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Nn(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Nn(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?Tn:In,i):e.removeEventListener(t,i?Tn:In,i);else if(t!=="dangerouslySetInnerHTML"){if(a)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t.indexOf("-")==-1?e.removeAttribute(t):e.setAttribute(t,n))}}function In(e){return this.l[e.type+!1](v.event?v.event(e):e)}function Tn(e){return this.l[e.type+!0](v.event?v.event(e):e)}function un(e,t,n,r,a,i,o,l,c){var f,s,m,u,d,h,S,g,k,w,A,N,P,F,D,T=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,l=t.__e=n.__e,t.__h=null,i=[l]),(f=v.__b)&&f(t);try{e:if(typeof T=="function"){if(g=t.props,k=(f=T.contextType)&&r[f.__c],w=f?k?k.props.value:f.__:r,n.__c?S=(s=t.__c=n.__c).__=s.__E:("prototype"in T&&T.prototype.render?t.__c=s=new T(g,w):(t.__c=s=new B(g,w),s.constructor=T,s.render=Va),k&&k.sub(s),s.props=g,s.state||(s.state={}),s.context=w,s.__n=r,m=s.__d=!0,s.__h=[],s._sb=[]),s.__s==null&&(s.__s=s.state),T.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=V({},s.__s)),V(s.__s,T.getDerivedStateFromProps(g,s.__s))),u=s.props,d=s.state,s.__v=t,m)T.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(T.getDerivedStateFromProps==null&&g!==u&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(g,w),!s.__e&&s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(g,s.__s,w)===!1||t.__v===n.__v){for(t.__v!==n.__v&&(s.props=g,s.state=s.__s,s.__d=!1),s.__e=!1,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(j){j&&(j.__=t)}),A=0;A<s._sb.length;A++)s.__h.push(s._sb[A]);s._sb=[],s.__h.length&&o.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(g,s.__s,w),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(u,d,h)})}if(s.context=w,s.props=g,s.__P=e,N=v.__r,P=0,"prototype"in T&&T.prototype.render){for(s.state=s.__s,s.__d=!1,N&&N(t),f=s.render(s.props,s.state,s.context),F=0;F<s._sb.length;F++)s.__h.push(s._sb[F]);s._sb=[]}else do s.__d=!1,N&&N(t),f=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++P<25);s.state=s.__s,s.getChildContext!=null&&(r=V(V({},r),s.getChildContext())),m||s.getSnapshotBeforeUpdate==null||(h=s.getSnapshotBeforeUpdate(u,d)),D=f!=null&&f.type===Q&&f.key==null?f.props.children:f,Tr(e,Array.isArray(D)?D:[D],t,n,r,a,i,o,l,c),s.base=t.__e,t.__h=null,s.__h.length&&o.push(s),S&&(s.__E=s.__=null),s.__e=!1}else i==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=qa(n.__e,t,n,r,a,i,o,c);(f=v.diffed)&&f(t)}catch(j){t.__v=null,(c||i!=null)&&(t.__e=l,t.__h=!!c,i[i.indexOf(l)]=null),v.__e(j,t,n)}}function $r(e,t){v.__c&&v.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){v.__e(r,n.__v)}})}function qa(e,t,n,r,a,i,o,l){var c,f,s,m=n.props,u=t.props,d=t.type,h=0;if(d==="svg"&&(a=!0),i!=null){for(;h<i.length;h++)if((c=i[h])&&"setAttribute"in c==!!d&&(d?c.localName===d:c.nodeType===3)){e=c,i[h]=null;break}}if(e==null){if(d===null)return document.createTextNode(u);e=a?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,u.is&&u),i=null,l=!1}if(d===null)m===u||l&&e.data===u||(e.data=u);else{if(i=i&&Ye.call(e.childNodes),f=(m=n.props||ht).dangerouslySetInnerHTML,s=u.dangerouslySetInnerHTML,!l){if(i!=null)for(m={},h=0;h<e.attributes.length;h++)m[e.attributes[h].name]=e.attributes[h].value;(s||f)&&(s&&(f&&s.__html==f.__html||s.__html===e.innerHTML)||(e.innerHTML=s&&s.__html||""))}if(Ya(e,u,m,a,l),s)t.__k=[];else if(h=t.props.children,Tr(e,Array.isArray(h)?h:[h],t,n,r,a&&d!=="foreignObject",i,o,i?i[0]:n.__k&&Fe(n,0),l),i!=null)for(h=i.length;h--;)i[h]!=null&&Nr(i[h]);l||("value"in u&&(h=u.value)!==void 0&&(h!==e.value||d==="progress"&&!h||d==="option"&&h!==m.value)&&gt(e,"value",h,m.value,!1),"checked"in u&&(h=u.checked)!==void 0&&h!==e.checked&&gt(e,"checked",h,m.checked,!1))}return e}function jr(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){v.__e(r,n)}}function Fr(e,t,n){var r,a;if(v.unmount&&v.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||jr(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){v.__e(i,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&Fr(r[a],t,n||typeof e.type!="function");n||e.__e==null||Nr(e.__e),e.__=e.__e=e.__d=void 0}function Va(e,t,n){return this.constructor(e,n)}function xe(e,t,n){var r,a,i;v.__&&v.__(e,t),a=(r=typeof n=="function")?null:n&&n.__k||t.__k,i=[],un(t,e=(!r&&n||t).__k=K(Q,null,[e]),a||ht,ht,t.ownerSVGElement!==void 0,!r&&n?[n]:a?null:t.firstChild?Ye.call(t.childNodes):null,i,!r&&n?n:a?a.__e:t.firstChild,r),$r(i,e)}function Dr(e,t){xe(e,t,Dr)}function Ga(e,t,n){var r,a,i,o=V({},e.props);for(i in t)i=="key"?r=t[i]:i=="ref"?a=t[i]:o[i]=t[i];return arguments.length>2&&(o.children=arguments.length>3?Ye.call(arguments,2):n),Me(e.type,o,r||e.key,a||e.ref,null)}function Xa(e,t){var n={__c:t="__cC"+Or++,__:e,Consumer:function(r,a){return r.children(a)},Provider:function(r){var a,i;return this.getChildContext||(a=[],(i={})[t]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&a.some(function(l){l.__e=!0,Yt(l)})},this.sub=function(o){a.push(o);var l=o.componentWillUnmount;o.componentWillUnmount=function(){a.splice(a.indexOf(o),1),l&&l.call(o)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}Ye=Pr.slice,v={__e:function(e,t,n,r){for(var a,i,o;t=t.__;)if((a=t.__c)&&!a.__)try{if((i=a.constructor)&&i.getDerivedStateFromError!=null&&(a.setState(i.getDerivedStateFromError(e)),o=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,r||{}),o=a.__d),o)return a.__E=a}catch(l){e=l}throw e}},Er=0,B.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=V({},this.state),typeof e=="function"&&(e=e(V({},n),this.props)),e&&V(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Yt(this))},B.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Yt(this))},B.prototype.render=Q,ce=[],Cr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Bt=function(e,t){return e.__v.__b-t.__v.__b},bt.__r=0,Or=0;let b;const q=new Array(128).fill(void 0);q.push(void 0,null,!0,!1);function lt(e){return q[e]}let Le=q.length;function Ka(e){e<132||(q[e]=Le,Le=e)}function mn(e){const t=lt(e);return Ka(e),t}const zr=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});zr.decode();let Pe=null;function ct(){return(Pe===null||Pe.byteLength===0)&&(Pe=new Uint8Array(b.memory.buffer)),Pe}function yt(e,t){return zr.decode(ct().subarray(e,e+t))}function Qe(e){Le===q.length&&q.push(q.length+1);const t=Le;return Le=q[t],q[t]=e,t}let De=0;const ft=new TextEncoder("utf-8"),Qa=typeof ft.encodeInto=="function"?function(e,t){return ft.encodeInto(e,t)}:function(e,t){const n=ft.encode(e);return t.set(n),{read:e.length,written:n.length}};function dn(e,t,n){if(n===void 0){const l=ft.encode(e),c=t(l.length);return ct().subarray(c,c+l.length).set(l),De=l.length,c}let r=e.length,a=t(r);const i=ct();let o=0;for(;o<r;o++){const l=e.charCodeAt(o);if(l>127)break;i[a+o]=l}if(o!==r){o!==0&&(e=e.slice(o)),a=n(a,r,r=o+e.length*3);const l=ct().subarray(a+o,a+r),c=Qa(e,l);o+=c.written}return De=o,a}let Ne=null;function Se(){return(Ne===null||Ne.byteLength===0)&&(Ne=new Int32Array(b.memory.buffer)),Ne}function Re(e,t){if(!(e instanceof t))throw new Error(`expected instance of ${t.name}`);return e.ptr}const $=Object.freeze({Empty:0,0:"Empty",White:1,1:"White",Black:2,2:"Black"});class X{static __wrap(t){const n=Object.create(X.prototype);return n.ptr=t,n}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();b.__wbg_board_free(t)}constructor(){const t=b.board_new();return X.__wrap(t)}static from_json(t){const n=dn(t,b.__wbindgen_malloc,b.__wbindgen_realloc),r=De,a=b.board_from_json(n,r);return X.__wrap(a)}to_json(){try{const r=b.__wbindgen_add_to_stack_pointer(-16);b.board_to_json(r,this.ptr);var t=Se()[r/4+0],n=Se()[r/4+1];return yt(t,n)}finally{b.__wbindgen_add_to_stack_pointer(16),b.__wbindgen_free(t,n)}}init_default_state(){b.board_init_default_state(this.ptr)}get_bitboard(t,n){const r=b.board_get_bitboard(this.ptr,t,n);return BigInt.asUintN(64,r)}has_piece(t,n){return b.board_has_piece(this.ptr,t,n)!==0}is_king(t,n){return b.board_is_king(this.ptr,t,n)!==0}get_piece(t){const n=b.board_get_piece(this.ptr,t);return Ot.__wrap(n)}get_pieces(){const t=b.board_get_pieces(this.ptr);return mn(t)}update_from_move(t){Re(t,de),b.board_update_from_move(this.ptr,t.ptr)}is_game_over(){return b.board_is_game_over(this.ptr)!==0}}class Za{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();b.__wbg_checkersai_free(t)}static get_heuristic_value(t){return Re(t,X),b.checkersai_get_heuristic_value(t.ptr)}static alphabeta(t,n,r,a,i){return Re(t,X),b.checkersai_alphabeta(t.ptr,n,r,a,i)}static get_best_move_alphabeta(t,n,r){Re(t,X);const a=b.checkersai_get_best_move_alphabeta(t.ptr,n,r);return de.__wrap(a)}}class de{static __wrap(t){const n=Object.create(de.prototype);return n.ptr=t,n}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();b.__wbg_move_free(t)}get start_square(){return b.__wbg_get_move_start_square(this.ptr)}set start_square(t){b.__wbg_set_move_start_square(this.ptr,t)}get end_square(){return b.__wbg_get_move_end_square(this.ptr)}set end_square(t){b.__wbg_set_move_end_square(this.ptr,t)}get capture_square(){return b.__wbg_get_move_capture_square(this.ptr)}set capture_square(t){b.__wbg_set_move_capture_square(this.ptr,t)}get did_capture(){return b.__wbg_get_move_did_capture(this.ptr)!==0}set did_capture(t){b.__wbg_set_move_did_capture(this.ptr,t)}get can_capture_again(){return b.__wbg_get_move_can_capture_again(this.ptr)!==0}set can_capture_again(t){b.__wbg_set_move_can_capture_again(this.ptr,t)}get did_king(){return b.__wbg_get_move_did_king(this.ptr)!==0}set did_king(t){b.__wbg_set_move_did_king(this.ptr,t)}static from_json(t){const n=dn(t,b.__wbindgen_malloc,b.__wbindgen_realloc),r=De,a=b.move_from_json(n,r);return de.__wrap(a)}to_json(){try{const r=b.__wbindgen_add_to_stack_pointer(-16);b.move_to_json(r,this.ptr);var t=Se()[r/4+0],n=Se()[r/4+1];return yt(t,n)}finally{b.__wbindgen_add_to_stack_pointer(16),b.__wbindgen_free(t,n)}}}class Ja{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();b.__wbg_movegeneration_free(t)}static generate_all_moves_js(t,n){Re(t,X);const r=b.movegeneration_generate_all_moves_js(t.ptr,n);return mn(r)}}class Ot{static __wrap(t){const n=Object.create(Ot.prototype);return n.ptr=t,n}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();b.__wbg_piece_free(t)}get color(){return b.__wbg_get_piece_color(this.ptr)>>>0}set color(t){b.__wbg_set_piece_color(this.ptr,t)}get is_king(){return b.__wbg_get_piece_is_king(this.ptr)!==0}set is_king(t){b.__wbg_set_piece_is_king(this.ptr,t)}}async function ei(e,t){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,t)}catch(r){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}else{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}function ti(){const e={};return e.wbg={},e.wbg.__wbg_move_new=function(t){const n=de.__wrap(t);return Qe(n)},e.wbg.__wbg_piece_new=function(t){const n=Ot.__wrap(t);return Qe(n)},e.wbg.__wbindgen_object_drop_ref=function(t){mn(t)},e.wbg.__wbg_new_abda76e883ba8a5f=function(){const t=new Error;return Qe(t)},e.wbg.__wbg_stack_658279fe44541cf6=function(t,n){const r=lt(n).stack,a=dn(r,b.__wbindgen_malloc,b.__wbindgen_realloc),i=De;Se()[t/4+1]=i,Se()[t/4+0]=a},e.wbg.__wbg_error_f851667af71bcfc6=function(t,n){try{console.error(yt(t,n))}finally{b.__wbindgen_free(t,n)}},e.wbg.__wbg_new_b525de17f44a8943=function(){const t=new Array;return Qe(t)},e.wbg.__wbg_push_49c286f04dd3bf59=function(t,n){return lt(t).push(lt(n))},e.wbg.__wbindgen_throw=function(t,n){throw new Error(yt(t,n))},e}function ni(e,t){return b=e.exports,Wr.__wbindgen_wasm_module=t,Ne=null,Pe=null,b.__wbindgen_start(),b}async function Wr(e){typeof e>"u"&&(e=new URL(""+new URL("wasm_checkers_bg-96dcdac9.wasm",import.meta.url).href,self.location));const t=ti();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:n,module:r}=await ei(await e,t);return ni(n,r)}var ve,E,$t,Mn,Ae=0,Ur=[],ut=[],Ln=v.__b,Rn=v.__r,$n=v.diffed,jn=v.__c,Fn=v.unmount;function Ce(e,t){v.__h&&v.__h(E,e,Ae||t),Ae=0;var n=E.__H||(E.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:ut}),n.__[e]}function z(e){return Ae=1,Hr(Br,e)}function Hr(e,t,n){var r=Ce(ve++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Br(void 0,t),function(l){var c=r.__N?r.__N[0]:r.__[0],f=r.t(c,l);c!==f&&(r.__N=[f,r.__[1]],r.__c.setState({}))}],r.__c=E,!E.u)){var a=function(l,c,f){if(!r.__c.__H)return!0;var s=r.__c.__H.__.filter(function(u){return u.__c});if(s.every(function(u){return!u.__N}))return!i||i.call(this,l,c,f);var m=!1;return s.forEach(function(u){if(u.__N){var d=u.__[0];u.__=u.__N,u.__N=void 0,d!==u.__[0]&&(m=!0)}}),!(!m&&r.__c.props===l)&&(!i||i.call(this,l,c,f))};E.u=!0;var i=E.shouldComponentUpdate,o=E.componentWillUpdate;E.componentWillUpdate=function(l,c,f){if(this.__e){var s=i;i=void 0,a(l,c,f),i=s}o&&o.call(this,l,c,f)},E.shouldComponentUpdate=a}return r.__N||r.__}function re(e,t){var n=Ce(ve++,3);!v.__s&&_n(n.__H,t)&&(n.__=e,n.i=t,E.__H.__h.push(n))}function Pt(e,t){var n=Ce(ve++,4);!v.__s&&_n(n.__H,t)&&(n.__=e,n.i=t,E.__h.push(n))}function ri(e){return Ae=5,Nt(function(){return{current:e}},[])}function ai(e,t,n){Ae=6,Pt(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function Nt(e,t){var n=Ce(ve++,7);return _n(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function ii(e,t){return Ae=8,Nt(function(){return e},t)}function oi(e){var t=E.context[e.__c],n=Ce(ve++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(E)),t.props.value):e.__}function si(e,t){v.useDebugValue&&v.useDebugValue(t?t(e):e)}function li(){var e=Ce(ve++,11);if(!e.__){for(var t=E.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function ci(){for(var e;e=Ur.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(mt),e.__H.__h.forEach(qt),e.__H.__h=[]}catch(t){e.__H.__h=[],v.__e(t,e.__v)}}v.__b=function(e){E=null,Ln&&Ln(e)},v.__r=function(e){Rn&&Rn(e),ve=0;var t=(E=e.__c).__H;t&&($t===E?(t.__h=[],E.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=ut,n.__N=n.i=void 0})):(t.__h.forEach(mt),t.__h.forEach(qt),t.__h=[])),$t=E},v.diffed=function(e){$n&&$n(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ur.push(t)!==1&&Mn===v.requestAnimationFrame||((Mn=v.requestAnimationFrame)||fi)(ci)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==ut&&(n.__=n.__V),n.i=void 0,n.__V=ut})),$t=E=null},v.__c=function(e,t){t.some(function(n){try{n.__h.forEach(mt),n.__h=n.__h.filter(function(r){return!r.__||qt(r)})}catch(r){t.some(function(a){a.__h&&(a.__h=[])}),t=[],v.__e(r,n.__v)}}),jn&&jn(e,t)},v.unmount=function(e){Fn&&Fn(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{mt(r)}catch(a){t=a}}),n.__H=void 0,t&&v.__e(t,n.__v))};var Dn=typeof requestAnimationFrame=="function";function fi(e){var t,n=function(){clearTimeout(r),Dn&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Dn&&(t=requestAnimationFrame(n))}function mt(e){var t=E,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),E=t}function qt(e){var t=E;e.__c=e.__(),E=t}function _n(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Br(e,t){return typeof t=="function"?t(e):t}const ui="_main_yzs0q_1",mi={main:ui},di="_board_h5a2z_1",_i={board:di};var pi={prefix:"fas",iconName:"crown",icon:[576,512,[128081],"f521","M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"]};function zn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zn(Object(n),!0).forEach(function(r){M(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zn(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wt(e){return wt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wt(e)}function vi(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Wn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function hi(e,t,n){return t&&Wn(e.prototype,t),n&&Wn(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pn(e,t){return gi(e)||wi(e,t)||Yr(e,t)||xi()}function qe(e){return bi(e)||yi(e)||Yr(e)||ki()}function bi(e){if(Array.isArray(e))return Vt(e)}function gi(e){if(Array.isArray(e))return e}function yi(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function wi(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,l;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(c){i=!0,l=c}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw l}}return r}}function Yr(e,t){if(e){if(typeof e=="string")return Vt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Vt(e,t)}}function Vt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ki(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xi(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Un=function(){},vn={},qr={},Vr=null,Gr={mark:Un,measure:Un};try{typeof window<"u"&&(vn=window),typeof document<"u"&&(qr=document),typeof MutationObserver<"u"&&(Vr=MutationObserver),typeof performance<"u"&&(Gr=performance)}catch{}var Si=vn.navigator||{},Hn=Si.userAgent,Bn=Hn===void 0?"":Hn,ie=vn,O=qr,Yn=Vr,Ze=Gr;ie.document;var te=!!O.documentElement&&!!O.head&&typeof O.addEventListener=="function"&&typeof O.createElement=="function",Xr=~Bn.indexOf("MSIE")||~Bn.indexOf("Trident/"),Je,et,tt,nt,rt,Z="___FONT_AWESOME___",Gt=16,Kr="fa",Qr="svg-inline--fa",_e="data-fa-i2svg",Xt="data-fa-pseudo-element",Ai="data-fa-pseudo-element-pending",hn="data-prefix",bn="data-icon",qn="fontawesome-i2svg",Ei="async",Ci=["HTML","HEAD","STYLE","SCRIPT"],Zr=function(){try{return!0}catch{return!1}}(),C="classic",I="sharp",gn=[C,I];function Ve(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[C]}})}var ze=Ve((Je={},M(Je,C,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),M(Je,I,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),Je)),We=Ve((et={},M(et,C,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),M(et,I,{solid:"fass",regular:"fasr"}),et)),Ue=Ve((tt={},M(tt,C,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),M(tt,I,{fass:"fa-solid",fasr:"fa-regular"}),tt)),Oi=Ve((nt={},M(nt,C,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),M(nt,I,{"fa-solid":"fass","fa-regular":"fasr"}),nt)),Pi=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,Jr="fa-layers-text",Ni=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ii=Ve((rt={},M(rt,C,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),M(rt,I,{900:"fass",400:"fasr"}),rt)),ea=[1,2,3,4,5,6,7,8,9,10],Ti=ea.concat([11,12,13,14,15,16,17,18,19,20]),Mi=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ue={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},He=new Set;Object.keys(We[C]).map(He.add.bind(He));Object.keys(We[I]).map(He.add.bind(He));var Li=[].concat(gn,qe(He),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ue.GROUP,ue.SWAP_OPACITY,ue.PRIMARY,ue.SECONDARY]).concat(ea.map(function(e){return"".concat(e,"x")})).concat(Ti.map(function(e){return"w-".concat(e)})),$e=ie.FontAwesomeConfig||{};function Ri(e){var t=O.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function $i(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(O&&typeof O.querySelector=="function"){var ji=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ji.forEach(function(e){var t=pn(e,2),n=t[0],r=t[1],a=$i(Ri(n));a!=null&&($e[r]=a)})}var ta={styleDefault:"solid",familyDefault:"classic",cssPrefix:Kr,replacementClass:Qr,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};$e.familyPrefix&&($e.cssPrefix=$e.familyPrefix);var Ee=_(_({},ta),$e);Ee.autoReplaceSvg||(Ee.observeMutations=!1);var p={};Object.keys(ta).forEach(function(e){Object.defineProperty(p,e,{enumerable:!0,set:function(n){Ee[e]=n,je.forEach(function(r){return r(p)})},get:function(){return Ee[e]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(t){Ee.cssPrefix=t,je.forEach(function(n){return n(p)})},get:function(){return Ee.cssPrefix}});ie.FontAwesomeConfig=p;var je=[];function Fi(e){return je.push(e),function(){je.splice(je.indexOf(e),1)}}var ne=Gt,H={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Di(e){if(!(!e||!te)){var t=O.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=O.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return O.head.insertBefore(t,r),e}}var zi="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Be(){for(var e=12,t="";e-- >0;)t+=zi[Math.random()*62|0];return t}function Oe(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function yn(e){return e.classList?Oe(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function na(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Wi(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(na(e[n]),'" ')},"").trim()}function It(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function wn(e){return e.size!==H.size||e.x!==H.x||e.y!==H.y||e.rotate!==H.rotate||e.flipX||e.flipY}function Ui(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(l)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:c,path:f}}function Hi(e){var t=e.transform,n=e.width,r=n===void 0?Gt:n,a=e.height,i=a===void 0?Gt:a,o=e.startCentered,l=o===void 0?!1:o,c="";return l&&Xr?c+="translate(".concat(t.x/ne-r/2,"em, ").concat(t.y/ne-i/2,"em) "):l?c+="translate(calc(-50% + ".concat(t.x/ne,"em), calc(-50% + ").concat(t.y/ne,"em)) "):c+="translate(".concat(t.x/ne,"em, ").concat(t.y/ne,"em) "),c+="scale(".concat(t.size/ne*(t.flipX?-1:1),", ").concat(t.size/ne*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var Bi=`:root, :host {
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
}`;function ra(){var e=Kr,t=Qr,n=p.cssPrefix,r=p.replacementClass,a=Bi;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return a}var Vn=!1;function jt(){p.autoAddCss&&!Vn&&(Di(ra()),Vn=!0)}var Yi={mixout:function(){return{dom:{css:ra,insertCss:jt}}},hooks:function(){return{beforeDOMElementCreation:function(){jt()},beforeI2svg:function(){jt()}}}},J=ie||{};J[Z]||(J[Z]={});J[Z].styles||(J[Z].styles={});J[Z].hooks||(J[Z].hooks={});J[Z].shims||(J[Z].shims=[]);var U=J[Z],aa=[],qi=function e(){O.removeEventListener("DOMContentLoaded",e),kt=1,aa.map(function(t){return t()})},kt=!1;te&&(kt=(O.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(O.readyState),kt||O.addEventListener("DOMContentLoaded",qi));function Vi(e){te&&(kt?setTimeout(e,0):aa.push(e))}function Ge(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?na(e):"<".concat(t," ").concat(Wi(r),">").concat(i.map(Ge).join(""),"</").concat(t,">")}function Gn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Gi=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Ft=function(t,n,r,a){var i=Object.keys(t),o=i.length,l=a!==void 0?Gi(n,a):n,c,f,s;for(r===void 0?(c=1,s=t[i[0]]):(c=0,s=r);c<o;c++)f=i[c],s=l(s,t[f],f,t);return s};function Xi(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Kt(e){var t=Xi(e);return t.length===1?t[0].toString(16):null}function Ki(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Xn(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Qt(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Xn(t);typeof U.hooks.addPack=="function"&&!a?U.hooks.addPack(e,Xn(t)):U.styles[e]=_(_({},U.styles[e]||{}),i),e==="fas"&&Qt("fa",t)}var at,it,ot,ge=U.styles,Qi=U.shims,Zi=(at={},M(at,C,Object.values(Ue[C])),M(at,I,Object.values(Ue[I])),at),kn=null,ia={},oa={},sa={},la={},ca={},Ji=(it={},M(it,C,Object.keys(ze[C])),M(it,I,Object.keys(ze[I])),it);function eo(e){return~Li.indexOf(e)}function to(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!eo(a)?a:null}var fa=function(){var t=function(i){return Ft(ge,function(o,l,c){return o[c]=Ft(l,i,{}),o},{})};ia=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var l=i[2].filter(function(c){return typeof c=="number"});l.forEach(function(c){a[c.toString(16)]=o})}return a}),oa=t(function(a,i,o){if(a[o]=o,i[2]){var l=i[2].filter(function(c){return typeof c=="string"});l.forEach(function(c){a[c]=o})}return a}),ca=t(function(a,i,o){var l=i[2];return a[o]=o,l.forEach(function(c){a[c]=o}),a});var n="far"in ge||p.autoFetchSvg,r=Ft(Qi,function(a,i){var o=i[0],l=i[1],c=i[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(a.names[o]={prefix:l,iconName:c}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:l,iconName:c}),a},{names:{},unicodes:{}});sa=r.names,la=r.unicodes,kn=Tt(p.styleDefault,{family:p.familyDefault})};Fi(function(e){kn=Tt(e.styleDefault,{family:p.familyDefault})});fa();function xn(e,t){return(ia[e]||{})[t]}function no(e,t){return(oa[e]||{})[t]}function me(e,t){return(ca[e]||{})[t]}function ua(e){return sa[e]||{prefix:null,iconName:null}}function ro(e){var t=la[e],n=xn("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function oe(){return kn}var Sn=function(){return{prefix:null,iconName:null,rest:[]}};function Tt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?C:n,a=ze[r][e],i=We[r][e]||We[r][a],o=e in U.styles?e:null;return i||o||null}var Kn=(ot={},M(ot,C,Object.keys(Ue[C])),M(ot,I,Object.keys(Ue[I])),ot);function Mt(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},M(t,C,"".concat(p.cssPrefix,"-").concat(C)),M(t,I,"".concat(p.cssPrefix,"-").concat(I)),t),o=null,l=C;(e.includes(i[C])||e.some(function(f){return Kn[C].includes(f)}))&&(l=C),(e.includes(i[I])||e.some(function(f){return Kn[I].includes(f)}))&&(l=I);var c=e.reduce(function(f,s){var m=to(p.cssPrefix,s);if(ge[s]?(s=Zi[l].includes(s)?Oi[l][s]:s,o=s,f.prefix=s):Ji[l].indexOf(s)>-1?(o=s,f.prefix=Tt(s,{family:l})):m?f.iconName=m:s!==p.replacementClass&&s!==i[C]&&s!==i[I]&&f.rest.push(s),!a&&f.prefix&&f.iconName){var u=o==="fa"?ua(f.iconName):{},d=me(f.prefix,f.iconName);u.prefix&&(o=null),f.iconName=u.iconName||d||f.iconName,f.prefix=u.prefix||f.prefix,f.prefix==="far"&&!ge.far&&ge.fas&&!p.autoFetchSvg&&(f.prefix="fas")}return f},Sn());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&l===I&&(ge.fass||p.autoFetchSvg)&&(c.prefix="fass",c.iconName=me(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=oe()||"fas"),c}var ao=function(){function e(){vi(this,e),this.definitions={}}return hi(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=_(_({},n.definitions[l]||{}),o[l]),Qt(l,o[l]);var c=Ue[C][l];c&&Qt(c,o[l]),fa()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],l=o.prefix,c=o.iconName,f=o.icon,s=f[2];n[l]||(n[l]={}),s.length>0&&s.forEach(function(m){typeof m=="string"&&(n[l][m]=f)}),n[l][c]=f}),n}}]),e}(),Qn=[],ye={},ke={},io=Object.keys(ke);function oo(e,t){var n=t.mixoutsTo;return Qn=e,ye={},Object.keys(ke).forEach(function(r){io.indexOf(r)===-1&&delete ke[r]}),Qn.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),wt(a[o])==="object"&&Object.keys(a[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=a[o][l]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){ye[o]||(ye[o]=[]),ye[o].push(i[o])})}r.provides&&r.provides(ke)}),n}function Zt(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=ye[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function pe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=ye[e]||[];a.forEach(function(i){i.apply(null,n)})}function ee(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ke[e]?ke[e].apply(null,t):void 0}function Jt(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||oe();if(t)return t=me(n,t)||t,Gn(ma.definitions,n,t)||Gn(U.styles,n,t)}var ma=new ao,so=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,pe("noAuto")},lo={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return te?(pe("beforeI2svg",t),ee("pseudoElements2svg",t),ee("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,Vi(function(){fo({autoReplaceSvgRoot:n}),pe("watch",t)})}},co={icon:function(t){if(t===null)return null;if(wt(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:me(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Tt(t[0]);return{prefix:r,iconName:me(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(p.cssPrefix,"-"))>-1||t.match(Pi))){var a=Mt(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||oe(),iconName:me(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=oe();return{prefix:i,iconName:me(i,t)||t}}}},W={noAuto:so,config:p,dom:lo,parse:co,library:ma,findIconDefinition:Jt,toHtml:Ge},fo=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?O:n;(Object.keys(U.styles).length>0||p.autoFetchSvg)&&te&&p.autoReplaceSvg&&W.dom.i2svg({node:r})};function Lt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ge(r)})}}),Object.defineProperty(e,"node",{get:function(){if(te){var r=O.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function uo(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(wn(o)&&n.found&&!r.found){var l=n.width,c=n.height,f={x:l/c/2,y:.5};a.style=It(_(_({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function mo(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(p.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:_(_({},a),{},{id:o}),children:r}]}]}function An(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,l=e.symbol,c=e.title,f=e.maskId,s=e.titleId,m=e.extra,u=e.watchable,d=u===void 0?!1:u,h=r.found?r:n,S=h.width,g=h.height,k=a==="fak",w=[p.replacementClass,i?"".concat(p.cssPrefix,"-").concat(i):""].filter(function(j){return m.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(m.classes).join(" "),A={children:[],attributes:_(_({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(g)})},N=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(S/g*16*.0625,"em")}:{};d&&(A.attributes[_e]=""),c&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(s||Be())},children:[c]}),delete A.attributes.title);var P=_(_({},A),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:l,styles:_(_({},N),m.styles)}),F=r.found&&n.found?ee("generateAbstractMask",P)||{children:[],attributes:{}}:ee("generateAbstractIcon",P)||{children:[],attributes:{}},D=F.children,T=F.attributes;return P.children=D,P.attributes=T,l?mo(P):uo(P)}function Zn(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,l=e.watchable,c=l===void 0?!1:l,f=_(_(_({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});c&&(f[_e]="");var s=_({},o.styles);wn(a)&&(s.transform=Hi({transform:a,startCentered:!0,width:n,height:r}),s["-webkit-transform"]=s.transform);var m=It(s);m.length>0&&(f.style=m);var u=[];return u.push({tag:"span",attributes:f,children:[t]}),i&&u.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),u}function _o(e){var t=e.content,n=e.title,r=e.extra,a=_(_(_({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=It(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Dt=U.styles;function en(e){var t=e[0],n=e[1],r=e.slice(4),a=pn(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(ue.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(ue.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(ue.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var po={found:!1,width:512,height:512};function vo(e,t){!Zr&&!p.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function tn(e,t){var n=t;return t==="fa"&&p.styleDefault!==null&&(t=oe()),new Promise(function(r,a){if(ee("missingIconAbstract"),n==="fa"){var i=ua(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Dt[t]&&Dt[t][e]){var o=Dt[t][e];return r(en(o))}vo(e,t),r(_(_({},po),{},{icon:p.showMissingIcons&&e?ee("missingIconAbstract")||{}:{}}))})}var Jn=function(){},nn=p.measurePerformance&&Ze&&Ze.mark&&Ze.measure?Ze:{mark:Jn,measure:Jn},Ie='FA "6.3.0"',ho=function(t){return nn.mark("".concat(Ie," ").concat(t," begins")),function(){return da(t)}},da=function(t){nn.mark("".concat(Ie," ").concat(t," ends")),nn.measure("".concat(Ie," ").concat(t),"".concat(Ie," ").concat(t," begins"),"".concat(Ie," ").concat(t," ends"))},En={begin:ho,end:da},dt=function(){};function er(e){var t=e.getAttribute?e.getAttribute(_e):null;return typeof t=="string"}function bo(e){var t=e.getAttribute?e.getAttribute(hn):null,n=e.getAttribute?e.getAttribute(bn):null;return t&&n}function go(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(p.replacementClass)}function yo(){if(p.autoReplaceSvg===!0)return _t.replace;var e=_t[p.autoReplaceSvg];return e||_t.replace}function wo(e){return O.createElementNS("http://www.w3.org/2000/svg",e)}function ko(e){return O.createElement(e)}function _a(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?wo:ko:n;if(typeof e=="string")return O.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(_a(o,{ceFn:r}))}),a}function xo(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var _t={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(_a(a),n)}),n.getAttribute(_e)===null&&p.keepOriginalSource){var r=O.createComment(xo(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~yn(n).indexOf(p.replacementClass))return _t.replace(t);var a=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(l,c){return c===p.replacementClass||c.match(a)?l.toSvg.push(c):l.toNode.push(c),l},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(l){return Ge(l)}).join(`
`);n.setAttribute(_e,""),n.innerHTML=o}};function tr(e){e()}function pa(e,t){var n=typeof t=="function"?t:dt;if(e.length===0)n();else{var r=tr;p.mutateApproach===Ei&&(r=ie.requestAnimationFrame||tr),r(function(){var a=yo(),i=En.begin("mutate");e.map(a),i(),n()})}}var Cn=!1;function va(){Cn=!0}function rn(){Cn=!1}var xt=null;function nr(e){if(Yn&&p.observeMutations){var t=e.treeCallback,n=t===void 0?dt:t,r=e.nodeCallback,a=r===void 0?dt:r,i=e.pseudoElementsCallback,o=i===void 0?dt:i,l=e.observeMutationsRoot,c=l===void 0?O:l;xt=new Yn(function(f){if(!Cn){var s=oe();Oe(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!er(m.addedNodes[0])&&(p.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&p.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&er(m.target)&&~Mi.indexOf(m.attributeName))if(m.attributeName==="class"&&bo(m.target)){var u=Mt(yn(m.target)),d=u.prefix,h=u.iconName;m.target.setAttribute(hn,d||s),h&&m.target.setAttribute(bn,h)}else go(m.target)&&a(m.target)})}}),te&&xt.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function So(){xt&&xt.disconnect()}function Ao(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function Eo(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Mt(yn(e));return a.prefix||(a.prefix=oe()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=no(a.prefix,e.innerText)||xn(a.prefix,Kt(e.innerText))),!a.iconName&&p.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Co(e){var t=Oe(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return p.autoA11y&&(n?t["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(r||Be()):(t["aria-hidden"]="true",t.focusable="false")),t}function Oo(){return{iconName:null,title:null,titleId:null,prefix:null,transform:H,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function rr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Eo(e),r=n.iconName,a=n.prefix,i=n.rest,o=Co(e),l=Zt("parseNodeAttributes",{},e),c=t.styleParser?Ao(e):[];return _({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:H,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},l)}var Po=U.styles;function ha(e){var t=p.autoReplaceSvg==="nest"?rr(e,{styleParser:!1}):rr(e);return~t.extra.classes.indexOf(Jr)?ee("generateLayersText",e,t):ee("generateSvgReplacementMutation",e,t)}var se=new Set;gn.map(function(e){se.add("fa-".concat(e))});Object.keys(ze[C]).map(se.add.bind(se));Object.keys(ze[I]).map(se.add.bind(se));se=qe(se);function ar(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!te)return Promise.resolve();var n=O.documentElement.classList,r=function(m){return n.add("".concat(qn,"-").concat(m))},a=function(m){return n.remove("".concat(qn,"-").concat(m))},i=p.autoFetchSvg?se:gn.map(function(s){return"fa-".concat(s)}).concat(Object.keys(Po));i.includes("fa")||i.push("fa");var o=[".".concat(Jr,":not([").concat(_e,"])")].concat(i.map(function(s){return".".concat(s,":not([").concat(_e,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=Oe(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();var c=En.begin("onTree"),f=l.reduce(function(s,m){try{var u=ha(m);u&&s.push(u)}catch(d){Zr||d.name==="MissingIcon"&&console.error(d)}return s},[]);return new Promise(function(s,m){Promise.all(f).then(function(u){pa(u,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),c(),s()})}).catch(function(u){c(),m(u)})})}function No(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ha(e).then(function(n){n&&pa([n],t)})}function Io(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Jt(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Jt(a||{})),e(r,_(_({},n),{},{mask:a}))}}var To=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?H:r,i=n.symbol,o=i===void 0?!1:i,l=n.mask,c=l===void 0?null:l,f=n.maskId,s=f===void 0?null:f,m=n.title,u=m===void 0?null:m,d=n.titleId,h=d===void 0?null:d,S=n.classes,g=S===void 0?[]:S,k=n.attributes,w=k===void 0?{}:k,A=n.styles,N=A===void 0?{}:A;if(t){var P=t.prefix,F=t.iconName,D=t.icon;return Lt(_({type:"icon"},t),function(){return pe("beforeDOMElementCreation",{iconDefinition:t,params:n}),p.autoA11y&&(u?w["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(h||Be()):(w["aria-hidden"]="true",w.focusable="false")),An({icons:{main:en(D),mask:c?en(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:F,transform:_(_({},H),a),symbol:o,title:u,maskId:s,titleId:h,extra:{attributes:w,styles:N,classes:g}})})}},Mo={mixout:function(){return{icon:Io(To)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ar,n.nodeCallback=No,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?O:r,i=n.callback,o=i===void 0?function(){}:i;return ar(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,l=r.prefix,c=r.transform,f=r.symbol,s=r.mask,m=r.maskId,u=r.extra;return new Promise(function(d,h){Promise.all([tn(a,l),s.iconName?tn(s.iconName,s.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var g=pn(S,2),k=g[0],w=g[1];d([n,An({icons:{main:k,mask:w},prefix:l,iconName:a,transform:c,symbol:f,maskId:m,title:i,titleId:o,extra:u,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,l=n.styles,c=It(l);c.length>0&&(a.style=c);var f;return wn(o)&&(f=ee("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Lo={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Lt({type:"layer"},function(){pe("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(c){o=o.concat(c.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(qe(i)).join(" ")},children:o}]})}}}},Ro={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,l=o===void 0?[]:o,c=r.attributes,f=c===void 0?{}:c,s=r.styles,m=s===void 0?{}:s;return Lt({type:"counter",content:n},function(){return pe("beforeDOMElementCreation",{content:n,params:r}),_o({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(qe(l))}})})}}}},$o={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?H:a,o=r.title,l=o===void 0?null:o,c=r.classes,f=c===void 0?[]:c,s=r.attributes,m=s===void 0?{}:s,u=r.styles,d=u===void 0?{}:u;return Lt({type:"text",content:n},function(){return pe("beforeDOMElementCreation",{content:n,params:r}),Zn({content:n,transform:_(_({},H),i),title:l,extra:{attributes:m,styles:d,classes:["".concat(p.cssPrefix,"-layers-text")].concat(qe(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,l=null,c=null;if(Xr){var f=parseInt(getComputedStyle(n).fontSize,10),s=n.getBoundingClientRect();l=s.width/f,c=s.height/f}return p.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Zn({content:n.innerHTML,width:l,height:c,transform:i,title:a,extra:o,watchable:!0})])}}},jo=new RegExp('"',"ug"),ir=[1105920,1112319];function Fo(e){var t=e.replace(jo,""),n=Ki(t,0),r=n>=ir[0]&&n<=ir[1],a=t.length===2?t[0]===t[1]:!1;return{value:Kt(a?t[0]:t),isSecondary:r||a}}function or(e,t){var n="".concat(Ai).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Oe(e.children),o=i.filter(function(D){return D.getAttribute(Xt)===t})[0],l=ie.getComputedStyle(e,t),c=l.getPropertyValue("font-family").match(Ni),f=l.getPropertyValue("font-weight"),s=l.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&s!=="none"&&s!==""){var m=l.getPropertyValue("content"),u=~["Sharp"].indexOf(c[2])?I:C,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?We[u][c[2].toLowerCase()]:Ii[u][f],h=Fo(m),S=h.value,g=h.isSecondary,k=c[0].startsWith("FontAwesome"),w=xn(d,S),A=w;if(k){var N=ro(S);N.iconName&&N.prefix&&(w=N.iconName,d=N.prefix)}if(w&&!g&&(!o||o.getAttribute(hn)!==d||o.getAttribute(bn)!==A)){e.setAttribute(n,A),o&&e.removeChild(o);var P=Oo(),F=P.extra;F.attributes[Xt]=t,tn(w,d).then(function(D){var T=An(_(_({},P),{},{icons:{main:D,mask:Sn()},prefix:d,iconName:A,extra:F,watchable:!0})),j=O.createElement("svg");t==="::before"?e.insertBefore(j,e.firstChild):e.appendChild(j),j.outerHTML=T.map(function(Rt){return Ge(Rt)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Do(e){return Promise.all([or(e,"::before"),or(e,"::after")])}function zo(e){return e.parentNode!==document.head&&!~Ci.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Xt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function sr(e){if(te)return new Promise(function(t,n){var r=Oe(e.querySelectorAll("*")).filter(zo).map(Do),a=En.begin("searchPseudoElements");va(),Promise.all(r).then(function(){a(),rn(),t()}).catch(function(){a(),rn(),n()})})}var Wo={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=sr,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?O:r;p.searchPseudoElements&&sr(a)}}},lr=!1,Uo={mixout:function(){return{dom:{unwatch:function(){va(),lr=!0}}}},hooks:function(){return{bootstrap:function(){nr(Zt("mutationObserverCallbacks",{}))},noAuto:function(){So()},watch:function(n){var r=n.observeMutationsRoot;lr?rn():nr(Zt("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},cr=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},Ho={mixout:function(){return{parse:{transform:function(n){return cr(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=cr(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),s="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(c," ").concat(f," ").concat(s)},u={transform:"translate(".concat(o/2*-1," -256)")},d={outer:l,inner:m,path:u};return{tag:"g",attributes:_({},d.outer),children:[{tag:"g",attributes:_({},d.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:_(_({},r.icon.attributes),d.path)}]}]}}}},zt={x:0,y:0,width:"100%",height:"100%"};function fr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Bo(e){return e.tag==="g"?e.children:[e]}var Yo={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Mt(a.split(" ").map(function(o){return o.trim()})):Sn();return i.prefix||(i.prefix=oe()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,l=n.maskId,c=n.transform,f=i.width,s=i.icon,m=o.width,u=o.icon,d=Ui({transform:c,containerWidth:m,iconWidth:f}),h={tag:"rect",attributes:_(_({},zt),{},{fill:"white"})},S=s.children?{children:s.children.map(fr)}:{},g={tag:"g",attributes:_({},d.inner),children:[fr(_({tag:s.tag,attributes:_(_({},s.attributes),d.path)},S))]},k={tag:"g",attributes:_({},d.outer),children:[g]},w="mask-".concat(l||Be()),A="clip-".concat(l||Be()),N={tag:"mask",attributes:_(_({},zt),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,k]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:Bo(u)},N]};return r.push(P,{tag:"rect",attributes:_({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(w,")")},zt)}),{children:r,attributes:a}}}},qo={provides:function(t){var n=!1;ie.matchMedia&&(n=ie.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:_(_({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=_(_({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:_(_({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:_(_({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:_(_({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:_(_({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:_(_({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:_(_({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:_(_({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Vo={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Go=[Yi,Mo,Lo,Ro,$o,Wo,Uo,Ho,Yo,qo,Vo];oo(Go,{mixoutsTo:W});W.noAuto;W.config;W.library;W.dom;var an=W.parse;W.findIconDefinition;W.toHtml;var Xo=W.icon;W.layer;W.text;W.counter;var y={},Ko={get exports(){return y},set exports(e){y=e}},Qo="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Zo=Qo,Jo=Zo;function ba(){}function ga(){}ga.resetWarningCache=ba;var es=function(){function e(r,a,i,o,l,c){if(c!==Jo){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ga,resetWarningCache:ba};return n.PropTypes=n,n};Ko.exports=es();function ya(e,t){for(var n in t)e[n]=t[n];return e}function on(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function Wt(e,t){return e===t&&(e!==0||1/e==1/t)||e!=e&&t!=t}function sn(e){this.props=e}function ts(e,t){function n(a){var i=this.props.ref,o=i==a.ref;return!o&&i&&(i.call?i(null):i.current=null),t?!t(this.props,a)||!o:on(this.props,a)}function r(a){return this.shouldComponentUpdate=n,K(e,a)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(sn.prototype=new B).isPureReactComponent=!0,sn.prototype.shouldComponentUpdate=function(e,t){return on(this.props,e)||on(this.state,t)};var ur=v.__b;v.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),ur&&ur(e)};var ns=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function rs(e){function t(n){var r=ya({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=ns,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var mr=function(e,t){return e==null?null:G(G(e).map(t))},as={map:mr,forEach:mr,count:function(e){return e?G(e).length:0},only:function(e){var t=G(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:G},is=v.__e;v.__e=function(e,t,n,r){if(e.then){for(var a,i=t;i=i.__;)if((a=i.__c)&&a.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),a.__c(e,t)}is(e,t,n,r)};var dr=v.unmount;function wa(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=ya({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return wa(r,t,n)})),e}function ka(e,t,n){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return ka(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=n)),e}function pt(){this.__u=0,this.t=null,this.__b=null}function xa(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function os(e){var t,n,r;function a(i){if(t||(t=e()).then(function(o){n=o.default||o},function(o){r=o}),r)throw r;if(!n)throw t;return K(n,i)}return a.displayName="Lazy",a.__f=!0,a}function Te(){this.u=null,this.o=null}v.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),dr&&dr(e)},(pt.prototype=new B).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var a=xa(r.__v),i=!1,o=function(){i||(i=!0,n.__R=null,a?a(l):l())};n.__R=o;var l=function(){if(!--r.__u){if(r.state.__a){var f=r.state.__a;r.__v.__k[0]=ka(f,f.__c.__P,f.__c.__O)}var s;for(r.setState({__a:r.__b=null});s=r.t.pop();)s.forceUpdate()}},c=t.__h===!0;r.__u++||c||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(o,o)},pt.prototype.componentWillUnmount=function(){this.t=[]},pt.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=wa(this.__b,n,r.__O=r.__P)}this.__b=null}var a=t.__a&&K(Q,null,e.fallback);return a&&(a.__h=null),[K(Q,null,t.__a?null:e.children),a]};var _r=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function ss(e){return this.getChildContext=function(){return e.context},e.children}function ls(e){var t=this,n=e.i;t.componentWillUnmount=function(){xe(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),e.__v?(t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),t.i.appendChild(r)},insertBefore:function(r,a){this.childNodes.push(r),t.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.i.removeChild(r)}}),xe(K(ss,{context:t.context},e.__v),t.l)):t.l&&t.componentWillUnmount()}function cs(e,t){var n=K(ls,{__v:e,i:t});return n.containerInfo=t,n}(Te.prototype=new B).__a=function(e){var t=this,n=xa(t.__v),r=t.o.get(e);return r[0]++,function(a){var i=function(){t.props.revealOrder?(r.push(a),_r(t,e,r)):a()};n?n(i):i()}},Te.prototype.render=function(e){this.u=null,this.o=new Map;var t=G(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},Te.prototype.componentDidUpdate=Te.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){_r(e,n,t)})};var Sa=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,fs=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,us=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,ms=/[A-Z0-9]/g,ds=typeof document<"u",_s=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function ps(e,t,n){return t.__k==null&&(t.textContent=""),xe(e,t),typeof n=="function"&&n(),e?e.__c:null}function vs(e,t,n){return Dr(e,t),typeof n=="function"&&n(),e?e.__c:null}B.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(B.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var pr=v.event;function hs(){}function bs(){return this.cancelBubble}function gs(){return this.defaultPrevented}v.event=function(e){return pr&&(e=pr(e)),e.persist=hs,e.isPropagationStopped=bs,e.isDefaultPrevented=gs,e.nativeEvent=e};var On,vr={configurable:!0,get:function(){return this.class}},hr=v.vnode;v.vnode=function(e){var t=e.type,n=e.props,r=n;if(typeof t=="string"){for(var a in r={},n){var i=n[a];if(!(a==="value"&&"defaultValue"in n&&i==null||ds&&a==="children"&&t==="noscript")){var o=a.toLowerCase();a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&i===!0?i="":o==="ondoubleclick"?a="ondblclick":o!=="onchange"||t!=="input"&&t!=="textarea"||_s(n.type)?o==="onfocus"?a="onfocusin":o==="onblur"?a="onfocusout":us.test(a)?a=o:t.indexOf("-")===-1&&fs.test(a)?a=a.replace(ms,"-$&").toLowerCase():i===null&&(i=void 0):o=a="oninput",o==="oninput"&&r[a=o]&&(a="oninputCapture"),r[a]=i}}t=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=G(n.children).forEach(function(l){l.props.selected=r.value.indexOf(l.props.value)!=-1})),t=="select"&&r.defaultValue!=null&&(r.value=G(n.children).forEach(function(l){l.props.selected=r.multiple?r.defaultValue.indexOf(l.props.value)!=-1:r.defaultValue==l.props.value})),e.props=r,n.class!=n.className&&(vr.enumerable="className"in n,n.className!=null&&(r.class=n.className),Object.defineProperty(r,"className",vr))}e.$$typeof=Sa,hr&&hr(e)};var br=v.__r;v.__r=function(e){br&&br(e),On=e.__c};var gr=v.diffed;v.diffed=function(e){gr&&gr(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value),On=null};var ys={ReactCurrentDispatcher:{current:{readContext:function(e){return On.__n[e.__c].props.value}}}};function ws(e){return K.bind(null,e)}function Aa(e){return!!e&&e.$$typeof===Sa}function ks(e){return Aa(e)?Ga.apply(null,arguments):e}function xs(e){return!!e.__k&&(xe(null,e),!0)}function Ss(e){return e&&(e.base||e.nodeType===1&&e)||null}var As=function(e,t){return e(t)},Es=function(e,t){return e(t)},Cs=Q;function Ea(e){e()}function Os(e){return e}function Ps(){return[!1,Ea]}var Ns=Pt;function Is(e,t){var n=t(),r=z({h:{__:n,v:t}}),a=r[0].h,i=r[1];return Pt(function(){a.__=n,a.v=t,Wt(a.__,t())||i({h:a})},[e,n,t]),re(function(){return Wt(a.__,a.v())||i({h:a}),e(function(){Wt(a.__,a.v())||i({h:a})})},[e]),n}var Ca={useState:z,useId:li,useReducer:Hr,useEffect:re,useLayoutEffect:Pt,useInsertionEffect:Ns,useTransition:Ps,useDeferredValue:Os,useSyncExternalStore:Is,startTransition:Ea,useRef:ri,useImperativeHandle:ai,useMemo:Nt,useCallback:ii,useContext:oi,useDebugValue:si,version:"17.0.2",Children:as,render:ps,hydrate:vs,unmountComponentAtNode:xs,createPortal:cs,createElement:K,createContext:Xa,createFactory:ws,cloneElement:ks,createRef:Ba,Fragment:Q,isValidElement:Aa,findDOMNode:Ss,Component:B,PureComponent:sn,memo:ts,forwardRef:rs,flushSync:Es,unstable_batchedUpdates:As,StrictMode:Cs,Suspense:pt,SuspenseList:Te,lazy:os,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ys};function yr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yr(Object(n),!0).forEach(function(r){we(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function St(e){return St=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},St(e)}function we(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ts(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Ms(e,t){if(e==null)return{};var n=Ts(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ln(e){return Ls(e)||Rs(e)||$s(e)||js()}function Ls(e){if(Array.isArray(e))return cn(e)}function Rs(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function $s(e,t){if(e){if(typeof e=="string")return cn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return cn(e,t)}}function cn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function js(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fs(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,l=e.flash,c=e.spin,f=e.spinPulse,s=e.spinReverse,m=e.pulse,u=e.fixedWidth,d=e.inverse,h=e.border,S=e.listItem,g=e.flip,k=e.size,w=e.rotation,A=e.pull,N=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":l,"fa-spin":c,"fa-spin-reverse":s,"fa-spin-pulse":f,"fa-pulse":m,"fa-fw":u,"fa-inverse":d,"fa-border":h,"fa-li":S,"fa-flip":g===!0,"fa-flip-horizontal":g==="horizontal"||g==="both","fa-flip-vertical":g==="vertical"||g==="both"},we(t,"fa-".concat(k),typeof k<"u"&&k!==null),we(t,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),we(t,"fa-pull-".concat(A),typeof A<"u"&&A!==null),we(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(N).map(function(P){return N[P]?P:null}).filter(function(P){return P})}function Ds(e){return e=e-0,e===e}function Oa(e){return Ds(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var zs=["style"];function Ws(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Us(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Oa(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[Ws(a)]=i:t[a]=i,t},{})}function Pa(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return Pa(e,c)}),a=Object.keys(t.attributes||{}).reduce(function(c,f){var s=t.attributes[f];switch(f){case"class":c.attrs.className=s,delete t.attributes.class;break;case"style":c.attrs.style=Us(s);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?c.attrs[f.toLowerCase()]=s:c.attrs[Oa(f)]=s}return c},{attrs:{}}),i=n.style,o=i===void 0?{}:i,l=Ms(n,zs);return a.attrs.style=ae(ae({},a.attrs.style),o),e.apply(void 0,[t.tag,ae(ae({},a.attrs),l)].concat(ln(r)))}var Na=!1;try{Na=!0}catch{}function Hs(){if(!Na&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function wr(e){if(e&&St(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(an.icon)return an.icon(e);if(e===null)return null;if(e&&St(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ut(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?we({},e,t):{}}var Xe=Ca.forwardRef(function(e,t){var n=e.icon,r=e.mask,a=e.symbol,i=e.className,o=e.title,l=e.titleId,c=e.maskId,f=wr(n),s=Ut("classes",[].concat(ln(Fs(e)),ln(i.split(" ")))),m=Ut("transform",typeof e.transform=="string"?an.transform(e.transform):e.transform),u=Ut("mask",wr(r)),d=Xo(f,ae(ae(ae(ae({},s),m),u),{},{symbol:a,title:o,titleId:l,maskId:c}));if(!d)return Hs("Could not find icon",f),null;var h=d.abstract,S={ref:t};return Object.keys(e).forEach(function(g){Xe.defaultProps.hasOwnProperty(g)||(S[g]=e[g])}),Bs(h[0],S)});Xe.displayName="FontAwesomeIcon";Xe.propTypes={beat:y.bool,border:y.bool,beatFade:y.bool,bounce:y.bool,className:y.string,fade:y.bool,flash:y.bool,mask:y.oneOfType([y.object,y.array,y.string]),maskId:y.string,fixedWidth:y.bool,inverse:y.bool,flip:y.oneOf([!0,!1,"horizontal","vertical","both"]),icon:y.oneOfType([y.object,y.array,y.string]),listItem:y.bool,pull:y.oneOf(["right","left"]),pulse:y.bool,rotation:y.oneOf([0,90,180,270]),shake:y.bool,size:y.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:y.bool,spinPulse:y.bool,spinReverse:y.bool,symbol:y.oneOfType([y.bool,y.string]),title:y.string,titleId:y.string,transform:y.oneOfType([y.string,y.object]),swapOpacity:y.bool};Xe.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Bs=Pa.bind(null,Ca.createElement);const Ys="_square_11cni_1",qs="_squareFilled_11cni_106",Vs="_squareMoveable_11cni_110",Gs="_blink_11cni_1",Xs="_squareIndex_11cni_139",Ks="_piece_11cni_148",Qs="_pieceBlack_11cni_149",Zs="_squareSelected_11cni_160",Js="_pieceKingIcon_11cni_177",Y={square:Ys,squareFilled:qs,squareMoveable:Vs,blink:Gs,squareIndex:Xs,piece:Ks,pieceBlack:Qs,squareSelected:Zs,pieceKingIcon:Js};var el=0;function x(e,t,n,r,a,i){var o,l,c={};for(l in t)l=="ref"?o=t[l]:c[l]=t[l];var f={type:e,props:c,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--el,__source:a,__self:i};if(typeof e=="function"&&(o=e.defaultProps))for(l in o)c[l]===void 0&&(c[l]=o[l]);return v.vnode&&v.vnode(f),f}const kr=!1;function tl({piece:e,index:t,selected:n,selectedMoves:r,onMove:a,onSelect:i,onClearSelect:o}){if(e.color===$.Empty){const f=r.find(u=>u.end_square===t),s=[Y.square,f?Y.squareMoveable:""].join(" ");return x("div",{className:s,onClick:()=>{f?a(f):o()},children:kr})}const l=[Y.square,Y.squareFilled,n?Y.squareSelected:""].join(" "),c=[Y.piece,e.color===$.Black?Y.pieceBlack:"",e.is_king?Y.pieceKing:""].join(" ");return x("div",{className:l,onClick:()=>i(t),children:[x("div",{className:c,children:e.is_king&&x(Xe,{className:Y.pieceKingIcon,icon:pi})}),kr]})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ia=Symbol("Comlink.proxy"),nl=Symbol("Comlink.endpoint"),rl=Symbol("Comlink.releaseProxy"),Ht=Symbol("Comlink.finalizer"),vt=Symbol("Comlink.thrown"),Ta=e=>typeof e=="object"&&e!==null||typeof e=="function",al={canHandle:e=>Ta(e)&&e[Ia],serialize(e){const{port1:t,port2:n}=new MessageChannel;return La(e,t),[n,[n]]},deserialize(e){return e.start(),$a(e)}},il={canHandle:e=>Ta(e)&&vt in e,serialize({value:e}){let t;return e instanceof Error?t={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:t={isError:!1,value:e},[t,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}},Ma=new Map([["proxy",al],["throw",il]]);function ol(e,t){for(const n of e)if(t===n||n==="*"||n instanceof RegExp&&n.test(t))return!0;return!1}function La(e,t=globalThis,n=["*"]){t.addEventListener("message",function r(a){if(!a||!a.data)return;if(!ol(n,a.origin)){console.warn(`Invalid origin '${a.origin}' for comlink proxy`);return}const{id:i,type:o,path:l}=Object.assign({path:[]},a.data),c=(a.data.argumentList||[]).map(fe);let f;try{const s=l.slice(0,-1).reduce((u,d)=>u[d],e),m=l.reduce((u,d)=>u[d],e);switch(o){case"GET":f=m;break;case"SET":s[l.slice(-1)[0]]=fe(a.data.value),f=!0;break;case"APPLY":f=m.apply(s,c);break;case"CONSTRUCT":{const u=new m(...c);f=ml(u)}break;case"ENDPOINT":{const{port1:u,port2:d}=new MessageChannel;La(e,d),f=ul(u,[u])}break;case"RELEASE":f=void 0;break;default:return}}catch(s){f={value:s,[vt]:0}}Promise.resolve(f).catch(s=>({value:s,[vt]:0})).then(s=>{const[m,u]=Ct(s);t.postMessage(Object.assign(Object.assign({},m),{id:i}),u),o==="RELEASE"&&(t.removeEventListener("message",r),Ra(t),Ht in e&&typeof e[Ht]=="function"&&e[Ht]())}).catch(s=>{const[m,u]=Ct({value:new TypeError("Unserializable return value"),[vt]:0});t.postMessage(Object.assign(Object.assign({},m),{id:i}),u)})}),t.start&&t.start()}function sl(e){return e.constructor.name==="MessagePort"}function Ra(e){sl(e)&&e.close()}function $a(e,t){return fn(e,[],t)}function st(e){if(e)throw new Error("Proxy has been released and is not useable")}function ja(e){return be(e,{type:"RELEASE"}).then(()=>{Ra(e)})}const At=new WeakMap,Et="FinalizationRegistry"in globalThis&&new FinalizationRegistry(e=>{const t=(At.get(e)||0)-1;At.set(e,t),t===0&&ja(e)});function ll(e,t){const n=(At.get(t)||0)+1;At.set(t,n),Et&&Et.register(e,t,e)}function cl(e){Et&&Et.unregister(e)}function fn(e,t=[],n=function(){}){let r=!1;const a=new Proxy(n,{get(i,o){if(st(r),o===rl)return()=>{cl(a),ja(e),r=!0};if(o==="then"){if(t.length===0)return{then:()=>a};const l=be(e,{type:"GET",path:t.map(c=>c.toString())}).then(fe);return l.then.bind(l)}return fn(e,[...t,o])},set(i,o,l){st(r);const[c,f]=Ct(l);return be(e,{type:"SET",path:[...t,o].map(s=>s.toString()),value:c},f).then(fe)},apply(i,o,l){st(r);const c=t[t.length-1];if(c===nl)return be(e,{type:"ENDPOINT"}).then(fe);if(c==="bind")return fn(e,t.slice(0,-1));const[f,s]=xr(l);return be(e,{type:"APPLY",path:t.map(m=>m.toString()),argumentList:f},s).then(fe)},construct(i,o){st(r);const[l,c]=xr(o);return be(e,{type:"CONSTRUCT",path:t.map(f=>f.toString()),argumentList:l},c).then(fe)}});return ll(a,e),a}function fl(e){return Array.prototype.concat.apply([],e)}function xr(e){const t=e.map(Ct);return[t.map(n=>n[0]),fl(t.map(n=>n[1]))]}const Fa=new WeakMap;function ul(e,t){return Fa.set(e,t),e}function ml(e){return Object.assign(e,{[Ia]:!0})}function Ct(e){for(const[t,n]of Ma)if(n.canHandle(e)){const[r,a]=n.serialize(e);return[{type:"HANDLER",name:t,value:r},a]}return[{type:"RAW",value:e},Fa.get(e)||[]]}function fe(e){switch(e.type){case"HANDLER":return Ma.get(e.name).deserialize(e.value);case"RAW":return e.value}}function be(e,t,n){return new Promise(r=>{const a=dl();e.addEventListener("message",function i(o){!o.data||!o.data.id||o.data.id!==a||(e.removeEventListener("message",i),r(o.data))}),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),n)})}function dl(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}const Da=$a(new Worker(new URL(""+new URL("wasm-checkers-d2bf6867.js",import.meta.url).href,self.location),{type:"module"}));function _l({gameSettings:e,onGameEnd:t}){const{playerColor:n,gameStarted:r}=e,a=n===$.White?$.Black:$.White,i=Nt(()=>new X,[]),[o,l]=z(0),[c,f]=z(0),[s,m]=z([]),[u,d]=z([]),[h,S]=z([]),[g,k]=z(-1);re(()=>{A()},[]),re(()=>{if(!r){A();return}if(n===$.White){N();return}T()},[e.gameStarted]),re(()=>{d(w())},[e.playerColor]),re(()=>{l(Za.get_heuristic_value(i))},[c]),re(()=>{S(s.filter(L=>L.start_square===g))},[s,g]);const w=()=>{const L=Array.from(i.get_pieces());return n===$.White?L.reverse():L},A=()=>{i.init_default_state(),d(w())},N=()=>{m(Ja.generate_all_moves_js(i,n))},P=()=>{if(!i.is_game_over())return!1;const L=o===0,le=o>0?$.White:$.Black;return t({tie:L,winner:le,totalMoves:c}),!0},F=()=>{S([]),k(-1)},D=L=>{k(L)},T=async()=>{var he;const L=[],le=[];m([]),S([]);do{const Ke=de.from_json(await Da.getBestMove(i.to_json(),a,e.computerDepth));i.update_from_move(Ke),L.push(Ke),le.push(w())}while((he=L.at(-1))!=null&&he.can_capture_again);await Promise.all(le.map((Ke,Wa)=>new Promise(Ua=>setTimeout(()=>{d(Ke),f(c+1),Ua()},250*(Wa+1))))),!P()&&N()},j=async L=>{if(i.update_from_move(L),d(w()),f(c+1),k(-1),!P()){if(!L.can_capture_again){T();return}N(),k(L.end_square)}},Rt=u.map((L,le)=>{const he=n===$.White?63-le:le;return x(Q,{children:x(tl,{piece:L,index:he,selectedMoves:h,selected:g===he,onMove:j,onSelect:D,onClearSelect:F},he)})});return x("div",{className:_i.board,children:Rt})}const pl="_overlay_1k2w2_1",vl="_overlayCard_1k2w2_12",Sr={overlay:pl,overlayCard:vl};function za({children:e}){return x("div",{className:Sr.overlay,children:x("div",{className:Sr.overlayCard,children:e})})}const hl="_colorSelectButton_1uxun_1",bl="_colorSelectButtonBlack_1uxun_16",gl="_colorSelectButtonSelected_1uxun_21",yl="_heading_1uxun_25",wl="_description_1uxun_33",kl="_difficultySlider_1uxun_44",xl="_difficultySliderNumbers_1uxun_48",Sl="_startButton_1uxun_58",R={colorSelectButton:hl,colorSelectButtonBlack:bl,colorSelectButtonSelected:gl,heading:yl,description:wl,difficultySlider:kl,difficultySliderNumbers:xl,startButton:Sl};function Al({onGameStart:e,onPlayerColorSelect:t}){const[n,r]=z($.White),[a,i]=z(5),o=()=>{e({playerColor:n,computerDepth:a,gameStarted:!0})},l=c=>{r(c),t(c)};return x(za,{children:[x("h3",{className:R.heading,children:"Select your side"}),x("h3",{className:R.description,children:"White always goes first - in case you forgot 😊"}),x("button",{className:[R.colorSelectButton,n===$.White&&R.colorSelectButtonSelected].join(" "),onClick:()=>l($.White)}),x("button",{className:[R.colorSelectButton,R.colorSelectButtonBlack,n===$.Black&&R.colorSelectButtonSelected].join(" "),onClick:()=>l($.Black)}),x("h3",{className:R.heading}),x("h3",{className:R.heading,children:"Select the difficulty"}),x("h3",{className:R.description,children:"*The difficulty determines the AI's alpha-beta algorithm's search depth."}),x("input",{className:R.difficultySlider,type:"range",min:1,max:9,value:a,onChange:({target:c})=>{i(parseInt((c==null?void 0:c.value)||5))}}),x("div",{className:R.difficultySliderNumbers,children:Array.from({length:9}).map((c,f)=>x("span",{children:f+1}))}),x("h3",{className:R.heading}),x("h3",{className:R.heading,children:"Note"}),x("h3",{className:R.description,children:"This is a work-in-progress (fuck you)"}),x("button",{className:R.startButton,onClick:o,children:"Start"})]})}const Ar={playerColor:$.White,computerDepth:5,gameStarted:!1};function El(){const[e,t]=z(!1),[n,r]=z(Ar),[a,i]=z(null);re(()=>{Wr().then(async()=>{await Da.initWasm(),t(!0)})},[]);const o=()=>{i(null),r(Ar)},l=s=>{r(Object.assign({},n,{playerColor:s}))},c=s=>{r(s)},f=s=>{i(s)};return e?x("main",{className:mi.main,children:[x(_l,{gameSettings:n,onGameEnd:f}),!n.gameStarted&&x(Al,{onGameStart:c,onPlayerColorSelect:l}),a&&x(za,{children:[x("h1",{children:a.winner===n.playerColor?"You won!":"You lost..."}),x("button",{onClick:o,children:"New game"})]})]}):null}const Cl=document.getElementById("root");xe(x(El,{}),Cl);
