<template>
	<div class="listItem">
		<div class="listHead">
			<image class="userPic" src="https://avatars3.githubusercontent.com/u/29355109?v=4&s=120"/>
			<div class="userInfo">
				<text>{{listItem.title}}</text>
				<text>{{listItem.name}}</text>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
	name: 'listItem',
	props: {
		listItem: {
			type: Object
		}
	}
}
</script>

<style type="text/css">
	.listItem{
		padding: 20px 24px 0 24px;
		height: 120px;
		margin-bottom: 20px;
		border-top: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
		justify-content: flex-start;
	}
	.listHead{
		justify-content:space-around;
	}
	.userPic{
		width: 80px;
		height: 80px;
		border-radius: 8px;
		
	}
	.userInfo{
		width: 200px;
	}
</style>
