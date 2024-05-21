export interface Bucket {
	id: string;
	name: string;
	owner: string;
	file_size_limit?: number;
	allowed_mime_types?: string[];
	created_at: string;
	updated_at: string;
	public: boolean;
}
