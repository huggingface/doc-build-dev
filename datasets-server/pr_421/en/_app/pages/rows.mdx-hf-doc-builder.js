import{S as na,i as la,s as pa,e as l,k as h,w as L,t as e,M as ea,c as p,d as a,m as r,a as o,x as J,h as u,b as i,G as t,g as c,y as U,L as oa,q as K,o as Q,B as V,v as ua}from"../chunks/vendor-hf-doc-builder.js";import{I as ta}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as Is}from"../chunks/CodeBlock-hf-doc-builder.js";function ca(Gs){let f,X,m,w,H,_,rs,I,ds,Y,j,js,G,qs,fs,R,ms,gs,Z,b,ss,E,ws,as,d,ys,A,vs,_s,P,bs,xs,x,Ts,ts,T,ns,g,y,z,S,Ss,B,Ms,ls,D,ks,ps,v,$s,W,Cs,Rs,es,q,Es,M,F,Ds,Os,k,Ns,Hs,os,$,us;return _=new ta({}),b=new Is({props:{code:"https://datasets-server.huggingface.co/rows?dataset={dataset_name}&config={config_name}&split={split_name}",highlighted:'<span class="language-xml">https://datasets-server.huggingface.co/rows?dataset=</span><span class="hljs-template-variable">{dataset_name}</span><span class="language-xml">&amp;config=</span><span class="hljs-template-variable">{config_name}</span><span class="language-xml">&amp;split=</span><span class="hljs-template-variable">{split_name}</span>'}}),T=new Is({props:{code:`{
  "columns": [
    {
      "dataset": "duorc",
      "config": "SelfRC",
      "split": "train",
      "column_idx": 0,
      "column": { "name": "plot_id", "type": "STRING" }
    },
    {
      "dataset": "duorc",
      "config": "SelfRC",
      "split": "train",
      "column_idx": 1,
      "column": { "name": "plot", "type": "STRING" }
    },
    {
      "dataset": "duorc",
      "config": "SelfRC",
      "split": "train",
      "column_idx": 2,
      "column": { "name": "title", "type": "STRING" }
    },
    {
      "dataset": "duorc",
      "config": "SelfRC",
      "split": "train",
      "column_idx": 3,
      "column": { "name": "question_id", "type": "STRING" }
    },
    {
      "dataset": "duorc",
      "config": "SelfRC",
      "split": "train",
      "column_idx": 4,
      "column": { "name": "question", "type": "STRING" }
    },
    {
      "dataset": "duorc",
      "config": "SelfRC",
      "split": "train",
      "column_idx": 5,
      "column": { "name": "answers", "type": "JSON" }
    },
    {
      "dataset": "duorc",
      "config": "SelfRC",
      "split": "train",
      "column_idx": 6,
      "column": { "name": "no_answer", "type": "BOOL" }
    }
  ],
  "rows": [
    {
      "dataset": "duorc",
      "config": "SelfRC",
      "split": "train",
      "row_idx": 0,
      "row": {
        "plot_id": "/m/03vyhn",
        "plot": "200 years in the future, Mars has been colonized by a high-tech company.\\nMelanie Ballard (Natasha Henstridge) arrives by train to a Mars mining camp which has cut all communication links with the company headquarters. She's not alone, as she is with a group of fellow police officers. They find the mining camp deserted except for a person in the prison, Desolation Williams (Ice Cube), who seems to laugh about them because they are all going to die. They were supposed to take Desolation to headquarters, but decide to explore first to find out what happened.They find a man inside an encapsulated mining car, who tells them not to open it. However, they do and he tries to kill them. One of the cops witnesses strange men with deep scarred and heavily tattooed faces killing the remaining survivors. The cops realise they need to leave the place fast.Desolation explains that the miners opened a kind of Martian construction in the soil which unleashed red dust. Those who breathed that dust became violent psychopaths who started to build weapons and kill the uninfected. They changed genetically, becoming distorted but much stronger.The cops and Desolation leave the prison with difficulty, and devise a plan to kill all the genetically modified ex-miners on the way out. However, the plan goes awry, and only Melanie and Desolation reach headquarters alive. Melanie realises that her bosses won't ever believe her. However, the red dust eventually arrives to headquarters, and Melanie and Desolation need to fight once again.",
        "title": "Ghosts of Mars",
        "question_id": "b440de7d-9c3f-841c-eaec-a14bdff950d1",
        "question": "How did the police arrive at the Mars mining camp?",
        "answers": ["They arrived by train."],
        "no_answer": false
      },
      "truncated_cells": []
    },
    {
      "dataset": "duorc",
      "config": "SelfRC",
      "split": "train",
      "row_idx": 1,
      "row": {
        "plot_id": "/m/03vyhn",
        "plot": "200 years in the future, Mars has been colonized by a high-tech company.\\nMelanie Ballard (Natasha Henstridge) arrives by train to a Mars mining camp which has cut all communication links with the company headquarters. She's not alone, as she is with a group of fellow police officers. They find the mining camp deserted except for a person in the prison, Desolation Williams (Ice Cube), who seems to laugh about them because they are all going to die. They were supposed to take Desolation to headquarters, but decide to explore first to find out what happened.They find a man inside an encapsulated mining car, who tells them not to open it. However, they do and he tries to kill them. One of the cops witnesses strange men with deep scarred and heavily tattooed faces killing the remaining survivors. The cops realise they need to leave the place fast.Desolation explains that the miners opened a kind of Martian construction in the soil which unleashed red dust. Those who breathed that dust became violent psychopaths who started to build weapons and kill the uninfected. They changed genetically, becoming distorted but much stronger.The cops and Desolation leave the prison with difficulty, and devise a plan to kill all the genetically modified ex-miners on the way out. However, the plan goes awry, and only Melanie and Desolation reach headquarters alive. Melanie realises that her bosses won't ever believe her. However, the red dust eventually arrives to headquarters, and Melanie and Desolation need to fight once again.",
        "title": "Ghosts of Mars",
        "question_id": "a9f95c0d-121f-3ca9-1595-d497dc8bc56c",
        "question": "Who has colonized Mars 200 years in the future?",
        "answers": [
          "A high-tech company has colonized Mars 200 years in the future."
        ],
        "no_answer": false
      },
      "truncated_cells": []
    },
    ...`,highlighted:`<span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;columns&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;SelfRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;train&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;column_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;column&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span> <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;plot_id&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;STRING&quot;</span> <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;SelfRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;train&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;column_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;column&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span> <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;plot&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;STRING&quot;</span> <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;SelfRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;train&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;column_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;column&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span> <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;title&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;STRING&quot;</span> <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;SelfRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;train&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;column_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;column&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span> <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;question_id&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;STRING&quot;</span> <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;SelfRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;train&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;column_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">4</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;column&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span> <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;question&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;STRING&quot;</span> <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;SelfRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;train&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;column_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">5</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;column&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span> <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;answers&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;JSON&quot;</span> <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;SelfRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;train&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;column_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">6</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;column&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span> <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;no_answer&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;BOOL&quot;</span> <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span>
  <span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;rows&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;SelfRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;train&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;row_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;row&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;plot_id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;/m/03vyhn&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;plot&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;200 years in the future, Mars has been colonized by a high-tech company.\\nMelanie Ballard (Natasha Henstridge) arrives by train to a Mars mining camp which has cut all communication links with the company headquarters. She&#x27;s not alone, as she is with a group of fellow police officers. They find the mining camp deserted except for a person in the prison, Desolation Williams (Ice Cube), who seems to laugh about them because they are all going to die. They were supposed to take Desolation to headquarters, but decide to explore first to find out what happened.They find a man inside an encapsulated mining car, who tells them not to open it. However, they do and he tries to kill them. One of the cops witnesses strange men with deep scarred and heavily tattooed faces killing the remaining survivors. The cops realise they need to leave the place fast.Desolation explains that the miners opened a kind of Martian construction in the soil which unleashed red dust. Those who breathed that dust became violent psychopaths who started to build weapons and kill the uninfected. They changed genetically, becoming distorted but much stronger.The cops and Desolation leave the prison with difficulty, and devise a plan to kill all the genetically modified ex-miners on the way out. However, the plan goes awry, and only Melanie and Desolation reach headquarters alive. Melanie realises that her bosses won&#x27;t ever believe her. However, the red dust eventually arrives to headquarters, and Melanie and Desolation need to fight once again.&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;title&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;Ghosts of Mars&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;question_id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;b440de7d-9c3f-841c-eaec-a14bdff950d1&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;question&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;How did the police arrive at the Mars mining camp?&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;answers&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-string">&quot;They arrived by train.&quot;</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;no_answer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span>
      <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;truncated_cells&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-punctuation">]</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;SelfRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;train&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;row_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;row&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;plot_id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;/m/03vyhn&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;plot&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;200 years in the future, Mars has been colonized by a high-tech company.\\nMelanie Ballard (Natasha Henstridge) arrives by train to a Mars mining camp which has cut all communication links with the company headquarters. She&#x27;s not alone, as she is with a group of fellow police officers. They find the mining camp deserted except for a person in the prison, Desolation Williams (Ice Cube), who seems to laugh about them because they are all going to die. They were supposed to take Desolation to headquarters, but decide to explore first to find out what happened.They find a man inside an encapsulated mining car, who tells them not to open it. However, they do and he tries to kill them. One of the cops witnesses strange men with deep scarred and heavily tattooed faces killing the remaining survivors. The cops realise they need to leave the place fast.Desolation explains that the miners opened a kind of Martian construction in the soil which unleashed red dust. Those who breathed that dust became violent psychopaths who started to build weapons and kill the uninfected. They changed genetically, becoming distorted but much stronger.The cops and Desolation leave the prison with difficulty, and devise a plan to kill all the genetically modified ex-miners on the way out. However, the plan goes awry, and only Melanie and Desolation reach headquarters alive. Melanie realises that her bosses won&#x27;t ever believe her. However, the red dust eventually arrives to headquarters, and Melanie and Desolation need to fight once again.&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;title&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;Ghosts of Mars&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;question_id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;a9f95c0d-121f-3ca9-1595-d497dc8bc56c&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;question&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;Who has colonized Mars 200 years in the future?&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;answers&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
          <span class="hljs-string">&quot;A high-tech company has colonized Mars 200 years in the future.&quot;</span>
        <span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;no_answer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span>
      <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;truncated_cells&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-punctuation">]</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    ...`}}),S=new ta({}),$=new Is({props:{code:`  ...
  "rows": [
    {
      "dataset": "ett",
      "config": "m2",
      "split": "test",
      "row_idx": 0,
      "row": {
        "start": 1467331200.0,
        "target": "[38.6619987487793,38.222999572753906,37.34400177001953,37.124000549316406,37.124000549316406,36.9039",
        "feat_static_cat": [0],
        "feat_dynamic_real": "[[41.130001068115234,39.62200164794922,38.86800003051758,35.518001556396484,37.52799987792969,37.611",
        "item_id": "OT"
      },
      "truncated_cells": ["target", "feat_dynamic_real"]
    },
    {
      "dataset": "ett",
      "config": "m2",
      "split": "test",
      "row_idx": 1,
      "row": {
        "start": 1467331200.0,
        "target": "[38.6619987487793,38.222999572753906,37.34400177001953,37.124000549316406,37.124000549316406,36.9039",
        "feat_static_cat": [0],
        "feat_dynamic_real": "[[41.130001068115234,39.62200164794922,38.86800003051758,35.518001556396484,37.52799987792969,37.611",
        "item_id": "OT"
      },
      "truncated_cells": ["target", "feat_dynamic_real"]
    }
  ...`,highlighted:`  ...
  <span class="hljs-attr">&quot;rows&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;ett&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;m2&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;test&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;row_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;row&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;start&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1467331200.0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;target&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;[38.6619987487793,38.222999572753906,37.34400177001953,37.124000549316406,37.124000549316406,36.9039&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;feat_static_cat&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-number">0</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;feat_dynamic_real&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;[[41.130001068115234,39.62200164794922,38.86800003051758,35.518001556396484,37.52799987792969,37.611&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;item_id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;OT&quot;</span>
      <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;truncated_cells&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-string">&quot;target&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-string">&quot;feat_dynamic_real&quot;</span><span class="hljs-punctuation">]</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;ett&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;m2&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;test&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;row_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;row&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;start&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1467331200.0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;target&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;[38.6619987487793,38.222999572753906,37.34400177001953,37.124000549316406,37.124000549316406,36.9039&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;feat_static_cat&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-number">0</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;feat_dynamic_real&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;[[41.130001068115234,39.62200164794922,38.86800003051758,35.518001556396484,37.52799987792969,37.611&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;item_id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;OT&quot;</span>
      <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;truncated_cells&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-string">&quot;target&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-string">&quot;feat_dynamic_real&quot;</span><span class="hljs-punctuation">]</span>
    <span class="hljs-punctuation">}</span>
  ...`}}),{c(){f=l("meta"),X=h(),m=l("h1"),w=l("a"),H=l("span"),L(_.$$.fragment),rs=h(),I=l("span"),ds=e("First rows"),Y=h(),j=l("p"),js=e("The endpoint "),G=l("code"),qs=e("/rows"),fs=e(" provides the columns and the first rows of a dataset "),R=l("a"),ms=e("split"),gs=e(":"),Z=h(),L(b.$$.fragment),ss=h(),E=l("p"),ws=e("The first 100 rows, or all the rows if the split contains less than 100 rows, are returned. The list of columns contain the data type."),as=h(),d=l("p"),ys=e("For example, the columns and the first rows of the "),A=l("code"),vs=e("duorc"),_s=e(" / "),P=l("code"),bs=e("SelfRC"),xs=e(" train split are: "),x=l("a"),Ts=e("https://datasets-server.huggingface.co/rows?dataset=duorc&config=SelfRC&split=train"),ts=h(),L(T.$$.fragment),ns=h(),g=l("h2"),y=l("a"),z=l("span"),L(S.$$.fragment),Ss=h(),B=l("span"),Ms=e("Truncated responses"),ls=h(),D=l("p"),ks=e("When the response size for 100 rows is too big, the last rows are removed until the response size is under 1MB."),ps=h(),v=l("p"),$s=e("If even the first rows generate a response that does not fit within the limit, the content of the cells themselves is truncated and converted to a string. In this case, the truncated cells are listed in the "),W=l("code"),Cs=e("truncated_cells"),Rs=e(" field."),es=h(),q=l("p"),Es=e("See for example the "),M=l("a"),F=l("code"),Ds=e("ett"),Os=e(" dataset: "),k=l("a"),Ns=e("https://datasets-server.huggingface.co/rows?dataset=ett&config=m2&split=test"),Hs=e(". Only 10 rows are returned, and the content of two of the columns are truncated:"),os=h(),L($.$$.fragment),this.h()},l(s){const n=ea('[data-svelte="svelte-1phssyn"]',document.head);f=p(n,"META",{name:!0,content:!0}),n.forEach(a),X=r(s),m=p(s,"H1",{class:!0});var cs=o(m);w=p(cs,"A",{id:!0,class:!0,href:!0});var As=o(w);H=p(As,"SPAN",{});var Ps=o(H);J(_.$$.fragment,Ps),Ps.forEach(a),As.forEach(a),rs=r(cs),I=p(cs,"SPAN",{});var zs=o(I);ds=u(zs,"First rows"),zs.forEach(a),cs.forEach(a),Y=r(s),j=p(s,"P",{});var O=o(j);js=u(O,"The endpoint "),G=p(O,"CODE",{});var Bs=o(G);qs=u(Bs,"/rows"),Bs.forEach(a),fs=u(O," provides the columns and the first rows of a dataset "),R=p(O,"A",{href:!0});var Ws=o(R);ms=u(Ws,"split"),Ws.forEach(a),gs=u(O,":"),O.forEach(a),Z=r(s),J(b.$$.fragment,s),ss=r(s),E=p(s,"P",{});var Fs=o(E);ws=u(Fs,"The first 100 rows, or all the rows if the split contains less than 100 rows, are returned. The list of columns contain the data type."),Fs.forEach(a),as=r(s),d=p(s,"P",{});var C=o(d);ys=u(C,"For example, the columns and the first rows of the "),A=p(C,"CODE",{});var Ls=o(A);vs=u(Ls,"duorc"),Ls.forEach(a),_s=u(C," / "),P=p(C,"CODE",{});var Js=o(P);bs=u(Js,"SelfRC"),Js.forEach(a),xs=u(C," train split are: "),x=p(C,"A",{href:!0,rel:!0});var Us=o(x);Ts=u(Us,"https://datasets-server.huggingface.co/rows?dataset=duorc&config=SelfRC&split=train"),Us.forEach(a),C.forEach(a),ts=r(s),J(T.$$.fragment,s),ns=r(s),g=p(s,"H2",{class:!0});var is=o(g);y=p(is,"A",{id:!0,class:!0,href:!0});var Ks=o(y);z=p(Ks,"SPAN",{});var Qs=o(z);J(S.$$.fragment,Qs),Qs.forEach(a),Ks.forEach(a),Ss=r(is),B=p(is,"SPAN",{});var Vs=o(B);Ms=u(Vs,"Truncated responses"),Vs.forEach(a),is.forEach(a),ls=r(s),D=p(s,"P",{});var Xs=o(D);ks=u(Xs,"When the response size for 100 rows is too big, the last rows are removed until the response size is under 1MB."),Xs.forEach(a),ps=r(s),v=p(s,"P",{});var hs=o(v);$s=u(hs,"If even the first rows generate a response that does not fit within the limit, the content of the cells themselves is truncated and converted to a string. In this case, the truncated cells are listed in the "),W=p(hs,"CODE",{});var Ys=o(W);Cs=u(Ys,"truncated_cells"),Ys.forEach(a),Rs=u(hs," field."),hs.forEach(a),es=r(s),q=p(s,"P",{});var N=o(q);Es=u(N,"See for example the "),M=p(N,"A",{href:!0,rel:!0});var Zs=o(M);F=p(Zs,"CODE",{});var sa=o(F);Ds=u(sa,"ett"),sa.forEach(a),Zs.forEach(a),Os=u(N," dataset: "),k=p(N,"A",{href:!0,rel:!0});var aa=o(k);Ns=u(aa,"https://datasets-server.huggingface.co/rows?dataset=ett&config=m2&split=test"),aa.forEach(a),Hs=u(N,". Only 10 rows are returned, and the content of two of the columns are truncated:"),N.forEach(a),os=r(s),J($.$$.fragment,s),this.h()},h(){i(f,"name","hf:doc:metadata"),i(f,"content",JSON.stringify(ia)),i(w,"id","first-rows"),i(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(w,"href","#first-rows"),i(m,"class","relative group"),i(R,"href","./splits"),i(x,"href","https://datasets-server.huggingface.co/rows?dataset=duorc&config=SelfRC&split=train"),i(x,"rel","nofollow"),i(y,"id","truncated-responses"),i(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(y,"href","#truncated-responses"),i(g,"class","relative group"),i(M,"href","https://huggingface.co/datasets/ett/viewer/m2/test"),i(M,"rel","nofollow"),i(k,"href","https://datasets-server.huggingface.co/rows?dataset=ett&config=m2&split=test"),i(k,"rel","nofollow")},m(s,n){t(document.head,f),c(s,X,n),c(s,m,n),t(m,w),t(w,H),U(_,H,null),t(m,rs),t(m,I),t(I,ds),c(s,Y,n),c(s,j,n),t(j,js),t(j,G),t(G,qs),t(j,fs),t(j,R),t(R,ms),t(j,gs),c(s,Z,n),U(b,s,n),c(s,ss,n),c(s,E,n),t(E,ws),c(s,as,n),c(s,d,n),t(d,ys),t(d,A),t(A,vs),t(d,_s),t(d,P),t(P,bs),t(d,xs),t(d,x),t(x,Ts),c(s,ts,n),U(T,s,n),c(s,ns,n),c(s,g,n),t(g,y),t(y,z),U(S,z,null),t(g,Ss),t(g,B),t(B,Ms),c(s,ls,n),c(s,D,n),t(D,ks),c(s,ps,n),c(s,v,n),t(v,$s),t(v,W),t(W,Cs),t(v,Rs),c(s,es,n),c(s,q,n),t(q,Es),t(q,M),t(M,F),t(F,Ds),t(q,Os),t(q,k),t(k,Ns),t(q,Hs),c(s,os,n),U($,s,n),us=!0},p:oa,i(s){us||(K(_.$$.fragment,s),K(b.$$.fragment,s),K(T.$$.fragment,s),K(S.$$.fragment,s),K($.$$.fragment,s),us=!0)},o(s){Q(_.$$.fragment,s),Q(b.$$.fragment,s),Q(T.$$.fragment,s),Q(S.$$.fragment,s),Q($.$$.fragment,s),us=!1},d(s){a(f),s&&a(X),s&&a(m),V(_),s&&a(Y),s&&a(j),s&&a(Z),V(b,s),s&&a(ss),s&&a(E),s&&a(as),s&&a(d),s&&a(ts),V(T,s),s&&a(ns),s&&a(g),V(S),s&&a(ls),s&&a(D),s&&a(ps),s&&a(v),s&&a(es),s&&a(q),s&&a(os),V($,s)}}}const ia={local:"first-rows",sections:[{local:"truncated-responses",title:"Truncated responses"}],title:"First rows"};function ha(Gs){return ua(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qa extends na{constructor(f){super();la(this,f,ha,ca,pa,{})}}export{qa as default,ia as metadata};
