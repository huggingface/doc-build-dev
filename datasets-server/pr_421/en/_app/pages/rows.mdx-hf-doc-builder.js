import{S as oa,i as ua,s as ca,e as l,k as h,w as J,t as e,M as ia,c as p,d as a,m as r,a as o,x as U,h as u,b as i,G as t,g as c,y as K,L as ha,q as Q,o as V,B as X,v as ra}from"../chunks/vendor-hf-doc-builder.js";import{I as ea}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as As}from"../chunks/CodeBlock-hf-doc-builder.js";function da(zs){let f,Y,m,w,I,_,js,G,qs,Z,j,fs,P,ms,gs,R,ws,ys,ss,b,as,E,vs,ts,d,_s,A,bs,xs,z,Ts,Ss,x,Ms,ns,T,ls,g,y,B,S,ks,W,$s,ps,D,Cs,es,v,Rs,F,Es,Ds,os,q,Os,M,L,Ns,Hs,k,Is,Gs,us,$,cs,O,Ps,is;return _=new ea({}),b=new As({props:{code:"https://datasets-server.huggingface.co/rows?dataset={dataset_name}&config={config_name}&split={split_name}",highlighted:'<span class="language-xml">https://datasets-server.huggingface.co/rows?dataset=</span><span class="hljs-template-variable">{dataset_name}</span><span class="language-xml">&amp;config=</span><span class="hljs-template-variable">{config_name}</span><span class="language-xml">&amp;split=</span><span class="hljs-template-variable">{split_name}</span>'}}),T=new As({props:{code:`{
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
    ...`}}),S=new ea({}),$=new As({props:{code:`  ...
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
  ...`}}),{c(){f=l("meta"),Y=h(),m=l("h1"),w=l("a"),I=l("span"),J(_.$$.fragment),js=h(),G=l("span"),qs=e("First rows"),Z=h(),j=l("p"),fs=e("The endpoint "),P=l("code"),ms=e("/rows"),gs=e(" provides the columns and the first rows of a dataset "),R=l("a"),ws=e("split"),ys=e(":"),ss=h(),J(b.$$.fragment),as=h(),E=l("p"),vs=e("The first 100 rows, or all the rows if the split contains less than 100 rows, are returned. The list of columns contain the data type."),ts=h(),d=l("p"),_s=e("For example, the columns and the first rows of the "),A=l("code"),bs=e("duorc"),xs=e(" / "),z=l("code"),Ts=e("SelfRC"),Ss=e(" train split are: "),x=l("a"),Ms=e("https://datasets-server.huggingface.co/rows?dataset=duorc&config=SelfRC&split=train"),ns=h(),J(T.$$.fragment),ls=h(),g=l("h2"),y=l("a"),B=l("span"),J(S.$$.fragment),ks=h(),W=l("span"),$s=e("Truncated responses"),ps=h(),D=l("p"),Cs=e("When the size of the response for 100 rows would have been too big, the last rows are removed until reaching under the acceptable limit."),es=h(),v=l("p"),Rs=e("If even the first rows generate a response that does not fit within the limit, the content of the cells themselves is truncated and converted to a string. In this case, the truncated cells are listed in the "),F=l("code"),Es=e("truncated_cells"),Ds=e(" field."),os=h(),q=l("p"),Os=e("See for example the "),M=l("a"),L=l("code"),Ns=e("ett"),Hs=e(" dataset: "),k=l("a"),Is=e("https://datasets-server.huggingface.co/rows?dataset=ett&config=m2&split=test"),Gs=e(". Only 10 rows are returned, and the content of two of the columns are truncated:"),us=h(),J($.$$.fragment),cs=h(),O=l("p"),Ps=e("This limitation was introduced to ensure the response size is always under 1 MB."),this.h()},l(s){const n=ia('[data-svelte="svelte-1phssyn"]',document.head);f=p(n,"META",{name:!0,content:!0}),n.forEach(a),Y=r(s),m=p(s,"H1",{class:!0});var hs=o(m);w=p(hs,"A",{id:!0,class:!0,href:!0});var Bs=o(w);I=p(Bs,"SPAN",{});var Ws=o(I);U(_.$$.fragment,Ws),Ws.forEach(a),Bs.forEach(a),js=r(hs),G=p(hs,"SPAN",{});var Fs=o(G);qs=u(Fs,"First rows"),Fs.forEach(a),hs.forEach(a),Z=r(s),j=p(s,"P",{});var N=o(j);fs=u(N,"The endpoint "),P=p(N,"CODE",{});var Ls=o(P);ms=u(Ls,"/rows"),Ls.forEach(a),gs=u(N," provides the columns and the first rows of a dataset "),R=p(N,"A",{href:!0});var Js=o(R);ws=u(Js,"split"),Js.forEach(a),ys=u(N,":"),N.forEach(a),ss=r(s),U(b.$$.fragment,s),as=r(s),E=p(s,"P",{});var Us=o(E);vs=u(Us,"The first 100 rows, or all the rows if the split contains less than 100 rows, are returned. The list of columns contain the data type."),Us.forEach(a),ts=r(s),d=p(s,"P",{});var C=o(d);_s=u(C,"For example, the columns and the first rows of the "),A=p(C,"CODE",{});var Ks=o(A);bs=u(Ks,"duorc"),Ks.forEach(a),xs=u(C," / "),z=p(C,"CODE",{});var Qs=o(z);Ts=u(Qs,"SelfRC"),Qs.forEach(a),Ss=u(C," train split are: "),x=p(C,"A",{href:!0,rel:!0});var Vs=o(x);Ms=u(Vs,"https://datasets-server.huggingface.co/rows?dataset=duorc&config=SelfRC&split=train"),Vs.forEach(a),C.forEach(a),ns=r(s),U(T.$$.fragment,s),ls=r(s),g=p(s,"H2",{class:!0});var rs=o(g);y=p(rs,"A",{id:!0,class:!0,href:!0});var Xs=o(y);B=p(Xs,"SPAN",{});var Ys=o(B);U(S.$$.fragment,Ys),Ys.forEach(a),Xs.forEach(a),ks=r(rs),W=p(rs,"SPAN",{});var Zs=o(W);$s=u(Zs,"Truncated responses"),Zs.forEach(a),rs.forEach(a),ps=r(s),D=p(s,"P",{});var sa=o(D);Cs=u(sa,"When the size of the response for 100 rows would have been too big, the last rows are removed until reaching under the acceptable limit."),sa.forEach(a),es=r(s),v=p(s,"P",{});var ds=o(v);Rs=u(ds,"If even the first rows generate a response that does not fit within the limit, the content of the cells themselves is truncated and converted to a string. In this case, the truncated cells are listed in the "),F=p(ds,"CODE",{});var aa=o(F);Es=u(aa,"truncated_cells"),aa.forEach(a),Ds=u(ds," field."),ds.forEach(a),os=r(s),q=p(s,"P",{});var H=o(q);Os=u(H,"See for example the "),M=p(H,"A",{href:!0,rel:!0});var ta=o(M);L=p(ta,"CODE",{});var na=o(L);Ns=u(na,"ett"),na.forEach(a),ta.forEach(a),Hs=u(H," dataset: "),k=p(H,"A",{href:!0,rel:!0});var la=o(k);Is=u(la,"https://datasets-server.huggingface.co/rows?dataset=ett&config=m2&split=test"),la.forEach(a),Gs=u(H,". Only 10 rows are returned, and the content of two of the columns are truncated:"),H.forEach(a),us=r(s),U($.$$.fragment,s),cs=r(s),O=p(s,"P",{});var pa=o(O);Ps=u(pa,"This limitation was introduced to ensure the response size is always under 1 MB."),pa.forEach(a),this.h()},h(){i(f,"name","hf:doc:metadata"),i(f,"content",JSON.stringify(ja)),i(w,"id","first-rows"),i(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(w,"href","#first-rows"),i(m,"class","relative group"),i(R,"href","./splits"),i(x,"href","https://datasets-server.huggingface.co/rows?dataset=duorc&config=SelfRC&split=train"),i(x,"rel","nofollow"),i(y,"id","truncated-responses"),i(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(y,"href","#truncated-responses"),i(g,"class","relative group"),i(M,"href","https://huggingface.co/datasets/ett/viewer/m2/test"),i(M,"rel","nofollow"),i(k,"href","https://datasets-server.huggingface.co/rows?dataset=ett&config=m2&split=test"),i(k,"rel","nofollow")},m(s,n){t(document.head,f),c(s,Y,n),c(s,m,n),t(m,w),t(w,I),K(_,I,null),t(m,js),t(m,G),t(G,qs),c(s,Z,n),c(s,j,n),t(j,fs),t(j,P),t(P,ms),t(j,gs),t(j,R),t(R,ws),t(j,ys),c(s,ss,n),K(b,s,n),c(s,as,n),c(s,E,n),t(E,vs),c(s,ts,n),c(s,d,n),t(d,_s),t(d,A),t(A,bs),t(d,xs),t(d,z),t(z,Ts),t(d,Ss),t(d,x),t(x,Ms),c(s,ns,n),K(T,s,n),c(s,ls,n),c(s,g,n),t(g,y),t(y,B),K(S,B,null),t(g,ks),t(g,W),t(W,$s),c(s,ps,n),c(s,D,n),t(D,Cs),c(s,es,n),c(s,v,n),t(v,Rs),t(v,F),t(F,Es),t(v,Ds),c(s,os,n),c(s,q,n),t(q,Os),t(q,M),t(M,L),t(L,Ns),t(q,Hs),t(q,k),t(k,Is),t(q,Gs),c(s,us,n),K($,s,n),c(s,cs,n),c(s,O,n),t(O,Ps),is=!0},p:ha,i(s){is||(Q(_.$$.fragment,s),Q(b.$$.fragment,s),Q(T.$$.fragment,s),Q(S.$$.fragment,s),Q($.$$.fragment,s),is=!0)},o(s){V(_.$$.fragment,s),V(b.$$.fragment,s),V(T.$$.fragment,s),V(S.$$.fragment,s),V($.$$.fragment,s),is=!1},d(s){a(f),s&&a(Y),s&&a(m),X(_),s&&a(Z),s&&a(j),s&&a(ss),X(b,s),s&&a(as),s&&a(E),s&&a(ts),s&&a(d),s&&a(ns),X(T,s),s&&a(ls),s&&a(g),X(S),s&&a(ps),s&&a(D),s&&a(es),s&&a(v),s&&a(os),s&&a(q),s&&a(us),X($,s),s&&a(cs),s&&a(O)}}}const ja={local:"first-rows",sections:[{local:"truncated-responses",title:"Truncated responses"}],title:"First rows"};function qa(zs){return ra(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class wa extends oa{constructor(f){super();ua(this,f,qa,da,ca,{})}}export{wa as default,ja as metadata};
