<script lang="ts">
	import MiniCardForm from '../../entities/mini-card-form/mini-card-form.svelte';
	import FormPrediction from '../../features/form-prediction/components/form-prediction.svelte';
	import HomeHeaderNavigation from '../../features/home-header-navigation/home-header-navigation.svelte';
</script>

<MiniCardForm>
	<HomeHeaderNavigation slot="navigator" />
	<FormPrediction slot="form" />
</MiniCardForm>
