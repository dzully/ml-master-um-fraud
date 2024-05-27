<script lang="ts">
	import axios from 'redaxios';
	import { BaseUrl } from '../../../shared/apis/base-url';
	import { Endpoint } from '../../../shared/enums/endpoint.enum';
	import type { FormDataProps } from '../types/form-data.type';
	import type { FormResponseData } from '../types/form-response-data.type';
	import DataViewer from './data-viewer.svelte';
	import ListForm from './list-form.svelte';

	let formData: FormDataProps = {
		erc20_uniq_rec_contract_addr: 0,
		erc20_uniq_sent_addr: 0,
		max_val_sent_to_contract: 0,
		min_val_received: 0,
		min_val_sent_to_contract: 0,
		time_diff: 0,
		total_ether_balance: 0,
		total_ether_received: 0,
		total_ether_sent: 0
	};

	/**
	 * @type {number | null}
	 */
	let prediction: number | null = null;
	let loading = false;
	let responseData: FormResponseData;

	const handleSubmit = async () => {
		loading = true;
		try {
			const response = await axios.post(`${BaseUrl}/${Endpoint.formPredict}`, formData);
			prediction = response.data.prediction;
			responseData = response.data;
		} catch (error) {
			console.error('Error:', error);
		} finally {
			loading = false;
		}
	};
</script>

<div>
	<ListForm {formData} {handleSubmit} {loading} />
	{#if responseData}
		<DataViewer {responseData} />
	{/if}
</div>

<style>
</style>
