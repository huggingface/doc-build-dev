import{S as wh,i as Lh,s as xh,e as n,k as l,w as v,t as r,M as $h,c as s,d as t,m as d,a,x as y,h as i,b as c,F as e,g as h,y as T,q as b,o as M,B as w,v as zh}from"../../chunks/vendor-6b77c823.js";import{T as Jt}from"../../chunks/Tip-39098574.js";import{D as C}from"../../chunks/Docstring-abef54e3.js";import{C as mn}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ue}from"../../chunks/IconCopyLink-7a11ce68.js";function Xh(I){let p,x,f,k,L;return{c(){p=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),k=r("Module"),L=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var g=a(p);x=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var $=a(f);k=i($,"Module"),$.forEach(t),L=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(_,g){h(_,p,g),e(p,x),e(p,f),e(f,k),e(p,L)},d(_){_&&t(p)}}}function Gh(I){let p,x,f,k,L;return{c(){p=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),k=r("Module"),L=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var g=a(p);x=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var $=a(f);k=i($,"Module"),$.forEach(t),L=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(_,g){h(_,p,g),e(p,x),e(p,f),e(f,k),e(p,L)},d(_){_&&t(p)}}}function Fh(I){let p,x,f,k,L,_,g,$,Fe,ce,z,ee,B,te,Ee,R,qe,Le,S,V,oe,Te,E,q,pe,ne,xe,he,H,Ce,$e,F,Pe,A,Ae,je,j,Oe,De,W,J,P,be;return{c(){p=n("p"),x=r("TF 2.0 models accepts two formats as inputs:"),f=l(),k=n("ul"),L=n("li"),_=r("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),$=n("li"),Fe=r("having all inputs as a list, tuple or dict in the first positional arguments."),ce=l(),z=n("p"),ee=r("This second option is useful when using "),B=n("code"),te=r("tf.keras.Model.fit"),Ee=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),qe=r("model(inputs)"),Le=r("."),S=l(),V=n("p"),oe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Te=l(),E=n("ul"),q=n("li"),pe=r("a single Tensor with "),ne=n("code"),xe=r("input_ids"),he=r(" only and nothing else: "),H=n("code"),Ce=r("model(input_ids)"),$e=l(),F=n("li"),Pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=n("code"),Ae=r("model([input_ids, attention_mask])"),je=r(" or "),j=n("code"),Oe=r("model([input_ids, attention_mask, token_type_ids])"),De=l(),W=n("li"),J=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),P=n("code"),be=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){p=s(m,"P",{});var X=a(p);x=i(X,"TF 2.0 models accepts two formats as inputs:"),X.forEach(t),f=d(m),k=s(m,"UL",{});var se=a(k);L=s(se,"LI",{});var at=a(L);_=i(at,"having all inputs as keyword arguments (like PyTorch models), or"),at.forEach(t),g=d(se),$=s(se,"LI",{});var Be=a($);Fe=i(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),se.forEach(t),ce=d(m),z=s(m,"P",{});var G=a(z);ee=i(G,"This second option is useful when using "),B=s(G,"CODE",{});var Me=a(B);te=i(Me,"tf.keras.Model.fit"),Me.forEach(t),Ee=i(G,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=s(G,"CODE",{});var rt=a(R);qe=i(rt,"model(inputs)"),rt.forEach(t),Le=i(G,"."),G.forEach(t),S=d(m),V=s(m,"P",{});var ae=a(V);oe=i(ae,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae.forEach(t),Te=d(m),E=s(m,"UL",{});var K=a(E);q=s(K,"LI",{});var U=a(q);pe=i(U,"a single Tensor with "),ne=s(U,"CODE",{});var it=a(ne);xe=i(it,"input_ids"),it.forEach(t),he=i(U," only and nothing else: "),H=s(U,"CODE",{});var lt=a(H);Ce=i(lt,"model(input_ids)"),lt.forEach(t),U.forEach(t),$e=d(K),F=s(K,"LI",{});var O=a(F);Pe=i(O,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=s(O,"CODE",{});var dt=a(A);Ae=i(dt,"model([input_ids, attention_mask])"),dt.forEach(t),je=i(O," or "),j=s(O,"CODE",{});var ct=a(j);Oe=i(ct,"model([input_ids, attention_mask, token_type_ids])"),ct.forEach(t),O.forEach(t),De=d(K),W=s(K,"LI",{});var Ne=a(W);J=i(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),P=s(Ne,"CODE",{});var re=a(P);be=i(re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),re.forEach(t),Ne.forEach(t),K.forEach(t)},m(m,X){h(m,p,X),e(p,x),h(m,f,X),h(m,k,X),e(k,L),e(L,_),e(k,g),e(k,$),e($,Fe),h(m,ce,X),h(m,z,X),e(z,ee),e(z,B),e(B,te),e(z,Ee),e(z,R),e(R,qe),e(z,Le),h(m,S,X),h(m,V,X),e(V,oe),h(m,Te,X),h(m,E,X),e(E,q),e(q,pe),e(q,ne),e(ne,xe),e(q,he),e(q,H),e(H,Ce),e(E,$e),e(E,F),e(F,Pe),e(F,A),e(A,Ae),e(F,je),e(F,j),e(j,Oe),e(E,De),e(E,W),e(W,J),e(W,P),e(P,be)},d(m){m&&t(p),m&&t(f),m&&t(k),m&&t(ce),m&&t(z),m&&t(S),m&&t(V),m&&t(Te),m&&t(E)}}}function Eh(I){let p,x,f,k,L;return{c(){p=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),k=r("Module"),L=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var g=a(p);x=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var $=a(f);k=i($,"Module"),$.forEach(t),L=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(_,g){h(_,p,g),e(p,x),e(p,f),e(f,k),e(p,L)},d(_){_&&t(p)}}}function qh(I){let p,x,f,k,L,_,g,$,Fe,ce,z,ee,B,te,Ee,R,qe,Le,S,V,oe,Te,E,q,pe,ne,xe,he,H,Ce,$e,F,Pe,A,Ae,je,j,Oe,De,W,J,P,be;return{c(){p=n("p"),x=r("TF 2.0 models accepts two formats as inputs:"),f=l(),k=n("ul"),L=n("li"),_=r("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),$=n("li"),Fe=r("having all inputs as a list, tuple or dict in the first positional arguments."),ce=l(),z=n("p"),ee=r("This second option is useful when using "),B=n("code"),te=r("tf.keras.Model.fit"),Ee=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),qe=r("model(inputs)"),Le=r("."),S=l(),V=n("p"),oe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Te=l(),E=n("ul"),q=n("li"),pe=r("a single Tensor with "),ne=n("code"),xe=r("input_ids"),he=r(" only and nothing else: "),H=n("code"),Ce=r("model(input_ids)"),$e=l(),F=n("li"),Pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=n("code"),Ae=r("model([input_ids, attention_mask])"),je=r(" or "),j=n("code"),Oe=r("model([input_ids, attention_mask, token_type_ids])"),De=l(),W=n("li"),J=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),P=n("code"),be=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){p=s(m,"P",{});var X=a(p);x=i(X,"TF 2.0 models accepts two formats as inputs:"),X.forEach(t),f=d(m),k=s(m,"UL",{});var se=a(k);L=s(se,"LI",{});var at=a(L);_=i(at,"having all inputs as keyword arguments (like PyTorch models), or"),at.forEach(t),g=d(se),$=s(se,"LI",{});var Be=a($);Fe=i(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),se.forEach(t),ce=d(m),z=s(m,"P",{});var G=a(z);ee=i(G,"This second option is useful when using "),B=s(G,"CODE",{});var Me=a(B);te=i(Me,"tf.keras.Model.fit"),Me.forEach(t),Ee=i(G,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=s(G,"CODE",{});var rt=a(R);qe=i(rt,"model(inputs)"),rt.forEach(t),Le=i(G,"."),G.forEach(t),S=d(m),V=s(m,"P",{});var ae=a(V);oe=i(ae,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae.forEach(t),Te=d(m),E=s(m,"UL",{});var K=a(E);q=s(K,"LI",{});var U=a(q);pe=i(U,"a single Tensor with "),ne=s(U,"CODE",{});var it=a(ne);xe=i(it,"input_ids"),it.forEach(t),he=i(U," only and nothing else: "),H=s(U,"CODE",{});var lt=a(H);Ce=i(lt,"model(input_ids)"),lt.forEach(t),U.forEach(t),$e=d(K),F=s(K,"LI",{});var O=a(F);Pe=i(O,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=s(O,"CODE",{});var dt=a(A);Ae=i(dt,"model([input_ids, attention_mask])"),dt.forEach(t),je=i(O," or "),j=s(O,"CODE",{});var ct=a(j);Oe=i(ct,"model([input_ids, attention_mask, token_type_ids])"),ct.forEach(t),O.forEach(t),De=d(K),W=s(K,"LI",{});var Ne=a(W);J=i(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),P=s(Ne,"CODE",{});var re=a(P);be=i(re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),re.forEach(t),Ne.forEach(t),K.forEach(t)},m(m,X){h(m,p,X),e(p,x),h(m,f,X),h(m,k,X),e(k,L),e(L,_),e(k,g),e(k,$),e($,Fe),h(m,ce,X),h(m,z,X),e(z,ee),e(z,B),e(B,te),e(z,Ee),e(z,R),e(R,qe),e(z,Le),h(m,S,X),h(m,V,X),e(V,oe),h(m,Te,X),h(m,E,X),e(E,q),e(q,pe),e(q,ne),e(ne,xe),e(q,he),e(q,H),e(H,Ce),e(E,$e),e(E,F),e(F,Pe),e(F,A),e(A,Ae),e(F,je),e(F,j),e(j,Oe),e(E,De),e(E,W),e(W,J),e(W,P),e(P,be)},d(m){m&&t(p),m&&t(f),m&&t(k),m&&t(ce),m&&t(z),m&&t(S),m&&t(V),m&&t(Te),m&&t(E)}}}function Ch(I){let p,x,f,k,L;return{c(){p=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),k=r("Module"),L=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var g=a(p);x=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var $=a(f);k=i($,"Module"),$.forEach(t),L=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(_,g){h(_,p,g),e(p,x),e(p,f),e(f,k),e(p,L)},d(_){_&&t(p)}}}function Ph(I){let p,x,f,k,L;return{c(){p=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),k=r("Module"),L=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var g=a(p);x=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var $=a(f);k=i($,"Module"),$.forEach(t),L=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(_,g){h(_,p,g),e(p,x),e(p,f),e(f,k),e(p,L)},d(_){_&&t(p)}}}function Ah(I){let p,x,f,k,L;return{c(){p=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),k=r("Module"),L=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var g=a(p);x=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var $=a(f);k=i($,"Module"),$.forEach(t),L=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(_,g){h(_,p,g),e(p,x),e(p,f),e(f,k),e(p,L)},d(_){_&&t(p)}}}function jh(I){let p,x,f,k,L,_,g,$,Fe,ce,z,ee,B,te,Ee,R,qe,Le,S,V,oe,Te,E,q,pe,ne,xe,he,H,Ce,$e,F,Pe,A,Ae,je,j,Oe,De,W,J,P,be,m,X,se,at,Be,G,Me,rt,ae,K,U,it,lt,O,dt,ct,Ne,re,er,fn,tr,or,gn,nr,sr,ar,Jn,rr,ir,Kt,ia,pt,Lt,Kn,Zt,lr,Zn,dr,la,D,Qt,cr,Ie,pr,_n,hr,ur,kn,mr,fr,Yt,gr,_r,kr,eo,vr,vn,yr,Tr,br,Re,to,Mr,Qn,wr,Lr,oo,yn,xr,Yn,$r,zr,Tn,Xr,es,Gr,Fr,xt,no,Er,so,qr,ts,Cr,Pr,Ar,$t,ao,jr,os,Or,Dr,bn,ro,da,ht,zt,ns,io,Nr,ss,Ir,ca,ie,lo,Sr,we,Wr,as,Ur,Br,Mn,Rr,Vr,wn,Hr,Jr,co,Kr,Zr,Qr,po,Yr,Ln,ei,ti,oi,Ve,ho,ni,rs,si,ai,uo,xn,ri,is,ii,li,$n,di,ls,ci,pi,Xt,mo,hi,ds,ui,pa,ut,Gt,cs,fo,mi,ps,fi,ha,le,go,gi,_o,_i,zn,ki,vi,yi,ko,Ti,vo,bi,Mi,wi,Ft,Li,hs,xi,$i,us,zi,Xi,ue,yo,Gi,mt,Fi,Xn,Ei,qi,ms,Ci,Pi,Ai,Et,ji,fs,Oi,Di,To,ua,ft,qt,gs,bo,Ni,_s,Ii,ma,de,Mo,Si,ks,Wi,Ui,wo,Bi,Gn,Ri,Vi,Hi,Lo,Ji,xo,Ki,Zi,Qi,me,$o,Yi,gt,el,Fn,tl,ol,vs,nl,sl,al,Ct,rl,ys,il,ll,zo,fa,_t,Pt,Ts,Xo,dl,bs,cl,ga,Z,Go,pl,Fo,hl,En,ul,ml,fl,Eo,gl,qo,_l,kl,vl,At,yl,jt,Tl,Ms,bl,Ml,ws,wl,Ll,fe,Co,xl,kt,$l,qn,zl,Xl,Ls,Gl,Fl,El,Ot,ql,xs,Cl,Pl,Po,_a,vt,Dt,$s,Ao,Al,zs,jl,ka,Q,jo,Ol,Xs,Dl,Nl,Oo,Il,Cn,Sl,Wl,Ul,Do,Bl,No,Rl,Vl,Hl,Nt,Jl,ge,Io,Kl,yt,Zl,Pn,Ql,Yl,Gs,ed,td,od,It,nd,Fs,sd,ad,So,va,Tt,St,Es,Wo,rd,qs,id,ya,Y,Uo,ld,Bo,dd,An,cd,pd,hd,Ro,ud,Vo,md,fd,gd,Cs,_d,kd,Se,Ps,Ho,vd,yd,As,Jo,Td,bd,js,Ko,Md,wd,Os,Zo,Ld,xd,_e,Qo,$d,bt,zd,Ds,Xd,Gd,Ns,Fd,Ed,qd,Wt,Cd,Is,Pd,Ad,Yo,Ta,Mt,Ut,Ss,en,jd,Ws,Od,ba,N,tn,Dd,Us,Nd,Id,on,Sd,jn,Wd,Ud,Bd,nn,Rd,sn,Vd,Hd,Jd,Bs,Kd,Zd,We,Rs,an,Qd,Yd,Vs,rn,ec,tc,Hs,ln,oc,nc,Js,dn,sc,ac,ke,cn,rc,wt,ic,Ks,lc,dc,Zs,cc,pc,hc,Bt,uc,Qs,mc,fc,pn,Ma;return _=new Ue({}),te=new Ue({}),m=new Ue({}),Me=new C({props:{name:"class transformers.XGLMConfig",anchor:"transformers.XGLMConfig",parameters:[{name:"vocab_size",val:" = 256008"},{name:"max_position_embeddings",val:" = 2048"},{name:"d_model",val:" = 1024"},{name:"ffn_dim",val:" = 4096"},{name:"num_layers",val:" = 24"},{name:"attention_heads",val:" = 16"},{name:"activation_function",val:" = 'gelu'"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"layerdrop",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"scale_embedding",val:" = True"},{name:"use_cache",val:" = True"},{name:"decoder_start_token_id",val:" = 2"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16543/src/transformers/models/xglm/configuration_xglm.py#L29",parametersDescription:[{anchor:"transformers.XGLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256008) &#x2014;
Vocabulary size of the XGLM model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16543/en/model_doc/xglm#transformers.XGLMModel">XGLMModel</a> or <a href="/docs/transformers/pr_16543/en/model_doc/xglm#transformers.FlaxXGLMModel">FlaxXGLMModel</a>.`,name:"vocab_size"},{anchor:"transformers.XGLMConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.XGLMConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimension of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.XGLMConfig.ffn_dim",description:`<strong>ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"ffn_dim"},{anchor:"transformers.XGLMConfig.num_layers",description:`<strong>num_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of hidden layers Transformer decoder.`,name:"num_layers"},{anchor:"transformers.XGLMConfig.attention_heads",description:`<strong>attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"attention_heads"},{anchor:"transformers.XGLMConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.XGLMConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, dencoder, and pooler.`,name:"dropout"},{anchor:"transformers.XGLMConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.XGLMConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.
layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"activation_dropout"},{anchor:"transformers.XGLMConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.XGLMConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.XGLMConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}]}}),Kt=new mn({props:{code:`from transformers import XGLMModel, XGLMConfig

# Initializing a XGLM facebook/xglm-564M style configuration
configuration = XGLMConfig()

# Initializing a model from the facebook/xglm-564M style configuration
model = XGLMModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XGLMModel, XGLMConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a XGLM facebook/xglm-564M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = XGLMConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/xglm-564M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XGLMModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Zt=new Ue({}),Qt=new C({props:{name:"class transformers.XGLMTokenizer",anchor:"transformers.XGLMTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16543/src/transformers/models/xglm/tokenization_xglm.py#L43",parametersDescription:[{anchor:"transformers.XGLMTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.XGLMTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.XGLMTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.XGLMTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.XGLMTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.XGLMTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.XGLMTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.XGLMTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.XGLMTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.XGLMTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.XGLMTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}]}}),to=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XGLMTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16543/src/transformers/models/xglm/tokenization_xglm.py#L189",parametersDescription:[{anchor:"transformers.XGLMTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),no=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.XGLMTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16543/src/transformers/models/xglm/tokenization_xglm.py#L214",parametersDescription:[{anchor:"transformers.XGLMTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.XGLMTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ao=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XGLMTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16543/src/transformers/models/xglm/tokenization_xglm.py#L242",parametersDescription:[{anchor:"transformers.XGLMTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ro=new C({props:{name:"save_vocabulary",anchor:"transformers.XGLMTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16543/src/transformers/models/xglm/tokenization_xglm.py#L298"}}),io=new Ue({}),lo=new C({props:{name:"class transformers.XGLMTokenizerFast",anchor:"transformers.XGLMTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16543/src/transformers/models/xglm/tokenization_xglm_fast.py#L49",parametersDescription:[{anchor:"transformers.XGLMTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.XGLMTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.XGLMTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.XGLMTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.XGLMTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.XGLMTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.XGLMTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.XGLMTokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}]}}),ho=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XGLMTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16543/src/transformers/models/xglm/tokenization_xglm_fast.py#L139",parametersDescription:[{anchor:"transformers.XGLMTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),mo=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XGLMTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16543/src/transformers/models/xglm/tokenization_xglm_fast.py#L164",parametersDescription:[{anchor:"transformers.XGLMTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fo=new Ue({}),go=new C({props:{name:"class transformers.XGLMModel",anchor:"transformers.XGLMModel",parameters:[{name:"config",val:": XGLMConfig"},{name:"embed_tokens",val:": typing.Optional[torch.nn.modules.sparse.Embedding] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16543/src/transformers/models/xglm/modeling_xglm.py#L530",parametersDescription:[{anchor:"transformers.XGLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16543/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16543/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.
config &#x2014; XGLMConfig`,name:"config"},{anchor:"transformers.XGLMModel.embed_tokens",description:"<strong>embed_tokens</strong> (nn.Embedding) &#x2014; output embedding",name:"embed_tokens"}]}}),yo=new C({props:{name:"forward",anchor:"transformers.XGLMModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16543/src/transformers/models/xglm/modeling_xglm.py#L588",parametersDescription:[{anchor:"transformers.XGLMModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16543/en/model_doc/xglm#transformers.XGLMTokenizer">XGLMTokenizer</a>. See <a href="/docs/transformers/pr_16543/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XGLMModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XGLMModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XGLMModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>input_ids</code> (those that don&#x2019;t
have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.XGLMModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. If
<code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>). This is useful if you want more control over how to convert <code>input_ids</code> indices into
associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XGLMModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.XGLMModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XGLMModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XGLMModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16543/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.</p>
<p>Args &#x2014;
input_ids (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>):
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16543/en/model_doc/xglm#transformers.XGLMTokenizer">~XGLMTokenizer</a>. See <a href="/docs/transformers/pr_16543/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>
attention_mask (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>):
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>
encoder_hidden_states (<code>torch.FloatTensor</code> of shape <code>(batch_size, encoder_sequence_length, hidden_size)</code>, <em>optional</em>):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
of the decoder.
encoder_attention_mask (<code>torch.LongTensor</code> of shape <code>(batch_size, encoder_sequence_length)</code>, <em>optional</em>):
Mask to avoid performing cross-attention on padding tokens indices of encoder input_ids. Mask values
selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>
head_mask (<code>torch.Tensor</code> of shape <code>(num_layers, attention_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>
<p>cross_attn_head_mask (<code>torch.Tensor</code> of shape <code>(num_layers, attention_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>
<p>past_key_values (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>):
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of
shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing
<code>input_ids</code> you can choose to directly pass an embedded representation. This is useful if you want more
control over how to convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal
embedding lookup matrix.
output_attentions (<code>bool</code>, <em>optional</em>):
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.
output_hidden_states (<code>bool</code>, <em>optional</em>):
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.
return_dict (<code>bool</code>, <em>optional</em>):
Whether or not to return a <a href="/docs/transformers/pr_16543/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16543/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16543/en/model_doc/xglm#transformers.XGLMConfig"
>XGLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16543/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Et=new Jt({props:{$$slots:{default:[Xh]},$$scope:{ctx:I}}}),To=new mn({props:{code:`from transformers import XGLMTokenizer, XGLMModel
import torch

tokenizer = XGLMTokenizer.from_pretrained("facebook/xglm-564M")
model = XGLMModel.from_pretrained("facebook/xglm-564M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XGLMTokenizer, XGLMModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XGLMTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XGLMModel.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),bo=new Ue({}),Mo=new C({props:{name:"class transformers.XGLMForCausalLM",anchor:"transformers.XGLMForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16543/src/transformers/models/xglm/modeling_xglm.py#L816",parametersDescription:[{anchor:"transformers.XGLMForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16543/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16543/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),$o=new C({props:{name:"forward",anchor:"transformers.XGLMForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16543/src/transformers/models/xglm/modeling_xglm.py#L846",parametersDescription:[{anchor:"transformers.XGLMForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16543/en/model_doc/xglm#transformers.XGLMTokenizer">XGLMTokenizer</a>. See <a href="/docs/transformers/pr_16543/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XGLMForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XGLMForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XGLMForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>input_ids</code> (those that don&#x2019;t
have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.XGLMForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. If
<code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>). This is useful if you want more control over how to convert <code>input_ids</code> indices into
associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XGLMForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.XGLMForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XGLMForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XGLMForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16543/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XGLMForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16543/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16543/en/model_doc/xglm#transformers.XGLMConfig"
>XGLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key,
value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16543/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ct=new Jt({props:{$$slots:{default:[Gh]},$$scope:{ctx:I}}}),zo=new mn({props:{code:`import torch
from transformers import XGLMTokenizer, XGLMForCausalLM

tokenizer = XGLMTokenizer.from_pretrained("facebook/xglm-564M")
model = XGLMForCausalLM.from_pretrained("facebook/xglm-564M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XGLMTokenizer, XGLMForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XGLMTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XGLMForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Xo=new Ue({}),Go=new C({props:{name:"class transformers.TFXGLMModel",anchor:"transformers.TFXGLMModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16543/src/transformers/models/xglm/modeling_tf_xglm.py#L736",parametersDescription:[{anchor:"transformers.TFXGLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16543/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16543/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.
config &#x2014; XGLMConfig
embed_tokens &#x2014; [TFSharedEmbeddings]: output embedding`,name:"config"}]}}),At=new Jt({props:{$$slots:{default:[Fh]},$$scope:{ctx:I}}}),Co=new C({props:{name:"call",anchor:"transformers.TFXGLMModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:": typing.Any"}],source:"https://github.com/huggingface/transformers/blob/pr_16543/src/transformers/models/xglm/modeling_tf_xglm.py#L752",parametersDescription:[{anchor:"transformers.TFXGLMModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16543/en/model_doc/xglm#transformers.XGLMTokenizer">XGLMTokenizer</a>. See <a href="/docs/transformers/pr_16543/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXGLMModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXGLMModel.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, encoder_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention of
the decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFXGLMModel.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, encoder_sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing cross-attention on padding tokens indices of encoder input_ids. Mask values
selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.TFXGLMModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_layers, attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXGLMModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_layers, attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFXGLMModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.num_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFXGLMModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXGLMModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFXGLMModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXGLMModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXGLMModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16543/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXGLMModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16543/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16543/en/model_doc/xglm#transformers.XGLMConfig"
>XGLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16543/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ot=new Jt({props:{$$slots:{default:[Eh]},$$scope:{ctx:I}}}),Po=new mn({props:{code:`from transformers import XGLMTokenizer, TFXGLMModel
import tensorflow as tf

tokenizer = XGLMTokenizer.from_pretrained("facebook/xglm-564M")
model = TFXGLMModel.from_pretrained("facebook/xglm-564M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XGLMTokenizer, TFXGLMModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XGLMTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXGLMModel.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ao=new Ue({}),jo=new C({props:{name:"class transformers.TFXGLMForCausalLM",anchor:"transformers.TFXGLMForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16543/src/transformers/models/xglm/modeling_tf_xglm.py#L818",parametersDescription:[{anchor:"transformers.TFXGLMForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16543/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16543/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Nt=new Jt({props:{$$slots:{default:[qh]},$$scope:{ctx:I}}}),Io=new C({props:{name:"call",anchor:"transformers.TFXGLMForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:": typing.Any"}],source:"https://github.com/huggingface/transformers/blob/pr_16543/src/transformers/models/xglm/modeling_tf_xglm.py#L866",parametersDescription:[{anchor:"transformers.TFXGLMForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16543/en/model_doc/xglm#transformers.XGLMTokenizer">XGLMTokenizer</a>. See <a href="/docs/transformers/pr_16543/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXGLMForCausalLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXGLMForCausalLM.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, encoder_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention of
the decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFXGLMForCausalLM.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, encoder_sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing cross-attention on padding tokens indices of encoder input_ids. Mask values
selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.TFXGLMForCausalLM.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_layers, attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXGLMForCausalLM.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_layers, attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFXGLMForCausalLM.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.num_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFXGLMForCausalLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXGLMForCausalLM.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFXGLMForCausalLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXGLMForCausalLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXGLMForCausalLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16543/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXGLMForCausalLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXGLMForCausalLM.call.labels",description:`<strong>labels</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16543/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16543/en/model_doc/xglm#transformers.XGLMConfig"
>XGLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16543/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),It=new Jt({props:{$$slots:{default:[Ch]},$$scope:{ctx:I}}}),So=new mn({props:{code:`from transformers import XGLMTokenizer, TFXGLMForCausalLM
import tensorflow as tf

tokenizer = XGLMTokenizer.from_pretrained("facebook/xglm-564M")
model = TFXGLMForCausalLM.from_pretrained("facebook/xglm-564M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XGLMTokenizer, TFXGLMForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XGLMTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXGLMForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Wo=new Ue({}),Uo=new C({props:{name:"class transformers.FlaxXGLMModel",anchor:"transformers.FlaxXGLMModel",parameters:[{name:"config",val:": XGLMConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16543/src/transformers/models/xglm/modeling_flax_xglm.py#L691",parametersDescription:[{anchor:"transformers.FlaxXGLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16543/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16543/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxXGLMModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16543/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16543/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Qo=new C({props:{name:"__call__",anchor:"transformers.FlaxXGLMModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16543/src/transformers/models/xglm/modeling_flax_xglm.py#L613",parametersDescription:[{anchor:"transformers.FlaxXGLMModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16543/en/model_doc/xglm#transformers.XGLMTokenizer">~XGLMTokenizer</a>. See <a href="/docs/transformers/pr_16543/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxXGLMModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxXGLMModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxXGLMModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxXGLMModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxXGLMModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16543/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16543/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16543/en/model_doc/xglm#transformers.XGLMConfig"
>XGLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16543/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wt=new Jt({props:{$$slots:{default:[Ph]},$$scope:{ctx:I}}}),Yo=new mn({props:{code:`from transformers import XGLMTokenizer, FlaxXGLMModel

tokenizer = XGLMTokenizer.from_pretrained("facebook/xglm-564M")
model = FlaxXGLMModel.from_pretrained("facebook/xglm-564M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XGLMTokenizer, FlaxXGLMModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XGLMTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxXGLMModel.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),en=new Ue({}),tn=new C({props:{name:"class transformers.FlaxXGLMForCausalLM",anchor:"transformers.FlaxXGLMForCausalLM",parameters:[{name:"config",val:": XGLMConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16543/src/transformers/models/xglm/modeling_flax_xglm.py#L770",parametersDescription:[{anchor:"transformers.FlaxXGLMForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16543/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16543/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxXGLMForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16543/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16543/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),cn=new C({props:{name:"__call__",anchor:"transformers.FlaxXGLMForCausalLM.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16543/src/transformers/models/xglm/modeling_flax_xglm.py#L613",parametersDescription:[{anchor:"transformers.FlaxXGLMForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16543/en/model_doc/xglm#transformers.XGLMTokenizer">~XGLMTokenizer</a>. See <a href="/docs/transformers/pr_16543/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxXGLMForCausalLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxXGLMForCausalLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxXGLMForCausalLM.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxXGLMForCausalLM.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxXGLMForCausalLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16543/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16543/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16543/en/model_doc/xglm#transformers.XGLMConfig"
>XGLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key, value
states of the self-attention and the cross-attention layers if model is used in encoder-decoder setting.
Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16543/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bt=new Jt({props:{$$slots:{default:[Ah]},$$scope:{ctx:I}}}),pn=new mn({props:{code:`from transformers import XGLMTokenizer, FlaxXGLMForCausalLM

tokenizer = XGLMTokenizer.from_pretrained("facebook/xglm-564M")
model = FlaxXGLMForCausalLM.from_pretrained("facebook/xglm-564M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

# retrieve logts for next token
next_token_logits = outputs.logits[:, -1]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XGLMTokenizer, FlaxXGLMForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XGLMTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxXGLMForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){p=n("meta"),x=l(),f=n("h1"),k=n("a"),L=n("span"),v(_.$$.fragment),g=l(),$=n("span"),Fe=r("XGLM"),ce=l(),z=n("h2"),ee=n("a"),B=n("span"),v(te.$$.fragment),Ee=l(),R=n("span"),qe=r("Overview"),Le=l(),S=n("p"),V=r("The XGLM model was proposed in "),oe=n("a"),Te=r("Few-shot Learning with Multilingual Language Models"),E=r(`
by Xi Victoria Lin, Todor Mihaylov, Mikel Artetxe, Tianlu Wang, Shuohui Chen, Daniel Simig, Myle Ott, Naman Goyal,
Shruti Bhosale, Jingfei Du, Ramakanth Pasunuru, Sam Shleifer, Punit Singh Koura, Vishrav Chaudhary, Brian O\u2019Horo,
Jeff Wang, Luke Zettlemoyer, Zornitsa Kozareva, Mona Diab, Veselin Stoyanov, Xian Li.`),q=l(),pe=n("p"),ne=r("The abstract from the paper is the following:"),xe=l(),he=n("p"),H=n("em"),Ce=r(`Large-scale autoregressive language models such as GPT-3 are few-shot learners that can perform a wide range of language
tasks without fine-tuning. While these models are known to be able to jointly represent many different languages,
their training data is dominated by English, potentially limiting their cross-lingual generalization.
In this work, we train multilingual autoregressive language models on a balanced corpus covering a diverse set of languages,
and study their few- and zero-shot learning capabilities in a wide range of tasks. Our largest model with 7.5 billion parameters
sets new state of the art in few-shot learning in more than 20 representative languages, outperforming GPT-3 of comparable size
in multilingual commonsense reasoning (with +7.4% absolute accuracy improvement in 0-shot settings and +9.4% in 4-shot settings)
and natural language inference (+5.4% in each of 0-shot and 4-shot settings). On the FLORES-101 machine translation benchmark,
our model outperforms GPT-3 on 171 out of 182 translation directions with 32 training examples, while surpassing the
official supervised baseline in 45 directions. We present a detailed analysis of where the model succeeds and fails,
showing in particular that it enables cross-lingual in-context learning on some tasks, while there is still room for improvement
on surface form robustness and adaptation to tasks that do not have a natural cloze form. Finally, we evaluate our models
in social value tasks such as hate speech detection in five languages and find it has limitations similar to comparable sized GPT-3 models.`),$e=l(),F=n("p"),Pe=r("This model was contributed by "),A=n("a"),Ae=r("Suraj"),je=r(". The original code can be found "),j=n("a"),Oe=r("here"),De=r("."),W=l(),J=n("h2"),P=n("a"),be=n("span"),v(m.$$.fragment),X=l(),se=n("span"),at=r("XGLMConfig"),Be=l(),G=n("div"),v(Me.$$.fragment),rt=l(),ae=n("p"),K=r("This is the configuration class to store the configuration of a "),U=n("a"),it=r("XGLMModel"),lt=r(`. It is used to instantiate an XGLM
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the XGLM
`),O=n("a"),dt=r("facebook/xglm-564M"),ct=r(" architecture."),Ne=l(),re=n("p"),er=r("Configuration objects inherit from "),fn=n("a"),tr=r("PretrainedConfig"),or=r(` and can be used to control the model outputs. Read the
documentation from `),gn=n("a"),nr=r("PretrainedConfig"),sr=r(" for more information."),ar=l(),Jn=n("p"),rr=r("Example:"),ir=l(),v(Kt.$$.fragment),ia=l(),pt=n("h2"),Lt=n("a"),Kn=n("span"),v(Zt.$$.fragment),lr=l(),Zn=n("span"),dr=r("XGLMTokenizer"),la=l(),D=n("div"),v(Qt.$$.fragment),cr=l(),Ie=n("p"),pr=r("Adapted from "),_n=n("a"),hr=r("RobertaTokenizer"),ur=r(" and "),kn=n("a"),mr=r("XLNetTokenizer"),fr=r(`. Based on
`),Yt=n("a"),gr=r("SentencePiece"),_r=r("."),kr=l(),eo=n("p"),vr=r("This tokenizer inherits from "),vn=n("a"),yr=r("PreTrainedTokenizer"),Tr=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),br=l(),Re=n("div"),v(to.$$.fragment),Mr=l(),Qn=n("p"),wr=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),Lr=l(),oo=n("ul"),yn=n("li"),xr=r("single sequence: "),Yn=n("code"),$r=r("<s> X </s>"),zr=l(),Tn=n("li"),Xr=r("pair of sequences: "),es=n("code"),Gr=r("<s> A </s></s> B </s>"),Fr=l(),xt=n("div"),v(no.$$.fragment),Er=l(),so=n("p"),qr=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ts=n("code"),Cr=r("prepare_for_model"),Pr=r(" method."),Ar=l(),$t=n("div"),v(ao.$$.fragment),jr=l(),os=n("p"),Or=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),Dr=l(),bn=n("div"),v(ro.$$.fragment),da=l(),ht=n("h2"),zt=n("a"),ns=n("span"),v(io.$$.fragment),Nr=l(),ss=n("span"),Ir=r("XGLMTokenizerFast"),ca=l(),ie=n("div"),v(lo.$$.fragment),Sr=l(),we=n("p"),Wr=r("Construct a \u201Cfast\u201D XGLM tokenizer (backed by HuggingFace\u2019s "),as=n("em"),Ur=r("tokenizers"),Br=r(" library). Adapted from "),Mn=n("a"),Rr=r("RobertaTokenizer"),Vr=r(`
and `),wn=n("a"),Hr=r("XLNetTokenizer"),Jr=r(`. Based on
`),co=n("a"),Kr=r("BPE"),Zr=r("."),Qr=l(),po=n("p"),Yr=r("This tokenizer inherits from "),Ln=n("a"),ei=r("PreTrainedTokenizerFast"),ti=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),oi=l(),Ve=n("div"),v(ho.$$.fragment),ni=l(),rs=n("p"),si=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),ai=l(),uo=n("ul"),xn=n("li"),ri=r("single sequence: "),is=n("code"),ii=r("<s> X </s>"),li=l(),$n=n("li"),di=r("pair of sequences: "),ls=n("code"),ci=r("<s> A </s></s> B </s>"),pi=l(),Xt=n("div"),v(mo.$$.fragment),hi=l(),ds=n("p"),ui=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),pa=l(),ut=n("h2"),Gt=n("a"),cs=n("span"),v(fo.$$.fragment),mi=l(),ps=n("span"),fi=r("XGLMModel"),ha=l(),le=n("div"),v(go.$$.fragment),gi=l(),_o=n("p"),_i=r(`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),zn=n("a"),ki=r("PreTrainedModel"),vi=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yi=l(),ko=n("p"),Ti=r("This model is also a PyTorch "),vo=n("a"),bi=r("torch.nn.Module"),Mi=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wi=l(),Ft=n("p"),Li=r("Transformer decoder consisting of "),hs=n("em"),xi=r("config.num_layers"),$i=r(" layers. Each layer is a "),us=n("code"),zi=r("XGLMDecoderLayer"),Xi=l(),ue=n("div"),v(yo.$$.fragment),Gi=l(),mt=n("p"),Fi=r("The "),Xn=n("a"),Ei=r("XGLMModel"),qi=r(" forward method, overrides the "),ms=n("code"),Ci=r("__call__"),Pi=r(" special method."),Ai=l(),v(Et.$$.fragment),ji=l(),fs=n("p"),Oi=r("Example:"),Di=l(),v(To.$$.fragment),ua=l(),ft=n("h2"),qt=n("a"),gs=n("span"),v(bo.$$.fragment),Ni=l(),_s=n("span"),Ii=r("XGLMForCausalLM"),ma=l(),de=n("div"),v(Mo.$$.fragment),Si=l(),ks=n("p"),Wi=r(`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Ui=l(),wo=n("p"),Bi=r("This model inherits from "),Gn=n("a"),Ri=r("PreTrainedModel"),Vi=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hi=l(),Lo=n("p"),Ji=r("This model is also a PyTorch "),xo=n("a"),Ki=r("torch.nn.Module"),Zi=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qi=l(),me=n("div"),v($o.$$.fragment),Yi=l(),gt=n("p"),el=r("The "),Fn=n("a"),tl=r("XGLMForCausalLM"),ol=r(" forward method, overrides the "),vs=n("code"),nl=r("__call__"),sl=r(" special method."),al=l(),v(Ct.$$.fragment),rl=l(),ys=n("p"),il=r("Example:"),ll=l(),v(zo.$$.fragment),fa=l(),_t=n("h2"),Pt=n("a"),Ts=n("span"),v(Xo.$$.fragment),dl=l(),bs=n("span"),cl=r("TFXGLMModel"),ga=l(),Z=n("div"),v(Go.$$.fragment),pl=l(),Fo=n("p"),hl=r(`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),En=n("a"),ul=r("TFPreTrainedModel"),ml=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fl=l(),Eo=n("p"),gl=r("This model is also a "),qo=n("a"),_l=r("tf.keras.Model"),kl=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vl=l(),v(At.$$.fragment),yl=l(),jt=n("p"),Tl=r("Transformer decoder consisting of "),Ms=n("em"),bl=r("config.num_layers"),Ml=r(" layers. Each layer is a "),ws=n("code"),wl=r("TFXGLMDecoderLayer"),Ll=l(),fe=n("div"),v(Co.$$.fragment),xl=l(),kt=n("p"),$l=r("The "),qn=n("a"),zl=r("TFXGLMModel"),Xl=r(" forward method, overrides the "),Ls=n("code"),Gl=r("__call__"),Fl=r(" special method."),El=l(),v(Ot.$$.fragment),ql=l(),xs=n("p"),Cl=r("Example:"),Pl=l(),v(Po.$$.fragment),_a=l(),vt=n("h2"),Dt=n("a"),$s=n("span"),v(Ao.$$.fragment),Al=l(),zs=n("span"),jl=r("TFXGLMForCausalLM"),ka=l(),Q=n("div"),v(jo.$$.fragment),Ol=l(),Xs=n("p"),Dl=r(`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Nl=l(),Oo=n("p"),Il=r("This model inherits from "),Cn=n("a"),Sl=r("TFPreTrainedModel"),Wl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ul=l(),Do=n("p"),Bl=r("This model is also a "),No=n("a"),Rl=r("tf.keras.Model"),Vl=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hl=l(),v(Nt.$$.fragment),Jl=l(),ge=n("div"),v(Io.$$.fragment),Kl=l(),yt=n("p"),Zl=r("The "),Pn=n("a"),Ql=r("TFXGLMForCausalLM"),Yl=r(" forward method, overrides the "),Gs=n("code"),ed=r("__call__"),td=r(" special method."),od=l(),v(It.$$.fragment),nd=l(),Fs=n("p"),sd=r("Example:"),ad=l(),v(So.$$.fragment),va=l(),Tt=n("h2"),St=n("a"),Es=n("span"),v(Wo.$$.fragment),rd=l(),qs=n("span"),id=r("FlaxXGLMModel"),ya=l(),Y=n("div"),v(Uo.$$.fragment),ld=l(),Bo=n("p"),dd=r(`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),An=n("a"),cd=r("FlaxPreTrainedModel"),pd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hd=l(),Ro=n("p"),ud=r(`This model is also a Flax Linen
`),Vo=n("a"),md=r("flax.nn.Module"),fd=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),gd=l(),Cs=n("p"),_d=r("Finally, this model supports inherent JAX features such as:"),kd=l(),Se=n("ul"),Ps=n("li"),Ho=n("a"),vd=r("Just-In-Time (JIT) compilation"),yd=l(),As=n("li"),Jo=n("a"),Td=r("Automatic Differentiation"),bd=l(),js=n("li"),Ko=n("a"),Md=r("Vectorization"),wd=l(),Os=n("li"),Zo=n("a"),Ld=r("Parallelization"),xd=l(),_e=n("div"),v(Qo.$$.fragment),$d=l(),bt=n("p"),zd=r("The "),Ds=n("code"),Xd=r("FlaxXGLMPreTrainedModel"),Gd=r("forward method, overrides the "),Ns=n("code"),Fd=r("__call__"),Ed=r(" special method."),qd=l(),v(Wt.$$.fragment),Cd=l(),Is=n("p"),Pd=r("Example:"),Ad=l(),v(Yo.$$.fragment),Ta=l(),Mt=n("h2"),Ut=n("a"),Ss=n("span"),v(en.$$.fragment),jd=l(),Ws=n("span"),Od=r("FlaxXGLMForCausalLM"),ba=l(),N=n("div"),v(tn.$$.fragment),Dd=l(),Us=n("p"),Nd=r(`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Id=l(),on=n("p"),Sd=r("This model inherits from "),jn=n("a"),Wd=r("FlaxPreTrainedModel"),Ud=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bd=l(),nn=n("p"),Rd=r(`This model is also a Flax Linen
`),sn=n("a"),Vd=r("flax.nn.Module"),Hd=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Jd=l(),Bs=n("p"),Kd=r("Finally, this model supports inherent JAX features such as:"),Zd=l(),We=n("ul"),Rs=n("li"),an=n("a"),Qd=r("Just-In-Time (JIT) compilation"),Yd=l(),Vs=n("li"),rn=n("a"),ec=r("Automatic Differentiation"),tc=l(),Hs=n("li"),ln=n("a"),oc=r("Vectorization"),nc=l(),Js=n("li"),dn=n("a"),sc=r("Parallelization"),ac=l(),ke=n("div"),v(cn.$$.fragment),rc=l(),wt=n("p"),ic=r("The "),Ks=n("code"),lc=r("FlaxXGLMPreTrainedModel"),dc=r("forward method, overrides the "),Zs=n("code"),cc=r("__call__"),pc=r(" special method."),hc=l(),v(Bt.$$.fragment),uc=l(),Qs=n("p"),mc=r("Example:"),fc=l(),v(pn.$$.fragment),this.h()},l(o){const u=$h('[data-svelte="svelte-1phssyn"]',document.head);p=s(u,"META",{name:!0,content:!0}),u.forEach(t),x=d(o),f=s(o,"H1",{class:!0});var hn=a(f);k=s(hn,"A",{id:!0,class:!0,href:!0});var Ys=a(k);L=s(Ys,"SPAN",{});var ea=a(L);y(_.$$.fragment,ea),ea.forEach(t),Ys.forEach(t),g=d(hn),$=s(hn,"SPAN",{});var ta=a($);Fe=i(ta,"XGLM"),ta.forEach(t),hn.forEach(t),ce=d(o),z=s(o,"H2",{class:!0});var un=a(z);ee=s(un,"A",{id:!0,class:!0,href:!0});var oa=a(ee);B=s(oa,"SPAN",{});var na=a(B);y(te.$$.fragment,na),na.forEach(t),oa.forEach(t),Ee=d(un),R=s(un,"SPAN",{});var sa=a(R);qe=i(sa,"Overview"),sa.forEach(t),un.forEach(t),Le=d(o),S=s(o,"P",{});var wa=a(S);V=i(wa,"The XGLM model was proposed in "),oe=s(wa,"A",{href:!0,rel:!0});var yc=a(oe);Te=i(yc,"Few-shot Learning with Multilingual Language Models"),yc.forEach(t),E=i(wa,`
by Xi Victoria Lin, Todor Mihaylov, Mikel Artetxe, Tianlu Wang, Shuohui Chen, Daniel Simig, Myle Ott, Naman Goyal,
Shruti Bhosale, Jingfei Du, Ramakanth Pasunuru, Sam Shleifer, Punit Singh Koura, Vishrav Chaudhary, Brian O\u2019Horo,
Jeff Wang, Luke Zettlemoyer, Zornitsa Kozareva, Mona Diab, Veselin Stoyanov, Xian Li.`),wa.forEach(t),q=d(o),pe=s(o,"P",{});var Tc=a(pe);ne=i(Tc,"The abstract from the paper is the following:"),Tc.forEach(t),xe=d(o),he=s(o,"P",{});var bc=a(he);H=s(bc,"EM",{});var Mc=a(H);Ce=i(Mc,`Large-scale autoregressive language models such as GPT-3 are few-shot learners that can perform a wide range of language
tasks without fine-tuning. While these models are known to be able to jointly represent many different languages,
their training data is dominated by English, potentially limiting their cross-lingual generalization.
In this work, we train multilingual autoregressive language models on a balanced corpus covering a diverse set of languages,
and study their few- and zero-shot learning capabilities in a wide range of tasks. Our largest model with 7.5 billion parameters
sets new state of the art in few-shot learning in more than 20 representative languages, outperforming GPT-3 of comparable size
in multilingual commonsense reasoning (with +7.4% absolute accuracy improvement in 0-shot settings and +9.4% in 4-shot settings)
and natural language inference (+5.4% in each of 0-shot and 4-shot settings). On the FLORES-101 machine translation benchmark,
our model outperforms GPT-3 on 171 out of 182 translation directions with 32 training examples, while surpassing the
official supervised baseline in 45 directions. We present a detailed analysis of where the model succeeds and fails,
showing in particular that it enables cross-lingual in-context learning on some tasks, while there is still room for improvement
on surface form robustness and adaptation to tasks that do not have a natural cloze form. Finally, we evaluate our models
in social value tasks such as hate speech detection in five languages and find it has limitations similar to comparable sized GPT-3 models.`),Mc.forEach(t),bc.forEach(t),$e=d(o),F=s(o,"P",{});var On=a(F);Pe=i(On,"This model was contributed by "),A=s(On,"A",{href:!0,rel:!0});var wc=a(A);Ae=i(wc,"Suraj"),wc.forEach(t),je=i(On,". The original code can be found "),j=s(On,"A",{href:!0,rel:!0});var Lc=a(j);Oe=i(Lc,"here"),Lc.forEach(t),De=i(On,"."),On.forEach(t),W=d(o),J=s(o,"H2",{class:!0});var La=a(J);P=s(La,"A",{id:!0,class:!0,href:!0});var xc=a(P);be=s(xc,"SPAN",{});var $c=a(be);y(m.$$.fragment,$c),$c.forEach(t),xc.forEach(t),X=d(La),se=s(La,"SPAN",{});var zc=a(se);at=i(zc,"XGLMConfig"),zc.forEach(t),La.forEach(t),Be=d(o),G=s(o,"DIV",{class:!0});var He=a(G);y(Me.$$.fragment,He),rt=d(He),ae=s(He,"P",{});var Dn=a(ae);K=i(Dn,"This is the configuration class to store the configuration of a "),U=s(Dn,"A",{href:!0});var Xc=a(U);it=i(Xc,"XGLMModel"),Xc.forEach(t),lt=i(Dn,`. It is used to instantiate an XGLM
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the XGLM
`),O=s(Dn,"A",{href:!0,rel:!0});var Gc=a(O);dt=i(Gc,"facebook/xglm-564M"),Gc.forEach(t),ct=i(Dn," architecture."),Dn.forEach(t),Ne=d(He),re=s(He,"P",{});var Nn=a(re);er=i(Nn,"Configuration objects inherit from "),fn=s(Nn,"A",{href:!0});var Fc=a(fn);tr=i(Fc,"PretrainedConfig"),Fc.forEach(t),or=i(Nn,` and can be used to control the model outputs. Read the
documentation from `),gn=s(Nn,"A",{href:!0});var Ec=a(gn);nr=i(Ec,"PretrainedConfig"),Ec.forEach(t),sr=i(Nn," for more information."),Nn.forEach(t),ar=d(He),Jn=s(He,"P",{});var qc=a(Jn);rr=i(qc,"Example:"),qc.forEach(t),ir=d(He),y(Kt.$$.fragment,He),He.forEach(t),ia=d(o),pt=s(o,"H2",{class:!0});var xa=a(pt);Lt=s(xa,"A",{id:!0,class:!0,href:!0});var Cc=a(Lt);Kn=s(Cc,"SPAN",{});var Pc=a(Kn);y(Zt.$$.fragment,Pc),Pc.forEach(t),Cc.forEach(t),lr=d(xa),Zn=s(xa,"SPAN",{});var Ac=a(Zn);dr=i(Ac,"XGLMTokenizer"),Ac.forEach(t),xa.forEach(t),la=d(o),D=s(o,"DIV",{class:!0});var ve=a(D);y(Qt.$$.fragment,ve),cr=d(ve),Ie=s(ve,"P",{});var Rt=a(Ie);pr=i(Rt,"Adapted from "),_n=s(Rt,"A",{href:!0});var jc=a(_n);hr=i(jc,"RobertaTokenizer"),jc.forEach(t),ur=i(Rt," and "),kn=s(Rt,"A",{href:!0});var Oc=a(kn);mr=i(Oc,"XLNetTokenizer"),Oc.forEach(t),fr=i(Rt,`. Based on
`),Yt=s(Rt,"A",{href:!0,rel:!0});var Dc=a(Yt);gr=i(Dc,"SentencePiece"),Dc.forEach(t),_r=i(Rt,"."),Rt.forEach(t),kr=d(ve),eo=s(ve,"P",{});var $a=a(eo);vr=i($a,"This tokenizer inherits from "),vn=s($a,"A",{href:!0});var Nc=a(vn);yr=i(Nc,"PreTrainedTokenizer"),Nc.forEach(t),Tr=i($a,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),$a.forEach(t),br=d(ve),Re=s(ve,"DIV",{class:!0});var In=a(Re);y(to.$$.fragment,In),Mr=d(In),Qn=s(In,"P",{});var Ic=a(Qn);wr=i(Ic,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),Ic.forEach(t),Lr=d(In),oo=s(In,"UL",{});var za=a(oo);yn=s(za,"LI",{});var gc=a(yn);xr=i(gc,"single sequence: "),Yn=s(gc,"CODE",{});var Sc=a(Yn);$r=i(Sc,"<s> X </s>"),Sc.forEach(t),gc.forEach(t),zr=d(za),Tn=s(za,"LI",{});var _c=a(Tn);Xr=i(_c,"pair of sequences: "),es=s(_c,"CODE",{});var Wc=a(es);Gr=i(Wc,"<s> A </s></s> B </s>"),Wc.forEach(t),_c.forEach(t),za.forEach(t),In.forEach(t),Fr=d(ve),xt=s(ve,"DIV",{class:!0});var Xa=a(xt);y(no.$$.fragment,Xa),Er=d(Xa),so=s(Xa,"P",{});var Ga=a(so);qr=i(Ga,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ts=s(Ga,"CODE",{});var Uc=a(ts);Cr=i(Uc,"prepare_for_model"),Uc.forEach(t),Pr=i(Ga," method."),Ga.forEach(t),Xa.forEach(t),Ar=d(ve),$t=s(ve,"DIV",{class:!0});var Fa=a($t);y(ao.$$.fragment,Fa),jr=d(Fa),os=s(Fa,"P",{});var Bc=a(os);Or=i(Bc,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),Bc.forEach(t),Fa.forEach(t),Dr=d(ve),bn=s(ve,"DIV",{class:!0});var Rc=a(bn);y(ro.$$.fragment,Rc),Rc.forEach(t),ve.forEach(t),da=d(o),ht=s(o,"H2",{class:!0});var Ea=a(ht);zt=s(Ea,"A",{id:!0,class:!0,href:!0});var Vc=a(zt);ns=s(Vc,"SPAN",{});var Hc=a(ns);y(io.$$.fragment,Hc),Hc.forEach(t),Vc.forEach(t),Nr=d(Ea),ss=s(Ea,"SPAN",{});var Jc=a(ss);Ir=i(Jc,"XGLMTokenizerFast"),Jc.forEach(t),Ea.forEach(t),ca=d(o),ie=s(o,"DIV",{class:!0});var Je=a(ie);y(lo.$$.fragment,Je),Sr=d(Je),we=s(Je,"P",{});var Ke=a(we);Wr=i(Ke,"Construct a \u201Cfast\u201D XGLM tokenizer (backed by HuggingFace\u2019s "),as=s(Ke,"EM",{});var Kc=a(as);Ur=i(Kc,"tokenizers"),Kc.forEach(t),Br=i(Ke," library). Adapted from "),Mn=s(Ke,"A",{href:!0});var Zc=a(Mn);Rr=i(Zc,"RobertaTokenizer"),Zc.forEach(t),Vr=i(Ke,`
and `),wn=s(Ke,"A",{href:!0});var Qc=a(wn);Hr=i(Qc,"XLNetTokenizer"),Qc.forEach(t),Jr=i(Ke,`. Based on
`),co=s(Ke,"A",{href:!0,rel:!0});var Yc=a(co);Kr=i(Yc,"BPE"),Yc.forEach(t),Zr=i(Ke,"."),Ke.forEach(t),Qr=d(Je),po=s(Je,"P",{});var qa=a(po);Yr=i(qa,"This tokenizer inherits from "),Ln=s(qa,"A",{href:!0});var ep=a(Ln);ei=i(ep,"PreTrainedTokenizerFast"),ep.forEach(t),ti=i(qa,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),qa.forEach(t),oi=d(Je),Ve=s(Je,"DIV",{class:!0});var Sn=a(Ve);y(ho.$$.fragment,Sn),ni=d(Sn),rs=s(Sn,"P",{});var tp=a(rs);si=i(tp,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),tp.forEach(t),ai=d(Sn),uo=s(Sn,"UL",{});var Ca=a(uo);xn=s(Ca,"LI",{});var kc=a(xn);ri=i(kc,"single sequence: "),is=s(kc,"CODE",{});var op=a(is);ii=i(op,"<s> X </s>"),op.forEach(t),kc.forEach(t),li=d(Ca),$n=s(Ca,"LI",{});var vc=a($n);di=i(vc,"pair of sequences: "),ls=s(vc,"CODE",{});var np=a(ls);ci=i(np,"<s> A </s></s> B </s>"),np.forEach(t),vc.forEach(t),Ca.forEach(t),Sn.forEach(t),pi=d(Je),Xt=s(Je,"DIV",{class:!0});var Pa=a(Xt);y(mo.$$.fragment,Pa),hi=d(Pa),ds=s(Pa,"P",{});var sp=a(ds);ui=i(sp,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),sp.forEach(t),Pa.forEach(t),Je.forEach(t),pa=d(o),ut=s(o,"H2",{class:!0});var Aa=a(ut);Gt=s(Aa,"A",{id:!0,class:!0,href:!0});var ap=a(Gt);cs=s(ap,"SPAN",{});var rp=a(cs);y(fo.$$.fragment,rp),rp.forEach(t),ap.forEach(t),mi=d(Aa),ps=s(Aa,"SPAN",{});var ip=a(ps);fi=i(ip,"XGLMModel"),ip.forEach(t),Aa.forEach(t),ha=d(o),le=s(o,"DIV",{class:!0});var Ze=a(le);y(go.$$.fragment,Ze),gi=d(Ze),_o=s(Ze,"P",{});var ja=a(_o);_i=i(ja,`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),zn=s(ja,"A",{href:!0});var lp=a(zn);ki=i(lp,"PreTrainedModel"),lp.forEach(t),vi=i(ja,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ja.forEach(t),yi=d(Ze),ko=s(Ze,"P",{});var Oa=a(ko);Ti=i(Oa,"This model is also a PyTorch "),vo=s(Oa,"A",{href:!0,rel:!0});var dp=a(vo);bi=i(dp,"torch.nn.Module"),dp.forEach(t),Mi=i(Oa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Oa.forEach(t),wi=d(Ze),Ft=s(Ze,"P",{});var aa=a(Ft);Li=i(aa,"Transformer decoder consisting of "),hs=s(aa,"EM",{});var cp=a(hs);xi=i(cp,"config.num_layers"),cp.forEach(t),$i=i(aa," layers. Each layer is a "),us=s(aa,"CODE",{});var pp=a(us);zi=i(pp,"XGLMDecoderLayer"),pp.forEach(t),aa.forEach(t),Xi=d(Ze),ue=s(Ze,"DIV",{class:!0});var Qe=a(ue);y(yo.$$.fragment,Qe),Gi=d(Qe),mt=s(Qe,"P",{});var Wn=a(mt);Fi=i(Wn,"The "),Xn=s(Wn,"A",{href:!0});var hp=a(Xn);Ei=i(hp,"XGLMModel"),hp.forEach(t),qi=i(Wn," forward method, overrides the "),ms=s(Wn,"CODE",{});var up=a(ms);Ci=i(up,"__call__"),up.forEach(t),Pi=i(Wn," special method."),Wn.forEach(t),Ai=d(Qe),y(Et.$$.fragment,Qe),ji=d(Qe),fs=s(Qe,"P",{});var mp=a(fs);Oi=i(mp,"Example:"),mp.forEach(t),Di=d(Qe),y(To.$$.fragment,Qe),Qe.forEach(t),Ze.forEach(t),ua=d(o),ft=s(o,"H2",{class:!0});var Da=a(ft);qt=s(Da,"A",{id:!0,class:!0,href:!0});var fp=a(qt);gs=s(fp,"SPAN",{});var gp=a(gs);y(bo.$$.fragment,gp),gp.forEach(t),fp.forEach(t),Ni=d(Da),_s=s(Da,"SPAN",{});var _p=a(_s);Ii=i(_p,"XGLMForCausalLM"),_p.forEach(t),Da.forEach(t),ma=d(o),de=s(o,"DIV",{class:!0});var Ye=a(de);y(Mo.$$.fragment,Ye),Si=d(Ye),ks=s(Ye,"P",{});var kp=a(ks);Wi=i(kp,`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),kp.forEach(t),Ui=d(Ye),wo=s(Ye,"P",{});var Na=a(wo);Bi=i(Na,"This model inherits from "),Gn=s(Na,"A",{href:!0});var vp=a(Gn);Ri=i(vp,"PreTrainedModel"),vp.forEach(t),Vi=i(Na,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Na.forEach(t),Hi=d(Ye),Lo=s(Ye,"P",{});var Ia=a(Lo);Ji=i(Ia,"This model is also a PyTorch "),xo=s(Ia,"A",{href:!0,rel:!0});var yp=a(xo);Ki=i(yp,"torch.nn.Module"),yp.forEach(t),Zi=i(Ia,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ia.forEach(t),Qi=d(Ye),me=s(Ye,"DIV",{class:!0});var et=a(me);y($o.$$.fragment,et),Yi=d(et),gt=s(et,"P",{});var Un=a(gt);el=i(Un,"The "),Fn=s(Un,"A",{href:!0});var Tp=a(Fn);tl=i(Tp,"XGLMForCausalLM"),Tp.forEach(t),ol=i(Un," forward method, overrides the "),vs=s(Un,"CODE",{});var bp=a(vs);nl=i(bp,"__call__"),bp.forEach(t),sl=i(Un," special method."),Un.forEach(t),al=d(et),y(Ct.$$.fragment,et),rl=d(et),ys=s(et,"P",{});var Mp=a(ys);il=i(Mp,"Example:"),Mp.forEach(t),ll=d(et),y(zo.$$.fragment,et),et.forEach(t),Ye.forEach(t),fa=d(o),_t=s(o,"H2",{class:!0});var Sa=a(_t);Pt=s(Sa,"A",{id:!0,class:!0,href:!0});var wp=a(Pt);Ts=s(wp,"SPAN",{});var Lp=a(Ts);y(Xo.$$.fragment,Lp),Lp.forEach(t),wp.forEach(t),dl=d(Sa),bs=s(Sa,"SPAN",{});var xp=a(bs);cl=i(xp,"TFXGLMModel"),xp.forEach(t),Sa.forEach(t),ga=d(o),Z=s(o,"DIV",{class:!0});var ze=a(Z);y(Go.$$.fragment,ze),pl=d(ze),Fo=s(ze,"P",{});var Wa=a(Fo);hl=i(Wa,`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),En=s(Wa,"A",{href:!0});var $p=a(En);ul=i($p,"TFPreTrainedModel"),$p.forEach(t),ml=i(Wa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wa.forEach(t),fl=d(ze),Eo=s(ze,"P",{});var Ua=a(Eo);gl=i(Ua,"This model is also a "),qo=s(Ua,"A",{href:!0,rel:!0});var zp=a(qo);_l=i(zp,"tf.keras.Model"),zp.forEach(t),kl=i(Ua,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ua.forEach(t),vl=d(ze),y(At.$$.fragment,ze),yl=d(ze),jt=s(ze,"P",{});var ra=a(jt);Tl=i(ra,"Transformer decoder consisting of "),Ms=s(ra,"EM",{});var Xp=a(Ms);bl=i(Xp,"config.num_layers"),Xp.forEach(t),Ml=i(ra," layers. Each layer is a "),ws=s(ra,"CODE",{});var Gp=a(ws);wl=i(Gp,"TFXGLMDecoderLayer"),Gp.forEach(t),ra.forEach(t),Ll=d(ze),fe=s(ze,"DIV",{class:!0});var tt=a(fe);y(Co.$$.fragment,tt),xl=d(tt),kt=s(tt,"P",{});var Bn=a(kt);$l=i(Bn,"The "),qn=s(Bn,"A",{href:!0});var Fp=a(qn);zl=i(Fp,"TFXGLMModel"),Fp.forEach(t),Xl=i(Bn," forward method, overrides the "),Ls=s(Bn,"CODE",{});var Ep=a(Ls);Gl=i(Ep,"__call__"),Ep.forEach(t),Fl=i(Bn," special method."),Bn.forEach(t),El=d(tt),y(Ot.$$.fragment,tt),ql=d(tt),xs=s(tt,"P",{});var qp=a(xs);Cl=i(qp,"Example:"),qp.forEach(t),Pl=d(tt),y(Po.$$.fragment,tt),tt.forEach(t),ze.forEach(t),_a=d(o),vt=s(o,"H2",{class:!0});var Ba=a(vt);Dt=s(Ba,"A",{id:!0,class:!0,href:!0});var Cp=a(Dt);$s=s(Cp,"SPAN",{});var Pp=a($s);y(Ao.$$.fragment,Pp),Pp.forEach(t),Cp.forEach(t),Al=d(Ba),zs=s(Ba,"SPAN",{});var Ap=a(zs);jl=i(Ap,"TFXGLMForCausalLM"),Ap.forEach(t),Ba.forEach(t),ka=d(o),Q=s(o,"DIV",{class:!0});var Xe=a(Q);y(jo.$$.fragment,Xe),Ol=d(Xe),Xs=s(Xe,"P",{});var jp=a(Xs);Dl=i(jp,`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),jp.forEach(t),Nl=d(Xe),Oo=s(Xe,"P",{});var Ra=a(Oo);Il=i(Ra,"This model inherits from "),Cn=s(Ra,"A",{href:!0});var Op=a(Cn);Sl=i(Op,"TFPreTrainedModel"),Op.forEach(t),Wl=i(Ra,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ra.forEach(t),Ul=d(Xe),Do=s(Xe,"P",{});var Va=a(Do);Bl=i(Va,"This model is also a "),No=s(Va,"A",{href:!0,rel:!0});var Dp=a(No);Rl=i(Dp,"tf.keras.Model"),Dp.forEach(t),Vl=i(Va,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Va.forEach(t),Hl=d(Xe),y(Nt.$$.fragment,Xe),Jl=d(Xe),ge=s(Xe,"DIV",{class:!0});var ot=a(ge);y(Io.$$.fragment,ot),Kl=d(ot),yt=s(ot,"P",{});var Rn=a(yt);Zl=i(Rn,"The "),Pn=s(Rn,"A",{href:!0});var Np=a(Pn);Ql=i(Np,"TFXGLMForCausalLM"),Np.forEach(t),Yl=i(Rn," forward method, overrides the "),Gs=s(Rn,"CODE",{});var Ip=a(Gs);ed=i(Ip,"__call__"),Ip.forEach(t),td=i(Rn," special method."),Rn.forEach(t),od=d(ot),y(It.$$.fragment,ot),nd=d(ot),Fs=s(ot,"P",{});var Sp=a(Fs);sd=i(Sp,"Example:"),Sp.forEach(t),ad=d(ot),y(So.$$.fragment,ot),ot.forEach(t),Xe.forEach(t),va=d(o),Tt=s(o,"H2",{class:!0});var Ha=a(Tt);St=s(Ha,"A",{id:!0,class:!0,href:!0});var Wp=a(St);Es=s(Wp,"SPAN",{});var Up=a(Es);y(Wo.$$.fragment,Up),Up.forEach(t),Wp.forEach(t),rd=d(Ha),qs=s(Ha,"SPAN",{});var Bp=a(qs);id=i(Bp,"FlaxXGLMModel"),Bp.forEach(t),Ha.forEach(t),ya=d(o),Y=s(o,"DIV",{class:!0});var Ge=a(Y);y(Uo.$$.fragment,Ge),ld=d(Ge),Bo=s(Ge,"P",{});var Ja=a(Bo);dd=i(Ja,`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),An=s(Ja,"A",{href:!0});var Rp=a(An);cd=i(Rp,"FlaxPreTrainedModel"),Rp.forEach(t),pd=i(Ja,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ja.forEach(t),hd=d(Ge),Ro=s(Ge,"P",{});var Ka=a(Ro);ud=i(Ka,`This model is also a Flax Linen
`),Vo=s(Ka,"A",{href:!0,rel:!0});var Vp=a(Vo);md=i(Vp,"flax.nn.Module"),Vp.forEach(t),fd=i(Ka,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ka.forEach(t),gd=d(Ge),Cs=s(Ge,"P",{});var Hp=a(Cs);_d=i(Hp,"Finally, this model supports inherent JAX features such as:"),Hp.forEach(t),kd=d(Ge),Se=s(Ge,"UL",{});var Vt=a(Se);Ps=s(Vt,"LI",{});var Jp=a(Ps);Ho=s(Jp,"A",{href:!0,rel:!0});var Kp=a(Ho);vd=i(Kp,"Just-In-Time (JIT) compilation"),Kp.forEach(t),Jp.forEach(t),yd=d(Vt),As=s(Vt,"LI",{});var Zp=a(As);Jo=s(Zp,"A",{href:!0,rel:!0});var Qp=a(Jo);Td=i(Qp,"Automatic Differentiation"),Qp.forEach(t),Zp.forEach(t),bd=d(Vt),js=s(Vt,"LI",{});var Yp=a(js);Ko=s(Yp,"A",{href:!0,rel:!0});var eh=a(Ko);Md=i(eh,"Vectorization"),eh.forEach(t),Yp.forEach(t),wd=d(Vt),Os=s(Vt,"LI",{});var th=a(Os);Zo=s(th,"A",{href:!0,rel:!0});var oh=a(Zo);Ld=i(oh,"Parallelization"),oh.forEach(t),th.forEach(t),Vt.forEach(t),xd=d(Ge),_e=s(Ge,"DIV",{class:!0});var nt=a(_e);y(Qo.$$.fragment,nt),$d=d(nt),bt=s(nt,"P",{});var Vn=a(bt);zd=i(Vn,"The "),Ds=s(Vn,"CODE",{});var nh=a(Ds);Xd=i(nh,"FlaxXGLMPreTrainedModel"),nh.forEach(t),Gd=i(Vn,"forward method, overrides the "),Ns=s(Vn,"CODE",{});var sh=a(Ns);Fd=i(sh,"__call__"),sh.forEach(t),Ed=i(Vn," special method."),Vn.forEach(t),qd=d(nt),y(Wt.$$.fragment,nt),Cd=d(nt),Is=s(nt,"P",{});var ah=a(Is);Pd=i(ah,"Example:"),ah.forEach(t),Ad=d(nt),y(Yo.$$.fragment,nt),nt.forEach(t),Ge.forEach(t),Ta=d(o),Mt=s(o,"H2",{class:!0});var Za=a(Mt);Ut=s(Za,"A",{id:!0,class:!0,href:!0});var rh=a(Ut);Ss=s(rh,"SPAN",{});var ih=a(Ss);y(en.$$.fragment,ih),ih.forEach(t),rh.forEach(t),jd=d(Za),Ws=s(Za,"SPAN",{});var lh=a(Ws);Od=i(lh,"FlaxXGLMForCausalLM"),lh.forEach(t),Za.forEach(t),ba=d(o),N=s(o,"DIV",{class:!0});var ye=a(N);y(tn.$$.fragment,ye),Dd=d(ye),Us=s(ye,"P",{});var dh=a(Us);Nd=i(dh,`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),dh.forEach(t),Id=d(ye),on=s(ye,"P",{});var Qa=a(on);Sd=i(Qa,"This model inherits from "),jn=s(Qa,"A",{href:!0});var ch=a(jn);Wd=i(ch,"FlaxPreTrainedModel"),ch.forEach(t),Ud=i(Qa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qa.forEach(t),Bd=d(ye),nn=s(ye,"P",{});var Ya=a(nn);Rd=i(Ya,`This model is also a Flax Linen
`),sn=s(Ya,"A",{href:!0,rel:!0});var ph=a(sn);Vd=i(ph,"flax.nn.Module"),ph.forEach(t),Hd=i(Ya,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ya.forEach(t),Jd=d(ye),Bs=s(ye,"P",{});var hh=a(Bs);Kd=i(hh,"Finally, this model supports inherent JAX features such as:"),hh.forEach(t),Zd=d(ye),We=s(ye,"UL",{});var Ht=a(We);Rs=s(Ht,"LI",{});var uh=a(Rs);an=s(uh,"A",{href:!0,rel:!0});var mh=a(an);Qd=i(mh,"Just-In-Time (JIT) compilation"),mh.forEach(t),uh.forEach(t),Yd=d(Ht),Vs=s(Ht,"LI",{});var fh=a(Vs);rn=s(fh,"A",{href:!0,rel:!0});var gh=a(rn);ec=i(gh,"Automatic Differentiation"),gh.forEach(t),fh.forEach(t),tc=d(Ht),Hs=s(Ht,"LI",{});var _h=a(Hs);ln=s(_h,"A",{href:!0,rel:!0});var kh=a(ln);oc=i(kh,"Vectorization"),kh.forEach(t),_h.forEach(t),nc=d(Ht),Js=s(Ht,"LI",{});var vh=a(Js);dn=s(vh,"A",{href:!0,rel:!0});var yh=a(dn);sc=i(yh,"Parallelization"),yh.forEach(t),vh.forEach(t),Ht.forEach(t),ac=d(ye),ke=s(ye,"DIV",{class:!0});var st=a(ke);y(cn.$$.fragment,st),rc=d(st),wt=s(st,"P",{});var Hn=a(wt);ic=i(Hn,"The "),Ks=s(Hn,"CODE",{});var Th=a(Ks);lc=i(Th,"FlaxXGLMPreTrainedModel"),Th.forEach(t),dc=i(Hn,"forward method, overrides the "),Zs=s(Hn,"CODE",{});var bh=a(Zs);cc=i(bh,"__call__"),bh.forEach(t),pc=i(Hn," special method."),Hn.forEach(t),hc=d(st),y(Bt.$$.fragment,st),uc=d(st),Qs=s(st,"P",{});var Mh=a(Qs);mc=i(Mh,"Example:"),Mh.forEach(t),fc=d(st),y(pn.$$.fragment,st),st.forEach(t),ye.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(Oh)),c(k,"id","xglm"),c(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(k,"href","#xglm"),c(f,"class","relative group"),c(ee,"id","overview"),c(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ee,"href","#overview"),c(z,"class","relative group"),c(oe,"href","https://arxiv.org/abs/2112.10668"),c(oe,"rel","nofollow"),c(A,"href","https://huggingface.co/valhalla"),c(A,"rel","nofollow"),c(j,"href","https://github.com/pytorch/fairseq/tree/main/examples/xglm"),c(j,"rel","nofollow"),c(P,"id","transformers.XGLMConfig"),c(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(P,"href","#transformers.XGLMConfig"),c(J,"class","relative group"),c(U,"href","/docs/transformers/pr_16543/en/model_doc/xglm#transformers.XGLMModel"),c(O,"href","https://huggingface.co/facebook/xglm-564M"),c(O,"rel","nofollow"),c(fn,"href","/docs/transformers/pr_16543/en/main_classes/configuration#transformers.PretrainedConfig"),c(gn,"href","/docs/transformers/pr_16543/en/main_classes/configuration#transformers.PretrainedConfig"),c(G,"class","docstring"),c(Lt,"id","transformers.XGLMTokenizer"),c(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lt,"href","#transformers.XGLMTokenizer"),c(pt,"class","relative group"),c(_n,"href","/docs/transformers/pr_16543/en/model_doc/roberta#transformers.RobertaTokenizer"),c(kn,"href","/docs/transformers/pr_16543/en/model_doc/xlnet#transformers.XLNetTokenizer"),c(Yt,"href","https://github.com/google/sentencepiece"),c(Yt,"rel","nofollow"),c(vn,"href","/docs/transformers/pr_16543/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Re,"class","docstring"),c(xt,"class","docstring"),c($t,"class","docstring"),c(bn,"class","docstring"),c(D,"class","docstring"),c(zt,"id","transformers.XGLMTokenizerFast"),c(zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(zt,"href","#transformers.XGLMTokenizerFast"),c(ht,"class","relative group"),c(Mn,"href","/docs/transformers/pr_16543/en/model_doc/roberta#transformers.RobertaTokenizer"),c(wn,"href","/docs/transformers/pr_16543/en/model_doc/xlnet#transformers.XLNetTokenizer"),c(co,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),c(co,"rel","nofollow"),c(Ln,"href","/docs/transformers/pr_16543/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ve,"class","docstring"),c(Xt,"class","docstring"),c(ie,"class","docstring"),c(Gt,"id","transformers.XGLMModel"),c(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gt,"href","#transformers.XGLMModel"),c(ut,"class","relative group"),c(zn,"href","/docs/transformers/pr_16543/en/main_classes/model#transformers.PreTrainedModel"),c(vo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(vo,"rel","nofollow"),c(Xn,"href","/docs/transformers/pr_16543/en/model_doc/xglm#transformers.XGLMModel"),c(ue,"class","docstring"),c(le,"class","docstring"),c(qt,"id","transformers.XGLMForCausalLM"),c(qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qt,"href","#transformers.XGLMForCausalLM"),c(ft,"class","relative group"),c(Gn,"href","/docs/transformers/pr_16543/en/main_classes/model#transformers.PreTrainedModel"),c(xo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(xo,"rel","nofollow"),c(Fn,"href","/docs/transformers/pr_16543/en/model_doc/xglm#transformers.XGLMForCausalLM"),c(me,"class","docstring"),c(de,"class","docstring"),c(Pt,"id","transformers.TFXGLMModel"),c(Pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pt,"href","#transformers.TFXGLMModel"),c(_t,"class","relative group"),c(En,"href","/docs/transformers/pr_16543/en/main_classes/model#transformers.TFPreTrainedModel"),c(qo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(qo,"rel","nofollow"),c(qn,"href","/docs/transformers/pr_16543/en/model_doc/xglm#transformers.TFXGLMModel"),c(fe,"class","docstring"),c(Z,"class","docstring"),c(Dt,"id","transformers.TFXGLMForCausalLM"),c(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Dt,"href","#transformers.TFXGLMForCausalLM"),c(vt,"class","relative group"),c(Cn,"href","/docs/transformers/pr_16543/en/main_classes/model#transformers.TFPreTrainedModel"),c(No,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(No,"rel","nofollow"),c(Pn,"href","/docs/transformers/pr_16543/en/model_doc/xglm#transformers.TFXGLMForCausalLM"),c(ge,"class","docstring"),c(Q,"class","docstring"),c(St,"id","transformers.FlaxXGLMModel"),c(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(St,"href","#transformers.FlaxXGLMModel"),c(Tt,"class","relative group"),c(An,"href","/docs/transformers/pr_16543/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Vo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Vo,"rel","nofollow"),c(Ho,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ho,"rel","nofollow"),c(Jo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Jo,"rel","nofollow"),c(Ko,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ko,"rel","nofollow"),c(Zo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Zo,"rel","nofollow"),c(_e,"class","docstring"),c(Y,"class","docstring"),c(Ut,"id","transformers.FlaxXGLMForCausalLM"),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#transformers.FlaxXGLMForCausalLM"),c(Mt,"class","relative group"),c(jn,"href","/docs/transformers/pr_16543/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(sn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(sn,"rel","nofollow"),c(an,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(an,"rel","nofollow"),c(rn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(rn,"rel","nofollow"),c(ln,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ln,"rel","nofollow"),c(dn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(dn,"rel","nofollow"),c(ke,"class","docstring"),c(N,"class","docstring")},m(o,u){e(document.head,p),h(o,x,u),h(o,f,u),e(f,k),e(k,L),T(_,L,null),e(f,g),e(f,$),e($,Fe),h(o,ce,u),h(o,z,u),e(z,ee),e(ee,B),T(te,B,null),e(z,Ee),e(z,R),e(R,qe),h(o,Le,u),h(o,S,u),e(S,V),e(S,oe),e(oe,Te),e(S,E),h(o,q,u),h(o,pe,u),e(pe,ne),h(o,xe,u),h(o,he,u),e(he,H),e(H,Ce),h(o,$e,u),h(o,F,u),e(F,Pe),e(F,A),e(A,Ae),e(F,je),e(F,j),e(j,Oe),e(F,De),h(o,W,u),h(o,J,u),e(J,P),e(P,be),T(m,be,null),e(J,X),e(J,se),e(se,at),h(o,Be,u),h(o,G,u),T(Me,G,null),e(G,rt),e(G,ae),e(ae,K),e(ae,U),e(U,it),e(ae,lt),e(ae,O),e(O,dt),e(ae,ct),e(G,Ne),e(G,re),e(re,er),e(re,fn),e(fn,tr),e(re,or),e(re,gn),e(gn,nr),e(re,sr),e(G,ar),e(G,Jn),e(Jn,rr),e(G,ir),T(Kt,G,null),h(o,ia,u),h(o,pt,u),e(pt,Lt),e(Lt,Kn),T(Zt,Kn,null),e(pt,lr),e(pt,Zn),e(Zn,dr),h(o,la,u),h(o,D,u),T(Qt,D,null),e(D,cr),e(D,Ie),e(Ie,pr),e(Ie,_n),e(_n,hr),e(Ie,ur),e(Ie,kn),e(kn,mr),e(Ie,fr),e(Ie,Yt),e(Yt,gr),e(Ie,_r),e(D,kr),e(D,eo),e(eo,vr),e(eo,vn),e(vn,yr),e(eo,Tr),e(D,br),e(D,Re),T(to,Re,null),e(Re,Mr),e(Re,Qn),e(Qn,wr),e(Re,Lr),e(Re,oo),e(oo,yn),e(yn,xr),e(yn,Yn),e(Yn,$r),e(oo,zr),e(oo,Tn),e(Tn,Xr),e(Tn,es),e(es,Gr),e(D,Fr),e(D,xt),T(no,xt,null),e(xt,Er),e(xt,so),e(so,qr),e(so,ts),e(ts,Cr),e(so,Pr),e(D,Ar),e(D,$t),T(ao,$t,null),e($t,jr),e($t,os),e(os,Or),e(D,Dr),e(D,bn),T(ro,bn,null),h(o,da,u),h(o,ht,u),e(ht,zt),e(zt,ns),T(io,ns,null),e(ht,Nr),e(ht,ss),e(ss,Ir),h(o,ca,u),h(o,ie,u),T(lo,ie,null),e(ie,Sr),e(ie,we),e(we,Wr),e(we,as),e(as,Ur),e(we,Br),e(we,Mn),e(Mn,Rr),e(we,Vr),e(we,wn),e(wn,Hr),e(we,Jr),e(we,co),e(co,Kr),e(we,Zr),e(ie,Qr),e(ie,po),e(po,Yr),e(po,Ln),e(Ln,ei),e(po,ti),e(ie,oi),e(ie,Ve),T(ho,Ve,null),e(Ve,ni),e(Ve,rs),e(rs,si),e(Ve,ai),e(Ve,uo),e(uo,xn),e(xn,ri),e(xn,is),e(is,ii),e(uo,li),e(uo,$n),e($n,di),e($n,ls),e(ls,ci),e(ie,pi),e(ie,Xt),T(mo,Xt,null),e(Xt,hi),e(Xt,ds),e(ds,ui),h(o,pa,u),h(o,ut,u),e(ut,Gt),e(Gt,cs),T(fo,cs,null),e(ut,mi),e(ut,ps),e(ps,fi),h(o,ha,u),h(o,le,u),T(go,le,null),e(le,gi),e(le,_o),e(_o,_i),e(_o,zn),e(zn,ki),e(_o,vi),e(le,yi),e(le,ko),e(ko,Ti),e(ko,vo),e(vo,bi),e(ko,Mi),e(le,wi),e(le,Ft),e(Ft,Li),e(Ft,hs),e(hs,xi),e(Ft,$i),e(Ft,us),e(us,zi),e(le,Xi),e(le,ue),T(yo,ue,null),e(ue,Gi),e(ue,mt),e(mt,Fi),e(mt,Xn),e(Xn,Ei),e(mt,qi),e(mt,ms),e(ms,Ci),e(mt,Pi),e(ue,Ai),T(Et,ue,null),e(ue,ji),e(ue,fs),e(fs,Oi),e(ue,Di),T(To,ue,null),h(o,ua,u),h(o,ft,u),e(ft,qt),e(qt,gs),T(bo,gs,null),e(ft,Ni),e(ft,_s),e(_s,Ii),h(o,ma,u),h(o,de,u),T(Mo,de,null),e(de,Si),e(de,ks),e(ks,Wi),e(de,Ui),e(de,wo),e(wo,Bi),e(wo,Gn),e(Gn,Ri),e(wo,Vi),e(de,Hi),e(de,Lo),e(Lo,Ji),e(Lo,xo),e(xo,Ki),e(Lo,Zi),e(de,Qi),e(de,me),T($o,me,null),e(me,Yi),e(me,gt),e(gt,el),e(gt,Fn),e(Fn,tl),e(gt,ol),e(gt,vs),e(vs,nl),e(gt,sl),e(me,al),T(Ct,me,null),e(me,rl),e(me,ys),e(ys,il),e(me,ll),T(zo,me,null),h(o,fa,u),h(o,_t,u),e(_t,Pt),e(Pt,Ts),T(Xo,Ts,null),e(_t,dl),e(_t,bs),e(bs,cl),h(o,ga,u),h(o,Z,u),T(Go,Z,null),e(Z,pl),e(Z,Fo),e(Fo,hl),e(Fo,En),e(En,ul),e(Fo,ml),e(Z,fl),e(Z,Eo),e(Eo,gl),e(Eo,qo),e(qo,_l),e(Eo,kl),e(Z,vl),T(At,Z,null),e(Z,yl),e(Z,jt),e(jt,Tl),e(jt,Ms),e(Ms,bl),e(jt,Ml),e(jt,ws),e(ws,wl),e(Z,Ll),e(Z,fe),T(Co,fe,null),e(fe,xl),e(fe,kt),e(kt,$l),e(kt,qn),e(qn,zl),e(kt,Xl),e(kt,Ls),e(Ls,Gl),e(kt,Fl),e(fe,El),T(Ot,fe,null),e(fe,ql),e(fe,xs),e(xs,Cl),e(fe,Pl),T(Po,fe,null),h(o,_a,u),h(o,vt,u),e(vt,Dt),e(Dt,$s),T(Ao,$s,null),e(vt,Al),e(vt,zs),e(zs,jl),h(o,ka,u),h(o,Q,u),T(jo,Q,null),e(Q,Ol),e(Q,Xs),e(Xs,Dl),e(Q,Nl),e(Q,Oo),e(Oo,Il),e(Oo,Cn),e(Cn,Sl),e(Oo,Wl),e(Q,Ul),e(Q,Do),e(Do,Bl),e(Do,No),e(No,Rl),e(Do,Vl),e(Q,Hl),T(Nt,Q,null),e(Q,Jl),e(Q,ge),T(Io,ge,null),e(ge,Kl),e(ge,yt),e(yt,Zl),e(yt,Pn),e(Pn,Ql),e(yt,Yl),e(yt,Gs),e(Gs,ed),e(yt,td),e(ge,od),T(It,ge,null),e(ge,nd),e(ge,Fs),e(Fs,sd),e(ge,ad),T(So,ge,null),h(o,va,u),h(o,Tt,u),e(Tt,St),e(St,Es),T(Wo,Es,null),e(Tt,rd),e(Tt,qs),e(qs,id),h(o,ya,u),h(o,Y,u),T(Uo,Y,null),e(Y,ld),e(Y,Bo),e(Bo,dd),e(Bo,An),e(An,cd),e(Bo,pd),e(Y,hd),e(Y,Ro),e(Ro,ud),e(Ro,Vo),e(Vo,md),e(Ro,fd),e(Y,gd),e(Y,Cs),e(Cs,_d),e(Y,kd),e(Y,Se),e(Se,Ps),e(Ps,Ho),e(Ho,vd),e(Se,yd),e(Se,As),e(As,Jo),e(Jo,Td),e(Se,bd),e(Se,js),e(js,Ko),e(Ko,Md),e(Se,wd),e(Se,Os),e(Os,Zo),e(Zo,Ld),e(Y,xd),e(Y,_e),T(Qo,_e,null),e(_e,$d),e(_e,bt),e(bt,zd),e(bt,Ds),e(Ds,Xd),e(bt,Gd),e(bt,Ns),e(Ns,Fd),e(bt,Ed),e(_e,qd),T(Wt,_e,null),e(_e,Cd),e(_e,Is),e(Is,Pd),e(_e,Ad),T(Yo,_e,null),h(o,Ta,u),h(o,Mt,u),e(Mt,Ut),e(Ut,Ss),T(en,Ss,null),e(Mt,jd),e(Mt,Ws),e(Ws,Od),h(o,ba,u),h(o,N,u),T(tn,N,null),e(N,Dd),e(N,Us),e(Us,Nd),e(N,Id),e(N,on),e(on,Sd),e(on,jn),e(jn,Wd),e(on,Ud),e(N,Bd),e(N,nn),e(nn,Rd),e(nn,sn),e(sn,Vd),e(nn,Hd),e(N,Jd),e(N,Bs),e(Bs,Kd),e(N,Zd),e(N,We),e(We,Rs),e(Rs,an),e(an,Qd),e(We,Yd),e(We,Vs),e(Vs,rn),e(rn,ec),e(We,tc),e(We,Hs),e(Hs,ln),e(ln,oc),e(We,nc),e(We,Js),e(Js,dn),e(dn,sc),e(N,ac),e(N,ke),T(cn,ke,null),e(ke,rc),e(ke,wt),e(wt,ic),e(wt,Ks),e(Ks,lc),e(wt,dc),e(wt,Zs),e(Zs,cc),e(wt,pc),e(ke,hc),T(Bt,ke,null),e(ke,uc),e(ke,Qs),e(Qs,mc),e(ke,fc),T(pn,ke,null),Ma=!0},p(o,[u]){const hn={};u&2&&(hn.$$scope={dirty:u,ctx:o}),Et.$set(hn);const Ys={};u&2&&(Ys.$$scope={dirty:u,ctx:o}),Ct.$set(Ys);const ea={};u&2&&(ea.$$scope={dirty:u,ctx:o}),At.$set(ea);const ta={};u&2&&(ta.$$scope={dirty:u,ctx:o}),Ot.$set(ta);const un={};u&2&&(un.$$scope={dirty:u,ctx:o}),Nt.$set(un);const oa={};u&2&&(oa.$$scope={dirty:u,ctx:o}),It.$set(oa);const na={};u&2&&(na.$$scope={dirty:u,ctx:o}),Wt.$set(na);const sa={};u&2&&(sa.$$scope={dirty:u,ctx:o}),Bt.$set(sa)},i(o){Ma||(b(_.$$.fragment,o),b(te.$$.fragment,o),b(m.$$.fragment,o),b(Me.$$.fragment,o),b(Kt.$$.fragment,o),b(Zt.$$.fragment,o),b(Qt.$$.fragment,o),b(to.$$.fragment,o),b(no.$$.fragment,o),b(ao.$$.fragment,o),b(ro.$$.fragment,o),b(io.$$.fragment,o),b(lo.$$.fragment,o),b(ho.$$.fragment,o),b(mo.$$.fragment,o),b(fo.$$.fragment,o),b(go.$$.fragment,o),b(yo.$$.fragment,o),b(Et.$$.fragment,o),b(To.$$.fragment,o),b(bo.$$.fragment,o),b(Mo.$$.fragment,o),b($o.$$.fragment,o),b(Ct.$$.fragment,o),b(zo.$$.fragment,o),b(Xo.$$.fragment,o),b(Go.$$.fragment,o),b(At.$$.fragment,o),b(Co.$$.fragment,o),b(Ot.$$.fragment,o),b(Po.$$.fragment,o),b(Ao.$$.fragment,o),b(jo.$$.fragment,o),b(Nt.$$.fragment,o),b(Io.$$.fragment,o),b(It.$$.fragment,o),b(So.$$.fragment,o),b(Wo.$$.fragment,o),b(Uo.$$.fragment,o),b(Qo.$$.fragment,o),b(Wt.$$.fragment,o),b(Yo.$$.fragment,o),b(en.$$.fragment,o),b(tn.$$.fragment,o),b(cn.$$.fragment,o),b(Bt.$$.fragment,o),b(pn.$$.fragment,o),Ma=!0)},o(o){M(_.$$.fragment,o),M(te.$$.fragment,o),M(m.$$.fragment,o),M(Me.$$.fragment,o),M(Kt.$$.fragment,o),M(Zt.$$.fragment,o),M(Qt.$$.fragment,o),M(to.$$.fragment,o),M(no.$$.fragment,o),M(ao.$$.fragment,o),M(ro.$$.fragment,o),M(io.$$.fragment,o),M(lo.$$.fragment,o),M(ho.$$.fragment,o),M(mo.$$.fragment,o),M(fo.$$.fragment,o),M(go.$$.fragment,o),M(yo.$$.fragment,o),M(Et.$$.fragment,o),M(To.$$.fragment,o),M(bo.$$.fragment,o),M(Mo.$$.fragment,o),M($o.$$.fragment,o),M(Ct.$$.fragment,o),M(zo.$$.fragment,o),M(Xo.$$.fragment,o),M(Go.$$.fragment,o),M(At.$$.fragment,o),M(Co.$$.fragment,o),M(Ot.$$.fragment,o),M(Po.$$.fragment,o),M(Ao.$$.fragment,o),M(jo.$$.fragment,o),M(Nt.$$.fragment,o),M(Io.$$.fragment,o),M(It.$$.fragment,o),M(So.$$.fragment,o),M(Wo.$$.fragment,o),M(Uo.$$.fragment,o),M(Qo.$$.fragment,o),M(Wt.$$.fragment,o),M(Yo.$$.fragment,o),M(en.$$.fragment,o),M(tn.$$.fragment,o),M(cn.$$.fragment,o),M(Bt.$$.fragment,o),M(pn.$$.fragment,o),Ma=!1},d(o){t(p),o&&t(x),o&&t(f),w(_),o&&t(ce),o&&t(z),w(te),o&&t(Le),o&&t(S),o&&t(q),o&&t(pe),o&&t(xe),o&&t(he),o&&t($e),o&&t(F),o&&t(W),o&&t(J),w(m),o&&t(Be),o&&t(G),w(Me),w(Kt),o&&t(ia),o&&t(pt),w(Zt),o&&t(la),o&&t(D),w(Qt),w(to),w(no),w(ao),w(ro),o&&t(da),o&&t(ht),w(io),o&&t(ca),o&&t(ie),w(lo),w(ho),w(mo),o&&t(pa),o&&t(ut),w(fo),o&&t(ha),o&&t(le),w(go),w(yo),w(Et),w(To),o&&t(ua),o&&t(ft),w(bo),o&&t(ma),o&&t(de),w(Mo),w($o),w(Ct),w(zo),o&&t(fa),o&&t(_t),w(Xo),o&&t(ga),o&&t(Z),w(Go),w(At),w(Co),w(Ot),w(Po),o&&t(_a),o&&t(vt),w(Ao),o&&t(ka),o&&t(Q),w(jo),w(Nt),w(Io),w(It),w(So),o&&t(va),o&&t(Tt),w(Wo),o&&t(ya),o&&t(Y),w(Uo),w(Qo),w(Wt),w(Yo),o&&t(Ta),o&&t(Mt),w(en),o&&t(ba),o&&t(N),w(tn),w(cn),w(Bt),w(pn)}}}const Oh={local:"xglm",sections:[{local:"overview",title:"Overview"},{local:"transformers.XGLMConfig",title:"XGLMConfig"},{local:"transformers.XGLMTokenizer",title:"XGLMTokenizer"},{local:"transformers.XGLMTokenizerFast",title:"XGLMTokenizerFast"},{local:"transformers.XGLMModel",title:"XGLMModel"},{local:"transformers.XGLMForCausalLM",title:"XGLMForCausalLM"},{local:"transformers.TFXGLMModel",title:"TFXGLMModel"},{local:"transformers.TFXGLMForCausalLM",title:"TFXGLMForCausalLM"},{local:"transformers.FlaxXGLMModel",title:"FlaxXGLMModel"},{local:"transformers.FlaxXGLMForCausalLM",title:"FlaxXGLMForCausalLM"}],title:"XGLM"};function Dh(I){return zh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Bh extends wh{constructor(p){super();Lh(this,p,Dh,jh,xh,{})}}export{Bh as default,Oh as metadata};
