<!-- 该组件用于缩放雪碧图，绑定width值和height值 -->
<!-- 不需要缩放雪碧图大小时，不用嵌套该组件 -->
<template>
	<div :style="containerStyle">
		<slot></slot>
	</div>
</template>
<script type="text/javascript">
	export default {
		props: {
			width: {
				type: Number
			},
			height: {
				type: Number
			}
		},
		data(){
			return {
				spriteDisplay: '',
				scaleX: '',
				scaleY: ''
			}
		},
		computed: {
			containerStyle(){
				return {
					width: this.width + 'px',
					height: this.height + 'px',
					overflow: 'hidden',
					display: this.spriteDisplay
				}
			},
			slotStyle(){
				return {
					transformOrigin: '0 0',
					transform: 'scale(' + this.scaleX + ',' + this.scaleY + ')' 
				}
			}
		},
		mounted(){
			const spriteStyle = document.defaultView.getComputedStyle(this.$slots.default[0].elm, null);
			const spriteWidth = parseInt(spriteStyle.width);
			const spriteHeight = parseInt(spriteStyle.height);
			const spriteDisplay = spriteStyle.display;
			this.scaleX = this.width / spriteWidth;
			this.scaleY = this.height / spriteHeight;
			this.spriteDisplay = spriteDisplay;
			this.$slots.default[0].elm.style.transformOrigin = this.slotStyle.transformOrigin;
			this.$slots.default[0].elm.style.transform = this.slotStyle.transform;
			//兼容IE9
			this.$slots.default[0].elm.style['-ms-transform-origin'] = this.slotStyle.transformOrigin;
			this.$slots.default[0].elm.style['-ms-transform'] = this.slotStyle.transform;
		}		
	}
</script>