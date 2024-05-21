import type { FileObject } from '../../features/list-processed-csv/types/file-object.type';
import { BucketName } from '../enums/bucket-name.enum';
import { supabase } from './supabase-client';

export const onHandleDownload = async (item: FileObject, storageName: BucketName) => {
	const { data, error } = await supabase.storage.from(storageName).download(item.name);

	if (error) {
		console.error('Error downloading file:', error);
		return;
	}

	if (!data) {
		return;
	}

	const url = URL.createObjectURL(data);
	const a = document.createElement('a');
	a.href = url;
	a.download = item.name;
	document.body.appendChild(a);
	a.click();
	URL.revokeObjectURL(url);
};
