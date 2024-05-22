<script lang="ts">
	import MiniCardEmptyList from '../entities/mini-card-empty-list/mini-card-empty-list.svelte';
	import MiniCardHeader from '../entities/mini-card-header/mini-card-header.svelte';
	import MiniCardHome from '../entities/mini-card-home/mini-card-home.svelte';
	import MiniCardUploaderContainer from '../entities/mini-card-uploader-container/mini-card-uploader-container.svelte';
	import ListProcessedFile from '../features/list-processed-csv/components/list-processed-csv.svelte';
	import ListUploadCsv from '../features/list-upload-csv/components/list-upload-csv.svelte';
	import UploadCsvLink from '../features/upload-csv-link/upload-csv-link.svelte';
	import UploadLocalFile from '../features/upload-local-file/upload-local-file.svelte';

	let mountListFile = true;

	function refreshComponent() {
		mountListFile = false;
		setTimeout(() => {
			mountListFile = true;
		}, 0);
	}
</script>

<MiniCardHome {mountListFile}>
	<MiniCardHeader slot="header" />
	<MiniCardUploaderContainer slot="uploader">
		<UploadLocalFile slot="first-section" {refreshComponent} />
		<UploadCsvLink slot="second-section" {refreshComponent} />
	</MiniCardUploaderContainer>
	<ListProcessedFile slot="processed-list">
		<MiniCardEmptyList slot="no-data" />
	</ListProcessedFile>
	<ListUploadCsv slot="upload-list">
		<MiniCardEmptyList slot="no-data" />
	</ListUploadCsv>
</MiniCardHome>
