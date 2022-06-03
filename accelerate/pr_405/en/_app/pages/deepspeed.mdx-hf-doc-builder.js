import{S as Qu,i as Xu,s as ed,e as a,k as c,w as h,t as l,M as sd,c as n,d as t,m as u,a as o,x as _,h as p,b as d,G as s,g as i,y as f,L as td,q as m,o as g,B as w,v as ad}from"../chunks/vendor-hf-doc-builder.js";import{D as Ts}from"../chunks/Docstring-hf-doc-builder.js";import{C as b}from"../chunks/CodeBlock-hf-doc-builder.js";import{I as N}from"../chunks/IconCopyLink-hf-doc-builder.js";function nd(xi){let Z,Wa,F,re,pt,xe,Ao,rt,To,Ua,ie,Ro,Ce,Lo,No,Ba,ce,Zo,Ie,Fo,Mo,Ga,ue,M,Ho,it,Wo,Uo,ct,Bo,Go,Vo,Ae,Yo,ut,Jo,Ko,Va,H,de,dt,Te,Qo,ht,Xo,Ya,Rs,el,Ja,Ls,_t,sl,Ka,Ns,tl,Qa,Zs,Re,al,Fs,nl,ol,Xa,W,he,ft,Le,ll,mt,pl,en,U,gt,rl,il,Ne,cl,ul,sn,C,dl,wt,hl,_l,vt,fl,ml,tn,B,_e,jt,Ze,gl,bt,wl,an,Fe,nn,Ms,vl,on,Me,ln,fe,jl,yt,bl,yl,pn,Hs,qt,ql,rn,He,cn,We,un,Ws,$t,$l,dn,Ue,hn,Be,_n,me,El,Et,zl,kl,fn,Ge,mn,G,ge,zt,Ve,Sl,kt,Dl,gn,Ye,wn,Us,Ol,vn,Je,jn,we,Pl,St,xl,Cl,bn,Bs,Dt,Il,yn,Ke,qn,ve,Al,Ot,Tl,Rl,$n,Qe,En,Xe,zn,Gs,Pt,Ll,kn,es,Sn,je,Nl,xt,Zl,Fl,Dn,ss,On,ts,Pn,Vs,Ct,Ml,xn,be,y,V,Hl,as,Wl,Ul,ns,Bl,Gl,Vl,q,Yl,It,Jl,Kl,At,Ql,Xl,Tt,ep,sp,Rt,tp,ap,Lt,np,op,lp,os,pp,z,rp,Nt,ip,cp,Zt,up,dp,Ft,hp,_p,Mt,fp,mp,gp,Y,wp,Ht,vp,jp,Wt,bp,yp,qp,ls,$p,Ut,Ep,zp,kp,Bt,P,Sp,Gt,Dp,Op,Vt,Pp,xp,Yt,Cp,Ip,Cn,ps,In,ye,Ap,Jt,Tp,Rp,An,Ys,Lp,Tn,E,Np,Kt,Zp,Fp,Qt,Mp,Hp,Xt,Wp,Up,ea,Bp,Gp,Rn,J,qe,sa,rs,Vp,ta,Yp,Ln,$e,aa,na,Jp,Kp,v,is,Qp,oa,Xp,er,sr,$,tr,la,ar,nr,pa,or,lr,ra,pr,rr,ia,ir,cr,ca,ur,dr,hr,cs,_r,K,fr,ua,mr,gr,da,wr,vr,jr,us,br,Q,yr,ha,qr,$r,Er,zr,kr,ds,Sr,_a,Dr,Or,hs,Pr,fa,xr,Cr,_s,Ir,ma,Ar,Nn,X,Ee,ga,fs,Tr,wa,Rr,Zn,ee,ze,va,ms,Lr,ja,Nr,Fn,I,ba,Zr,Fr,gs,Mr,ya,Hr,Wr,Ur,ws,Br,qa,Gr,Vr,Mn,se,ke,$a,vs,Yr,Ea,Jr,Hn,x,js,Kr,za,Qr,Xr,Se,bs,ei,ka,si,Wn,te,ys,ti,Sa,ai,Un,ae,qs,ni,Da,oi,Bn,ne,$s,li,Oa,pi,Gn,oe,Es,ri,Pa,ii,Vn,le,zs,ci,xa,ui,Yn,pe,De,Ca,ks,di,Ia,hi,Jn,k,Aa,Ss,_i,fi,Ta,Ds,mi,gi,Ra,Os,wi,vi,La,Ps,ji,Kn,Js,bi,Qn,A,Na,xs,yi,qi,Za,Cs,$i,Ei,Fa,Is,zi,Xn,T,ki,Ma,Si,Di,As,Oi,Pi,eo;return xe=new N({}),Te=new N({}),Le=new N({}),Ze=new N({}),Fe=new b({props:{code:"accelerate config",highlighted:"accelerate config"}}),Me=new b({props:{code:"accelerate launch my_script.py --args_to_my_script",highlighted:"accelerate launch my_script.py --args_to_my_script"}}),He=new b({props:{code:`compute_environment: LOCAL_MACHINE
deepspeed_config:
 gradient_accumulation_steps: 1
 gradient_clipping: 1.0
 offload_optimizer_device: none
 offload_param_device: none
 zero3_init_flag: true
 zero_stage: 2
distributed_type: DEEPSPEED
fsdp_config: {}
machine_rank: 0
main_process_ip: null
main_process_port: null
main_training_function: main
mixed_precision: fp16
num_machines: 1
num_processes: 2
use_cpu: false`,highlighted:`compute_environment: LOCAL_MACHINE
deepspeed_config:
 gradient_accumulation_steps: 1
 gradient_clipping: 1.0
 offload_optimizer_device: none
 offload_param_device: none
 zero3_init_flag: <span class="hljs-literal">true</span>
 zero_stage: 2
distributed_type: DEEPSPEED
fsdp_config: {}
machine_rank: 0
main_process_ip: null
main_process_port: null
main_training_function: main
mixed_precision: fp16
num_machines: 1
num_processes: 2
use_cpu: <span class="hljs-literal">false</span>`}}),We=new b({props:{code:`accelerate launch examples/by_feature/deepspeed_with_config_support.py \\
--config_name "gpt2-large" \\
--tokenizer_name "gpt2-large" \\
--dataset_name "wikitext" \\
--dataset_config_name "wikitext-2-raw-v1" \\
--block_size 128 \\
--output_dir "./clm/clm_deepspeed_stage2_accelerate" \\
--learning_rate 5e-4 \\
--per_device_train_batch_size 24 \\
--per_device_eval_batch_size 24 \\
--num_train_epochs 3 \\
--with_tracking \\
--report_to "wandb"\\`,highlighted:`accelerate launch examples/by_feature/deepspeed_with_config_support.py \\
--config_name <span class="hljs-string">&quot;gpt2-large&quot;</span> \\
--tokenizer_name <span class="hljs-string">&quot;gpt2-large&quot;</span> \\
--dataset_name <span class="hljs-string">&quot;wikitext&quot;</span> \\
--dataset_config_name <span class="hljs-string">&quot;wikitext-2-raw-v1&quot;</span> \\
--block_size 128 \\
--output_dir <span class="hljs-string">&quot;./clm/clm_deepspeed_stage2_accelerate&quot;</span> \\
--learning_rate 5e-4 \\
--per_device_train_batch_size 24 \\
--per_device_eval_batch_size 24 \\
--num_train_epochs 3 \\
--with_tracking \\
--report_to <span class="hljs-string">&quot;wandb&quot;</span>\\`}}),Ue=new b({props:{code:`compute_environment: LOCAL_MACHINE
deepspeed_config:
  gradient_accumulation_steps: 1
  gradient_clipping: 1.0
  offload_optimizer_device: cpu
  offload_param_device: cpu
  zero3_init_flag: true
  zero3_save_16bit_model: true
  zero_stage: 3
distributed_type: DEEPSPEED
fsdp_config: {}
machine_rank: 0
main_process_ip: null
main_process_port: null
main_training_function: main
mixed_precision: fp16
num_machines: 1
num_processes: 2
use_cpu: false`,highlighted:`compute_environment: LOCAL_MACHINE
deepspeed_config:
  gradient_accumulation_steps: 1
  gradient_clipping: 1.0
  offload_optimizer_device: cpu
  offload_param_device: cpu
  zero3_init_flag: <span class="hljs-literal">true</span>
  zero3_save_16bit_model: <span class="hljs-literal">true</span>
  zero_stage: 3
distributed_type: DEEPSPEED
fsdp_config: {}
machine_rank: 0
main_process_ip: null
main_process_port: null
main_training_function: main
mixed_precision: fp16
num_machines: 1
num_processes: 2
use_cpu: <span class="hljs-literal">false</span>`}}),Be=new b({props:{code:`accelerate launch examples/by_feature/deepspeed_with_config_support.py \\
--config_name "gpt2-large" \\
--tokenizer_name "gpt2-large" \\
--dataset_name "wikitext" \\
--dataset_config_name "wikitext-2-raw-v1" \\
--block_size 128 \\
--output_dir "./clm/clm_deepspeed_stage3_offload_accelerate" \\
--learning_rate 5e-4 \\
--per_device_train_batch_size 32 \\
--per_device_eval_batch_size 32 \\
--num_train_epochs 3 \\
--with_tracking \\
--report_to "wandb"\\`,highlighted:`accelerate launch examples/by_feature/deepspeed_with_config_support.py \\
--config_name <span class="hljs-string">&quot;gpt2-large&quot;</span> \\
--tokenizer_name <span class="hljs-string">&quot;gpt2-large&quot;</span> \\
--dataset_name <span class="hljs-string">&quot;wikitext&quot;</span> \\
--dataset_config_name <span class="hljs-string">&quot;wikitext-2-raw-v1&quot;</span> \\
--block_size 128 \\
--output_dir <span class="hljs-string">&quot;./clm/clm_deepspeed_stage3_offload_accelerate&quot;</span> \\
--learning_rate 5e-4 \\
--per_device_train_batch_size 32 \\
--per_device_eval_batch_size 32 \\
--num_train_epochs 3 \\
--with_tracking \\
--report_to <span class="hljs-string">&quot;wandb&quot;</span>\\`}}),Ge=new b({props:{code:"`zero_stage`: [0] Disabled, [1] optimizer state partitioning, [2] optimizer+gradient state partitioning and [3] optimizer+gradient+parameter partitioning\n`gradient_accumulation_steps`: Number of training steps to accumulate gradients before averaging and applying them.\n`gradient_clipping`: Enable gradient clipping with value.\n`offload_optimizer_device`: [none] Disable optimizer offloading, [cpu] offload optimizer to CPU, [nvme] offload optimizer to NVMe SSD. Only applicable with ZeRO >= Stage-2.\n`offload_param_device`: [none] Disable parameter offloading, [cpu] offload parameters to CPU, [nvme] offload parameters to NVMe SSD. Only applicable with ZeRO Stage-3.\n`zero3_init_flag`: Decides whether to enable `deepspeed.zero.Init` for constructing massive models. Only applicable with ZeRO Stage-3.\n`zero3_save_16bit_model`: Decides whether to save 16-bit model weights when using ZeRO Stage-3.\n`mixed_precision`: `no` for FP32 training, `fp16` for FP16 mixed-precision training and `bf16` for BF16 mixed-precision training. ",highlighted:'`zero_stage`: [0] Disabled, [1] optimizer state partitioning, [2] optimizer+gradient state partitioning and [3] optimizer+gradient+parameter partitioning\n`gradient_accumulation_steps`: Number of training steps to accumulate gradients before averaging and applying them.\n`gradient_clipping`: Enable gradient clipping with value.\n`offload_optimizer_device`: [none] Disable optimizer offloading, [cpu] offload optimizer to CPU, [nvme] offload optimizer to NVMe SSD. Only applicable with ZeRO &gt;= Stage-2.\n`offload_param_device`: [none] Disable parameter offloading, [cpu] offload parameters to CPU, [nvme] offload parameters to NVMe SSD. Only applicable with ZeRO Stage-3.\n`zero3_init_flag`: Decides whether to <span class="hljs-built_in">enable</span> `deepspeed.zero.Init` <span class="hljs-keyword">for</span> constructing massive models. Only applicable with ZeRO Stage-3.\n`zero3_save_16bit_model`: Decides whether to save 16-bit model weights when using ZeRO Stage-3.\n`mixed_precision`: `no` <span class="hljs-keyword">for</span> FP32 training, `fp16` <span class="hljs-keyword">for</span> FP16 mixed-precision training and `bf16` <span class="hljs-keyword">for</span> BF16 mixed-precision training. '}}),Ve=new N({}),Ye=new b({props:{code:"accelerate config",highlighted:"accelerate config"}}),Je=new b({props:{code:"accelerate launch my_script.py --args_to_my_script",highlighted:"accelerate launch my_script.py --args_to_my_script"}}),Ke=new b({props:{code:`compute_environment: LOCAL_MACHINE
deepspeed_config:
 deepspeed_config_file: /home/ubuntu/accelerate/examples/configs/deepspeed_config_templates/zero_stage2_config.json
 zero3_init_flag: true
distributed_type: DEEPSPEED
fsdp_config: {}
machine_rank: 0
main_process_ip: null
main_process_port: null
main_training_function: main
mixed_precision: fp16
num_machines: 1
num_processes: 2
use_cpu: false`,highlighted:`compute_environment: LOCAL_MACHINE
deepspeed_config:
 deepspeed_config_file: /home/ubuntu/accelerate/examples/configs/deepspeed_config_templates/zero_stage2_config.json
 zero3_init_flag: <span class="hljs-literal">true</span>
distributed_type: DEEPSPEED
fsdp_config: {}
machine_rank: 0
main_process_ip: null
main_process_port: null
main_training_function: main
mixed_precision: fp16
num_machines: 1
num_processes: 2
use_cpu: <span class="hljs-literal">false</span>`}}),Qe=new b({props:{code:`{
    "fp16": {
        "enabled": "auto",
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    },
    "optimizer": {
        "type": "AdamW",
        "params": {
            "lr": "auto",
            "weight_decay": "auto",
            "torch_adam": true,
            "adam_w_mode": true
        }
    },
    "scheduler": {
        "type": "WarmupDecayLR",
        "params": {
            "warmup_min_lr": "auto",
            "warmup_max_lr": "auto",
            "warmup_num_steps": "auto",
            "total_num_steps": "auto"
        }
    },
    "zero_optimization": {
        "stage": 2,
        "allgather_partitions": true,
        "allgather_bucket_size": 2e8,
        "overlap_comm": true,
        "reduce_scatter": true,
        "reduce_bucket_size": "auto",
        "contiguous_gradients": true
    },
    "gradient_accumulation_steps": "auto",
    "gradient_clipping": "auto",
    "steps_per_print": 2000,
    "train_batch_size": "auto",
    "train_micro_batch_size_per_gpu": "auto",
    "wall_clock_breakdown": false
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;AdamW&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;weight_decay&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;torch_adam&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;adam_w_mode&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupDecayLR&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;total_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;allgather_partitions&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;allgather_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2e8</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_scatter&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;steps_per_print&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2000</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;wall_clock_breakdown&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span>
<span class="hljs-punctuation">}</span>`}}),Xe=new b({props:{code:`accelerate launch examples/by_feature/deepspeed_with_config_support.py \\
--config_name "gpt2-large" \\
--tokenizer_name "gpt2-large" \\
--dataset_name "wikitext" \\
--dataset_config_name "wikitext-2-raw-v1" \\
--block_size 128 \\
--output_dir "./clm/clm_deepspeed_stage2_accelerate" \\
--learning_rate 5e-4 \\
--per_device_train_batch_size 24 \\
--per_device_eval_batch_size 24 \\
--num_train_epochs 3 \\
--with_tracking \\
--report_to "wandb"\\`,highlighted:`accelerate launch examples/by_feature/deepspeed_with_config_support.py \\
--config_name <span class="hljs-string">&quot;gpt2-large&quot;</span> \\
--tokenizer_name <span class="hljs-string">&quot;gpt2-large&quot;</span> \\
--dataset_name <span class="hljs-string">&quot;wikitext&quot;</span> \\
--dataset_config_name <span class="hljs-string">&quot;wikitext-2-raw-v1&quot;</span> \\
--block_size 128 \\
--output_dir <span class="hljs-string">&quot;./clm/clm_deepspeed_stage2_accelerate&quot;</span> \\
--learning_rate 5e-4 \\
--per_device_train_batch_size 24 \\
--per_device_eval_batch_size 24 \\
--num_train_epochs 3 \\
--with_tracking \\
--report_to <span class="hljs-string">&quot;wandb&quot;</span>\\`}}),es=new b({props:{code:`compute_environment: LOCAL_MACHINE
deepspeed_config:
 deepspeed_config_file: /home/ubuntu/accelerate/examples/configs/deepspeed_config_templates/zero_stage3_offload_config.json
 zero3_init_flag: true
distributed_type: DEEPSPEED
fsdp_config: {}
machine_rank: 0
main_process_ip: null
main_process_port: null
main_training_function: main
mixed_precision: fp16
num_machines: 1
num_processes: 2
use_cpu: false`,highlighted:`compute_environment: LOCAL_MACHINE
deepspeed_config:
 deepspeed_config_file: /home/ubuntu/accelerate/examples/configs/deepspeed_config_templates/zero_stage3_offload_config.json
 zero3_init_flag: <span class="hljs-literal">true</span>
distributed_type: DEEPSPEED
fsdp_config: {}
machine_rank: 0
main_process_ip: null
main_process_port: null
main_training_function: main
mixed_precision: fp16
num_machines: 1
num_processes: 2
use_cpu: <span class="hljs-literal">false</span>`}}),ss=new b({props:{code:`{
    "fp16": {
        "enabled": "auto",
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    },
    "optimizer": {
        "type": "AdamW",
        "params": {
            "lr": "auto",
            "weight_decay": "auto"
        }
    },
    "scheduler": {
        "type": "WarmupDecayLR",
        "params": {
            "warmup_min_lr": "auto",
            "warmup_max_lr": "auto",
            "warmup_num_steps": "auto",
            "total_num_steps": "auto"
        }
    },
    "zero_optimization": {
        "stage": 3,
        "offload_optimizer": {
            "device": "cpu",
            "pin_memory": true
        },
        "offload_param": {
            "device": "cpu",
            "pin_memory": true
        },
        "overlap_comm": true,
        "contiguous_gradients": true,
        "reduce_bucket_size": "auto",
        "stage3_prefetch_bucket_size": "auto",
        "stage3_param_persistence_threshold": "auto",
        "sub_group_size": 1e9,
        "stage3_max_live_parameters": 1e9,
        "stage3_max_reuse_distance": 1e9,
        "stage3_gather_16bit_weights_on_model_save": "auto"
    },
    "gradient_accumulation_steps": "auto",
    "gradient_clipping": "auto",
    "steps_per_print": 2000,
    "train_batch_size": "auto",
    "train_micro_batch_size_per_gpu": "auto",
    "wall_clock_breakdown": false
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;AdamW&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;weight_decay&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupDecayLR&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;total_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_param&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_prefetch_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_param_persistence_threshold&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;sub_group_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_max_live_parameters&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_max_reuse_distance&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_gather_16bit_weights_on_model_save&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;steps_per_print&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2000</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;wall_clock_breakdown&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span>
<span class="hljs-punctuation">}</span>`}}),ts=new b({props:{code:`accelerate launch examples/by_feature/deepspeed_with_config_support.py \\
--config_name "gpt2-large" \\
--tokenizer_name "gpt2-large" \\
--dataset_name "wikitext" \\
--dataset_config_name "wikitext-2-raw-v1" \\
--block_size 128 \\
--output_dir "./clm/clm_deepspeed_stage3_offload_accelerate" \\
--learning_rate 5e-4 \\
--per_device_train_batch_size 32 \\
--per_device_eval_batch_size 32 \\
--num_train_epochs 3 \\
--with_tracking \\
--report_to "wandb"\\`,highlighted:`accelerate launch examples/by_feature/deepspeed_with_config_support.py \\
--config_name <span class="hljs-string">&quot;gpt2-large&quot;</span> \\
--tokenizer_name <span class="hljs-string">&quot;gpt2-large&quot;</span> \\
--dataset_name <span class="hljs-string">&quot;wikitext&quot;</span> \\
--dataset_config_name <span class="hljs-string">&quot;wikitext-2-raw-v1&quot;</span> \\
--block_size 128 \\
--output_dir <span class="hljs-string">&quot;./clm/clm_deepspeed_stage3_offload_accelerate&quot;</span> \\
--learning_rate 5e-4 \\
--per_device_train_batch_size 32 \\
--per_device_eval_batch_size 32 \\
--num_train_epochs 3 \\
--with_tracking \\
--report_to <span class="hljs-string">&quot;wandb&quot;</span>\\`}}),os=new b({props:{code:`# Creates Dummy Optimizer if \`optimizer\` was spcified in the config file else creates Adam Optimizer
if "optimizer" not in accelerator.state.deepspeed_plugin.deepspeed_config:
    optimizer = torch.optim.AdamW(optimizer_grouped_parameters, lr=args.learning_rate)
else:
    optimizer = DummyOptim(param_groups=optimizer_grouped_parameters)

# Creates Dummy Optimizer if \`optimizer\` was spcified in the config file else creates Adam Optimizer
if "scheduler" not in accelerator.state.deepspeed_plugin.deepspeed_config:
    lr_scheduler = get_scheduler(
        name=args.lr_scheduler_type,
        optimizer=optimizer,
        num_warmup_steps=args.num_warmup_steps,
        num_training_steps=args.max_train_steps,
    )
else:
    lr_scheduler = DummyScheduler()`,highlighted:`<span class="hljs-comment"># Creates Dummy Optimizer if \`optimizer\` was spcified in the config file else creates Adam Optimizer</span>
<span class="hljs-keyword">if</span> <span class="hljs-string">&quot;optimizer&quot;</span> <span class="hljs-keyword">not</span> <span class="hljs-keyword">in</span> accelerator.state.deepspeed_plugin.deepspeed_config:
    optimizer = torch.optim.AdamW(optimizer_grouped_parameters, lr=args.learning_rate)
<span class="hljs-keyword">else</span>:
    optimizer = DummyOptim(param_groups=optimizer_grouped_parameters)

<span class="hljs-comment"># Creates Dummy Optimizer if \`optimizer\` was spcified in the config file else creates Adam Optimizer</span>
<span class="hljs-keyword">if</span> <span class="hljs-string">&quot;scheduler&quot;</span> <span class="hljs-keyword">not</span> <span class="hljs-keyword">in</span> accelerator.state.deepspeed_plugin.deepspeed_config:
    lr_scheduler = get_scheduler(
        name=args.lr_scheduler_type,
        optimizer=optimizer,
        num_warmup_steps=args.num_warmup_steps,
        num_training_steps=args.max_train_steps,
    )
<span class="hljs-keyword">else</span>:
    lr_scheduler = DummyScheduler()`}}),ps=new b({props:{code:`# Processing all the fields with \`auto\` values in the DeepSpeed Config file
if accelerator.state.deepspeed_plugin.config_file != "none":
    kwargs = vars(args)
    kwargs["fp16.enabled"] = True
    kwargs["optimizer.params.lr"] = args.learning_rate
    kwargs["optimizer.params.weight_decay"] = 0.0
    kwargs["scheduler.params.warmup_min_lr"] = 0
    kwargs["scheduler.params.warmup_max_lr"] = args.learning_rate
    kwargs["scheduler.params.warmup_num_steps"] = args.num_warmup_steps
    kwargs["scheduler.params.total_num_steps"] = (
        math.ceil(args.max_train_steps // accelerator.num_processes)
        if not accelerator.split_batches
        else args.max_train_steps
    )
    kwargs["gradient_accumulation_steps"] = args.gradient_accumulation_steps
    kwargs["train_micro_batch_size_per_gpu"] = (
        args.per_device_train_batch_size // accelerator.num_processes
        if accelerator.split_batches
        else args.per_device_train_batch_size
    )
    kwargs["gradient_clipping"] = 1.0
    kwargs["train_batch_size"] = (
        args.per_device_train_batch_size * accelerator.num_processes * args.gradient_accumulation_steps
    )
    hidden_size = model.config.hidden_size
    kwargs["zero_optimization.reduce_bucket_size"] = hidden_size * hidden_size
    kwargs["zero_optimization.stage3_prefetch_bucket_size"] = 0.9 * hidden_size * hidden_size
    kwargs["zero_optimization.stage3_param_persistence_threshold"] = 10 * hidden_size
    kwargs["zero_optimization.stage3_gather_16bit_weights_on_model_save"] = True

    accelerator.state.deepspeed_plugin.deepspeed_config_process(**kwargs)

    # Prepare everything with our \`accelerator\`.
    model, optimizer, train_dataloader, eval_dataloader, lr_scheduler = accelerator.prepare(
        model, optimizer, train_dataloader, eval_dataloader, lr_scheduler
    )`,highlighted:`<span class="hljs-comment"># Processing all the fields with \`auto\` values in the DeepSpeed Config file</span>
<span class="hljs-keyword">if</span> accelerator.state.deepspeed_plugin.config_file != <span class="hljs-string">&quot;none&quot;</span>:
    kwargs = <span class="hljs-built_in">vars</span>(args)
    kwargs[<span class="hljs-string">&quot;fp16.enabled&quot;</span>] = <span class="hljs-literal">True</span>
    kwargs[<span class="hljs-string">&quot;optimizer.params.lr&quot;</span>] = args.learning_rate
    kwargs[<span class="hljs-string">&quot;optimizer.params.weight_decay&quot;</span>] = <span class="hljs-number">0.0</span>
    kwargs[<span class="hljs-string">&quot;scheduler.params.warmup_min_lr&quot;</span>] = <span class="hljs-number">0</span>
    kwargs[<span class="hljs-string">&quot;scheduler.params.warmup_max_lr&quot;</span>] = args.learning_rate
    kwargs[<span class="hljs-string">&quot;scheduler.params.warmup_num_steps&quot;</span>] = args.num_warmup_steps
    kwargs[<span class="hljs-string">&quot;scheduler.params.total_num_steps&quot;</span>] = (
        math.ceil(args.max_train_steps // accelerator.num_processes)
        <span class="hljs-keyword">if</span> <span class="hljs-keyword">not</span> accelerator.split_batches
        <span class="hljs-keyword">else</span> args.max_train_steps
    )
    kwargs[<span class="hljs-string">&quot;gradient_accumulation_steps&quot;</span>] = args.gradient_accumulation_steps
    kwargs[<span class="hljs-string">&quot;train_micro_batch_size_per_gpu&quot;</span>] = (
        args.per_device_train_batch_size // accelerator.num_processes
        <span class="hljs-keyword">if</span> accelerator.split_batches
        <span class="hljs-keyword">else</span> args.per_device_train_batch_size
    )
    kwargs[<span class="hljs-string">&quot;gradient_clipping&quot;</span>] = <span class="hljs-number">1.0</span>
    kwargs[<span class="hljs-string">&quot;train_batch_size&quot;</span>] = (
        args.per_device_train_batch_size * accelerator.num_processes * args.gradient_accumulation_steps
    )
    hidden_size = model.config.hidden_size
    kwargs[<span class="hljs-string">&quot;zero_optimization.reduce_bucket_size&quot;</span>] = hidden_size * hidden_size
    kwargs[<span class="hljs-string">&quot;zero_optimization.stage3_prefetch_bucket_size&quot;</span>] = <span class="hljs-number">0.9</span> * hidden_size * hidden_size
    kwargs[<span class="hljs-string">&quot;zero_optimization.stage3_param_persistence_threshold&quot;</span>] = <span class="hljs-number">10</span> * hidden_size
    kwargs[<span class="hljs-string">&quot;zero_optimization.stage3_gather_16bit_weights_on_model_save&quot;</span>] = <span class="hljs-literal">True</span>

    accelerator.state.deepspeed_plugin.deepspeed_config_process(**kwargs)

    <span class="hljs-comment"># Prepare everything with our \`accelerator\`.</span>
    model, optimizer, train_dataloader, eval_dataloader, lr_scheduler = accelerator.prepare(
        model, optimizer, train_dataloader, eval_dataloader, lr_scheduler
    )`}}),rs=new N({}),cs=new b({props:{code:`unwrapped_model = accelerator.unwrap_model(model)

# New Code #
# Saves the whole/unpartitioned fp16 model when in ZeRO Stage-3 to the output directory if
# \`stage3_gather_16bit_weights_on_model_save\` is True in DeepSpeed Config file or
# \`zero3_save_16bit_model\` is True in DeepSpeed Plugin.
# For Zero Stages 1 and 2, models are saved as usual in the output directory.
# The model name saved is \`pytorch_model.bin\`
unwrapped_model.save_pretrained(
    args.output_dir,
    is_main_process=accelerator.is_main_process,
    save_function=accelerator.save,
    state_dict=accelerator.get_state_dict(model),
)`,highlighted:`unwrapped_model = accelerator.unwrap_model(model)

<span class="hljs-comment"># New Code #</span>
<span class="hljs-comment"># Saves the whole/unpartitioned fp16 model when in ZeRO Stage-3 to the output directory if</span>
<span class="hljs-comment"># \`stage3_gather_16bit_weights_on_model_save\` is True in DeepSpeed Config file or</span>
<span class="hljs-comment"># \`zero3_save_16bit_model\` is True in DeepSpeed Plugin.</span>
<span class="hljs-comment"># For Zero Stages 1 and 2, models are saved as usual in the output directory.</span>
<span class="hljs-comment"># The model name saved is \`pytorch_model.bin\`</span>
unwrapped_model.save_pretrained(
    args.output_dir,
    is_main_process=accelerator.is_main_process,
    save_function=accelerator.save,
    state_dict=accelerator.get_state_dict(model),
)`}}),us=new b({props:{code:`success = model.save_checkpoint(PATH, ckpt_id, checkpoint_state_dict)
status_msg = "checkpointing: PATH={}, ckpt_id={}".format(PATH, ckpt_id)
if success:
    logging.info(f"Success {status_msg}")
else:
    logging.warning(f"Failure {status_msg}")`,highlighted:`success = model.save_checkpoint(PATH, ckpt_id, checkpoint_state_dict)
status_msg = <span class="hljs-string">&quot;checkpointing: PATH={}, ckpt_id={}&quot;</span>.<span class="hljs-built_in">format</span>(PATH, ckpt_id)
<span class="hljs-keyword">if</span> success:
    logging.info(<span class="hljs-string">f&quot;Success <span class="hljs-subst">{status_msg}</span>&quot;</span>)
<span class="hljs-keyword">else</span>:
    logging.warning(<span class="hljs-string">f&quot;Failure <span class="hljs-subst">{status_msg}</span>&quot;</span>)`}}),ds=new b({props:{code:`$ cd /path/to/checkpoint_dir
$ ./zero_to_fp32.py . pytorch_model.bin
Processing zero checkpoint at global_step1
Detected checkpoint of type zero stage 3, world_size: 2
Saving fp32 state dict to pytorch_model.bin (total_numel=60506624)`,highlighted:`$ <span class="hljs-built_in">cd</span> /path/to/checkpoint_dir
$ ./zero_to_fp32.py . pytorch_model.bin
Processing zero checkpoint at global_step1
Detected checkpoint of <span class="hljs-built_in">type</span> zero stage 3, world_size: 2
Saving fp32 state dict to pytorch_model.bin (total_numel=60506624)`}}),hs=new b({props:{code:`from deepspeed.utils.zero_to_fp32 import load_state_dict_from_zero_checkpoint

unwrapped_model = accelerator.unwrap_model(model)
fp32_model = load_state_dict_from_zero_checkpoint(unwrapped_model, checkpoint_dir)`,highlighted:`<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> load_state_dict_from_zero_checkpoint

unwrapped_model = accelerator.unwrap_model(model)
fp32_model = load_state_dict_from_zero_checkpoint(unwrapped_model, checkpoint_dir)`}}),_s=new b({props:{code:`from deepspeed.utils.zero_to_fp32 import get_fp32_state_dict_from_zero_checkpoint

state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir)`,highlighted:`<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> get_fp32_state_dict_from_zero_checkpoint

state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir)`}}),fs=new N({}),ms=new N({}),vs=new N({}),js=new Ts({props:{name:"class accelerate.DeepSpeedPlugin",anchor:"accelerate.DeepSpeedPlugin",parameters:[{name:"config_file",val:": str = None"},{name:"gradient_accumulation_steps",val:": int = None"},{name:"gradient_clipping",val:": float = None"},{name:"zero_stage",val:": int = None"},{name:"is_train_batch_min",val:": str = True"},{name:"offload_optimizer_device",val:": bool = None"},{name:"offload_param_device",val:": bool = None"},{name:"zero3_init_flag",val:": bool = None"},{name:"zero3_save_16bit_model",val:": bool = None"}],source:"https://github.com/huggingface/accelerate/blob/vr_405/src/accelerate/utils/dataclasses.py#L213"}}),bs=new Ts({props:{name:"deepspeed_config_process",anchor:"accelerate.DeepSpeedPlugin.deepspeed_config_process",parameters:[{name:"prefix",val:" = ''"},{name:"mismatches",val:" = None"},{name:"config",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/accelerate/blob/vr_405/src/accelerate/utils/dataclasses.py#L342"}}),ys=new Ts({props:{name:"class accelerate.utils.DummyOptim",anchor:"accelerate.utils.DummyOptim",parameters:[{name:"params",val:" = None"},{name:"param_groups",val:" = None"}],parametersDescription:[{anchor:"accelerate.utils.DummyOptim.params",description:`<strong>params</strong> (list of <code>torch.Tensor</code>) &#x2014;
List of model parameters.`,name:"params"},{anchor:"accelerate.utils.DummyOptim.param_groups",description:`<strong>param_groups</strong> (list of dict) &#x2014;
List of dictionaries with parameters and their groups.`,name:"param_groups"}],source:"https://github.com/huggingface/accelerate/blob/vr_405/src/accelerate/utils/deepspeed.py#L86"}}),qs=new Ts({props:{name:"class accelerate.utils.DummyScheduler",anchor:"accelerate.utils.DummyScheduler",parameters:[],source:"https://github.com/huggingface/accelerate/blob/vr_405/src/accelerate/utils/deepspeed.py#L108"}}),$s=new Ts({props:{name:"class accelerate.utils.DeepSpeedEngineWrapper",anchor:"accelerate.utils.DeepSpeedEngineWrapper",parameters:[{name:"engine",val:""}],parametersDescription:[{anchor:"accelerate.utils.DeepSpeedEngineWrapper.engine",description:"<strong>engine</strong> (deepspeed.runtime.engine.DeepSpeedEngine) &#x2014; deepspeed engine to wrap",name:"engine"}],source:"https://github.com/huggingface/accelerate/blob/vr_405/src/accelerate/utils/deepspeed.py#L20"}}),Es=new Ts({props:{name:"class accelerate.utils.DeepSpeedOptimizerWrapper",anchor:"accelerate.utils.DeepSpeedOptimizerWrapper",parameters:[{name:"optimizer",val:""}],parametersDescription:[{anchor:"accelerate.utils.DeepSpeedOptimizerWrapper.optimizer",description:`<strong>optimizer</strong> (<code>torch.optim.optimizer.Optimizer</code>) &#x2014;
The optimizer to wrap.`,name:"optimizer"}],source:"https://github.com/huggingface/accelerate/blob/vr_405/src/accelerate/utils/deepspeed.py#L45"}}),zs=new Ts({props:{name:"class accelerate.utils.DeepSpeedSchedulerWrapper",anchor:"accelerate.utils.DeepSpeedSchedulerWrapper",parameters:[{name:"scheduler",val:""},{name:"optimizers",val:""}],parametersDescription:[{anchor:"accelerate.utils.DeepSpeedSchedulerWrapper.scheduler",description:`<strong>scheduler</strong> (<code>torch.optim.lr_scheduler.LambdaLR</code>) &#x2014;
The scheduler to wrap.`,name:"scheduler"},{anchor:"accelerate.utils.DeepSpeedSchedulerWrapper.optimizers",description:"<strong>optimizers</strong> (one or a list of <code>torch.optim.Optimizer</code>) &#x2014;",name:"optimizers"}],source:"https://github.com/huggingface/accelerate/blob/vr_405/src/accelerate/utils/deepspeed.py#L69"}}),ks=new N({}),{c(){Z=a("meta"),Wa=c(),F=a("h1"),re=a("a"),pt=a("span"),h(xe.$$.fragment),Ao=c(),rt=a("span"),To=l("DeepSpeed"),Ua=c(),ie=a("p"),Ro=l(`Training advanced deep learning models is challenging.
Beyond model design, model scientists also need to set up the state-of-the-art training techniques such as
distributed training, mixed precision, gradient accumulation, and checkpointing.
Yet still, scientists may not achieve the desired system performance and convergence rate.
Large model sizes are even more challenging: a large model easily runs out of memory with pure data parallelism and it is difficult to use model parallelism.
`),Ce=a("a"),Lo=l("DeepSpeed"),No=l(" addresses these challenges to accelerate model development and training."),Ba=c(),ce=a("p"),Zo=l("\u{1F917} Accelerate integrates "),Ie=a("a"),Fo=l("DeepSpeed"),Mo=l(" via 2 options:"),Ga=c(),ue=a("ol"),M=a("li"),Ho=l("Integration of the DeepSpeed features via "),it=a("code"),Wo=l("deepspeed config file"),Uo=l(" specification in "),ct=a("code"),Bo=l("accelerate config"),Go=l(` . You just supply your custom config file or use our template. Most of
this document is focused on this feature. This supports all the core features of DeepSpeed and gives user a lot of flexibility.
User may have to change few lines of code depending on the config.`),Vo=c(),Ae=a("li"),Yo=l("Integration via "),ut=a("code"),Jo=l("deepspeed_plugin"),Ko=l(`.This supports subset of the DeepSpeed features and uses default options for the rest of the configurations.
User need not change any code and is good for those who are fine with most of the default settings of DeepSpeed.`),Va=c(),H=a("h2"),de=a("a"),dt=a("span"),h(Te.$$.fragment),Qo=c(),ht=a("span"),Xo=l("What is integrated?"),Ya=c(),Rs=a("p"),el=l("Training:"),Ja=c(),Ls=a("ol"),_t=a("li"),sl=l("DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 with ZeRO-Infinity (CPU and NVME offload)."),Ka=c(),Ns=a("p"),tl=l("Inference:"),Qa=c(),Zs=a("ol"),Re=a("li"),al=l(`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),Fs=a("a"),nl=l("deepspeed-zero-inference"),ol=l("."),Xa=c(),W=a("h2"),he=a("a"),ft=a("span"),h(Le.$$.fragment),ll=c(),mt=a("span"),pl=l("How it works?"),en=c(),U=a("p"),gt=a("strong"),rl=l("Pre-Requisites"),il=l(": Install DeepSpeed version >=0.6.5. Please refer to the "),Ne=a("a"),cl=l("DeepSpeed Insallation details"),ul=l(`
for more information.`),sn=c(),C=a("p"),dl=l("We will first look at easy to use integration via "),wt=a("code"),hl=l("deepspeed_plugin"),_l=l(`.
Followed by more flexible and feature rich `),vt=a("code"),fl=l("deepspeed config file"),ml=l(" integration."),tn=c(),B=a("h3"),_e=a("a"),jt=a("span"),h(Ze.$$.fragment),gl=c(),bt=a("span"),wl=l("Accelerate DeepSpeed Plugin"),an=l(`

On your machine(s) just run:

	`),h(Fe.$$.fragment),nn=c(),Ms=a("p"),vl=l(`and answer the questions asked. It will ask whether you want to use a config file for deepspeed to which you answer no and answer the following questions.
This will generate a config file that will be used automatically to properly set the
default options when doing`),on=c(),h(Me.$$.fragment),ln=c(),fe=a("p"),jl=l("For instance, here is how you would run the NLP example "),yt=a("code"),bl=l("examples/by_feature/deepspeed_with_config_support.py"),yl=l(" (from the root of the repo) with DeepSpeed Plugin:"),pn=c(),Hs=a("p"),qt=a("strong"),ql=l("ZeRO Stage-2 DeepSpeed Plugin Example"),rn=c(),h(He.$$.fragment),cn=c(),h(We.$$.fragment),un=c(),Ws=a("p"),$t=a("strong"),$l=l("ZeRO Stage-3 with CPU Offload DeepSpeed Plugin Example"),dn=c(),h(Ue.$$.fragment),hn=c(),h(Be.$$.fragment),_n=c(),me=a("p"),El=l("Currently, "),Et=a("code"),zl=l("Accelerate"),kl=l(" supports following config through the CLI:"),fn=c(),h(Ge.$$.fragment),mn=c(),G=a("h3"),ge=a("a"),zt=a("span"),h(Ve.$$.fragment),Sl=c(),kt=a("span"),Dl=l("DeepSpeed Config File"),gn=l(`

On your machine(s) just run:

	`),h(Ye.$$.fragment),wn=c(),Us=a("p"),Ol=l(`and answer the questions asked. It will ask whether you want to use a config file for deepspeed to which you answer yes
and provide the path to the deepspeed config file.
This will generate a config file that will be used automatically to properly set the
default options when doing`),vn=c(),h(Je.$$.fragment),jn=c(),we=a("p"),Pl=l("For instance, here is how you would run the NLP example "),St=a("code"),xl=l("examples/by_feature/deepspeed_with_config_support.py"),Cl=l(" (from the root of the repo) with DeepSpeed Config File:"),bn=c(),Bs=a("p"),Dt=a("strong"),Il=l("ZeRO Stage-2 DeepSpeed Config File Example"),yn=c(),h(Ke.$$.fragment),qn=c(),ve=a("p"),Al=l("with the contents of "),Ot=a("code"),Tl=l("zero_stage2_config.json"),Rl=l(" being:"),$n=c(),h(Qe.$$.fragment),En=c(),h(Xe.$$.fragment),zn=c(),Gs=a("p"),Pt=a("strong"),Ll=l("ZeRO Stage-3 with CPU offload DeepSpeed Config File Example"),kn=c(),h(es.$$.fragment),Sn=c(),je=a("p"),Nl=l("with the contents of "),xt=a("code"),Zl=l("zero_stage3_offload_config.json"),Fl=l(" being:"),Dn=c(),h(ss.$$.fragment),On=c(),h(ts.$$.fragment),Pn=c(),Vs=a("p"),Ct=a("strong"),Ml=l("Important code changes when using DeepSpeed Config File"),xn=c(),be=a("ol"),y=a("li"),V=a("p"),Hl=l(`DeepSpeed Optimizers and Schedulers. For more information on these,
see the `),as=a("a"),Wl=l("DeepSpeed Optimizers"),Ul=l(" and "),ns=a("a"),Bl=l("DeepSpeed Schedulers"),Gl=l(` documentation.
We will look at the changes needed in the code when using these.`),Vl=c(),q=a("p"),Yl=l("a. DS Optim + DS Scheduler: The case when both "),It=a("code"),Jl=l("optimizer"),Kl=l(" and "),At=a("code"),Ql=l("scheduler"),Xl=l(` keys present in the DeepSpeed config file.
In this situation, those will be used and user has to use `),Tt=a("code"),ep=l("accelerate.utils.DummyOptim"),sp=l(" and "),Rt=a("code"),tp=l("accelerate.utils.DummyScheduler"),ap=l(` to replace the PyTorch/Custom optimizers and schedulers in their code.
Below is the snippet from `),Lt=a("code"),np=l("examples/by_feature/deepspeed_with_config_support.py"),op=l(" showing this:"),lp=c(),h(os.$$.fragment),pp=c(),z=a("p"),rp=l("b. Custom Optim + Custom Scheduler: The case when both "),Nt=a("code"),ip=l("optimizer"),cp=l(" and "),Zt=a("code"),up=l("scheduler"),dp=l(` keys are absent in the DeepSpeed config file.
In this situation, no code changes are needed from the user and this is the case when using integration via DeepSpeed Plugin.
In the above example we can see that the code reamins unchanged if the `),Ft=a("code"),hp=l("optimizer"),_p=l(" and "),Mt=a("code"),fp=l("scheduler"),mp=l(" keys are absent in the DeepSpeed config file."),gp=c(),Y=a("p"),wp=l("c. Custom Optim + DS Scheduler: The case when only "),Ht=a("code"),vp=l("scheduler"),jp=l(` key is present in the DeepSpeed config file.
In this situation, user has to use `),Wt=a("code"),bp=l("accelerate.utils.DummyScheduler"),yp=l(" to replace the PyTorch/Custom scheduler in their code."),qp=c(),ls=a("p"),$p=l("d. DS Optim + Custom Scheduler: The case when only "),Ut=a("code"),Ep=l("optimizer"),zp=l(` key is present in the DeepSpeed config file.
This will result in an error because one can only use DS Scheduler when using DS Optim.`),kp=c(),Bt=a("li"),P=a("p"),Sp=l("Notice the "),Gt=a("code"),Dp=l("auto"),Op=l(` values in the above example DeepSpeed config files.
These have to specified by the user in the code by running `),Vt=a("code"),Pp=l("accelerator.state.deepspeed_plugin.deepspeed_config_process(**kwargs)"),xp=l(`.
This allows user more flexibilty to fill these fields based on the code instead of hardcoding them.
Below is the snippet from `),Yt=a("code"),Cp=l("examples/by_feature/deepspeed_with_config_support.py"),Ip=l(" showing how to fill these:"),Cn=c(),h(ps.$$.fragment),In=c(),ye=a("p"),Ap=l("a. Note that this needs to be done before call to "),Jt=a("code"),Tp=l("accelerator.prepare"),Rp=l("."),An=c(),Ys=a("p"),Lp=l("b. If there are mismatches between the values given in the DeepSpeed config file and the values given in the code, an error will be thrown."),Tn=c(),E=a("p"),Np=l("c. If there are fields with "),Kt=a("code"),Zp=l("auto"),Fp=l(" value whose value isn\u2019t provided to "),Qt=a("code"),Mp=l("accelerator.state.deepspeed_plugin.deepspeed_config_process"),Hp=l(`, an error will be thrown.
So, make sure to fill all the `),Xt=a("code"),Wp=l("auto"),Up=l(" fields in the DeepSpeed config file before calling "),ea=a("code"),Bp=l("accelerator.prepare"),Gp=l("."),Rn=c(),J=a("h2"),qe=a("a"),sa=a("span"),h(rs.$$.fragment),Vp=c(),ta=a("span"),Yp=l("Saving and loading"),Ln=c(),$e=a("ol"),aa=a("li"),na=a("p"),Jp=l("Saving and loading of models is unchanged for ZeRO Stage-1 and Stage-2."),Kp=c(),v=a("li"),is=a("p"),Qp=l("under ZeRO Stage-3, "),oa=a("code"),Xp=l("state_dict"),er=l(` contains just the placeholders since the model weights are partitioned across multiple GPUs.
ZeRO Stage-3 has 2 options:`),sr=c(),$=a("p"),tr=l("a. Saving the entire 16bit model weights to directly load later on using "),la=a("code"),ar=l("model.load_state_dict(torch.load(pytorch_model.bin))"),nr=l(`.
For this, either set `),pa=a("code"),or=l("zero_optimization.stage3_gather_16bit_weights_on_model_save"),lr=l(` to True in DeepSpeed Config file or set
`),ra=a("code"),pr=l("zero3_save_16bit_model"),rr=l(` to True in DeepSpeed Plugin.
`),ia=a("strong"),ir=l("Note that this option requires consolidation of the weights on one GPU it can be slow and memory demanding, so only use this feature when needed."),cr=l(`
Below is the snippet from `),ca=a("code"),ur=l("examples/by_feature/deepspeed_with_config_support.py"),dr=l(" showing this:"),hr=c(),h(cs.$$.fragment),_r=c(),K=a("p"),fr=l("b. To get 32bit weights, first save the model using "),ua=a("code"),mr=l("model.save_checkpoint()"),gr=l(`.
Below is the snippet from `),da=a("code"),wr=l("examples/by_feature/deepspeed_with_config_support.py"),vr=l(" showing this:"),jr=c(),h(us.$$.fragment),br=c(),Q=a("p"),yr=l("This will create ZeRO model and optimizer partitions along with "),ha=a("code"),qr=l("zero_to_fp32.py"),$r=l(` script in checkpoint directory.
One can use this script to do offline consolidation.`),Er=a("br"),zr=l(`
It requires no configuration files or GPUs. Here is an example of its usage:`),kr=c(),h(ds.$$.fragment),Sr=c(),_a=a("p"),Dr=l("To get 32bit model for saving/inference, one can do the following:"),Or=c(),h(hs.$$.fragment),Pr=c(),fa=a("p"),xr=l("If only interested in state_dict, one can do the following:"),Cr=c(),h(_s.$$.fragment),Ir=c(),ma=a("p"),Ar=l("Note that all these functions require ~2x memory (general RAM) of the size of the final checkpoint."),Nn=c(),X=a("h2"),Ee=a("a"),ga=a("span"),h(fs.$$.fragment),Tr=c(),wa=a("span"),Rr=l("ZeRO Inference"),Zn=l(`

DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. 
It uses the same ZeRO protocol as training, but it doesn't use an optimizer and a lr scheduler and only stage 3 is relevant.
With accelerate integration, one has to just prepare model and dataloader as shown below:
\`\`\`python
model, eval_dataloader = accelerator.prepare(model, eval_dataloader)
\`\`\`
`),ee=a("h2"),ze=a("a"),va=a("span"),h(ms.$$.fragment),Lr=c(),ja=a("span"),Nr=l("Few caveats to be aware of"),Fn=c(),I=a("ol"),ba=a("li"),Zr=l("Current integration doesn\u2019t support Pipeline Parallelism of DeepSpeed."),Fr=c(),gs=a("li"),Mr=l("Current integration doesn\u2019t support "),ya=a("code"),Hr=l("mpu"),Wr=l(", limiting the tensor parallelism which is supported in Megatron-LM."),Ur=c(),ws=a("li"),Br=l("Current integration doesn\u2019t support multiple models for a given "),qa=a("code"),Gr=l("accelerator"),Vr=l(" object."),Mn=c(),se=a("h2"),ke=a("a"),$a=a("span"),h(vs.$$.fragment),Yr=c(),Ea=a("span"),Jr=l("Internals"),Hn=c(),x=a("div"),h(js.$$.fragment),Kr=c(),za=a("p"),Qr=l("This plugin is used to integrate DeepSpeed."),Xr=c(),Se=a("div"),h(bs.$$.fragment),ei=c(),ka=a("p"),si=l("Process the DeepSpeed config with the values from the kwargs."),Wn=c(),te=a("div"),h(ys.$$.fragment),ti=c(),Sa=a("p"),ai=l(`Dummy optimizer presents model parameters or param groups, this is primarily used to follow conventional training
loop when optimizer config is specified in the deepspeed config file.`),Un=c(),ae=a("div"),h(qs.$$.fragment),ni=c(),Da=a("p"),oi=l(`Dummy scheduler presents model parameters or param groups, this is primarily used to follow conventional training
loop when scheduler config is specified in the deepspeed config file.`),Bn=c(),ne=a("div"),h($s.$$.fragment),li=c(),Oa=a("p"),pi=l("Internal wrapper for deepspeed.runtime.engine.DeepSpeedEngine. This is used to follow conventional training loop."),Gn=c(),oe=a("div"),h(Es.$$.fragment),ri=c(),Pa=a("p"),ii=l("Internal wrapper around a deepspeed optimizer."),Vn=c(),le=a("div"),h(zs.$$.fragment),ci=c(),xa=a("p"),ui=l("Internal wrapper around a deepspeed scheduler."),Yn=c(),pe=a("h2"),De=a("a"),Ca=a("span"),h(ks.$$.fragment),di=c(),Ia=a("span"),hi=l("Main DeepSpeed Resources"),Jn=c(),k=a("ul"),Aa=a("li"),Ss=a("a"),_i=l("Project\u2019s github"),fi=c(),Ta=a("li"),Ds=a("a"),mi=l("Usage docs"),gi=c(),Ra=a("li"),Os=a("a"),wi=l("API docs"),vi=c(),La=a("li"),Ps=a("a"),ji=l("Blog posts"),Kn=c(),Js=a("p"),bi=l("Papers:"),Qn=c(),A=a("ul"),Na=a("li"),xs=a("a"),yi=l("ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),qi=c(),Za=a("li"),Cs=a("a"),$i=l("ZeRO-Offload: Democratizing Billion-Scale Model Training"),Ei=c(),Fa=a("li"),Is=a("a"),zi=l("ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),Xn=c(),T=a("p"),ki=l("Finally, please, remember that, \u{1F917} "),Ma=a("code"),Si=l("Accelerate"),Di=l(` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),As=a("a"),Oi=l("DeepSpeed GitHub"),Pi=l("."),this.h()},l(e){const r=sd('[data-svelte="svelte-1phssyn"]',document.head);Z=n(r,"META",{name:!0,content:!0}),r.forEach(t),Wa=u(e),F=n(e,"H1",{class:!0});var so=o(F);re=n(so,"A",{id:!0,class:!0,href:!0});var Ci=o(re);pt=n(Ci,"SPAN",{});var Ii=o(pt);_(xe.$$.fragment,Ii),Ii.forEach(t),Ci.forEach(t),Ao=u(so),rt=n(so,"SPAN",{});var Ai=o(rt);To=p(Ai,"DeepSpeed"),Ai.forEach(t),so.forEach(t),Ua=u(e),ie=n(e,"P",{});var to=o(ie);Ro=p(to,`Training advanced deep learning models is challenging.
Beyond model design, model scientists also need to set up the state-of-the-art training techniques such as
distributed training, mixed precision, gradient accumulation, and checkpointing.
Yet still, scientists may not achieve the desired system performance and convergence rate.
Large model sizes are even more challenging: a large model easily runs out of memory with pure data parallelism and it is difficult to use model parallelism.
`),Ce=n(to,"A",{href:!0,rel:!0});var Ti=o(Ce);Lo=p(Ti,"DeepSpeed"),Ti.forEach(t),No=p(to," addresses these challenges to accelerate model development and training."),to.forEach(t),Ba=u(e),ce=n(e,"P",{});var ao=o(ce);Zo=p(ao,"\u{1F917} Accelerate integrates "),Ie=n(ao,"A",{href:!0,rel:!0});var Ri=o(Ie);Fo=p(Ri,"DeepSpeed"),Ri.forEach(t),Mo=p(ao," via 2 options:"),ao.forEach(t),Ga=u(e),ue=n(e,"OL",{});var no=o(ue);M=n(no,"LI",{});var Ks=o(M);Ho=p(Ks,"Integration of the DeepSpeed features via "),it=n(Ks,"CODE",{});var Li=o(it);Wo=p(Li,"deepspeed config file"),Li.forEach(t),Uo=p(Ks," specification in "),ct=n(Ks,"CODE",{});var Ni=o(ct);Bo=p(Ni,"accelerate config"),Ni.forEach(t),Go=p(Ks,` . You just supply your custom config file or use our template. Most of
this document is focused on this feature. This supports all the core features of DeepSpeed and gives user a lot of flexibility.
User may have to change few lines of code depending on the config.`),Ks.forEach(t),Vo=u(no),Ae=n(no,"LI",{});var oo=o(Ae);Yo=p(oo,"Integration via "),ut=n(oo,"CODE",{});var Zi=o(ut);Jo=p(Zi,"deepspeed_plugin"),Zi.forEach(t),Ko=p(oo,`.This supports subset of the DeepSpeed features and uses default options for the rest of the configurations.
User need not change any code and is good for those who are fine with most of the default settings of DeepSpeed.`),oo.forEach(t),no.forEach(t),Va=u(e),H=n(e,"H2",{class:!0});var lo=o(H);de=n(lo,"A",{id:!0,class:!0,href:!0});var Fi=o(de);dt=n(Fi,"SPAN",{});var Mi=o(dt);_(Te.$$.fragment,Mi),Mi.forEach(t),Fi.forEach(t),Qo=u(lo),ht=n(lo,"SPAN",{});var Hi=o(ht);Xo=p(Hi,"What is integrated?"),Hi.forEach(t),lo.forEach(t),Ya=u(e),Rs=n(e,"P",{});var Wi=o(Rs);el=p(Wi,"Training:"),Wi.forEach(t),Ja=u(e),Ls=n(e,"OL",{});var Ui=o(Ls);_t=n(Ui,"LI",{});var Bi=o(_t);sl=p(Bi,"DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 with ZeRO-Infinity (CPU and NVME offload)."),Bi.forEach(t),Ui.forEach(t),Ka=u(e),Ns=n(e,"P",{});var Gi=o(Ns);tl=p(Gi,"Inference:"),Gi.forEach(t),Qa=u(e),Zs=n(e,"OL",{});var Vi=o(Zs);Re=n(Vi,"LI",{});var po=o(Re);al=p(po,`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),Fs=n(po,"A",{href:!0});var Yi=o(Fs);nl=p(Yi,"deepspeed-zero-inference"),Yi.forEach(t),ol=p(po,"."),po.forEach(t),Vi.forEach(t),Xa=u(e),W=n(e,"H2",{class:!0});var ro=o(W);he=n(ro,"A",{id:!0,class:!0,href:!0});var Ji=o(he);ft=n(Ji,"SPAN",{});var Ki=o(ft);_(Le.$$.fragment,Ki),Ki.forEach(t),Ji.forEach(t),ll=u(ro),mt=n(ro,"SPAN",{});var Qi=o(mt);pl=p(Qi,"How it works?"),Qi.forEach(t),ro.forEach(t),en=u(e),U=n(e,"P",{});var Ha=o(U);gt=n(Ha,"STRONG",{});var Xi=o(gt);rl=p(Xi,"Pre-Requisites"),Xi.forEach(t),il=p(Ha,": Install DeepSpeed version >=0.6.5. Please refer to the "),Ne=n(Ha,"A",{href:!0,rel:!0});var ec=o(Ne);cl=p(ec,"DeepSpeed Insallation details"),ec.forEach(t),ul=p(Ha,`
for more information.`),Ha.forEach(t),sn=u(e),C=n(e,"P",{});var Qs=o(C);dl=p(Qs,"We will first look at easy to use integration via "),wt=n(Qs,"CODE",{});var sc=o(wt);hl=p(sc,"deepspeed_plugin"),sc.forEach(t),_l=p(Qs,`.
Followed by more flexible and feature rich `),vt=n(Qs,"CODE",{});var tc=o(vt);fl=p(tc,"deepspeed config file"),tc.forEach(t),ml=p(Qs," integration."),Qs.forEach(t),tn=u(e),B=n(e,"H3",{class:!0});var io=o(B);_e=n(io,"A",{id:!0,class:!0,href:!0});var ac=o(_e);jt=n(ac,"SPAN",{});var nc=o(jt);_(Ze.$$.fragment,nc),nc.forEach(t),ac.forEach(t),gl=u(io),bt=n(io,"SPAN",{});var oc=o(bt);wl=p(oc,"Accelerate DeepSpeed Plugin"),oc.forEach(t),io.forEach(t),an=p(e,`

On your machine(s) just run:

	`),_(Fe.$$.fragment,e),nn=u(e),Ms=n(e,"P",{});var lc=o(Ms);vl=p(lc,`and answer the questions asked. It will ask whether you want to use a config file for deepspeed to which you answer no and answer the following questions.
This will generate a config file that will be used automatically to properly set the
default options when doing`),lc.forEach(t),on=u(e),_(Me.$$.fragment,e),ln=u(e),fe=n(e,"P",{});var co=o(fe);jl=p(co,"For instance, here is how you would run the NLP example "),yt=n(co,"CODE",{});var pc=o(yt);bl=p(pc,"examples/by_feature/deepspeed_with_config_support.py"),pc.forEach(t),yl=p(co," (from the root of the repo) with DeepSpeed Plugin:"),co.forEach(t),pn=u(e),Hs=n(e,"P",{});var rc=o(Hs);qt=n(rc,"STRONG",{});var ic=o(qt);ql=p(ic,"ZeRO Stage-2 DeepSpeed Plugin Example"),ic.forEach(t),rc.forEach(t),rn=u(e),_(He.$$.fragment,e),cn=u(e),_(We.$$.fragment,e),un=u(e),Ws=n(e,"P",{});var cc=o(Ws);$t=n(cc,"STRONG",{});var uc=o($t);$l=p(uc,"ZeRO Stage-3 with CPU Offload DeepSpeed Plugin Example"),uc.forEach(t),cc.forEach(t),dn=u(e),_(Ue.$$.fragment,e),hn=u(e),_(Be.$$.fragment,e),_n=u(e),me=n(e,"P",{});var uo=o(me);El=p(uo,"Currently, "),Et=n(uo,"CODE",{});var dc=o(Et);zl=p(dc,"Accelerate"),dc.forEach(t),kl=p(uo," supports following config through the CLI:"),uo.forEach(t),fn=u(e),_(Ge.$$.fragment,e),mn=u(e),G=n(e,"H3",{class:!0});var ho=o(G);ge=n(ho,"A",{id:!0,class:!0,href:!0});var hc=o(ge);zt=n(hc,"SPAN",{});var _c=o(zt);_(Ve.$$.fragment,_c),_c.forEach(t),hc.forEach(t),Sl=u(ho),kt=n(ho,"SPAN",{});var fc=o(kt);Dl=p(fc,"DeepSpeed Config File"),fc.forEach(t),ho.forEach(t),gn=p(e,`

On your machine(s) just run:

	`),_(Ye.$$.fragment,e),wn=u(e),Us=n(e,"P",{});var mc=o(Us);Ol=p(mc,`and answer the questions asked. It will ask whether you want to use a config file for deepspeed to which you answer yes
and provide the path to the deepspeed config file.
This will generate a config file that will be used automatically to properly set the
default options when doing`),mc.forEach(t),vn=u(e),_(Je.$$.fragment,e),jn=u(e),we=n(e,"P",{});var _o=o(we);Pl=p(_o,"For instance, here is how you would run the NLP example "),St=n(_o,"CODE",{});var gc=o(St);xl=p(gc,"examples/by_feature/deepspeed_with_config_support.py"),gc.forEach(t),Cl=p(_o," (from the root of the repo) with DeepSpeed Config File:"),_o.forEach(t),bn=u(e),Bs=n(e,"P",{});var wc=o(Bs);Dt=n(wc,"STRONG",{});var vc=o(Dt);Il=p(vc,"ZeRO Stage-2 DeepSpeed Config File Example"),vc.forEach(t),wc.forEach(t),yn=u(e),_(Ke.$$.fragment,e),qn=u(e),ve=n(e,"P",{});var fo=o(ve);Al=p(fo,"with the contents of "),Ot=n(fo,"CODE",{});var jc=o(Ot);Tl=p(jc,"zero_stage2_config.json"),jc.forEach(t),Rl=p(fo," being:"),fo.forEach(t),$n=u(e),_(Qe.$$.fragment,e),En=u(e),_(Xe.$$.fragment,e),zn=u(e),Gs=n(e,"P",{});var bc=o(Gs);Pt=n(bc,"STRONG",{});var yc=o(Pt);Ll=p(yc,"ZeRO Stage-3 with CPU offload DeepSpeed Config File Example"),yc.forEach(t),bc.forEach(t),kn=u(e),_(es.$$.fragment,e),Sn=u(e),je=n(e,"P",{});var mo=o(je);Nl=p(mo,"with the contents of "),xt=n(mo,"CODE",{});var qc=o(xt);Zl=p(qc,"zero_stage3_offload_config.json"),qc.forEach(t),Fl=p(mo," being:"),mo.forEach(t),Dn=u(e),_(ss.$$.fragment,e),On=u(e),_(ts.$$.fragment,e),Pn=u(e),Vs=n(e,"P",{});var $c=o(Vs);Ct=n($c,"STRONG",{});var Ec=o(Ct);Ml=p(Ec,"Important code changes when using DeepSpeed Config File"),Ec.forEach(t),$c.forEach(t),xn=u(e),be=n(e,"OL",{});var go=o(be);y=n(go,"LI",{});var S=o(y);V=n(S,"P",{});var Xs=o(V);Hl=p(Xs,`DeepSpeed Optimizers and Schedulers. For more information on these,
see the `),as=n(Xs,"A",{href:!0,rel:!0});var zc=o(as);Wl=p(zc,"DeepSpeed Optimizers"),zc.forEach(t),Ul=p(Xs," and "),ns=n(Xs,"A",{href:!0,rel:!0});var kc=o(ns);Bl=p(kc,"DeepSpeed Schedulers"),kc.forEach(t),Gl=p(Xs,` documentation.
We will look at the changes needed in the code when using these.`),Xs.forEach(t),Vl=u(S),q=n(S,"P",{});var D=o(q);Yl=p(D,"a. DS Optim + DS Scheduler: The case when both "),It=n(D,"CODE",{});var Sc=o(It);Jl=p(Sc,"optimizer"),Sc.forEach(t),Kl=p(D," and "),At=n(D,"CODE",{});var Dc=o(At);Ql=p(Dc,"scheduler"),Dc.forEach(t),Xl=p(D,` keys present in the DeepSpeed config file.
In this situation, those will be used and user has to use `),Tt=n(D,"CODE",{});var Oc=o(Tt);ep=p(Oc,"accelerate.utils.DummyOptim"),Oc.forEach(t),sp=p(D," and "),Rt=n(D,"CODE",{});var Pc=o(Rt);tp=p(Pc,"accelerate.utils.DummyScheduler"),Pc.forEach(t),ap=p(D,` to replace the PyTorch/Custom optimizers and schedulers in their code.
Below is the snippet from `),Lt=n(D,"CODE",{});var xc=o(Lt);np=p(xc,"examples/by_feature/deepspeed_with_config_support.py"),xc.forEach(t),op=p(D," showing this:"),D.forEach(t),lp=u(S),_(os.$$.fragment,S),pp=u(S),z=n(S,"P",{});var R=o(z);rp=p(R,"b. Custom Optim + Custom Scheduler: The case when both "),Nt=n(R,"CODE",{});var Cc=o(Nt);ip=p(Cc,"optimizer"),Cc.forEach(t),cp=p(R," and "),Zt=n(R,"CODE",{});var Ic=o(Zt);up=p(Ic,"scheduler"),Ic.forEach(t),dp=p(R,` keys are absent in the DeepSpeed config file.
In this situation, no code changes are needed from the user and this is the case when using integration via DeepSpeed Plugin.
In the above example we can see that the code reamins unchanged if the `),Ft=n(R,"CODE",{});var Ac=o(Ft);hp=p(Ac,"optimizer"),Ac.forEach(t),_p=p(R," and "),Mt=n(R,"CODE",{});var Tc=o(Mt);fp=p(Tc,"scheduler"),Tc.forEach(t),mp=p(R," keys are absent in the DeepSpeed config file."),R.forEach(t),gp=u(S),Y=n(S,"P",{});var et=o(Y);wp=p(et,"c. Custom Optim + DS Scheduler: The case when only "),Ht=n(et,"CODE",{});var Rc=o(Ht);vp=p(Rc,"scheduler"),Rc.forEach(t),jp=p(et,` key is present in the DeepSpeed config file.
In this situation, user has to use `),Wt=n(et,"CODE",{});var Lc=o(Wt);bp=p(Lc,"accelerate.utils.DummyScheduler"),Lc.forEach(t),yp=p(et," to replace the PyTorch/Custom scheduler in their code."),et.forEach(t),qp=u(S),ls=n(S,"P",{});var wo=o(ls);$p=p(wo,"d. DS Optim + Custom Scheduler: The case when only "),Ut=n(wo,"CODE",{});var Nc=o(Ut);Ep=p(Nc,"optimizer"),Nc.forEach(t),zp=p(wo,` key is present in the DeepSpeed config file.
This will result in an error because one can only use DS Scheduler when using DS Optim.`),wo.forEach(t),S.forEach(t),kp=u(go),Bt=n(go,"LI",{});var Zc=o(Bt);P=n(Zc,"P",{});var Oe=o(P);Sp=p(Oe,"Notice the "),Gt=n(Oe,"CODE",{});var Fc=o(Gt);Dp=p(Fc,"auto"),Fc.forEach(t),Op=p(Oe,` values in the above example DeepSpeed config files.
These have to specified by the user in the code by running `),Vt=n(Oe,"CODE",{});var Mc=o(Vt);Pp=p(Mc,"accelerator.state.deepspeed_plugin.deepspeed_config_process(**kwargs)"),Mc.forEach(t),xp=p(Oe,`.
This allows user more flexibilty to fill these fields based on the code instead of hardcoding them.
Below is the snippet from `),Yt=n(Oe,"CODE",{});var Hc=o(Yt);Cp=p(Hc,"examples/by_feature/deepspeed_with_config_support.py"),Hc.forEach(t),Ip=p(Oe," showing how to fill these:"),Oe.forEach(t),Zc.forEach(t),go.forEach(t),Cn=u(e),_(ps.$$.fragment,e),In=u(e),ye=n(e,"P",{});var vo=o(ye);Ap=p(vo,"a. Note that this needs to be done before call to "),Jt=n(vo,"CODE",{});var Wc=o(Jt);Tp=p(Wc,"accelerator.prepare"),Wc.forEach(t),Rp=p(vo,"."),vo.forEach(t),An=u(e),Ys=n(e,"P",{});var Uc=o(Ys);Lp=p(Uc,"b. If there are mismatches between the values given in the DeepSpeed config file and the values given in the code, an error will be thrown."),Uc.forEach(t),Tn=u(e),E=n(e,"P",{});var L=o(E);Np=p(L,"c. If there are fields with "),Kt=n(L,"CODE",{});var Bc=o(Kt);Zp=p(Bc,"auto"),Bc.forEach(t),Fp=p(L," value whose value isn\u2019t provided to "),Qt=n(L,"CODE",{});var Gc=o(Qt);Mp=p(Gc,"accelerator.state.deepspeed_plugin.deepspeed_config_process"),Gc.forEach(t),Hp=p(L,`, an error will be thrown.
So, make sure to fill all the `),Xt=n(L,"CODE",{});var Vc=o(Xt);Wp=p(Vc,"auto"),Vc.forEach(t),Up=p(L," fields in the DeepSpeed config file before calling "),ea=n(L,"CODE",{});var Yc=o(ea);Bp=p(Yc,"accelerator.prepare"),Yc.forEach(t),Gp=p(L,"."),L.forEach(t),Rn=u(e),J=n(e,"H2",{class:!0});var jo=o(J);qe=n(jo,"A",{id:!0,class:!0,href:!0});var Jc=o(qe);sa=n(Jc,"SPAN",{});var Kc=o(sa);_(rs.$$.fragment,Kc),Kc.forEach(t),Jc.forEach(t),Vp=u(jo),ta=n(jo,"SPAN",{});var Qc=o(ta);Yp=p(Qc,"Saving and loading"),Qc.forEach(t),jo.forEach(t),Ln=u(e),$e=n(e,"OL",{});var bo=o($e);aa=n(bo,"LI",{});var Xc=o(aa);na=n(Xc,"P",{});var eu=o(na);Jp=p(eu,"Saving and loading of models is unchanged for ZeRO Stage-1 and Stage-2."),eu.forEach(t),Xc.forEach(t),Kp=u(bo),v=n(bo,"LI",{});var j=o(v);is=n(j,"P",{});var yo=o(is);Qp=p(yo,"under ZeRO Stage-3, "),oa=n(yo,"CODE",{});var su=o(oa);Xp=p(su,"state_dict"),su.forEach(t),er=p(yo,` contains just the placeholders since the model weights are partitioned across multiple GPUs.
ZeRO Stage-3 has 2 options:`),yo.forEach(t),sr=u(j),$=n(j,"P",{});var O=o($);tr=p(O,"a. Saving the entire 16bit model weights to directly load later on using "),la=n(O,"CODE",{});var tu=o(la);ar=p(tu,"model.load_state_dict(torch.load(pytorch_model.bin))"),tu.forEach(t),nr=p(O,`.
For this, either set `),pa=n(O,"CODE",{});var au=o(pa);or=p(au,"zero_optimization.stage3_gather_16bit_weights_on_model_save"),au.forEach(t),lr=p(O,` to True in DeepSpeed Config file or set
`),ra=n(O,"CODE",{});var nu=o(ra);pr=p(nu,"zero3_save_16bit_model"),nu.forEach(t),rr=p(O,` to True in DeepSpeed Plugin.
`),ia=n(O,"STRONG",{});var ou=o(ia);ir=p(ou,"Note that this option requires consolidation of the weights on one GPU it can be slow and memory demanding, so only use this feature when needed."),ou.forEach(t),cr=p(O,`
Below is the snippet from `),ca=n(O,"CODE",{});var lu=o(ca);ur=p(lu,"examples/by_feature/deepspeed_with_config_support.py"),lu.forEach(t),dr=p(O," showing this:"),O.forEach(t),hr=u(j),_(cs.$$.fragment,j),_r=u(j),K=n(j,"P",{});var st=o(K);fr=p(st,"b. To get 32bit weights, first save the model using "),ua=n(st,"CODE",{});var pu=o(ua);mr=p(pu,"model.save_checkpoint()"),pu.forEach(t),gr=p(st,`.
Below is the snippet from `),da=n(st,"CODE",{});var ru=o(da);wr=p(ru,"examples/by_feature/deepspeed_with_config_support.py"),ru.forEach(t),vr=p(st," showing this:"),st.forEach(t),jr=u(j),_(us.$$.fragment,j),br=u(j),Q=n(j,"P",{});var tt=o(Q);yr=p(tt,"This will create ZeRO model and optimizer partitions along with "),ha=n(tt,"CODE",{});var iu=o(ha);qr=p(iu,"zero_to_fp32.py"),iu.forEach(t),$r=p(tt,` script in checkpoint directory.
One can use this script to do offline consolidation.`),Er=n(tt,"BR",{}),zr=p(tt,`
It requires no configuration files or GPUs. Here is an example of its usage:`),tt.forEach(t),kr=u(j),_(ds.$$.fragment,j),Sr=u(j),_a=n(j,"P",{});var cu=o(_a);Dr=p(cu,"To get 32bit model for saving/inference, one can do the following:"),cu.forEach(t),Or=u(j),_(hs.$$.fragment,j),Pr=u(j),fa=n(j,"P",{});var uu=o(fa);xr=p(uu,"If only interested in state_dict, one can do the following:"),uu.forEach(t),Cr=u(j),_(_s.$$.fragment,j),Ir=u(j),ma=n(j,"P",{});var du=o(ma);Ar=p(du,"Note that all these functions require ~2x memory (general RAM) of the size of the final checkpoint."),du.forEach(t),j.forEach(t),bo.forEach(t),Nn=u(e),X=n(e,"H2",{class:!0});var qo=o(X);Ee=n(qo,"A",{id:!0,class:!0,href:!0});var hu=o(Ee);ga=n(hu,"SPAN",{});var _u=o(ga);_(fs.$$.fragment,_u),_u.forEach(t),hu.forEach(t),Tr=u(qo),wa=n(qo,"SPAN",{});var fu=o(wa);Rr=p(fu,"ZeRO Inference"),fu.forEach(t),qo.forEach(t),Zn=p(e,`

DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. 
It uses the same ZeRO protocol as training, but it doesn't use an optimizer and a lr scheduler and only stage 3 is relevant.
With accelerate integration, one has to just prepare model and dataloader as shown below:
\`\`\`python
model, eval_dataloader = accelerator.prepare(model, eval_dataloader)
\`\`\`
`),ee=n(e,"H2",{class:!0});var $o=o(ee);ze=n($o,"A",{id:!0,class:!0,href:!0});var mu=o(ze);va=n(mu,"SPAN",{});var gu=o(va);_(ms.$$.fragment,gu),gu.forEach(t),mu.forEach(t),Lr=u($o),ja=n($o,"SPAN",{});var wu=o(ja);Nr=p(wu,"Few caveats to be aware of"),wu.forEach(t),$o.forEach(t),Fn=u(e),I=n(e,"OL",{});var at=o(I);ba=n(at,"LI",{});var vu=o(ba);Zr=p(vu,"Current integration doesn\u2019t support Pipeline Parallelism of DeepSpeed."),vu.forEach(t),Fr=u(at),gs=n(at,"LI",{});var Eo=o(gs);Mr=p(Eo,"Current integration doesn\u2019t support "),ya=n(Eo,"CODE",{});var ju=o(ya);Hr=p(ju,"mpu"),ju.forEach(t),Wr=p(Eo,", limiting the tensor parallelism which is supported in Megatron-LM."),Eo.forEach(t),Ur=u(at),ws=n(at,"LI",{});var zo=o(ws);Br=p(zo,"Current integration doesn\u2019t support multiple models for a given "),qa=n(zo,"CODE",{});var bu=o(qa);Gr=p(bu,"accelerator"),bu.forEach(t),Vr=p(zo," object."),zo.forEach(t),at.forEach(t),Mn=u(e),se=n(e,"H2",{class:!0});var ko=o(se);ke=n(ko,"A",{id:!0,class:!0,href:!0});var yu=o(ke);$a=n(yu,"SPAN",{});var qu=o($a);_(vs.$$.fragment,qu),qu.forEach(t),yu.forEach(t),Yr=u(ko),Ea=n(ko,"SPAN",{});var $u=o(Ea);Jr=p($u,"Internals"),$u.forEach(t),ko.forEach(t),Hn=u(e),x=n(e,"DIV",{class:!0});var nt=o(x);_(js.$$.fragment,nt),Kr=u(nt),za=n(nt,"P",{});var Eu=o(za);Qr=p(Eu,"This plugin is used to integrate DeepSpeed."),Eu.forEach(t),Xr=u(nt),Se=n(nt,"DIV",{class:!0});var So=o(Se);_(bs.$$.fragment,So),ei=u(So),ka=n(So,"P",{});var zu=o(ka);si=p(zu,"Process the DeepSpeed config with the values from the kwargs."),zu.forEach(t),So.forEach(t),nt.forEach(t),Wn=u(e),te=n(e,"DIV",{class:!0});var Do=o(te);_(ys.$$.fragment,Do),ti=u(Do),Sa=n(Do,"P",{});var ku=o(Sa);ai=p(ku,`Dummy optimizer presents model parameters or param groups, this is primarily used to follow conventional training
loop when optimizer config is specified in the deepspeed config file.`),ku.forEach(t),Do.forEach(t),Un=u(e),ae=n(e,"DIV",{class:!0});var Oo=o(ae);_(qs.$$.fragment,Oo),ni=u(Oo),Da=n(Oo,"P",{});var Su=o(Da);oi=p(Su,`Dummy scheduler presents model parameters or param groups, this is primarily used to follow conventional training
loop when scheduler config is specified in the deepspeed config file.`),Su.forEach(t),Oo.forEach(t),Bn=u(e),ne=n(e,"DIV",{class:!0});var Po=o(ne);_($s.$$.fragment,Po),li=u(Po),Oa=n(Po,"P",{});var Du=o(Oa);pi=p(Du,"Internal wrapper for deepspeed.runtime.engine.DeepSpeedEngine. This is used to follow conventional training loop."),Du.forEach(t),Po.forEach(t),Gn=u(e),oe=n(e,"DIV",{class:!0});var xo=o(oe);_(Es.$$.fragment,xo),ri=u(xo),Pa=n(xo,"P",{});var Ou=o(Pa);ii=p(Ou,"Internal wrapper around a deepspeed optimizer."),Ou.forEach(t),xo.forEach(t),Vn=u(e),le=n(e,"DIV",{class:!0});var Co=o(le);_(zs.$$.fragment,Co),ci=u(Co),xa=n(Co,"P",{});var Pu=o(xa);ui=p(Pu,"Internal wrapper around a deepspeed scheduler."),Pu.forEach(t),Co.forEach(t),Yn=u(e),pe=n(e,"H2",{class:!0});var Io=o(pe);De=n(Io,"A",{id:!0,class:!0,href:!0});var xu=o(De);Ca=n(xu,"SPAN",{});var Cu=o(Ca);_(ks.$$.fragment,Cu),Cu.forEach(t),xu.forEach(t),di=u(Io),Ia=n(Io,"SPAN",{});var Iu=o(Ia);hi=p(Iu,"Main DeepSpeed Resources"),Iu.forEach(t),Io.forEach(t),Jn=u(e),k=n(e,"UL",{});var Pe=o(k);Aa=n(Pe,"LI",{});var Au=o(Aa);Ss=n(Au,"A",{href:!0,rel:!0});var Tu=o(Ss);_i=p(Tu,"Project\u2019s github"),Tu.forEach(t),Au.forEach(t),fi=u(Pe),Ta=n(Pe,"LI",{});var Ru=o(Ta);Ds=n(Ru,"A",{href:!0,rel:!0});var Lu=o(Ds);mi=p(Lu,"Usage docs"),Lu.forEach(t),Ru.forEach(t),gi=u(Pe),Ra=n(Pe,"LI",{});var Nu=o(Ra);Os=n(Nu,"A",{href:!0,rel:!0});var Zu=o(Os);wi=p(Zu,"API docs"),Zu.forEach(t),Nu.forEach(t),vi=u(Pe),La=n(Pe,"LI",{});var Fu=o(La);Ps=n(Fu,"A",{href:!0,rel:!0});var Mu=o(Ps);ji=p(Mu,"Blog posts"),Mu.forEach(t),Fu.forEach(t),Pe.forEach(t),Kn=u(e),Js=n(e,"P",{});var Hu=o(Js);bi=p(Hu,"Papers:"),Hu.forEach(t),Qn=u(e),A=n(e,"UL",{});var ot=o(A);Na=n(ot,"LI",{});var Wu=o(Na);xs=n(Wu,"A",{href:!0,rel:!0});var Uu=o(xs);yi=p(Uu,"ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),Uu.forEach(t),Wu.forEach(t),qi=u(ot),Za=n(ot,"LI",{});var Bu=o(Za);Cs=n(Bu,"A",{href:!0,rel:!0});var Gu=o(Cs);$i=p(Gu,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),Gu.forEach(t),Bu.forEach(t),Ei=u(ot),Fa=n(ot,"LI",{});var Vu=o(Fa);Is=n(Vu,"A",{href:!0,rel:!0});var Yu=o(Is);zi=p(Yu,"ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),Yu.forEach(t),Vu.forEach(t),ot.forEach(t),Xn=u(e),T=n(e,"P",{});var lt=o(T);ki=p(lt,"Finally, please, remember that, \u{1F917} "),Ma=n(lt,"CODE",{});var Ju=o(Ma);Si=p(Ju,"Accelerate"),Ju.forEach(t),Di=p(lt,` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),As=n(lt,"A",{href:!0,rel:!0});var Ku=o(As);Oi=p(Ku,"DeepSpeed GitHub"),Ku.forEach(t),Pi=p(lt,"."),lt.forEach(t),this.h()},h(){d(Z,"name","hf:doc:metadata"),d(Z,"content",JSON.stringify(od)),d(re,"id","deepspeed"),d(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(re,"href","#deepspeed"),d(F,"class","relative group"),d(Ce,"href","https://www.deepspeed.ai/"),d(Ce,"rel","nofollow"),d(Ie,"href","https://github.com/microsoft/DeepSpeed"),d(Ie,"rel","nofollow"),d(de,"id","what-is-integrated"),d(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(de,"href","#what-is-integrated"),d(H,"class","relative group"),d(Fs,"href","#deepspeed-zero-inference"),d(he,"id","how-it-works"),d(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(he,"href","#how-it-works"),d(W,"class","relative group"),d(Ne,"href","https://github.com/microsoft/DeepSpeed#installation"),d(Ne,"rel","nofollow"),d(_e,"id","accelerate-deepspeed-plugin"),d(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(_e,"href","#accelerate-deepspeed-plugin"),d(B,"class","relative group"),d(ge,"id","deepspeed-config-file"),d(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ge,"href","#deepspeed-config-file"),d(G,"class","relative group"),d(as,"href","https://deepspeed.readthedocs.io/en/latest/optimizers.html"),d(as,"rel","nofollow"),d(ns,"href","https://deepspeed.readthedocs.io/en/latest/schedulers.html"),d(ns,"rel","nofollow"),d(qe,"id","saving-and-loading"),d(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(qe,"href","#saving-and-loading"),d(J,"class","relative group"),d(Ee,"id","zero-inference"),d(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ee,"href","#zero-inference"),d(X,"class","relative group"),d(ze,"id","few-caveats-to-be-aware-of"),d(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ze,"href","#few-caveats-to-be-aware-of"),d(ee,"class","relative group"),d(ke,"id","accelerate.DeepSpeedPlugin"),d(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ke,"href","#accelerate.DeepSpeedPlugin"),d(se,"class","relative group"),d(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(De,"id","main-deepspeed-resources"),d(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(De,"href","#main-deepspeed-resources"),d(pe,"class","relative group"),d(Ss,"href","https://github.com/microsoft/deepspeed"),d(Ss,"rel","nofollow"),d(Ds,"href","https://www.deepspeed.ai/getting-started/"),d(Ds,"rel","nofollow"),d(Os,"href","https://deepspeed.readthedocs.io/en/latest/index.html"),d(Os,"rel","nofollow"),d(Ps,"href","https://www.microsoft.com/en-us/research/search/?q=deepspeed"),d(Ps,"rel","nofollow"),d(xs,"href","https://arxiv.org/abs/1910.02054"),d(xs,"rel","nofollow"),d(Cs,"href","https://arxiv.org/abs/2101.06840"),d(Cs,"rel","nofollow"),d(Is,"href","https://arxiv.org/abs/2104.07857"),d(Is,"rel","nofollow"),d(As,"href","https://github.com/microsoft/DeepSpeed/issues"),d(As,"rel","nofollow")},m(e,r){s(document.head,Z),i(e,Wa,r),i(e,F,r),s(F,re),s(re,pt),f(xe,pt,null),s(F,Ao),s(F,rt),s(rt,To),i(e,Ua,r),i(e,ie,r),s(ie,Ro),s(ie,Ce),s(Ce,Lo),s(ie,No),i(e,Ba,r),i(e,ce,r),s(ce,Zo),s(ce,Ie),s(Ie,Fo),s(ce,Mo),i(e,Ga,r),i(e,ue,r),s(ue,M),s(M,Ho),s(M,it),s(it,Wo),s(M,Uo),s(M,ct),s(ct,Bo),s(M,Go),s(ue,Vo),s(ue,Ae),s(Ae,Yo),s(Ae,ut),s(ut,Jo),s(Ae,Ko),i(e,Va,r),i(e,H,r),s(H,de),s(de,dt),f(Te,dt,null),s(H,Qo),s(H,ht),s(ht,Xo),i(e,Ya,r),i(e,Rs,r),s(Rs,el),i(e,Ja,r),i(e,Ls,r),s(Ls,_t),s(_t,sl),i(e,Ka,r),i(e,Ns,r),s(Ns,tl),i(e,Qa,r),i(e,Zs,r),s(Zs,Re),s(Re,al),s(Re,Fs),s(Fs,nl),s(Re,ol),i(e,Xa,r),i(e,W,r),s(W,he),s(he,ft),f(Le,ft,null),s(W,ll),s(W,mt),s(mt,pl),i(e,en,r),i(e,U,r),s(U,gt),s(gt,rl),s(U,il),s(U,Ne),s(Ne,cl),s(U,ul),i(e,sn,r),i(e,C,r),s(C,dl),s(C,wt),s(wt,hl),s(C,_l),s(C,vt),s(vt,fl),s(C,ml),i(e,tn,r),i(e,B,r),s(B,_e),s(_e,jt),f(Ze,jt,null),s(B,gl),s(B,bt),s(bt,wl),i(e,an,r),f(Fe,e,r),i(e,nn,r),i(e,Ms,r),s(Ms,vl),i(e,on,r),f(Me,e,r),i(e,ln,r),i(e,fe,r),s(fe,jl),s(fe,yt),s(yt,bl),s(fe,yl),i(e,pn,r),i(e,Hs,r),s(Hs,qt),s(qt,ql),i(e,rn,r),f(He,e,r),i(e,cn,r),f(We,e,r),i(e,un,r),i(e,Ws,r),s(Ws,$t),s($t,$l),i(e,dn,r),f(Ue,e,r),i(e,hn,r),f(Be,e,r),i(e,_n,r),i(e,me,r),s(me,El),s(me,Et),s(Et,zl),s(me,kl),i(e,fn,r),f(Ge,e,r),i(e,mn,r),i(e,G,r),s(G,ge),s(ge,zt),f(Ve,zt,null),s(G,Sl),s(G,kt),s(kt,Dl),i(e,gn,r),f(Ye,e,r),i(e,wn,r),i(e,Us,r),s(Us,Ol),i(e,vn,r),f(Je,e,r),i(e,jn,r),i(e,we,r),s(we,Pl),s(we,St),s(St,xl),s(we,Cl),i(e,bn,r),i(e,Bs,r),s(Bs,Dt),s(Dt,Il),i(e,yn,r),f(Ke,e,r),i(e,qn,r),i(e,ve,r),s(ve,Al),s(ve,Ot),s(Ot,Tl),s(ve,Rl),i(e,$n,r),f(Qe,e,r),i(e,En,r),f(Xe,e,r),i(e,zn,r),i(e,Gs,r),s(Gs,Pt),s(Pt,Ll),i(e,kn,r),f(es,e,r),i(e,Sn,r),i(e,je,r),s(je,Nl),s(je,xt),s(xt,Zl),s(je,Fl),i(e,Dn,r),f(ss,e,r),i(e,On,r),f(ts,e,r),i(e,Pn,r),i(e,Vs,r),s(Vs,Ct),s(Ct,Ml),i(e,xn,r),i(e,be,r),s(be,y),s(y,V),s(V,Hl),s(V,as),s(as,Wl),s(V,Ul),s(V,ns),s(ns,Bl),s(V,Gl),s(y,Vl),s(y,q),s(q,Yl),s(q,It),s(It,Jl),s(q,Kl),s(q,At),s(At,Ql),s(q,Xl),s(q,Tt),s(Tt,ep),s(q,sp),s(q,Rt),s(Rt,tp),s(q,ap),s(q,Lt),s(Lt,np),s(q,op),s(y,lp),f(os,y,null),s(y,pp),s(y,z),s(z,rp),s(z,Nt),s(Nt,ip),s(z,cp),s(z,Zt),s(Zt,up),s(z,dp),s(z,Ft),s(Ft,hp),s(z,_p),s(z,Mt),s(Mt,fp),s(z,mp),s(y,gp),s(y,Y),s(Y,wp),s(Y,Ht),s(Ht,vp),s(Y,jp),s(Y,Wt),s(Wt,bp),s(Y,yp),s(y,qp),s(y,ls),s(ls,$p),s(ls,Ut),s(Ut,Ep),s(ls,zp),s(be,kp),s(be,Bt),s(Bt,P),s(P,Sp),s(P,Gt),s(Gt,Dp),s(P,Op),s(P,Vt),s(Vt,Pp),s(P,xp),s(P,Yt),s(Yt,Cp),s(P,Ip),i(e,Cn,r),f(ps,e,r),i(e,In,r),i(e,ye,r),s(ye,Ap),s(ye,Jt),s(Jt,Tp),s(ye,Rp),i(e,An,r),i(e,Ys,r),s(Ys,Lp),i(e,Tn,r),i(e,E,r),s(E,Np),s(E,Kt),s(Kt,Zp),s(E,Fp),s(E,Qt),s(Qt,Mp),s(E,Hp),s(E,Xt),s(Xt,Wp),s(E,Up),s(E,ea),s(ea,Bp),s(E,Gp),i(e,Rn,r),i(e,J,r),s(J,qe),s(qe,sa),f(rs,sa,null),s(J,Vp),s(J,ta),s(ta,Yp),i(e,Ln,r),i(e,$e,r),s($e,aa),s(aa,na),s(na,Jp),s($e,Kp),s($e,v),s(v,is),s(is,Qp),s(is,oa),s(oa,Xp),s(is,er),s(v,sr),s(v,$),s($,tr),s($,la),s(la,ar),s($,nr),s($,pa),s(pa,or),s($,lr),s($,ra),s(ra,pr),s($,rr),s($,ia),s(ia,ir),s($,cr),s($,ca),s(ca,ur),s($,dr),s(v,hr),f(cs,v,null),s(v,_r),s(v,K),s(K,fr),s(K,ua),s(ua,mr),s(K,gr),s(K,da),s(da,wr),s(K,vr),s(v,jr),f(us,v,null),s(v,br),s(v,Q),s(Q,yr),s(Q,ha),s(ha,qr),s(Q,$r),s(Q,Er),s(Q,zr),s(v,kr),f(ds,v,null),s(v,Sr),s(v,_a),s(_a,Dr),s(v,Or),f(hs,v,null),s(v,Pr),s(v,fa),s(fa,xr),s(v,Cr),f(_s,v,null),s(v,Ir),s(v,ma),s(ma,Ar),i(e,Nn,r),i(e,X,r),s(X,Ee),s(Ee,ga),f(fs,ga,null),s(X,Tr),s(X,wa),s(wa,Rr),i(e,Zn,r),i(e,ee,r),s(ee,ze),s(ze,va),f(ms,va,null),s(ee,Lr),s(ee,ja),s(ja,Nr),i(e,Fn,r),i(e,I,r),s(I,ba),s(ba,Zr),s(I,Fr),s(I,gs),s(gs,Mr),s(gs,ya),s(ya,Hr),s(gs,Wr),s(I,Ur),s(I,ws),s(ws,Br),s(ws,qa),s(qa,Gr),s(ws,Vr),i(e,Mn,r),i(e,se,r),s(se,ke),s(ke,$a),f(vs,$a,null),s(se,Yr),s(se,Ea),s(Ea,Jr),i(e,Hn,r),i(e,x,r),f(js,x,null),s(x,Kr),s(x,za),s(za,Qr),s(x,Xr),s(x,Se),f(bs,Se,null),s(Se,ei),s(Se,ka),s(ka,si),i(e,Wn,r),i(e,te,r),f(ys,te,null),s(te,ti),s(te,Sa),s(Sa,ai),i(e,Un,r),i(e,ae,r),f(qs,ae,null),s(ae,ni),s(ae,Da),s(Da,oi),i(e,Bn,r),i(e,ne,r),f($s,ne,null),s(ne,li),s(ne,Oa),s(Oa,pi),i(e,Gn,r),i(e,oe,r),f(Es,oe,null),s(oe,ri),s(oe,Pa),s(Pa,ii),i(e,Vn,r),i(e,le,r),f(zs,le,null),s(le,ci),s(le,xa),s(xa,ui),i(e,Yn,r),i(e,pe,r),s(pe,De),s(De,Ca),f(ks,Ca,null),s(pe,di),s(pe,Ia),s(Ia,hi),i(e,Jn,r),i(e,k,r),s(k,Aa),s(Aa,Ss),s(Ss,_i),s(k,fi),s(k,Ta),s(Ta,Ds),s(Ds,mi),s(k,gi),s(k,Ra),s(Ra,Os),s(Os,wi),s(k,vi),s(k,La),s(La,Ps),s(Ps,ji),i(e,Kn,r),i(e,Js,r),s(Js,bi),i(e,Qn,r),i(e,A,r),s(A,Na),s(Na,xs),s(xs,yi),s(A,qi),s(A,Za),s(Za,Cs),s(Cs,$i),s(A,Ei),s(A,Fa),s(Fa,Is),s(Is,zi),i(e,Xn,r),i(e,T,r),s(T,ki),s(T,Ma),s(Ma,Si),s(T,Di),s(T,As),s(As,Oi),s(T,Pi),eo=!0},p:td,i(e){eo||(m(xe.$$.fragment,e),m(Te.$$.fragment,e),m(Le.$$.fragment,e),m(Ze.$$.fragment,e),m(Fe.$$.fragment,e),m(Me.$$.fragment,e),m(He.$$.fragment,e),m(We.$$.fragment,e),m(Ue.$$.fragment,e),m(Be.$$.fragment,e),m(Ge.$$.fragment,e),m(Ve.$$.fragment,e),m(Ye.$$.fragment,e),m(Je.$$.fragment,e),m(Ke.$$.fragment,e),m(Qe.$$.fragment,e),m(Xe.$$.fragment,e),m(es.$$.fragment,e),m(ss.$$.fragment,e),m(ts.$$.fragment,e),m(os.$$.fragment,e),m(ps.$$.fragment,e),m(rs.$$.fragment,e),m(cs.$$.fragment,e),m(us.$$.fragment,e),m(ds.$$.fragment,e),m(hs.$$.fragment,e),m(_s.$$.fragment,e),m(fs.$$.fragment,e),m(ms.$$.fragment,e),m(vs.$$.fragment,e),m(js.$$.fragment,e),m(bs.$$.fragment,e),m(ys.$$.fragment,e),m(qs.$$.fragment,e),m($s.$$.fragment,e),m(Es.$$.fragment,e),m(zs.$$.fragment,e),m(ks.$$.fragment,e),eo=!0)},o(e){g(xe.$$.fragment,e),g(Te.$$.fragment,e),g(Le.$$.fragment,e),g(Ze.$$.fragment,e),g(Fe.$$.fragment,e),g(Me.$$.fragment,e),g(He.$$.fragment,e),g(We.$$.fragment,e),g(Ue.$$.fragment,e),g(Be.$$.fragment,e),g(Ge.$$.fragment,e),g(Ve.$$.fragment,e),g(Ye.$$.fragment,e),g(Je.$$.fragment,e),g(Ke.$$.fragment,e),g(Qe.$$.fragment,e),g(Xe.$$.fragment,e),g(es.$$.fragment,e),g(ss.$$.fragment,e),g(ts.$$.fragment,e),g(os.$$.fragment,e),g(ps.$$.fragment,e),g(rs.$$.fragment,e),g(cs.$$.fragment,e),g(us.$$.fragment,e),g(ds.$$.fragment,e),g(hs.$$.fragment,e),g(_s.$$.fragment,e),g(fs.$$.fragment,e),g(ms.$$.fragment,e),g(vs.$$.fragment,e),g(js.$$.fragment,e),g(bs.$$.fragment,e),g(ys.$$.fragment,e),g(qs.$$.fragment,e),g($s.$$.fragment,e),g(Es.$$.fragment,e),g(zs.$$.fragment,e),g(ks.$$.fragment,e),eo=!1},d(e){t(Z),e&&t(Wa),e&&t(F),w(xe),e&&t(Ua),e&&t(ie),e&&t(Ba),e&&t(ce),e&&t(Ga),e&&t(ue),e&&t(Va),e&&t(H),w(Te),e&&t(Ya),e&&t(Rs),e&&t(Ja),e&&t(Ls),e&&t(Ka),e&&t(Ns),e&&t(Qa),e&&t(Zs),e&&t(Xa),e&&t(W),w(Le),e&&t(en),e&&t(U),e&&t(sn),e&&t(C),e&&t(tn),e&&t(B),w(Ze),e&&t(an),w(Fe,e),e&&t(nn),e&&t(Ms),e&&t(on),w(Me,e),e&&t(ln),e&&t(fe),e&&t(pn),e&&t(Hs),e&&t(rn),w(He,e),e&&t(cn),w(We,e),e&&t(un),e&&t(Ws),e&&t(dn),w(Ue,e),e&&t(hn),w(Be,e),e&&t(_n),e&&t(me),e&&t(fn),w(Ge,e),e&&t(mn),e&&t(G),w(Ve),e&&t(gn),w(Ye,e),e&&t(wn),e&&t(Us),e&&t(vn),w(Je,e),e&&t(jn),e&&t(we),e&&t(bn),e&&t(Bs),e&&t(yn),w(Ke,e),e&&t(qn),e&&t(ve),e&&t($n),w(Qe,e),e&&t(En),w(Xe,e),e&&t(zn),e&&t(Gs),e&&t(kn),w(es,e),e&&t(Sn),e&&t(je),e&&t(Dn),w(ss,e),e&&t(On),w(ts,e),e&&t(Pn),e&&t(Vs),e&&t(xn),e&&t(be),w(os),e&&t(Cn),w(ps,e),e&&t(In),e&&t(ye),e&&t(An),e&&t(Ys),e&&t(Tn),e&&t(E),e&&t(Rn),e&&t(J),w(rs),e&&t(Ln),e&&t($e),w(cs),w(us),w(ds),w(hs),w(_s),e&&t(Nn),e&&t(X),w(fs),e&&t(Zn),e&&t(ee),w(ms),e&&t(Fn),e&&t(I),e&&t(Mn),e&&t(se),w(vs),e&&t(Hn),e&&t(x),w(js),w(bs),e&&t(Wn),e&&t(te),w(ys),e&&t(Un),e&&t(ae),w(qs),e&&t(Bn),e&&t(ne),w($s),e&&t(Gn),e&&t(oe),w(Es),e&&t(Vn),e&&t(le),w(zs),e&&t(Yn),e&&t(pe),w(ks),e&&t(Jn),e&&t(k),e&&t(Kn),e&&t(Js),e&&t(Qn),e&&t(A),e&&t(Xn),e&&t(T)}}}const od={local:"deepspeed",sections:[{local:"what-is-integrated",title:"What is integrated?"},{local:"how-it-works",sections:[{local:"accelerate-deepspeed-plugin",title:"Accelerate DeepSpeed Plugin"},{local:"deepspeed-config-file",title:"DeepSpeed Config File"}],title:"How it works?"},{local:"saving-and-loading",title:"Saving and loading"},{local:"zero-inference",title:"ZeRO Inference"},{local:"few-caveats-to-be-aware-of",title:"Few caveats to be aware of "},{local:"accelerate.DeepSpeedPlugin",title:"Internals"},{local:"main-deepspeed-resources",title:"Main DeepSpeed Resources"}],title:"DeepSpeed "};function ld(xi){return ad(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ud extends Qu{constructor(Z){super();Xu(this,Z,ld,nd,ed,{})}}export{ud as default,od as metadata};
