import{S as ed,i as sd,s as td,e as a,k as c,w as h,t as l,M as ad,c as n,d as t,m as u,a as o,x as _,h as r,b as d,G as s,g as i,y as f,L as nd,q as m,o as g,B as w,v as od}from"../chunks/vendor-hf-doc-builder.js";import{D as Rs}from"../chunks/Docstring-hf-doc-builder.js";import{C as b}from"../chunks/CodeBlock-hf-doc-builder.js";import{I as N}from"../chunks/IconCopyLink-hf-doc-builder.js";function ld(Ii){let Z,Ua,F,pe,pt,xe,Ro,it,Lo,Ba,ie,No,Ce,Zo,Fo,Ga,ce,Mo,Ie,Wo,Ho,Va,ue,M,Uo,ct,Bo,Go,ut,Vo,Yo,Jo,Ae,Ko,dt,Qo,Xo,Ya,W,de,ht,Te,el,_t,sl,Ja,Ls,tl,Ka,Ns,ft,al,Qa,Zs,nl,Xa,Fs,Re,ol,Ms,ll,rl,en,H,he,mt,Le,pl,gt,il,sn,U,wt,cl,ul,Ne,dl,hl,tn,C,_l,vt,fl,ml,jt,gl,wl,an,B,_e,bt,Ze,vl,yt,jl,nn,Fe,on,Ws,bl,ln,Me,rn,fe,yl,qt,ql,$l,pn,Hs,$t,zl,cn,We,un,He,dn,Us,zt,El,hn,Ue,_n,Be,fn,me,kl,Et,Dl,Sl,mn,Ge,gn,G,ge,kt,Ve,Ol,Dt,Pl,wn,Ye,vn,Bs,xl,jn,Je,bn,we,Cl,St,Il,Al,yn,Gs,Ot,Tl,qn,Ke,$n,ve,Rl,Pt,Ll,Nl,zn,Qe,En,Xe,kn,Vs,xt,Zl,Dn,es,Sn,je,Fl,Ct,Ml,Wl,On,ss,Pn,ts,xn,Ys,It,Hl,Cn,be,y,V,Ul,as,Bl,Gl,ns,Vl,Yl,Jl,q,Kl,At,Ql,Xl,Tt,er,sr,Rt,tr,ar,Lt,nr,or,Nt,lr,rr,pr,os,ir,E,cr,Zt,ur,dr,Ft,hr,_r,Mt,fr,mr,Wt,gr,wr,vr,Y,jr,Ht,br,yr,Ut,qr,$r,zr,ls,Er,Bt,kr,Dr,Sr,Gt,P,Or,Vt,Pr,xr,Yt,Cr,Ir,Jt,Ar,Tr,In,rs,An,ye,Rr,Kt,Lr,Nr,Tn,Js,Zr,Rn,z,Fr,Qt,Mr,Wr,Xt,Hr,Ur,ea,Br,Gr,sa,Vr,Yr,Ln,J,qe,ta,ps,Jr,aa,Kr,Nn,$e,na,oa,Qr,Xr,v,is,ep,la,sp,tp,ap,$,np,ra,op,lp,pa,rp,pp,ia,ip,cp,ca,up,dp,ua,hp,_p,fp,cs,mp,K,gp,da,wp,vp,ha,jp,bp,yp,us,qp,Q,$p,_a,zp,Ep,kp,Dp,Sp,ds,Op,fa,Pp,xp,hs,Cp,ma,Ip,Ap,_s,Tp,ga,Rp,Zn,X,ze,wa,fs,Lp,va,Np,Fn,ms,Mn,ee,Ee,ja,gs,Zp,ba,Fp,Wn,I,ya,Mp,Wp,ws,Hp,qa,Up,Bp,Gp,vs,Vp,$a,Yp,Jp,Hn,se,ke,za,js,Kp,Ea,Qp,Un,x,bs,Xp,ka,ei,si,De,ys,ti,Da,ai,Bn,te,qs,ni,Sa,oi,Gn,ae,$s,li,Oa,ri,Vn,ne,zs,pi,Pa,ii,Yn,oe,Es,ci,xa,ui,Jn,le,ks,di,Ca,hi,Kn,re,Se,Ia,Ds,_i,Aa,fi,Qn,k,Ta,Ss,mi,gi,Ra,Os,wi,vi,La,Ps,ji,bi,Na,xs,yi,Xn,Ks,qi,eo,A,Za,Cs,$i,zi,Fa,Is,Ei,ki,Ma,As,Di,so,T,Si,Wa,Oi,Pi,Ts,xi,Ci,to;return xe=new N({}),Te=new N({}),Le=new N({}),Ze=new N({}),Fe=new b({props:{code:"accelerate config",highlighted:"accelerate config"}}),Me=new b({props:{code:"accelerate launch my_script.py --args_to_my_script",highlighted:"accelerate launch my_script.py --args_to_my_script"}}),We=new b({props:{code:`compute_environment: LOCAL_MACHINE
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
use_cpu: <span class="hljs-literal">false</span>`}}),He=new b({props:{code:`accelerate launch examples/by_feature/deepspeed_with_config_support.py \\
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

# Creates Dummy Optimizer if \`optimizer\` was specified in the config file else creates Adam Optimizer
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

<span class="hljs-comment"># Creates Dummy Optimizer if \`optimizer\` was specified in the config file else creates Adam Optimizer</span>
<span class="hljs-keyword">if</span> <span class="hljs-string">&quot;scheduler&quot;</span> <span class="hljs-keyword">not</span> <span class="hljs-keyword">in</span> accelerator.state.deepspeed_plugin.deepspeed_config:
    lr_scheduler = get_scheduler(
        name=args.lr_scheduler_type,
        optimizer=optimizer,
        num_warmup_steps=args.num_warmup_steps,
        num_training_steps=args.max_train_steps,
    )
<span class="hljs-keyword">else</span>:
    lr_scheduler = DummyScheduler()`}}),rs=new b({props:{code:`# Processing all the fields with \`auto\` values in the DeepSpeed Config file
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
    )`}}),ps=new N({}),cs=new b({props:{code:`unwrapped_model = accelerator.unwrap_model(model)

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

state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir)`}}),fs=new N({}),ms=new b({props:{code:"model, eval_dataloader = accelerator.prepare(model, eval_dataloader)",highlighted:"model, eval_dataloader = accelerator.prepare(model, eval_dataloader)"}}),gs=new N({}),js=new N({}),bs=new Rs({props:{name:"class accelerate.DeepSpeedPlugin",anchor:"accelerate.DeepSpeedPlugin",parameters:[{name:"config_file",val:": str = None"},{name:"gradient_accumulation_steps",val:": int = None"},{name:"gradient_clipping",val:": float = None"},{name:"zero_stage",val:": int = None"},{name:"is_train_batch_min",val:": str = True"},{name:"offload_optimizer_device",val:": bool = None"},{name:"offload_param_device",val:": bool = None"},{name:"zero3_init_flag",val:": bool = None"},{name:"zero3_save_16bit_model",val:": bool = None"}],source:"https://github.com/huggingface/accelerate/blob/vr_405/src/accelerate/utils/dataclasses.py#L213"}}),ys=new Rs({props:{name:"deepspeed_config_process",anchor:"accelerate.DeepSpeedPlugin.deepspeed_config_process",parameters:[{name:"prefix",val:" = ''"},{name:"mismatches",val:" = None"},{name:"config",val:" = None"},{name:"must_match",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/accelerate/blob/vr_405/src/accelerate/utils/dataclasses.py#L344"}}),qs=new Rs({props:{name:"class accelerate.utils.DummyOptim",anchor:"accelerate.utils.DummyOptim",parameters:[{name:"params",val:""},{name:"lr",val:" = 0.001"},{name:"weight_decay",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"accelerate.utils.DummyOptim.lr",description:`<strong>lr</strong> (float) &#x2014;
Learning rate.`,name:"lr"},{anchor:"accelerate.utils.DummyOptim.params",description:`<strong>params</strong> (iterable) &#x2014; iterable of parameters to optimize or dicts defining
parameter groups`,name:"params"},{anchor:"accelerate.utils.DummyOptim.weight_decay",description:`<strong>weight_decay</strong> (float) &#x2014;
Weight decay.
**kwargs &#x2014;
Other arguments.`,name:"weight_decay"}],source:"https://github.com/huggingface/accelerate/blob/vr_405/src/accelerate/utils/deepspeed.py#L86"}}),$s=new Rs({props:{name:"class accelerate.utils.DummyScheduler",anchor:"accelerate.utils.DummyScheduler",parameters:[{name:"optimizer",val:""},{name:"total_num_steps",val:" = None"},{name:"warmup_num_steps",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"accelerate.utils.DummyScheduler.optimizer",description:`<strong>optimizer</strong> (<code>torch.optim.optimizer.Optimizer</code>) &#x2014;
The optimizer to wrap.`,name:"optimizer"},{anchor:"accelerate.utils.DummyScheduler.total_num_steps",description:`<strong>total_num_steps</strong> (int) &#x2014;
Total number of steps.`,name:"total_num_steps"},{anchor:"accelerate.utils.DummyScheduler.warmup_num_steps",description:`<strong>warmup_num_steps</strong> (int) &#x2014;
Number of steps for warmup.
**kwargs &#x2014;
Other arguments.`,name:"warmup_num_steps"}],source:"https://github.com/huggingface/accelerate/blob/vr_405/src/accelerate/utils/deepspeed.py#L109"}}),zs=new Rs({props:{name:"class accelerate.utils.DeepSpeedEngineWrapper",anchor:"accelerate.utils.DeepSpeedEngineWrapper",parameters:[{name:"engine",val:""}],parametersDescription:[{anchor:"accelerate.utils.DeepSpeedEngineWrapper.engine",description:"<strong>engine</strong> (deepspeed.runtime.engine.DeepSpeedEngine) &#x2014; deepspeed engine to wrap",name:"engine"}],source:"https://github.com/huggingface/accelerate/blob/vr_405/src/accelerate/utils/deepspeed.py#L20"}}),Es=new Rs({props:{name:"class accelerate.utils.DeepSpeedOptimizerWrapper",anchor:"accelerate.utils.DeepSpeedOptimizerWrapper",parameters:[{name:"optimizer",val:""}],parametersDescription:[{anchor:"accelerate.utils.DeepSpeedOptimizerWrapper.optimizer",description:`<strong>optimizer</strong> (<code>torch.optim.optimizer.Optimizer</code>) &#x2014;
The optimizer to wrap.`,name:"optimizer"}],source:"https://github.com/huggingface/accelerate/blob/vr_405/src/accelerate/utils/deepspeed.py#L45"}}),ks=new Rs({props:{name:"class accelerate.utils.DeepSpeedSchedulerWrapper",anchor:"accelerate.utils.DeepSpeedSchedulerWrapper",parameters:[{name:"scheduler",val:""},{name:"optimizers",val:""}],parametersDescription:[{anchor:"accelerate.utils.DeepSpeedSchedulerWrapper.scheduler",description:`<strong>scheduler</strong> (<code>torch.optim.lr_scheduler.LambdaLR</code>) &#x2014;
The scheduler to wrap.`,name:"scheduler"},{anchor:"accelerate.utils.DeepSpeedSchedulerWrapper.optimizers",description:"<strong>optimizers</strong> (one or a list of <code>torch.optim.Optimizer</code>) &#x2014;",name:"optimizers"}],source:"https://github.com/huggingface/accelerate/blob/vr_405/src/accelerate/utils/deepspeed.py#L69"}}),Ds=new N({}),{c(){Z=a("meta"),Ua=c(),F=a("h1"),pe=a("a"),pt=a("span"),h(xe.$$.fragment),Ro=c(),it=a("span"),Lo=l("DeepSpeed"),Ba=c(),ie=a("p"),No=l(`Training advanced deep learning models is challenging.
Beyond model design, model scientists also need to set up the state-of-the-art training techniques such as
distributed training, mixed precision, gradient accumulation, and checkpointing.
Yet still, scientists may not achieve the desired system performance and convergence rate.
Large model sizes are even more challenging: a large model easily runs out of memory with pure data parallelism and it is difficult to use model parallelism.
`),Ce=a("a"),Zo=l("DeepSpeed"),Fo=l(" addresses these challenges to accelerate model development and training."),Ga=c(),ce=a("p"),Mo=l("\u{1F917} Accelerate integrates "),Ie=a("a"),Wo=l("DeepSpeed"),Ho=l(" via 2 options:"),Va=c(),ue=a("ol"),M=a("li"),Uo=l("Integration of the DeepSpeed features via "),ct=a("code"),Bo=l("deepspeed config file"),Go=l(" specification in "),ut=a("code"),Vo=l("accelerate config"),Yo=l(` . You just supply your custom config file or use our template. Most of
this document is focused on this feature. This supports all the core features of DeepSpeed and gives user a lot of flexibility.
User may have to change few lines of code depending on the config.`),Jo=c(),Ae=a("li"),Ko=l("Integration via "),dt=a("code"),Qo=l("deepspeed_plugin"),Xo=l(`.This supports subset of the DeepSpeed features and uses default options for the rest of the configurations.
User need not change any code and is good for those who are fine with most of the default settings of DeepSpeed.`),Ya=c(),W=a("h2"),de=a("a"),ht=a("span"),h(Te.$$.fragment),el=c(),_t=a("span"),sl=l("What is integrated?"),Ja=c(),Ls=a("p"),tl=l("Training:"),Ka=c(),Ns=a("ol"),ft=a("li"),al=l("DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 with ZeRO-Infinity (CPU and NVME offload)."),Qa=c(),Zs=a("p"),nl=l("Inference:"),Xa=c(),Fs=a("ol"),Re=a("li"),ol=l(`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),Ms=a("a"),ll=l("deepspeed-zero-inference"),rl=l("."),en=c(),H=a("h2"),he=a("a"),mt=a("span"),h(Le.$$.fragment),pl=c(),gt=a("span"),il=l("How it works?"),sn=c(),U=a("p"),wt=a("strong"),cl=l("Pre-Requisites"),ul=l(": Install DeepSpeed version >=0.6.5. Please refer to the "),Ne=a("a"),dl=l("DeepSpeed Insallation details"),hl=l(`
for more information.`),tn=c(),C=a("p"),_l=l("We will first look at easy to use integration via "),vt=a("code"),fl=l("accelerate config"),ml=l(`.
Followed by more flexible and feature rich `),jt=a("code"),gl=l("deepspeed config file"),wl=l(" integration."),an=c(),B=a("h3"),_e=a("a"),bt=a("span"),h(Ze.$$.fragment),vl=c(),yt=a("span"),jl=l("Accelerate DeepSpeed Plugin"),nn=l(`

On your machine(s) just run:

	`),h(Fe.$$.fragment),on=c(),Ws=a("p"),bl=l(`and answer the questions asked. It will ask whether you want to use a config file for DeepSpeed to which you should answer no. Then answer the following questions to generate a basic DeepSpeed config.
This will generate a config file that will be used automatically to properly set the
default options when doing`),ln=c(),h(Me.$$.fragment),rn=c(),fe=a("p"),yl=l("For instance, here is how you would run the NLP example "),qt=a("code"),ql=l("examples/by_feature/deepspeed_with_config_support.py"),$l=l(" (from the root of the repo) with DeepSpeed Plugin:"),pn=c(),Hs=a("p"),$t=a("strong"),zl=l("ZeRO Stage-2 DeepSpeed Plugin Example"),cn=c(),h(We.$$.fragment),un=c(),h(He.$$.fragment),dn=c(),Us=a("p"),zt=a("strong"),El=l("ZeRO Stage-3 with CPU Offload DeepSpeed Plugin Example"),hn=c(),h(Ue.$$.fragment),_n=c(),h(Be.$$.fragment),fn=c(),me=a("p"),kl=l("Currently, "),Et=a("code"),Dl=l("Accelerate"),Sl=l(" supports following config through the CLI:"),mn=c(),h(Ge.$$.fragment),gn=c(),G=a("h3"),ge=a("a"),kt=a("span"),h(Ve.$$.fragment),Ol=c(),Dt=a("span"),Pl=l("DeepSpeed Config File"),wn=l(`

On your machine(s) just run:

	`),h(Ye.$$.fragment),vn=c(),Bs=a("p"),xl=l(`and answer the questions asked. It will ask whether you want to use a config file for deepspeed to which you answer yes
and provide the path to the deepspeed config file.
This will generate a config file that will be used automatically to properly set the
default options when doing`),jn=c(),h(Je.$$.fragment),bn=c(),we=a("p"),Cl=l("For instance, here is how you would run the NLP example "),St=a("code"),Il=l("examples/by_feature/deepspeed_with_config_support.py"),Al=l(" (from the root of the repo) with DeepSpeed Config File:"),yn=c(),Gs=a("p"),Ot=a("strong"),Tl=l("ZeRO Stage-2 DeepSpeed Config File Example"),qn=c(),h(Ke.$$.fragment),$n=c(),ve=a("p"),Rl=l("with the contents of "),Pt=a("code"),Ll=l("zero_stage2_config.json"),Nl=l(" being:"),zn=c(),h(Qe.$$.fragment),En=c(),h(Xe.$$.fragment),kn=c(),Vs=a("p"),xt=a("strong"),Zl=l("ZeRO Stage-3 with CPU offload DeepSpeed Config File Example"),Dn=c(),h(es.$$.fragment),Sn=c(),je=a("p"),Fl=l("with the contents of "),Ct=a("code"),Ml=l("zero_stage3_offload_config.json"),Wl=l(" being:"),On=c(),h(ss.$$.fragment),Pn=c(),h(ts.$$.fragment),xn=c(),Ys=a("p"),It=a("strong"),Hl=l("Important code changes when using DeepSpeed Config File"),Cn=c(),be=a("ol"),y=a("li"),V=a("p"),Ul=l(`DeepSpeed Optimizers and Schedulers. For more information on these,
see the `),as=a("a"),Bl=l("DeepSpeed Optimizers"),Gl=l(" and "),ns=a("a"),Vl=l("DeepSpeed Schedulers"),Yl=l(` documentation.
We will look at the changes needed in the code when using these.`),Jl=c(),q=a("p"),Kl=l("a. DS Optim + DS Scheduler: The case when both "),At=a("code"),Ql=l("optimizer"),Xl=l(" and "),Tt=a("code"),er=l("scheduler"),sr=l(` keys present in the DeepSpeed config file.
In this situation, those will be used and user has to use `),Rt=a("code"),tr=l("accelerate.utils.DummyOptim"),ar=l(" and "),Lt=a("code"),nr=l("accelerate.utils.DummyScheduler"),or=l(` to replace the PyTorch/Custom optimizers and schedulers in their code.
Below is the snippet from `),Nt=a("code"),lr=l("examples/by_feature/deepspeed_with_config_support.py"),rr=l(" showing this:"),pr=c(),h(os.$$.fragment),ir=c(),E=a("p"),cr=l("b. Custom Optim + Custom Scheduler: The case when both "),Zt=a("code"),ur=l("optimizer"),dr=l(" and "),Ft=a("code"),hr=l("scheduler"),_r=l(` keys are absent in the DeepSpeed config file.
In this situation, no code changes are needed from the user and this is the case when using integration via DeepSpeed Plugin.
In the above example we can see that the code reamins unchanged if the `),Mt=a("code"),fr=l("optimizer"),mr=l(" and "),Wt=a("code"),gr=l("scheduler"),wr=l(" keys are absent in the DeepSpeed config file."),vr=c(),Y=a("p"),jr=l("c. Custom Optim + DS Scheduler: The case when only "),Ht=a("code"),br=l("scheduler"),yr=l(` key is present in the DeepSpeed config file.
In this situation, user has to use `),Ut=a("code"),qr=l("accelerate.utils.DummyScheduler"),$r=l(" to replace the PyTorch/Custom scheduler in their code."),zr=c(),ls=a("p"),Er=l("d. DS Optim + Custom Scheduler: The case when only "),Bt=a("code"),kr=l("optimizer"),Dr=l(` key is present in the DeepSpeed config file.
This will result in an error because one can only use DS Scheduler when using DS Optim.`),Sr=c(),Gt=a("li"),P=a("p"),Or=l("Notice the "),Vt=a("code"),Pr=l("auto"),xr=l(` values in the above example DeepSpeed config files.
These have to specified by the user in the code by running `),Yt=a("code"),Cr=l("accelerator.state.deepspeed_plugin.deepspeed_config_process(**kwargs)"),Ir=l(`.
This allows user more flexibilty to fill these fields based on the code instead of hardcoding them.
Below is the snippet from `),Jt=a("code"),Ar=l("examples/by_feature/deepspeed_with_config_support.py"),Tr=l(" showing how to fill these:"),In=c(),h(rs.$$.fragment),An=c(),ye=a("p"),Rr=l("a. Note that this needs to be done before call to "),Kt=a("code"),Lr=l("accelerator.prepare"),Nr=l("."),Tn=c(),Js=a("p"),Zr=l("b. If there are mismatches between the values given in the DeepSpeed config file and the values given in the code, an error will be thrown."),Rn=c(),z=a("p"),Fr=l("c. If there are fields with "),Qt=a("code"),Mr=l("auto"),Wr=l(" value whose value isn\u2019t provided to "),Xt=a("code"),Hr=l("accelerator.state.deepspeed_plugin.deepspeed_config_process"),Ur=l(`, an error will be thrown.
So, make sure to fill all the `),ea=a("code"),Br=l("auto"),Gr=l(" fields in the DeepSpeed config file before calling "),sa=a("code"),Vr=l("accelerator.prepare"),Yr=l("."),Ln=c(),J=a("h2"),qe=a("a"),ta=a("span"),h(ps.$$.fragment),Jr=c(),aa=a("span"),Kr=l("Saving and loading"),Nn=c(),$e=a("ol"),na=a("li"),oa=a("p"),Qr=l("Saving and loading of models is unchanged for ZeRO Stage-1 and Stage-2."),Xr=c(),v=a("li"),is=a("p"),ep=l("under ZeRO Stage-3, "),la=a("code"),sp=l("state_dict"),tp=l(` contains just the placeholders since the model weights are partitioned across multiple GPUs.
ZeRO Stage-3 has 2 options:`),ap=c(),$=a("p"),np=l("a. Saving the entire 16bit model weights to directly load later on using "),ra=a("code"),op=l("model.load_state_dict(torch.load(pytorch_model.bin))"),lp=l(`.
For this, either set `),pa=a("code"),rp=l("zero_optimization.stage3_gather_16bit_weights_on_model_save"),pp=l(` to True in DeepSpeed Config file or set
`),ia=a("code"),ip=l("zero3_save_16bit_model"),cp=l(` to True in DeepSpeed Plugin.
`),ca=a("strong"),up=l("Note that this option requires consolidation of the weights on one GPU it can be slow and memory demanding, so only use this feature when needed."),dp=l(`
Below is the snippet from `),ua=a("code"),hp=l("examples/by_feature/deepspeed_with_config_support.py"),_p=l(" showing this:"),fp=c(),h(cs.$$.fragment),mp=c(),K=a("p"),gp=l("b. To get 32bit weights, first save the model using "),da=a("code"),wp=l("model.save_checkpoint()"),vp=l(`.
Below is the snippet from `),ha=a("code"),jp=l("examples/by_feature/deepspeed_with_config_support.py"),bp=l(" showing this:"),yp=c(),h(us.$$.fragment),qp=c(),Q=a("p"),$p=l("This will create ZeRO model and optimizer partitions along with "),_a=a("code"),zp=l("zero_to_fp32.py"),Ep=l(` script in checkpoint directory.
One can use this script to do offline consolidation.`),kp=a("br"),Dp=l(`
It requires no configuration files or GPUs. Here is an example of its usage:`),Sp=c(),h(ds.$$.fragment),Op=c(),fa=a("p"),Pp=l("To get 32bit model for saving/inference, one can do the following:"),xp=c(),h(hs.$$.fragment),Cp=c(),ma=a("p"),Ip=l("If only interested in state_dict, one can do the following:"),Ap=c(),h(_s.$$.fragment),Tp=c(),ga=a("p"),Rp=l("Note that all these functions require ~2x memory (general RAM) of the size of the final checkpoint."),Zn=c(),X=a("h2"),ze=a("a"),wa=a("span"),h(fs.$$.fragment),Lp=c(),va=a("span"),Np=l("ZeRO Inference"),Fn=l(`

DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. 
It uses the same ZeRO protocol as training, but it doesn't use an optimizer and a lr scheduler and only stage 3 is relevant.
With accelerate integration, one has to just prepare model and dataloader as shown below:

	`),h(ms.$$.fragment),Mn=c(),ee=a("h2"),Ee=a("a"),ja=a("span"),h(gs.$$.fragment),Zp=c(),ba=a("span"),Fp=l("Few caveats to be aware of"),Wn=c(),I=a("ol"),ya=a("li"),Mp=l("Current integration doesn\u2019t support Pipeline Parallelism of DeepSpeed."),Wp=c(),ws=a("li"),Hp=l("Current integration doesn\u2019t support "),qa=a("code"),Up=l("mpu"),Bp=l(", limiting the tensor parallelism which is supported in Megatron-LM."),Gp=c(),vs=a("li"),Vp=l("Current integration doesn\u2019t support multiple models for a given "),$a=a("code"),Yp=l("accelerator"),Jp=l(" object."),Hn=c(),se=a("h2"),ke=a("a"),za=a("span"),h(js.$$.fragment),Kp=c(),Ea=a("span"),Qp=l("Internals"),Un=c(),x=a("div"),h(bs.$$.fragment),Xp=c(),ka=a("p"),ei=l("This plugin is used to integrate DeepSpeed."),si=c(),De=a("div"),h(ys.$$.fragment),ti=c(),Da=a("p"),ai=l("Process the DeepSpeed config with the values from the kwargs."),Bn=c(),te=a("div"),h(qs.$$.fragment),ni=c(),Sa=a("p"),oi=l(`Dummy optimizer presents model parameters or param groups, this is primarily used to follow conventional training
loop when optimizer config is specified in the deepspeed config file.`),Gn=c(),ae=a("div"),h($s.$$.fragment),li=c(),Oa=a("p"),ri=l(`Dummy scheduler presents model parameters or param groups, this is primarily used to follow conventional training
loop when scheduler config is specified in the deepspeed config file.`),Vn=c(),ne=a("div"),h(zs.$$.fragment),pi=c(),Pa=a("p"),ii=l("Internal wrapper for deepspeed.runtime.engine.DeepSpeedEngine. This is used to follow conventional training loop."),Yn=c(),oe=a("div"),h(Es.$$.fragment),ci=c(),xa=a("p"),ui=l("Internal wrapper around a deepspeed optimizer."),Jn=c(),le=a("div"),h(ks.$$.fragment),di=c(),Ca=a("p"),hi=l("Internal wrapper around a deepspeed scheduler."),Kn=c(),re=a("h2"),Se=a("a"),Ia=a("span"),h(Ds.$$.fragment),_i=c(),Aa=a("span"),fi=l("Main DeepSpeed Resources"),Qn=c(),k=a("ul"),Ta=a("li"),Ss=a("a"),mi=l("Project\u2019s github"),gi=c(),Ra=a("li"),Os=a("a"),wi=l("Usage docs"),vi=c(),La=a("li"),Ps=a("a"),ji=l("API docs"),bi=c(),Na=a("li"),xs=a("a"),yi=l("Blog posts"),Xn=c(),Ks=a("p"),qi=l("Papers:"),eo=c(),A=a("ul"),Za=a("li"),Cs=a("a"),$i=l("ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),zi=c(),Fa=a("li"),Is=a("a"),Ei=l("ZeRO-Offload: Democratizing Billion-Scale Model Training"),ki=c(),Ma=a("li"),As=a("a"),Di=l("ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),so=c(),T=a("p"),Si=l("Finally, please, remember that, \u{1F917} "),Wa=a("code"),Oi=l("Accelerate"),Pi=l(` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),Ts=a("a"),xi=l("DeepSpeed GitHub"),Ci=l("."),this.h()},l(e){const p=ad('[data-svelte="svelte-1phssyn"]',document.head);Z=n(p,"META",{name:!0,content:!0}),p.forEach(t),Ua=u(e),F=n(e,"H1",{class:!0});var ao=o(F);pe=n(ao,"A",{id:!0,class:!0,href:!0});var Ai=o(pe);pt=n(Ai,"SPAN",{});var Ti=o(pt);_(xe.$$.fragment,Ti),Ti.forEach(t),Ai.forEach(t),Ro=u(ao),it=n(ao,"SPAN",{});var Ri=o(it);Lo=r(Ri,"DeepSpeed"),Ri.forEach(t),ao.forEach(t),Ba=u(e),ie=n(e,"P",{});var no=o(ie);No=r(no,`Training advanced deep learning models is challenging.
Beyond model design, model scientists also need to set up the state-of-the-art training techniques such as
distributed training, mixed precision, gradient accumulation, and checkpointing.
Yet still, scientists may not achieve the desired system performance and convergence rate.
Large model sizes are even more challenging: a large model easily runs out of memory with pure data parallelism and it is difficult to use model parallelism.
`),Ce=n(no,"A",{href:!0,rel:!0});var Li=o(Ce);Zo=r(Li,"DeepSpeed"),Li.forEach(t),Fo=r(no," addresses these challenges to accelerate model development and training."),no.forEach(t),Ga=u(e),ce=n(e,"P",{});var oo=o(ce);Mo=r(oo,"\u{1F917} Accelerate integrates "),Ie=n(oo,"A",{href:!0,rel:!0});var Ni=o(Ie);Wo=r(Ni,"DeepSpeed"),Ni.forEach(t),Ho=r(oo," via 2 options:"),oo.forEach(t),Va=u(e),ue=n(e,"OL",{});var lo=o(ue);M=n(lo,"LI",{});var Qs=o(M);Uo=r(Qs,"Integration of the DeepSpeed features via "),ct=n(Qs,"CODE",{});var Zi=o(ct);Bo=r(Zi,"deepspeed config file"),Zi.forEach(t),Go=r(Qs," specification in "),ut=n(Qs,"CODE",{});var Fi=o(ut);Vo=r(Fi,"accelerate config"),Fi.forEach(t),Yo=r(Qs,` . You just supply your custom config file or use our template. Most of
this document is focused on this feature. This supports all the core features of DeepSpeed and gives user a lot of flexibility.
User may have to change few lines of code depending on the config.`),Qs.forEach(t),Jo=u(lo),Ae=n(lo,"LI",{});var ro=o(Ae);Ko=r(ro,"Integration via "),dt=n(ro,"CODE",{});var Mi=o(dt);Qo=r(Mi,"deepspeed_plugin"),Mi.forEach(t),Xo=r(ro,`.This supports subset of the DeepSpeed features and uses default options for the rest of the configurations.
User need not change any code and is good for those who are fine with most of the default settings of DeepSpeed.`),ro.forEach(t),lo.forEach(t),Ya=u(e),W=n(e,"H2",{class:!0});var po=o(W);de=n(po,"A",{id:!0,class:!0,href:!0});var Wi=o(de);ht=n(Wi,"SPAN",{});var Hi=o(ht);_(Te.$$.fragment,Hi),Hi.forEach(t),Wi.forEach(t),el=u(po),_t=n(po,"SPAN",{});var Ui=o(_t);sl=r(Ui,"What is integrated?"),Ui.forEach(t),po.forEach(t),Ja=u(e),Ls=n(e,"P",{});var Bi=o(Ls);tl=r(Bi,"Training:"),Bi.forEach(t),Ka=u(e),Ns=n(e,"OL",{});var Gi=o(Ns);ft=n(Gi,"LI",{});var Vi=o(ft);al=r(Vi,"DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 with ZeRO-Infinity (CPU and NVME offload)."),Vi.forEach(t),Gi.forEach(t),Qa=u(e),Zs=n(e,"P",{});var Yi=o(Zs);nl=r(Yi,"Inference:"),Yi.forEach(t),Xa=u(e),Fs=n(e,"OL",{});var Ji=o(Fs);Re=n(Ji,"LI",{});var io=o(Re);ol=r(io,`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),Ms=n(io,"A",{href:!0});var Ki=o(Ms);ll=r(Ki,"deepspeed-zero-inference"),Ki.forEach(t),rl=r(io,"."),io.forEach(t),Ji.forEach(t),en=u(e),H=n(e,"H2",{class:!0});var co=o(H);he=n(co,"A",{id:!0,class:!0,href:!0});var Qi=o(he);mt=n(Qi,"SPAN",{});var Xi=o(mt);_(Le.$$.fragment,Xi),Xi.forEach(t),Qi.forEach(t),pl=u(co),gt=n(co,"SPAN",{});var ec=o(gt);il=r(ec,"How it works?"),ec.forEach(t),co.forEach(t),sn=u(e),U=n(e,"P",{});var Ha=o(U);wt=n(Ha,"STRONG",{});var sc=o(wt);cl=r(sc,"Pre-Requisites"),sc.forEach(t),ul=r(Ha,": Install DeepSpeed version >=0.6.5. Please refer to the "),Ne=n(Ha,"A",{href:!0,rel:!0});var tc=o(Ne);dl=r(tc,"DeepSpeed Insallation details"),tc.forEach(t),hl=r(Ha,`
for more information.`),Ha.forEach(t),tn=u(e),C=n(e,"P",{});var Xs=o(C);_l=r(Xs,"We will first look at easy to use integration via "),vt=n(Xs,"CODE",{});var ac=o(vt);fl=r(ac,"accelerate config"),ac.forEach(t),ml=r(Xs,`.
Followed by more flexible and feature rich `),jt=n(Xs,"CODE",{});var nc=o(jt);gl=r(nc,"deepspeed config file"),nc.forEach(t),wl=r(Xs," integration."),Xs.forEach(t),an=u(e),B=n(e,"H3",{class:!0});var uo=o(B);_e=n(uo,"A",{id:!0,class:!0,href:!0});var oc=o(_e);bt=n(oc,"SPAN",{});var lc=o(bt);_(Ze.$$.fragment,lc),lc.forEach(t),oc.forEach(t),vl=u(uo),yt=n(uo,"SPAN",{});var rc=o(yt);jl=r(rc,"Accelerate DeepSpeed Plugin"),rc.forEach(t),uo.forEach(t),nn=r(e,`

On your machine(s) just run:

	`),_(Fe.$$.fragment,e),on=u(e),Ws=n(e,"P",{});var pc=o(Ws);bl=r(pc,`and answer the questions asked. It will ask whether you want to use a config file for DeepSpeed to which you should answer no. Then answer the following questions to generate a basic DeepSpeed config.
This will generate a config file that will be used automatically to properly set the
default options when doing`),pc.forEach(t),ln=u(e),_(Me.$$.fragment,e),rn=u(e),fe=n(e,"P",{});var ho=o(fe);yl=r(ho,"For instance, here is how you would run the NLP example "),qt=n(ho,"CODE",{});var ic=o(qt);ql=r(ic,"examples/by_feature/deepspeed_with_config_support.py"),ic.forEach(t),$l=r(ho," (from the root of the repo) with DeepSpeed Plugin:"),ho.forEach(t),pn=u(e),Hs=n(e,"P",{});var cc=o(Hs);$t=n(cc,"STRONG",{});var uc=o($t);zl=r(uc,"ZeRO Stage-2 DeepSpeed Plugin Example"),uc.forEach(t),cc.forEach(t),cn=u(e),_(We.$$.fragment,e),un=u(e),_(He.$$.fragment,e),dn=u(e),Us=n(e,"P",{});var dc=o(Us);zt=n(dc,"STRONG",{});var hc=o(zt);El=r(hc,"ZeRO Stage-3 with CPU Offload DeepSpeed Plugin Example"),hc.forEach(t),dc.forEach(t),hn=u(e),_(Ue.$$.fragment,e),_n=u(e),_(Be.$$.fragment,e),fn=u(e),me=n(e,"P",{});var _o=o(me);kl=r(_o,"Currently, "),Et=n(_o,"CODE",{});var _c=o(Et);Dl=r(_c,"Accelerate"),_c.forEach(t),Sl=r(_o," supports following config through the CLI:"),_o.forEach(t),mn=u(e),_(Ge.$$.fragment,e),gn=u(e),G=n(e,"H3",{class:!0});var fo=o(G);ge=n(fo,"A",{id:!0,class:!0,href:!0});var fc=o(ge);kt=n(fc,"SPAN",{});var mc=o(kt);_(Ve.$$.fragment,mc),mc.forEach(t),fc.forEach(t),Ol=u(fo),Dt=n(fo,"SPAN",{});var gc=o(Dt);Pl=r(gc,"DeepSpeed Config File"),gc.forEach(t),fo.forEach(t),wn=r(e,`

On your machine(s) just run:

	`),_(Ye.$$.fragment,e),vn=u(e),Bs=n(e,"P",{});var wc=o(Bs);xl=r(wc,`and answer the questions asked. It will ask whether you want to use a config file for deepspeed to which you answer yes
and provide the path to the deepspeed config file.
This will generate a config file that will be used automatically to properly set the
default options when doing`),wc.forEach(t),jn=u(e),_(Je.$$.fragment,e),bn=u(e),we=n(e,"P",{});var mo=o(we);Cl=r(mo,"For instance, here is how you would run the NLP example "),St=n(mo,"CODE",{});var vc=o(St);Il=r(vc,"examples/by_feature/deepspeed_with_config_support.py"),vc.forEach(t),Al=r(mo," (from the root of the repo) with DeepSpeed Config File:"),mo.forEach(t),yn=u(e),Gs=n(e,"P",{});var jc=o(Gs);Ot=n(jc,"STRONG",{});var bc=o(Ot);Tl=r(bc,"ZeRO Stage-2 DeepSpeed Config File Example"),bc.forEach(t),jc.forEach(t),qn=u(e),_(Ke.$$.fragment,e),$n=u(e),ve=n(e,"P",{});var go=o(ve);Rl=r(go,"with the contents of "),Pt=n(go,"CODE",{});var yc=o(Pt);Ll=r(yc,"zero_stage2_config.json"),yc.forEach(t),Nl=r(go," being:"),go.forEach(t),zn=u(e),_(Qe.$$.fragment,e),En=u(e),_(Xe.$$.fragment,e),kn=u(e),Vs=n(e,"P",{});var qc=o(Vs);xt=n(qc,"STRONG",{});var $c=o(xt);Zl=r($c,"ZeRO Stage-3 with CPU offload DeepSpeed Config File Example"),$c.forEach(t),qc.forEach(t),Dn=u(e),_(es.$$.fragment,e),Sn=u(e),je=n(e,"P",{});var wo=o(je);Fl=r(wo,"with the contents of "),Ct=n(wo,"CODE",{});var zc=o(Ct);Ml=r(zc,"zero_stage3_offload_config.json"),zc.forEach(t),Wl=r(wo," being:"),wo.forEach(t),On=u(e),_(ss.$$.fragment,e),Pn=u(e),_(ts.$$.fragment,e),xn=u(e),Ys=n(e,"P",{});var Ec=o(Ys);It=n(Ec,"STRONG",{});var kc=o(It);Hl=r(kc,"Important code changes when using DeepSpeed Config File"),kc.forEach(t),Ec.forEach(t),Cn=u(e),be=n(e,"OL",{});var vo=o(be);y=n(vo,"LI",{});var D=o(y);V=n(D,"P",{});var et=o(V);Ul=r(et,`DeepSpeed Optimizers and Schedulers. For more information on these,
see the `),as=n(et,"A",{href:!0,rel:!0});var Dc=o(as);Bl=r(Dc,"DeepSpeed Optimizers"),Dc.forEach(t),Gl=r(et," and "),ns=n(et,"A",{href:!0,rel:!0});var Sc=o(ns);Vl=r(Sc,"DeepSpeed Schedulers"),Sc.forEach(t),Yl=r(et,` documentation.
We will look at the changes needed in the code when using these.`),et.forEach(t),Jl=u(D),q=n(D,"P",{});var S=o(q);Kl=r(S,"a. DS Optim + DS Scheduler: The case when both "),At=n(S,"CODE",{});var Oc=o(At);Ql=r(Oc,"optimizer"),Oc.forEach(t),Xl=r(S," and "),Tt=n(S,"CODE",{});var Pc=o(Tt);er=r(Pc,"scheduler"),Pc.forEach(t),sr=r(S,` keys present in the DeepSpeed config file.
In this situation, those will be used and user has to use `),Rt=n(S,"CODE",{});var xc=o(Rt);tr=r(xc,"accelerate.utils.DummyOptim"),xc.forEach(t),ar=r(S," and "),Lt=n(S,"CODE",{});var Cc=o(Lt);nr=r(Cc,"accelerate.utils.DummyScheduler"),Cc.forEach(t),or=r(S,` to replace the PyTorch/Custom optimizers and schedulers in their code.
Below is the snippet from `),Nt=n(S,"CODE",{});var Ic=o(Nt);lr=r(Ic,"examples/by_feature/deepspeed_with_config_support.py"),Ic.forEach(t),rr=r(S," showing this:"),S.forEach(t),pr=u(D),_(os.$$.fragment,D),ir=u(D),E=n(D,"P",{});var R=o(E);cr=r(R,"b. Custom Optim + Custom Scheduler: The case when both "),Zt=n(R,"CODE",{});var Ac=o(Zt);ur=r(Ac,"optimizer"),Ac.forEach(t),dr=r(R," and "),Ft=n(R,"CODE",{});var Tc=o(Ft);hr=r(Tc,"scheduler"),Tc.forEach(t),_r=r(R,` keys are absent in the DeepSpeed config file.
In this situation, no code changes are needed from the user and this is the case when using integration via DeepSpeed Plugin.
In the above example we can see that the code reamins unchanged if the `),Mt=n(R,"CODE",{});var Rc=o(Mt);fr=r(Rc,"optimizer"),Rc.forEach(t),mr=r(R," and "),Wt=n(R,"CODE",{});var Lc=o(Wt);gr=r(Lc,"scheduler"),Lc.forEach(t),wr=r(R," keys are absent in the DeepSpeed config file."),R.forEach(t),vr=u(D),Y=n(D,"P",{});var st=o(Y);jr=r(st,"c. Custom Optim + DS Scheduler: The case when only "),Ht=n(st,"CODE",{});var Nc=o(Ht);br=r(Nc,"scheduler"),Nc.forEach(t),yr=r(st,` key is present in the DeepSpeed config file.
In this situation, user has to use `),Ut=n(st,"CODE",{});var Zc=o(Ut);qr=r(Zc,"accelerate.utils.DummyScheduler"),Zc.forEach(t),$r=r(st," to replace the PyTorch/Custom scheduler in their code."),st.forEach(t),zr=u(D),ls=n(D,"P",{});var jo=o(ls);Er=r(jo,"d. DS Optim + Custom Scheduler: The case when only "),Bt=n(jo,"CODE",{});var Fc=o(Bt);kr=r(Fc,"optimizer"),Fc.forEach(t),Dr=r(jo,` key is present in the DeepSpeed config file.
This will result in an error because one can only use DS Scheduler when using DS Optim.`),jo.forEach(t),D.forEach(t),Sr=u(vo),Gt=n(vo,"LI",{});var Mc=o(Gt);P=n(Mc,"P",{});var Oe=o(P);Or=r(Oe,"Notice the "),Vt=n(Oe,"CODE",{});var Wc=o(Vt);Pr=r(Wc,"auto"),Wc.forEach(t),xr=r(Oe,` values in the above example DeepSpeed config files.
These have to specified by the user in the code by running `),Yt=n(Oe,"CODE",{});var Hc=o(Yt);Cr=r(Hc,"accelerator.state.deepspeed_plugin.deepspeed_config_process(**kwargs)"),Hc.forEach(t),Ir=r(Oe,`.
This allows user more flexibilty to fill these fields based on the code instead of hardcoding them.
Below is the snippet from `),Jt=n(Oe,"CODE",{});var Uc=o(Jt);Ar=r(Uc,"examples/by_feature/deepspeed_with_config_support.py"),Uc.forEach(t),Tr=r(Oe," showing how to fill these:"),Oe.forEach(t),Mc.forEach(t),vo.forEach(t),In=u(e),_(rs.$$.fragment,e),An=u(e),ye=n(e,"P",{});var bo=o(ye);Rr=r(bo,"a. Note that this needs to be done before call to "),Kt=n(bo,"CODE",{});var Bc=o(Kt);Lr=r(Bc,"accelerator.prepare"),Bc.forEach(t),Nr=r(bo,"."),bo.forEach(t),Tn=u(e),Js=n(e,"P",{});var Gc=o(Js);Zr=r(Gc,"b. If there are mismatches between the values given in the DeepSpeed config file and the values given in the code, an error will be thrown."),Gc.forEach(t),Rn=u(e),z=n(e,"P",{});var L=o(z);Fr=r(L,"c. If there are fields with "),Qt=n(L,"CODE",{});var Vc=o(Qt);Mr=r(Vc,"auto"),Vc.forEach(t),Wr=r(L," value whose value isn\u2019t provided to "),Xt=n(L,"CODE",{});var Yc=o(Xt);Hr=r(Yc,"accelerator.state.deepspeed_plugin.deepspeed_config_process"),Yc.forEach(t),Ur=r(L,`, an error will be thrown.
So, make sure to fill all the `),ea=n(L,"CODE",{});var Jc=o(ea);Br=r(Jc,"auto"),Jc.forEach(t),Gr=r(L," fields in the DeepSpeed config file before calling "),sa=n(L,"CODE",{});var Kc=o(sa);Vr=r(Kc,"accelerator.prepare"),Kc.forEach(t),Yr=r(L,"."),L.forEach(t),Ln=u(e),J=n(e,"H2",{class:!0});var yo=o(J);qe=n(yo,"A",{id:!0,class:!0,href:!0});var Qc=o(qe);ta=n(Qc,"SPAN",{});var Xc=o(ta);_(ps.$$.fragment,Xc),Xc.forEach(t),Qc.forEach(t),Jr=u(yo),aa=n(yo,"SPAN",{});var eu=o(aa);Kr=r(eu,"Saving and loading"),eu.forEach(t),yo.forEach(t),Nn=u(e),$e=n(e,"OL",{});var qo=o($e);na=n(qo,"LI",{});var su=o(na);oa=n(su,"P",{});var tu=o(oa);Qr=r(tu,"Saving and loading of models is unchanged for ZeRO Stage-1 and Stage-2."),tu.forEach(t),su.forEach(t),Xr=u(qo),v=n(qo,"LI",{});var j=o(v);is=n(j,"P",{});var $o=o(is);ep=r($o,"under ZeRO Stage-3, "),la=n($o,"CODE",{});var au=o(la);sp=r(au,"state_dict"),au.forEach(t),tp=r($o,` contains just the placeholders since the model weights are partitioned across multiple GPUs.
ZeRO Stage-3 has 2 options:`),$o.forEach(t),ap=u(j),$=n(j,"P",{});var O=o($);np=r(O,"a. Saving the entire 16bit model weights to directly load later on using "),ra=n(O,"CODE",{});var nu=o(ra);op=r(nu,"model.load_state_dict(torch.load(pytorch_model.bin))"),nu.forEach(t),lp=r(O,`.
For this, either set `),pa=n(O,"CODE",{});var ou=o(pa);rp=r(ou,"zero_optimization.stage3_gather_16bit_weights_on_model_save"),ou.forEach(t),pp=r(O,` to True in DeepSpeed Config file or set
`),ia=n(O,"CODE",{});var lu=o(ia);ip=r(lu,"zero3_save_16bit_model"),lu.forEach(t),cp=r(O,` to True in DeepSpeed Plugin.
`),ca=n(O,"STRONG",{});var ru=o(ca);up=r(ru,"Note that this option requires consolidation of the weights on one GPU it can be slow and memory demanding, so only use this feature when needed."),ru.forEach(t),dp=r(O,`
Below is the snippet from `),ua=n(O,"CODE",{});var pu=o(ua);hp=r(pu,"examples/by_feature/deepspeed_with_config_support.py"),pu.forEach(t),_p=r(O," showing this:"),O.forEach(t),fp=u(j),_(cs.$$.fragment,j),mp=u(j),K=n(j,"P",{});var tt=o(K);gp=r(tt,"b. To get 32bit weights, first save the model using "),da=n(tt,"CODE",{});var iu=o(da);wp=r(iu,"model.save_checkpoint()"),iu.forEach(t),vp=r(tt,`.
Below is the snippet from `),ha=n(tt,"CODE",{});var cu=o(ha);jp=r(cu,"examples/by_feature/deepspeed_with_config_support.py"),cu.forEach(t),bp=r(tt," showing this:"),tt.forEach(t),yp=u(j),_(us.$$.fragment,j),qp=u(j),Q=n(j,"P",{});var at=o(Q);$p=r(at,"This will create ZeRO model and optimizer partitions along with "),_a=n(at,"CODE",{});var uu=o(_a);zp=r(uu,"zero_to_fp32.py"),uu.forEach(t),Ep=r(at,` script in checkpoint directory.
One can use this script to do offline consolidation.`),kp=n(at,"BR",{}),Dp=r(at,`
It requires no configuration files or GPUs. Here is an example of its usage:`),at.forEach(t),Sp=u(j),_(ds.$$.fragment,j),Op=u(j),fa=n(j,"P",{});var du=o(fa);Pp=r(du,"To get 32bit model for saving/inference, one can do the following:"),du.forEach(t),xp=u(j),_(hs.$$.fragment,j),Cp=u(j),ma=n(j,"P",{});var hu=o(ma);Ip=r(hu,"If only interested in state_dict, one can do the following:"),hu.forEach(t),Ap=u(j),_(_s.$$.fragment,j),Tp=u(j),ga=n(j,"P",{});var _u=o(ga);Rp=r(_u,"Note that all these functions require ~2x memory (general RAM) of the size of the final checkpoint."),_u.forEach(t),j.forEach(t),qo.forEach(t),Zn=u(e),X=n(e,"H2",{class:!0});var zo=o(X);ze=n(zo,"A",{id:!0,class:!0,href:!0});var fu=o(ze);wa=n(fu,"SPAN",{});var mu=o(wa);_(fs.$$.fragment,mu),mu.forEach(t),fu.forEach(t),Lp=u(zo),va=n(zo,"SPAN",{});var gu=o(va);Np=r(gu,"ZeRO Inference"),gu.forEach(t),zo.forEach(t),Fn=r(e,`

DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. 
It uses the same ZeRO protocol as training, but it doesn't use an optimizer and a lr scheduler and only stage 3 is relevant.
With accelerate integration, one has to just prepare model and dataloader as shown below:

	`),_(ms.$$.fragment,e),Mn=u(e),ee=n(e,"H2",{class:!0});var Eo=o(ee);Ee=n(Eo,"A",{id:!0,class:!0,href:!0});var wu=o(Ee);ja=n(wu,"SPAN",{});var vu=o(ja);_(gs.$$.fragment,vu),vu.forEach(t),wu.forEach(t),Zp=u(Eo),ba=n(Eo,"SPAN",{});var ju=o(ba);Fp=r(ju,"Few caveats to be aware of"),ju.forEach(t),Eo.forEach(t),Wn=u(e),I=n(e,"OL",{});var nt=o(I);ya=n(nt,"LI",{});var bu=o(ya);Mp=r(bu,"Current integration doesn\u2019t support Pipeline Parallelism of DeepSpeed."),bu.forEach(t),Wp=u(nt),ws=n(nt,"LI",{});var ko=o(ws);Hp=r(ko,"Current integration doesn\u2019t support "),qa=n(ko,"CODE",{});var yu=o(qa);Up=r(yu,"mpu"),yu.forEach(t),Bp=r(ko,", limiting the tensor parallelism which is supported in Megatron-LM."),ko.forEach(t),Gp=u(nt),vs=n(nt,"LI",{});var Do=o(vs);Vp=r(Do,"Current integration doesn\u2019t support multiple models for a given "),$a=n(Do,"CODE",{});var qu=o($a);Yp=r(qu,"accelerator"),qu.forEach(t),Jp=r(Do," object."),Do.forEach(t),nt.forEach(t),Hn=u(e),se=n(e,"H2",{class:!0});var So=o(se);ke=n(So,"A",{id:!0,class:!0,href:!0});var $u=o(ke);za=n($u,"SPAN",{});var zu=o(za);_(js.$$.fragment,zu),zu.forEach(t),$u.forEach(t),Kp=u(So),Ea=n(So,"SPAN",{});var Eu=o(Ea);Qp=r(Eu,"Internals"),Eu.forEach(t),So.forEach(t),Un=u(e),x=n(e,"DIV",{class:!0});var ot=o(x);_(bs.$$.fragment,ot),Xp=u(ot),ka=n(ot,"P",{});var ku=o(ka);ei=r(ku,"This plugin is used to integrate DeepSpeed."),ku.forEach(t),si=u(ot),De=n(ot,"DIV",{class:!0});var Oo=o(De);_(ys.$$.fragment,Oo),ti=u(Oo),Da=n(Oo,"P",{});var Du=o(Da);ai=r(Du,"Process the DeepSpeed config with the values from the kwargs."),Du.forEach(t),Oo.forEach(t),ot.forEach(t),Bn=u(e),te=n(e,"DIV",{class:!0});var Po=o(te);_(qs.$$.fragment,Po),ni=u(Po),Sa=n(Po,"P",{});var Su=o(Sa);oi=r(Su,`Dummy optimizer presents model parameters or param groups, this is primarily used to follow conventional training
loop when optimizer config is specified in the deepspeed config file.`),Su.forEach(t),Po.forEach(t),Gn=u(e),ae=n(e,"DIV",{class:!0});var xo=o(ae);_($s.$$.fragment,xo),li=u(xo),Oa=n(xo,"P",{});var Ou=o(Oa);ri=r(Ou,`Dummy scheduler presents model parameters or param groups, this is primarily used to follow conventional training
loop when scheduler config is specified in the deepspeed config file.`),Ou.forEach(t),xo.forEach(t),Vn=u(e),ne=n(e,"DIV",{class:!0});var Co=o(ne);_(zs.$$.fragment,Co),pi=u(Co),Pa=n(Co,"P",{});var Pu=o(Pa);ii=r(Pu,"Internal wrapper for deepspeed.runtime.engine.DeepSpeedEngine. This is used to follow conventional training loop."),Pu.forEach(t),Co.forEach(t),Yn=u(e),oe=n(e,"DIV",{class:!0});var Io=o(oe);_(Es.$$.fragment,Io),ci=u(Io),xa=n(Io,"P",{});var xu=o(xa);ui=r(xu,"Internal wrapper around a deepspeed optimizer."),xu.forEach(t),Io.forEach(t),Jn=u(e),le=n(e,"DIV",{class:!0});var Ao=o(le);_(ks.$$.fragment,Ao),di=u(Ao),Ca=n(Ao,"P",{});var Cu=o(Ca);hi=r(Cu,"Internal wrapper around a deepspeed scheduler."),Cu.forEach(t),Ao.forEach(t),Kn=u(e),re=n(e,"H2",{class:!0});var To=o(re);Se=n(To,"A",{id:!0,class:!0,href:!0});var Iu=o(Se);Ia=n(Iu,"SPAN",{});var Au=o(Ia);_(Ds.$$.fragment,Au),Au.forEach(t),Iu.forEach(t),_i=u(To),Aa=n(To,"SPAN",{});var Tu=o(Aa);fi=r(Tu,"Main DeepSpeed Resources"),Tu.forEach(t),To.forEach(t),Qn=u(e),k=n(e,"UL",{});var Pe=o(k);Ta=n(Pe,"LI",{});var Ru=o(Ta);Ss=n(Ru,"A",{href:!0,rel:!0});var Lu=o(Ss);mi=r(Lu,"Project\u2019s github"),Lu.forEach(t),Ru.forEach(t),gi=u(Pe),Ra=n(Pe,"LI",{});var Nu=o(Ra);Os=n(Nu,"A",{href:!0,rel:!0});var Zu=o(Os);wi=r(Zu,"Usage docs"),Zu.forEach(t),Nu.forEach(t),vi=u(Pe),La=n(Pe,"LI",{});var Fu=o(La);Ps=n(Fu,"A",{href:!0,rel:!0});var Mu=o(Ps);ji=r(Mu,"API docs"),Mu.forEach(t),Fu.forEach(t),bi=u(Pe),Na=n(Pe,"LI",{});var Wu=o(Na);xs=n(Wu,"A",{href:!0,rel:!0});var Hu=o(xs);yi=r(Hu,"Blog posts"),Hu.forEach(t),Wu.forEach(t),Pe.forEach(t),Xn=u(e),Ks=n(e,"P",{});var Uu=o(Ks);qi=r(Uu,"Papers:"),Uu.forEach(t),eo=u(e),A=n(e,"UL",{});var lt=o(A);Za=n(lt,"LI",{});var Bu=o(Za);Cs=n(Bu,"A",{href:!0,rel:!0});var Gu=o(Cs);$i=r(Gu,"ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),Gu.forEach(t),Bu.forEach(t),zi=u(lt),Fa=n(lt,"LI",{});var Vu=o(Fa);Is=n(Vu,"A",{href:!0,rel:!0});var Yu=o(Is);Ei=r(Yu,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),Yu.forEach(t),Vu.forEach(t),ki=u(lt),Ma=n(lt,"LI",{});var Ju=o(Ma);As=n(Ju,"A",{href:!0,rel:!0});var Ku=o(As);Di=r(Ku,"ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),Ku.forEach(t),Ju.forEach(t),lt.forEach(t),so=u(e),T=n(e,"P",{});var rt=o(T);Si=r(rt,"Finally, please, remember that, \u{1F917} "),Wa=n(rt,"CODE",{});var Qu=o(Wa);Oi=r(Qu,"Accelerate"),Qu.forEach(t),Pi=r(rt,` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),Ts=n(rt,"A",{href:!0,rel:!0});var Xu=o(Ts);xi=r(Xu,"DeepSpeed GitHub"),Xu.forEach(t),Ci=r(rt,"."),rt.forEach(t),this.h()},h(){d(Z,"name","hf:doc:metadata"),d(Z,"content",JSON.stringify(rd)),d(pe,"id","deepspeed"),d(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(pe,"href","#deepspeed"),d(F,"class","relative group"),d(Ce,"href","https://www.deepspeed.ai/"),d(Ce,"rel","nofollow"),d(Ie,"href","https://github.com/microsoft/DeepSpeed"),d(Ie,"rel","nofollow"),d(de,"id","what-is-integrated"),d(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(de,"href","#what-is-integrated"),d(W,"class","relative group"),d(Ms,"href","#deepspeed-zero-inference"),d(he,"id","how-it-works"),d(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(he,"href","#how-it-works"),d(H,"class","relative group"),d(Ne,"href","https://github.com/microsoft/DeepSpeed#installation"),d(Ne,"rel","nofollow"),d(_e,"id","accelerate-deepspeed-plugin"),d(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(_e,"href","#accelerate-deepspeed-plugin"),d(B,"class","relative group"),d(ge,"id","deepspeed-config-file"),d(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ge,"href","#deepspeed-config-file"),d(G,"class","relative group"),d(as,"href","https://deepspeed.readthedocs.io/en/latest/optimizers.html"),d(as,"rel","nofollow"),d(ns,"href","https://deepspeed.readthedocs.io/en/latest/schedulers.html"),d(ns,"rel","nofollow"),d(qe,"id","saving-and-loading"),d(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(qe,"href","#saving-and-loading"),d(J,"class","relative group"),d(ze,"id","zero-inference"),d(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ze,"href","#zero-inference"),d(X,"class","relative group"),d(Ee,"id","few-caveats-to-be-aware-of"),d(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ee,"href","#few-caveats-to-be-aware-of"),d(ee,"class","relative group"),d(ke,"id","accelerate.DeepSpeedPlugin"),d(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ke,"href","#accelerate.DeepSpeedPlugin"),d(se,"class","relative group"),d(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Se,"id","main-deepspeed-resources"),d(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Se,"href","#main-deepspeed-resources"),d(re,"class","relative group"),d(Ss,"href","https://github.com/microsoft/deepspeed"),d(Ss,"rel","nofollow"),d(Os,"href","https://www.deepspeed.ai/getting-started/"),d(Os,"rel","nofollow"),d(Ps,"href","https://deepspeed.readthedocs.io/en/latest/index.html"),d(Ps,"rel","nofollow"),d(xs,"href","https://www.microsoft.com/en-us/research/search/?q=deepspeed"),d(xs,"rel","nofollow"),d(Cs,"href","https://arxiv.org/abs/1910.02054"),d(Cs,"rel","nofollow"),d(Is,"href","https://arxiv.org/abs/2101.06840"),d(Is,"rel","nofollow"),d(As,"href","https://arxiv.org/abs/2104.07857"),d(As,"rel","nofollow"),d(Ts,"href","https://github.com/microsoft/DeepSpeed/issues"),d(Ts,"rel","nofollow")},m(e,p){s(document.head,Z),i(e,Ua,p),i(e,F,p),s(F,pe),s(pe,pt),f(xe,pt,null),s(F,Ro),s(F,it),s(it,Lo),i(e,Ba,p),i(e,ie,p),s(ie,No),s(ie,Ce),s(Ce,Zo),s(ie,Fo),i(e,Ga,p),i(e,ce,p),s(ce,Mo),s(ce,Ie),s(Ie,Wo),s(ce,Ho),i(e,Va,p),i(e,ue,p),s(ue,M),s(M,Uo),s(M,ct),s(ct,Bo),s(M,Go),s(M,ut),s(ut,Vo),s(M,Yo),s(ue,Jo),s(ue,Ae),s(Ae,Ko),s(Ae,dt),s(dt,Qo),s(Ae,Xo),i(e,Ya,p),i(e,W,p),s(W,de),s(de,ht),f(Te,ht,null),s(W,el),s(W,_t),s(_t,sl),i(e,Ja,p),i(e,Ls,p),s(Ls,tl),i(e,Ka,p),i(e,Ns,p),s(Ns,ft),s(ft,al),i(e,Qa,p),i(e,Zs,p),s(Zs,nl),i(e,Xa,p),i(e,Fs,p),s(Fs,Re),s(Re,ol),s(Re,Ms),s(Ms,ll),s(Re,rl),i(e,en,p),i(e,H,p),s(H,he),s(he,mt),f(Le,mt,null),s(H,pl),s(H,gt),s(gt,il),i(e,sn,p),i(e,U,p),s(U,wt),s(wt,cl),s(U,ul),s(U,Ne),s(Ne,dl),s(U,hl),i(e,tn,p),i(e,C,p),s(C,_l),s(C,vt),s(vt,fl),s(C,ml),s(C,jt),s(jt,gl),s(C,wl),i(e,an,p),i(e,B,p),s(B,_e),s(_e,bt),f(Ze,bt,null),s(B,vl),s(B,yt),s(yt,jl),i(e,nn,p),f(Fe,e,p),i(e,on,p),i(e,Ws,p),s(Ws,bl),i(e,ln,p),f(Me,e,p),i(e,rn,p),i(e,fe,p),s(fe,yl),s(fe,qt),s(qt,ql),s(fe,$l),i(e,pn,p),i(e,Hs,p),s(Hs,$t),s($t,zl),i(e,cn,p),f(We,e,p),i(e,un,p),f(He,e,p),i(e,dn,p),i(e,Us,p),s(Us,zt),s(zt,El),i(e,hn,p),f(Ue,e,p),i(e,_n,p),f(Be,e,p),i(e,fn,p),i(e,me,p),s(me,kl),s(me,Et),s(Et,Dl),s(me,Sl),i(e,mn,p),f(Ge,e,p),i(e,gn,p),i(e,G,p),s(G,ge),s(ge,kt),f(Ve,kt,null),s(G,Ol),s(G,Dt),s(Dt,Pl),i(e,wn,p),f(Ye,e,p),i(e,vn,p),i(e,Bs,p),s(Bs,xl),i(e,jn,p),f(Je,e,p),i(e,bn,p),i(e,we,p),s(we,Cl),s(we,St),s(St,Il),s(we,Al),i(e,yn,p),i(e,Gs,p),s(Gs,Ot),s(Ot,Tl),i(e,qn,p),f(Ke,e,p),i(e,$n,p),i(e,ve,p),s(ve,Rl),s(ve,Pt),s(Pt,Ll),s(ve,Nl),i(e,zn,p),f(Qe,e,p),i(e,En,p),f(Xe,e,p),i(e,kn,p),i(e,Vs,p),s(Vs,xt),s(xt,Zl),i(e,Dn,p),f(es,e,p),i(e,Sn,p),i(e,je,p),s(je,Fl),s(je,Ct),s(Ct,Ml),s(je,Wl),i(e,On,p),f(ss,e,p),i(e,Pn,p),f(ts,e,p),i(e,xn,p),i(e,Ys,p),s(Ys,It),s(It,Hl),i(e,Cn,p),i(e,be,p),s(be,y),s(y,V),s(V,Ul),s(V,as),s(as,Bl),s(V,Gl),s(V,ns),s(ns,Vl),s(V,Yl),s(y,Jl),s(y,q),s(q,Kl),s(q,At),s(At,Ql),s(q,Xl),s(q,Tt),s(Tt,er),s(q,sr),s(q,Rt),s(Rt,tr),s(q,ar),s(q,Lt),s(Lt,nr),s(q,or),s(q,Nt),s(Nt,lr),s(q,rr),s(y,pr),f(os,y,null),s(y,ir),s(y,E),s(E,cr),s(E,Zt),s(Zt,ur),s(E,dr),s(E,Ft),s(Ft,hr),s(E,_r),s(E,Mt),s(Mt,fr),s(E,mr),s(E,Wt),s(Wt,gr),s(E,wr),s(y,vr),s(y,Y),s(Y,jr),s(Y,Ht),s(Ht,br),s(Y,yr),s(Y,Ut),s(Ut,qr),s(Y,$r),s(y,zr),s(y,ls),s(ls,Er),s(ls,Bt),s(Bt,kr),s(ls,Dr),s(be,Sr),s(be,Gt),s(Gt,P),s(P,Or),s(P,Vt),s(Vt,Pr),s(P,xr),s(P,Yt),s(Yt,Cr),s(P,Ir),s(P,Jt),s(Jt,Ar),s(P,Tr),i(e,In,p),f(rs,e,p),i(e,An,p),i(e,ye,p),s(ye,Rr),s(ye,Kt),s(Kt,Lr),s(ye,Nr),i(e,Tn,p),i(e,Js,p),s(Js,Zr),i(e,Rn,p),i(e,z,p),s(z,Fr),s(z,Qt),s(Qt,Mr),s(z,Wr),s(z,Xt),s(Xt,Hr),s(z,Ur),s(z,ea),s(ea,Br),s(z,Gr),s(z,sa),s(sa,Vr),s(z,Yr),i(e,Ln,p),i(e,J,p),s(J,qe),s(qe,ta),f(ps,ta,null),s(J,Jr),s(J,aa),s(aa,Kr),i(e,Nn,p),i(e,$e,p),s($e,na),s(na,oa),s(oa,Qr),s($e,Xr),s($e,v),s(v,is),s(is,ep),s(is,la),s(la,sp),s(is,tp),s(v,ap),s(v,$),s($,np),s($,ra),s(ra,op),s($,lp),s($,pa),s(pa,rp),s($,pp),s($,ia),s(ia,ip),s($,cp),s($,ca),s(ca,up),s($,dp),s($,ua),s(ua,hp),s($,_p),s(v,fp),f(cs,v,null),s(v,mp),s(v,K),s(K,gp),s(K,da),s(da,wp),s(K,vp),s(K,ha),s(ha,jp),s(K,bp),s(v,yp),f(us,v,null),s(v,qp),s(v,Q),s(Q,$p),s(Q,_a),s(_a,zp),s(Q,Ep),s(Q,kp),s(Q,Dp),s(v,Sp),f(ds,v,null),s(v,Op),s(v,fa),s(fa,Pp),s(v,xp),f(hs,v,null),s(v,Cp),s(v,ma),s(ma,Ip),s(v,Ap),f(_s,v,null),s(v,Tp),s(v,ga),s(ga,Rp),i(e,Zn,p),i(e,X,p),s(X,ze),s(ze,wa),f(fs,wa,null),s(X,Lp),s(X,va),s(va,Np),i(e,Fn,p),f(ms,e,p),i(e,Mn,p),i(e,ee,p),s(ee,Ee),s(Ee,ja),f(gs,ja,null),s(ee,Zp),s(ee,ba),s(ba,Fp),i(e,Wn,p),i(e,I,p),s(I,ya),s(ya,Mp),s(I,Wp),s(I,ws),s(ws,Hp),s(ws,qa),s(qa,Up),s(ws,Bp),s(I,Gp),s(I,vs),s(vs,Vp),s(vs,$a),s($a,Yp),s(vs,Jp),i(e,Hn,p),i(e,se,p),s(se,ke),s(ke,za),f(js,za,null),s(se,Kp),s(se,Ea),s(Ea,Qp),i(e,Un,p),i(e,x,p),f(bs,x,null),s(x,Xp),s(x,ka),s(ka,ei),s(x,si),s(x,De),f(ys,De,null),s(De,ti),s(De,Da),s(Da,ai),i(e,Bn,p),i(e,te,p),f(qs,te,null),s(te,ni),s(te,Sa),s(Sa,oi),i(e,Gn,p),i(e,ae,p),f($s,ae,null),s(ae,li),s(ae,Oa),s(Oa,ri),i(e,Vn,p),i(e,ne,p),f(zs,ne,null),s(ne,pi),s(ne,Pa),s(Pa,ii),i(e,Yn,p),i(e,oe,p),f(Es,oe,null),s(oe,ci),s(oe,xa),s(xa,ui),i(e,Jn,p),i(e,le,p),f(ks,le,null),s(le,di),s(le,Ca),s(Ca,hi),i(e,Kn,p),i(e,re,p),s(re,Se),s(Se,Ia),f(Ds,Ia,null),s(re,_i),s(re,Aa),s(Aa,fi),i(e,Qn,p),i(e,k,p),s(k,Ta),s(Ta,Ss),s(Ss,mi),s(k,gi),s(k,Ra),s(Ra,Os),s(Os,wi),s(k,vi),s(k,La),s(La,Ps),s(Ps,ji),s(k,bi),s(k,Na),s(Na,xs),s(xs,yi),i(e,Xn,p),i(e,Ks,p),s(Ks,qi),i(e,eo,p),i(e,A,p),s(A,Za),s(Za,Cs),s(Cs,$i),s(A,zi),s(A,Fa),s(Fa,Is),s(Is,Ei),s(A,ki),s(A,Ma),s(Ma,As),s(As,Di),i(e,so,p),i(e,T,p),s(T,Si),s(T,Wa),s(Wa,Oi),s(T,Pi),s(T,Ts),s(Ts,xi),s(T,Ci),to=!0},p:nd,i(e){to||(m(xe.$$.fragment,e),m(Te.$$.fragment,e),m(Le.$$.fragment,e),m(Ze.$$.fragment,e),m(Fe.$$.fragment,e),m(Me.$$.fragment,e),m(We.$$.fragment,e),m(He.$$.fragment,e),m(Ue.$$.fragment,e),m(Be.$$.fragment,e),m(Ge.$$.fragment,e),m(Ve.$$.fragment,e),m(Ye.$$.fragment,e),m(Je.$$.fragment,e),m(Ke.$$.fragment,e),m(Qe.$$.fragment,e),m(Xe.$$.fragment,e),m(es.$$.fragment,e),m(ss.$$.fragment,e),m(ts.$$.fragment,e),m(os.$$.fragment,e),m(rs.$$.fragment,e),m(ps.$$.fragment,e),m(cs.$$.fragment,e),m(us.$$.fragment,e),m(ds.$$.fragment,e),m(hs.$$.fragment,e),m(_s.$$.fragment,e),m(fs.$$.fragment,e),m(ms.$$.fragment,e),m(gs.$$.fragment,e),m(js.$$.fragment,e),m(bs.$$.fragment,e),m(ys.$$.fragment,e),m(qs.$$.fragment,e),m($s.$$.fragment,e),m(zs.$$.fragment,e),m(Es.$$.fragment,e),m(ks.$$.fragment,e),m(Ds.$$.fragment,e),to=!0)},o(e){g(xe.$$.fragment,e),g(Te.$$.fragment,e),g(Le.$$.fragment,e),g(Ze.$$.fragment,e),g(Fe.$$.fragment,e),g(Me.$$.fragment,e),g(We.$$.fragment,e),g(He.$$.fragment,e),g(Ue.$$.fragment,e),g(Be.$$.fragment,e),g(Ge.$$.fragment,e),g(Ve.$$.fragment,e),g(Ye.$$.fragment,e),g(Je.$$.fragment,e),g(Ke.$$.fragment,e),g(Qe.$$.fragment,e),g(Xe.$$.fragment,e),g(es.$$.fragment,e),g(ss.$$.fragment,e),g(ts.$$.fragment,e),g(os.$$.fragment,e),g(rs.$$.fragment,e),g(ps.$$.fragment,e),g(cs.$$.fragment,e),g(us.$$.fragment,e),g(ds.$$.fragment,e),g(hs.$$.fragment,e),g(_s.$$.fragment,e),g(fs.$$.fragment,e),g(ms.$$.fragment,e),g(gs.$$.fragment,e),g(js.$$.fragment,e),g(bs.$$.fragment,e),g(ys.$$.fragment,e),g(qs.$$.fragment,e),g($s.$$.fragment,e),g(zs.$$.fragment,e),g(Es.$$.fragment,e),g(ks.$$.fragment,e),g(Ds.$$.fragment,e),to=!1},d(e){t(Z),e&&t(Ua),e&&t(F),w(xe),e&&t(Ba),e&&t(ie),e&&t(Ga),e&&t(ce),e&&t(Va),e&&t(ue),e&&t(Ya),e&&t(W),w(Te),e&&t(Ja),e&&t(Ls),e&&t(Ka),e&&t(Ns),e&&t(Qa),e&&t(Zs),e&&t(Xa),e&&t(Fs),e&&t(en),e&&t(H),w(Le),e&&t(sn),e&&t(U),e&&t(tn),e&&t(C),e&&t(an),e&&t(B),w(Ze),e&&t(nn),w(Fe,e),e&&t(on),e&&t(Ws),e&&t(ln),w(Me,e),e&&t(rn),e&&t(fe),e&&t(pn),e&&t(Hs),e&&t(cn),w(We,e),e&&t(un),w(He,e),e&&t(dn),e&&t(Us),e&&t(hn),w(Ue,e),e&&t(_n),w(Be,e),e&&t(fn),e&&t(me),e&&t(mn),w(Ge,e),e&&t(gn),e&&t(G),w(Ve),e&&t(wn),w(Ye,e),e&&t(vn),e&&t(Bs),e&&t(jn),w(Je,e),e&&t(bn),e&&t(we),e&&t(yn),e&&t(Gs),e&&t(qn),w(Ke,e),e&&t($n),e&&t(ve),e&&t(zn),w(Qe,e),e&&t(En),w(Xe,e),e&&t(kn),e&&t(Vs),e&&t(Dn),w(es,e),e&&t(Sn),e&&t(je),e&&t(On),w(ss,e),e&&t(Pn),w(ts,e),e&&t(xn),e&&t(Ys),e&&t(Cn),e&&t(be),w(os),e&&t(In),w(rs,e),e&&t(An),e&&t(ye),e&&t(Tn),e&&t(Js),e&&t(Rn),e&&t(z),e&&t(Ln),e&&t(J),w(ps),e&&t(Nn),e&&t($e),w(cs),w(us),w(ds),w(hs),w(_s),e&&t(Zn),e&&t(X),w(fs),e&&t(Fn),w(ms,e),e&&t(Mn),e&&t(ee),w(gs),e&&t(Wn),e&&t(I),e&&t(Hn),e&&t(se),w(js),e&&t(Un),e&&t(x),w(bs),w(ys),e&&t(Bn),e&&t(te),w(qs),e&&t(Gn),e&&t(ae),w($s),e&&t(Vn),e&&t(ne),w(zs),e&&t(Yn),e&&t(oe),w(Es),e&&t(Jn),e&&t(le),w(ks),e&&t(Kn),e&&t(re),w(Ds),e&&t(Qn),e&&t(k),e&&t(Xn),e&&t(Ks),e&&t(eo),e&&t(A),e&&t(so),e&&t(T)}}}const rd={local:"deepspeed",sections:[{local:"what-is-integrated",title:"What is integrated?"},{local:"how-it-works",sections:[{local:"accelerate-deepspeed-plugin",title:"Accelerate DeepSpeed Plugin"},{local:"deepspeed-config-file",title:"DeepSpeed Config File"}],title:"How it works?"},{local:"saving-and-loading",title:"Saving and loading"},{local:"zero-inference",title:"ZeRO Inference"},{local:"few-caveats-to-be-aware-of",title:"Few caveats to be aware of "},{local:"accelerate.DeepSpeedPlugin",title:"Internals"},{local:"main-deepspeed-resources",title:"Main DeepSpeed Resources"}],title:"DeepSpeed "};function pd(Ii){return od(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class hd extends ed{constructor(Z){super();sd(this,Z,pd,ld,td,{})}}export{hd as default,rd as metadata};
