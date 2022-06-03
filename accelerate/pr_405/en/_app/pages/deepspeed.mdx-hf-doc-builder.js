import{S as ed,i as sd,s as td,e as a,k as c,w as h,t as l,M as ad,c as n,d as t,m as u,a as o,x as _,h as p,b as d,G as s,g as i,y as f,L as nd,q as m,o as g,B as w,v as od}from"../chunks/vendor-hf-doc-builder.js";import{D as Rs}from"../chunks/Docstring-hf-doc-builder.js";import{C as b}from"../chunks/CodeBlock-hf-doc-builder.js";import{I as N}from"../chunks/IconCopyLink-hf-doc-builder.js";function ld(Ii){let Z,Ua,F,re,rt,xe,Ro,it,Lo,Ba,ie,No,Ce,Zo,Fo,Ga,ce,Mo,Ie,Ho,Wo,Va,ue,M,Uo,ct,Bo,Go,ut,Vo,Yo,Jo,Ae,Ko,dt,Qo,Xo,Ya,H,de,ht,Te,el,_t,sl,Ja,Ls,tl,Ka,Ns,ft,al,Qa,Zs,nl,Xa,Fs,Re,ol,Ms,ll,pl,en,W,he,mt,Le,rl,gt,il,sn,U,wt,cl,ul,Ne,dl,hl,tn,C,_l,vt,fl,ml,jt,gl,wl,an,B,_e,bt,Ze,vl,yt,jl,nn,Fe,on,Hs,bl,ln,Me,pn,fe,yl,qt,ql,$l,rn,Ws,$t,El,cn,He,un,We,dn,Us,Et,zl,hn,Ue,_n,Be,fn,me,kl,zt,Sl,Dl,mn,Ge,gn,G,ge,kt,Ve,Ol,St,Pl,wn,Ye,vn,Bs,xl,jn,Je,bn,we,Cl,Dt,Il,Al,yn,Gs,Ot,Tl,qn,Ke,$n,ve,Rl,Pt,Ll,Nl,En,Qe,zn,Xe,kn,Vs,xt,Zl,Sn,es,Dn,je,Fl,Ct,Ml,Hl,On,ss,Pn,ts,xn,Ys,It,Wl,Cn,be,y,V,Ul,as,Bl,Gl,ns,Vl,Yl,Jl,q,Kl,At,Ql,Xl,Tt,ep,sp,Rt,tp,ap,Lt,np,op,Nt,lp,pp,rp,os,ip,z,cp,Zt,up,dp,Ft,hp,_p,Mt,fp,mp,Ht,gp,wp,vp,Y,jp,Wt,bp,yp,Ut,qp,$p,Ep,ls,zp,Bt,kp,Sp,Dp,Gt,P,Op,Vt,Pp,xp,Yt,Cp,Ip,Jt,Ap,Tp,In,ps,An,ye,Rp,Kt,Lp,Np,Tn,Js,Zp,Rn,E,Fp,Qt,Mp,Hp,Xt,Wp,Up,ea,Bp,Gp,sa,Vp,Yp,Ln,J,qe,ta,rs,Jp,aa,Kp,Nn,$e,na,oa,Qp,Xp,v,is,er,la,sr,tr,ar,$,nr,pa,or,lr,ra,pr,rr,ia,ir,cr,ca,ur,dr,ua,hr,_r,fr,cs,mr,K,gr,da,wr,vr,ha,jr,br,yr,us,qr,Q,$r,_a,Er,zr,kr,Sr,Dr,ds,Or,fa,Pr,xr,hs,Cr,ma,Ir,Ar,_s,Tr,ga,Rr,Zn,X,Ee,wa,fs,Lr,va,Nr,Fn,ms,Mn,ee,ze,ja,gs,Zr,ba,Fr,Hn,I,ya,Mr,Hr,ws,Wr,qa,Ur,Br,Gr,vs,Vr,$a,Yr,Jr,Wn,se,ke,Ea,js,Kr,za,Qr,Un,x,bs,Xr,ka,ei,si,Se,ys,ti,Sa,ai,Bn,te,qs,ni,Da,oi,Gn,ae,$s,li,Oa,pi,Vn,ne,Es,ri,Pa,ii,Yn,oe,zs,ci,xa,ui,Jn,le,ks,di,Ca,hi,Kn,pe,De,Ia,Ss,_i,Aa,fi,Qn,k,Ta,Ds,mi,gi,Ra,Os,wi,vi,La,Ps,ji,bi,Na,xs,yi,Xn,Ks,qi,eo,A,Za,Cs,$i,Ei,Fa,Is,zi,ki,Ma,As,Si,so,T,Di,Ha,Oi,Pi,Ts,xi,Ci,to;return xe=new N({}),Te=new N({}),Le=new N({}),Ze=new N({}),Fe=new b({props:{code:"accelerate config",highlighted:"accelerate config"}}),Me=new b({props:{code:"accelerate launch my_script.py --args_to_my_script",highlighted:"accelerate launch my_script.py --args_to_my_script"}}),He=new b({props:{code:`compute_environment: LOCAL_MACHINE
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

state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir)`}}),fs=new N({}),ms=new b({props:{code:"model, eval_dataloader = accelerator.prepare(model, eval_dataloader)",highlighted:"model, eval_dataloader = accelerator.prepare(model, eval_dataloader)"}}),gs=new N({}),js=new N({}),bs=new Rs({props:{name:"class accelerate.DeepSpeedPlugin",anchor:"accelerate.DeepSpeedPlugin",parameters:[{name:"config_file",val:": str = None"},{name:"gradient_accumulation_steps",val:": int = None"},{name:"gradient_clipping",val:": float = None"},{name:"zero_stage",val:": int = None"},{name:"is_train_batch_min",val:": str = True"},{name:"offload_optimizer_device",val:": bool = None"},{name:"offload_param_device",val:": bool = None"},{name:"zero3_init_flag",val:": bool = None"},{name:"zero3_save_16bit_model",val:": bool = None"}],source:"https://github.com/huggingface/accelerate/blob/vr_405/src/accelerate/utils/dataclasses.py#L213"}}),ys=new Rs({props:{name:"deepspeed_config_process",anchor:"accelerate.DeepSpeedPlugin.deepspeed_config_process",parameters:[{name:"prefix",val:" = ''"},{name:"mismatches",val:" = None"},{name:"config",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/accelerate/blob/vr_405/src/accelerate/utils/dataclasses.py#L342"}}),qs=new Rs({props:{name:"class accelerate.utils.DummyOptim",anchor:"accelerate.utils.DummyOptim",parameters:[{name:"params",val:" = None"},{name:"param_groups",val:" = None"}],parametersDescription:[{anchor:"accelerate.utils.DummyOptim.params",description:`<strong>params</strong> (list of <code>torch.Tensor</code>) &#x2014;
List of model parameters.`,name:"params"},{anchor:"accelerate.utils.DummyOptim.param_groups",description:`<strong>param_groups</strong> (list of dict) &#x2014;
List of dictionaries with parameters and their groups.`,name:"param_groups"}],source:"https://github.com/huggingface/accelerate/blob/vr_405/src/accelerate/utils/deepspeed.py#L86"}}),$s=new Rs({props:{name:"class accelerate.utils.DummyScheduler",anchor:"accelerate.utils.DummyScheduler",parameters:[],source:"https://github.com/huggingface/accelerate/blob/vr_405/src/accelerate/utils/deepspeed.py#L108"}}),Es=new Rs({props:{name:"class accelerate.utils.DeepSpeedEngineWrapper",anchor:"accelerate.utils.DeepSpeedEngineWrapper",parameters:[{name:"engine",val:""}],parametersDescription:[{anchor:"accelerate.utils.DeepSpeedEngineWrapper.engine",description:"<strong>engine</strong> (deepspeed.runtime.engine.DeepSpeedEngine) &#x2014; deepspeed engine to wrap",name:"engine"}],source:"https://github.com/huggingface/accelerate/blob/vr_405/src/accelerate/utils/deepspeed.py#L20"}}),zs=new Rs({props:{name:"class accelerate.utils.DeepSpeedOptimizerWrapper",anchor:"accelerate.utils.DeepSpeedOptimizerWrapper",parameters:[{name:"optimizer",val:""}],parametersDescription:[{anchor:"accelerate.utils.DeepSpeedOptimizerWrapper.optimizer",description:`<strong>optimizer</strong> (<code>torch.optim.optimizer.Optimizer</code>) &#x2014;
The optimizer to wrap.`,name:"optimizer"}],source:"https://github.com/huggingface/accelerate/blob/vr_405/src/accelerate/utils/deepspeed.py#L45"}}),ks=new Rs({props:{name:"class accelerate.utils.DeepSpeedSchedulerWrapper",anchor:"accelerate.utils.DeepSpeedSchedulerWrapper",parameters:[{name:"scheduler",val:""},{name:"optimizers",val:""}],parametersDescription:[{anchor:"accelerate.utils.DeepSpeedSchedulerWrapper.scheduler",description:`<strong>scheduler</strong> (<code>torch.optim.lr_scheduler.LambdaLR</code>) &#x2014;
The scheduler to wrap.`,name:"scheduler"},{anchor:"accelerate.utils.DeepSpeedSchedulerWrapper.optimizers",description:"<strong>optimizers</strong> (one or a list of <code>torch.optim.Optimizer</code>) &#x2014;",name:"optimizers"}],source:"https://github.com/huggingface/accelerate/blob/vr_405/src/accelerate/utils/deepspeed.py#L69"}}),Ss=new N({}),{c(){Z=a("meta"),Ua=c(),F=a("h1"),re=a("a"),rt=a("span"),h(xe.$$.fragment),Ro=c(),it=a("span"),Lo=l("DeepSpeed"),Ba=c(),ie=a("p"),No=l(`Training advanced deep learning models is challenging.
Beyond model design, model scientists also need to set up the state-of-the-art training techniques such as
distributed training, mixed precision, gradient accumulation, and checkpointing.
Yet still, scientists may not achieve the desired system performance and convergence rate.
Large model sizes are even more challenging: a large model easily runs out of memory with pure data parallelism and it is difficult to use model parallelism.
`),Ce=a("a"),Zo=l("DeepSpeed"),Fo=l(" addresses these challenges to accelerate model development and training."),Ga=c(),ce=a("p"),Mo=l("\u{1F917} Accelerate integrates "),Ie=a("a"),Ho=l("DeepSpeed"),Wo=l(" via 2 options:"),Va=c(),ue=a("ol"),M=a("li"),Uo=l("Integration of the DeepSpeed features via "),ct=a("code"),Bo=l("deepspeed config file"),Go=l(" specification in "),ut=a("code"),Vo=l("accelerate config"),Yo=l(` . You just supply your custom config file or use our template. Most of
this document is focused on this feature. This supports all the core features of DeepSpeed and gives user a lot of flexibility.
User may have to change few lines of code depending on the config.`),Jo=c(),Ae=a("li"),Ko=l("Integration via "),dt=a("code"),Qo=l("deepspeed_plugin"),Xo=l(`.This supports subset of the DeepSpeed features and uses default options for the rest of the configurations.
User need not change any code and is good for those who are fine with most of the default settings of DeepSpeed.`),Ya=c(),H=a("h2"),de=a("a"),ht=a("span"),h(Te.$$.fragment),el=c(),_t=a("span"),sl=l("What is integrated?"),Ja=c(),Ls=a("p"),tl=l("Training:"),Ka=c(),Ns=a("ol"),ft=a("li"),al=l("DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 with ZeRO-Infinity (CPU and NVME offload)."),Qa=c(),Zs=a("p"),nl=l("Inference:"),Xa=c(),Fs=a("ol"),Re=a("li"),ol=l(`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),Ms=a("a"),ll=l("deepspeed-zero-inference"),pl=l("."),en=c(),W=a("h2"),he=a("a"),mt=a("span"),h(Le.$$.fragment),rl=c(),gt=a("span"),il=l("How it works?"),sn=c(),U=a("p"),wt=a("strong"),cl=l("Pre-Requisites"),ul=l(": Install DeepSpeed version >=0.6.5. Please refer to the "),Ne=a("a"),dl=l("DeepSpeed Insallation details"),hl=l(`
for more information.`),tn=c(),C=a("p"),_l=l("We will first look at easy to use integration via "),vt=a("code"),fl=l("deepspeed_plugin"),ml=l(`.
Followed by more flexible and feature rich `),jt=a("code"),gl=l("deepspeed config file"),wl=l(" integration."),an=c(),B=a("h3"),_e=a("a"),bt=a("span"),h(Ze.$$.fragment),vl=c(),yt=a("span"),jl=l("Accelerate DeepSpeed Plugin"),nn=l(`

On your machine(s) just run:

	`),h(Fe.$$.fragment),on=c(),Hs=a("p"),bl=l(`and answer the questions asked. It will ask whether you want to use a config file for deepspeed to which you answer no and answer the following questions.
This will generate a config file that will be used automatically to properly set the
default options when doing`),ln=c(),h(Me.$$.fragment),pn=c(),fe=a("p"),yl=l("For instance, here is how you would run the NLP example "),qt=a("code"),ql=l("examples/by_feature/deepspeed_with_config_support.py"),$l=l(" (from the root of the repo) with DeepSpeed Plugin:"),rn=c(),Ws=a("p"),$t=a("strong"),El=l("ZeRO Stage-2 DeepSpeed Plugin Example"),cn=c(),h(He.$$.fragment),un=c(),h(We.$$.fragment),dn=c(),Us=a("p"),Et=a("strong"),zl=l("ZeRO Stage-3 with CPU Offload DeepSpeed Plugin Example"),hn=c(),h(Ue.$$.fragment),_n=c(),h(Be.$$.fragment),fn=c(),me=a("p"),kl=l("Currently, "),zt=a("code"),Sl=l("Accelerate"),Dl=l(" supports following config through the CLI:"),mn=c(),h(Ge.$$.fragment),gn=c(),G=a("h3"),ge=a("a"),kt=a("span"),h(Ve.$$.fragment),Ol=c(),St=a("span"),Pl=l("DeepSpeed Config File"),wn=l(`

On your machine(s) just run:

	`),h(Ye.$$.fragment),vn=c(),Bs=a("p"),xl=l(`and answer the questions asked. It will ask whether you want to use a config file for deepspeed to which you answer yes
and provide the path to the deepspeed config file.
This will generate a config file that will be used automatically to properly set the
default options when doing`),jn=c(),h(Je.$$.fragment),bn=c(),we=a("p"),Cl=l("For instance, here is how you would run the NLP example "),Dt=a("code"),Il=l("examples/by_feature/deepspeed_with_config_support.py"),Al=l(" (from the root of the repo) with DeepSpeed Config File:"),yn=c(),Gs=a("p"),Ot=a("strong"),Tl=l("ZeRO Stage-2 DeepSpeed Config File Example"),qn=c(),h(Ke.$$.fragment),$n=c(),ve=a("p"),Rl=l("with the contents of "),Pt=a("code"),Ll=l("zero_stage2_config.json"),Nl=l(" being:"),En=c(),h(Qe.$$.fragment),zn=c(),h(Xe.$$.fragment),kn=c(),Vs=a("p"),xt=a("strong"),Zl=l("ZeRO Stage-3 with CPU offload DeepSpeed Config File Example"),Sn=c(),h(es.$$.fragment),Dn=c(),je=a("p"),Fl=l("with the contents of "),Ct=a("code"),Ml=l("zero_stage3_offload_config.json"),Hl=l(" being:"),On=c(),h(ss.$$.fragment),Pn=c(),h(ts.$$.fragment),xn=c(),Ys=a("p"),It=a("strong"),Wl=l("Important code changes when using DeepSpeed Config File"),Cn=c(),be=a("ol"),y=a("li"),V=a("p"),Ul=l(`DeepSpeed Optimizers and Schedulers. For more information on these,
see the `),as=a("a"),Bl=l("DeepSpeed Optimizers"),Gl=l(" and "),ns=a("a"),Vl=l("DeepSpeed Schedulers"),Yl=l(` documentation.
We will look at the changes needed in the code when using these.`),Jl=c(),q=a("p"),Kl=l("a. DS Optim + DS Scheduler: The case when both "),At=a("code"),Ql=l("optimizer"),Xl=l(" and "),Tt=a("code"),ep=l("scheduler"),sp=l(` keys present in the DeepSpeed config file.
In this situation, those will be used and user has to use `),Rt=a("code"),tp=l("accelerate.utils.DummyOptim"),ap=l(" and "),Lt=a("code"),np=l("accelerate.utils.DummyScheduler"),op=l(` to replace the PyTorch/Custom optimizers and schedulers in their code.
Below is the snippet from `),Nt=a("code"),lp=l("examples/by_feature/deepspeed_with_config_support.py"),pp=l(" showing this:"),rp=c(),h(os.$$.fragment),ip=c(),z=a("p"),cp=l("b. Custom Optim + Custom Scheduler: The case when both "),Zt=a("code"),up=l("optimizer"),dp=l(" and "),Ft=a("code"),hp=l("scheduler"),_p=l(` keys are absent in the DeepSpeed config file.
In this situation, no code changes are needed from the user and this is the case when using integration via DeepSpeed Plugin.
In the above example we can see that the code reamins unchanged if the `),Mt=a("code"),fp=l("optimizer"),mp=l(" and "),Ht=a("code"),gp=l("scheduler"),wp=l(" keys are absent in the DeepSpeed config file."),vp=c(),Y=a("p"),jp=l("c. Custom Optim + DS Scheduler: The case when only "),Wt=a("code"),bp=l("scheduler"),yp=l(` key is present in the DeepSpeed config file.
In this situation, user has to use `),Ut=a("code"),qp=l("accelerate.utils.DummyScheduler"),$p=l(" to replace the PyTorch/Custom scheduler in their code."),Ep=c(),ls=a("p"),zp=l("d. DS Optim + Custom Scheduler: The case when only "),Bt=a("code"),kp=l("optimizer"),Sp=l(` key is present in the DeepSpeed config file.
This will result in an error because one can only use DS Scheduler when using DS Optim.`),Dp=c(),Gt=a("li"),P=a("p"),Op=l("Notice the "),Vt=a("code"),Pp=l("auto"),xp=l(` values in the above example DeepSpeed config files.
These have to specified by the user in the code by running `),Yt=a("code"),Cp=l("accelerator.state.deepspeed_plugin.deepspeed_config_process(**kwargs)"),Ip=l(`.
This allows user more flexibilty to fill these fields based on the code instead of hardcoding them.
Below is the snippet from `),Jt=a("code"),Ap=l("examples/by_feature/deepspeed_with_config_support.py"),Tp=l(" showing how to fill these:"),In=c(),h(ps.$$.fragment),An=c(),ye=a("p"),Rp=l("a. Note that this needs to be done before call to "),Kt=a("code"),Lp=l("accelerator.prepare"),Np=l("."),Tn=c(),Js=a("p"),Zp=l("b. If there are mismatches between the values given in the DeepSpeed config file and the values given in the code, an error will be thrown."),Rn=c(),E=a("p"),Fp=l("c. If there are fields with "),Qt=a("code"),Mp=l("auto"),Hp=l(" value whose value isn\u2019t provided to "),Xt=a("code"),Wp=l("accelerator.state.deepspeed_plugin.deepspeed_config_process"),Up=l(`, an error will be thrown.
So, make sure to fill all the `),ea=a("code"),Bp=l("auto"),Gp=l(" fields in the DeepSpeed config file before calling "),sa=a("code"),Vp=l("accelerator.prepare"),Yp=l("."),Ln=c(),J=a("h2"),qe=a("a"),ta=a("span"),h(rs.$$.fragment),Jp=c(),aa=a("span"),Kp=l("Saving and loading"),Nn=c(),$e=a("ol"),na=a("li"),oa=a("p"),Qp=l("Saving and loading of models is unchanged for ZeRO Stage-1 and Stage-2."),Xp=c(),v=a("li"),is=a("p"),er=l("under ZeRO Stage-3, "),la=a("code"),sr=l("state_dict"),tr=l(` contains just the placeholders since the model weights are partitioned across multiple GPUs.
ZeRO Stage-3 has 2 options:`),ar=c(),$=a("p"),nr=l("a. Saving the entire 16bit model weights to directly load later on using "),pa=a("code"),or=l("model.load_state_dict(torch.load(pytorch_model.bin))"),lr=l(`.
For this, either set `),ra=a("code"),pr=l("zero_optimization.stage3_gather_16bit_weights_on_model_save"),rr=l(` to True in DeepSpeed Config file or set
`),ia=a("code"),ir=l("zero3_save_16bit_model"),cr=l(` to True in DeepSpeed Plugin.
`),ca=a("strong"),ur=l("Note that this option requires consolidation of the weights on one GPU it can be slow and memory demanding, so only use this feature when needed."),dr=l(`
Below is the snippet from `),ua=a("code"),hr=l("examples/by_feature/deepspeed_with_config_support.py"),_r=l(" showing this:"),fr=c(),h(cs.$$.fragment),mr=c(),K=a("p"),gr=l("b. To get 32bit weights, first save the model using "),da=a("code"),wr=l("model.save_checkpoint()"),vr=l(`.
Below is the snippet from `),ha=a("code"),jr=l("examples/by_feature/deepspeed_with_config_support.py"),br=l(" showing this:"),yr=c(),h(us.$$.fragment),qr=c(),Q=a("p"),$r=l("This will create ZeRO model and optimizer partitions along with "),_a=a("code"),Er=l("zero_to_fp32.py"),zr=l(` script in checkpoint directory.
One can use this script to do offline consolidation.`),kr=a("br"),Sr=l(`
It requires no configuration files or GPUs. Here is an example of its usage:`),Dr=c(),h(ds.$$.fragment),Or=c(),fa=a("p"),Pr=l("To get 32bit model for saving/inference, one can do the following:"),xr=c(),h(hs.$$.fragment),Cr=c(),ma=a("p"),Ir=l("If only interested in state_dict, one can do the following:"),Ar=c(),h(_s.$$.fragment),Tr=c(),ga=a("p"),Rr=l("Note that all these functions require ~2x memory (general RAM) of the size of the final checkpoint."),Zn=c(),X=a("h2"),Ee=a("a"),wa=a("span"),h(fs.$$.fragment),Lr=c(),va=a("span"),Nr=l("ZeRO Inference"),Fn=l(`

DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. 
It uses the same ZeRO protocol as training, but it doesn't use an optimizer and a lr scheduler and only stage 3 is relevant.
With accelerate integration, one has to just prepare model and dataloader as shown below:

	`),h(ms.$$.fragment),Mn=c(),ee=a("h2"),ze=a("a"),ja=a("span"),h(gs.$$.fragment),Zr=c(),ba=a("span"),Fr=l("Few caveats to be aware of"),Hn=c(),I=a("ol"),ya=a("li"),Mr=l("Current integration doesn\u2019t support Pipeline Parallelism of DeepSpeed."),Hr=c(),ws=a("li"),Wr=l("Current integration doesn\u2019t support "),qa=a("code"),Ur=l("mpu"),Br=l(", limiting the tensor parallelism which is supported in Megatron-LM."),Gr=c(),vs=a("li"),Vr=l("Current integration doesn\u2019t support multiple models for a given "),$a=a("code"),Yr=l("accelerator"),Jr=l(" object."),Wn=c(),se=a("h2"),ke=a("a"),Ea=a("span"),h(js.$$.fragment),Kr=c(),za=a("span"),Qr=l("Internals"),Un=c(),x=a("div"),h(bs.$$.fragment),Xr=c(),ka=a("p"),ei=l("This plugin is used to integrate DeepSpeed."),si=c(),Se=a("div"),h(ys.$$.fragment),ti=c(),Sa=a("p"),ai=l("Process the DeepSpeed config with the values from the kwargs."),Bn=c(),te=a("div"),h(qs.$$.fragment),ni=c(),Da=a("p"),oi=l(`Dummy optimizer presents model parameters or param groups, this is primarily used to follow conventional training
loop when optimizer config is specified in the deepspeed config file.`),Gn=c(),ae=a("div"),h($s.$$.fragment),li=c(),Oa=a("p"),pi=l(`Dummy scheduler presents model parameters or param groups, this is primarily used to follow conventional training
loop when scheduler config is specified in the deepspeed config file.`),Vn=c(),ne=a("div"),h(Es.$$.fragment),ri=c(),Pa=a("p"),ii=l("Internal wrapper for deepspeed.runtime.engine.DeepSpeedEngine. This is used to follow conventional training loop."),Yn=c(),oe=a("div"),h(zs.$$.fragment),ci=c(),xa=a("p"),ui=l("Internal wrapper around a deepspeed optimizer."),Jn=c(),le=a("div"),h(ks.$$.fragment),di=c(),Ca=a("p"),hi=l("Internal wrapper around a deepspeed scheduler."),Kn=c(),pe=a("h2"),De=a("a"),Ia=a("span"),h(Ss.$$.fragment),_i=c(),Aa=a("span"),fi=l("Main DeepSpeed Resources"),Qn=c(),k=a("ul"),Ta=a("li"),Ds=a("a"),mi=l("Project\u2019s github"),gi=c(),Ra=a("li"),Os=a("a"),wi=l("Usage docs"),vi=c(),La=a("li"),Ps=a("a"),ji=l("API docs"),bi=c(),Na=a("li"),xs=a("a"),yi=l("Blog posts"),Xn=c(),Ks=a("p"),qi=l("Papers:"),eo=c(),A=a("ul"),Za=a("li"),Cs=a("a"),$i=l("ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),Ei=c(),Fa=a("li"),Is=a("a"),zi=l("ZeRO-Offload: Democratizing Billion-Scale Model Training"),ki=c(),Ma=a("li"),As=a("a"),Si=l("ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),so=c(),T=a("p"),Di=l("Finally, please, remember that, \u{1F917} "),Ha=a("code"),Oi=l("Accelerate"),Pi=l(` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),Ts=a("a"),xi=l("DeepSpeed GitHub"),Ci=l("."),this.h()},l(e){const r=ad('[data-svelte="svelte-1phssyn"]',document.head);Z=n(r,"META",{name:!0,content:!0}),r.forEach(t),Ua=u(e),F=n(e,"H1",{class:!0});var ao=o(F);re=n(ao,"A",{id:!0,class:!0,href:!0});var Ai=o(re);rt=n(Ai,"SPAN",{});var Ti=o(rt);_(xe.$$.fragment,Ti),Ti.forEach(t),Ai.forEach(t),Ro=u(ao),it=n(ao,"SPAN",{});var Ri=o(it);Lo=p(Ri,"DeepSpeed"),Ri.forEach(t),ao.forEach(t),Ba=u(e),ie=n(e,"P",{});var no=o(ie);No=p(no,`Training advanced deep learning models is challenging.
Beyond model design, model scientists also need to set up the state-of-the-art training techniques such as
distributed training, mixed precision, gradient accumulation, and checkpointing.
Yet still, scientists may not achieve the desired system performance and convergence rate.
Large model sizes are even more challenging: a large model easily runs out of memory with pure data parallelism and it is difficult to use model parallelism.
`),Ce=n(no,"A",{href:!0,rel:!0});var Li=o(Ce);Zo=p(Li,"DeepSpeed"),Li.forEach(t),Fo=p(no," addresses these challenges to accelerate model development and training."),no.forEach(t),Ga=u(e),ce=n(e,"P",{});var oo=o(ce);Mo=p(oo,"\u{1F917} Accelerate integrates "),Ie=n(oo,"A",{href:!0,rel:!0});var Ni=o(Ie);Ho=p(Ni,"DeepSpeed"),Ni.forEach(t),Wo=p(oo," via 2 options:"),oo.forEach(t),Va=u(e),ue=n(e,"OL",{});var lo=o(ue);M=n(lo,"LI",{});var Qs=o(M);Uo=p(Qs,"Integration of the DeepSpeed features via "),ct=n(Qs,"CODE",{});var Zi=o(ct);Bo=p(Zi,"deepspeed config file"),Zi.forEach(t),Go=p(Qs," specification in "),ut=n(Qs,"CODE",{});var Fi=o(ut);Vo=p(Fi,"accelerate config"),Fi.forEach(t),Yo=p(Qs,` . You just supply your custom config file or use our template. Most of
this document is focused on this feature. This supports all the core features of DeepSpeed and gives user a lot of flexibility.
User may have to change few lines of code depending on the config.`),Qs.forEach(t),Jo=u(lo),Ae=n(lo,"LI",{});var po=o(Ae);Ko=p(po,"Integration via "),dt=n(po,"CODE",{});var Mi=o(dt);Qo=p(Mi,"deepspeed_plugin"),Mi.forEach(t),Xo=p(po,`.This supports subset of the DeepSpeed features and uses default options for the rest of the configurations.
User need not change any code and is good for those who are fine with most of the default settings of DeepSpeed.`),po.forEach(t),lo.forEach(t),Ya=u(e),H=n(e,"H2",{class:!0});var ro=o(H);de=n(ro,"A",{id:!0,class:!0,href:!0});var Hi=o(de);ht=n(Hi,"SPAN",{});var Wi=o(ht);_(Te.$$.fragment,Wi),Wi.forEach(t),Hi.forEach(t),el=u(ro),_t=n(ro,"SPAN",{});var Ui=o(_t);sl=p(Ui,"What is integrated?"),Ui.forEach(t),ro.forEach(t),Ja=u(e),Ls=n(e,"P",{});var Bi=o(Ls);tl=p(Bi,"Training:"),Bi.forEach(t),Ka=u(e),Ns=n(e,"OL",{});var Gi=o(Ns);ft=n(Gi,"LI",{});var Vi=o(ft);al=p(Vi,"DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 with ZeRO-Infinity (CPU and NVME offload)."),Vi.forEach(t),Gi.forEach(t),Qa=u(e),Zs=n(e,"P",{});var Yi=o(Zs);nl=p(Yi,"Inference:"),Yi.forEach(t),Xa=u(e),Fs=n(e,"OL",{});var Ji=o(Fs);Re=n(Ji,"LI",{});var io=o(Re);ol=p(io,`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),Ms=n(io,"A",{href:!0});var Ki=o(Ms);ll=p(Ki,"deepspeed-zero-inference"),Ki.forEach(t),pl=p(io,"."),io.forEach(t),Ji.forEach(t),en=u(e),W=n(e,"H2",{class:!0});var co=o(W);he=n(co,"A",{id:!0,class:!0,href:!0});var Qi=o(he);mt=n(Qi,"SPAN",{});var Xi=o(mt);_(Le.$$.fragment,Xi),Xi.forEach(t),Qi.forEach(t),rl=u(co),gt=n(co,"SPAN",{});var ec=o(gt);il=p(ec,"How it works?"),ec.forEach(t),co.forEach(t),sn=u(e),U=n(e,"P",{});var Wa=o(U);wt=n(Wa,"STRONG",{});var sc=o(wt);cl=p(sc,"Pre-Requisites"),sc.forEach(t),ul=p(Wa,": Install DeepSpeed version >=0.6.5. Please refer to the "),Ne=n(Wa,"A",{href:!0,rel:!0});var tc=o(Ne);dl=p(tc,"DeepSpeed Insallation details"),tc.forEach(t),hl=p(Wa,`
for more information.`),Wa.forEach(t),tn=u(e),C=n(e,"P",{});var Xs=o(C);_l=p(Xs,"We will first look at easy to use integration via "),vt=n(Xs,"CODE",{});var ac=o(vt);fl=p(ac,"deepspeed_plugin"),ac.forEach(t),ml=p(Xs,`.
Followed by more flexible and feature rich `),jt=n(Xs,"CODE",{});var nc=o(jt);gl=p(nc,"deepspeed config file"),nc.forEach(t),wl=p(Xs," integration."),Xs.forEach(t),an=u(e),B=n(e,"H3",{class:!0});var uo=o(B);_e=n(uo,"A",{id:!0,class:!0,href:!0});var oc=o(_e);bt=n(oc,"SPAN",{});var lc=o(bt);_(Ze.$$.fragment,lc),lc.forEach(t),oc.forEach(t),vl=u(uo),yt=n(uo,"SPAN",{});var pc=o(yt);jl=p(pc,"Accelerate DeepSpeed Plugin"),pc.forEach(t),uo.forEach(t),nn=p(e,`

On your machine(s) just run:

	`),_(Fe.$$.fragment,e),on=u(e),Hs=n(e,"P",{});var rc=o(Hs);bl=p(rc,`and answer the questions asked. It will ask whether you want to use a config file for deepspeed to which you answer no and answer the following questions.
This will generate a config file that will be used automatically to properly set the
default options when doing`),rc.forEach(t),ln=u(e),_(Me.$$.fragment,e),pn=u(e),fe=n(e,"P",{});var ho=o(fe);yl=p(ho,"For instance, here is how you would run the NLP example "),qt=n(ho,"CODE",{});var ic=o(qt);ql=p(ic,"examples/by_feature/deepspeed_with_config_support.py"),ic.forEach(t),$l=p(ho," (from the root of the repo) with DeepSpeed Plugin:"),ho.forEach(t),rn=u(e),Ws=n(e,"P",{});var cc=o(Ws);$t=n(cc,"STRONG",{});var uc=o($t);El=p(uc,"ZeRO Stage-2 DeepSpeed Plugin Example"),uc.forEach(t),cc.forEach(t),cn=u(e),_(He.$$.fragment,e),un=u(e),_(We.$$.fragment,e),dn=u(e),Us=n(e,"P",{});var dc=o(Us);Et=n(dc,"STRONG",{});var hc=o(Et);zl=p(hc,"ZeRO Stage-3 with CPU Offload DeepSpeed Plugin Example"),hc.forEach(t),dc.forEach(t),hn=u(e),_(Ue.$$.fragment,e),_n=u(e),_(Be.$$.fragment,e),fn=u(e),me=n(e,"P",{});var _o=o(me);kl=p(_o,"Currently, "),zt=n(_o,"CODE",{});var _c=o(zt);Sl=p(_c,"Accelerate"),_c.forEach(t),Dl=p(_o," supports following config through the CLI:"),_o.forEach(t),mn=u(e),_(Ge.$$.fragment,e),gn=u(e),G=n(e,"H3",{class:!0});var fo=o(G);ge=n(fo,"A",{id:!0,class:!0,href:!0});var fc=o(ge);kt=n(fc,"SPAN",{});var mc=o(kt);_(Ve.$$.fragment,mc),mc.forEach(t),fc.forEach(t),Ol=u(fo),St=n(fo,"SPAN",{});var gc=o(St);Pl=p(gc,"DeepSpeed Config File"),gc.forEach(t),fo.forEach(t),wn=p(e,`

On your machine(s) just run:

	`),_(Ye.$$.fragment,e),vn=u(e),Bs=n(e,"P",{});var wc=o(Bs);xl=p(wc,`and answer the questions asked. It will ask whether you want to use a config file for deepspeed to which you answer yes
and provide the path to the deepspeed config file.
This will generate a config file that will be used automatically to properly set the
default options when doing`),wc.forEach(t),jn=u(e),_(Je.$$.fragment,e),bn=u(e),we=n(e,"P",{});var mo=o(we);Cl=p(mo,"For instance, here is how you would run the NLP example "),Dt=n(mo,"CODE",{});var vc=o(Dt);Il=p(vc,"examples/by_feature/deepspeed_with_config_support.py"),vc.forEach(t),Al=p(mo," (from the root of the repo) with DeepSpeed Config File:"),mo.forEach(t),yn=u(e),Gs=n(e,"P",{});var jc=o(Gs);Ot=n(jc,"STRONG",{});var bc=o(Ot);Tl=p(bc,"ZeRO Stage-2 DeepSpeed Config File Example"),bc.forEach(t),jc.forEach(t),qn=u(e),_(Ke.$$.fragment,e),$n=u(e),ve=n(e,"P",{});var go=o(ve);Rl=p(go,"with the contents of "),Pt=n(go,"CODE",{});var yc=o(Pt);Ll=p(yc,"zero_stage2_config.json"),yc.forEach(t),Nl=p(go," being:"),go.forEach(t),En=u(e),_(Qe.$$.fragment,e),zn=u(e),_(Xe.$$.fragment,e),kn=u(e),Vs=n(e,"P",{});var qc=o(Vs);xt=n(qc,"STRONG",{});var $c=o(xt);Zl=p($c,"ZeRO Stage-3 with CPU offload DeepSpeed Config File Example"),$c.forEach(t),qc.forEach(t),Sn=u(e),_(es.$$.fragment,e),Dn=u(e),je=n(e,"P",{});var wo=o(je);Fl=p(wo,"with the contents of "),Ct=n(wo,"CODE",{});var Ec=o(Ct);Ml=p(Ec,"zero_stage3_offload_config.json"),Ec.forEach(t),Hl=p(wo," being:"),wo.forEach(t),On=u(e),_(ss.$$.fragment,e),Pn=u(e),_(ts.$$.fragment,e),xn=u(e),Ys=n(e,"P",{});var zc=o(Ys);It=n(zc,"STRONG",{});var kc=o(It);Wl=p(kc,"Important code changes when using DeepSpeed Config File"),kc.forEach(t),zc.forEach(t),Cn=u(e),be=n(e,"OL",{});var vo=o(be);y=n(vo,"LI",{});var S=o(y);V=n(S,"P",{});var et=o(V);Ul=p(et,`DeepSpeed Optimizers and Schedulers. For more information on these,
see the `),as=n(et,"A",{href:!0,rel:!0});var Sc=o(as);Bl=p(Sc,"DeepSpeed Optimizers"),Sc.forEach(t),Gl=p(et," and "),ns=n(et,"A",{href:!0,rel:!0});var Dc=o(ns);Vl=p(Dc,"DeepSpeed Schedulers"),Dc.forEach(t),Yl=p(et,` documentation.
We will look at the changes needed in the code when using these.`),et.forEach(t),Jl=u(S),q=n(S,"P",{});var D=o(q);Kl=p(D,"a. DS Optim + DS Scheduler: The case when both "),At=n(D,"CODE",{});var Oc=o(At);Ql=p(Oc,"optimizer"),Oc.forEach(t),Xl=p(D," and "),Tt=n(D,"CODE",{});var Pc=o(Tt);ep=p(Pc,"scheduler"),Pc.forEach(t),sp=p(D,` keys present in the DeepSpeed config file.
In this situation, those will be used and user has to use `),Rt=n(D,"CODE",{});var xc=o(Rt);tp=p(xc,"accelerate.utils.DummyOptim"),xc.forEach(t),ap=p(D," and "),Lt=n(D,"CODE",{});var Cc=o(Lt);np=p(Cc,"accelerate.utils.DummyScheduler"),Cc.forEach(t),op=p(D,` to replace the PyTorch/Custom optimizers and schedulers in their code.
Below is the snippet from `),Nt=n(D,"CODE",{});var Ic=o(Nt);lp=p(Ic,"examples/by_feature/deepspeed_with_config_support.py"),Ic.forEach(t),pp=p(D," showing this:"),D.forEach(t),rp=u(S),_(os.$$.fragment,S),ip=u(S),z=n(S,"P",{});var R=o(z);cp=p(R,"b. Custom Optim + Custom Scheduler: The case when both "),Zt=n(R,"CODE",{});var Ac=o(Zt);up=p(Ac,"optimizer"),Ac.forEach(t),dp=p(R," and "),Ft=n(R,"CODE",{});var Tc=o(Ft);hp=p(Tc,"scheduler"),Tc.forEach(t),_p=p(R,` keys are absent in the DeepSpeed config file.
In this situation, no code changes are needed from the user and this is the case when using integration via DeepSpeed Plugin.
In the above example we can see that the code reamins unchanged if the `),Mt=n(R,"CODE",{});var Rc=o(Mt);fp=p(Rc,"optimizer"),Rc.forEach(t),mp=p(R," and "),Ht=n(R,"CODE",{});var Lc=o(Ht);gp=p(Lc,"scheduler"),Lc.forEach(t),wp=p(R," keys are absent in the DeepSpeed config file."),R.forEach(t),vp=u(S),Y=n(S,"P",{});var st=o(Y);jp=p(st,"c. Custom Optim + DS Scheduler: The case when only "),Wt=n(st,"CODE",{});var Nc=o(Wt);bp=p(Nc,"scheduler"),Nc.forEach(t),yp=p(st,` key is present in the DeepSpeed config file.
In this situation, user has to use `),Ut=n(st,"CODE",{});var Zc=o(Ut);qp=p(Zc,"accelerate.utils.DummyScheduler"),Zc.forEach(t),$p=p(st," to replace the PyTorch/Custom scheduler in their code."),st.forEach(t),Ep=u(S),ls=n(S,"P",{});var jo=o(ls);zp=p(jo,"d. DS Optim + Custom Scheduler: The case when only "),Bt=n(jo,"CODE",{});var Fc=o(Bt);kp=p(Fc,"optimizer"),Fc.forEach(t),Sp=p(jo,` key is present in the DeepSpeed config file.
This will result in an error because one can only use DS Scheduler when using DS Optim.`),jo.forEach(t),S.forEach(t),Dp=u(vo),Gt=n(vo,"LI",{});var Mc=o(Gt);P=n(Mc,"P",{});var Oe=o(P);Op=p(Oe,"Notice the "),Vt=n(Oe,"CODE",{});var Hc=o(Vt);Pp=p(Hc,"auto"),Hc.forEach(t),xp=p(Oe,` values in the above example DeepSpeed config files.
These have to specified by the user in the code by running `),Yt=n(Oe,"CODE",{});var Wc=o(Yt);Cp=p(Wc,"accelerator.state.deepspeed_plugin.deepspeed_config_process(**kwargs)"),Wc.forEach(t),Ip=p(Oe,`.
This allows user more flexibilty to fill these fields based on the code instead of hardcoding them.
Below is the snippet from `),Jt=n(Oe,"CODE",{});var Uc=o(Jt);Ap=p(Uc,"examples/by_feature/deepspeed_with_config_support.py"),Uc.forEach(t),Tp=p(Oe," showing how to fill these:"),Oe.forEach(t),Mc.forEach(t),vo.forEach(t),In=u(e),_(ps.$$.fragment,e),An=u(e),ye=n(e,"P",{});var bo=o(ye);Rp=p(bo,"a. Note that this needs to be done before call to "),Kt=n(bo,"CODE",{});var Bc=o(Kt);Lp=p(Bc,"accelerator.prepare"),Bc.forEach(t),Np=p(bo,"."),bo.forEach(t),Tn=u(e),Js=n(e,"P",{});var Gc=o(Js);Zp=p(Gc,"b. If there are mismatches between the values given in the DeepSpeed config file and the values given in the code, an error will be thrown."),Gc.forEach(t),Rn=u(e),E=n(e,"P",{});var L=o(E);Fp=p(L,"c. If there are fields with "),Qt=n(L,"CODE",{});var Vc=o(Qt);Mp=p(Vc,"auto"),Vc.forEach(t),Hp=p(L," value whose value isn\u2019t provided to "),Xt=n(L,"CODE",{});var Yc=o(Xt);Wp=p(Yc,"accelerator.state.deepspeed_plugin.deepspeed_config_process"),Yc.forEach(t),Up=p(L,`, an error will be thrown.
So, make sure to fill all the `),ea=n(L,"CODE",{});var Jc=o(ea);Bp=p(Jc,"auto"),Jc.forEach(t),Gp=p(L," fields in the DeepSpeed config file before calling "),sa=n(L,"CODE",{});var Kc=o(sa);Vp=p(Kc,"accelerator.prepare"),Kc.forEach(t),Yp=p(L,"."),L.forEach(t),Ln=u(e),J=n(e,"H2",{class:!0});var yo=o(J);qe=n(yo,"A",{id:!0,class:!0,href:!0});var Qc=o(qe);ta=n(Qc,"SPAN",{});var Xc=o(ta);_(rs.$$.fragment,Xc),Xc.forEach(t),Qc.forEach(t),Jp=u(yo),aa=n(yo,"SPAN",{});var eu=o(aa);Kp=p(eu,"Saving and loading"),eu.forEach(t),yo.forEach(t),Nn=u(e),$e=n(e,"OL",{});var qo=o($e);na=n(qo,"LI",{});var su=o(na);oa=n(su,"P",{});var tu=o(oa);Qp=p(tu,"Saving and loading of models is unchanged for ZeRO Stage-1 and Stage-2."),tu.forEach(t),su.forEach(t),Xp=u(qo),v=n(qo,"LI",{});var j=o(v);is=n(j,"P",{});var $o=o(is);er=p($o,"under ZeRO Stage-3, "),la=n($o,"CODE",{});var au=o(la);sr=p(au,"state_dict"),au.forEach(t),tr=p($o,` contains just the placeholders since the model weights are partitioned across multiple GPUs.
ZeRO Stage-3 has 2 options:`),$o.forEach(t),ar=u(j),$=n(j,"P",{});var O=o($);nr=p(O,"a. Saving the entire 16bit model weights to directly load later on using "),pa=n(O,"CODE",{});var nu=o(pa);or=p(nu,"model.load_state_dict(torch.load(pytorch_model.bin))"),nu.forEach(t),lr=p(O,`.
For this, either set `),ra=n(O,"CODE",{});var ou=o(ra);pr=p(ou,"zero_optimization.stage3_gather_16bit_weights_on_model_save"),ou.forEach(t),rr=p(O,` to True in DeepSpeed Config file or set
`),ia=n(O,"CODE",{});var lu=o(ia);ir=p(lu,"zero3_save_16bit_model"),lu.forEach(t),cr=p(O,` to True in DeepSpeed Plugin.
`),ca=n(O,"STRONG",{});var pu=o(ca);ur=p(pu,"Note that this option requires consolidation of the weights on one GPU it can be slow and memory demanding, so only use this feature when needed."),pu.forEach(t),dr=p(O,`
Below is the snippet from `),ua=n(O,"CODE",{});var ru=o(ua);hr=p(ru,"examples/by_feature/deepspeed_with_config_support.py"),ru.forEach(t),_r=p(O," showing this:"),O.forEach(t),fr=u(j),_(cs.$$.fragment,j),mr=u(j),K=n(j,"P",{});var tt=o(K);gr=p(tt,"b. To get 32bit weights, first save the model using "),da=n(tt,"CODE",{});var iu=o(da);wr=p(iu,"model.save_checkpoint()"),iu.forEach(t),vr=p(tt,`.
Below is the snippet from `),ha=n(tt,"CODE",{});var cu=o(ha);jr=p(cu,"examples/by_feature/deepspeed_with_config_support.py"),cu.forEach(t),br=p(tt," showing this:"),tt.forEach(t),yr=u(j),_(us.$$.fragment,j),qr=u(j),Q=n(j,"P",{});var at=o(Q);$r=p(at,"This will create ZeRO model and optimizer partitions along with "),_a=n(at,"CODE",{});var uu=o(_a);Er=p(uu,"zero_to_fp32.py"),uu.forEach(t),zr=p(at,` script in checkpoint directory.
One can use this script to do offline consolidation.`),kr=n(at,"BR",{}),Sr=p(at,`
It requires no configuration files or GPUs. Here is an example of its usage:`),at.forEach(t),Dr=u(j),_(ds.$$.fragment,j),Or=u(j),fa=n(j,"P",{});var du=o(fa);Pr=p(du,"To get 32bit model for saving/inference, one can do the following:"),du.forEach(t),xr=u(j),_(hs.$$.fragment,j),Cr=u(j),ma=n(j,"P",{});var hu=o(ma);Ir=p(hu,"If only interested in state_dict, one can do the following:"),hu.forEach(t),Ar=u(j),_(_s.$$.fragment,j),Tr=u(j),ga=n(j,"P",{});var _u=o(ga);Rr=p(_u,"Note that all these functions require ~2x memory (general RAM) of the size of the final checkpoint."),_u.forEach(t),j.forEach(t),qo.forEach(t),Zn=u(e),X=n(e,"H2",{class:!0});var Eo=o(X);Ee=n(Eo,"A",{id:!0,class:!0,href:!0});var fu=o(Ee);wa=n(fu,"SPAN",{});var mu=o(wa);_(fs.$$.fragment,mu),mu.forEach(t),fu.forEach(t),Lr=u(Eo),va=n(Eo,"SPAN",{});var gu=o(va);Nr=p(gu,"ZeRO Inference"),gu.forEach(t),Eo.forEach(t),Fn=p(e,`

DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. 
It uses the same ZeRO protocol as training, but it doesn't use an optimizer and a lr scheduler and only stage 3 is relevant.
With accelerate integration, one has to just prepare model and dataloader as shown below:

	`),_(ms.$$.fragment,e),Mn=u(e),ee=n(e,"H2",{class:!0});var zo=o(ee);ze=n(zo,"A",{id:!0,class:!0,href:!0});var wu=o(ze);ja=n(wu,"SPAN",{});var vu=o(ja);_(gs.$$.fragment,vu),vu.forEach(t),wu.forEach(t),Zr=u(zo),ba=n(zo,"SPAN",{});var ju=o(ba);Fr=p(ju,"Few caveats to be aware of"),ju.forEach(t),zo.forEach(t),Hn=u(e),I=n(e,"OL",{});var nt=o(I);ya=n(nt,"LI",{});var bu=o(ya);Mr=p(bu,"Current integration doesn\u2019t support Pipeline Parallelism of DeepSpeed."),bu.forEach(t),Hr=u(nt),ws=n(nt,"LI",{});var ko=o(ws);Wr=p(ko,"Current integration doesn\u2019t support "),qa=n(ko,"CODE",{});var yu=o(qa);Ur=p(yu,"mpu"),yu.forEach(t),Br=p(ko,", limiting the tensor parallelism which is supported in Megatron-LM."),ko.forEach(t),Gr=u(nt),vs=n(nt,"LI",{});var So=o(vs);Vr=p(So,"Current integration doesn\u2019t support multiple models for a given "),$a=n(So,"CODE",{});var qu=o($a);Yr=p(qu,"accelerator"),qu.forEach(t),Jr=p(So," object."),So.forEach(t),nt.forEach(t),Wn=u(e),se=n(e,"H2",{class:!0});var Do=o(se);ke=n(Do,"A",{id:!0,class:!0,href:!0});var $u=o(ke);Ea=n($u,"SPAN",{});var Eu=o(Ea);_(js.$$.fragment,Eu),Eu.forEach(t),$u.forEach(t),Kr=u(Do),za=n(Do,"SPAN",{});var zu=o(za);Qr=p(zu,"Internals"),zu.forEach(t),Do.forEach(t),Un=u(e),x=n(e,"DIV",{class:!0});var ot=o(x);_(bs.$$.fragment,ot),Xr=u(ot),ka=n(ot,"P",{});var ku=o(ka);ei=p(ku,"This plugin is used to integrate DeepSpeed."),ku.forEach(t),si=u(ot),Se=n(ot,"DIV",{class:!0});var Oo=o(Se);_(ys.$$.fragment,Oo),ti=u(Oo),Sa=n(Oo,"P",{});var Su=o(Sa);ai=p(Su,"Process the DeepSpeed config with the values from the kwargs."),Su.forEach(t),Oo.forEach(t),ot.forEach(t),Bn=u(e),te=n(e,"DIV",{class:!0});var Po=o(te);_(qs.$$.fragment,Po),ni=u(Po),Da=n(Po,"P",{});var Du=o(Da);oi=p(Du,`Dummy optimizer presents model parameters or param groups, this is primarily used to follow conventional training
loop when optimizer config is specified in the deepspeed config file.`),Du.forEach(t),Po.forEach(t),Gn=u(e),ae=n(e,"DIV",{class:!0});var xo=o(ae);_($s.$$.fragment,xo),li=u(xo),Oa=n(xo,"P",{});var Ou=o(Oa);pi=p(Ou,`Dummy scheduler presents model parameters or param groups, this is primarily used to follow conventional training
loop when scheduler config is specified in the deepspeed config file.`),Ou.forEach(t),xo.forEach(t),Vn=u(e),ne=n(e,"DIV",{class:!0});var Co=o(ne);_(Es.$$.fragment,Co),ri=u(Co),Pa=n(Co,"P",{});var Pu=o(Pa);ii=p(Pu,"Internal wrapper for deepspeed.runtime.engine.DeepSpeedEngine. This is used to follow conventional training loop."),Pu.forEach(t),Co.forEach(t),Yn=u(e),oe=n(e,"DIV",{class:!0});var Io=o(oe);_(zs.$$.fragment,Io),ci=u(Io),xa=n(Io,"P",{});var xu=o(xa);ui=p(xu,"Internal wrapper around a deepspeed optimizer."),xu.forEach(t),Io.forEach(t),Jn=u(e),le=n(e,"DIV",{class:!0});var Ao=o(le);_(ks.$$.fragment,Ao),di=u(Ao),Ca=n(Ao,"P",{});var Cu=o(Ca);hi=p(Cu,"Internal wrapper around a deepspeed scheduler."),Cu.forEach(t),Ao.forEach(t),Kn=u(e),pe=n(e,"H2",{class:!0});var To=o(pe);De=n(To,"A",{id:!0,class:!0,href:!0});var Iu=o(De);Ia=n(Iu,"SPAN",{});var Au=o(Ia);_(Ss.$$.fragment,Au),Au.forEach(t),Iu.forEach(t),_i=u(To),Aa=n(To,"SPAN",{});var Tu=o(Aa);fi=p(Tu,"Main DeepSpeed Resources"),Tu.forEach(t),To.forEach(t),Qn=u(e),k=n(e,"UL",{});var Pe=o(k);Ta=n(Pe,"LI",{});var Ru=o(Ta);Ds=n(Ru,"A",{href:!0,rel:!0});var Lu=o(Ds);mi=p(Lu,"Project\u2019s github"),Lu.forEach(t),Ru.forEach(t),gi=u(Pe),Ra=n(Pe,"LI",{});var Nu=o(Ra);Os=n(Nu,"A",{href:!0,rel:!0});var Zu=o(Os);wi=p(Zu,"Usage docs"),Zu.forEach(t),Nu.forEach(t),vi=u(Pe),La=n(Pe,"LI",{});var Fu=o(La);Ps=n(Fu,"A",{href:!0,rel:!0});var Mu=o(Ps);ji=p(Mu,"API docs"),Mu.forEach(t),Fu.forEach(t),bi=u(Pe),Na=n(Pe,"LI",{});var Hu=o(Na);xs=n(Hu,"A",{href:!0,rel:!0});var Wu=o(xs);yi=p(Wu,"Blog posts"),Wu.forEach(t),Hu.forEach(t),Pe.forEach(t),Xn=u(e),Ks=n(e,"P",{});var Uu=o(Ks);qi=p(Uu,"Papers:"),Uu.forEach(t),eo=u(e),A=n(e,"UL",{});var lt=o(A);Za=n(lt,"LI",{});var Bu=o(Za);Cs=n(Bu,"A",{href:!0,rel:!0});var Gu=o(Cs);$i=p(Gu,"ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),Gu.forEach(t),Bu.forEach(t),Ei=u(lt),Fa=n(lt,"LI",{});var Vu=o(Fa);Is=n(Vu,"A",{href:!0,rel:!0});var Yu=o(Is);zi=p(Yu,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),Yu.forEach(t),Vu.forEach(t),ki=u(lt),Ma=n(lt,"LI",{});var Ju=o(Ma);As=n(Ju,"A",{href:!0,rel:!0});var Ku=o(As);Si=p(Ku,"ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),Ku.forEach(t),Ju.forEach(t),lt.forEach(t),so=u(e),T=n(e,"P",{});var pt=o(T);Di=p(pt,"Finally, please, remember that, \u{1F917} "),Ha=n(pt,"CODE",{});var Qu=o(Ha);Oi=p(Qu,"Accelerate"),Qu.forEach(t),Pi=p(pt,` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),Ts=n(pt,"A",{href:!0,rel:!0});var Xu=o(Ts);xi=p(Xu,"DeepSpeed GitHub"),Xu.forEach(t),Ci=p(pt,"."),pt.forEach(t),this.h()},h(){d(Z,"name","hf:doc:metadata"),d(Z,"content",JSON.stringify(pd)),d(re,"id","deepspeed"),d(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(re,"href","#deepspeed"),d(F,"class","relative group"),d(Ce,"href","https://www.deepspeed.ai/"),d(Ce,"rel","nofollow"),d(Ie,"href","https://github.com/microsoft/DeepSpeed"),d(Ie,"rel","nofollow"),d(de,"id","what-is-integrated"),d(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(de,"href","#what-is-integrated"),d(H,"class","relative group"),d(Ms,"href","#deepspeed-zero-inference"),d(he,"id","how-it-works"),d(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(he,"href","#how-it-works"),d(W,"class","relative group"),d(Ne,"href","https://github.com/microsoft/DeepSpeed#installation"),d(Ne,"rel","nofollow"),d(_e,"id","accelerate-deepspeed-plugin"),d(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(_e,"href","#accelerate-deepspeed-plugin"),d(B,"class","relative group"),d(ge,"id","deepspeed-config-file"),d(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ge,"href","#deepspeed-config-file"),d(G,"class","relative group"),d(as,"href","https://deepspeed.readthedocs.io/en/latest/optimizers.html"),d(as,"rel","nofollow"),d(ns,"href","https://deepspeed.readthedocs.io/en/latest/schedulers.html"),d(ns,"rel","nofollow"),d(qe,"id","saving-and-loading"),d(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(qe,"href","#saving-and-loading"),d(J,"class","relative group"),d(Ee,"id","zero-inference"),d(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ee,"href","#zero-inference"),d(X,"class","relative group"),d(ze,"id","few-caveats-to-be-aware-of"),d(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ze,"href","#few-caveats-to-be-aware-of"),d(ee,"class","relative group"),d(ke,"id","accelerate.DeepSpeedPlugin"),d(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ke,"href","#accelerate.DeepSpeedPlugin"),d(se,"class","relative group"),d(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(De,"id","main-deepspeed-resources"),d(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(De,"href","#main-deepspeed-resources"),d(pe,"class","relative group"),d(Ds,"href","https://github.com/microsoft/deepspeed"),d(Ds,"rel","nofollow"),d(Os,"href","https://www.deepspeed.ai/getting-started/"),d(Os,"rel","nofollow"),d(Ps,"href","https://deepspeed.readthedocs.io/en/latest/index.html"),d(Ps,"rel","nofollow"),d(xs,"href","https://www.microsoft.com/en-us/research/search/?q=deepspeed"),d(xs,"rel","nofollow"),d(Cs,"href","https://arxiv.org/abs/1910.02054"),d(Cs,"rel","nofollow"),d(Is,"href","https://arxiv.org/abs/2101.06840"),d(Is,"rel","nofollow"),d(As,"href","https://arxiv.org/abs/2104.07857"),d(As,"rel","nofollow"),d(Ts,"href","https://github.com/microsoft/DeepSpeed/issues"),d(Ts,"rel","nofollow")},m(e,r){s(document.head,Z),i(e,Ua,r),i(e,F,r),s(F,re),s(re,rt),f(xe,rt,null),s(F,Ro),s(F,it),s(it,Lo),i(e,Ba,r),i(e,ie,r),s(ie,No),s(ie,Ce),s(Ce,Zo),s(ie,Fo),i(e,Ga,r),i(e,ce,r),s(ce,Mo),s(ce,Ie),s(Ie,Ho),s(ce,Wo),i(e,Va,r),i(e,ue,r),s(ue,M),s(M,Uo),s(M,ct),s(ct,Bo),s(M,Go),s(M,ut),s(ut,Vo),s(M,Yo),s(ue,Jo),s(ue,Ae),s(Ae,Ko),s(Ae,dt),s(dt,Qo),s(Ae,Xo),i(e,Ya,r),i(e,H,r),s(H,de),s(de,ht),f(Te,ht,null),s(H,el),s(H,_t),s(_t,sl),i(e,Ja,r),i(e,Ls,r),s(Ls,tl),i(e,Ka,r),i(e,Ns,r),s(Ns,ft),s(ft,al),i(e,Qa,r),i(e,Zs,r),s(Zs,nl),i(e,Xa,r),i(e,Fs,r),s(Fs,Re),s(Re,ol),s(Re,Ms),s(Ms,ll),s(Re,pl),i(e,en,r),i(e,W,r),s(W,he),s(he,mt),f(Le,mt,null),s(W,rl),s(W,gt),s(gt,il),i(e,sn,r),i(e,U,r),s(U,wt),s(wt,cl),s(U,ul),s(U,Ne),s(Ne,dl),s(U,hl),i(e,tn,r),i(e,C,r),s(C,_l),s(C,vt),s(vt,fl),s(C,ml),s(C,jt),s(jt,gl),s(C,wl),i(e,an,r),i(e,B,r),s(B,_e),s(_e,bt),f(Ze,bt,null),s(B,vl),s(B,yt),s(yt,jl),i(e,nn,r),f(Fe,e,r),i(e,on,r),i(e,Hs,r),s(Hs,bl),i(e,ln,r),f(Me,e,r),i(e,pn,r),i(e,fe,r),s(fe,yl),s(fe,qt),s(qt,ql),s(fe,$l),i(e,rn,r),i(e,Ws,r),s(Ws,$t),s($t,El),i(e,cn,r),f(He,e,r),i(e,un,r),f(We,e,r),i(e,dn,r),i(e,Us,r),s(Us,Et),s(Et,zl),i(e,hn,r),f(Ue,e,r),i(e,_n,r),f(Be,e,r),i(e,fn,r),i(e,me,r),s(me,kl),s(me,zt),s(zt,Sl),s(me,Dl),i(e,mn,r),f(Ge,e,r),i(e,gn,r),i(e,G,r),s(G,ge),s(ge,kt),f(Ve,kt,null),s(G,Ol),s(G,St),s(St,Pl),i(e,wn,r),f(Ye,e,r),i(e,vn,r),i(e,Bs,r),s(Bs,xl),i(e,jn,r),f(Je,e,r),i(e,bn,r),i(e,we,r),s(we,Cl),s(we,Dt),s(Dt,Il),s(we,Al),i(e,yn,r),i(e,Gs,r),s(Gs,Ot),s(Ot,Tl),i(e,qn,r),f(Ke,e,r),i(e,$n,r),i(e,ve,r),s(ve,Rl),s(ve,Pt),s(Pt,Ll),s(ve,Nl),i(e,En,r),f(Qe,e,r),i(e,zn,r),f(Xe,e,r),i(e,kn,r),i(e,Vs,r),s(Vs,xt),s(xt,Zl),i(e,Sn,r),f(es,e,r),i(e,Dn,r),i(e,je,r),s(je,Fl),s(je,Ct),s(Ct,Ml),s(je,Hl),i(e,On,r),f(ss,e,r),i(e,Pn,r),f(ts,e,r),i(e,xn,r),i(e,Ys,r),s(Ys,It),s(It,Wl),i(e,Cn,r),i(e,be,r),s(be,y),s(y,V),s(V,Ul),s(V,as),s(as,Bl),s(V,Gl),s(V,ns),s(ns,Vl),s(V,Yl),s(y,Jl),s(y,q),s(q,Kl),s(q,At),s(At,Ql),s(q,Xl),s(q,Tt),s(Tt,ep),s(q,sp),s(q,Rt),s(Rt,tp),s(q,ap),s(q,Lt),s(Lt,np),s(q,op),s(q,Nt),s(Nt,lp),s(q,pp),s(y,rp),f(os,y,null),s(y,ip),s(y,z),s(z,cp),s(z,Zt),s(Zt,up),s(z,dp),s(z,Ft),s(Ft,hp),s(z,_p),s(z,Mt),s(Mt,fp),s(z,mp),s(z,Ht),s(Ht,gp),s(z,wp),s(y,vp),s(y,Y),s(Y,jp),s(Y,Wt),s(Wt,bp),s(Y,yp),s(Y,Ut),s(Ut,qp),s(Y,$p),s(y,Ep),s(y,ls),s(ls,zp),s(ls,Bt),s(Bt,kp),s(ls,Sp),s(be,Dp),s(be,Gt),s(Gt,P),s(P,Op),s(P,Vt),s(Vt,Pp),s(P,xp),s(P,Yt),s(Yt,Cp),s(P,Ip),s(P,Jt),s(Jt,Ap),s(P,Tp),i(e,In,r),f(ps,e,r),i(e,An,r),i(e,ye,r),s(ye,Rp),s(ye,Kt),s(Kt,Lp),s(ye,Np),i(e,Tn,r),i(e,Js,r),s(Js,Zp),i(e,Rn,r),i(e,E,r),s(E,Fp),s(E,Qt),s(Qt,Mp),s(E,Hp),s(E,Xt),s(Xt,Wp),s(E,Up),s(E,ea),s(ea,Bp),s(E,Gp),s(E,sa),s(sa,Vp),s(E,Yp),i(e,Ln,r),i(e,J,r),s(J,qe),s(qe,ta),f(rs,ta,null),s(J,Jp),s(J,aa),s(aa,Kp),i(e,Nn,r),i(e,$e,r),s($e,na),s(na,oa),s(oa,Qp),s($e,Xp),s($e,v),s(v,is),s(is,er),s(is,la),s(la,sr),s(is,tr),s(v,ar),s(v,$),s($,nr),s($,pa),s(pa,or),s($,lr),s($,ra),s(ra,pr),s($,rr),s($,ia),s(ia,ir),s($,cr),s($,ca),s(ca,ur),s($,dr),s($,ua),s(ua,hr),s($,_r),s(v,fr),f(cs,v,null),s(v,mr),s(v,K),s(K,gr),s(K,da),s(da,wr),s(K,vr),s(K,ha),s(ha,jr),s(K,br),s(v,yr),f(us,v,null),s(v,qr),s(v,Q),s(Q,$r),s(Q,_a),s(_a,Er),s(Q,zr),s(Q,kr),s(Q,Sr),s(v,Dr),f(ds,v,null),s(v,Or),s(v,fa),s(fa,Pr),s(v,xr),f(hs,v,null),s(v,Cr),s(v,ma),s(ma,Ir),s(v,Ar),f(_s,v,null),s(v,Tr),s(v,ga),s(ga,Rr),i(e,Zn,r),i(e,X,r),s(X,Ee),s(Ee,wa),f(fs,wa,null),s(X,Lr),s(X,va),s(va,Nr),i(e,Fn,r),f(ms,e,r),i(e,Mn,r),i(e,ee,r),s(ee,ze),s(ze,ja),f(gs,ja,null),s(ee,Zr),s(ee,ba),s(ba,Fr),i(e,Hn,r),i(e,I,r),s(I,ya),s(ya,Mr),s(I,Hr),s(I,ws),s(ws,Wr),s(ws,qa),s(qa,Ur),s(ws,Br),s(I,Gr),s(I,vs),s(vs,Vr),s(vs,$a),s($a,Yr),s(vs,Jr),i(e,Wn,r),i(e,se,r),s(se,ke),s(ke,Ea),f(js,Ea,null),s(se,Kr),s(se,za),s(za,Qr),i(e,Un,r),i(e,x,r),f(bs,x,null),s(x,Xr),s(x,ka),s(ka,ei),s(x,si),s(x,Se),f(ys,Se,null),s(Se,ti),s(Se,Sa),s(Sa,ai),i(e,Bn,r),i(e,te,r),f(qs,te,null),s(te,ni),s(te,Da),s(Da,oi),i(e,Gn,r),i(e,ae,r),f($s,ae,null),s(ae,li),s(ae,Oa),s(Oa,pi),i(e,Vn,r),i(e,ne,r),f(Es,ne,null),s(ne,ri),s(ne,Pa),s(Pa,ii),i(e,Yn,r),i(e,oe,r),f(zs,oe,null),s(oe,ci),s(oe,xa),s(xa,ui),i(e,Jn,r),i(e,le,r),f(ks,le,null),s(le,di),s(le,Ca),s(Ca,hi),i(e,Kn,r),i(e,pe,r),s(pe,De),s(De,Ia),f(Ss,Ia,null),s(pe,_i),s(pe,Aa),s(Aa,fi),i(e,Qn,r),i(e,k,r),s(k,Ta),s(Ta,Ds),s(Ds,mi),s(k,gi),s(k,Ra),s(Ra,Os),s(Os,wi),s(k,vi),s(k,La),s(La,Ps),s(Ps,ji),s(k,bi),s(k,Na),s(Na,xs),s(xs,yi),i(e,Xn,r),i(e,Ks,r),s(Ks,qi),i(e,eo,r),i(e,A,r),s(A,Za),s(Za,Cs),s(Cs,$i),s(A,Ei),s(A,Fa),s(Fa,Is),s(Is,zi),s(A,ki),s(A,Ma),s(Ma,As),s(As,Si),i(e,so,r),i(e,T,r),s(T,Di),s(T,Ha),s(Ha,Oi),s(T,Pi),s(T,Ts),s(Ts,xi),s(T,Ci),to=!0},p:nd,i(e){to||(m(xe.$$.fragment,e),m(Te.$$.fragment,e),m(Le.$$.fragment,e),m(Ze.$$.fragment,e),m(Fe.$$.fragment,e),m(Me.$$.fragment,e),m(He.$$.fragment,e),m(We.$$.fragment,e),m(Ue.$$.fragment,e),m(Be.$$.fragment,e),m(Ge.$$.fragment,e),m(Ve.$$.fragment,e),m(Ye.$$.fragment,e),m(Je.$$.fragment,e),m(Ke.$$.fragment,e),m(Qe.$$.fragment,e),m(Xe.$$.fragment,e),m(es.$$.fragment,e),m(ss.$$.fragment,e),m(ts.$$.fragment,e),m(os.$$.fragment,e),m(ps.$$.fragment,e),m(rs.$$.fragment,e),m(cs.$$.fragment,e),m(us.$$.fragment,e),m(ds.$$.fragment,e),m(hs.$$.fragment,e),m(_s.$$.fragment,e),m(fs.$$.fragment,e),m(ms.$$.fragment,e),m(gs.$$.fragment,e),m(js.$$.fragment,e),m(bs.$$.fragment,e),m(ys.$$.fragment,e),m(qs.$$.fragment,e),m($s.$$.fragment,e),m(Es.$$.fragment,e),m(zs.$$.fragment,e),m(ks.$$.fragment,e),m(Ss.$$.fragment,e),to=!0)},o(e){g(xe.$$.fragment,e),g(Te.$$.fragment,e),g(Le.$$.fragment,e),g(Ze.$$.fragment,e),g(Fe.$$.fragment,e),g(Me.$$.fragment,e),g(He.$$.fragment,e),g(We.$$.fragment,e),g(Ue.$$.fragment,e),g(Be.$$.fragment,e),g(Ge.$$.fragment,e),g(Ve.$$.fragment,e),g(Ye.$$.fragment,e),g(Je.$$.fragment,e),g(Ke.$$.fragment,e),g(Qe.$$.fragment,e),g(Xe.$$.fragment,e),g(es.$$.fragment,e),g(ss.$$.fragment,e),g(ts.$$.fragment,e),g(os.$$.fragment,e),g(ps.$$.fragment,e),g(rs.$$.fragment,e),g(cs.$$.fragment,e),g(us.$$.fragment,e),g(ds.$$.fragment,e),g(hs.$$.fragment,e),g(_s.$$.fragment,e),g(fs.$$.fragment,e),g(ms.$$.fragment,e),g(gs.$$.fragment,e),g(js.$$.fragment,e),g(bs.$$.fragment,e),g(ys.$$.fragment,e),g(qs.$$.fragment,e),g($s.$$.fragment,e),g(Es.$$.fragment,e),g(zs.$$.fragment,e),g(ks.$$.fragment,e),g(Ss.$$.fragment,e),to=!1},d(e){t(Z),e&&t(Ua),e&&t(F),w(xe),e&&t(Ba),e&&t(ie),e&&t(Ga),e&&t(ce),e&&t(Va),e&&t(ue),e&&t(Ya),e&&t(H),w(Te),e&&t(Ja),e&&t(Ls),e&&t(Ka),e&&t(Ns),e&&t(Qa),e&&t(Zs),e&&t(Xa),e&&t(Fs),e&&t(en),e&&t(W),w(Le),e&&t(sn),e&&t(U),e&&t(tn),e&&t(C),e&&t(an),e&&t(B),w(Ze),e&&t(nn),w(Fe,e),e&&t(on),e&&t(Hs),e&&t(ln),w(Me,e),e&&t(pn),e&&t(fe),e&&t(rn),e&&t(Ws),e&&t(cn),w(He,e),e&&t(un),w(We,e),e&&t(dn),e&&t(Us),e&&t(hn),w(Ue,e),e&&t(_n),w(Be,e),e&&t(fn),e&&t(me),e&&t(mn),w(Ge,e),e&&t(gn),e&&t(G),w(Ve),e&&t(wn),w(Ye,e),e&&t(vn),e&&t(Bs),e&&t(jn),w(Je,e),e&&t(bn),e&&t(we),e&&t(yn),e&&t(Gs),e&&t(qn),w(Ke,e),e&&t($n),e&&t(ve),e&&t(En),w(Qe,e),e&&t(zn),w(Xe,e),e&&t(kn),e&&t(Vs),e&&t(Sn),w(es,e),e&&t(Dn),e&&t(je),e&&t(On),w(ss,e),e&&t(Pn),w(ts,e),e&&t(xn),e&&t(Ys),e&&t(Cn),e&&t(be),w(os),e&&t(In),w(ps,e),e&&t(An),e&&t(ye),e&&t(Tn),e&&t(Js),e&&t(Rn),e&&t(E),e&&t(Ln),e&&t(J),w(rs),e&&t(Nn),e&&t($e),w(cs),w(us),w(ds),w(hs),w(_s),e&&t(Zn),e&&t(X),w(fs),e&&t(Fn),w(ms,e),e&&t(Mn),e&&t(ee),w(gs),e&&t(Hn),e&&t(I),e&&t(Wn),e&&t(se),w(js),e&&t(Un),e&&t(x),w(bs),w(ys),e&&t(Bn),e&&t(te),w(qs),e&&t(Gn),e&&t(ae),w($s),e&&t(Vn),e&&t(ne),w(Es),e&&t(Yn),e&&t(oe),w(zs),e&&t(Jn),e&&t(le),w(ks),e&&t(Kn),e&&t(pe),w(Ss),e&&t(Qn),e&&t(k),e&&t(Xn),e&&t(Ks),e&&t(eo),e&&t(A),e&&t(so),e&&t(T)}}}const pd={local:"deepspeed",sections:[{local:"what-is-integrated",title:"What is integrated?"},{local:"how-it-works",sections:[{local:"accelerate-deepspeed-plugin",title:"Accelerate DeepSpeed Plugin"},{local:"deepspeed-config-file",title:"DeepSpeed Config File"}],title:"How it works?"},{local:"saving-and-loading",title:"Saving and loading"},{local:"zero-inference",title:"ZeRO Inference"},{local:"few-caveats-to-be-aware-of",title:"Few caveats to be aware of "},{local:"accelerate.DeepSpeedPlugin",title:"Internals"},{local:"main-deepspeed-resources",title:"Main DeepSpeed Resources"}],title:"DeepSpeed "};function rd(Ii){return od(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class hd extends ed{constructor(Z){super();sd(this,Z,rd,ld,td,{})}}export{hd as default,pd as metadata};
