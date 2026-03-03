<script lang="ts">
	import { tooltipText, tooltipId, tooltipX, tooltipY } from '$lib/stores/tooltip';

	let { scale, id, angle } = $props();

	let activeTooltipId = $state('');

	type SvgDef = {
		id: string;
		name: string;
		width: number;
		height: number;
		viewBox: string;
		style?: string;
		description?: string;
		inner: string;
	};

	const svgs: SvgDef[] = [
		{
			id: 'hato',
			name: 'はと座',
			width: 56,
			height: 101,
			viewBox: '0 0 56 101',
			style: 'position: absolute; top: 445px; left: 832px',
			description: '<h2>はと座</h2><p>はと座です。</p>',
			inner: `
		<circle cx="11" cy="91" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="18" cy="79" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="21" cy="52" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="22" cy="39" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="15" cy="25" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="21" cy="10" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="41" cy="51" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="19" y1="79" x2="12" y2="92" stroke="blue" stroke-width="2"></line>
		<line x1="17" y1="78" x2="23" y2="39" stroke="blue" stroke-width="2"></line>
		<line x1="20" y1="36" x2="16" y2="25" stroke="blue" stroke-width="2"></line>
		<line x1="22" y1="9" x2="15" y2="23" stroke="blue" stroke-width="2"></line>
		<line x1="41" y1="51" x2="26" y2="42" stroke="blue" stroke-width="2"></line>
			`
		},
		{
			id: 'ho',
			name: 'ほ座',
			width: 224,
			height: 207,
			viewBox: '0 0 216 205',
			style: 'position: absolute; top: 684px; left: 614px',
			description: '<h2>ほ座</h2><p>ほ座です。</p>',
			inner: `
		<circle cx="11" cy="186" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="46" cy="147" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="110" cy="105" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="143" cy="85" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="210" cy="21" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="193" cy="83" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="147" cy="132" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="97" cy="161" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="49" y1="150" x2="13" y2="186" stroke="blue" stroke-width="2"></line>
		<line x1="112" y1="104" x2="48" y2="147" stroke="blue" stroke-width="2"></line>
		<line x1="147" y1="85" x2="111" y2="106" stroke="blue" stroke-width="2"></line>
		<line x1="213" y1="21" x2="138" y2="89" stroke="blue" stroke-width="2"></line>
		<line x1="212" y1="24" x2="191" y2="85" stroke="blue" stroke-width="2"></line>
		<line x1="195" y1="83" x2="148" y2="129" stroke="blue" stroke-width="2"></line>
		<line x1="145" y1="130" x2="94" y2="165" stroke="blue" stroke-width="2"></line>
		<line x1="99" y1="163" x2="17" y2="184" stroke="blue" stroke-width="2"></line>
			`
		},
		{
			id: 'umihebi',
			name: 'うみへび座',
			width: 343,
			height: 228,
			viewBox: '0 0 337 222',
			style: 'position: absolute; top: 631px; left: 363px',
			description: '<h2>うみへび座</h2><p>うみへび座です。</p>',
			inner: `
		<circle cx="30" cy="167" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="146" cy="216" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="175" cy="208" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="226" cy="152" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="256" cy="144" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="268" cy="127" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="295" cy="117" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="332" cy="116" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="311" cy="88" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="289" cy="75" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="301" cy="50" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="305" cy="34" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="315" cy="19" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="149" y1="215" x2="30" y2="167" stroke="blue" stroke-width="2"></line>
		<line x1="178" y1="207" x2="145" y2="217" stroke="blue" stroke-width="2"></line>
		<line x1="227" y1="156" x2="176" y2="209" stroke="blue" stroke-width="2"></line>
		<line x1="256" y1="144" x2="227" y2="151" stroke="blue" stroke-width="2"></line>
		<line x1="257" y1="141" x2="266" y2="128" stroke="blue" stroke-width="2"></line>
		<line x1="328" y1="118" x2="268" y2="125" stroke="blue" stroke-width="2"></line>
		<line x1="336" y1="120" x2="290" y2="74" stroke="blue" stroke-width="2"></line>
		<line x1="309" y1="23" x2="291" y2="71" stroke="blue" stroke-width="2"></line>
			`
		},
		{
			id: 'sasori',
			name: 'さそり座',
			width: 125,
			height: 174,
			viewBox: '0 0 125 174',
			style: 'position: absolute; top: 511px; left: 117px',
			description: '<h2>さそり座</h2><p>さそり座です。</p>',
			inner: `
		<circle cx="27" cy="10" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="30" cy="32" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="7" cy="25" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="17" cy="69" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="27" cy="95" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="50" cy="95" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="71" cy="108" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="81" cy="116" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="89" cy="124" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="37" cy="97" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="114" cy="136" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="110" cy="147" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="100" cy="157" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="13" cy="10" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="30" y1="33" x2="26" y2="10" stroke="blue" stroke-width="2"></line>
		<line x1="27" y1="30" x2="10" y2="10" stroke="blue" stroke-width="2"></line>
		<circle cx="23" cy="17" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="26" y1="97" x2="12" y2="10" stroke="blue" stroke-width="2"></line>
		<line x1="50" y1="93" x2="25" y2="93" stroke="blue" stroke-width="2"></line>
		<line x1="108" y1="145" x2="54" y2="93" stroke="blue" stroke-width="2"></line>
		<line x1="112" y1="130" x2="97" y2="157" stroke="blue" stroke-width="2"></line>
			`
		},
		{
			id: 'karasu',
			name: 'からす座',
			width: 55,
			height: 47,
			viewBox: '0 0 55 47',
			style: 'position: absolute; top: 783px; left: 446px',
			description: '<h2>からす座</h2><p>からす座です。</p>',
			inner: `
		<line x1="36" y1="21" x2="17" y2="15" stroke="blue" stroke-width="2"></line>
		<circle cx="17" cy="13" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="36" cy="19" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="42" cy="34" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="8" cy="33" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="6" y1="32" x2="16" y2="16" stroke="blue" stroke-width="2"></line>
		<line x1="44" y1="36" x2="38" y2="23" stroke="blue" stroke-width="2"></line>
		<line x1="42" y1="36" x2="9" y2="32" stroke="blue" stroke-width="2"></line>
			`
		},
		{
			id: 'tenbin',
			name: 'てんびん座',
			width: 96,
			height: 121,
			viewBox: '0 0 96 121',
			style: 'position: absolute; top: 639px; left: 228px',
			description: '<h2>てんびん座</h2><p>てんびん座です。</p>',
			inner: `
		<line x1="34" y1="36" x2="19" y2="23" stroke="blue" stroke-width="2"></line>
		<circle cx="15" cy="21" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="34" cy="37" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="61" cy="44" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="71" cy="79" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="41" cy="87" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="52" cy="104" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="60" y1="42" x2="32" y2="36" stroke="blue" stroke-width="2"></line>
		<line x1="71" y1="76" x2="62" y2="46" stroke="blue" stroke-width="2"></line>
		<line x1="38" y1="81" x2="32" y2="42" stroke="blue" stroke-width="2"></line>
		<line x1="69" y1="79" x2="44" y2="83" stroke="blue" stroke-width="2"></line>
		<line x1="70" y1="82" x2="53" y2="103" stroke="blue" stroke-width="2"></line>
			`
		},
		{
			id: 'otome',
			name: 'おとめ座',
			width: 203,
			height: 117,
			viewBox: '0 0 203 112',
			style: 'position: absolute; top: 676px; left: 318px',
			description: '<h2>おとめ座</h2><p>おとめ座です。</p>',
			inner: `
		<line x1="81" y1="56" x2="19" y2="7" stroke="blue" stroke-width="2"></line>
		<circle cx="19" cy="10" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="56" cy="38" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="83" cy="54" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="124" cy="60" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="10" cy="29" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="31" cy="44" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="27" cy="60" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="81" cy="88" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="135" cy="76" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="124" cy="37" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="175" cy="52" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="162" cy="76" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="196" cy="58" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="27" y1="44" x2="13" y2="34" stroke="blue" stroke-width="2"></line>
		<line x1="27" y1="62" x2="29" y2="44" stroke="blue" stroke-width="2"></line>
		<line x1="27" y1="60" x2="82" y2="87" stroke="blue" stroke-width="2"></line>
		<line x1="124" y1="60" x2="81" y2="56" stroke="blue" stroke-width="2"></line>
		<line x1="124" y1="42" x2="122" y2="60" stroke="blue" stroke-width="2"></line>
		<line x1="176" y1="52" x2="126" y2="36" stroke="blue" stroke-width="2"></line>
		<line x1="136" y1="75" x2="78" y2="88" stroke="blue" stroke-width="2"></line>
		<line x1="136" y1="79" x2="121" y2="59" stroke="blue" stroke-width="2"></line>
		<line x1="163" y1="75" x2="136" y2="73" stroke="blue" stroke-width="2"></line>
		<line x1="196" y1="58" x2="161" y2="77" stroke="blue" stroke-width="2"></line>
			`
		},
		{
			id: 'kaminoke',
			name: 'かみのけ座',
			width: 63,
			height: 43,
			viewBox: '0 0 63 43',
			style: 'position: absolute; top: 655px; left: 429px',
			description: '<h2>かみのけ座</h2><p>かみのけ座です。</p>',
			inner: `
		<circle cx="13" cy="36" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="19" cy="10" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="52" cy="17" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="12" y1="36" x2="17" y2="13" stroke="blue" stroke-width="2"></line>
		<line x1="54" y1="18" x2="21" y2="10" stroke="blue" stroke-width="2"></line>
			`
		},
		{
			id: 'kentauros',
			name: 'ケンタウロス座',
			width: 265,
			height: 108,
			viewBox: '0 0 265 108',
			style: 'position: absolute; top: 827px; left: 298px',
			description: '<h2>ケンタウロス座</h2><p>ケンタウロス座です。</p>',
			inner: `
		<circle cx="32" cy="38" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="15" cy="10" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="134" cy="58" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="192" cy="68" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="32" y1="42" x2="17" y2="9" stroke="blue" stroke-width="2"></line>
		<circle cx="245" cy="71" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="247" cy="99" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="126" y1="58" x2="15" y2="10" stroke="blue" stroke-width="2"></line>
		<line x1="192" y1="69" x2="132" y2="60" stroke="blue" stroke-width="2"></line>
		<line x1="245" y1="73" x2="188" y2="71" stroke="blue" stroke-width="2"></line>
		<line x1="245" y1="95" x2="245" y2="71" stroke="blue" stroke-width="2"></line>
			`
		},
		{
			id: 'ookami',
			name: 'おおかみ座',
			width: 207,
			height: 195,
			viewBox: '0 0 207 195',
			style: 'position: absolute; top: 655px; left: 182px',
			description: '<h2>おおかみ座</h2><p>おおかみ座です。</p>',
			inner: `
		<circle cx="7" cy="17" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="27" cy="30" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="7" cy="30" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="17" cy="62" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="54" cy="108" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="19" cy="112" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="38" cy="77" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="66" cy="138" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="69" cy="149" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="93" cy="152" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="86" cy="134" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="148" cy="174" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="173" cy="181" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="198" cy="180" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="30" y1="34" x2="5" y2="15" stroke="blue" stroke-width="2"></line>
		<line x1="30" y1="32" x2="5" y2="30" stroke="blue" stroke-width="2"></line>
		<line x1="3" y1="17" x2="19" y2="62" stroke="blue" stroke-width="2"></line>
		<line x1="38" y1="81" x2="21" y2="60" stroke="blue" stroke-width="2"></line>
		<line x1="54" y1="104" x2="36" y2="78" stroke="blue" stroke-width="2"></line>
		<line x1="21" y1="106" x2="17" y2="64" stroke="blue" stroke-width="2"></line>
		<line x1="64" y1="136" x2="13" y2="108" stroke="blue" stroke-width="2"></line>
		<line x1="23" y1="112" x2="69" y2="153" stroke="blue" stroke-width="2"></line>
		<line x1="56" y1="110" x2="83" y2="132" stroke="blue" stroke-width="2"></line>
		<line x1="71" y1="136" x2="54" y2="110" stroke="blue" stroke-width="2"></line>
		<line x1="93" y1="151" x2="73" y2="149" stroke="blue" stroke-width="2"></line>
		<line x1="147" y1="172" x2="89" y2="134" stroke="blue" stroke-width="2"></line>
		<line x1="200" y1="182" x2="147" y2="173" stroke="blue" stroke-width="2"></line>
			`
		},
		{
			id: 'ushikai',
			name: 'うしかい座',
			width: 84,
			height: 137,
			viewBox: '0 0 84 137',
			style: 'position: absolute; top: 565px; left: 359px',
			description: '<h2>うしかい座</h2><p>うしかい座です。</p>',
			inner: `
		<circle cx="29" cy="26" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="19" cy="39" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="43" cy="32" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="50" cy="51" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="72" cy="35" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="78" cy="18" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="23" cy="69" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="40" cy="69" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="32" cy="103" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="46" cy="112" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="12" cy="89" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="3" cy="98" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="48" cy="123" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="29" y1="24" x2="20" y2="40" stroke="blue" stroke-width="2"></line>
		<line x1="41" y1="32" x2="19" y2="40" stroke="blue" stroke-width="2"></line>
		<line x1="54" y1="51" x2="41" y2="32" stroke="blue" stroke-width="2"></line>
		<line x1="74" y1="35" x2="49" y2="52" stroke="blue" stroke-width="2"></line>
		<line x1="78" y1="20" x2="73" y2="34" stroke="blue" stroke-width="2"></line>
		<line x1="29" y1="97" x2="21" y2="43" stroke="blue" stroke-width="2"></line>
		<line x1="49" y1="54" x2="41" y2="69" stroke="blue" stroke-width="2"></line>
		<line x1="38" y1="69" x2="32" y2="101" stroke="blue" stroke-width="2"></line>
		<line x1="46" y1="112" x2="11" y2="89" stroke="blue" stroke-width="2"></line>
			`
		},
		{
			id: 'shishi',
			name: 'しし座',
			width: 154,
			height: 113,
			viewBox: '0 0 154 113',
			style: 'position: absolute; top: 631px; left: 495px',
			description: '<h2>しし座</h2><p>しし座です。</p>',
			inner: `
		<circle cx="17" cy="83" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="43" cy="60" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="89" cy="48" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="85" cy="36" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="106" cy="50" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="106" cy="64" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="93" cy="83" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="138" cy="54" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="97" cy="23" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="108" cy="27" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="120" cy="17" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="44" cy="75" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="38" cy="93" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="46" cy="106" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="44" y1="58" x2="13" y2="81" stroke="blue" stroke-width="2"></line>
		<line x1="89" y1="48" x2="48" y2="60" stroke="blue" stroke-width="2"></line>
		<line x1="42" y1="75" x2="17" y2="83" stroke="blue" stroke-width="2"></line>
		<line x1="46" y1="73" x2="36" y2="93" stroke="blue" stroke-width="2"></line>
		<line x1="46" y1="104" x2="40" y2="94" stroke="blue" stroke-width="2"></line>
		<line x1="108" y1="63" x2="46" y2="77" stroke="blue" stroke-width="2"></line>
		<line x1="108" y1="61" x2="89" y2="82" stroke="blue" stroke-width="2"></line>
		<line x1="134" y1="56" x2="95" y2="79" stroke="blue" stroke-width="2"></line>
		<line x1="99" y1="23" x2="85" y2="42" stroke="blue" stroke-width="2"></line>
		<line x1="120" y1="17" x2="97" y2="27" stroke="blue" stroke-width="2"></line>
			`
		},
		{
			id: 'koppu',
			name: 'コップ座',
			width: 100,
			height: 63,
			viewBox: '0 0 99 58',
			style: 'position: absolute; top: 766px; left: 499px',
			description: '<h2>コップ座</h2><p>コップ座です。</p>',
			inner: `
		<circle cx="11" cy="32" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="30" cy="10" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="52" cy="23" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="48" cy="36" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="81" cy="27" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="67" cy="42" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="27" y1="9" x2="9" y2="32" stroke="blue" stroke-width="2"></line>
		<line x1="50" y1="19" x2="34" y2="10" stroke="blue" stroke-width="2"></line>
		<line x1="46" y1="36" x2="13" y2="36" stroke="blue" stroke-width="2"></line>
		<line x1="80" y1="26" x2="53" y2="23" stroke="blue" stroke-width="2"></line>
		<line x1="71" y1="46" x2="48" y2="32" stroke="blue" stroke-width="2"></line>
			`
		},
		{
			id: 'minaminouo',
			name: 'みなみのうお座',
			width: 114,
			height: 51,
			viewBox: '0 0 114 51',
			style: 'position: absolute; top: 166px; left: 304px',
			description:
				'<h2>みなみのうお座</h2><p>みなみのうお座は、南天の星座で、魚を表しています。古代ギリシャの神話では、アフロディーテとエロスが怪物テュポンから逃れるために魚に変身したとされています。みなみのうお座には、明るい星は少ないですが、いくつかの興味深い天体があります。</p>',
			inner: `
		<circle cx="106" cy="10" r="4" stroke="red" stroke-width="2" fill="yellow"> </circle>
		<circle cx="102" cy="2" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="95" cy="3" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="68" cy="14" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="3" cy="44" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="85" cy="24" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="94" y1="1" x2="67" y2="14" stroke="blue" stroke-width="2"></line>
		<line x1="66" y1="15" x2="5" y2="45" stroke="blue" stroke-width="2"></line>
		<line x1="83" y1="25" x2="6" y2="47" stroke="blue" stroke-width="2"></line>
		<line x1="102" y1="12" x2="84" y2="25" stroke="blue" stroke-width="2"></line>
			`
		},
		{
			id: 'yagi',
			name: 'やぎ座',
			width: 94,
			height: 101,
			viewBox: '0 0 94 101',
			style: 'position: absolute; top: 236px; left: 252px',
			description:
				'<h2>やぎ座</h2><p>やぎ座は、黄道十二星座の一つで、山羊を表しています。古代ギリシャの神話では、山羊の姿をした怪物アマルテュースが登場します。やぎ座には、明るい星は少ないですが、いくつかの興味深い天体があります。</p>',
			inner: `
		<line x1="78" y1="17" x2="53" y2="14" stroke="blue" stroke-width="2"></line>
		<line x1="79" y1="16" x2="84" y2="15" stroke="blue" stroke-width="2"></line>
		<circle cx="89" cy="10" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="80" cy="16" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="54" cy="16" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="29" cy="26" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="8" cy="38" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="7" cy="51" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="7" cy="91" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="41" cy="45" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="56" cy="29" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="53" y1="15" x2="30" y2="26" stroke="blue" stroke-width="2"></line>
		<line x1="29" y1="27" x2="9" y2="38" stroke="blue" stroke-width="2"></line>
		<line x1="9" y1="37" x2="6" y2="55" stroke="blue" stroke-width="2"></line>
		<line x1="6" y1="55" x2="8" y2="89" stroke="blue" stroke-width="2"></line>
		<line x1="36" y1="49" x2="7" y2="93" stroke="blue" stroke-width="2"></line>
		<line x1="58" y1="28" x2="42" y2="44" stroke="blue" stroke-width="2"></line>
		<line x1="58" y1="29" x2="78" y2="19" stroke="blue" stroke-width="2"></line>
			`
		},
		{
			id: 'houou',
			name: 'ほうおう座',
			width: 184,
			height: 60,
			viewBox: '0 0 184 60',
			style: 'position: absolute; top: 101px; left: 502px',
			description:
				'<h2>ほうおう座</h2><p>ほうおう座は、南天の星座で、鳳凰を表しています。古代ギリシャの神話では、火の鳥フェニックスが登場します。ほうおう座には、明るい星は少ないですが、いくつかの興味深い天体があります。</p>',
			inner: `
		<circle cx="10" cy="10" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="10" cy="10" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="41" cy="27" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="45" y1="30" x2="12" y2="14" stroke="blue" stroke-width="2"></line>
		<circle cx="106" cy="27" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="115" cy="10" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="153" cy="41" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="134" cy="50" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="178" cy="57" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="107" y1="27" x2="39" y2="28" stroke="blue" stroke-width="2"></line>
		<line x1="117" y1="10" x2="108" y2="26" stroke="blue" stroke-width="2"></line>
		<line x1="148" y1="35" x2="108" y2="27" stroke="blue" stroke-width="2"></line>
		<line x1="182" y1="61" x2="150" y2="37" stroke="blue" stroke-width="2"></line>
		<line x1="174" y1="61" x2="142" y2="51" stroke="blue" stroke-width="2"></line>
		<line x1="137" y1="49" x2="112" y2="33" stroke="blue" stroke-width="2"></line>
			`
		},
		{
			id: 'tsuru',
			name: 'つる座',
			width: 117,
			height: 96,
			viewBox: '0 0 117 96',
			style: 'position: absolute; top: 103px; left: 308px',
			description:
				'<h2>つる座</h2><p>つる座は、南天の星座で、鶴を表しています。古代ギリシャの神話では、鶴の姿をした怪物が登場します。つる座には、明るい星は少ないですが、いくつかの興味深い天体があります。</p>',
			inner: `
		<line x1="62" y1="33" x2="14" y2="56" stroke="blue" stroke-width="2"></line>
		<circle cx="12" cy="57" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="69" y1="17" x2="62" y2="35" stroke="blue" stroke-width="2"></line>
		<circle cx="62" cy="33" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="69" cy="17" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="89" y1="7" x2="69" y2="18" stroke="blue" stroke-width="2"></line>
		<circle cx="89" cy="7" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="110" cy="25" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="107" y1="24" x2="66" y2="31" stroke="blue" stroke-width="2"></line>
		<line x1="49" y1="49" x2="65" y2="34" stroke="blue" stroke-width="2"></line>
		<circle cx="48" cy="51" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="20" y1="74" x2="44" y2="52" stroke="blue" stroke-width="2"></line>
		<circle cx="19" cy="76" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="5" cy="92" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="0" y1="96" x2="18" y2="80" stroke="blue" stroke-width="2"></line>
			`
		},
		{
			id: 'mizugame',
			name: 'みずがめ座',
			width: 187,
			height: 155,
			viewBox: '0 0 187 155',
			style: 'position: absolute; top: 171px; left: 277px',
			description:
				'<h2>みずがめ座</h2><p>みずがめ座は、黄道十二星座の一つで、水瓶を表しています。古代ギリシャの神話では、水を司る神ガニュメデスが登場します。みずがめ座には、明るい星は少ないですが、いくつかの興味深い天体があります。</p>',
			inner: `
		<line x1="139" y1="9" x2="175" y2="22" stroke="blue" stroke-width="2"></line>
		<line x1="170" y1="51" x2="173" y2="21" stroke="blue" stroke-width="2"></line>
		<line x1="166" y1="56" x2="143" y2="66" stroke="blue" stroke-width="2"></line>
		<line x1="134" y1="89" x2="141" y2="69" stroke="blue" stroke-width="2"></line>
		<line x1="134" y1="12" x2="158" y2="24" stroke="blue" stroke-width="2"></line>
		<line x1="135" y1="50" x2="158" y2="24" stroke="blue" stroke-width="2"></line>
		<line x1="106" y1="79" x2="130" y2="54" stroke="blue" stroke-width="2"></line>
		<line x1="83" y1="72" x2="102" y2="82" stroke="blue" stroke-width="2"></line>
		<line x1="101" y1="107" x2="103" y2="82" stroke="blue" stroke-width="2"></line>
		<line x1="137" y1="90" x2="96" y2="101" stroke="blue" stroke-width="2"></line>
		<line x1="57" y1="115" x2="99" y2="105" stroke="blue" stroke-width="2"></line>
		<line x1="55" y1="114" x2="13" y2="142" stroke="blue" stroke-width="2"></line>
		<circle cx="135" cy="10" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="174" cy="20" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="169" cy="54" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="142" cy="66" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="132" cy="89" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="124" cy="95" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="113" cy="94" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="100" cy="105" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="103" cy="81" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="147" cy="17" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="157" cy="26" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="140" cy="41" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="133" cy="50" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="83" cy="69" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="58" cy="112" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="15" cy="139" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
			`
		},
		{
			id: 'kujira',
			name: 'くじら座',
			width: 199,
			height: 154,
			viewBox: '0 0 199 154',
			style: 'position: absolute; top: 192px; left: 511px',
			description:
				'<h2>くじら座</h2><p>くじら座は、南天の星座で、鯨を表しています。古代ギリシャの神話では、海の怪物ケートスが登場します。くじら座には、明るい星は少ないですが、いくつかの興味深い天体があります。</p>',
			inner: `
		<line x1="45" y1="9" x2="10" y2="29" stroke="blue" stroke-width="2"></line>
		<line x1="75" y1="38" x2="45" y2="7" stroke="blue" stroke-width="2"></line>
		<line x1="87" y1="48" x2="73" y2="37" stroke="blue" stroke-width="2"></line>
		<line x1="93" y1="53" x2="122" y2="57" stroke="blue" stroke-width="2"></line>
		<line x1="123" y1="63" x2="118" y2="38" stroke="blue" stroke-width="2"></line>
		<line x1="120" y1="38" x2="146" y2="35" stroke="blue" stroke-width="2"></line>
		<line x1="149" y1="108" x2="122" y2="60" stroke="blue" stroke-width="2"></line>
		<line x1="177" y1="87" x2="141" y2="92" stroke="blue" stroke-width="2"></line>
		<line x1="149" y1="114" x2="127" y2="120" stroke="blue" stroke-width="2"></line>
		<line x1="127" y1="122" x2="152" y2="123" stroke="blue" stroke-width="2"></line>
		<line x1="162" y1="137" x2="147" y2="123" stroke="blue" stroke-width="2"></line>
		<line x1="147" y1="151" x2="163" y2="137" stroke="blue" stroke-width="2"></line>
		<line x1="150" y1="152" x2="128" y2="127" stroke="blue" stroke-width="2"></line>
		<circle cx="12" cy="27" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="45" cy="7" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="74" cy="36" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="89" cy="50" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="120" cy="40" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="146" cy="36" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="121" cy="57" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="180" cy="86" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="150" cy="111" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="128" cy="122" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="148" cy="122" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="162" cy="139" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="135" cy="135" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="150" cy="147" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
			`
		},
		{
			id: 'ite',
			name: 'いて座',
			width: 91,
			height: 197,
			viewBox: '0 0 91 197',
			style: 'position: absolute; top: 311px; left: 137px',
			description:
				'<h2>いて座</h2><p>いて座は、黄道十二星座の一つで、射手を表しています。古代ギリシャの神話では、半人半馬のケンタウロスが登場します。いて座には、明るい星は少ないですが、いくつかの興味深い天体があります。</p>',
			inner: `
		<line x1="40" y1="154" x2="41" y2="125" stroke="blue" stroke-width="2"></line>
		<line x1="43" y1="155" x2="50" y2="170" stroke="blue" stroke-width="2"></line>
		<line x1="43" y1="150" x2="27" y2="160" stroke="blue" stroke-width="2"></line>
		<line x1="26" y1="176" x2="28" y2="158" stroke="blue" stroke-width="2"></line>
		<line x1="27" y1="160" x2="12" y2="151" stroke="blue" stroke-width="2"></line>
		<line x1="14" y1="151" x2="5" y2="166" stroke="blue" stroke-width="2"></line>
		<line x1="41" y1="112" x2="58" y2="103" stroke="blue" stroke-width="2"></line>
		<line x1="50" y1="94" x2="45" y2="110" stroke="blue" stroke-width="2"></line>
		<line x1="45" y1="105" x2="43" y2="123" stroke="blue" stroke-width="2"></line>
		<line x1="74" y1="20" x2="38" y2="11" stroke="blue" stroke-width="2"></line>
		<line x1="77" y1="24" x2="49" y2="95" stroke="blue" stroke-width="2"></line>
		<line x1="23" y1="57" x2="7" y2="53" stroke="blue" stroke-width="2"></line>
		<line x1="37" y1="96" x2="21" y2="58" stroke="blue" stroke-width="2"></line>
		<line x1="79" y1="82" x2="63" y2="95" stroke="blue" stroke-width="2"></line>
		<circle cx="38" cy="10" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="57" cy="14" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="78" cy="20" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="48" cy="94" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="46" cy="109" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="65" cy="95" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="80" cy="84" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="60" cy="114" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="61" cy="103" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="7" cy="53" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="22" cy="58" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="37" cy="99" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="43" cy="124" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="43" cy="153" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="51" cy="169" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="25" cy="179" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="28" cy="159" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="17" cy="152" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="7" cy="164" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
			`
		},
		{
			id: 'kujira-2',
			name: 'くじら座',
			width: 199,
			height: 154,
			viewBox: '0 0 199 154',
			style: 'position: absolute; top: 192px; left: 511px',
			description:
				'<h2>くじら座</h2><p>くじら座は、南天の星座で、鯨を表しています。古代ギリシャの神話では、海の怪物ケートスが登場します。くじら座には、明るい星は少ないですが、いくつかの興味深い天体があります。</p>',
			inner: `
		<line x1="45" y1="9" x2="10" y2="29" stroke="blue" stroke-width="2"></line>
		<line x1="75" y1="38" x2="45" y2="7" stroke="blue" stroke-width="2"></line>
		<line x1="87" y1="48" x2="73" y2="37" stroke="blue" stroke-width="2"></line>
		<line x1="93" y1="53" x2="122" y2="57" stroke="blue" stroke-width="2"></line>
		<line x1="123" y1="63" x2="118" y2="38" stroke="blue" stroke-width="2"></line>
		<line x1="120" y1="38" x2="146" y2="35" stroke="blue" stroke-width="2"></line>
		<line x1="149" y1="108" x2="122" y2="60" stroke="blue" stroke-width="2"></line>
		<line x1="177" y1="87" x2="141" y2="92" stroke="blue" stroke-width="2"></line>
		<line x1="149" y1="114" x2="127" y2="120" stroke="blue" stroke-width="2"></line>
		<line x1="127" y1="122" x2="152" y2="123" stroke="blue" stroke-width="2"></line>
		<line x1="162" y1="137" x2="147" y2="123" stroke="blue" stroke-width="2"></line>
		<line x1="147" y1="151" x2="163" y2="137" stroke="blue" stroke-width="2"></line>
		<line x1="150" y1="152" x2="128" y2="127" stroke="blue" stroke-width="2"></line>
		<circle cx="12" cy="27" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="45" cy="7" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="74" cy="36" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="89" cy="50" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="120" cy="40" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="146" cy="36" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="121" cy="57" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="180" cy="86" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="150" cy="111" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="128" cy="122" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="148" cy="122" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="162" cy="139" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="135" cy="135" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="150" cy="147" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
			`
		},
		{
			id: 'uo',
			name: 'うお座',
			width: 190,
			height: 65,
			viewBox: '0 0 190 65',
			style: 'position: absolute; top: 245px; left: 447px',
			description:
				'<h2>うお座</h2><p>うお座は、黄道十二星座の一つで、魚を表しています。古代ギリシャの神話では、魚の姿をした怪物が登場します。うお座には、明るい星は少ないですが、いくつかの興味深い天体があります。</p>',
			inner: `
		<circle cx="8" cy="13" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="36" cy="4" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="8" y1="13" x2="36" y2="4" stroke="blue" stroke-width="2"></line>
		<circle cx="20" cy="23" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="8" y1="13" x2="20" y2="23" stroke="blue" stroke-width="2"></line>
		<circle cx="31" cy="16" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="20" y1="23" x2="31" y2="16" stroke="blue" stroke-width="2"></line>
		<line x1="31" y1="16" x2="36" y2="4" stroke="blue" stroke-width="2"></line>
		<circle cx="51" cy="20" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="100" cy="26" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="116" cy="33" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="153" cy="39" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="179" cy="42" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="132" cy="60" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="154" cy="51" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="182" y1="45" x2="31" y2="14" stroke="blue" stroke-width="2"></line>
		<line x1="177" y1="43" x2="128" y2="61" stroke="blue" stroke-width="2"></line>
			`
		},
		{
			id: 'eritanusu',
			name: 'エリダヌス座',
			width: 171,
			height: 344,
			viewBox: '0 0 171 344',
			style: 'position: absolute; top: 128px; left: 676px',
			description:
				'<h2>エリダヌス座</h2><p>エリダヌス座は、南天の星座で、川を表しています。古代ギリシャの神話では、川の神エリダヌスが登場します。エリダヌス座には、明るい星は少ないですが、いくつかの興味深い天体があります。</p>',
			inner: `
		<circle cx="14" cy="21" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="45" cy="39" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="14" y1="21" x2="45" y2="39" stroke="blue" stroke-width="2"></line>
		<circle cx="53" cy="60" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="45" y1="39" x2="53" y2="61" stroke="blue" stroke-width="2"></line>
		<circle cx="60" cy="95" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="53" y1="60" x2="60" y2="95" stroke="blue" stroke-width="2"></line>
		<circle cx="82" cy="109" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="60" y1="95" x2="82" y2="109" stroke="blue" stroke-width="2"></line>
		<circle cx="112" cy="128" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="82" y1="109" x2="112" y2="128" stroke="blue" stroke-width="2"></line>
		<circle cx="126" cy="176" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="112" y1="128" x2="126" y2="176" stroke="blue" stroke-width="2"></line>
		<circle cx="122" cy="180" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="122" y1="180" x2="139" y2="224" stroke="blue" stroke-width="2"></line>
		<circle cx="139" cy="224" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="144" cy="226" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="142" cy="248" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="89" cy="193" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="141" y1="246" x2="144" y2="226" stroke="blue" stroke-width="2"></line>
		<line x1="139" y1="247" x2="87" y2="193" stroke="blue" stroke-width="2"></line>
		<line x1="89" y1="192" x2="77" y2="182" stroke="blue" stroke-width="2"></line>
		<circle cx="77" cy="182" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="77" y1="185" x2="65" y2="170" stroke="blue" stroke-width="2"></line>
		<circle cx="62" cy="168" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="63" y1="170" x2="51" y2="145" stroke="blue" stroke-width="2"></line>
		<circle cx="50" cy="148" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="24" cy="142" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="22" y1="141" x2="53" y2="147" stroke="blue" stroke-width="2"></line>
		<circle cx="17" cy="170" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="17" y1="173" x2="24" y2="141" stroke="blue" stroke-width="2"></line>
		<circle cx="46" cy="202" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="58" cy="216" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="56" y1="215" x2="19" y2="173" stroke="blue" stroke-width="2"></line>
		<circle cx="69" cy="276" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="72" cy="288" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="82" cy="295" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="71" y1="291" x2="56" y2="217" stroke="blue" stroke-width="2"></line>
		<line x1="81" y1="296" x2="72" y2="288" stroke="blue" stroke-width="2"></line>
		<circle cx="87" cy="309" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="90" y1="315" x2="83" y2="295" stroke="blue" stroke-width="2"></line>
			`
		},
		{
			id: 'washi',
			name: 'わし座',
			width: 82,
			height: 100,
			viewBox: '0 0 82 100',
			style: 'position: absolute; top: 351px; left: 234px',
			description:
				'<h2>わし座</h2><p>わし座は、夏の夜空に見える星座で、鷲を表しています。古代ギリシャの神話では、ゼウスが変身した鷲が登場します。わし座には、明るい星は少ないですが、いくつかの興味深い天体があります。</p>',
			inner: `
		<circle cx="52" cy="9" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="61" cy="37" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="38" cy="61" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="10" cy="73" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="65" cy="49" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="62" cy="89" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="52" y1="9" x2="62" y2="38" stroke="blue" stroke-width="2"></line>
		<line x1="63" y1="51" x2="3" y2="73" stroke="blue" stroke-width="2"></line>
		<line x1="61" y1="90" x2="66" y2="47" stroke="blue" stroke-width="2"></line>
			`
		},
		{
			id: 'pegasasu',
			name: 'ペガサス座',
			width: 156,
			height: 100,
			viewBox: '0 0 156 100',
			style: 'position: absolute; top: 280px; left: 367px',
			description:
				'<h2>ペガサス座</h2><p>ペガサス座は、秋の夜空に見える星座で、ペガサスを表しています。古代ギリシャの神話では、翼のある馬ペガサスが登場します。ペガサス座には、明るい星は少ないですが、いくつかの興味深い天体があります。</p>',
			inner: `
		<circle cx="7" cy="34" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="23" cy="10" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="61" cy="10" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="83" cy="15" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="145" cy="10" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="90" cy="51" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="139" cy="47" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="76" cy="62" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="58" cy="75" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="72" cy="42" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="48" cy="59" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="33" cy="68" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="8" y1="35" x2="23" y2="12" stroke="blue" stroke-width="2"></line>
		<line x1="61" y1="10" x2="23" y2="10" stroke="blue" stroke-width="2"></line>
		<line x1="83" y1="16" x2="61" y2="10" stroke="blue" stroke-width="2"></line>
		<line x1="146" y1="8" x2="83" y2="14" stroke="blue" stroke-width="2"></line>
		<line x1="146" y1="9" x2="139" y2="48" stroke="blue" stroke-width="2"></line>
		<line x1="141" y1="48" x2="90" y2="50" stroke="blue" stroke-width="2"></line>
		<line x1="83" y1="17" x2="89" y2="51" stroke="blue" stroke-width="2"></line>
		<line x1="73" y1="42" x2="92" y2="53" stroke="blue" stroke-width="2"></line>
		<line x1="73" y1="44" x2="30" y2="69" stroke="blue" stroke-width="2"></line>
		<line x1="89" y1="49" x2="57" y2="76" stroke="blue" stroke-width="2"></line>
			`
		},
		{
			id: 'andoromeda',
			name: 'アンドロメダ座',
			width: 113,
			height: 84,
			viewBox: '0 0 113 84',
			style: 'position: absolute; top: 322px; left: 464px',
			description:
				'<h2>アンドロメダ座</h2><p>アンドロメダ座は、秋の夜空に見える星座で、アンドロメダを表しています。古代ギリシャの神話では、アンドロメダは、海の怪物にさらわれた王女で、ペルセウスによって救われました。アンドロメダ座には、明るい星は少ないですが、いくつかの興味深い天体があります。</p>',
			inner: `
		<circle cx="43" cy="8" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="65" cy="14" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="83" cy="31" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="93" cy="54" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="105" cy="64" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="68" cy="38" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="71" cy="61" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="84" cy="70" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="61" cy="23" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="24" cy="47" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="3" cy="50" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="41" y1="8" x2="63" y2="10" stroke="blue" stroke-width="2"></line>
		<line x1="87" y1="34" x2="63" y2="11" stroke="blue" stroke-width="2"></line>
		<line x1="95" y1="54" x2="83" y2="31" stroke="blue" stroke-width="2"></line>
		<line x1="104" y1="61" x2="94" y2="53" stroke="blue" stroke-width="2"></line>
		<line x1="60" y1="21" x2="44" y2="7" stroke="blue" stroke-width="2"></line>
		<line x1="61" y1="23" x2="25" y2="48" stroke="blue" stroke-width="2"></line>
		<line x1="23" y1="48" x2="7" y2="50" stroke="blue" stroke-width="2"></line>
		<line x1="84" y1="31" x2="69" y2="39" stroke="blue" stroke-width="2"></line>
		<line x1="67" y1="39" x2="71" y2="61" stroke="blue" stroke-width="2"></line>
		<line x1="85" y1="73" x2="70" y2="61" stroke="blue" stroke-width="2"></line>
			`
		},
		{
			id: 'ookuma',
			name: 'おおくま座',
			width: 165,
			height: 94,
			viewBox: '0 0 165 94',
			style: 'position: absolute; top: 541px; left: 441px',
			description:
				'<h2>おおくま座</h2><p>おおくま座は、北天の星座で、大熊を表しています。古代ギリシャの神話では、カリストという女性が、ゼウスによって大熊に変えられたという話があります。おおくま座には、明るい星は少ないですが、いくつかの興味深い天体があります。</p>',
			inner: `
		<circle cx="8" cy="63" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="23" cy="51" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="24" y1="50" x2="7" y2="63" stroke="blue" stroke-width="2"></line>
		<line x1="52" y1="52" x2="23" y2="51" stroke="blue" stroke-width="2"></line>
		<circle cx="37" cy="53" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="53" cy="52" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="78" cy="37" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="105" cy="20" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="123" cy="10" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="124" y1="8" x2="53" y2="53" stroke="blue" stroke-width="2"></line>
		<circle cx="106" cy="34" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<line x1="106" y1="18" x2="113" y2="47" stroke="blue" stroke-width="2"></line>
		<line x1="126" y1="10" x2="108" y2="34" stroke="blue" stroke-width="2"></line>
		<line x1="145" y1="44" x2="113" y2="44" stroke="blue" stroke-width="2"></line>
		<line x1="110" y1="47" x2="66" y2="81" stroke="blue" stroke-width="2"></line>
		<line x1="70" y1="79" x2="53" y2="52" stroke="blue" stroke-width="2"></line>
		<line x1="63" y1="63" x2="81" y2="50" stroke="blue" stroke-width="2"></line>
		<line x1="85" y1="49" x2="78" y2="37" stroke="blue" stroke-width="2"></line>
		<line x1="87" y1="84" x2="68" y2="78" stroke="blue" stroke-width="2"></line>
		<line x1="116" y1="84" x2="90" y2="86" stroke="blue" stroke-width="2"></line>
		<circle cx="82" cy="50" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="63" cy="63" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="143" cy="44" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="126" cy="47" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="70" cy="78" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="89" cy="84" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
		<circle cx="115" cy="84" r="4" stroke="red" stroke-width="2" fill="yellow"></circle>
			`
		}
	];

	const handleOnClick = (e: MouseEvent) => {
		const clientX = e.clientX;
		const clientY = e.clientY;
		const elements = document.elementsFromPoint(clientX, clientY);
		const clickedElement = elements.find((el) => el.tagName.toLowerCase() === 'circle');
		const parentSvg = clickedElement ? (clickedElement.parentNode as Element | null) : null;
		if (parentSvg && parentSvg.id) {
			id.set(parentSvg.id);
		}
	};

	const handleMouseMove = (e: MouseEvent) => {
		const elements = document.elementsFromPoint(e.clientX, e.clientY);

		// マウス位置を store に保存
		tooltipX.set(e.clientX);
		tooltipY.set(e.clientY);

		const hoveredElement = elements.find((el) => el.tagName === 'circle' || el.tagName === 'line');
		const parentNode = hoveredElement ? hoveredElement.parentNode : null;
		const parentEl = parentNode instanceof Element ? parentNode : null;

		const name = parentEl?.getAttribute('name') || '';
		tooltipText.set(name);

		if (parentEl) {
			const parentId = parentEl.id || '';
			activeTooltipId = parentId;
			tooltipId.set(parentId);
		} else {
			activeTooltipId = '';
			tooltipId.set('');
		}
	};
