<script lang="ts">
	import MiniCardEmptyList from '../entities/mini-card-empty-list/mini-card-empty-list.svelte';
	import MiniCardHeader from '../entities/mini-card-header/mini-card-header.svelte';
	import MiniCardUploader from '../entities/mini-card-uploader/mini-card-uploader.svelte';
	import ListProcessedFile from '../features/list-processed-csv/components/list-processed-csv.svelte';
	import ListUploadCsv from '../features/list-upload-csv/components/list-upload-csv.svelte';
	import UploadFile from '../features/upload-file/upload-file.svelte';

	let mountListFile = true;

	function refreshComponent() {
		mountListFile = false;
		setTimeout(() => {
			mountListFile = true;
		}, 0);
	}
</script>

<MiniCardUploader {mountListFile}>
	<MiniCardHeader slot="header" />
	<UploadFile slot="uploader" {refreshComponent} />
	<ListProcessedFile slot="processed-list">
		<MiniCardEmptyList slot="no-data" />
	</ListProcessedFile>
	<ListUploadCsv slot="upload-list">
		<MiniCardEmptyList slot="no-data" />
	</ListUploadCsv>
</MiniCardUploader>
