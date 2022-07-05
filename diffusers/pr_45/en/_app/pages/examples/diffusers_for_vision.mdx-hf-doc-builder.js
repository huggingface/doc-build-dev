import{S as Ts,i as Vs,s as Hs,e as n,k as o,w as f,t as h,M as Bs,c as t,d as s,m,a as i,x as u,h as c,b as r,G as a,g as p,y as g,L as Gs,q as d,o as v,B as _,v as Us}from"../../chunks/vendor-hf-doc-builder.js";import{I as Y}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ue}from"../../chunks/CodeBlock-hf-doc-builder.js";function Cs(ms){let w,ge,j,P,ee,T,Ue,se,Ce,de,$,D,ae,V,ze,ne,Je,ve,b,S,te,H,Oe,re,Re,_e,B,we,y,q,ie,G,Fe,le,Ke,je,N,Qe,U,We,Xe,$e,C,be,E,A,pe,z,Ye,oe,Ze,ye,I,es,J,ss,as,Ee,O,xe,x,M,me,R,ns,he,ts,ke,Z,F,rs,K,is,ls,Pe,Q,De,k,L,ce,W,ps,fe,os,Se,X,qe;return T=new Y({}),V=new Y({}),H=new Y({}),B=new ue({props:{code:`




`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> PNDM, UNetModel, PNDMScheduler
<span class="hljs-keyword">import</span> PIL.Image
<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-keyword">import</span> torch

model_id = <span class="hljs-string">&quot;fusing/ddim-celeba-hq&quot;</span>

model = UNetModel.from_pretrained(model_id)
scheduler = PNDMScheduler()

<span class="hljs-comment"># load model and scheduler</span>
pndm = PNDM(unet=model, noise_scheduler=scheduler)

<span class="hljs-comment"># run pipeline in inference (sample random noise and denoise)</span>
<span class="hljs-keyword">with</span> torch.no_grad():
    image = pndm()

<span class="hljs-comment"># process image to PIL</span>
image_processed = image.cpu().permute(<span class="hljs-number">0</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">1</span>)
image_processed = (image_processed + <span class="hljs-number">1.0</span>) / <span class="hljs-number">2</span>
image_processed = torch.clamp(image_processed, <span class="hljs-number">0.0</span>, <span class="hljs-number">1.0</span>)
image_processed = image_processed * <span class="hljs-number">255</span>
image_processed = image_processed.numpy().astype(np.uint8)
image_pil = PIL.Image.fromarray(image_processed[<span class="hljs-number">0</span>])

<span class="hljs-comment"># save image</span>
image_pil.save(<span class="hljs-string">&quot;test.png&quot;</span>)`}}),G=new Y({}),C=new ue({props:{code:`



`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline
<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">import</span> PIL.Image
<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

torch.manual_seed(<span class="hljs-number">32</span>)

score_sde_sv = DiffusionPipeline.from_pretrained(<span class="hljs-string">&quot;fusing/ffhq_ncsnpp&quot;</span>)

<span class="hljs-comment"># Note this might take up to 3 minutes on a GPU</span>
image = score_sde_sv(num_inference_steps=<span class="hljs-number">2000</span>)

image = image.permute(<span class="hljs-number">0</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">1</span>).cpu().numpy()
image = np.clip(image * <span class="hljs-number">255</span>, <span class="hljs-number">0</span>, <span class="hljs-number">255</span>).astype(np.uint8)
image_pil = PIL.Image.fromarray(image[<span class="hljs-number">0</span>])

<span class="hljs-comment"># save image</span>
image_pil.save(<span class="hljs-string">&quot;test.png&quot;</span>)`}}),z=new Y({}),O=new ue({props:{code:`



`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline
<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">import</span> PIL.Image
<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

torch.manual_seed(<span class="hljs-number">32</span>)

score_sde_sv = DiffusionPipeline.from_pretrained(<span class="hljs-string">&quot;fusing/cifar10-ddpmpp-deep-vp&quot;</span>)

<span class="hljs-comment"># Note this might take up to 3 minutes on a GPU</span>
image = score_sde_sv(num_inference_steps=<span class="hljs-number">1000</span>)

image = image.permute(<span class="hljs-number">0</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">1</span>).cpu().numpy()
image = np.clip(image * <span class="hljs-number">255</span>, <span class="hljs-number">0</span>, <span class="hljs-number">255</span>).astype(np.uint8)
image_pil = PIL.Image.fromarray(image[<span class="hljs-number">0</span>])

<span class="hljs-comment"># save image</span>
image_pil.save(<span class="hljs-string">&quot;test.png&quot;</span>)`}}),R=new Y({}),Q=new ue({props:{code:`



`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline

ldm = DiffusionPipeline.from_pretrained(<span class="hljs-string">&quot;fusing/latent-diffusion-text2im-large&quot;</span>)

generator = torch.manual_seed(<span class="hljs-number">42</span>)

prompt = <span class="hljs-string">&quot;A painting of a squirrel eating a burger&quot;</span>
image = ldm([prompt], generator=generator, eta=<span class="hljs-number">0.3</span>, guidance_scale=<span class="hljs-number">6.0</span>, num_inference_steps=<span class="hljs-number">50</span>)

image_processed = image.cpu().permute(<span class="hljs-number">0</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">1</span>)
image_processed = image_processed  * <span class="hljs-number">255.</span>
image_processed = image_processed.numpy().astype(np.uint8)
image_pil = PIL.Image.fromarray(image_processed[<span class="hljs-number">0</span>])

<span class="hljs-comment"># save image</span>
image_pil.save(<span class="hljs-string">&quot;test.png&quot;</span>)`}}),W=new Y({}),X=new ue({props:{code:`




`,highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> BDDMPipeline, GradTTSPipeline

torch_device = <span class="hljs-string">&quot;cuda&quot;</span>

<span class="hljs-comment"># load grad tts and bddm pipelines</span>
grad_tts = GradTTSPipeline.from_pretrained(<span class="hljs-string">&quot;fusing/grad-tts-libri-tts&quot;</span>)
bddm = BDDMPipeline.from_pretrained(<span class="hljs-string">&quot;fusing/diffwave-vocoder-ljspeech&quot;</span>)

text = <span class="hljs-string">&quot;Hello world, I missed you so much.&quot;</span>

<span class="hljs-comment"># generate mel spectograms using text</span>
mel_spec = grad_tts(text, torch_device=torch_device)

<span class="hljs-comment">#  generate the speech by passing mel spectograms to BDDMPipeline pipeline</span>
generator = torch.manual_seed(<span class="hljs-number">42</span>)
audio = bddm(mel_spec, generator, torch_device=torch_device)

<span class="hljs-comment"># save generated audio</span>
<span class="hljs-keyword">from</span> scipy.io.wavfile <span class="hljs-keyword">import</span> write <span class="hljs-keyword">as</span> wavwrite
sampling_rate = <span class="hljs-number">22050</span>
wavwrite(<span class="hljs-string">&quot;generated_audio.wav&quot;</span>, sampling_rate, audio.squeeze().cpu().numpy())`}}),{c(){w=n("meta"),ge=o(),j=n("h1"),P=n("a"),ee=n("span"),f(T.$$.fragment),Ue=o(),se=n("span"),Ce=h("Diffusers for vision"),de=o(),$=n("h2"),D=n("a"),ae=n("span"),f(V.$$.fragment),ze=o(),ne=n("span"),Je=h("Direct image generation"),ve=o(),b=n("h4"),S=n("a"),te=n("span"),f(H.$$.fragment),Oe=o(),re=n("span"),Re=h("**Example image generation with PNDM**"),_e=o(),f(B.$$.fragment),we=o(),y=n("h4"),q=n("a"),ie=n("span"),f(G.$$.fragment),Fe=o(),le=n("span"),Ke=h("**Example 1024x1024 image generation with SDE VE**"),je=o(),N=n("p"),Qe=h("See "),U=n("a"),We=h("paper"),Xe=h(" for more information on SDE VE."),$e=o(),f(C.$$.fragment),be=o(),E=n("h4"),A=n("a"),pe=n("span"),f(z.$$.fragment),Ye=o(),oe=n("span"),Ze=h("**Example 32x32 image generation with SDE VP**"),ye=o(),I=n("p"),es=h("See "),J=n("a"),ss=h("paper"),as=h(" for more information on SDE VE."),Ee=o(),f(O.$$.fragment),xe=o(),x=n("h4"),M=n("a"),me=n("span"),f(R.$$.fragment),ns=o(),he=n("span"),ts=h("**Text to Image generation with Latent Diffusion**"),ke=o(),Z=n("p"),F=n("em"),rs=h("Note: To use latent diffusion install transformers from "),K=n("a"),is=h("this branch"),ls=h("."),Pe=o(),f(Q.$$.fragment),De=o(),k=n("h2"),L=n("a"),ce=n("span"),f(W.$$.fragment),ps=o(),fe=n("span"),os=h("Text to image generation"),Se=o(),f(X.$$.fragment),this.h()},l(e){const l=Bs('[data-svelte="svelte-1phssyn"]',document.head);w=t(l,"META",{name:!0,content:!0}),l.forEach(s),ge=m(e),j=t(e,"H1",{class:!0});var Ne=i(j);P=t(Ne,"A",{id:!0,class:!0,href:!0});var hs=i(P);ee=t(hs,"SPAN",{});var cs=i(ee);u(T.$$.fragment,cs),cs.forEach(s),hs.forEach(s),Ue=m(Ne),se=t(Ne,"SPAN",{});var fs=i(se);Ce=c(fs,"Diffusers for vision"),fs.forEach(s),Ne.forEach(s),de=m(e),$=t(e,"H2",{class:!0});var Ae=i($);D=t(Ae,"A",{id:!0,class:!0,href:!0});var us=i(D);ae=t(us,"SPAN",{});var gs=i(ae);u(V.$$.fragment,gs),gs.forEach(s),us.forEach(s),ze=m(Ae),ne=t(Ae,"SPAN",{});var ds=i(ne);Je=c(ds,"Direct image generation"),ds.forEach(s),Ae.forEach(s),ve=m(e),b=t(e,"H4",{class:!0});var Ie=i(b);S=t(Ie,"A",{id:!0,class:!0,href:!0});var vs=i(S);te=t(vs,"SPAN",{});var _s=i(te);u(H.$$.fragment,_s),_s.forEach(s),vs.forEach(s),Oe=m(Ie),re=t(Ie,"SPAN",{});var ws=i(re);Re=c(ws,"**Example image generation with PNDM**"),ws.forEach(s),Ie.forEach(s),_e=m(e),u(B.$$.fragment,e),we=m(e),y=t(e,"H4",{class:!0});var Me=i(y);q=t(Me,"A",{id:!0,class:!0,href:!0});var js=i(q);ie=t(js,"SPAN",{});var $s=i(ie);u(G.$$.fragment,$s),$s.forEach(s),js.forEach(s),Fe=m(Me),le=t(Me,"SPAN",{});var bs=i(le);Ke=c(bs,"**Example 1024x1024 image generation with SDE VE**"),bs.forEach(s),Me.forEach(s),je=m(e),N=t(e,"P",{});var Le=i(N);Qe=c(Le,"See "),U=t(Le,"A",{href:!0,rel:!0});var ys=i(U);We=c(ys,"paper"),ys.forEach(s),Xe=c(Le," for more information on SDE VE."),Le.forEach(s),$e=m(e),u(C.$$.fragment,e),be=m(e),E=t(e,"H4",{class:!0});var Te=i(E);A=t(Te,"A",{id:!0,class:!0,href:!0});var Es=i(A);pe=t(Es,"SPAN",{});var xs=i(pe);u(z.$$.fragment,xs),xs.forEach(s),Es.forEach(s),Ye=m(Te),oe=t(Te,"SPAN",{});var ks=i(oe);Ze=c(ks,"**Example 32x32 image generation with SDE VP**"),ks.forEach(s),Te.forEach(s),ye=m(e),I=t(e,"P",{});var Ve=i(I);es=c(Ve,"See "),J=t(Ve,"A",{href:!0,rel:!0});var Ps=i(J);ss=c(Ps,"paper"),Ps.forEach(s),as=c(Ve," for more information on SDE VE."),Ve.forEach(s),Ee=m(e),u(O.$$.fragment,e),xe=m(e),x=t(e,"H4",{class:!0});var He=i(x);M=t(He,"A",{id:!0,class:!0,href:!0});var Ds=i(M);me=t(Ds,"SPAN",{});var Ss=i(me);u(R.$$.fragment,Ss),Ss.forEach(s),Ds.forEach(s),ns=m(He),he=t(He,"SPAN",{});var qs=i(he);ts=c(qs,"**Text to Image generation with Latent Diffusion**"),qs.forEach(s),He.forEach(s),ke=m(e),Z=t(e,"P",{});var Ns=i(Z);F=t(Ns,"EM",{});var Be=i(F);rs=c(Be,"Note: To use latent diffusion install transformers from "),K=t(Be,"A",{href:!0,rel:!0});var As=i(K);is=c(As,"this branch"),As.forEach(s),ls=c(Be,"."),Be.forEach(s),Ns.forEach(s),Pe=m(e),u(Q.$$.fragment,e),De=m(e),k=t(e,"H2",{class:!0});var Ge=i(k);L=t(Ge,"A",{id:!0,class:!0,href:!0});var Is=i(L);ce=t(Is,"SPAN",{});var Ms=i(ce);u(W.$$.fragment,Ms),Ms.forEach(s),Is.forEach(s),ps=m(Ge),fe=t(Ge,"SPAN",{});var Ls=i(fe);os=c(Ls,"Text to image generation"),Ls.forEach(s),Ge.forEach(s),Se=m(e),u(X.$$.fragment,e),this.h()},h(){r(w,"name","hf:doc:metadata"),r(w,"content",JSON.stringify(zs)),r(P,"id","diffusers-for-vision"),r(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(P,"href","#diffusers-for-vision"),r(j,"class","relative group"),r(D,"id","direct-image-generation"),r(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(D,"href","#direct-image-generation"),r($,"class","relative group"),r(S,"id","example-image-generation-with-pndm"),r(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(S,"href","#example-image-generation-with-pndm"),r(b,"class","relative group"),r(q,"id","example-1024x1024-image-generation-with-sde-ve"),r(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(q,"href","#example-1024x1024-image-generation-with-sde-ve"),r(y,"class","relative group"),r(U,"href","https://arxiv.org/abs/2011.13456"),r(U,"rel","nofollow"),r(A,"id","example-32x32-image-generation-with-sde-vp"),r(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(A,"href","#example-32x32-image-generation-with-sde-vp"),r(E,"class","relative group"),r(J,"href","https://arxiv.org/abs/2011.13456"),r(J,"rel","nofollow"),r(M,"id","text-to-image-generation-with-latent-diffusion"),r(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(M,"href","#text-to-image-generation-with-latent-diffusion"),r(x,"class","relative group"),r(K,"href","https://github.com/patil-suraj/transformers/tree/ldm-bert"),r(K,"rel","nofollow"),r(L,"id","text-to-image-generation"),r(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(L,"href","#text-to-image-generation"),r(k,"class","relative group")},m(e,l){a(document.head,w),p(e,ge,l),p(e,j,l),a(j,P),a(P,ee),g(T,ee,null),a(j,Ue),a(j,se),a(se,Ce),p(e,de,l),p(e,$,l),a($,D),a(D,ae),g(V,ae,null),a($,ze),a($,ne),a(ne,Je),p(e,ve,l),p(e,b,l),a(b,S),a(S,te),g(H,te,null),a(b,Oe),a(b,re),a(re,Re),p(e,_e,l),g(B,e,l),p(e,we,l),p(e,y,l),a(y,q),a(q,ie),g(G,ie,null),a(y,Fe),a(y,le),a(le,Ke),p(e,je,l),p(e,N,l),a(N,Qe),a(N,U),a(U,We),a(N,Xe),p(e,$e,l),g(C,e,l),p(e,be,l),p(e,E,l),a(E,A),a(A,pe),g(z,pe,null),a(E,Ye),a(E,oe),a(oe,Ze),p(e,ye,l),p(e,I,l),a(I,es),a(I,J),a(J,ss),a(I,as),p(e,Ee,l),g(O,e,l),p(e,xe,l),p(e,x,l),a(x,M),a(M,me),g(R,me,null),a(x,ns),a(x,he),a(he,ts),p(e,ke,l),p(e,Z,l),a(Z,F),a(F,rs),a(F,K),a(K,is),a(F,ls),p(e,Pe,l),g(Q,e,l),p(e,De,l),p(e,k,l),a(k,L),a(L,ce),g(W,ce,null),a(k,ps),a(k,fe),a(fe,os),p(e,Se,l),g(X,e,l),qe=!0},p:Gs,i(e){qe||(d(T.$$.fragment,e),d(V.$$.fragment,e),d(H.$$.fragment,e),d(B.$$.fragment,e),d(G.$$.fragment,e),d(C.$$.fragment,e),d(z.$$.fragment,e),d(O.$$.fragment,e),d(R.$$.fragment,e),d(Q.$$.fragment,e),d(W.$$.fragment,e),d(X.$$.fragment,e),qe=!0)},o(e){v(T.$$.fragment,e),v(V.$$.fragment,e),v(H.$$.fragment,e),v(B.$$.fragment,e),v(G.$$.fragment,e),v(C.$$.fragment,e),v(z.$$.fragment,e),v(O.$$.fragment,e),v(R.$$.fragment,e),v(Q.$$.fragment,e),v(W.$$.fragment,e),v(X.$$.fragment,e),qe=!1},d(e){s(w),e&&s(ge),e&&s(j),_(T),e&&s(de),e&&s($),_(V),e&&s(ve),e&&s(b),_(H),e&&s(_e),_(B,e),e&&s(we),e&&s(y),_(G),e&&s(je),e&&s(N),e&&s($e),_(C,e),e&&s(be),e&&s(E),_(z),e&&s(ye),e&&s(I),e&&s(Ee),_(O,e),e&&s(xe),e&&s(x),_(R),e&&s(ke),e&&s(Z),e&&s(Pe),_(Q,e),e&&s(De),e&&s(k),_(W),e&&s(Se),_(X,e)}}}const zs={local:"diffusers-for-vision",sections:[{local:"direct-image-generation",sections:[{local:"example-image-generation-with-pndm",title:"**Example image generation with PNDM**"},{local:"example-1024x1024-image-generation-with-sde-ve",title:"**Example 1024x1024 image generation with SDE VE**"},{local:"example-32x32-image-generation-with-sde-vp",title:"**Example 32x32 image generation with SDE VP**"},{local:"text-to-image-generation-with-latent-diffusion",title:"**Text to Image generation with Latent Diffusion**"}],title:"Direct image generation"},{local:"text-to-image-generation",title:"Text to image generation"}],title:"Diffusers for vision"};function Js(ms){return Us(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ks extends Ts{constructor(w){super();Vs(this,w,Js,Cs,Hs,{})}}export{Ks as default,zs as metadata};