</script>

<div class="svg-container" style="--svg-scale: {scale}; --angle: {$angle}deg;">
	{#each svgs as s}
		<button
			id={'btn-' + s.id}
			style={s.style}
			aria-label={s.name}
			aria-describedby={'desc-' + s.id}
			tabindex="-1"
			onclick={(e) => handleOnClick(e)}
		>
			<svg
				id={s.id}
				name={s.name}
				width={s.width}
				height={s.height}
				data-is-editing="true"
				viewBox={s.viewBox}
				aria-hidden="true"
				tabindex="-1"
				onmousemove={(e) => handleMouseMove(e)}
				onmouseleave={() => {
					activeTooltipId = '';
					tooltipId.set('');
					tooltipText.set('');
				}}
			>
				{@html s.inner}
			</svg>
		</button>
	{/each}
</div>

<style>
	svg {
		pointer-events: none;
		outline-color: transparent;
	}

	.svg-container {
		position: absolute;
		z-index: 2;
		transform-origin: center;
		transform: scale(var(--svg-scale));
		background: rgba(255, 255, 255, 0.5);
	}

	/* apply styles to <circle> elements injected via {@html} */
	.svg-container :global(circle),
	.svg-container :global(line) {
		cursor: pointer;
		pointer-events: auto;
	}

	@media (min-width: 601px) and (max-width: 960px) {
		.svg-container {
			transform-origin: center;
		}
	}
</style>
