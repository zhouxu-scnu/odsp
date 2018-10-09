<template>
	<div>
		<div class="catalogsIndexTitle">数据索引</div>
		<Row class="catalogsIconContainer">
			<Col  v-for="catalog in catalogs" :lg="4" :md="6" :sm="12" style="text-align: center;">
				<div class="catalogBox" @click="searchDataset(catalog.name)">
					<SpriteContainer :width="150" :height="150">
						<div class="icon" :class="catalog.iconClass"></div>
					</SpriteContainer>
					<div style="margin-top: -40px;">{{catalog.name}}</div>
				</div>
			</Col>
		</Row>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				catalogs: [
					{name: '科技教育',iconClass: 'icon-catalog-icon-01'},
					{name: '公共安全',iconClass: 'icon-catalog-icon-02'},
					{name: '农业生态',iconClass: 'icon-catalog-icon-03'},
					{name: '能源',iconClass: 'icon-catalog-icon-04'},
					{name: '气象',iconClass: 'icon-catalog-icon-05'},
					{name: '交通',iconClass: 'icon-catalog-icon-06'},
					{name: '医疗卫生',iconClass: 'icon-catalog-icon-07'},
					{name: '行政司法',iconClass: 'icon-catalog-icon-08'},
					{name: '金融财税',iconClass: 'icon-catalog-icon-09'},
					{name: '工商消费',iconClass: 'icon-catalog-icon-10'},
					{name: '文化体育',iconClass: 'icon-catalog-icon-11'},
					{name: '城市建设',iconClass: 'icon-catalog-icon-12'}
				]
			}
		},
		methods: {
			searchDataset(searchItem){
				alert("查询" + searchItem + "领域数据集");
			}
		}
	}
</script>
<style type="text/css" scoped>
	.catalogsIconContainer {
		font-weight: bold;
		color: #506E82;
	}
	.catalogsIndexTitle {
		border-left: 8px solid;
		padding-left: 10px;
		font-size: 1.5rem;
		font-weight: bold;
		color: #00497A
	}
	.catalogBox {
		width: 150px;
		display: inline-block;
		cursor: pointer;
	}
</style>