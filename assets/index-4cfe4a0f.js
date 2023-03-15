(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var qe,v,Sr,le,On,Er,Ht,Cr,vt={},Or=[],Ua=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function B(e,t){for(var n in t)e[n]=t[n];return e}function Pr(e){var t=e.parentNode;t&&t.removeChild(e)}function X(e,t,n){var r,a,i,o={};for(i in t)i=="key"?r=t[i]:i=="ref"?a=t[i]:o[i]=t[i];if(arguments.length>2&&(o.children=arguments.length>3?qe.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)o[i]===void 0&&(o[i]=e.defaultProps[i]);return Te(e,o,r,a,null)}function Te(e,t,n,r,a){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:a??++Sr};return a==null&&v.vnode!=null&&v.vnode(i),i}function Ha(){return{current:null}}function K(e){return e.children}function H(e,t){this.props=e,this.context=t}function $e(e,t){if(t==null)return e.__?$e(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?$e(e):null}function Nr(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Nr(e)}}function qt(e){(!e.__d&&(e.__d=!0)&&le.push(e)&&!ht.__r++||On!==v.debounceRendering)&&((On=v.debounceRendering)||Er)(ht)}function ht(){var e,t,n,r,a,i,o,l;for(le.sort(Ht);e=le.shift();)e.__d&&(t=le.length,r=void 0,a=void 0,o=(i=(n=e).__v).__e,(l=n.__P)&&(r=[],(a=B({},i)).__v=i.__v+1,cn(l,i,a,n.__n,l.ownerSVGElement!==void 0,i.__h!=null?[o]:null,r,o??$e(i),i.__h),Rr(r,i),i.__e!=o&&Nr(i)),le.length>t&&le.sort(Ht));ht.__r=0}function Ir(e,t,n,r,a,i,o,l,f,c){var s,m,u,d,h,x,g,k=r&&r.__k||Or,w=k.length;for(n.__k=[],s=0;s<t.length;s++)if((d=n.__k[s]=(d=t[s])==null||typeof d=="boolean"||typeof d=="function"?null:typeof d=="string"||typeof d=="number"||typeof d=="bigint"?Te(null,d,null,null,d):Array.isArray(d)?Te(K,{children:d},null,null,null):d.__b>0?Te(d.type,d.props,d.key,d.ref?d.ref:null,d.__v):d)!=null){if(d.__=n,d.__b=n.__b+1,(u=k[s])===null||u&&d.key==u.key&&d.type===u.type)k[s]=void 0;else for(m=0;m<w;m++){if((u=k[m])&&d.key==u.key&&d.type===u.type){k[m]=void 0;break}u=null}cn(e,d,u=u||vt,a,i,o,l,f,c),h=d.__e,(m=d.ref)&&u.ref!=m&&(g||(g=[]),u.ref&&g.push(u.ref,null,d),g.push(m,d.__c||h,d)),h!=null?(x==null&&(x=h),typeof d.type=="function"&&d.__k===u.__k?d.__d=f=Tr(d,f,e):f=Mr(e,d,u,k,h,f),typeof n.type=="function"&&(n.__d=f)):f&&u.__e==f&&f.parentNode!=e&&(f=$e(u))}for(n.__e=x,s=w;s--;)k[s]!=null&&(typeof n.type=="function"&&k[s].__e!=null&&k[s].__e==n.__d&&(n.__d=Lr(r).nextSibling),$r(k[s],k[s]));if(g)for(s=0;s<g.length;s++)jr(g[s],g[++s],g[++s])}function Tr(e,t,n){for(var r,a=e.__k,i=0;a&&i<a.length;i++)(r=a[i])&&(r.__=e,t=typeof r.type=="function"?Tr(r,t,n):Mr(n,r,r,a,r.__e,t));return t}function V(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){V(n,t)}):t.push(e)),t}function Mr(e,t,n,r,a,i){var o,l,f;if(t.__d!==void 0)o=t.__d,t.__d=void 0;else if(n==null||a!=i||a.parentNode==null)e:if(i==null||i.parentNode!==e)e.appendChild(a),o=null;else{for(l=i,f=0;(l=l.nextSibling)&&f<r.length;f+=1)if(l==a)break e;e.insertBefore(a,i),o=i}return o!==void 0?o:a.nextSibling}function Lr(e){var t,n,r;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(r=Lr(n)))return r}return null}function qa(e,t,n,r,a){var i;for(i in n)i==="children"||i==="key"||i in t||bt(e,i,null,n[i],r);for(i in t)a&&typeof t[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||n[i]===t[i]||bt(e,i,t[i],n[i],r)}function Pn(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Ua.test(t)?n:n+"px"}function bt(e,t,n,r,a){var i;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Pn(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Pn(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?In:Nn,i):e.removeEventListener(t,i?In:Nn,i);else if(t!=="dangerouslySetInnerHTML"){if(a)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t.indexOf("-")==-1?e.removeAttribute(t):e.setAttribute(t,n))}}function Nn(e){return this.l[e.type+!1](v.event?v.event(e):e)}function In(e){return this.l[e.type+!0](v.event?v.event(e):e)}function cn(e,t,n,r,a,i,o,l,f){var c,s,m,u,d,h,x,g,k,w,A,P,O,j,$,T=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(f=n.__h,l=t.__e=n.__e,t.__h=null,i=[l]),(c=v.__b)&&c(t);try{e:if(typeof T=="function"){if(g=t.props,k=(c=T.contextType)&&r[c.__c],w=c?k?k.props.value:c.__:r,n.__c?x=(s=t.__c=n.__c).__=s.__E:("prototype"in T&&T.prototype.render?t.__c=s=new T(g,w):(t.__c=s=new H(g,w),s.constructor=T,s.render=Ba),k&&k.sub(s),s.props=g,s.state||(s.state={}),s.context=w,s.__n=r,m=s.__d=!0,s.__h=[],s._sb=[]),s.__s==null&&(s.__s=s.state),T.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=B({},s.__s)),B(s.__s,T.getDerivedStateFromProps(g,s.__s))),u=s.props,d=s.state,s.__v=t,m)T.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(T.getDerivedStateFromProps==null&&g!==u&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(g,w),!s.__e&&s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(g,s.__s,w)===!1||t.__v===n.__v){for(t.__v!==n.__v&&(s.props=g,s.state=s.__s,s.__d=!1),s.__e=!1,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(R){R&&(R.__=t)}),A=0;A<s._sb.length;A++)s.__h.push(s._sb[A]);s._sb=[],s.__h.length&&o.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(g,s.__s,w),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(u,d,h)})}if(s.context=w,s.props=g,s.__P=e,P=v.__r,O=0,"prototype"in T&&T.prototype.render){for(s.state=s.__s,s.__d=!1,P&&P(t),c=s.render(s.props,s.state,s.context),j=0;j<s._sb.length;j++)s.__h.push(s._sb[j]);s._sb=[]}else do s.__d=!1,P&&P(t),c=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++O<25);s.state=s.__s,s.getChildContext!=null&&(r=B(B({},r),s.getChildContext())),m||s.getSnapshotBeforeUpdate==null||(h=s.getSnapshotBeforeUpdate(u,d)),$=c!=null&&c.type===K&&c.key==null?c.props.children:c,Ir(e,Array.isArray($)?$:[$],t,n,r,a,i,o,l,f),s.base=t.__e,t.__h=null,s.__h.length&&o.push(s),x&&(s.__E=s.__=null),s.__e=!1}else i==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Ya(n.__e,t,n,r,a,i,o,f);(c=v.diffed)&&c(t)}catch(R){t.__v=null,(f||i!=null)&&(t.__e=l,t.__h=!!f,i[i.indexOf(l)]=null),v.__e(R,t,n)}}function Rr(e,t){v.__c&&v.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){v.__e(r,n.__v)}})}function Ya(e,t,n,r,a,i,o,l){var f,c,s,m=n.props,u=t.props,d=t.type,h=0;if(d==="svg"&&(a=!0),i!=null){for(;h<i.length;h++)if((f=i[h])&&"setAttribute"in f==!!d&&(d?f.localName===d:f.nodeType===3)){e=f,i[h]=null;break}}if(e==null){if(d===null)return document.createTextNode(u);e=a?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,u.is&&u),i=null,l=!1}if(d===null)m===u||l&&e.data===u||(e.data=u);else{if(i=i&&qe.call(e.childNodes),c=(m=n.props||vt).dangerouslySetInnerHTML,s=u.dangerouslySetInnerHTML,!l){if(i!=null)for(m={},h=0;h<e.attributes.length;h++)m[e.attributes[h].name]=e.attributes[h].value;(s||c)&&(s&&(c&&s.__html==c.__html||s.__html===e.innerHTML)||(e.innerHTML=s&&s.__html||""))}if(qa(e,u,m,a,l),s)t.__k=[];else if(h=t.props.children,Ir(e,Array.isArray(h)?h:[h],t,n,r,a&&d!=="foreignObject",i,o,i?i[0]:n.__k&&$e(n,0),l),i!=null)for(h=i.length;h--;)i[h]!=null&&Pr(i[h]);l||("value"in u&&(h=u.value)!==void 0&&(h!==e.value||d==="progress"&&!h||d==="option"&&h!==m.value)&&bt(e,"value",h,m.value,!1),"checked"in u&&(h=u.checked)!==void 0&&h!==e.checked&&bt(e,"checked",h,m.checked,!1))}return e}function jr(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){v.__e(r,n)}}function $r(e,t,n){var r,a;if(v.unmount&&v.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||jr(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){v.__e(i,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&$r(r[a],t,n||typeof e.type!="function");n||e.__e==null||Pr(e.__e),e.__=e.__e=e.__d=void 0}function Ba(e,t,n){return this.constructor(e,n)}function ke(e,t,n){var r,a,i;v.__&&v.__(e,t),a=(r=typeof n=="function")?null:n&&n.__k||t.__k,i=[],cn(t,e=(!r&&n||t).__k=X(K,null,[e]),a||vt,vt,t.ownerSVGElement!==void 0,!r&&n?[n]:a?null:t.firstChild?qe.call(t.childNodes):null,i,!r&&n?n:a?a.__e:t.firstChild,r),Rr(i,e)}function Fr(e,t){ke(e,t,Fr)}function Va(e,t,n){var r,a,i,o=B({},e.props);for(i in t)i=="key"?r=t[i]:i=="ref"?a=t[i]:o[i]=t[i];return arguments.length>2&&(o.children=arguments.length>3?qe.call(arguments,2):n),Te(e.type,o,r||e.key,a||e.ref,null)}function Ga(e,t){var n={__c:t="__cC"+Cr++,__:e,Consumer:function(r,a){return r.children(a)},Provider:function(r){var a,i;return this.getChildContext||(a=[],(i={})[t]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&a.some(function(l){l.__e=!0,qt(l)})},this.sub=function(o){a.push(o);var l=o.componentWillUnmount;o.componentWillUnmount=function(){a.splice(a.indexOf(o),1),l&&l.call(o)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}qe=Or.slice,v={__e:function(e,t,n,r){for(var a,i,o;t=t.__;)if((a=t.__c)&&!a.__)try{if((i=a.constructor)&&i.getDerivedStateFromError!=null&&(a.setState(i.getDerivedStateFromError(e)),o=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,r||{}),o=a.__d),o)return a.__E=a}catch(l){e=l}throw e}},Sr=0,H.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=B({},this.state),typeof e=="function"&&(e=e(B({},n),this.props)),e&&B(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),qt(this))},H.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),qt(this))},H.prototype.render=K,le=[],Er=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ht=function(e,t){return e.__v.__b-t.__v.__b},ht.__r=0,Cr=0;let b;const Y=new Array(128).fill(void 0);Y.push(void 0,null,!0,!1);function st(e){return Y[e]}let Me=Y.length;function Xa(e){e<132||(Y[e]=Me,Me=e)}function un(e){const t=st(e);return Xa(e),t}const Dr=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Dr.decode();let Oe=null;function lt(){return(Oe===null||Oe.byteLength===0)&&(Oe=new Uint8Array(b.memory.buffer)),Oe}function gt(e,t){return Dr.decode(lt().subarray(e,e+t))}function Ke(e){Me===Y.length&&Y.push(Y.length+1);const t=Me;return Me=Y[t],Y[t]=e,t}let Fe=0;const ft=new TextEncoder("utf-8"),Ka=typeof ft.encodeInto=="function"?function(e,t){return ft.encodeInto(e,t)}:function(e,t){const n=ft.encode(e);return t.set(n),{read:e.length,written:n.length}};function mn(e,t,n){if(n===void 0){const l=ft.encode(e),f=t(l.length);return lt().subarray(f,f+l.length).set(l),Fe=l.length,f}let r=e.length,a=t(r);const i=lt();let o=0;for(;o<r;o++){const l=e.charCodeAt(o);if(l>127)break;i[a+o]=l}if(o!==r){o!==0&&(e=e.slice(o)),a=n(a,r,r=o+e.length*3);const l=lt().subarray(a+o,a+r),f=Ka(e,l);o+=f.written}return Fe=o,a}let Pe=null;function xe(){return(Pe===null||Pe.byteLength===0)&&(Pe=new Int32Array(b.memory.buffer)),Pe}function Le(e,t){if(!(e instanceof t))throw new Error(`expected instance of ${t.name}`);return e.ptr}const F=Object.freeze({Empty:0,0:"Empty",White:1,1:"White",Black:2,2:"Black"});class G{static __wrap(t){const n=Object.create(G.prototype);return n.ptr=t,n}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();b.__wbg_board_free(t)}constructor(){const t=b.board_new();return G.__wrap(t)}static from_json(t){const n=mn(t,b.__wbindgen_malloc,b.__wbindgen_realloc),r=Fe,a=b.board_from_json(n,r);return G.__wrap(a)}to_json(){try{const r=b.__wbindgen_add_to_stack_pointer(-16);b.board_to_json(r,this.ptr);var t=xe()[r/4+0],n=xe()[r/4+1];return gt(t,n)}finally{b.__wbindgen_add_to_stack_pointer(16),b.__wbindgen_free(t,n)}}init_default_state(){b.board_init_default_state(this.ptr)}get_bitboard(t,n){const r=b.board_get_bitboard(this.ptr,t,n);return BigInt.asUintN(64,r)}has_piece(t,n){return b.board_has_piece(this.ptr,t,n)!==0}is_king(t,n){return b.board_is_king(this.ptr,t,n)!==0}get_piece(t){const n=b.board_get_piece(this.ptr,t);return Ct.__wrap(n)}get_pieces(){const t=b.board_get_pieces(this.ptr);return un(t)}update_from_move(t){Le(t,me),b.board_update_from_move(this.ptr,t.ptr)}is_game_over(){return b.board_is_game_over(this.ptr)!==0}}class Qa{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();b.__wbg_checkersai_free(t)}static get_heuristic_value(t){return Le(t,G),b.checkersai_get_heuristic_value(t.ptr)}static alphabeta(t,n,r,a,i){return Le(t,G),b.checkersai_alphabeta(t.ptr,n,r,a,i)}static get_best_move_alphabeta(t,n,r){Le(t,G);const a=b.checkersai_get_best_move_alphabeta(t.ptr,n,r);return me.__wrap(a)}}class me{static __wrap(t){const n=Object.create(me.prototype);return n.ptr=t,n}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();b.__wbg_move_free(t)}get start_square(){return b.__wbg_get_move_start_square(this.ptr)}set start_square(t){b.__wbg_set_move_start_square(this.ptr,t)}get end_square(){return b.__wbg_get_move_end_square(this.ptr)}set end_square(t){b.__wbg_set_move_end_square(this.ptr,t)}get capture_square(){return b.__wbg_get_move_capture_square(this.ptr)}set capture_square(t){b.__wbg_set_move_capture_square(this.ptr,t)}get did_capture(){return b.__wbg_get_move_did_capture(this.ptr)!==0}set did_capture(t){b.__wbg_set_move_did_capture(this.ptr,t)}get can_capture_again(){return b.__wbg_get_move_can_capture_again(this.ptr)!==0}set can_capture_again(t){b.__wbg_set_move_can_capture_again(this.ptr,t)}get did_king(){return b.__wbg_get_move_did_king(this.ptr)!==0}set did_king(t){b.__wbg_set_move_did_king(this.ptr,t)}static from_json(t){const n=mn(t,b.__wbindgen_malloc,b.__wbindgen_realloc),r=Fe,a=b.move_from_json(n,r);return me.__wrap(a)}to_json(){try{const r=b.__wbindgen_add_to_stack_pointer(-16);b.move_to_json(r,this.ptr);var t=xe()[r/4+0],n=xe()[r/4+1];return gt(t,n)}finally{b.__wbindgen_add_to_stack_pointer(16),b.__wbindgen_free(t,n)}}}class Za{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();b.__wbg_movegeneration_free(t)}static generate_all_moves_js(t,n){Le(t,G);const r=b.movegeneration_generate_all_moves_js(t.ptr,n);return un(r)}}class Ct{static __wrap(t){const n=Object.create(Ct.prototype);return n.ptr=t,n}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();b.__wbg_piece_free(t)}get color(){return b.__wbg_get_piece_color(this.ptr)>>>0}set color(t){b.__wbg_set_piece_color(this.ptr,t)}get is_king(){return b.__wbg_get_piece_is_king(this.ptr)!==0}set is_king(t){b.__wbg_set_piece_is_king(this.ptr,t)}}async function Ja(e,t){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,t)}catch(r){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}else{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}function ei(){const e={};return e.wbg={},e.wbg.__wbg_move_new=function(t){const n=me.__wrap(t);return Ke(n)},e.wbg.__wbg_piece_new=function(t){const n=Ct.__wrap(t);return Ke(n)},e.wbg.__wbindgen_object_drop_ref=function(t){un(t)},e.wbg.__wbg_new_abda76e883ba8a5f=function(){const t=new Error;return Ke(t)},e.wbg.__wbg_stack_658279fe44541cf6=function(t,n){const r=st(n).stack,a=mn(r,b.__wbindgen_malloc,b.__wbindgen_realloc),i=Fe;xe()[t/4+1]=i,xe()[t/4+0]=a},e.wbg.__wbg_error_f851667af71bcfc6=function(t,n){try{console.error(gt(t,n))}finally{b.__wbindgen_free(t,n)}},e.wbg.__wbg_new_b525de17f44a8943=function(){const t=new Array;return Ke(t)},e.wbg.__wbg_push_49c286f04dd3bf59=function(t,n){return st(t).push(st(n))},e.wbg.__wbindgen_throw=function(t,n){throw new Error(gt(t,n))},e}function ti(e,t){return b=e.exports,zr.__wbindgen_wasm_module=t,Pe=null,Oe=null,b.__wbindgen_start(),b}async function zr(e){typeof e>"u"&&(e=new URL("/assets/wasm_checkers_bg-96dcdac9.wasm",self.location));const t=ei();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:n,module:r}=await Ja(await e,t);return ti(n,r)}var pe,S,Rt,Tn,Ae=0,Wr=[],ct=[],Mn=v.__b,Ln=v.__r,Rn=v.diffed,jn=v.__c,$n=v.unmount;function Ee(e,t){v.__h&&v.__h(S,e,Ae||t),Ae=0;var n=S.__H||(S.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:ct}),n.__[e]}function D(e){return Ae=1,Ur(Hr,e)}function Ur(e,t,n){var r=Ee(pe++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Hr(void 0,t),function(l){var f=r.__N?r.__N[0]:r.__[0],c=r.t(f,l);f!==c&&(r.__N=[c,r.__[1]],r.__c.setState({}))}],r.__c=S,!S.u)){var a=function(l,f,c){if(!r.__c.__H)return!0;var s=r.__c.__H.__.filter(function(u){return u.__c});if(s.every(function(u){return!u.__N}))return!i||i.call(this,l,f,c);var m=!1;return s.forEach(function(u){if(u.__N){var d=u.__[0];u.__=u.__N,u.__N=void 0,d!==u.__[0]&&(m=!0)}}),!(!m&&r.__c.props===l)&&(!i||i.call(this,l,f,c))};S.u=!0;var i=S.shouldComponentUpdate,o=S.componentWillUpdate;S.componentWillUpdate=function(l,f,c){if(this.__e){var s=i;i=void 0,a(l,f,c),i=s}o&&o.call(this,l,f,c)},S.shouldComponentUpdate=a}return r.__N||r.__}function ne(e,t){var n=Ee(pe++,3);!v.__s&&dn(n.__H,t)&&(n.__=e,n.i=t,S.__H.__h.push(n))}function Ot(e,t){var n=Ee(pe++,4);!v.__s&&dn(n.__H,t)&&(n.__=e,n.i=t,S.__h.push(n))}function ni(e){return Ae=5,Pt(function(){return{current:e}},[])}function ri(e,t,n){Ae=6,Ot(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function Pt(e,t){var n=Ee(pe++,7);return dn(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function ai(e,t){return Ae=8,Pt(function(){return e},t)}function ii(e){var t=S.context[e.__c],n=Ee(pe++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(S)),t.props.value):e.__}function oi(e,t){v.useDebugValue&&v.useDebugValue(t?t(e):e)}function si(){var e=Ee(pe++,11);if(!e.__){for(var t=S.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function li(){for(var e;e=Wr.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ut),e.__H.__h.forEach(Yt),e.__H.__h=[]}catch(t){e.__H.__h=[],v.__e(t,e.__v)}}v.__b=function(e){S=null,Mn&&Mn(e)},v.__r=function(e){Ln&&Ln(e),pe=0;var t=(S=e.__c).__H;t&&(Rt===S?(t.__h=[],S.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=ct,n.__N=n.i=void 0})):(t.__h.forEach(ut),t.__h.forEach(Yt),t.__h=[])),Rt=S},v.diffed=function(e){Rn&&Rn(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Wr.push(t)!==1&&Tn===v.requestAnimationFrame||((Tn=v.requestAnimationFrame)||fi)(li)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==ct&&(n.__=n.__V),n.i=void 0,n.__V=ct})),Rt=S=null},v.__c=function(e,t){t.some(function(n){try{n.__h.forEach(ut),n.__h=n.__h.filter(function(r){return!r.__||Yt(r)})}catch(r){t.some(function(a){a.__h&&(a.__h=[])}),t=[],v.__e(r,n.__v)}}),jn&&jn(e,t)},v.unmount=function(e){$n&&$n(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{ut(r)}catch(a){t=a}}),n.__H=void 0,t&&v.__e(t,n.__v))};var Fn=typeof requestAnimationFrame=="function";function fi(e){var t,n=function(){clearTimeout(r),Fn&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Fn&&(t=requestAnimationFrame(n))}function ut(e){var t=S,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),S=t}function Yt(e){var t=S;e.__c=e.__(),S=t}function dn(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Hr(e,t){return typeof t=="function"?t(e):t}const ci="_main_yzs0q_1",ui={main:ci},mi="_board_1q7vc_1",di={board:mi};var _i={prefix:"fas",iconName:"crown",icon:[576,512,[128081],"f521","M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"]};function Dn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Dn(Object(n),!0).forEach(function(r){M(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Dn(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yt(e){return yt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yt(e)}function pi(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function zn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function vi(e,t,n){return t&&zn(e.prototype,t),n&&zn(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _n(e,t){return bi(e)||yi(e,t)||qr(e,t)||ki()}function Ye(e){return hi(e)||gi(e)||qr(e)||wi()}function hi(e){if(Array.isArray(e))return Bt(e)}function bi(e){if(Array.isArray(e))return e}function gi(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function yi(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,l;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(f){i=!0,l=f}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw l}}return r}}function qr(e,t){if(e){if(typeof e=="string")return Bt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bt(e,t)}}function Bt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function wi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ki(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Wn=function(){},pn={},Yr={},Br=null,Vr={mark:Wn,measure:Wn};try{typeof window<"u"&&(pn=window),typeof document<"u"&&(Yr=document),typeof MutationObserver<"u"&&(Br=MutationObserver),typeof performance<"u"&&(Vr=performance)}catch{}var xi=pn.navigator||{},Un=xi.userAgent,Hn=Un===void 0?"":Un,ae=pn,C=Yr,qn=Br,Qe=Vr;ae.document;var ee=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function",Gr=~Hn.indexOf("MSIE")||~Hn.indexOf("Trident/"),Ze,Je,et,tt,nt,Q="___FONT_AWESOME___",Vt=16,Xr="fa",Kr="svg-inline--fa",de="data-fa-i2svg",Gt="data-fa-pseudo-element",Ai="data-fa-pseudo-element-pending",vn="data-prefix",hn="data-icon",Yn="fontawesome-i2svg",Si="async",Ei=["HTML","HEAD","STYLE","SCRIPT"],Qr=function(){try{return!0}catch{return!1}}(),E="classic",N="sharp",bn=[E,N];function Be(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[E]}})}var De=Be((Ze={},M(Ze,E,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),M(Ze,N,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),Ze)),ze=Be((Je={},M(Je,E,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),M(Je,N,{solid:"fass",regular:"fasr"}),Je)),We=Be((et={},M(et,E,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),M(et,N,{fass:"fa-solid",fasr:"fa-regular"}),et)),Ci=Be((tt={},M(tt,E,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),M(tt,N,{"fa-solid":"fass","fa-regular":"fasr"}),tt)),Oi=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,Zr="fa-layers-text",Pi=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ni=Be((nt={},M(nt,E,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),M(nt,N,{900:"fass",400:"fasr"}),nt)),Jr=[1,2,3,4,5,6,7,8,9,10],Ii=Jr.concat([11,12,13,14,15,16,17,18,19,20]),Ti=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ce={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ue=new Set;Object.keys(ze[E]).map(Ue.add.bind(Ue));Object.keys(ze[N]).map(Ue.add.bind(Ue));var Mi=[].concat(bn,Ye(Ue),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ce.GROUP,ce.SWAP_OPACITY,ce.PRIMARY,ce.SECONDARY]).concat(Jr.map(function(e){return"".concat(e,"x")})).concat(Ii.map(function(e){return"w-".concat(e)})),Re=ae.FontAwesomeConfig||{};function Li(e){var t=C.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ri(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(C&&typeof C.querySelector=="function"){var ji=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ji.forEach(function(e){var t=_n(e,2),n=t[0],r=t[1],a=Ri(Li(n));a!=null&&(Re[r]=a)})}var ea={styleDefault:"solid",familyDefault:"classic",cssPrefix:Xr,replacementClass:Kr,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Re.familyPrefix&&(Re.cssPrefix=Re.familyPrefix);var Se=_(_({},ea),Re);Se.autoReplaceSvg||(Se.observeMutations=!1);var p={};Object.keys(ea).forEach(function(e){Object.defineProperty(p,e,{enumerable:!0,set:function(n){Se[e]=n,je.forEach(function(r){return r(p)})},get:function(){return Se[e]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(t){Se.cssPrefix=t,je.forEach(function(n){return n(p)})},get:function(){return Se.cssPrefix}});ae.FontAwesomeConfig=p;var je=[];function $i(e){return je.push(e),function(){je.splice(je.indexOf(e),1)}}var te=Vt,U={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Fi(e){if(!(!e||!ee)){var t=C.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=C.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return C.head.insertBefore(t,r),e}}var Di="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function He(){for(var e=12,t="";e-- >0;)t+=Di[Math.random()*62|0];return t}function Ce(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function gn(e){return e.classList?Ce(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ta(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function zi(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ta(e[n]),'" ')},"").trim()}function Nt(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function yn(e){return e.size!==U.size||e.x!==U.x||e.y!==U.y||e.rotate!==U.rotate||e.flipX||e.flipY}function Wi(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:f,path:c}}function Ui(e){var t=e.transform,n=e.width,r=n===void 0?Vt:n,a=e.height,i=a===void 0?Vt:a,o=e.startCentered,l=o===void 0?!1:o,f="";return l&&Gr?f+="translate(".concat(t.x/te-r/2,"em, ").concat(t.y/te-i/2,"em) "):l?f+="translate(calc(-50% + ".concat(t.x/te,"em), calc(-50% + ").concat(t.y/te,"em)) "):f+="translate(".concat(t.x/te,"em, ").concat(t.y/te,"em) "),f+="scale(".concat(t.size/te*(t.flipX?-1:1),", ").concat(t.size/te*(t.flipY?-1:1),") "),f+="rotate(".concat(t.rotate,"deg) "),f}var Hi=`:root, :host {
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
}`;function na(){var e=Xr,t=Kr,n=p.cssPrefix,r=p.replacementClass,a=Hi;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return a}var Bn=!1;function jt(){p.autoAddCss&&!Bn&&(Fi(na()),Bn=!0)}var qi={mixout:function(){return{dom:{css:na,insertCss:jt}}},hooks:function(){return{beforeDOMElementCreation:function(){jt()},beforeI2svg:function(){jt()}}}},Z=ae||{};Z[Q]||(Z[Q]={});Z[Q].styles||(Z[Q].styles={});Z[Q].hooks||(Z[Q].hooks={});Z[Q].shims||(Z[Q].shims=[]);var W=Z[Q],ra=[],Yi=function e(){C.removeEventListener("DOMContentLoaded",e),wt=1,ra.map(function(t){return t()})},wt=!1;ee&&(wt=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),wt||C.addEventListener("DOMContentLoaded",Yi));function Bi(e){ee&&(wt?setTimeout(e,0):ra.push(e))}function Ve(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?ta(e):"<".concat(t," ").concat(zi(r),">").concat(i.map(Ve).join(""),"</").concat(t,">")}function Vn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Vi=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},$t=function(t,n,r,a){var i=Object.keys(t),o=i.length,l=a!==void 0?Vi(n,a):n,f,c,s;for(r===void 0?(f=1,s=t[i[0]]):(f=0,s=r);f<o;f++)c=i[f],s=l(s,t[c],c,t);return s};function Gi(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Xt(e){var t=Gi(e);return t.length===1?t[0].toString(16):null}function Xi(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Gn(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Kt(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Gn(t);typeof W.hooks.addPack=="function"&&!a?W.hooks.addPack(e,Gn(t)):W.styles[e]=_(_({},W.styles[e]||{}),i),e==="fas"&&Kt("fa",t)}var rt,at,it,be=W.styles,Ki=W.shims,Qi=(rt={},M(rt,E,Object.values(We[E])),M(rt,N,Object.values(We[N])),rt),wn=null,aa={},ia={},oa={},sa={},la={},Zi=(at={},M(at,E,Object.keys(De[E])),M(at,N,Object.keys(De[N])),at);function Ji(e){return~Mi.indexOf(e)}function eo(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Ji(a)?a:null}var fa=function(){var t=function(i){return $t(be,function(o,l,f){return o[f]=$t(l,i,{}),o},{})};aa=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var l=i[2].filter(function(f){return typeof f=="number"});l.forEach(function(f){a[f.toString(16)]=o})}return a}),ia=t(function(a,i,o){if(a[o]=o,i[2]){var l=i[2].filter(function(f){return typeof f=="string"});l.forEach(function(f){a[f]=o})}return a}),la=t(function(a,i,o){var l=i[2];return a[o]=o,l.forEach(function(f){a[f]=o}),a});var n="far"in be||p.autoFetchSvg,r=$t(Ki,function(a,i){var o=i[0],l=i[1],f=i[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(a.names[o]={prefix:l,iconName:f}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:l,iconName:f}),a},{names:{},unicodes:{}});oa=r.names,sa=r.unicodes,wn=It(p.styleDefault,{family:p.familyDefault})};$i(function(e){wn=It(e.styleDefault,{family:p.familyDefault})});fa();function kn(e,t){return(aa[e]||{})[t]}function to(e,t){return(ia[e]||{})[t]}function ue(e,t){return(la[e]||{})[t]}function ca(e){return oa[e]||{prefix:null,iconName:null}}function no(e){var t=sa[e],n=kn("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ie(){return wn}var xn=function(){return{prefix:null,iconName:null,rest:[]}};function It(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?E:n,a=De[r][e],i=ze[r][e]||ze[r][a],o=e in W.styles?e:null;return i||o||null}var Xn=(it={},M(it,E,Object.keys(We[E])),M(it,N,Object.keys(We[N])),it);function Tt(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},M(t,E,"".concat(p.cssPrefix,"-").concat(E)),M(t,N,"".concat(p.cssPrefix,"-").concat(N)),t),o=null,l=E;(e.includes(i[E])||e.some(function(c){return Xn[E].includes(c)}))&&(l=E),(e.includes(i[N])||e.some(function(c){return Xn[N].includes(c)}))&&(l=N);var f=e.reduce(function(c,s){var m=eo(p.cssPrefix,s);if(be[s]?(s=Qi[l].includes(s)?Ci[l][s]:s,o=s,c.prefix=s):Zi[l].indexOf(s)>-1?(o=s,c.prefix=It(s,{family:l})):m?c.iconName=m:s!==p.replacementClass&&s!==i[E]&&s!==i[N]&&c.rest.push(s),!a&&c.prefix&&c.iconName){var u=o==="fa"?ca(c.iconName):{},d=ue(c.prefix,c.iconName);u.prefix&&(o=null),c.iconName=u.iconName||d||c.iconName,c.prefix=u.prefix||c.prefix,c.prefix==="far"&&!be.far&&be.fas&&!p.autoFetchSvg&&(c.prefix="fas")}return c},xn());return(e.includes("fa-brands")||e.includes("fab"))&&(f.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(f.prefix="fad"),!f.prefix&&l===N&&(be.fass||p.autoFetchSvg)&&(f.prefix="fass",f.iconName=ue(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=ie()||"fas"),f}var ro=function(){function e(){pi(this,e),this.definitions={}}return vi(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=_(_({},n.definitions[l]||{}),o[l]),Kt(l,o[l]);var f=We[E][l];f&&Kt(f,o[l]),fa()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],l=o.prefix,f=o.iconName,c=o.icon,s=c[2];n[l]||(n[l]={}),s.length>0&&s.forEach(function(m){typeof m=="string"&&(n[l][m]=c)}),n[l][f]=c}),n}}]),e}(),Kn=[],ge={},we={},ao=Object.keys(we);function io(e,t){var n=t.mixoutsTo;return Kn=e,ge={},Object.keys(we).forEach(function(r){ao.indexOf(r)===-1&&delete we[r]}),Kn.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),yt(a[o])==="object"&&Object.keys(a[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=a[o][l]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){ge[o]||(ge[o]=[]),ge[o].push(i[o])})}r.provides&&r.provides(we)}),n}function Qt(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=ge[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function _e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=ge[e]||[];a.forEach(function(i){i.apply(null,n)})}function J(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return we[e]?we[e].apply(null,t):void 0}function Zt(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ie();if(t)return t=ue(n,t)||t,Vn(ua.definitions,n,t)||Vn(W.styles,n,t)}var ua=new ro,oo=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,_e("noAuto")},so={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ee?(_e("beforeI2svg",t),J("pseudoElements2svg",t),J("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,Bi(function(){fo({autoReplaceSvgRoot:n}),_e("watch",t)})}},lo={icon:function(t){if(t===null)return null;if(yt(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ue(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=It(t[0]);return{prefix:r,iconName:ue(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(p.cssPrefix,"-"))>-1||t.match(Oi))){var a=Tt(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ie(),iconName:ue(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ie();return{prefix:i,iconName:ue(i,t)||t}}}},z={noAuto:oo,config:p,dom:so,parse:lo,library:ua,findIconDefinition:Zt,toHtml:Ve},fo=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?C:n;(Object.keys(W.styles).length>0||p.autoFetchSvg)&&ee&&p.autoReplaceSvg&&z.dom.i2svg({node:r})};function Mt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ve(r)})}}),Object.defineProperty(e,"node",{get:function(){if(ee){var r=C.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function co(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(yn(o)&&n.found&&!r.found){var l=n.width,f=n.height,c={x:l/f/2,y:.5};a.style=Nt(_(_({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function uo(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(p.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:_(_({},a),{},{id:o}),children:r}]}]}function An(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,l=e.symbol,f=e.title,c=e.maskId,s=e.titleId,m=e.extra,u=e.watchable,d=u===void 0?!1:u,h=r.found?r:n,x=h.width,g=h.height,k=a==="fak",w=[p.replacementClass,i?"".concat(p.cssPrefix,"-").concat(i):""].filter(function(R){return m.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(m.classes).join(" "),A={children:[],attributes:_(_({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(g)})},P=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(x/g*16*.0625,"em")}:{};d&&(A.attributes[de]=""),f&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(s||He())},children:[f]}),delete A.attributes.title);var O=_(_({},A),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:l,styles:_(_({},P),m.styles)}),j=r.found&&n.found?J("generateAbstractMask",O)||{children:[],attributes:{}}:J("generateAbstractIcon",O)||{children:[],attributes:{}},$=j.children,T=j.attributes;return O.children=$,O.attributes=T,l?uo(O):co(O)}function Qn(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,l=e.watchable,f=l===void 0?!1:l,c=_(_(_({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(c[de]="");var s=_({},o.styles);yn(a)&&(s.transform=Ui({transform:a,startCentered:!0,width:n,height:r}),s["-webkit-transform"]=s.transform);var m=Nt(s);m.length>0&&(c.style=m);var u=[];return u.push({tag:"span",attributes:c,children:[t]}),i&&u.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),u}function mo(e){var t=e.content,n=e.title,r=e.extra,a=_(_(_({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Nt(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ft=W.styles;function Jt(e){var t=e[0],n=e[1],r=e.slice(4),a=_n(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(ce.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(ce.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(ce.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var _o={found:!1,width:512,height:512};function po(e,t){!Qr&&!p.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function en(e,t){var n=t;return t==="fa"&&p.styleDefault!==null&&(t=ie()),new Promise(function(r,a){if(J("missingIconAbstract"),n==="fa"){var i=ca(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ft[t]&&Ft[t][e]){var o=Ft[t][e];return r(Jt(o))}po(e,t),r(_(_({},_o),{},{icon:p.showMissingIcons&&e?J("missingIconAbstract")||{}:{}}))})}var Zn=function(){},tn=p.measurePerformance&&Qe&&Qe.mark&&Qe.measure?Qe:{mark:Zn,measure:Zn},Ne='FA "6.3.0"',vo=function(t){return tn.mark("".concat(Ne," ").concat(t," begins")),function(){return ma(t)}},ma=function(t){tn.mark("".concat(Ne," ").concat(t," ends")),tn.measure("".concat(Ne," ").concat(t),"".concat(Ne," ").concat(t," begins"),"".concat(Ne," ").concat(t," ends"))},Sn={begin:vo,end:ma},mt=function(){};function Jn(e){var t=e.getAttribute?e.getAttribute(de):null;return typeof t=="string"}function ho(e){var t=e.getAttribute?e.getAttribute(vn):null,n=e.getAttribute?e.getAttribute(hn):null;return t&&n}function bo(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(p.replacementClass)}function go(){if(p.autoReplaceSvg===!0)return dt.replace;var e=dt[p.autoReplaceSvg];return e||dt.replace}function yo(e){return C.createElementNS("http://www.w3.org/2000/svg",e)}function wo(e){return C.createElement(e)}function da(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?yo:wo:n;if(typeof e=="string")return C.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(da(o,{ceFn:r}))}),a}function ko(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var dt={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(da(a),n)}),n.getAttribute(de)===null&&p.keepOriginalSource){var r=C.createComment(ko(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~gn(n).indexOf(p.replacementClass))return dt.replace(t);var a=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(l,f){return f===p.replacementClass||f.match(a)?l.toSvg.push(f):l.toNode.push(f),l},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(l){return Ve(l)}).join(`
`);n.setAttribute(de,""),n.innerHTML=o}};function er(e){e()}function _a(e,t){var n=typeof t=="function"?t:mt;if(e.length===0)n();else{var r=er;p.mutateApproach===Si&&(r=ae.requestAnimationFrame||er),r(function(){var a=go(),i=Sn.begin("mutate");e.map(a),i(),n()})}}var En=!1;function pa(){En=!0}function nn(){En=!1}var kt=null;function tr(e){if(qn&&p.observeMutations){var t=e.treeCallback,n=t===void 0?mt:t,r=e.nodeCallback,a=r===void 0?mt:r,i=e.pseudoElementsCallback,o=i===void 0?mt:i,l=e.observeMutationsRoot,f=l===void 0?C:l;kt=new qn(function(c){if(!En){var s=ie();Ce(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Jn(m.addedNodes[0])&&(p.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&p.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Jn(m.target)&&~Ti.indexOf(m.attributeName))if(m.attributeName==="class"&&ho(m.target)){var u=Tt(gn(m.target)),d=u.prefix,h=u.iconName;m.target.setAttribute(vn,d||s),h&&m.target.setAttribute(hn,h)}else bo(m.target)&&a(m.target)})}}),ee&&kt.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function xo(){kt&&kt.disconnect()}function Ao(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function So(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Tt(gn(e));return a.prefix||(a.prefix=ie()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=to(a.prefix,e.innerText)||kn(a.prefix,Xt(e.innerText))),!a.iconName&&p.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Eo(e){var t=Ce(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return p.autoA11y&&(n?t["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(r||He()):(t["aria-hidden"]="true",t.focusable="false")),t}function Co(){return{iconName:null,title:null,titleId:null,prefix:null,transform:U,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function nr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=So(e),r=n.iconName,a=n.prefix,i=n.rest,o=Eo(e),l=Qt("parseNodeAttributes",{},e),f=t.styleParser?Ao(e):[];return _({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:U,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},l)}var Oo=W.styles;function va(e){var t=p.autoReplaceSvg==="nest"?nr(e,{styleParser:!1}):nr(e);return~t.extra.classes.indexOf(Zr)?J("generateLayersText",e,t):J("generateSvgReplacementMutation",e,t)}var oe=new Set;bn.map(function(e){oe.add("fa-".concat(e))});Object.keys(De[E]).map(oe.add.bind(oe));Object.keys(De[N]).map(oe.add.bind(oe));oe=Ye(oe);function rr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ee)return Promise.resolve();var n=C.documentElement.classList,r=function(m){return n.add("".concat(Yn,"-").concat(m))},a=function(m){return n.remove("".concat(Yn,"-").concat(m))},i=p.autoFetchSvg?oe:bn.map(function(s){return"fa-".concat(s)}).concat(Object.keys(Oo));i.includes("fa")||i.push("fa");var o=[".".concat(Zr,":not([").concat(de,"])")].concat(i.map(function(s){return".".concat(s,":not([").concat(de,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=Ce(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();var f=Sn.begin("onTree"),c=l.reduce(function(s,m){try{var u=va(m);u&&s.push(u)}catch(d){Qr||d.name==="MissingIcon"&&console.error(d)}return s},[]);return new Promise(function(s,m){Promise.all(c).then(function(u){_a(u,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),f(),s()})}).catch(function(u){f(),m(u)})})}function Po(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;va(e).then(function(n){n&&_a([n],t)})}function No(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Zt(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Zt(a||{})),e(r,_(_({},n),{},{mask:a}))}}var Io=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?U:r,i=n.symbol,o=i===void 0?!1:i,l=n.mask,f=l===void 0?null:l,c=n.maskId,s=c===void 0?null:c,m=n.title,u=m===void 0?null:m,d=n.titleId,h=d===void 0?null:d,x=n.classes,g=x===void 0?[]:x,k=n.attributes,w=k===void 0?{}:k,A=n.styles,P=A===void 0?{}:A;if(t){var O=t.prefix,j=t.iconName,$=t.icon;return Mt(_({type:"icon"},t),function(){return _e("beforeDOMElementCreation",{iconDefinition:t,params:n}),p.autoA11y&&(u?w["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(h||He()):(w["aria-hidden"]="true",w.focusable="false")),An({icons:{main:Jt($),mask:f?Jt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:j,transform:_(_({},U),a),symbol:o,title:u,maskId:s,titleId:h,extra:{attributes:w,styles:P,classes:g}})})}},To={mixout:function(){return{icon:No(Io)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=rr,n.nodeCallback=Po,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?C:r,i=n.callback,o=i===void 0?function(){}:i;return rr(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,l=r.prefix,f=r.transform,c=r.symbol,s=r.mask,m=r.maskId,u=r.extra;return new Promise(function(d,h){Promise.all([en(a,l),s.iconName?en(s.iconName,s.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var g=_n(x,2),k=g[0],w=g[1];d([n,An({icons:{main:k,mask:w},prefix:l,iconName:a,transform:f,symbol:c,maskId:m,title:i,titleId:o,extra:u,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,l=n.styles,f=Nt(l);f.length>0&&(a.style=f);var c;return yn(o)&&(c=J("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Mo={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Mt({type:"layer"},function(){_e("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(f){o=o.concat(f.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(Ye(i)).join(" ")},children:o}]})}}}},Lo={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,l=o===void 0?[]:o,f=r.attributes,c=f===void 0?{}:f,s=r.styles,m=s===void 0?{}:s;return Mt({type:"counter",content:n},function(){return _e("beforeDOMElementCreation",{content:n,params:r}),mo({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(Ye(l))}})})}}}},Ro={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?U:a,o=r.title,l=o===void 0?null:o,f=r.classes,c=f===void 0?[]:f,s=r.attributes,m=s===void 0?{}:s,u=r.styles,d=u===void 0?{}:u;return Mt({type:"text",content:n},function(){return _e("beforeDOMElementCreation",{content:n,params:r}),Qn({content:n,transform:_(_({},U),i),title:l,extra:{attributes:m,styles:d,classes:["".concat(p.cssPrefix,"-layers-text")].concat(Ye(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,l=null,f=null;if(Gr){var c=parseInt(getComputedStyle(n).fontSize,10),s=n.getBoundingClientRect();l=s.width/c,f=s.height/c}return p.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Qn({content:n.innerHTML,width:l,height:f,transform:i,title:a,extra:o,watchable:!0})])}}},jo=new RegExp('"',"ug"),ar=[1105920,1112319];function $o(e){var t=e.replace(jo,""),n=Xi(t,0),r=n>=ar[0]&&n<=ar[1],a=t.length===2?t[0]===t[1]:!1;return{value:Xt(a?t[0]:t),isSecondary:r||a}}function ir(e,t){var n="".concat(Ai).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ce(e.children),o=i.filter(function($){return $.getAttribute(Gt)===t})[0],l=ae.getComputedStyle(e,t),f=l.getPropertyValue("font-family").match(Pi),c=l.getPropertyValue("font-weight"),s=l.getPropertyValue("content");if(o&&!f)return e.removeChild(o),r();if(f&&s!=="none"&&s!==""){var m=l.getPropertyValue("content"),u=~["Sharp"].indexOf(f[2])?N:E,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?ze[u][f[2].toLowerCase()]:Ni[u][c],h=$o(m),x=h.value,g=h.isSecondary,k=f[0].startsWith("FontAwesome"),w=kn(d,x),A=w;if(k){var P=no(x);P.iconName&&P.prefix&&(w=P.iconName,d=P.prefix)}if(w&&!g&&(!o||o.getAttribute(vn)!==d||o.getAttribute(hn)!==A)){e.setAttribute(n,A),o&&e.removeChild(o);var O=Co(),j=O.extra;j.attributes[Gt]=t,en(w,d).then(function($){var T=An(_(_({},O),{},{icons:{main:$,mask:xn()},prefix:d,iconName:A,extra:j,watchable:!0})),R=C.createElement("svg");t==="::before"?e.insertBefore(R,e.firstChild):e.appendChild(R),R.outerHTML=T.map(function(Lt){return Ve(Lt)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Fo(e){return Promise.all([ir(e,"::before"),ir(e,"::after")])}function Do(e){return e.parentNode!==document.head&&!~Ei.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Gt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function or(e){if(ee)return new Promise(function(t,n){var r=Ce(e.querySelectorAll("*")).filter(Do).map(Fo),a=Sn.begin("searchPseudoElements");pa(),Promise.all(r).then(function(){a(),nn(),t()}).catch(function(){a(),nn(),n()})})}var zo={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=or,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?C:r;p.searchPseudoElements&&or(a)}}},sr=!1,Wo={mixout:function(){return{dom:{unwatch:function(){pa(),sr=!0}}}},hooks:function(){return{bootstrap:function(){tr(Qt("mutationObserverCallbacks",{}))},noAuto:function(){xo()},watch:function(n){var r=n.observeMutationsRoot;sr?nn():tr(Qt("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},lr=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},Uo={mixout:function(){return{parse:{transform:function(n){return lr(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=lr(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),s="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(f," ").concat(c," ").concat(s)},u={transform:"translate(".concat(o/2*-1," -256)")},d={outer:l,inner:m,path:u};return{tag:"g",attributes:_({},d.outer),children:[{tag:"g",attributes:_({},d.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:_(_({},r.icon.attributes),d.path)}]}]}}}},Dt={x:0,y:0,width:"100%",height:"100%"};function fr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ho(e){return e.tag==="g"?e.children:[e]}var qo={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Tt(a.split(" ").map(function(o){return o.trim()})):xn();return i.prefix||(i.prefix=ie()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,l=n.maskId,f=n.transform,c=i.width,s=i.icon,m=o.width,u=o.icon,d=Wi({transform:f,containerWidth:m,iconWidth:c}),h={tag:"rect",attributes:_(_({},Dt),{},{fill:"white"})},x=s.children?{children:s.children.map(fr)}:{},g={tag:"g",attributes:_({},d.inner),children:[fr(_({tag:s.tag,attributes:_(_({},s.attributes),d.path)},x))]},k={tag:"g",attributes:_({},d.outer),children:[g]},w="mask-".concat(l||He()),A="clip-".concat(l||He()),P={tag:"mask",attributes:_(_({},Dt),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,k]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:Ho(u)},P]};return r.push(O,{tag:"rect",attributes:_({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(w,")")},Dt)}),{children:r,attributes:a}}}},Yo={provides:function(t){var n=!1;ae.matchMedia&&(n=ae.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:_(_({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=_(_({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:_(_({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:_(_({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:_(_({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:_(_({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:_(_({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:_(_({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:_(_({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Bo={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Vo=[qi,To,Mo,Lo,Ro,zo,Wo,Uo,qo,Yo,Bo];io(Vo,{mixoutsTo:z});z.noAuto;z.config;z.library;z.dom;var rn=z.parse;z.findIconDefinition;z.toHtml;var Go=z.icon;z.layer;z.text;z.counter;var y={},Xo={get exports(){return y},set exports(e){y=e}},Ko="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Qo=Ko,Zo=Qo;function ha(){}function ba(){}ba.resetWarningCache=ha;var Jo=function(){function e(r,a,i,o,l,f){if(f!==Zo){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ba,resetWarningCache:ha};return n.PropTypes=n,n};Xo.exports=Jo();function ga(e,t){for(var n in t)e[n]=t[n];return e}function an(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function zt(e,t){return e===t&&(e!==0||1/e==1/t)||e!=e&&t!=t}function on(e){this.props=e}function es(e,t){function n(a){var i=this.props.ref,o=i==a.ref;return!o&&i&&(i.call?i(null):i.current=null),t?!t(this.props,a)||!o:an(this.props,a)}function r(a){return this.shouldComponentUpdate=n,X(e,a)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(on.prototype=new H).isPureReactComponent=!0,on.prototype.shouldComponentUpdate=function(e,t){return an(this.props,e)||an(this.state,t)};var cr=v.__b;v.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),cr&&cr(e)};var ts=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function ns(e){function t(n){var r=ga({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=ts,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var ur=function(e,t){return e==null?null:V(V(e).map(t))},rs={map:ur,forEach:ur,count:function(e){return e?V(e).length:0},only:function(e){var t=V(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:V},as=v.__e;v.__e=function(e,t,n,r){if(e.then){for(var a,i=t;i=i.__;)if((a=i.__c)&&a.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),a.__c(e,t)}as(e,t,n,r)};var mr=v.unmount;function ya(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=ga({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return ya(r,t,n)})),e}function wa(e,t,n){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return wa(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=n)),e}function _t(){this.__u=0,this.t=null,this.__b=null}function ka(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function is(e){var t,n,r;function a(i){if(t||(t=e()).then(function(o){n=o.default||o},function(o){r=o}),r)throw r;if(!n)throw t;return X(n,i)}return a.displayName="Lazy",a.__f=!0,a}function Ie(){this.u=null,this.o=null}v.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),mr&&mr(e)},(_t.prototype=new H).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var a=ka(r.__v),i=!1,o=function(){i||(i=!0,n.__R=null,a?a(l):l())};n.__R=o;var l=function(){if(!--r.__u){if(r.state.__a){var c=r.state.__a;r.__v.__k[0]=wa(c,c.__c.__P,c.__c.__O)}var s;for(r.setState({__a:r.__b=null});s=r.t.pop();)s.forceUpdate()}},f=t.__h===!0;r.__u++||f||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(o,o)},_t.prototype.componentWillUnmount=function(){this.t=[]},_t.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=ya(this.__b,n,r.__O=r.__P)}this.__b=null}var a=t.__a&&X(K,null,e.fallback);return a&&(a.__h=null),[X(K,null,t.__a?null:e.children),a]};var dr=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function os(e){return this.getChildContext=function(){return e.context},e.children}function ss(e){var t=this,n=e.i;t.componentWillUnmount=function(){ke(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),e.__v?(t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),t.i.appendChild(r)},insertBefore:function(r,a){this.childNodes.push(r),t.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.i.removeChild(r)}}),ke(X(os,{context:t.context},e.__v),t.l)):t.l&&t.componentWillUnmount()}function ls(e,t){var n=X(ss,{__v:e,i:t});return n.containerInfo=t,n}(Ie.prototype=new H).__a=function(e){var t=this,n=ka(t.__v),r=t.o.get(e);return r[0]++,function(a){var i=function(){t.props.revealOrder?(r.push(a),dr(t,e,r)):a()};n?n(i):i()}},Ie.prototype.render=function(e){this.u=null,this.o=new Map;var t=V(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},Ie.prototype.componentDidUpdate=Ie.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){dr(e,n,t)})};var xa=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,fs=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,cs=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,us=/[A-Z0-9]/g,ms=typeof document<"u",ds=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function _s(e,t,n){return t.__k==null&&(t.textContent=""),ke(e,t),typeof n=="function"&&n(),e?e.__c:null}function ps(e,t,n){return Fr(e,t),typeof n=="function"&&n(),e?e.__c:null}H.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(H.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var _r=v.event;function vs(){}function hs(){return this.cancelBubble}function bs(){return this.defaultPrevented}v.event=function(e){return _r&&(e=_r(e)),e.persist=vs,e.isPropagationStopped=hs,e.isDefaultPrevented=bs,e.nativeEvent=e};var Cn,pr={configurable:!0,get:function(){return this.class}},vr=v.vnode;v.vnode=function(e){var t=e.type,n=e.props,r=n;if(typeof t=="string"){for(var a in r={},n){var i=n[a];if(!(a==="value"&&"defaultValue"in n&&i==null||ms&&a==="children"&&t==="noscript")){var o=a.toLowerCase();a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&i===!0?i="":o==="ondoubleclick"?a="ondblclick":o!=="onchange"||t!=="input"&&t!=="textarea"||ds(n.type)?o==="onfocus"?a="onfocusin":o==="onblur"?a="onfocusout":cs.test(a)?a=o:t.indexOf("-")===-1&&fs.test(a)?a=a.replace(us,"-$&").toLowerCase():i===null&&(i=void 0):o=a="oninput",o==="oninput"&&r[a=o]&&(a="oninputCapture"),r[a]=i}}t=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=V(n.children).forEach(function(l){l.props.selected=r.value.indexOf(l.props.value)!=-1})),t=="select"&&r.defaultValue!=null&&(r.value=V(n.children).forEach(function(l){l.props.selected=r.multiple?r.defaultValue.indexOf(l.props.value)!=-1:r.defaultValue==l.props.value})),e.props=r,n.class!=n.className&&(pr.enumerable="className"in n,n.className!=null&&(r.class=n.className),Object.defineProperty(r,"className",pr))}e.$$typeof=xa,vr&&vr(e)};var hr=v.__r;v.__r=function(e){hr&&hr(e),Cn=e.__c};var br=v.diffed;v.diffed=function(e){br&&br(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value),Cn=null};var gs={ReactCurrentDispatcher:{current:{readContext:function(e){return Cn.__n[e.__c].props.value}}}};function ys(e){return X.bind(null,e)}function Aa(e){return!!e&&e.$$typeof===xa}function ws(e){return Aa(e)?Va.apply(null,arguments):e}function ks(e){return!!e.__k&&(ke(null,e),!0)}function xs(e){return e&&(e.base||e.nodeType===1&&e)||null}var As=function(e,t){return e(t)},Ss=function(e,t){return e(t)},Es=K;function Sa(e){e()}function Cs(e){return e}function Os(){return[!1,Sa]}var Ps=Ot;function Ns(e,t){var n=t(),r=D({h:{__:n,v:t}}),a=r[0].h,i=r[1];return Ot(function(){a.__=n,a.v=t,zt(a.__,t())||i({h:a})},[e,n,t]),ne(function(){return zt(a.__,a.v())||i({h:a}),e(function(){zt(a.__,a.v())||i({h:a})})},[e]),n}var Ea={useState:D,useId:si,useReducer:Ur,useEffect:ne,useLayoutEffect:Ot,useInsertionEffect:Ps,useTransition:Os,useDeferredValue:Cs,useSyncExternalStore:Ns,startTransition:Sa,useRef:ni,useImperativeHandle:ri,useMemo:Pt,useCallback:ai,useContext:ii,useDebugValue:oi,version:"17.0.2",Children:rs,render:_s,hydrate:ps,unmountComponentAtNode:ks,createPortal:ls,createElement:X,createContext:Ga,createFactory:ys,cloneElement:ws,createRef:Ha,Fragment:K,isValidElement:Aa,findDOMNode:xs,Component:H,PureComponent:on,memo:es,forwardRef:ns,flushSync:Ss,unstable_batchedUpdates:As,StrictMode:Es,Suspense:_t,SuspenseList:Ie,lazy:is,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:gs};function gr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gr(Object(n),!0).forEach(function(r){ye(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function xt(e){return xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xt(e)}function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Is(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Ts(e,t){if(e==null)return{};var n=Is(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function sn(e){return Ms(e)||Ls(e)||Rs(e)||js()}function Ms(e){if(Array.isArray(e))return ln(e)}function Ls(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Rs(e,t){if(e){if(typeof e=="string")return ln(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ln(e,t)}}function ln(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function js(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $s(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,l=e.flash,f=e.spin,c=e.spinPulse,s=e.spinReverse,m=e.pulse,u=e.fixedWidth,d=e.inverse,h=e.border,x=e.listItem,g=e.flip,k=e.size,w=e.rotation,A=e.pull,P=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":l,"fa-spin":f,"fa-spin-reverse":s,"fa-spin-pulse":c,"fa-pulse":m,"fa-fw":u,"fa-inverse":d,"fa-border":h,"fa-li":x,"fa-flip":g===!0,"fa-flip-horizontal":g==="horizontal"||g==="both","fa-flip-vertical":g==="vertical"||g==="both"},ye(t,"fa-".concat(k),typeof k<"u"&&k!==null),ye(t,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),ye(t,"fa-pull-".concat(A),typeof A<"u"&&A!==null),ye(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(P).map(function(O){return P[O]?O:null}).filter(function(O){return O})}function Fs(e){return e=e-0,e===e}function Ca(e){return Fs(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Ds=["style"];function zs(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Ws(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Ca(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[zs(a)]=i:t[a]=i,t},{})}function Oa(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(f){return Oa(e,f)}),a=Object.keys(t.attributes||{}).reduce(function(f,c){var s=t.attributes[c];switch(c){case"class":f.attrs.className=s,delete t.attributes.class;break;case"style":f.attrs.style=Ws(s);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?f.attrs[c.toLowerCase()]=s:f.attrs[Ca(c)]=s}return f},{attrs:{}}),i=n.style,o=i===void 0?{}:i,l=Ts(n,Ds);return a.attrs.style=re(re({},a.attrs.style),o),e.apply(void 0,[t.tag,re(re({},a.attrs),l)].concat(sn(r)))}var Pa=!1;try{Pa=!0}catch{}function Us(){if(!Pa&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function yr(e){if(e&&xt(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(rn.icon)return rn.icon(e);if(e===null)return null;if(e&&xt(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Wt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ye({},e,t):{}}var Ge=Ea.forwardRef(function(e,t){var n=e.icon,r=e.mask,a=e.symbol,i=e.className,o=e.title,l=e.titleId,f=e.maskId,c=yr(n),s=Wt("classes",[].concat(sn($s(e)),sn(i.split(" ")))),m=Wt("transform",typeof e.transform=="string"?rn.transform(e.transform):e.transform),u=Wt("mask",yr(r)),d=Go(c,re(re(re(re({},s),m),u),{},{symbol:a,title:o,titleId:l,maskId:f}));if(!d)return Us("Could not find icon",c),null;var h=d.abstract,x={ref:t};return Object.keys(e).forEach(function(g){Ge.defaultProps.hasOwnProperty(g)||(x[g]=e[g])}),Hs(h[0],x)});Ge.displayName="FontAwesomeIcon";Ge.propTypes={beat:y.bool,border:y.bool,beatFade:y.bool,bounce:y.bool,className:y.string,fade:y.bool,flash:y.bool,mask:y.oneOfType([y.object,y.array,y.string]),maskId:y.string,fixedWidth:y.bool,inverse:y.bool,flip:y.oneOf([!0,!1,"horizontal","vertical","both"]),icon:y.oneOfType([y.object,y.array,y.string]),listItem:y.bool,pull:y.oneOf(["right","left"]),pulse:y.bool,rotation:y.oneOf([0,90,180,270]),shake:y.bool,size:y.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:y.bool,spinPulse:y.bool,spinReverse:y.bool,symbol:y.oneOfType([y.bool,y.string]),title:y.string,titleId:y.string,transform:y.oneOfType([y.string,y.object]),swapOpacity:y.bool};Ge.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Hs=Oa.bind(null,Ea.createElement);const qs="_square_1jrqy_1",Ys="_squareFilled_1jrqy_106",Bs="_squareMoveable_1jrqy_110",Vs="_blink_1jrqy_1",Gs="_squareIndex_1jrqy_133",Xs="_piece_1jrqy_142",Ks="_pieceBlack_1jrqy_143",Qs="_squareSelected_1jrqy_155",Zs="_pieceKingIcon_1jrqy_166",q={square:qs,squareFilled:Ys,squareMoveable:Bs,blink:Vs,squareIndex:Gs,piece:Xs,pieceBlack:Ks,squareSelected:Qs,pieceKingIcon:Zs};var Js=0;function I(e,t,n,r,a,i){var o,l,f={};for(l in t)l=="ref"?o=t[l]:f[l]=t[l];var c={type:e,props:f,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Js,__source:a,__self:i};if(typeof e=="function"&&(o=e.defaultProps))for(l in o)f[l]===void 0&&(f[l]=o[l]);return v.vnode&&v.vnode(c),c}const wr=!1;function el({piece:e,index:t,selected:n,selectedMoves:r,onMove:a,onSelect:i,onClearSelect:o}){if(e.color===F.Empty){const c=r.find(u=>u.end_square===t),s=[q.square,c?q.squareMoveable:""].join(" ");return I("div",{className:s,onClick:()=>{c?a(c):o()},children:wr})}const l=[q.square,q.squareFilled,n?q.squareSelected:""].join(" "),f=[q.piece,e.color===F.Black?q.pieceBlack:"",e.is_king?q.pieceKing:""].join(" ");return I("div",{className:l,onClick:()=>i(t),children:[I("div",{className:f,children:e.is_king&&I(Ge,{className:q.pieceKingIcon,icon:_i})}),wr]})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Na=Symbol("Comlink.proxy"),tl=Symbol("Comlink.endpoint"),nl=Symbol("Comlink.releaseProxy"),Ut=Symbol("Comlink.finalizer"),pt=Symbol("Comlink.thrown"),Ia=e=>typeof e=="object"&&e!==null||typeof e=="function",rl={canHandle:e=>Ia(e)&&e[Na],serialize(e){const{port1:t,port2:n}=new MessageChannel;return Ma(e,t),[n,[n]]},deserialize(e){return e.start(),Ra(e)}},al={canHandle:e=>Ia(e)&&pt in e,serialize({value:e}){let t;return e instanceof Error?t={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:t={isError:!1,value:e},[t,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}},Ta=new Map([["proxy",rl],["throw",al]]);function il(e,t){for(const n of e)if(t===n||n==="*"||n instanceof RegExp&&n.test(t))return!0;return!1}function Ma(e,t=globalThis,n=["*"]){t.addEventListener("message",function r(a){if(!a||!a.data)return;if(!il(n,a.origin)){console.warn(`Invalid origin '${a.origin}' for comlink proxy`);return}const{id:i,type:o,path:l}=Object.assign({path:[]},a.data),f=(a.data.argumentList||[]).map(fe);let c;try{const s=l.slice(0,-1).reduce((u,d)=>u[d],e),m=l.reduce((u,d)=>u[d],e);switch(o){case"GET":c=m;break;case"SET":s[l.slice(-1)[0]]=fe(a.data.value),c=!0;break;case"APPLY":c=m.apply(s,f);break;case"CONSTRUCT":{const u=new m(...f);c=ul(u)}break;case"ENDPOINT":{const{port1:u,port2:d}=new MessageChannel;Ma(e,d),c=cl(u,[u])}break;case"RELEASE":c=void 0;break;default:return}}catch(s){c={value:s,[pt]:0}}Promise.resolve(c).catch(s=>({value:s,[pt]:0})).then(s=>{const[m,u]=Et(s);t.postMessage(Object.assign(Object.assign({},m),{id:i}),u),o==="RELEASE"&&(t.removeEventListener("message",r),La(t),Ut in e&&typeof e[Ut]=="function"&&e[Ut]())}).catch(s=>{const[m,u]=Et({value:new TypeError("Unserializable return value"),[pt]:0});t.postMessage(Object.assign(Object.assign({},m),{id:i}),u)})}),t.start&&t.start()}function ol(e){return e.constructor.name==="MessagePort"}function La(e){ol(e)&&e.close()}function Ra(e,t){return fn(e,[],t)}function ot(e){if(e)throw new Error("Proxy has been released and is not useable")}function ja(e){return he(e,{type:"RELEASE"}).then(()=>{La(e)})}const At=new WeakMap,St="FinalizationRegistry"in globalThis&&new FinalizationRegistry(e=>{const t=(At.get(e)||0)-1;At.set(e,t),t===0&&ja(e)});function sl(e,t){const n=(At.get(t)||0)+1;At.set(t,n),St&&St.register(e,t,e)}function ll(e){St&&St.unregister(e)}function fn(e,t=[],n=function(){}){let r=!1;const a=new Proxy(n,{get(i,o){if(ot(r),o===nl)return()=>{ll(a),ja(e),r=!0};if(o==="then"){if(t.length===0)return{then:()=>a};const l=he(e,{type:"GET",path:t.map(f=>f.toString())}).then(fe);return l.then.bind(l)}return fn(e,[...t,o])},set(i,o,l){ot(r);const[f,c]=Et(l);return he(e,{type:"SET",path:[...t,o].map(s=>s.toString()),value:f},c).then(fe)},apply(i,o,l){ot(r);const f=t[t.length-1];if(f===tl)return he(e,{type:"ENDPOINT"}).then(fe);if(f==="bind")return fn(e,t.slice(0,-1));const[c,s]=kr(l);return he(e,{type:"APPLY",path:t.map(m=>m.toString()),argumentList:c},s).then(fe)},construct(i,o){ot(r);const[l,f]=kr(o);return he(e,{type:"CONSTRUCT",path:t.map(c=>c.toString()),argumentList:l},f).then(fe)}});return sl(a,e),a}function fl(e){return Array.prototype.concat.apply([],e)}function kr(e){const t=e.map(Et);return[t.map(n=>n[0]),fl(t.map(n=>n[1]))]}const $a=new WeakMap;function cl(e,t){return $a.set(e,t),e}function ul(e){return Object.assign(e,{[Na]:!0})}function Et(e){for(const[t,n]of Ta)if(n.canHandle(e)){const[r,a]=n.serialize(e);return[{type:"HANDLER",name:t,value:r},a]}return[{type:"RAW",value:e},$a.get(e)||[]]}function fe(e){switch(e.type){case"HANDLER":return Ta.get(e.name).deserialize(e.value);case"RAW":return e.value}}function he(e,t,n){return new Promise(r=>{const a=ml();e.addEventListener("message",function i(o){!o.data||!o.data.id||o.data.id!==a||(e.removeEventListener("message",i),r(o.data))}),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),n)})}function ml(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}const Fa=Ra(new Worker(new URL("/assets/wasm-checkers-df9e96f4.js",self.location),{type:"module"}));function dl({gameSettings:e,onGameEnd:t}){const{playerColor:n,gameStarted:r}=e,a=n===F.White?F.Black:F.White,i=Pt(()=>new G,[]),[o,l]=D(0),[f,c]=D(0),[s,m]=D([]),[u,d]=D([]),[h,x]=D([]),[g,k]=D(-1);ne(()=>{A()},[]),ne(()=>{if(!r){A();return}if(n===F.White){P();return}T()},[e.gameStarted]),ne(()=>{d(w())},[e.playerColor]),ne(()=>{l(Qa.get_heuristic_value(i))},[f]),ne(()=>{x(s.filter(L=>L.start_square===g))},[s,g]);const w=()=>{const L=Array.from(i.get_pieces());return n===F.White?L.reverse():L},A=()=>{i.init_default_state(),d(w())},P=()=>{m(Za.generate_all_moves_js(i,n))},O=()=>{if(!i.is_game_over())return!1;const L=o===0,se=o>0?F.White:F.Black;return t({tie:L,winner:se,totalMoves:f}),!0},j=()=>{x([]),k(-1)},$=L=>{k(L)},T=async()=>{var ve;const L=[],se=[];m([]),x([]);do{const Xe=me.from_json(await Fa.getBestMove(i.to_json(),a,e.computerDepth));i.update_from_move(Xe),L.push(Xe),se.push(w())}while((ve=L.at(-1))!=null&&ve.can_capture_again);await Promise.all(se.map((Xe,za)=>new Promise(Wa=>setTimeout(()=>{d(Xe),c(f+1),Wa()},250*(za+1))))),!O()&&P()},R=async L=>{if(i.update_from_move(L),d(w()),c(f+1),k(-1),!O()){if(!L.can_capture_again){T();return}P(),k(L.end_square)}},Lt=u.map((L,se)=>{const ve=n===F.White?63-se:se;return I(K,{children:I(el,{piece:L,index:ve,selectedMoves:h,selected:g===ve,onMove:R,onSelect:$,onClearSelect:j},ve)})});return I("div",{className:di.board,children:Lt})}const _l="_overlay_152z0_1",pl="_overlayCard_152z0_11",xr={overlay:_l,overlayCard:pl};function Da({children:e}){return I("div",{className:xr.overlay,children:I("div",{className:xr.overlayCard,children:e})})}function vl({onGameStart:e,onPlayerColorSelect:t}){const[n,r]=D(F.White),[a,i]=D(5),o=()=>{e({playerColor:n,computerDepth:a,gameStarted:!0})},l=f=>{r(f),t(f)};return I(Da,{children:[I("button",{onClick:()=>l(F.White),children:"white"}),I("button",{onClick:()=>l(F.Black),children:"black"}),I("input",{type:"range",min:1,max:9,value:a,onChange:({target:f})=>{i(parseInt((f==null?void 0:f.value)||5))}}),I("div",{children:a}),I("button",{onClick:o,children:"start game"})]})}const Ar={playerColor:F.White,computerDepth:5,gameStarted:!1};function hl(){const[e,t]=D(!1),[n,r]=D(Ar),[a,i]=D(null);ne(()=>{zr().then(async()=>{await Fa.initWasm(),t(!0)})},[]);const o=()=>{i(null),r(Ar)},l=s=>{r(Object.assign({},n,{playerColor:s}))},f=s=>{r(s)},c=s=>{i(s)};return e?I("main",{className:ui.main,children:[I(dl,{gameSettings:n,onGameEnd:c}),!n.gameStarted&&I(vl,{onGameStart:f,onPlayerColorSelect:l}),a&&I(Da,{children:[I("h1",{children:a.winner===n.playerColor?"You won!":"You lost..."}),I("button",{onClick:o,children:"New game"})]})]}):null}const bl=document.getElementById("root");ke(I(hl,{}),bl);
