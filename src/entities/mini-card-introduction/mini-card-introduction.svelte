<script>
	import MiniCardDivider from '../mini-card-uploader-container/components/mini-card-divider.svelte';
</script>

<div class="root">
	<span class="title">Comprehensive Fraud Detection Using Machine Learning Models</span>
	<span class="description">
		This project focuses on developing a robust and reliable system to detect fraudulent Ethereum
		transactions using state-of-the-art machine learning models. Specifically, we leverage the power
		of Support Vector Machines (SVM), Logistic Regression, and Random Forest classifiers to
		accurately identify potentially malicious activities. In this project, we utilize a
		comprehensive dataset containing various features related to Ethereum transactions. These
		features include the time difference between the first and last transactions, the minimum and
		maximum values sent to contracts, the total Ether sent and received, the total Ether balance,
		and unique addresses involved in ERC20 token transactions. By analyzing these attributes, we aim
		to discern patterns and anomalies that may indicate fraudulent behavior.
	</span>
</div>
<MiniCardDivider title="Product" />

<style>
	.root {
		display: flex;
		flex-direction: column;
		margin: 20px 0px;
	}

	.title {
		font-size: 30px;
		line-height: 1.3333;
		color: rgba(0, 0, 0, 0.87);
		font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
		font-weight: bold;
		letter-spacing: 0.0075em;
	}

	.description {
		/* make it material design */
		font-size: 16px;
		line-height: 1.5;
		color: rgba(0, 0, 0, 0.87);
		font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
		font-weight: 400;
		letter-spacing: 0.00938em;
	}
</style>
