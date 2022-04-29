import{S as Fo,i as Io,s as Go,e as r,k as p,w as b,t as c,M as So,c as n,d as o,m as h,a as s,x as w,h as l,b as i,F as t,g as m,y,q as $,o as D,B as x,v as Oo,L as Lo}from"../../chunks/vendor-6b77c823.js";import{T as Bo}from"../../chunks/Tip-39098574.js";import{D as Ie}from"../../chunks/Docstring-1088f2fb.js";import{C as Ro}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ge}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as qo}from"../../chunks/ExampleCodeBlock-5212b321.js";function Ho(F){let f,T,g,u,v;return u=new Ro({props:{code:`from transformers import DecisionTransformerModel, DecisionTransformerConfig

# Initializing a DecisionTransformer configuration
configuration = DecisionTransformerConfig()

# Initializing a model from the configuration
model = DecisionTransformerConfig(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DecisionTransformerModel, DecisionTransformerConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a DecisionTransformer configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = DecisionTransformerConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DecisionTransformerConfig(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){f=r("p"),T=c("Example:"),g=p(),b(u.$$.fragment)},l(a){f=n(a,"P",{});var _=s(f);T=l(_,"Example:"),_.forEach(o),g=h(a),w(u.$$.fragment,a)},m(a,_){m(a,f,_),t(f,T),m(a,g,_),y(u,a,_),v=!0},p:Lo,i(a){v||($(u.$$.fragment,a),v=!0)},o(a){D(u.$$.fragment,a),v=!1},d(a){a&&o(f),a&&o(g),x(u,a)}}}function Ko(F){let f,T,g,u,v;return{c(){f=r("p"),T=c("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=c("Module"),v=c(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){f=n(a,"P",{});var _=s(f);T=l(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(_,"CODE",{});var I=s(g);u=l(I,"Module"),I.forEach(o),v=l(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(a,_){m(a,f,_),t(f,T),t(f,g),t(g,u),t(f,v)},d(a){a&&o(f)}}}function Uo(F){let f,T,g,u,v;return u=new Ro({props:{code:`from transformers import DecisionTransformerModel
import torch

model = DecisionTransformerModel.from_pretrained("edbeeching/decision-transformer-gym-hopper-medium")
# evaluation
model = model.to(device)
model.eval()

env = gym.make("Hopper-v3")
state_dim = env.observation_space.shape[0]
act_dim = env.action_space.shape[0]

state = env.reset()
states = torch.from_numpy(state).reshape(1, 1, state_dim).to(device=device, dtype=torch.float32)
actions = torch.zeros((1, 1, act_dim), device=device, dtype=torch.float32)
rewards = torch.zeros(1, 1, device=device, dtype=torch.float32)
target_return = torch.tensor(TARGET_RETURN, dtype=torch.float32).reshape(1, 1)
timesteps = torch.tensor(0, device=device, dtype=torch.long).reshape(1, 1)
attention_mask = torch.zeros(1, 1, device=device, dtype=torch.float32)

# forward pass
with torch.no_grad():
    state_preds, action_preds, return_preds = model(
        states=states,
        actions=actions,
        rewards=rewards,
        returns_to_go=target_return,
        timesteps=timesteps,
        attention_mask=attention_mask,
        return_dict=False,
    )`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DecisionTransformerModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>model = DecisionTransformerModel.from_pretrained(<span class="hljs-string">&quot;edbeeching/decision-transformer-gym-hopper-medium&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># evaluation</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = model.to(device)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">eval</span>()

<span class="hljs-meta">&gt;&gt;&gt; </span>env = gym.make(<span class="hljs-string">&quot;Hopper-v3&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>state_dim = env.observation_space.shape[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>act_dim = env.action_space.shape[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>state = env.reset()
<span class="hljs-meta">&gt;&gt;&gt; </span>states = torch.from_numpy(state).reshape(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, state_dim).to(device=device, dtype=torch.float32)
<span class="hljs-meta">&gt;&gt;&gt; </span>actions = torch.zeros((<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, act_dim), device=device, dtype=torch.float32)
<span class="hljs-meta">&gt;&gt;&gt; </span>rewards = torch.zeros(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, device=device, dtype=torch.float32)
<span class="hljs-meta">&gt;&gt;&gt; </span>target_return = torch.tensor(TARGET_RETURN, dtype=torch.float32).reshape(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>timesteps = torch.tensor(<span class="hljs-number">0</span>, device=device, dtype=torch.long).reshape(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = torch.zeros(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, device=device, dtype=torch.float32)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    state_preds, action_preds, return_preds = model(
<span class="hljs-meta">... </span>        states=states,
<span class="hljs-meta">... </span>        actions=actions,
<span class="hljs-meta">... </span>        rewards=rewards,
<span class="hljs-meta">... </span>        returns_to_go=target_return,
<span class="hljs-meta">... </span>        timesteps=timesteps,
<span class="hljs-meta">... </span>        attention_mask=attention_mask,
<span class="hljs-meta">... </span>        return_dict=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>    )`}}),{c(){f=r("p"),T=c("Examples:"),g=p(),b(u.$$.fragment)},l(a){f=n(a,"P",{});var _=s(f);T=l(_,"Examples:"),_.forEach(o),g=h(a),w(u.$$.fragment,a)},m(a,_){m(a,f,_),t(f,T),m(a,g,_),y(u,a,_),v=!0},p:Lo,i(a){v||($(u.$$.fragment,a),v=!0)},o(a){D(u.$$.fragment,a),v=!1},d(a){a&&o(f),a&&o(g),x(u,a)}}}function Vo(F){let f,T,g,u,v,a,_,I,ct,Se,C,G,je,Q,lt,ke,dt,Oe,P,mt,X,ft,pt,ht,Be,pe,ut,He,he,Ee,gt,Ke,ue,_t,Ue,ge,vt,Ve,M,Tt,Y,bt,wt,Z,yt,$t,We,z,S,Me,ee,Dt,Ce,xt,Je,j,te,jt,oe,kt,_e,Et,Mt,Ct,A,Pt,ve,zt,At,Te,Nt,qt,Lt,O,Qe,N,B,Pe,re,Rt,ze,Ft,Xe,q,ne,It,be,se,Ye,L,H,Ae,ae,Gt,Ne,St,Ze,k,ie,Ot,ce,Bt,le,Ht,Kt,Ut,we,Vt,de,Wt,Jt,E,me,Qt,R,Xt,ye,Yt,Zt,qe,eo,to,oo,K,ro,U,et;return a=new Ge({}),Q=new Ge({}),ee=new Ge({}),te=new Ie({props:{name:"class transformers.DecisionTransformerConfig",anchor:"transformers.DecisionTransformerConfig",parameters:[{name:"state_dim",val:" = 17"},{name:"act_dim",val:" = 4"},{name:"hidden_size",val:" = 128"},{name:"max_ep_len",val:" = 4096"},{name:"action_tanh",val:" = True"},{name:"vocab_size",val:" = 1"},{name:"n_positions",val:" = 1024"},{name:"n_embd",val:" = 768"},{name:"n_layer",val:" = 3"},{name:"n_head",val:" = 1"},{name:"n_inner",val:" = None"},{name:"activation_function",val:" = 'relu'"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"scale_attn_weights",val:" = True"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 50256"},{name:"eos_token_id",val:" = 50256"},{name:"scale_attn_by_inverse_layer_idx",val:" = False"},{name:"reorder_and_upcast_attn",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DecisionTransformerConfig.state_dim",description:`<strong>state_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 17) &#x2014;
The state size for the RL environment`,name:"state_dim"},{anchor:"transformers.DecisionTransformerConfig.act_dim",description:`<strong>act_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The size of the output action space`,name:"act_dim"},{anchor:"transformers.DecisionTransformerConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The size of the hidden layers`,name:"hidden_size"},{anchor:"transformers.DecisionTransformerConfig.max_ep_len",description:`<strong>max_ep_len</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
The maximum length of an episode in the environment`,name:"max_ep_len"},{anchor:"transformers.DecisionTransformerConfig.action_tanh",description:`<strong>action_tanh</strong> (<code>bool</code>, <em>optional</em>, defaults to True) &#x2014;
Whether to use a tanh activation on action prediction`,name:"action_tanh"},{anchor:"transformers.DecisionTransformerConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
Vocabulary size of the GPT-2 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17014/en/model_doc/decision_transformer#transformers.DecisionTransformerModel">DecisionTransformerModel</a>.`,name:"vocab_size"},{anchor:"transformers.DecisionTransformerConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"n_positions"},{anchor:"transformers.DecisionTransformerConfig.n_embd",description:`<strong>n_embd</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"n_embd"},{anchor:"transformers.DecisionTransformerConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.DecisionTransformerConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.DecisionTransformerConfig.n_inner",description:`<strong>n_inner</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Dimensionality of the inner feed-forward layers. If unset, will default to 4 times <code>n_embd</code>.`,name:"n_inner"},{anchor:"transformers.DecisionTransformerConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
Activation function, to be selected in the list <code>[&quot;relu&quot;, &quot;silu&quot;, &quot;gelu&quot;, &quot;tanh&quot;, &quot;gelu_new&quot;]</code>.`,name:"activation_function"},{anchor:"transformers.DecisionTransformerConfig.resid_pdrop",description:`<strong>resid_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"resid_pdrop"},{anchor:"transformers.DecisionTransformerConfig.embd_pdrop",description:`<strong>embd_pdrop</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the embeddings.`,name:"embd_pdrop"},{anchor:"transformers.DecisionTransformerConfig.attn_pdrop",description:`<strong>attn_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention.`,name:"attn_pdrop"},{anchor:"transformers.DecisionTransformerConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon to use in the layer normalization layers.`,name:"layer_norm_epsilon"},{anchor:"transformers.DecisionTransformerConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DecisionTransformerConfig.scale_attn_weights",description:`<strong>scale_attn_weights</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Scale attention weights by dividing by sqrt(hidden_size)..`,name:"scale_attn_weights"},{anchor:"transformers.DecisionTransformerConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.DecisionTransformerConfig.scale_attn_by_inverse_layer_idx",description:`<strong>scale_attn_by_inverse_layer_idx</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to additionally scale attention weights by <code>1 / layer_idx + 1</code>.`,name:"scale_attn_by_inverse_layer_idx"},{anchor:"transformers.DecisionTransformerConfig.reorder_and_upcast_attn",description:`<strong>reorder_and_upcast_attn</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to scale keys (K) prior to computing attention (dot-product) and upcast attention
dot-product/softmax to float() when training with mixed precision.`,name:"reorder_and_upcast_attn"}],source:"https://github.com/huggingface/transformers/blob/vr_17014/src/transformers/models/decision_transformer/configuration_decision_transformer.py#L29"}}),O=new qo({props:{anchor:"transformers.DecisionTransformerConfig.example",$$slots:{default:[Ho]},$$scope:{ctx:F}}}),re=new Ge({}),ne=new Ie({props:{name:"class transformers.DecisionTransformerGPT2Model",anchor:"transformers.DecisionTransformerGPT2Model",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17014/src/transformers/models/decision_transformer/modeling_decision_transformer.py#L479"}}),se=new Ie({props:{name:"forward",anchor:"transformers.DecisionTransformerGPT2Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17014/src/transformers/models/decision_transformer/modeling_decision_transformer.py#L511"}}),ae=new Ge({}),ie=new Ie({props:{name:"class transformers.DecisionTransformerModel",anchor:"transformers.DecisionTransformerModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DecisionTransformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17014/en/model_doc/decision_transformer#transformers.DecisionTransformerConfig">~DecisionTransformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17014/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17014/src/transformers/models/decision_transformer/modeling_decision_transformer.py#L800"}}),me=new Ie({props:{name:"forward",anchor:"transformers.DecisionTransformerModel.forward",parameters:[{name:"states",val:" = None"},{name:"actions",val:" = None"},{name:"rewards",val:" = None"},{name:"returns_to_go",val:" = None"},{name:"timesteps",val:" = None"},{name:"attention_mask",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"output_attentions",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.DecisionTransformerModel.forward.states",description:`<strong>states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, episode_length, state_dim)</code>) &#x2014;
The states for each step in the trajectory`,name:"states"},{anchor:"transformers.DecisionTransformerModel.forward.actions",description:`<strong>actions</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, episode_length, act_dim)</code>) &#x2014;
The actions taken by the &#x201C;expert&#x201D; policy for the current state, these are masked for auto regressive
prediction`,name:"actions"},{anchor:"transformers.DecisionTransformerModel.forward.rewards",description:`<strong>rewards</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, episode_length, 1)</code>) &#x2014;
The rewards for each state, action`,name:"rewards"},{anchor:"transformers.DecisionTransformerModel.forward.returns_to_go",description:`<strong>returns_to_go</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, episode_length, 1)</code>) &#x2014;
The returns for each state in the trajectory`,name:"returns_to_go"},{anchor:"transformers.DecisionTransformerModel.forward.timesteps",description:`<strong>timesteps</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, episode_length)</code>) &#x2014;
The timestep for each step in the trajectory`,name:"timesteps"},{anchor:"transformers.DecisionTransformerModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, episode_length)</code>) &#x2014;
Masking, used to mask the actions when performing autoregressive prediction`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/vr_17014/src/transformers/models/decision_transformer/modeling_decision_transformer.py#L833",returnDescription:`
<p>A <code>transformers.models.decision_transformer.modeling_decision_transformer.DecisionTransformerOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17014/en/model_doc/decision_transformer#transformers.DecisionTransformerConfig"
>DecisionTransformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>state_preds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, state_dim)</code>) \u2014 Environment state predictions</p>
</li>
<li>
<p><strong>action_preds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, action_dim)</code>) \u2014 Model action predictions</p>
</li>
<li>
<p><strong>return_preds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, 1)</code>) \u2014 Predicted returns for each state</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.decision_transformer.modeling_decision_transformer.DecisionTransformerOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),K=new Bo({props:{$$slots:{default:[Ko]},$$scope:{ctx:F}}}),U=new qo({props:{anchor:"transformers.DecisionTransformerModel.forward.example",$$slots:{default:[Uo]},$$scope:{ctx:F}}}),{c(){f=r("meta"),T=p(),g=r("h1"),u=r("a"),v=r("span"),b(a.$$.fragment),_=p(),I=r("span"),ct=c("Decision Transformer"),Se=p(),C=r("h2"),G=r("a"),je=r("span"),b(Q.$$.fragment),lt=p(),ke=r("span"),dt=c("Overview"),Oe=p(),P=r("p"),mt=c("The Decision Transformer model was proposed in "),X=r("a"),ft=c("Decision Transformer: Reinforcement Learning via Sequence Modeling"),pt=r("br"),ht=c(`
by Lili Chen, Kevin Lu, Aravind Rajeswaran, Kimin Lee, Aditya Grover, Michael Laskin, Pieter Abbeel, Aravind Srinivas, Igor Mordatch.`),Be=p(),pe=r("p"),ut=c("The abstract from the paper is the following:"),He=p(),he=r("p"),Ee=r("em"),gt=c(`We introduce a framework that abstracts Reinforcement Learning (RL) as a sequence modeling problem.
This allows us to draw upon the simplicity and scalability of the Transformer architecture, and associated advances
in language modeling such as GPT-x and BERT. In particular, we present Decision Transformer, an architecture that
casts the problem of RL as conditional sequence modeling. Unlike prior approaches to RL that fit value functions or
compute policy gradients, Decision Transformer simply outputs the optimal actions by leveraging a causally masked
Transformer. By conditioning an autoregressive model on the desired return (reward), past states, and actions, our
Decision Transformer model can generate future actions that achieve the desired return. Despite its simplicity,
Decision Transformer matches or exceeds the performance of state-of-the-art model-free offline RL baselines on
Atari, OpenAI Gym, and Key-to-Door tasks.`),Ke=p(),ue=r("p"),_t=c("Tips:"),Ue=p(),ge=r("p"),vt=c("This version of the model is for tasks where the state is a vector, image-based states will come soon."),Ve=p(),M=r("p"),Tt=c("This model was contributed by "),Y=r("a"),bt=c("edbeeching"),wt=c(". The original code can be found "),Z=r("a"),yt=c("here"),$t=c("."),We=p(),z=r("h2"),S=r("a"),Me=r("span"),b(ee.$$.fragment),Dt=p(),Ce=r("span"),xt=c("DecisionTransformerConfig"),Je=p(),j=r("div"),b(te.$$.fragment),jt=p(),oe=r("p"),kt=c("This is the configuration class to store the configuration of a "),_e=r("a"),Et=c("DecisionTransformerModel"),Mt=c(`. It is used to
instantiate a Decision Transformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the standard
DecisionTransformer architecture. Many of the config options are used to instatiate the GPT2 model that is used as
part of the architecture.`),Ct=p(),A=r("p"),Pt=c("Configuration objects inherit from "),ve=r("a"),zt=c("PretrainedConfig"),At=c(` and can be used to control the model outputs. Read the
documentation from `),Te=r("a"),Nt=c("PretrainedConfig"),qt=c(" for more information."),Lt=p(),b(O.$$.fragment),Qe=p(),N=r("h2"),B=r("a"),Pe=r("span"),b(re.$$.fragment),Rt=p(),ze=r("span"),Ft=c("DecisionTransformerGPT2Model"),Xe=p(),q=r("div"),b(ne.$$.fragment),It=p(),be=r("div"),b(se.$$.fragment),Ye=p(),L=r("h2"),H=r("a"),Ae=r("span"),b(ae.$$.fragment),Gt=p(),Ne=r("span"),St=c("DecisionTransformerModel"),Ze=p(),k=r("div"),b(ie.$$.fragment),Ot=p(),ce=r("p"),Bt=c(`The Decision Transformer Model
This model is a PyTorch `),le=r("a"),Ht=c("torch.nn.Module"),Kt=c(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ut=p(),we=r("p"),Vt=c(`The model builds upon the GPT2 architecture to perform autoregressive prediction of actions in an offline RL
setting. Refer to the paper for more details: `),de=r("a"),Wt=c("https://arxiv.org/abs/2106.01345"),Jt=p(),E=r("div"),b(me.$$.fragment),Qt=p(),R=r("p"),Xt=c("The "),ye=r("a"),Yt=c("DecisionTransformerModel"),Zt=c(" forward method, overrides the "),qe=r("code"),eo=c("__call__"),to=c(" special method."),oo=p(),b(K.$$.fragment),ro=p(),b(U.$$.fragment),this.h()},l(e){const d=So('[data-svelte="svelte-1phssyn"]',document.head);f=n(d,"META",{name:!0,content:!0}),d.forEach(o),T=h(e),g=n(e,"H1",{class:!0});var fe=s(g);u=n(fe,"A",{id:!0,class:!0,href:!0});var Le=s(u);v=n(Le,"SPAN",{});var Re=s(v);w(a.$$.fragment,Re),Re.forEach(o),Le.forEach(o),_=h(fe),I=n(fe,"SPAN",{});var so=s(I);ct=l(so,"Decision Transformer"),so.forEach(o),fe.forEach(o),Se=h(e),C=n(e,"H2",{class:!0});var tt=s(C);G=n(tt,"A",{id:!0,class:!0,href:!0});var ao=s(G);je=n(ao,"SPAN",{});var io=s(je);w(Q.$$.fragment,io),io.forEach(o),ao.forEach(o),lt=h(tt),ke=n(tt,"SPAN",{});var co=s(ke);dt=l(co,"Overview"),co.forEach(o),tt.forEach(o),Oe=h(e),P=n(e,"P",{});var Fe=s(P);mt=l(Fe,"The Decision Transformer model was proposed in "),X=n(Fe,"A",{href:!0,rel:!0});var lo=s(X);ft=l(lo,"Decision Transformer: Reinforcement Learning via Sequence Modeling"),lo.forEach(o),pt=n(Fe,"BR",{}),ht=l(Fe,`
by Lili Chen, Kevin Lu, Aravind Rajeswaran, Kimin Lee, Aditya Grover, Michael Laskin, Pieter Abbeel, Aravind Srinivas, Igor Mordatch.`),Fe.forEach(o),Be=h(e),pe=n(e,"P",{});var mo=s(pe);ut=l(mo,"The abstract from the paper is the following:"),mo.forEach(o),He=h(e),he=n(e,"P",{});var fo=s(he);Ee=n(fo,"EM",{});var po=s(Ee);gt=l(po,`We introduce a framework that abstracts Reinforcement Learning (RL) as a sequence modeling problem.
This allows us to draw upon the simplicity and scalability of the Transformer architecture, and associated advances
in language modeling such as GPT-x and BERT. In particular, we present Decision Transformer, an architecture that
casts the problem of RL as conditional sequence modeling. Unlike prior approaches to RL that fit value functions or
compute policy gradients, Decision Transformer simply outputs the optimal actions by leveraging a causally masked
Transformer. By conditioning an autoregressive model on the desired return (reward), past states, and actions, our
Decision Transformer model can generate future actions that achieve the desired return. Despite its simplicity,
Decision Transformer matches or exceeds the performance of state-of-the-art model-free offline RL baselines on
Atari, OpenAI Gym, and Key-to-Door tasks.`),po.forEach(o),fo.forEach(o),Ke=h(e),ue=n(e,"P",{});var ho=s(ue);_t=l(ho,"Tips:"),ho.forEach(o),Ue=h(e),ge=n(e,"P",{});var uo=s(ge);vt=l(uo,"This version of the model is for tasks where the state is a vector, image-based states will come soon."),uo.forEach(o),Ve=h(e),M=n(e,"P",{});var $e=s(M);Tt=l($e,"This model was contributed by "),Y=n($e,"A",{href:!0,rel:!0});var go=s(Y);bt=l(go,"edbeeching"),go.forEach(o),wt=l($e,". The original code can be found "),Z=n($e,"A",{href:!0,rel:!0});var _o=s(Z);yt=l(_o,"here"),_o.forEach(o),$t=l($e,"."),$e.forEach(o),We=h(e),z=n(e,"H2",{class:!0});var ot=s(z);S=n(ot,"A",{id:!0,class:!0,href:!0});var vo=s(S);Me=n(vo,"SPAN",{});var To=s(Me);w(ee.$$.fragment,To),To.forEach(o),vo.forEach(o),Dt=h(ot),Ce=n(ot,"SPAN",{});var bo=s(Ce);xt=l(bo,"DecisionTransformerConfig"),bo.forEach(o),ot.forEach(o),Je=h(e),j=n(e,"DIV",{class:!0});var V=s(j);w(te.$$.fragment,V),jt=h(V),oe=n(V,"P",{});var rt=s(oe);kt=l(rt,"This is the configuration class to store the configuration of a "),_e=n(rt,"A",{href:!0});var wo=s(_e);Et=l(wo,"DecisionTransformerModel"),wo.forEach(o),Mt=l(rt,`. It is used to
instantiate a Decision Transformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the standard
DecisionTransformer architecture. Many of the config options are used to instatiate the GPT2 model that is used as
part of the architecture.`),rt.forEach(o),Ct=h(V),A=n(V,"P",{});var De=s(A);Pt=l(De,"Configuration objects inherit from "),ve=n(De,"A",{href:!0});var yo=s(ve);zt=l(yo,"PretrainedConfig"),yo.forEach(o),At=l(De,` and can be used to control the model outputs. Read the
documentation from `),Te=n(De,"A",{href:!0});var $o=s(Te);Nt=l($o,"PretrainedConfig"),$o.forEach(o),qt=l(De," for more information."),De.forEach(o),Lt=h(V),w(O.$$.fragment,V),V.forEach(o),Qe=h(e),N=n(e,"H2",{class:!0});var nt=s(N);B=n(nt,"A",{id:!0,class:!0,href:!0});var Do=s(B);Pe=n(Do,"SPAN",{});var xo=s(Pe);w(re.$$.fragment,xo),xo.forEach(o),Do.forEach(o),Rt=h(nt),ze=n(nt,"SPAN",{});var jo=s(ze);Ft=l(jo,"DecisionTransformerGPT2Model"),jo.forEach(o),nt.forEach(o),Xe=h(e),q=n(e,"DIV",{class:!0});var st=s(q);w(ne.$$.fragment,st),It=h(st),be=n(st,"DIV",{class:!0});var ko=s(be);w(se.$$.fragment,ko),ko.forEach(o),st.forEach(o),Ye=h(e),L=n(e,"H2",{class:!0});var at=s(L);H=n(at,"A",{id:!0,class:!0,href:!0});var Eo=s(H);Ae=n(Eo,"SPAN",{});var Mo=s(Ae);w(ae.$$.fragment,Mo),Mo.forEach(o),Eo.forEach(o),Gt=h(at),Ne=n(at,"SPAN",{});var Co=s(Ne);St=l(Co,"DecisionTransformerModel"),Co.forEach(o),at.forEach(o),Ze=h(e),k=n(e,"DIV",{class:!0});var W=s(k);w(ie.$$.fragment,W),Ot=h(W),ce=n(W,"P",{});var it=s(ce);Bt=l(it,`The Decision Transformer Model
This model is a PyTorch `),le=n(it,"A",{href:!0,rel:!0});var Po=s(le);Ht=l(Po,"torch.nn.Module"),Po.forEach(o),Kt=l(it,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),it.forEach(o),Ut=h(W),we=n(W,"P",{});var no=s(we);Vt=l(no,`The model builds upon the GPT2 architecture to perform autoregressive prediction of actions in an offline RL
setting. Refer to the paper for more details: `),de=n(no,"A",{href:!0,rel:!0});var zo=s(de);Wt=l(zo,"https://arxiv.org/abs/2106.01345"),zo.forEach(o),no.forEach(o),Jt=h(W),E=n(W,"DIV",{class:!0});var J=s(E);w(me.$$.fragment,J),Qt=h(J),R=n(J,"P",{});var xe=s(R);Xt=l(xe,"The "),ye=n(xe,"A",{href:!0});var Ao=s(ye);Yt=l(Ao,"DecisionTransformerModel"),Ao.forEach(o),Zt=l(xe," forward method, overrides the "),qe=n(xe,"CODE",{});var No=s(qe);eo=l(No,"__call__"),No.forEach(o),to=l(xe," special method."),xe.forEach(o),oo=h(J),w(K.$$.fragment,J),ro=h(J),w(U.$$.fragment,J),J.forEach(o),W.forEach(o),this.h()},h(){i(f,"name","hf:doc:metadata"),i(f,"content",JSON.stringify(Wo)),i(u,"id","decision-transformer"),i(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(u,"href","#decision-transformer"),i(g,"class","relative group"),i(G,"id","overview"),i(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(G,"href","#overview"),i(C,"class","relative group"),i(X,"href","https://arxiv.org/abs/2106.01345"),i(X,"rel","nofollow"),i(Y,"href","https://huggingface.co/edbeeching"),i(Y,"rel","nofollow"),i(Z,"href","https://github.com/kzl/decision-transformer"),i(Z,"rel","nofollow"),i(S,"id","transformers.DecisionTransformerConfig"),i(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(S,"href","#transformers.DecisionTransformerConfig"),i(z,"class","relative group"),i(_e,"href","/docs/transformers/pr_17014/en/model_doc/decision_transformer#transformers.DecisionTransformerModel"),i(ve,"href","/docs/transformers/pr_17014/en/main_classes/configuration#transformers.PretrainedConfig"),i(Te,"href","/docs/transformers/pr_17014/en/main_classes/configuration#transformers.PretrainedConfig"),i(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(B,"id","transformers.DecisionTransformerGPT2Model"),i(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(B,"href","#transformers.DecisionTransformerGPT2Model"),i(N,"class","relative group"),i(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(H,"id","transformers.DecisionTransformerModel"),i(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(H,"href","#transformers.DecisionTransformerModel"),i(L,"class","relative group"),i(le,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),i(le,"rel","nofollow"),i(de,"href","https://arxiv.org/abs/2106.01345"),i(de,"rel","nofollow"),i(ye,"href","/docs/transformers/pr_17014/en/model_doc/decision_transformer#transformers.DecisionTransformerModel"),i(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,d){t(document.head,f),m(e,T,d),m(e,g,d),t(g,u),t(u,v),y(a,v,null),t(g,_),t(g,I),t(I,ct),m(e,Se,d),m(e,C,d),t(C,G),t(G,je),y(Q,je,null),t(C,lt),t(C,ke),t(ke,dt),m(e,Oe,d),m(e,P,d),t(P,mt),t(P,X),t(X,ft),t(P,pt),t(P,ht),m(e,Be,d),m(e,pe,d),t(pe,ut),m(e,He,d),m(e,he,d),t(he,Ee),t(Ee,gt),m(e,Ke,d),m(e,ue,d),t(ue,_t),m(e,Ue,d),m(e,ge,d),t(ge,vt),m(e,Ve,d),m(e,M,d),t(M,Tt),t(M,Y),t(Y,bt),t(M,wt),t(M,Z),t(Z,yt),t(M,$t),m(e,We,d),m(e,z,d),t(z,S),t(S,Me),y(ee,Me,null),t(z,Dt),t(z,Ce),t(Ce,xt),m(e,Je,d),m(e,j,d),y(te,j,null),t(j,jt),t(j,oe),t(oe,kt),t(oe,_e),t(_e,Et),t(oe,Mt),t(j,Ct),t(j,A),t(A,Pt),t(A,ve),t(ve,zt),t(A,At),t(A,Te),t(Te,Nt),t(A,qt),t(j,Lt),y(O,j,null),m(e,Qe,d),m(e,N,d),t(N,B),t(B,Pe),y(re,Pe,null),t(N,Rt),t(N,ze),t(ze,Ft),m(e,Xe,d),m(e,q,d),y(ne,q,null),t(q,It),t(q,be),y(se,be,null),m(e,Ye,d),m(e,L,d),t(L,H),t(H,Ae),y(ae,Ae,null),t(L,Gt),t(L,Ne),t(Ne,St),m(e,Ze,d),m(e,k,d),y(ie,k,null),t(k,Ot),t(k,ce),t(ce,Bt),t(ce,le),t(le,Ht),t(ce,Kt),t(k,Ut),t(k,we),t(we,Vt),t(we,de),t(de,Wt),t(k,Jt),t(k,E),y(me,E,null),t(E,Qt),t(E,R),t(R,Xt),t(R,ye),t(ye,Yt),t(R,Zt),t(R,qe),t(qe,eo),t(R,to),t(E,oo),y(K,E,null),t(E,ro),y(U,E,null),et=!0},p(e,[d]){const fe={};d&2&&(fe.$$scope={dirty:d,ctx:e}),O.$set(fe);const Le={};d&2&&(Le.$$scope={dirty:d,ctx:e}),K.$set(Le);const Re={};d&2&&(Re.$$scope={dirty:d,ctx:e}),U.$set(Re)},i(e){et||($(a.$$.fragment,e),$(Q.$$.fragment,e),$(ee.$$.fragment,e),$(te.$$.fragment,e),$(O.$$.fragment,e),$(re.$$.fragment,e),$(ne.$$.fragment,e),$(se.$$.fragment,e),$(ae.$$.fragment,e),$(ie.$$.fragment,e),$(me.$$.fragment,e),$(K.$$.fragment,e),$(U.$$.fragment,e),et=!0)},o(e){D(a.$$.fragment,e),D(Q.$$.fragment,e),D(ee.$$.fragment,e),D(te.$$.fragment,e),D(O.$$.fragment,e),D(re.$$.fragment,e),D(ne.$$.fragment,e),D(se.$$.fragment,e),D(ae.$$.fragment,e),D(ie.$$.fragment,e),D(me.$$.fragment,e),D(K.$$.fragment,e),D(U.$$.fragment,e),et=!1},d(e){o(f),e&&o(T),e&&o(g),x(a),e&&o(Se),e&&o(C),x(Q),e&&o(Oe),e&&o(P),e&&o(Be),e&&o(pe),e&&o(He),e&&o(he),e&&o(Ke),e&&o(ue),e&&o(Ue),e&&o(ge),e&&o(Ve),e&&o(M),e&&o(We),e&&o(z),x(ee),e&&o(Je),e&&o(j),x(te),x(O),e&&o(Qe),e&&o(N),x(re),e&&o(Xe),e&&o(q),x(ne),x(se),e&&o(Ye),e&&o(L),x(ae),e&&o(Ze),e&&o(k),x(ie),x(me),x(K),x(U)}}}const Wo={local:"decision-transformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.DecisionTransformerConfig",title:"DecisionTransformerConfig"},{local:"transformers.DecisionTransformerGPT2Model",title:"DecisionTransformerGPT2Model"},{local:"transformers.DecisionTransformerModel",title:"DecisionTransformerModel"}],title:"Decision Transformer"};function Jo(F){return Oo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class or extends Fo{constructor(f){super();Io(this,f,Jo,Vo,Go,{})}}export{or as default,Wo as metadata};
