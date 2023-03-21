(async()=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();var It,b,Un,ht,Fn,Wn,We,Yn,ie={},qn=[],oi=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function X(t,e){for(var n in e)t[n]=e[n];return t}function Vn(t){var e=t.parentNode;e&&e.removeChild(t)}function Z(t,e,n){var r,a,i,o={};for(i in e)i=="key"?r=e[i]:i=="ref"?a=e[i]:o[i]=e[i];if(arguments.length>2&&(o.children=arguments.length>3?It.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)o[i]===void 0&&(o[i]=t.defaultProps[i]);return Lt(t,o,r,a,null)}function Lt(t,e,n,r,a){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:a??++Un};return a==null&&b.vnode!=null&&b.vnode(i),i}function si(){return{current:null}}function J(t){return t.children}function G(t,e){this.props=t,this.context=e}function zt(t,e){if(e==null)return t.__?zt(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?zt(t):null}function Gn(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Gn(t)}}function Ye(t){(!t.__d&&(t.__d=!0)&&ht.push(t)&&!oe.__r++||Fn!==b.debounceRendering)&&((Fn=b.debounceRendering)||Wn)(oe)}function oe(){var t,e,n,r,a,i,o,c;for(ht.sort(We);t=ht.shift();)t.__d&&(e=ht.length,r=void 0,a=void 0,o=(i=(n=t).__v).__e,(c=n.__P)&&(r=[],(a=X({},i)).__v=i.__v+1,qe(c,i,a,n.__n,c.ownerSVGElement!==void 0,i.__h!=null?[o]:null,r,o??zt(i),i.__h),er(r,i),i.__e!=o&&Gn(i)),ht.length>e&&ht.sort(We));oe.__r=0}function Kn(t,e,n,r,a,i,o,c,l,u){var s,_,f,m,y,A,w,x=r&&r.__k||qn,C=x.length;for(n.__k=[],s=0;s<e.length;s++)if((m=n.__k[s]=(m=e[s])==null||typeof m=="boolean"||typeof m=="function"?null:typeof m=="string"||typeof m=="number"||typeof m=="bigint"?Lt(null,m,null,null,m):Array.isArray(m)?Lt(J,{children:m},null,null,null):m.__b>0?Lt(m.type,m.props,m.key,m.ref?m.ref:null,m.__v):m)!=null){if(m.__=n,m.__b=n.__b+1,(f=x[s])===null||f&&m.key==f.key&&m.type===f.type)x[s]=void 0;else for(_=0;_<C;_++){if((f=x[_])&&m.key==f.key&&m.type===f.type){x[_]=void 0;break}f=null}qe(t,m,f=f||ie,a,i,o,c,l,u),y=m.__e,(_=m.ref)&&f.ref!=_&&(w||(w=[]),f.ref&&w.push(f.ref,null,m),w.push(_,m.__c||y,m)),y!=null?(A==null&&(A=y),typeof m.type=="function"&&m.__k===f.__k?m.__d=l=$n(m,l,t):l=Xn(t,m,f,x,y,l),typeof n.type=="function"&&(n.__d=l)):l&&f.__e==l&&l.parentNode!=t&&(l=zt(f))}for(n.__e=A,s=C;s--;)x[s]!=null&&(typeof n.type=="function"&&x[s].__e!=null&&x[s].__e==n.__d&&(n.__d=Zn(r).nextSibling),rr(x[s],x[s]));if(w)for(s=0;s<w.length;s++)nr(w[s],w[++s],w[++s])}function $n(t,e,n){for(var r,a=t.__k,i=0;a&&i<a.length;i++)(r=a[i])&&(r.__=t,e=typeof r.type=="function"?$n(r,e,n):Xn(n,r,r,a,r.__e,e));return e}function Q(t,e){return e=e||[],t==null||typeof t=="boolean"||(Array.isArray(t)?t.some(function(n){Q(n,e)}):e.push(t)),e}function Xn(t,e,n,r,a,i){var o,c,l;if(e.__d!==void 0)o=e.__d,e.__d=void 0;else if(n==null||a!=i||a.parentNode==null)t:if(i==null||i.parentNode!==t)t.appendChild(a),o=null;else{for(c=i,l=0;(c=c.nextSibling)&&l<r.length;l+=1)if(c==a)break t;t.insertBefore(a,i),o=i}return o!==void 0?o:a.nextSibling}function Zn(t){var e,n,r;if(t.type==null||typeof t.type=="string")return t.__e;if(t.__k){for(e=t.__k.length-1;e>=0;e--)if((n=t.__k[e])&&(r=Zn(n)))return r}return null}function ci(t,e,n,r,a){var i;for(i in n)i==="children"||i==="key"||i in e||se(t,i,null,n[i],r);for(i in e)a&&typeof e[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||n[i]===e[i]||se(t,i,e[i],n[i],r)}function Jn(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||oi.test(e)?n:n+"px"}function se(t,e,n,r,a){var i;t:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||Jn(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||Jn(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r||t.addEventListener(e,i?tr:Qn,i):t.removeEventListener(e,i?tr:Qn,i);else if(e!=="dangerouslySetInnerHTML"){if(a)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n??"";break t}catch{}typeof n=="function"||(n==null||n===!1&&e.indexOf("-")==-1?t.removeAttribute(e):t.setAttribute(e,n))}}function Qn(t){return this.l[t.type+!1](b.event?b.event(t):t)}function tr(t){return this.l[t.type+!0](b.event?b.event(t):t)}function qe(t,e,n,r,a,i,o,c,l){var u,s,_,f,m,y,A,w,x,C,j,D,R,B,W,N=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,c=e.__e=n.__e,e.__h=null,i=[c]),(u=b.__b)&&u(e);try{t:if(typeof N=="function"){if(w=e.props,x=(u=N.contextType)&&r[u.__c],C=u?x?x.props.value:u.__:r,n.__c?A=(s=e.__c=n.__c).__=s.__E:("prototype"in N&&N.prototype.render?e.__c=s=new N(w,C):(e.__c=s=new G(w,C),s.constructor=N,s.render=ui),x&&x.sub(s),s.props=w,s.state||(s.state={}),s.context=C,s.__n=r,_=s.__d=!0,s.__h=[],s._sb=[]),s.__s==null&&(s.__s=s.state),N.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=X({},s.__s)),X(s.__s,N.getDerivedStateFromProps(w,s.__s))),f=s.props,m=s.state,s.__v=e,_)N.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(N.getDerivedStateFromProps==null&&w!==f&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(w,C),!s.__e&&s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(w,s.__s,C)===!1||e.__v===n.__v){for(e.__v!==n.__v&&(s.props=w,s.state=s.__s,s.__d=!1),s.__e=!1,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(z){z&&(z.__=e)}),j=0;j<s._sb.length;j++)s.__h.push(s._sb[j]);s._sb=[],s.__h.length&&o.push(s);break t}s.componentWillUpdate!=null&&s.componentWillUpdate(w,s.__s,C),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(f,m,y)})}if(s.context=C,s.props=w,s.__P=t,D=b.__r,R=0,"prototype"in N&&N.prototype.render){for(s.state=s.__s,s.__d=!1,D&&D(e),u=s.render(s.props,s.state,s.context),B=0;B<s._sb.length;B++)s.__h.push(s._sb[B]);s._sb=[]}else do s.__d=!1,D&&D(e),u=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++R<25);s.state=s.__s,s.getChildContext!=null&&(r=X(X({},r),s.getChildContext())),_||s.getSnapshotBeforeUpdate==null||(y=s.getSnapshotBeforeUpdate(f,m)),W=u!=null&&u.type===J&&u.key==null?u.props.children:u,Kn(t,Array.isArray(W)?W:[W],e,n,r,a,i,o,c,l),s.base=e.__e,e.__h=null,s.__h.length&&o.push(s),A&&(s.__E=s.__=null),s.__e=!1}else i==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=li(n.__e,e,n,r,a,i,o,l);(u=b.diffed)&&u(e)}catch(z){e.__v=null,(l||i!=null)&&(e.__e=c,e.__h=!!l,i[i.indexOf(c)]=null),b.__e(z,e,n)}}function er(t,e){b.__c&&b.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(r){r.call(n)})}catch(r){b.__e(r,n.__v)}})}function li(t,e,n,r,a,i,o,c){var l,u,s,_=n.props,f=e.props,m=e.type,y=0;if(m==="svg"&&(a=!0),i!=null){for(;y<i.length;y++)if((l=i[y])&&"setAttribute"in l==!!m&&(m?l.localName===m:l.nodeType===3)){t=l,i[y]=null;break}}if(t==null){if(m===null)return document.createTextNode(f);t=a?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,f.is&&f),i=null,c=!1}if(m===null)_===f||c&&t.data===f||(t.data=f);else{if(i=i&&It.call(t.childNodes),u=(_=n.props||ie).dangerouslySetInnerHTML,s=f.dangerouslySetInnerHTML,!c){if(i!=null)for(_={},y=0;y<t.attributes.length;y++)_[t.attributes[y].name]=t.attributes[y].value;(s||u)&&(s&&(u&&s.__html==u.__html||s.__html===t.innerHTML)||(t.innerHTML=s&&s.__html||""))}if(ci(t,f,_,a,c),s)e.__k=[];else if(y=e.props.children,Kn(t,Array.isArray(y)?y:[y],e,n,r,a&&m!=="foreignObject",i,o,i?i[0]:n.__k&&zt(n,0),c),i!=null)for(y=i.length;y--;)i[y]!=null&&Vn(i[y]);c||("value"in f&&(y=f.value)!==void 0&&(y!==t.value||m==="progress"&&!y||m==="option"&&y!==_.value)&&se(t,"value",y,_.value,!1),"checked"in f&&(y=f.checked)!==void 0&&y!==t.checked&&se(t,"checked",y,_.checked,!1))}return t}function nr(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){b.__e(r,n)}}function rr(t,e,n){var r,a;if(b.unmount&&b.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||nr(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){b.__e(i,e)}r.base=r.__P=null,t.__c=void 0}if(r=t.__k)for(a=0;a<r.length;a++)r[a]&&rr(r[a],e,n||typeof t.type!="function");n||t.__e==null||Vn(t.__e),t.__=t.__e=t.__d=void 0}function ui(t,e,n){return this.constructor(t,n)}function Ct(t,e,n){var r,a,i;b.__&&b.__(t,e),a=(r=typeof n=="function")?null:n&&n.__k||e.__k,i=[],qe(e,t=(!r&&n||e).__k=Z(J,null,[t]),a||ie,ie,e.ownerSVGElement!==void 0,!r&&n?[n]:a?null:e.firstChild?It.call(e.childNodes):null,i,!r&&n?n:a?a.__e:e.firstChild,r),er(i,t)}function ar(t,e){Ct(t,e,ar)}function fi(t,e,n){var r,a,i,o=X({},t.props);for(i in e)i=="key"?r=e[i]:i=="ref"?a=e[i]:o[i]=e[i];return arguments.length>2&&(o.children=arguments.length>3?It.call(arguments,2):n),Lt(t.type,o,r||t.key,a||t.ref,null)}function Ve(t,e){var n={__c:e="__cC"+Yn++,__:t,Consumer:function(r,a){return r.children(a)},Provider:function(r){var a,i;return this.getChildContext||(a=[],(i={})[e]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&a.some(function(c){c.__e=!0,Ye(c)})},this.sub=function(o){a.push(o);var c=o.componentWillUnmount;o.componentWillUnmount=function(){a.splice(a.indexOf(o),1),c&&c.call(o)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}It=qn.slice,b={__e:function(t,e,n,r){for(var a,i,o;e=e.__;)if((a=e.__c)&&!a.__)try{if((i=a.constructor)&&i.getDerivedStateFromError!=null&&(a.setState(i.getDerivedStateFromError(t)),o=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(t,r||{}),o=a.__d),o)return a.__E=a}catch(c){t=c}throw t}},Un=0,G.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=X({},this.state),typeof t=="function"&&(t=t(X({},n),this.props)),t&&X(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),Ye(this))},G.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Ye(this))},G.prototype.render=J,ht=[],Wn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,We=function(t,e){return t.__v.__b-e.__v.__b},oe.__r=0,Yn=0;let v;const tt=new Array(128).fill(void 0);tt.push(void 0,null,!0,!1);function S(t){return tt[t]}let Bt=tt.length;function _i(t){t<132||(tt[t]=Bt,Bt=t)}function ce(t){const e=S(t);return _i(t),e}const ir=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});ir.decode();let Ht=null;function le(){return(Ht===null||Ht.byteLength===0)&&(Ht=new Uint8Array(v.memory.buffer)),Ht}function Ut(t,e){return ir.decode(le().subarray(t,t+e))}function L(t){Bt===tt.length&&tt.push(tt.length+1);const e=Bt;return Bt=tt[e],tt[e]=t,e}let bt=0;const ue=new TextEncoder("utf-8"),mi=typeof ue.encodeInto=="function"?function(t,e){return ue.encodeInto(t,e)}:function(t,e){const n=ue.encode(t);return e.set(n),{read:t.length,written:n.length}};function Ft(t,e,n){if(n===void 0){const c=ue.encode(t),l=e(c.length);return le().subarray(l,l+c.length).set(c),bt=c.length,l}let r=t.length,a=e(r);const i=le();let o=0;for(;o<r;o++){const c=t.charCodeAt(o);if(c>127)break;i[a+o]=c}if(o!==r){o!==0&&(t=t.slice(o)),a=n(a,r,r=o+t.length*3);const c=le().subarray(a+o,a+r),l=mi(t,c);o+=l.written}return bt=o,a}function Wt(t){return t==null}let Yt=null;function Y(){return(Yt===null||Yt.byteLength===0)&&(Yt=new Int32Array(v.memory.buffer)),Yt}let qt=null;function di(){return(qt===null||qt.byteLength===0)&&(qt=new Float64Array(v.memory.buffer)),qt}function Ge(t){const e=typeof t;if(e=="number"||e=="boolean"||t==null)return`${t}`;if(e=="string")return`"${t}"`;if(e=="symbol"){const a=t.description;return a==null?"Symbol":`Symbol(${a})`}if(e=="function"){const a=t.name;return typeof a=="string"&&a.length>0?`Function(${a})`:"Function"}if(Array.isArray(t)){const a=t.length;let i="[";a>0&&(i+=Ge(t[0]));for(let o=1;o<a;o++)i+=", "+Ge(t[o]);return i+="]",i}const n=/\[object ([^\]]+)\]/.exec(toString.call(t));let r;if(n.length>1)r=n[1];else return toString.call(t);if(r=="Object")try{return"Object("+JSON.stringify(t)+")"}catch{return"Object"}return t instanceof Error?`${t.name}: ${t.message}
${t.stack}`:r}function ct(t,e){if(!(t instanceof e))throw new Error(`expected instance of ${e.name}`);return t.ptr}function Ke(t,e){try{return t.apply(this,e)}catch(n){v.__wbindgen_exn_store(L(n))}}const F=Object.freeze({Default:0,0:"Default",ForcedCapture:1,1:"ForcedCapture",FlyingKings:2,2:"FlyingKings",RegularCaptureBackwards:4,4:"RegularCaptureBackwards",PromotionMoveTermination:8,8:"PromotionMoveTermination"}),pi=Object.freeze({EnglishVariation:0,0:"EnglishVariation",RussianVariation:1,1:"RussianVariation"}),M=Object.freeze({Empty:0,0:"Empty",White:1,1:"White",Black:2,2:"Black"});class lt{static __wrap(e){const n=Object.create(lt.prototype);return n.ptr=e,n}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();v.__wbg_board_free(e)}constructor(){const e=v.board_new();return lt.__wrap(e)}static from_json(e){const n=Ft(e,v.__wbindgen_malloc,v.__wbindgen_realloc),r=bt,a=v.board_from_json(n,r);return lt.__wrap(a)}to_json(){try{const r=v.__wbindgen_add_to_stack_pointer(-16);v.board_to_json(r,this.ptr);var e=Y()[r/4+0],n=Y()[r/4+1];return Ut(e,n)}finally{v.__wbindgen_add_to_stack_pointer(16),v.__wbindgen_free(e,n)}}init_default_state(){v.board_init_default_state(this.ptr)}get_pieces(){const e=v.board_get_pieces(this.ptr);return ce(e)}handle_move(e){ct(e,ut),v.board_handle_move(this.ptr,e.ptr)}is_game_over(e){return v.board_is_game_over(this.ptr,e)!==0}}class gi{__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();v.__wbg_checkersai_free(e)}static get_heuristic_value_js(e,n){return ct(e,lt),v.checkersai_get_heuristic_value_js(e.ptr,n)}static get_best_move_alphabeta(e,n,r,a,i){ct(e,lt);let o=0;Wt(i)||(ct(i,ut),o=i.__destroy_into_raw());const c=v.checkersai_get_best_move_alphabeta(e.ptr,n,r,a,o);return c===0?void 0:ut.__wrap(c)}}class vi{__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();v.__wbg_checkerssettings_free(e)}static combine_js(e){return v.checkerssettings_combine_js(L(e))}static from_preset(e){return v.checkerssettings_from_preset(e)}}class ut{static __wrap(e){const n=Object.create(ut.prototype);return n.ptr=e,n}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();v.__wbg_move_free(e)}get start_square(){return v.__wbg_get_move_start_square(this.ptr)}set start_square(e){v.__wbg_set_move_start_square(this.ptr,e)}get end_square(){return v.__wbg_get_move_end_square(this.ptr)}set end_square(e){v.__wbg_set_move_end_square(this.ptr,e)}get captured_piece(){const e=v.__wbg_get_move_captured_piece(this.ptr);return e===0?void 0:et.__wrap(e)}set captured_piece(e){let n=0;Wt(e)||(ct(e,et),n=e.__destroy_into_raw()),v.__wbg_set_move_captured_piece(this.ptr,n)}get moved_piece(){const e=v.__wbg_get_move_moved_piece(this.ptr);return et.__wrap(e)}set moved_piece(e){ct(e,et);var n=e.__destroy_into_raw();v.__wbg_set_move_moved_piece(this.ptr,n)}get moved_piece_after_move(){const e=v.__wbg_get_move_moved_piece_after_move(this.ptr);return et.__wrap(e)}set moved_piece_after_move(e){ct(e,et);var n=e.__destroy_into_raw();v.__wbg_set_move_moved_piece_after_move(this.ptr,n)}static from_json(e){const n=Ft(e,v.__wbindgen_malloc,v.__wbindgen_realloc),r=bt,a=v.move_from_json(n,r);return ut.__wrap(a)}to_json(){try{const r=v.__wbindgen_add_to_stack_pointer(-16);v.move_to_json(r,this.ptr);var e=Y()[r/4+0],n=Y()[r/4+1];return Ut(e,n)}finally{v.__wbindgen_add_to_stack_pointer(16),v.__wbindgen_free(e,n)}}get_forced_moves_js(){const e=v.move_get_forced_moves_js(this.ptr);return ce(e)}}class or{__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();v.__wbg_movegenerator_free(e)}static get_valid_moves_js(e,n,r){ct(e,lt);const a=v.movegenerator_get_valid_moves_js(e.ptr,n,r);return ce(a)}}class et{static __wrap(e){const n=Object.create(et.prototype);return n.ptr=e,n}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();v.__wbg_piece_free(e)}get color(){return v.__wbg_get_piece_color(this.ptr)>>>0}set color(e){v.__wbg_set_piece_color(this.ptr,e)}get king(){return v.__wbg_get_piece_king(this.ptr)!==0}set king(e){v.__wbg_set_piece_king(this.ptr,e)}}async function hi(t,e){if(typeof Response=="function"&&t instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(t,e)}catch(r){if(t.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const n=await t.arrayBuffer();return await WebAssembly.instantiate(n,e)}else{const n=await WebAssembly.instantiate(t,e);return n instanceof WebAssembly.Instance?{instance:n,module:t}:n}}function bi(){const t={};return t.wbg={},t.wbg.__wbg_piece_new=function(e){const n=et.__wrap(e);return L(n)},t.wbg.__wbindgen_object_drop_ref=function(e){ce(e)},t.wbg.__wbg_move_new=function(e){const n=ut.__wrap(e);return L(n)},t.wbg.__wbindgen_error_new=function(e,n){const r=new Error(Ut(e,n));return L(r)},t.wbg.__wbindgen_string_get=function(e,n){const r=S(n),a=typeof r=="string"?r:void 0;var i=Wt(a)?0:Ft(a,v.__wbindgen_malloc,v.__wbindgen_realloc),o=bt;Y()[e/4+1]=o,Y()[e/4+0]=i},t.wbg.__wbindgen_is_string=function(e){return typeof S(e)=="string"},t.wbg.__wbg_new_abda76e883ba8a5f=function(){const e=new Error;return L(e)},t.wbg.__wbg_stack_658279fe44541cf6=function(e,n){const r=S(n).stack,a=Ft(r,v.__wbindgen_malloc,v.__wbindgen_realloc),i=bt;Y()[e/4+1]=i,Y()[e/4+0]=a},t.wbg.__wbg_error_f851667af71bcfc6=function(e,n){try{console.error(Ut(e,n))}finally{v.__wbindgen_free(e,n)}},t.wbg.__wbindgen_is_object=function(e){const n=S(e);return typeof n=="object"&&n!==null},t.wbg.__wbindgen_jsval_loose_eq=function(e,n){return S(e)==S(n)},t.wbg.__wbindgen_boolean_get=function(e){const n=S(e);return typeof n=="boolean"?n?1:0:2},t.wbg.__wbindgen_number_get=function(e,n){const r=S(n),a=typeof r=="number"?r:void 0;di()[e/8+1]=Wt(a)?0:a,Y()[e/4+0]=!Wt(a)},t.wbg.__wbg_get_27fe3dac1c4d0224=function(e,n){const r=S(e)[n>>>0];return L(r)},t.wbg.__wbg_length_e498fbc24f9c1d4f=function(e){return S(e).length},t.wbg.__wbg_new_b525de17f44a8943=function(){const e=new Array;return L(e)},t.wbg.__wbindgen_is_function=function(e){return typeof S(e)=="function"},t.wbg.__wbg_next_b7d530c04fd8b217=function(e){const n=S(e).next;return L(n)},t.wbg.__wbg_next_88560ec06a094dea=function(){return Ke(function(e){const n=S(e).next();return L(n)},arguments)},t.wbg.__wbg_done_1ebec03bbd919843=function(e){return S(e).done},t.wbg.__wbg_value_6ac8da5cc5b3efda=function(e){const n=S(e).value;return L(n)},t.wbg.__wbg_iterator_55f114446221aa5a=function(){return L(Symbol.iterator)},t.wbg.__wbg_get_baf4855f9a986186=function(){return Ke(function(e,n){const r=Reflect.get(S(e),S(n));return L(r)},arguments)},t.wbg.__wbg_call_95d1ea488d03e4e8=function(){return Ke(function(e,n){const r=S(e).call(S(n));return L(r)},arguments)},t.wbg.__wbg_isArray_39d28997bf6b96b4=function(e){return Array.isArray(S(e))},t.wbg.__wbg_push_49c286f04dd3bf59=function(e,n){return S(e).push(S(n))},t.wbg.__wbg_instanceof_ArrayBuffer_a69f02ee4c4f5065=function(e){let n;try{n=S(e)instanceof ArrayBuffer}catch{n=!1}return n},t.wbg.__wbg_entries_4e1315b774245952=function(e){const n=Object.entries(S(e));return L(n)},t.wbg.__wbg_buffer_cf65c07de34b9a08=function(e){const n=S(e).buffer;return L(n)},t.wbg.__wbg_new_537b7341ce90bb31=function(e){const n=new Uint8Array(S(e));return L(n)},t.wbg.__wbg_set_17499e8aa4003ebd=function(e,n,r){S(e).set(S(n),r>>>0)},t.wbg.__wbg_length_27a2afe8ab42b09f=function(e){return S(e).length},t.wbg.__wbg_instanceof_Uint8Array_01cebe79ca606cca=function(e){let n;try{n=S(e)instanceof Uint8Array}catch{n=!1}return n},t.wbg.__wbindgen_debug_string=function(e,n){const r=Ge(S(n)),a=Ft(r,v.__wbindgen_malloc,v.__wbindgen_realloc),i=bt;Y()[e/4+1]=i,Y()[e/4+0]=a},t.wbg.__wbindgen_throw=function(e,n){throw new Error(Ut(e,n))},t.wbg.__wbindgen_memory=function(){const e=v.memory;return L(e)},t}function yi(t,e){return v=t.exports,sr.__wbindgen_wasm_module=e,qt=null,Yt=null,Ht=null,v.__wbindgen_start(),v}async function sr(t){typeof t>"u"&&(t=new URL(""+new URL("wasm_checkers_bg-c312f6fa.wasm",import.meta.url).href,self.location));const e=bi();(typeof t=="string"||typeof Request=="function"&&t instanceof Request||typeof URL=="function"&&t instanceof URL)&&(t=fetch(t));const{instance:n,module:r}=await hi(await t,e);return yi(n,r)}const cr=Symbol("Comlink.proxy"),wi=Symbol("Comlink.endpoint"),ki=Symbol("Comlink.releaseProxy"),$e=Symbol("Comlink.finalizer"),fe=Symbol("Comlink.thrown"),lr=t=>typeof t=="object"&&t!==null||typeof t=="function",xi={canHandle:t=>lr(t)&&t[cr],serialize(t){const{port1:e,port2:n}=new MessageChannel;return fr(t,e),[n,[n]]},deserialize(t){return t.start(),mr(t)}},Ni={canHandle:t=>lr(t)&&fe in t,serialize({value:t}){let e;return t instanceof Error?e={isError:!0,value:{message:t.message,name:t.name,stack:t.stack}}:e={isError:!1,value:t},[e,[]]},deserialize(t){throw t.isError?Object.assign(new Error(t.value.message),t.value):t.value}},ur=new Map([["proxy",xi],["throw",Ni]]);function Si(t,e){for(const n of t)if(e===n||n==="*"||n instanceof RegExp&&n.test(e))return!0;return!1}function fr(t,e=globalThis,n=["*"]){e.addEventListener("message",function r(a){if(!a||!a.data)return;if(!Si(n,a.origin)){console.warn(`Invalid origin '${a.origin}' for comlink proxy`);return}const{id:i,type:o,path:c}=Object.assign({path:[]},a.data),l=(a.data.argumentList||[]).map(yt);let u;try{const s=c.slice(0,-1).reduce((f,m)=>f[m],t),_=c.reduce((f,m)=>f[m],t);switch(o){case"GET":u=_;break;case"SET":s[c.slice(-1)[0]]=yt(a.data.value),u=!0;break;case"APPLY":u=_.apply(s,l);break;case"CONSTRUCT":{const f=new _(...l);u=ji(f)}break;case"ENDPOINT":{const{port1:f,port2:m}=new MessageChannel;fr(t,m),u=Pi(f,[f])}break;case"RELEASE":u=void 0;break;default:return}}catch(s){u={value:s,[fe]:0}}Promise.resolve(u).catch(s=>({value:s,[fe]:0})).then(s=>{const[_,f]=pe(s);e.postMessage(Object.assign(Object.assign({},_),{id:i}),f),o==="RELEASE"&&(e.removeEventListener("message",r),_r(e),$e in t&&typeof t[$e]=="function"&&t[$e]())}).catch(s=>{const[_,f]=pe({value:new TypeError("Unserializable return value"),[fe]:0});e.postMessage(Object.assign(Object.assign({},_),{id:i}),f)})}),e.start&&e.start()}function Ci(t){return t.constructor.name==="MessagePort"}function _r(t){Ci(t)&&t.close()}function mr(t,e){return Xe(t,[],e)}function _e(t){if(t)throw new Error("Proxy has been released and is not useable")}function dr(t){return At(t,{type:"RELEASE"}).then(()=>{_r(t)})}const me=new WeakMap,de="FinalizationRegistry"in globalThis&&new FinalizationRegistry(t=>{const e=(me.get(t)||0)-1;me.set(t,e),e===0&&dr(t)});function Ai(t,e){const n=(me.get(e)||0)+1;me.set(e,n),de&&de.register(t,e,t)}function Ei(t){de&&de.unregister(t)}function Xe(t,e=[],n=function(){}){let r=!1;const a=new Proxy(n,{get(i,o){if(_e(r),o===ki)return()=>{Ei(a),dr(t),r=!0};if(o==="then"){if(e.length===0)return{then:()=>a};const c=At(t,{type:"GET",path:e.map(l=>l.toString())}).then(yt);return c.then.bind(c)}return Xe(t,[...e,o])},set(i,o,c){_e(r);const[l,u]=pe(c);return At(t,{type:"SET",path:[...e,o].map(s=>s.toString()),value:l},u).then(yt)},apply(i,o,c){_e(r);const l=e[e.length-1];if(l===wi)return At(t,{type:"ENDPOINT"}).then(yt);if(l==="bind")return Xe(t,e.slice(0,-1));const[u,s]=pr(c);return At(t,{type:"APPLY",path:e.map(_=>_.toString()),argumentList:u},s).then(yt)},construct(i,o){_e(r);const[c,l]=pr(o);return At(t,{type:"CONSTRUCT",path:e.map(u=>u.toString()),argumentList:c},l).then(yt)}});return Ai(a,t),a}function Oi(t){return Array.prototype.concat.apply([],t)}function pr(t){const e=t.map(pe);return[e.map(n=>n[0]),Oi(e.map(n=>n[1]))]}const gr=new WeakMap;function Pi(t,e){return gr.set(t,e),t}function ji(t){return Object.assign(t,{[cr]:!0})}function pe(t){for(const[e,n]of ur)if(n.canHandle(t)){const[r,a]=n.serialize(t);return[{type:"HANDLER",name:e,value:r},a]}return[{type:"RAW",value:t},gr.get(t)||[]]}function yt(t){switch(t.type){case"HANDLER":return ur.get(t.name).deserialize(t.value);case"RAW":return t.value}}function At(t,e,n){return new Promise(r=>{const a=Ti();t.addEventListener("message",function i(o){!o.data||!o.data.id||o.data.id!==a||(t.removeEventListener("message",i),r(o.data))}),t.start&&t.start(),t.postMessage(Object.assign({id:a},e),n)})}function Ti(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}const vr=mr(new Worker(new URL(""+new URL("wasm-checkers-c08c4667.js",import.meta.url).href,self.location),{type:"module"})),Mi="_root_ldxbx_1",Di="_main_ldxbx_147",Ri="_board_ldxbx_153",hr={root:Mi,main:Di,board:Ri};var wt,E,Ze,br,Et=0,yr=[],ge=[],wr=b.__b,kr=b.__r,xr=b.diffed,Nr=b.__c,Sr=b.unmount;function Ot(t,e){b.__h&&b.__h(E,t,Et||e),Et=0;var n=E.__H||(E.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:ge}),n.__[t]}function ft(t){return Et=1,Je(Ar,t)}function Je(t,e,n){var r=Ot(wt++,2);if(r.t=t,!r.__c&&(r.__=[n?n(e):Ar(void 0,e),function(c){var l=r.__N?r.__N[0]:r.__[0],u=r.t(l,c);l!==u&&(r.__N=[u,r.__[1]],r.__c.setState({}))}],r.__c=E,!E.u)){var a=function(c,l,u){if(!r.__c.__H)return!0;var s=r.__c.__H.__.filter(function(f){return f.__c});if(s.every(function(f){return!f.__N}))return!i||i.call(this,c,l,u);var _=!1;return s.forEach(function(f){if(f.__N){var m=f.__[0];f.__=f.__N,f.__N=void 0,m!==f.__[0]&&(_=!0)}}),!(!_&&r.__c.props===c)&&(!i||i.call(this,c,l,u))};E.u=!0;var i=E.shouldComponentUpdate,o=E.componentWillUpdate;E.componentWillUpdate=function(c,l,u){if(this.__e){var s=i;i=void 0,a(c,l,u),i=s}o&&o.call(this,c,l,u)},E.shouldComponentUpdate=a}return r.__N||r.__}function nt(t,e){var n=Ot(wt++,3);!b.__s&&nn(n.__H,e)&&(n.__=t,n.i=e,E.__H.__h.push(n))}function ve(t,e){var n=Ot(wt++,4);!b.__s&&nn(n.__H,e)&&(n.__=t,n.i=e,E.__h.push(n))}function Ii(t){return Et=5,Qe(function(){return{current:t}},[])}function Li(t,e,n){Et=6,ve(function(){return typeof t=="function"?(t(e()),function(){return t(null)}):t?(t.current=e(),function(){return t.current=null}):void 0},n==null?n:n.concat(t))}function Qe(t,e){var n=Ot(wt++,7);return nn(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function zi(t,e){return Et=8,Qe(function(){return t},e)}function tn(t){var e=E.context[t.__c],n=Ot(wt++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub(E)),e.props.value):t.__}function Bi(t,e){b.useDebugValue&&b.useDebugValue(e?e(t):t)}function Hi(){var t=Ot(wt++,11);if(!t.__){for(var e=E.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var n=e.__m||(e.__m=[0,0]);t.__="P"+n[0]+"-"+n[1]++}return t.__}function Ui(){for(var t;t=yr.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(he),t.__H.__h.forEach(en),t.__H.__h=[]}catch(e){t.__H.__h=[],b.__e(e,t.__v)}}b.__b=function(t){E=null,wr&&wr(t)},b.__r=function(t){kr&&kr(t),wt=0;var e=(E=t.__c).__H;e&&(Ze===E?(e.__h=[],E.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=ge,n.__N=n.i=void 0})):(e.__h.forEach(he),e.__h.forEach(en),e.__h=[])),Ze=E},b.diffed=function(t){xr&&xr(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(yr.push(e)!==1&&br===b.requestAnimationFrame||((br=b.requestAnimationFrame)||Fi)(Ui)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==ge&&(n.__=n.__V),n.i=void 0,n.__V=ge})),Ze=E=null},b.__c=function(t,e){e.some(function(n){try{n.__h.forEach(he),n.__h=n.__h.filter(function(r){return!r.__||en(r)})}catch(r){e.some(function(a){a.__h&&(a.__h=[])}),e=[],b.__e(r,n.__v)}}),Nr&&Nr(t,e)},b.unmount=function(t){Sr&&Sr(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{he(r)}catch(a){e=a}}),n.__H=void 0,e&&b.__e(e,n.__v))};var Cr=typeof requestAnimationFrame=="function";function Fi(t){var e,n=function(){clearTimeout(r),Cr&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);Cr&&(e=requestAnimationFrame(n))}function he(t){var e=E,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),E=e}function en(t){var e=E;t.__c=t.__(),E=e}function nn(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function Ar(t,e){return typeof e=="function"?e(t):e}const Wi="_root_sa891_1",Yi="_board_sa891_147",qi={root:Wi,board:Yi};var be={prefix:"fas",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},Vi={prefix:"fas",iconName:"crown",icon:[576,512,[128081],"f521","M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"]},ye={prefix:"fas",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"]};function Er(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Er(Object(n),!0).forEach(function(r){I(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Er(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function we(t){return we=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},we(t)}function Gi(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Or(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Ki(t,e,n){return e&&Or(t.prototype,e),n&&Or(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function I(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function rn(t,e){return Xi(t)||Ji(t,e)||Pr(t,e)||to()}function Vt(t){return $i(t)||Zi(t)||Pr(t)||Qi()}function $i(t){if(Array.isArray(t))return an(t)}function Xi(t){if(Array.isArray(t))return t}function Zi(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ji(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,c;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(l){i=!0,c=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw c}}return r}}function Pr(t,e){if(t){if(typeof t=="string")return an(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return an(t,e)}}function an(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Qi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function to(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var jr=function(){},on={},Tr={},Mr=null,Dr={mark:jr,measure:jr};try{typeof window<"u"&&(on=window),typeof document<"u"&&(Tr=document),typeof MutationObserver<"u"&&(Mr=MutationObserver),typeof performance<"u"&&(Dr=performance)}catch{}var eo=on.navigator||{},Rr=eo.userAgent,Ir=Rr===void 0?"":Rr,_t=on,O=Tr,Lr=Mr,ke=Dr;_t.document;var rt=!!O.documentElement&&!!O.head&&typeof O.addEventListener=="function"&&typeof O.createElement=="function",zr=~Ir.indexOf("MSIE")||~Ir.indexOf("Trident/"),xe,Ne,Se,Ce,Ae,at="___FONT_AWESOME___",sn=16,Br="fa",Hr="svg-inline--fa",kt="data-fa-i2svg",cn="data-fa-pseudo-element",no="data-fa-pseudo-element-pending",ln="data-prefix",un="data-icon",Ur="fontawesome-i2svg",ro="async",ao=["HTML","HEAD","STYLE","SCRIPT"],Fr=function(){try{return!0}catch{return!1}}(),P="classic",T="sharp",fn=[P,T];function Gt(t){return new Proxy(t,{get:function(e,n){return n in e?e[n]:e[P]}})}var Kt=Gt((xe={},I(xe,P,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),I(xe,T,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),xe)),$t=Gt((Ne={},I(Ne,P,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),I(Ne,T,{solid:"fass",regular:"fasr"}),Ne)),Xt=Gt((Se={},I(Se,P,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),I(Se,T,{fass:"fa-solid",fasr:"fa-regular"}),Se)),io=Gt((Ce={},I(Ce,P,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),I(Ce,T,{"fa-solid":"fass","fa-regular":"fasr"}),Ce)),oo=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,Wr="fa-layers-text",so=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,co=Gt((Ae={},I(Ae,P,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),I(Ae,T,{900:"fass",400:"fasr"}),Ae)),Yr=[1,2,3,4,5,6,7,8,9,10],lo=Yr.concat([11,12,13,14,15,16,17,18,19,20]),uo=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],xt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Zt=new Set;Object.keys($t[P]).map(Zt.add.bind(Zt)),Object.keys($t[T]).map(Zt.add.bind(Zt));var fo=[].concat(fn,Vt(Zt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",xt.GROUP,xt.SWAP_OPACITY,xt.PRIMARY,xt.SECONDARY]).concat(Yr.map(function(t){return"".concat(t,"x")})).concat(lo.map(function(t){return"w-".concat(t)})),Jt=_t.FontAwesomeConfig||{};function _o(t){var e=O.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function mo(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(O&&typeof O.querySelector=="function"){var po=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];po.forEach(function(t){var e=rn(t,2),n=e[0],r=e[1],a=mo(_o(n));a!=null&&(Jt[r]=a)})}var qr={styleDefault:"solid",familyDefault:"classic",cssPrefix:Br,replacementClass:Hr,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Jt.familyPrefix&&(Jt.cssPrefix=Jt.familyPrefix);var Pt=p(p({},qr),Jt);Pt.autoReplaceSvg||(Pt.observeMutations=!1);var h={};Object.keys(qr).forEach(function(t){Object.defineProperty(h,t,{enumerable:!0,set:function(e){Pt[t]=e,Qt.forEach(function(n){return n(h)})},get:function(){return Pt[t]}})}),Object.defineProperty(h,"familyPrefix",{enumerable:!0,set:function(t){Pt.cssPrefix=t,Qt.forEach(function(e){return e(h)})},get:function(){return Pt.cssPrefix}}),_t.FontAwesomeConfig=h;var Qt=[];function go(t){return Qt.push(t),function(){Qt.splice(Qt.indexOf(t),1)}}var mt=sn,K={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function vo(t){if(!(!t||!rt)){var e=O.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=O.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return O.head.insertBefore(e,r),t}}var ho="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function te(){for(var t=12,e="";t-- >0;)e+=ho[Math.random()*62|0];return e}function jt(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function _n(t){return t.classList?jt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Vr(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function bo(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Vr(t[n]),'" ')},"").trim()}function Ee(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function mn(t){return t.size!==K.size||t.x!==K.x||t.y!==K.y||t.rotate!==K.rotate||t.flipX||t.flipY}function yo(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),c="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(c)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function wo(t){var e=t.transform,n=t.width,r=n===void 0?sn:n,a=t.height,i=a===void 0?sn:a,o=t.startCentered,c=o===void 0?!1:o,l="";return c&&zr?l+="translate(".concat(e.x/mt-r/2,"em, ").concat(e.y/mt-i/2,"em) "):c?l+="translate(calc(-50% + ".concat(e.x/mt,"em), calc(-50% + ").concat(e.y/mt,"em)) "):l+="translate(".concat(e.x/mt,"em, ").concat(e.y/mt,"em) "),l+="scale(".concat(e.size/mt*(e.flipX?-1:1),", ").concat(e.size/mt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var ko=`:root, :host {
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
}`;function Gr(){var t=Br,e=Hr,n=h.cssPrefix,r=h.replacementClass,a=ko;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),c=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(c,".".concat(r))}return a}var Kr=!1;function dn(){h.autoAddCss&&!Kr&&(vo(Gr()),Kr=!0)}var xo={mixout:function(){return{dom:{css:Gr,insertCss:dn}}},hooks:function(){return{beforeDOMElementCreation:function(){dn()},beforeI2svg:function(){dn()}}}},it=_t||{};it[at]||(it[at]={}),it[at].styles||(it[at].styles={}),it[at].hooks||(it[at].hooks={}),it[at].shims||(it[at].shims=[]);var q=it[at],$r=[],No=function t(){O.removeEventListener("DOMContentLoaded",t),Oe=1,$r.map(function(e){return e()})},Oe=!1;rt&&(Oe=(O.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(O.readyState),Oe||O.addEventListener("DOMContentLoaded",No));function So(t){rt&&(Oe?setTimeout(t,0):$r.push(t))}function ee(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?Vr(t):"<".concat(e," ").concat(bo(r),">").concat(i.map(ee).join(""),"</").concat(e,">")}function Xr(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Co=function(t,e){return function(n,r,a,i){return t.call(e,n,r,a,i)}},pn=function(t,e,n,r){var a=Object.keys(t),i=a.length,o=r!==void 0?Co(e,r):e,c,l,u;for(n===void 0?(c=1,u=t[a[0]]):(c=0,u=n);c<i;c++)l=a[c],u=o(u,t[l],l,t);return u};function Ao(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function Zr(t){var e=Ao(t);return e.length===1?e[0].toString(16):null}function Eo(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Jr(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function gn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Jr(e);typeof q.hooks.addPack=="function"&&!a?q.hooks.addPack(t,Jr(e)):q.styles[t]=p(p({},q.styles[t]||{}),i),t==="fas"&&gn("fa",e)}var Pe,je,Te,Tt=q.styles,Oo=q.shims,Po=(Pe={},I(Pe,P,Object.values(Xt[P])),I(Pe,T,Object.values(Xt[T])),Pe),vn=null,Qr={},ta={},ea={},na={},ra={},jo=(je={},I(je,P,Object.keys(Kt[P])),I(je,T,Object.keys(Kt[T])),je);function To(t){return~fo.indexOf(t)}function Mo(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!To(a)?a:null}var aa=function(){var t=function(r){return pn(Tt,function(a,i,o){return a[o]=pn(i,r,{}),a},{})};Qr=t(function(r,a,i){if(a[3]&&(r[a[3]]=i),a[2]){var o=a[2].filter(function(c){return typeof c=="number"});o.forEach(function(c){r[c.toString(16)]=i})}return r}),ta=t(function(r,a,i){if(r[i]=i,a[2]){var o=a[2].filter(function(c){return typeof c=="string"});o.forEach(function(c){r[c]=i})}return r}),ra=t(function(r,a,i){var o=a[2];return r[i]=i,o.forEach(function(c){r[c]=i}),r});var e="far"in Tt||h.autoFetchSvg,n=pn(Oo,function(r,a){var i=a[0],o=a[1],c=a[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:c}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:c}),r},{names:{},unicodes:{}});ea=n.names,na=n.unicodes,vn=Me(h.styleDefault,{family:h.familyDefault})};go(function(t){vn=Me(t.styleDefault,{family:h.familyDefault})}),aa();function hn(t,e){return(Qr[t]||{})[e]}function Do(t,e){return(ta[t]||{})[e]}function Nt(t,e){return(ra[t]||{})[e]}function ia(t){return ea[t]||{prefix:null,iconName:null}}function Ro(t){var e=na[t],n=hn("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function dt(){return vn}var bn=function(){return{prefix:null,iconName:null,rest:[]}};function Me(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?P:n,a=Kt[r][t],i=$t[r][t]||$t[r][a],o=t in q.styles?t:null;return i||o||null}var oa=(Te={},I(Te,P,Object.keys(Xt[P])),I(Te,T,Object.keys(Xt[T])),Te);function De(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(e={},I(e,P,"".concat(h.cssPrefix,"-").concat(P)),I(e,T,"".concat(h.cssPrefix,"-").concat(T)),e),o=null,c=P;(t.includes(i[P])||t.some(function(u){return oa[P].includes(u)}))&&(c=P),(t.includes(i[T])||t.some(function(u){return oa[T].includes(u)}))&&(c=T);var l=t.reduce(function(u,s){var _=Mo(h.cssPrefix,s);if(Tt[s]?(s=Po[c].includes(s)?io[c][s]:s,o=s,u.prefix=s):jo[c].indexOf(s)>-1?(o=s,u.prefix=Me(s,{family:c})):_?u.iconName=_:s!==h.replacementClass&&s!==i[P]&&s!==i[T]&&u.rest.push(s),!a&&u.prefix&&u.iconName){var f=o==="fa"?ia(u.iconName):{},m=Nt(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||m||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!Tt.far&&Tt.fas&&!h.autoFetchSvg&&(u.prefix="fas")}return u},bn());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&c===T&&(Tt.fass||h.autoFetchSvg)&&(l.prefix="fass",l.iconName=Nt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=dt()||"fas"),l}var Io=function(){function t(){Gi(this,t),this.definitions={}}return Ki(t,[{key:"add",value:function(){for(var e=this,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(o){e.definitions[o]=p(p({},e.definitions[o]||{}),i[o]),gn(o,i[o]);var c=Xt[P][o];c&&gn(c,i[o]),aa()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(a){var i=r[a],o=i.prefix,c=i.iconName,l=i.icon,u=l[2];e[o]||(e[o]={}),u.length>0&&u.forEach(function(s){typeof s=="string"&&(e[o][s]=l)}),e[o][c]=l}),e}}]),t}(),sa=[],Mt={},Dt={},Lo=Object.keys(Dt);function zo(t,e){var n=e.mixoutsTo;return sa=t,Mt={},Object.keys(Dt).forEach(function(r){Lo.indexOf(r)===-1&&delete Dt[r]}),sa.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),we(a[o])==="object"&&Object.keys(a[o]).forEach(function(c){n[o]||(n[o]={}),n[o][c]=a[o][c]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Mt[o]||(Mt[o]=[]),Mt[o].push(i[o])})}r.provides&&r.provides(Dt)}),n}function yn(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Mt[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function St(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=Mt[t]||[];a.forEach(function(i){i.apply(null,n)})}function ot(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Dt[t]?Dt[t].apply(null,e):void 0}function wn(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||dt();if(e)return e=Nt(n,e)||e,Xr(ca.definitions,n,e)||Xr(q.styles,n,e)}var ca=new Io,Bo=function(){h.autoReplaceSvg=!1,h.observeMutations=!1,St("noAuto")},Ho={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return rt?(St("beforeI2svg",t),ot("pseudoElements2svg",t),ot("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.autoReplaceSvgRoot;h.autoReplaceSvg===!1&&(h.autoReplaceSvg=!0),h.observeMutations=!0,So(function(){Fo({autoReplaceSvgRoot:e}),St("watch",t)})}},Uo={icon:function(t){if(t===null)return null;if(we(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Nt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Me(t[0]);return{prefix:n,iconName:Nt(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(h.cssPrefix,"-"))>-1||t.match(oo))){var r=De(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||dt(),iconName:Nt(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var a=dt();return{prefix:a,iconName:Nt(a,t)||t}}}},H={noAuto:Bo,config:h,dom:Ho,parse:Uo,library:ca,findIconDefinition:wn,toHtml:ee},Fo=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.autoReplaceSvgRoot,n=e===void 0?O:e;(Object.keys(q.styles).length>0||h.autoFetchSvg)&&rt&&h.autoReplaceSvg&&H.dom.i2svg({node:n})};function Re(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(n){return ee(n)})}}),Object.defineProperty(t,"node",{get:function(){if(rt){var n=O.createElement("div");return n.innerHTML=t.html,n.children}}}),t}function Wo(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(mn(o)&&n.found&&!r.found){var c=n.width,l=n.height,u={x:c/l/2,y:.5};a.style=Ee(p(p({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function Yo(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(h.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:p(p({},a),{},{id:o}),children:r}]}]}function kn(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,o=t.transform,c=t.symbol,l=t.title,u=t.maskId,s=t.titleId,_=t.extra,f=t.watchable,m=f===void 0?!1:f,y=r.found?r:n,A=y.width,w=y.height,x=a==="fak",C=[h.replacementClass,i?"".concat(h.cssPrefix,"-").concat(i):""].filter(function(z){return _.classes.indexOf(z)===-1}).filter(function(z){return z!==""||!!z}).concat(_.classes).join(" "),j={children:[],attributes:p(p({},_.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:_.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(w)})},D=x&&!~_.classes.indexOf("fa-fw")?{width:"".concat(A/w*16*.0625,"em")}:{};m&&(j.attributes[kt]=""),l&&(j.children.push({tag:"title",attributes:{id:j.attributes["aria-labelledby"]||"title-".concat(s||te())},children:[l]}),delete j.attributes.title);var R=p(p({},j),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:c,styles:p(p({},D),_.styles)}),B=r.found&&n.found?ot("generateAbstractMask",R)||{children:[],attributes:{}}:ot("generateAbstractIcon",R)||{children:[],attributes:{}},W=B.children,N=B.attributes;return R.children=W,R.attributes=N,c?Yo(R):Wo(R)}function la(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,o=t.extra,c=t.watchable,l=c===void 0?!1:c,u=p(p(p({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[kt]="");var s=p({},o.styles);mn(a)&&(s.transform=wo({transform:a,startCentered:!0,width:n,height:r}),s["-webkit-transform"]=s.transform);var _=Ee(s);_.length>0&&(u.style=_);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),i&&f.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),f}function qo(t){var e=t.content,n=t.title,r=t.extra,a=p(p(p({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Ee(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var xn=q.styles;function Nn(t){var e=t[0],n=t[1],r=t.slice(4),a=rn(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(h.cssPrefix,"-").concat(xt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(xt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(xt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Vo={found:!1,width:512,height:512};function Go(t,e){!Fr&&!h.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Sn(t,e){var n=e;return e==="fa"&&h.styleDefault!==null&&(e=dt()),new Promise(function(r,a){if(ot("missingIconAbstract"),n==="fa"){var i=ia(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&xn[e]&&xn[e][t]){var o=xn[e][t];return r(Nn(o))}Go(t,e),r(p(p({},Vo),{},{icon:h.showMissingIcons&&t?ot("missingIconAbstract")||{}:{}}))})}var ua=function(){},Cn=h.measurePerformance&&ke&&ke.mark&&ke.measure?ke:{mark:ua,measure:ua},ne='FA "6.3.0"',Ko=function(t){return Cn.mark("".concat(ne," ").concat(t," begins")),function(){return fa(t)}},fa=function(t){Cn.mark("".concat(ne," ").concat(t," ends")),Cn.measure("".concat(ne," ").concat(t),"".concat(ne," ").concat(t," begins"),"".concat(ne," ").concat(t," ends"))},An={begin:Ko,end:fa},Ie=function(){};function _a(t){var e=t.getAttribute?t.getAttribute(kt):null;return typeof e=="string"}function $o(t){var e=t.getAttribute?t.getAttribute(ln):null,n=t.getAttribute?t.getAttribute(un):null;return e&&n}function Xo(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(h.replacementClass)}function Zo(){if(h.autoReplaceSvg===!0)return Le.replace;var t=Le[h.autoReplaceSvg];return t||Le.replace}function Jo(t){return O.createElementNS("http://www.w3.org/2000/svg",t)}function Qo(t){return O.createElement(t)}function ma(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Jo:Qo:n;if(typeof t=="string")return O.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){a.appendChild(ma(o,{ceFn:r}))}),a}function ts(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Le={replace:function(t){var e=t[0];if(e.parentNode)if(t[1].forEach(function(r){e.parentNode.insertBefore(ma(r),e)}),e.getAttribute(kt)===null&&h.keepOriginalSource){var n=O.createComment(ts(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){var e=t[0],n=t[1];if(~_n(e).indexOf(h.replacementClass))return Le.replace(t);var r=new RegExp("".concat(h.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var a=n[0].attributes.class.split(" ").reduce(function(o,c){return c===h.replacementClass||c.match(r)?o.toSvg.push(c):o.toNode.push(c),o},{toNode:[],toSvg:[]});n[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",a.toNode.join(" "))}var i=n.map(function(o){return ee(o)}).join(`
`);e.setAttribute(kt,""),e.innerHTML=i}};function da(t){t()}function pa(t,e){var n=typeof e=="function"?e:Ie;if(t.length===0)n();else{var r=da;h.mutateApproach===ro&&(r=_t.requestAnimationFrame||da),r(function(){var a=Zo(),i=An.begin("mutate");t.map(a),i(),n()})}}var En=!1;function ga(){En=!0}function On(){En=!1}var ze=null;function va(t){if(Lr&&h.observeMutations){var e=t.treeCallback,n=e===void 0?Ie:e,r=t.nodeCallback,a=r===void 0?Ie:r,i=t.pseudoElementsCallback,o=i===void 0?Ie:i,c=t.observeMutationsRoot,l=c===void 0?O:c;ze=new Lr(function(u){if(!En){var s=dt();jt(u).forEach(function(_){if(_.type==="childList"&&_.addedNodes.length>0&&!_a(_.addedNodes[0])&&(h.searchPseudoElements&&o(_.target),n(_.target)),_.type==="attributes"&&_.target.parentNode&&h.searchPseudoElements&&o(_.target.parentNode),_.type==="attributes"&&_a(_.target)&&~uo.indexOf(_.attributeName))if(_.attributeName==="class"&&$o(_.target)){var f=De(_n(_.target)),m=f.prefix,y=f.iconName;_.target.setAttribute(ln,m||s),y&&_.target.setAttribute(un,y)}else Xo(_.target)&&a(_.target)})}}),rt&&ze.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function es(){ze&&ze.disconnect()}function ns(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],c=i.slice(1);return o&&c.length>0&&(r[o]=c.join(":").trim()),r},{})),n}function rs(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=De(_n(t));return a.prefix||(a.prefix=dt()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Do(a.prefix,t.innerText)||hn(a.prefix,Zr(t.innerText))),!a.iconName&&h.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function as(t){var e=jt(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return h.autoA11y&&(n?e["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(r||te()):(e["aria-hidden"]="true",e.focusable="false")),e}function is(){return{iconName:null,title:null,titleId:null,prefix:null,transform:K,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ha(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=rs(t),r=n.iconName,a=n.prefix,i=n.rest,o=as(t),c=yn("parseNodeAttributes",{},t),l=e.styleParser?ns(t):[];return p({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:K,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},c)}var os=q.styles;function ba(t){var e=h.autoReplaceSvg==="nest"?ha(t,{styleParser:!1}):ha(t);return~e.extra.classes.indexOf(Wr)?ot("generateLayersText",t,e):ot("generateSvgReplacementMutation",t,e)}var pt=new Set;fn.map(function(t){pt.add("fa-".concat(t))}),Object.keys(Kt[P]).map(pt.add.bind(pt)),Object.keys(Kt[T]).map(pt.add.bind(pt)),pt=Vt(pt);function ya(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!rt)return Promise.resolve();var n=O.documentElement.classList,r=function(s){return n.add("".concat(Ur,"-").concat(s))},a=function(s){return n.remove("".concat(Ur,"-").concat(s))},i=h.autoFetchSvg?pt:fn.map(function(s){return"fa-".concat(s)}).concat(Object.keys(os));i.includes("fa")||i.push("fa");var o=[".".concat(Wr,":not([").concat(kt,"])")].concat(i.map(function(s){return".".concat(s,":not([").concat(kt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var c=[];try{c=jt(t.querySelectorAll(o))}catch{}if(c.length>0)r("pending"),a("complete");else return Promise.resolve();var l=An.begin("onTree"),u=c.reduce(function(s,_){try{var f=ba(_);f&&s.push(f)}catch(m){Fr||m.name==="MissingIcon"&&console.error(m)}return s},[]);return new Promise(function(s,_){Promise.all(u).then(function(f){pa(f,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),s()})}).catch(function(f){l(),_(f)})})}function ss(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ba(t).then(function(n){n&&pa([n],e)})}function cs(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:wn(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:wn(a||{})),t(r,p(p({},n),{},{mask:a}))}}var ls=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,r=n===void 0?K:n,a=e.symbol,i=a===void 0?!1:a,o=e.mask,c=o===void 0?null:o,l=e.maskId,u=l===void 0?null:l,s=e.title,_=s===void 0?null:s,f=e.titleId,m=f===void 0?null:f,y=e.classes,A=y===void 0?[]:y,w=e.attributes,x=w===void 0?{}:w,C=e.styles,j=C===void 0?{}:C;if(t){var D=t.prefix,R=t.iconName,B=t.icon;return Re(p({type:"icon"},t),function(){return St("beforeDOMElementCreation",{iconDefinition:t,params:e}),h.autoA11y&&(_?x["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(m||te()):(x["aria-hidden"]="true",x.focusable="false")),kn({icons:{main:Nn(B),mask:c?Nn(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:D,iconName:R,transform:p(p({},K),r),symbol:i,title:_,maskId:u,titleId:m,extra:{attributes:x,styles:j,classes:A}})})}},us={mixout:function(){return{icon:cs(ls)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=ya,t.nodeCallback=ss,t}}},provides:function(t){t.i2svg=function(e){var n=e.node,r=n===void 0?O:n,a=e.callback,i=a===void 0?function(){}:a;return ya(r,i)},t.generateSvgReplacementMutation=function(e,n){var r=n.iconName,a=n.title,i=n.titleId,o=n.prefix,c=n.transform,l=n.symbol,u=n.mask,s=n.maskId,_=n.extra;return new Promise(function(f,m){Promise.all([Sn(r,o),u.iconName?Sn(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var A=rn(y,2),w=A[0],x=A[1];f([e,kn({icons:{main:w,mask:x},prefix:o,iconName:r,transform:c,symbol:l,maskId:s,title:a,titleId:i,extra:_,watchable:!0})])}).catch(m)})},t.generateAbstractIcon=function(e){var n=e.children,r=e.attributes,a=e.main,i=e.transform,o=e.styles,c=Ee(o);c.length>0&&(r.style=c);var l;return mn(i)&&(l=ot("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),n.push(l||a.icon),{children:n,attributes:r}}}},fs={mixout:function(){return{layer:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.classes,r=n===void 0?[]:n;return Re({type:"layer"},function(){St("beforeDOMElementCreation",{assembler:t,params:e});var a=[];return t(function(i){Array.isArray(i)?i.map(function(o){a=a.concat(o.abstract)}):a=a.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(h.cssPrefix,"-layers")].concat(Vt(r)).join(" ")},children:a}]})}}}},_s={mixout:function(){return{counter:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.title,r=n===void 0?null:n,a=e.classes,i=a===void 0?[]:a,o=e.attributes,c=o===void 0?{}:o,l=e.styles,u=l===void 0?{}:l;return Re({type:"counter",content:t},function(){return St("beforeDOMElementCreation",{content:t,params:e}),qo({content:t.toString(),title:r,extra:{attributes:c,styles:u,classes:["".concat(h.cssPrefix,"-layers-counter")].concat(Vt(i))}})})}}}},ms={mixout:function(){return{text:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,r=n===void 0?K:n,a=e.title,i=a===void 0?null:a,o=e.classes,c=o===void 0?[]:o,l=e.attributes,u=l===void 0?{}:l,s=e.styles,_=s===void 0?{}:s;return Re({type:"text",content:t},function(){return St("beforeDOMElementCreation",{content:t,params:e}),la({content:t,transform:p(p({},K),r),title:i,extra:{attributes:u,styles:_,classes:["".concat(h.cssPrefix,"-layers-text")].concat(Vt(c))}})})}}},provides:function(t){t.generateLayersText=function(e,n){var r=n.title,a=n.transform,i=n.extra,o=null,c=null;if(zr){var l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/l,c=u.height/l}return h.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,la({content:e.innerHTML,width:o,height:c,transform:a,title:r,extra:i,watchable:!0})])}}},ds=new RegExp('"',"ug"),wa=[1105920,1112319];function ps(t){var e=t.replace(ds,""),n=Eo(e,0),r=n>=wa[0]&&n<=wa[1],a=e.length===2?e[0]===e[1]:!1;return{value:Zr(a?e[0]:e),isSecondary:r||a}}function ka(t,e){var n="".concat(no).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=jt(t.children),o=i.filter(function(W){return W.getAttribute(cn)===e})[0],c=_t.getComputedStyle(t,e),l=c.getPropertyValue("font-family").match(so),u=c.getPropertyValue("font-weight"),s=c.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&s!=="none"&&s!==""){var _=c.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?T:P,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?$t[f][l[2].toLowerCase()]:co[f][u],y=ps(_),A=y.value,w=y.isSecondary,x=l[0].startsWith("FontAwesome"),C=hn(m,A),j=C;if(x){var D=Ro(A);D.iconName&&D.prefix&&(C=D.iconName,m=D.prefix)}if(C&&!w&&(!o||o.getAttribute(ln)!==m||o.getAttribute(un)!==j)){t.setAttribute(n,j),o&&t.removeChild(o);var R=is(),B=R.extra;B.attributes[cn]=e,Sn(C,m).then(function(W){var N=kn(p(p({},R),{},{icons:{main:W,mask:bn()},prefix:m,iconName:j,extra:B,watchable:!0})),z=O.createElement("svg");e==="::before"?t.insertBefore(z,t.firstChild):t.appendChild(z),z.outerHTML=N.map(function(vt){return ee(vt)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function gs(t){return Promise.all([ka(t,"::before"),ka(t,"::after")])}function vs(t){return t.parentNode!==document.head&&!~ao.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(cn)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function xa(t){if(rt)return new Promise(function(e,n){var r=jt(t.querySelectorAll("*")).filter(vs).map(gs),a=An.begin("searchPseudoElements");ga(),Promise.all(r).then(function(){a(),On(),e()}).catch(function(){a(),On(),n()})})}var hs={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=xa,t}}},provides:function(t){t.pseudoElements2svg=function(e){var n=e.node,r=n===void 0?O:n;h.searchPseudoElements&&xa(r)}}},Na=!1,bs={mixout:function(){return{dom:{unwatch:function(){ga(),Na=!0}}}},hooks:function(){return{bootstrap:function(){va(yn("mutationObserverCallbacks",{}))},noAuto:function(){es()},watch:function(t){var e=t.observeMutationsRoot;Na?On():va(yn("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Sa=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,r){var a=r.toLowerCase().split("-"),i=a[0],o=a.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)},ys={mixout:function(){return{parse:{transform:function(t){return Sa(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-transform");return n&&(t.transform=Sa(n)),t}}},provides:function(t){t.generateAbstractTransformGrouping=function(e){var n=e.main,r=e.transform,a=e.containerWidth,i=e.iconWidth,o={transform:"translate(".concat(a/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),s={transform:"".concat(c," ").concat(l," ").concat(u)},_={transform:"translate(".concat(i/2*-1," -256)")},f={outer:o,inner:s,path:_};return{tag:"g",attributes:p({},f.outer),children:[{tag:"g",attributes:p({},f.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:p(p({},n.icon.attributes),f.path)}]}]}}}},Pn={x:0,y:0,width:"100%",height:"100%"};function Ca(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function ws(t){return t.tag==="g"?t.children:[t]}var ks={hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-mask"),r=n?De(n.split(" ").map(function(a){return a.trim()})):bn();return r.prefix||(r.prefix=dt()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides:function(t){t.generateAbstractMask=function(e){var n=e.children,r=e.attributes,a=e.main,i=e.mask,o=e.maskId,c=e.transform,l=a.width,u=a.icon,s=i.width,_=i.icon,f=yo({transform:c,containerWidth:s,iconWidth:l}),m={tag:"rect",attributes:p(p({},Pn),{},{fill:"white"})},y=u.children?{children:u.children.map(Ca)}:{},A={tag:"g",attributes:p({},f.inner),children:[Ca(p({tag:u.tag,attributes:p(p({},u.attributes),f.path)},y))]},w={tag:"g",attributes:p({},f.outer),children:[A]},x="mask-".concat(o||te()),C="clip-".concat(o||te()),j={tag:"mask",attributes:p(p({},Pn),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,w]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:ws(_)},j]};return n.push(D,{tag:"rect",attributes:p({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(x,")")},Pn)}),{children:n,attributes:r}}}},xs={provides:function(t){var e=!1;_t.matchMedia&&(e=_t.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:p(p({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=p(p({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:p(p({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:p(p({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:p(p({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:p(p({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:p(p({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:p(p({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:p(p({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Ns={hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},Ss=[xo,us,fs,_s,ms,hs,bs,ys,ks,xs,Ns];zo(Ss,{mixoutsTo:H}),H.noAuto,H.config,H.library,H.dom;var jn=H.parse;H.findIconDefinition,H.toHtml;var Cs=H.icon;H.layer,H.text,H.counter;var k={},As={get exports(){return k},set exports(t){k=t}},Es="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Os=Es,Ps=Os;function Aa(){}function Ea(){}Ea.resetWarningCache=Aa;var js=function(){function t(r,a,i,o,c,l){if(l!==Ps){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Ea,resetWarningCache:Aa};return n.PropTypes=n,n};As.exports=js();function Oa(t,e){for(var n in e)t[n]=e[n];return t}function Tn(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var r in e)if(r!=="__source"&&t[r]!==e[r])return!0;return!1}function Mn(t,e){return t===e&&(t!==0||1/t==1/e)||t!=t&&e!=e}function Dn(t){this.props=t}function Ts(t,e){function n(a){var i=this.props.ref,o=i==a.ref;return!o&&i&&(i.call?i(null):i.current=null),e?!e(this.props,a)||!o:Tn(this.props,a)}function r(a){return this.shouldComponentUpdate=n,Z(t,a)}return r.displayName="Memo("+(t.displayName||t.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(Dn.prototype=new G).isPureReactComponent=!0,Dn.prototype.shouldComponentUpdate=function(t,e){return Tn(this.props,t)||Tn(this.state,e)};var Pa=b.__b;b.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),Pa&&Pa(t)};var Ms=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Ds(t){function e(n){var r=Oa({},n);return delete r.ref,t(r,n.ref||null)}return e.$$typeof=Ms,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e}var ja=function(t,e){return t==null?null:Q(Q(t).map(e))},Rs={map:ja,forEach:ja,count:function(t){return t?Q(t).length:0},only:function(t){var e=Q(t);if(e.length!==1)throw"Children.only";return e[0]},toArray:Q},Is=b.__e;b.__e=function(t,e,n,r){if(t.then){for(var a,i=e;i=i.__;)if((a=i.__c)&&a.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),a.__c(t,e)}Is(t,e,n,r)};var Ta=b.unmount;function Ma(t,e,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),t.__c.__H=null),(t=Oa({},t)).__c!=null&&(t.__c.__P===n&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(r){return Ma(r,e,n)})),t}function Da(t,e,n){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(r){return Da(r,e,n)}),t.__c&&t.__c.__P===e&&(t.__e&&n.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=n)),t}function Be(){this.__u=0,this.t=null,this.__b=null}function Ra(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function Ls(t){var e,n,r;function a(i){if(e||(e=t()).then(function(o){n=o.default||o},function(o){r=o}),r)throw r;if(!n)throw e;return Z(n,i)}return a.displayName="Lazy",a.__f=!0,a}function re(){this.u=null,this.o=null}b.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&t.__h===!0&&(t.type=null),Ta&&Ta(t)},(Be.prototype=new G).__c=function(t,e){var n=e.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var a=Ra(r.__v),i=!1,o=function(){i||(i=!0,n.__R=null,a?a(c):c())};n.__R=o;var c=function(){if(!--r.__u){if(r.state.__a){var u=r.state.__a;r.__v.__k[0]=Da(u,u.__c.__P,u.__c.__O)}var s;for(r.setState({__a:r.__b=null});s=r.t.pop();)s.forceUpdate()}},l=e.__h===!0;r.__u++||l||r.setState({__a:r.__b=r.__v.__k[0]}),t.then(o,o)},Be.prototype.componentWillUnmount=function(){this.t=[]},Be.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Ma(this.__b,n,r.__O=r.__P)}this.__b=null}var a=e.__a&&Z(J,null,t.fallback);return a&&(a.__h=null),[Z(J,null,e.__a?null:t.children),a]};var Ia=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};function zs(t){return this.getChildContext=function(){return t.context},t.children}function Bs(t){var e=this,n=t.i;e.componentWillUnmount=function(){Ct(null,e.l),e.l=null,e.i=null},e.i&&e.i!==n&&e.componentWillUnmount(),t.__v?(e.l||(e.i=n,e.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),e.i.appendChild(r)},insertBefore:function(r,a){this.childNodes.push(r),e.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),e.i.removeChild(r)}}),Ct(Z(zs,{context:e.context},t.__v),e.l)):e.l&&e.componentWillUnmount()}function Hs(t,e){var n=Z(Bs,{__v:t,i:e});return n.containerInfo=e,n}(re.prototype=new G).__a=function(t){var e=this,n=Ra(e.__v),r=e.o.get(t);return r[0]++,function(a){var i=function(){e.props.revealOrder?(r.push(a),Ia(e,t,r)):a()};n?n(i):i()}},re.prototype.render=function(t){this.u=null,this.o=new Map;var e=Q(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},re.prototype.componentDidUpdate=re.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){Ia(t,n,e)})};var La=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Us=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Fs=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Ws=/[A-Z0-9]/g,Ys=typeof document<"u",qs=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};function Vs(t,e,n){return e.__k==null&&(e.textContent=""),Ct(t,e),typeof n=="function"&&n(),t?t.__c:null}function Gs(t,e,n){return ar(t,e),typeof n=="function"&&n(),t?t.__c:null}G.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(G.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var za=b.event;function Ks(){}function $s(){return this.cancelBubble}function Xs(){return this.defaultPrevented}b.event=function(t){return za&&(t=za(t)),t.persist=Ks,t.isPropagationStopped=$s,t.isDefaultPrevented=Xs,t.nativeEvent=t};var Rn,Ba={configurable:!0,get:function(){return this.class}},Ha=b.vnode;b.vnode=function(t){var e=t.type,n=t.props,r=n;if(typeof e=="string"){for(var a in r={},n){var i=n[a];if(!(a==="value"&&"defaultValue"in n&&i==null||Ys&&a==="children"&&e==="noscript")){var o=a.toLowerCase();a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&i===!0?i="":o==="ondoubleclick"?a="ondblclick":o!=="onchange"||e!=="input"&&e!=="textarea"||qs(n.type)?o==="onfocus"?a="onfocusin":o==="onblur"?a="onfocusout":Fs.test(a)?a=o:e.indexOf("-")===-1&&Us.test(a)?a=a.replace(Ws,"-$&").toLowerCase():i===null&&(i=void 0):o=a="oninput",o==="oninput"&&r[a=o]&&(a="oninputCapture"),r[a]=i}}e=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=Q(n.children).forEach(function(c){c.props.selected=r.value.indexOf(c.props.value)!=-1})),e=="select"&&r.defaultValue!=null&&(r.value=Q(n.children).forEach(function(c){c.props.selected=r.multiple?r.defaultValue.indexOf(c.props.value)!=-1:r.defaultValue==c.props.value})),t.props=r,n.class!=n.className&&(Ba.enumerable="className"in n,n.className!=null&&(r.class=n.className),Object.defineProperty(r,"className",Ba))}t.$$typeof=La,Ha&&Ha(t)};var Ua=b.__r;b.__r=function(t){Ua&&Ua(t),Rn=t.__c};var Fa=b.diffed;b.diffed=function(t){Fa&&Fa(t);var e=t.props,n=t.__e;n!=null&&t.type==="textarea"&&"value"in e&&e.value!==n.value&&(n.value=e.value==null?"":e.value),Rn=null};var Zs={ReactCurrentDispatcher:{current:{readContext:function(t){return Rn.__n[t.__c].props.value}}}};function Js(t){return Z.bind(null,t)}function Wa(t){return!!t&&t.$$typeof===La}function Qs(t){return Wa(t)?fi.apply(null,arguments):t}function tc(t){return!!t.__k&&(Ct(null,t),!0)}function ec(t){return t&&(t.base||t.nodeType===1&&t)||null}var nc=function(t,e){return t(e)},rc=function(t,e){return t(e)},ac=J;function Ya(t){t()}function ic(t){return t}function oc(){return[!1,Ya]}var sc=ve;function cc(t,e){var n=e(),r=ft({h:{__:n,v:e}}),a=r[0].h,i=r[1];return ve(function(){a.__=n,a.v=e,Mn(a.__,e())||i({h:a})},[t,n,e]),nt(function(){return Mn(a.__,a.v())||i({h:a}),t(function(){Mn(a.__,a.v())||i({h:a})})},[t]),n}var qa={useState:ft,useId:Hi,useReducer:Je,useEffect:nt,useLayoutEffect:ve,useInsertionEffect:sc,useTransition:oc,useDeferredValue:ic,useSyncExternalStore:cc,startTransition:Ya,useRef:Ii,useImperativeHandle:Li,useMemo:Qe,useCallback:zi,useContext:tn,useDebugValue:Bi,version:"17.0.2",Children:Rs,render:Vs,hydrate:Gs,unmountComponentAtNode:tc,createPortal:Hs,createElement:Z,createContext:Ve,createFactory:Js,cloneElement:Qs,createRef:si,Fragment:J,isValidElement:Wa,findDOMNode:ec,Component:G,PureComponent:Dn,memo:Ts,forwardRef:Ds,flushSync:rc,unstable_batchedUpdates:nc,StrictMode:ac,Suspense:Be,SuspenseList:re,lazy:Ls,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Zs};function Va(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function gt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Va(Object(n),!0).forEach(function(r){Rt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Va(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function He(t){return He=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},He(t)}function Rt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function lc(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function uc(t,e){if(t==null)return{};var n=lc(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function In(t){return fc(t)||_c(t)||mc(t)||dc()}function fc(t){if(Array.isArray(t))return Ln(t)}function _c(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function mc(t,e){if(t){if(typeof t=="string")return Ln(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ln(t,e)}}function Ln(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function dc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pc(t){var e,n=t.beat,r=t.fade,a=t.beatFade,i=t.bounce,o=t.shake,c=t.flash,l=t.spin,u=t.spinPulse,s=t.spinReverse,_=t.pulse,f=t.fixedWidth,m=t.inverse,y=t.border,A=t.listItem,w=t.flip,x=t.size,C=t.rotation,j=t.pull,D=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":c,"fa-spin":l,"fa-spin-reverse":s,"fa-spin-pulse":u,"fa-pulse":_,"fa-fw":f,"fa-inverse":m,"fa-border":y,"fa-li":A,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},Rt(e,"fa-".concat(x),typeof x<"u"&&x!==null),Rt(e,"fa-rotate-".concat(C),typeof C<"u"&&C!==null&&C!==0),Rt(e,"fa-pull-".concat(j),typeof j<"u"&&j!==null),Rt(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(D).map(function(R){return D[R]?R:null}).filter(function(R){return R})}function gc(t){return t=t-0,t===t}function Ga(t){return gc(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var vc=["style"];function hc(t){return t.charAt(0).toUpperCase()+t.slice(1)}function bc(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=Ga(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?e[hc(a)]=i:e[a]=i,e},{})}function Ka(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ka(t,l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var s=e.attributes[u];switch(u){case"class":l.attrs.className=s,delete e.attributes.class;break;case"style":l.attrs.style=bc(s);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=s:l.attrs[Ga(u)]=s}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,c=uc(n,vc);return a.attrs.style=gt(gt({},a.attrs.style),o),t.apply(void 0,[e.tag,gt(gt({},a.attrs),c)].concat(In(r)))}var $a=!1;try{$a=!0}catch{}function yc(){if(!$a&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Xa(t){if(t&&He(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(jn.icon)return jn.icon(t);if(t===null)return null;if(t&&He(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function zn(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Rt({},t,e):{}}var st=qa.forwardRef(function(t,e){var n=t.icon,r=t.mask,a=t.symbol,i=t.className,o=t.title,c=t.titleId,l=t.maskId,u=Xa(n),s=zn("classes",[].concat(In(pc(t)),In(i.split(" ")))),_=zn("transform",typeof t.transform=="string"?jn.transform(t.transform):t.transform),f=zn("mask",Xa(r)),m=Cs(u,gt(gt(gt(gt({},s),_),f),{},{symbol:a,title:o,titleId:c,maskId:l}));if(!m)return yc("Could not find icon",u),null;var y=m.abstract,A={ref:e};return Object.keys(t).forEach(function(w){st.defaultProps.hasOwnProperty(w)||(A[w]=t[w])}),wc(y[0],A)});st.displayName="FontAwesomeIcon",st.propTypes={beat:k.bool,border:k.bool,beatFade:k.bool,bounce:k.bool,className:k.string,fade:k.bool,flash:k.bool,mask:k.oneOfType([k.object,k.array,k.string]),maskId:k.string,fixedWidth:k.bool,inverse:k.bool,flip:k.oneOf([!0,!1,"horizontal","vertical","both"]),icon:k.oneOfType([k.object,k.array,k.string]),listItem:k.bool,pull:k.oneOf(["right","left"]),pulse:k.bool,rotation:k.oneOf([0,90,180,270]),shake:k.bool,size:k.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:k.bool,spinPulse:k.bool,spinReverse:k.bool,symbol:k.oneOfType([k.bool,k.string]),title:k.string,titleId:k.string,transform:k.oneOfType([k.string,k.object]),swapOpacity:k.bool},st.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var wc=Ka.bind(null,qa.createElement);const kc="_root_1x97i_1",xc="_square_1x97i_147",Nc="_squareFilled_1x97i_252",Sc="_squareMoveable_1x97i_256",Cc="_blink_1x97i_1",Ac="_squareIndex_1x97i_279",Ec="_piece_1x97i_289",Oc="_pieceBlack_1x97i_290",Pc="_squareHighlighted_1x97i_301",jc="_squareSelected_1x97i_311",Tc="_pieceKingIcon_1x97i_334",V={root:kc,square:xc,squareFilled:Nc,squareMoveable:Sc,blink:Cc,squareIndex:Ac,piece:Ec,pieceBlack:Oc,squareHighlighted:Pc,squareSelected:jc,pieceKingIcon:Tc};var Mc=0;function d(t,e,n,r,a,i){var o,c,l={};for(c in e)c=="ref"?o=e[c]:l[c]=e[c];var u={type:t,props:l,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Mc,__source:a,__self:i};if(typeof t=="function"&&(o=t.defaultProps))for(c in o)l[c]===void 0&&(l[c]=o[c]);return b.vnode&&b.vnode(u),u}const Za=!1;function Dc({piece:t,index:e,highlighted:n,selected:r,selectedMoves:a,onMove:i,onSelect:o,onClearSelect:c}){if(t==null){const s=a.find(f=>f.end_square===e),_=[V.square,s?V.squareMoveable:"",n?V.squareHighlighted:""].join(" ");return d("div",{className:_,onClick:()=>{s?i(s):c()},children:Za})}const l=[V.square,V.squareFilled,r?V.squareSelected:"",n?V.squareHighlighted:""].join(" "),u=[V.piece,t.color===M.Black?V.pieceBlack:"",t.king?V.pieceKing:""].join(" ");return d("div",{className:l,onClick:()=>o(e),children:[d("div",{className:u,children:t.king&&d(st,{className:V.pieceKingIcon,icon:Vi})}),Za]})}var U=(t=>(t.INIT_BOARD="INIT_BOARD",t.START_GAME="START_GAME",t.END_GAME="END_GAME",t.UPDATE_GAME_SETTINGS="UPDATE_GAME_SETTINGS",t.UPDATE_PLAYER_MOVES="UPDATE_PLAYER_MOVES",t.MAKE_MOVE="MAKE_MOVE",t.ADVANCE_TURN="ADVANCE_TURN",t))(U||{});const Rc=(t,e)=>{var a;const{type:n,payload:r}=e;switch(n){case U.INIT_BOARD:return Ja();case U.START_GAME:return{...t,startTime:new Date,gameStarted:!0};case U.END_GAME:return{...t,endTime:new Date,gameStarted:!1};case U.UPDATE_GAME_SETTINGS:{const i=r,o=i.playerColor==M.White?M.Black:M.White;return{...t,gameSettings:{...i,opponentColor:o}}}case U.UPDATE_PLAYER_MOVES:{const i=((a=t.moveHistory.reverse().find(c=>c.moved_piece.color==t.gameSettings.playerColor))==null?void 0:a.get_forced_moves_js())||[];if(i.length>0)return{...t,playerMoves:i};const o=or.get_valid_moves_js(t.board,t.gameSettings.playerColor,t.gameSettings.checkersSettings);return{...t,playerMoves:o}}case U.MAKE_MOVE:{const i=r,o=t.board;o.handle_move(i);const c=gi.get_heuristic_value_js(o,t.gameSettings.checkersSettings);if((i.get_forced_moves_js()||[]).length>0)return{...t,moveUpdate:!t.moveUpdate,moveHistory:[...t.moveHistory,i]};const l=t.currentColorToMove==M.White?M.Black:M.White,u=t.currentTurn+1;return{...t,board:o,currentEvaluation:c,currentTurn:u,currentColorToMove:l,moveUpdate:!t.moveUpdate,moveHistory:[...t.moveHistory,i]}}default:throw new Error("Invalid board reducer action provided.")}},Ja=()=>({board:new lt,gameStarted:!1,moveHistory:[],playerMoves:[],currentTurn:0,currentEvaluation:0,currentColorToMove:M.White,startTime:new Date,endTime:new Date,moveUpdate:!1,gameSettings:{playerColor:M.White,opponentColor:M.Black,computerDepth:3,checkersSettings:vi.from_preset(pi.RussianVariation)}}),Qa=Ve(null),ti=Ve(()=>{}),Ic=({children:t})=>{const[e,n]=Je(Rc,Ja());return d(Qa.Provider,{value:e,children:d(ti.Provider,{value:n,children:t})})};function Ue(){return tn(Qa)}function Bn(){return tn(ti)}const ei=()=>({type:U.INIT_BOARD,payload:null}),Lc=()=>({type:U.START_GAME,payload:null}),zc=()=>({type:U.END_GAME,payload:null}),ae=t=>({type:U.UPDATE_GAME_SETTINGS,payload:t}),ni=()=>({type:U.UPDATE_PLAYER_MOVES,payload:null}),ri=t=>({type:U.MAKE_MOVE,payload:t});function Bc({onGameEnd:t}){const{board:e,playerMoves:n,gameStarted:r,moveHistory:a,moveUpdate:i,currentColorToMove:o,gameSettings:c}=Ue(),l=Bn(),[u,s]=ft([]),[_,f]=ft([]),[m,y]=ft(-1),[A,w]=ft([]);nt(()=>{l(ei()),s(x())},[]),nt(()=>{if(r&&o==c.opponentColor){D();return}},[r,o,i]),nt(()=>{l(ni()),s(x())},[r,a]),nt(()=>{w([])},[r]),nt(()=>{w([]),s(x())},[]),nt(()=>{o===c.playerColor?f(n.filter(N=>N.start_square===m)):f([])},[n,m]);const x=()=>{const N=Array.from(e.get_pieces());return c.playerColor===M.White?N.reverse():N},C=()=>{e.is_game_over(c.checkersSettings)&&(o===c.opponentColor&&or.get_valid_moves_js(e,c.opponentColor,c.checkersSettings).length>0&&e.get_pieces().find(N=>(N==null?void 0:N.color)===c.playerColor)||(t(),l(zc())))},j=N=>{w([]),f([]),y(N.end_square),l(ri(N)),l(ni()),C()},D=async()=>{f([]);const N=a.at(-1),z=(N==null?void 0:N.moved_piece.color)===c.opponentColor?N.to_json():null,vt=Date.now(),ii=await vr.getBestMove(e.to_json(),c.opponentColor,z,c);if(!ii)throw new Error("Something went wrong with getting the best opponent move.");const Hn=ut.from_json(ii),Sl=Date.now()-vt;await new Promise(Cl=>{setTimeout(()=>{Cl()},Math.max(0,450-Sl))}),w([...A,Hn.start_square,Hn.end_square]),l(ri(Hn)),C()},R=N=>{y(N)},B=()=>{f([]),y(-1)},W=u.map((N,z)=>{const vt=c.playerColor===M.White?63-z:z;return d(J,{children:d(Dc,{piece:N,index:vt,selectedMoves:_,highlighted:A.includes(vt),selected:m===vt,onMove:j,onSelect:R,onClearSelect:B},vt)})});return d("div",{className:qi.board,children:W})}const Hc="_overlay_40shz_1",Uc="_overlayCard_40shz_12",Fc="_overlayCardContent_40shz_24",Wc="_overlayCardFooter_40shz_30",Fe={overlay:Hc,overlayCard:Uc,overlayCardContent:Fc,overlayCardFooter:Wc};function ai({children:t,footerContent:e}){return d("div",{className:Fe.overlay,children:d("div",{className:Fe.overlayCard,children:[d("div",{className:Fe.overlayCardContent,children:t}),e&&d("div",{className:Fe.overlayCardFooter,children:e})]})})}const Yc="_root_9ct0f_1",qc="_content_9ct0f_147",Vc="_section_9ct0f_153",Gc="_sectionHeader_9ct0f_160",Kc="_sectionDescription_9ct0f_166",$c="_sectionContent_9ct0f_173",Xc="_sectionTitle_9ct0f_179",Zc="_colorDescriptor_9ct0f_186",Jc="_colorSelectButton_9ct0f_191",Qc="_colorSelectButtonBlack_9ct0f_202",tl="_colorSelectButtonRandom_9ct0f_206",el="_colorSelectButtonSelected_9ct0f_218",nl="_settingsGrid_9ct0f_223",rl="_settingsButton_9ct0f_232",al="_settingsButtonContent_9ct0f_247",il="_settingsButtonDescription_9ct0f_253",ol="_settingButtonIcon_9ct0f_258",sl="_difficultySlider_9ct0f_262",cl="_difficultySliderNumbers_9ct0f_266",ll="_difficultyGrid_9ct0f_275",ul="_difficultyNumber_9ct0f_286",fl="_difficultyNumberSelected_9ct0f_298",_l="_startButton_9ct0f_302",g={root:Yc,content:qc,section:Vc,sectionHeader:Gc,sectionDescription:Kc,sectionContent:$c,sectionTitle:Xc,colorDescriptor:Zc,colorSelectButton:Jc,colorSelectButtonBlack:Qc,colorSelectButtonRandom:tl,colorSelectButtonSelected:el,settingsGrid:nl,settingsButton:rl,settingsButtonContent:al,settingsButtonDescription:il,settingButtonIcon:ol,difficultySlider:sl,difficultySliderNumbers:cl,difficultyGrid:ll,difficultyNumber:ul,difficultyNumberSelected:fl,startButton:_l};function ml(){const{gameSettings:t,gameStarted:e}=Ue(),n=Bn(),[r,a]=ft([F.ForcedCapture,F.FlyingKings,F.RegularCaptureBackwards,F.PromotionMoveTermination]);nt(()=>{n(ae({...t,checkersSettings:r.reduce((u,s)=>u|=s,0)}))},[e,t.playerColor]);const i=()=>{t.playerColor===M.Empty&&n(ae({...t,playerColor:Math.floor(Math.random()*2+1)})),n(Lc())},o=u=>{n(ae({...t,playerColor:u}))},c=u=>{n(ae({...t,computerDepth:u}))},l=u=>{const s=r.includes(u)?r.filter(_=>_!==u):[...r,u];n(ae({...t,checkersSettings:s.reduce((_,f)=>_|=f,0)})),a(s)};return d(ai,{footerContent:d("button",{className:g.startButton,onClick:i,children:"Play"}),children:d("div",{className:g.content,children:[d("div",{className:g.section,children:[d("div",{className:g.sectionHeader,children:d("h3",{className:g.sectionTitle,children:"Player Color"})}),d("p",{className:g.sectionDescription,children:"White goes first. Black goes second. You know the drill. \u{1F62B}"}),d("div",{className:g.sectionContent,children:[d("button",{className:[g.colorSelectButton,t.playerColor===M.White&&g.colorSelectButtonSelected].join(" "),onClick:()=>o(M.White)}),d("button",{className:[g.colorSelectButton,g.colorSelectButtonRandom,t.playerColor===M.Empty&&g.colorSelectButtonSelected].join(" "),onClick:()=>o(M.Empty)}),d("button",{className:[g.colorSelectButton,g.colorSelectButtonBlack,t.playerColor===M.Black&&g.colorSelectButtonSelected].join(" "),onClick:()=>o(M.Black)})]}),d("div",{className:g.sectionContent,children:[d("div",{className:g.colorDescriptor,children:d("p",{className:g.sectionDescription,children:"White"})}),d("div",{className:g.colorDescriptor,children:d("p",{className:g.sectionDescription,children:"Random"})}),d("div",{className:g.colorDescriptor,children:d("p",{className:g.sectionDescription,children:"Black"})})]})]}),d("div",{className:g.section,children:[d("div",{className:g.sectionHeader,children:d("h3",{className:g.sectionTitle,children:"Opponent Difficulty"})}),d("p",{className:g.sectionDescription,children:"The difficulty slider determines the search-depth for the alpha-beta search algorithm. Larger size may take more time for computation, but usually not more than 15 seconds at a depth of 9."}),d("div",{className:g.difficultyGrid,children:[d("div",{className:g.section,children:[d("div",{className:g.difficultySliderNumbers,children:Array.from({length:3}).map((u,s)=>d("span",{className:[g.difficultyNumber,s+1===t.computerDepth?g.difficultyNumberSelected:""].join(" "),onClick:()=>c(s+1),children:s+1}))}),d("div",{className:g.colorDescriptor,children:d("p",{className:g.sectionDescription,children:"Easy"})})]}),d("div",{className:g.section,children:[d("div",{className:g.difficultySliderNumbers,children:Array.from({length:3}).map((u,s)=>d("span",{className:[g.difficultyNumber,s+4===t.computerDepth?g.difficultyNumberSelected:""].join(" "),onClick:()=>c(s+4),children:s+4}))}),d("div",{className:g.colorDescriptor,children:d("p",{className:g.sectionDescription,children:"Mediocre"})})]}),d("div",{className:g.section,children:[d("div",{className:g.difficultySliderNumbers,children:Array.from({length:3}).map((u,s)=>d("span",{className:[g.difficultyNumber,s+7===t.computerDepth?g.difficultyNumberSelected:""].join(" "),onClick:()=>c(s+7),children:s+7}))}),d("div",{className:g.colorDescriptor,children:d("p",{className:g.sectionDescription,children:"Hard"})})]})]})]}),d("div",{className:g.section,children:[d("div",{className:g.sectionHeader,children:d("h3",{className:g.sectionTitle,children:"Game Rules"})}),d("p",{className:g.sectionDescription,children:"The rules of checkers can be changed to suit your play-style."}),d("div",{className:g.settingsGrid,children:[d("button",{className:g.settingsButton,onClick:()=>l(F.ForcedCapture),children:[d(st,{className:g.settingButtonIcon,icon:r.includes(F.ForcedCapture)?be:ye}),d("div",{className:g.settingsButtonContent,children:["Forced Captures",d("p",{className:g.settingsButtonDescription,children:"Captures are forced. You must take a capture that is presented to you."})]})]}),d("button",{className:g.settingsButton,onClick:()=>l(F.RegularCaptureBackwards),children:[d(st,{className:g.settingButtonIcon,icon:r.includes(F.RegularCaptureBackwards)?be:ye}),d("div",{className:g.settingsButtonContent,children:["Non-king Capture Backwards",d("p",{className:g.settingsButtonDescription,children:"Pieces that are not Kings can capture other pieces, even if it means going backwards."})]})]}),d("button",{className:g.settingsButton,onClick:()=>l(F.FlyingKings),children:[d(st,{className:g.settingButtonIcon,icon:r.includes(F.FlyingKings)?be:ye}),d("div",{className:g.settingsButtonContent,children:["Flying Kings",d("p",{className:g.settingsButtonDescription,children:"Kings can move along diagonals any number of squares."})]})]}),d("button",{className:g.settingsButton,onClick:()=>l(F.PromotionMoveTermination),children:[d(st,{className:g.settingButtonIcon,icon:r.includes(F.PromotionMoveTermination)?be:ye}),d("div",{className:g.settingsButtonContent,children:["Promotion Move Termination",d("p",{className:g.settingsButtonDescription,children:"Upon promoting to a king your move will end even if you were chaining captures."})]})]})]})]})]})})}const dl="_root_hwaef_1",pl="_closeButton_hwaef_147",gl="_stats_hwaef_164",vl="_content_hwaef_170",hl="_heading_hwaef_176",bl="_description_hwaef_183",yl="_section_hwaef_184",wl="_sectionHeading_hwaef_193",$={root:dl,closeButton:pl,stats:gl,content:vl,heading:hl,description:bl,section:yl,sectionHeading:wl};function kl({onClose:t}){const{currentEvaluation:e,currentTurn:n,startTime:r,endTime:a,gameSettings:i}=Ue(),o=e>0?M.White:M.Black;return d(ai,{footerContent:d("button",{className:$.closeButton,onClick:t,children:"Play Again"}),children:d("div",{className:$.content,children:[d("h1",{className:$.heading,children:o===i.playerColor?"You have won! \u{1F389}":"You lost \u{1F916}"}),d("div",{className:$.stats,children:[d("div",{className:$.section,children:[d("div",{className:$.sectionHeading,children:"Score"}),o===i.playerColor?Math.abs(e):-Math.abs(e)]}),d("div",{className:$.section,children:[d("div",{className:$.sectionHeading,children:"Turn Count"}),n]}),d("div",{className:$.section,children:[d("div",{className:$.sectionHeading,children:"Time Taken"}),new Date(a.getTime()-r.getTime()).toISOString().slice(14,19)]})]})]})})}function xl(){const[t,e]=ft(!1),{gameStarted:n}=Ue(),r=Bn(),a=()=>{e(!1),r(ei())},i=()=>{e(!0)};return d("main",{className:hr.main,children:[d("div",{class:hr.board,children:d(Bc,{onGameEnd:i})}),!t&&!n&&d(ml,{}),t&&d(kl,{onClose:a})]})}await sr(),await vr.initWasm();const Nl=document.getElementById("root");Ct(d(Ic,{children:d(xl,{})}),Nl)})();
