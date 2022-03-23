import{S as te,i as oe,s as ne,e as i,k as v,w as I,t as M,M as ae,c as r,d as t,m as _,a as d,x as k,h as W,b as l,F as o,g as b,y as X,L as ie,q as U,o as B,B as G}from"../../chunks/vendor-19e06bd2.js";import{D as re}from"../../chunks/Docstring-395e5a9c.js";import{I as ee}from"../../chunks/IconCopyLink-3c713d38.js";function le(R){let s,y,n,a,z,h,F,x,L,T,c,m,w,f,S,O,A,N,p,g,E,q,P,C;return h=new ee({}),f=new ee({}),g=new re({props:{name:"class optimum.onnxruntime.ORTConfig",anchor:"optimum.onnxruntime.ORTConfig",parameters:[{name:"opset",val:": typing.Optional[int] = None"},{name:"opt_level",val:": typing.Optional[int] = None"},{name:"use_gpu",val:": typing.Optional[bool] = False"},{name:"only_onnxruntime",val:": typing.Optional[bool] = False"},{name:"quantization_approach",val:": typing.Optional[str] = None"},{name:"optimize_model",val:": typing.Optional[bool] = True"},{name:"per_channel",val:": typing.Optional[bool] = False"},{name:"reduce_range",val:": typing.Optional[bool] = False"},{name:"activation_type",val:": typing.Optional[str] = 'uint8'"},{name:"weight_type",val:": typing.Optional[str] = 'uint8'"},{name:"quant_format",val:": typing.Optional[str] = 'operator'"},{name:"calibration_method",val:": typing.Optional[str] = 'minmax'"},{name:"split",val:": typing.Optional[str] = 'train'"},{name:"max_samples",val:": typing.Optional[int] = 80"},{name:"calib_batch_size",val:": typing.Optional[int] = 8"},{name:"seed",val:": typing.Optional[int] = 42"},{name:"use_external_data_format",val:": typing.Optional[bool] = False"},{name:"op_types_to_quantize",val:": typing.Optional[typing.List] = None"},{name:"nodes_to_quantize",val:": typing.Optional[typing.List] = None"},{name:"nodes_to_exclude",val:": typing.Optional[typing.List] = None"},{name:"extra_options",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"}],source:"https://github.com/huggingface/optimum/blob/pr_100/src/optimum/onnxruntime/configuration.py#L20",parametersDescription:[{anchor:"optimum.onnxruntime.ORTConfig.opset",description:`<strong>opset</strong> (<code>int</code>, <code>optional</code>) &#x2014;
ONNX opset version to export the model with.`,name:"opset"},{anchor:"optimum.onnxruntime.ORTConfig.use_external_data_format",description:`<strong>use_external_data_format</strong> (<code>bool</code>, <code>optional</code>, defaults to <code>False</code>) &#x2014;
Allow exporting model &gt;= than 2Gb.`,name:"use_external_data_format"},{anchor:"optimum.onnxruntime.ORTConfig.seed",description:`<strong>seed</strong> (<code>int</code>, <code>optional</code>, defaults to 42) &#x2014;
The seed used to ensure reproducibility across runs.`,name:"seed"}],parameterGroups:[{title:"Parameters for optimization",parametersDescription:`
<ul>
<li><strong>opt_level</strong> (<code>int</code>, <code>optional</code>) \u2014
Optimization level performed by ONNX Runtime of the loaded graph.
Supported optimization level are 0, 1, 2 and 99.
0 will disable all optimizations.
1 will enable basic optimizations.
2 will enable basic and extended optimizations, including complex node fusions applied to the nodes
assigned to the CPU or CUDA execution provider, making the resulting optimized graph hardware dependent.
99 will enable all available optimizations including layout optimizations.</li>
<li><strong>use_gpu</strong> (<code>bool</code>, <code>optional</code>, defaults to <code>False</code>) \u2014
Whether to optimize the model for GPU inference.
The optimized graph might contain operators for GPU or CPU only when opt_level > 1.</li>
<li><strong>only_onnxruntime</strong> (<code>bool</code>, <code>optional</code>, defaults to <code>False</code>) \u2014
Whether to only use ONNX Runtime to optimize the model and no graph fusion in Python.</li>
</ul>
`},{title:"Parameters for quantization",parametersDescription:`
<ul>
<li><strong>quantization_approach</strong> (<code>str</code>, <code>optional</code>) \u2014
The quantization approach to apply. Supported approach are static and dynamic.</li>
<li><strong>optimize_model</strong> (<code>bool</code>, <code>optional</code>, defaults to <code>True</code>) \u2014
Whether to optimize the model before quantization.</li>
<li><strong>per_channel</strong> (<code>bool</code>, <code>optional</code>, defaults to <code>False</code>) \u2014
Whether to quantize the weights per channel.</li>
<li><strong>reduce_range</strong> (<code>bool</code>, <code>optional</code>, defaults to <code>False</code>) \u2014
Whether to quantize the weights with 7-bits. It may improve the accuracy for some models running on
non-VNNI machine, especially for per-channel mode</li>
<li><strong>activation_type</strong> (<code>str</code>, <code>optional</code>, defaults to <code>"uint8"</code>) \u2014
The quantization data type of activation.
Currently, OnnxRuntime CPU only supports activation with type uint8.</li>
<li><strong>weight_type</strong> (<code>str</code>, <code>optional</code>, defaults to <code>"uint8"</code>) \u2014
The quantization data type of weight. Supported data type are uint8 and int8.</li>
<li><strong>quant_format</strong> (<code>str</code>, <code>optional</code>, defaults to <code>"operator"</code>) \u2014
ONNX quantization representation format.
Supported quantization representation format are \u201Coperator\u201D and \u201Cqdq\u201D.
\u201Coperator\u201D : Operator Oriented (QOperator) : all the quantized operators have their own ONNX definitions.
\u201Cqdq\u201D : Tensor Oriented (QDQ) : this format quantize the model by inserting QuantizeLinear/DeQuantizeLinear
on the tensor to simulate the quantize and dequantize process.
QuantizeLinear and DeQuantizeLinear operators carry the quantization parameters.</li>
<li><strong>calibration_method</strong> (<code>str</code>, <code>optional</code>, defaults to <code>"minmax"</code>) \u2014
The method chosen to calculate the activations quantization parameters using the calibration dataset.
Current supported calibration methods are \u201Cminmax\u201D, \u201Centropy\u201D and \u201Cpercentile\u201D.</li>
<li><strong>split</strong> (<code>str</code>, <code>optional</code>, defaults to <code>"train"</code>) \u2014
Which split of the calibration dataset to load.
Depending on the calibration dataset to load, the possible values are \u201Ctrain\u201D, \u201Cvalidation\u201D and \u201Ctest\u201D.</li>
<li><strong>max_samples</strong> (<code>int</code>, <code>optional</code>, defaults to 80) \u2014
Maximum number of examples to use for the calibration step resulting from static quantization.</li>
<li><strong>calib_batch_size</strong> (<code>int</code>, <code>optional</code>, defaults to 8) \u2014
The batch size to use for the calibration step resulting from static quantization.</li>
<li><strong>op_types_to_quantize</strong> (<code>List</code>, <code>optional</code>) \u2014
List of the types of operators to quantize. By default, all the supported operators are quantized.</li>
<li><strong>nodes_to_quantize</strong> (<code>List</code>, <code>optional</code>) \u2014
List of the nodes names to quantize.</li>
<li><strong>nodes_to_exclude</strong> (<code>List</code>, <code>optional</code>) \u2014
List of the nodes names to exclude when applying quantization.</li>
<li><strong>extra_options</strong> (<code>Dict[str, Any]</code>, <code>optional</code>) \u2014
The dictionary mapping each extra options to the desired value, such as :
ActivationSymmetric (<code>bool</code>, <code>optional</code>, defaults to <code>False</code>):
Symmetrize calibration data for activations.
WeightSymmetric (<code>bool</code>, <code>optional</code>, defaults to <code>True</code>):
Symmetrize calibration data for weights.
EnableSubgraph (<code>bool</code>, <code>optional</code>, defaults to <code>False</code>):
If enabled, subgraph will be quantized.
DisableShapeInference (<code>bool</code>, <code>optional</code>, defaults to <code>False</code>):
In dynamic quantization mode, shape inference is not mandatory and can be disabled in case it causes
issues.
ForceQuantizeNoInputCheck (<code>bool</code>, <code>optional</code>, defaults to <code>False</code>):
By default, the outputs of some latent operators such as maxpool or transpose are not quantized if
the corresponding input is not already quantized. When set to True, this option will force such
operator to always quantize their input, resulting in quantized output.
MatMulConstBOnly (<code>bool</code>, <code>optional</code>, defaults to <code>False</code>):
If enabled, only MatMul with const B will be quantized.
AddQDQPairToWeight (<code>bool</code>, <code>optional</code>, defaults to <code>False</code>):
By default, floating-point weights are quantized and feed to solely inserted DeQuantizeLinear node.
If set to True, the floating-point weights will remain and both QuantizeLinear/DeQuantizeLinear
nodes will be inserted.
OpTypesToExcludeOutputQuantization (<code>List</code>, <code>optional</code>, defaults to <code>[]</code>):
If any op type is specified, the output of ops with this specific op types will not be quantized.
DedicatedQDQPair (<code>bool</code>, <code>optional</code>, defaults to <code>False</code>):
When inserting QDQ pair, multiple nodes can share a single QDQ pair as their inputs. If True, it
will create an identical and dedicated QDQ pair for each node.
QDQOpTypePerChannelSupportToAxis (<code>Dict</code>, <code>optional</code>, defaults to <code>&#123;&#125;</code>):
Set the channel axis for a specific op type. Effective only when per channel quantization is
supported and per_channel is set to True.
CalibMovingAverage (<code>bool</code>, <code>optional</code>, defaults to <code>False</code>):
If enabled, the moving average of the minimum and maximum values will be computed when the
calibration method selected is MinMax.
CalibMovingAverage (<code>float</code>, <code>optional</code>, defaults to <code>0.01</code>):
Constant smoothing factor to use when computing the moving average of the minimum and maximum
values. Effective only when the calibration method selected is MinMax and when CalibMovingAverage
is set to True.</li>
</ul>
`}]}}),{c(){s=i("meta"),y=v(),n=i("h1"),a=i("a"),z=i("span"),I(h.$$.fragment),F=v(),x=i("span"),L=M("ONNX Runtime Configuration"),T=v(),c=i("h2"),m=i("a"),w=i("span"),I(f.$$.fragment),S=v(),O=i("span"),A=M("ORTConfig"),N=v(),p=i("div"),I(g.$$.fragment),E=v(),q=i("p"),P=M("ORTConfig is the configuration class handling all the ONNX Runtime optimization and quantization parameters."),this.h()},l(e){const u=ae('[data-svelte="svelte-1phssyn"]',document.head);s=r(u,"META",{name:!0,content:!0}),u.forEach(t),y=_(e),n=r(e,"H1",{class:!0});var D=d(n);a=r(D,"A",{id:!0,class:!0,href:!0});var H=d(a);z=r(H,"SPAN",{});var V=d(z);k(h.$$.fragment,V),V.forEach(t),H.forEach(t),F=_(D),x=r(D,"SPAN",{});var J=d(x);L=W(J,"ONNX Runtime Configuration"),J.forEach(t),D.forEach(t),T=_(e),c=r(e,"H2",{class:!0});var Q=d(c);m=r(Q,"A",{id:!0,class:!0,href:!0});var j=d(m);w=r(j,"SPAN",{});var K=d(w);k(f.$$.fragment,K),K.forEach(t),j.forEach(t),S=_(Q),O=r(Q,"SPAN",{});var Y=d(O);A=W(Y,"ORTConfig"),Y.forEach(t),Q.forEach(t),N=_(e),p=r(e,"DIV",{class:!0});var $=d(p);k(g.$$.fragment,$),E=_($),q=r($,"P",{});var Z=d(q);P=W(Z,"ORTConfig is the configuration class handling all the ONNX Runtime optimization and quantization parameters."),Z.forEach(t),$.forEach(t),this.h()},h(){l(s,"name","hf:doc:metadata"),l(s,"content",JSON.stringify(se)),l(a,"id","onnx-runtime-configuration"),l(a,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(a,"href","#onnx-runtime-configuration"),l(n,"class","relative group"),l(m,"id","optimum.onnxruntime.ORTConfig"),l(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(m,"href","#optimum.onnxruntime.ORTConfig"),l(c,"class","relative group"),l(p,"class","docstring")},m(e,u){o(document.head,s),b(e,y,u),b(e,n,u),o(n,a),o(a,z),X(h,z,null),o(n,F),o(n,x),o(x,L),b(e,T,u),b(e,c,u),o(c,m),o(m,w),X(f,w,null),o(c,S),o(c,O),o(O,A),b(e,N,u),b(e,p,u),X(g,p,null),o(p,E),o(p,q),o(q,P),C=!0},p:ie,i(e){C||(U(h.$$.fragment,e),U(f.$$.fragment,e),U(g.$$.fragment,e),C=!0)},o(e){B(h.$$.fragment,e),B(f.$$.fragment,e),B(g.$$.fragment,e),C=!1},d(e){t(s),e&&t(y),e&&t(n),G(h),e&&t(T),e&&t(c),G(f),e&&t(N),e&&t(p),G(g)}}}const se={local:"onnx-runtime-configuration",sections:[{local:"optimum.onnxruntime.ORTConfig",title:"ORTConfig"}],title:"ONNX Runtime Configuration"};function de(R,s,y){let{fw:n}=s;return R.$$set=a=>{"fw"in a&&y(0,n=a.fw)},[n]}class me extends te{constructor(s){super();oe(this,s,de,le,ne,{fw:0})}}export{me as default,se as metadata};
