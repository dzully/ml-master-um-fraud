export interface FormDataProps {
	erc20_uniq_rec_contract_addr: number;
	erc20_uniq_sent_addr: number;
	max_val_sent_to_contract: number;
	min_val_received: number;
	min_val_sent_to_contract: number;
	time_diff: number;
	total_ether_balance: number;
	total_ether_received: number;
	total_ether_sent: number;
	[key: string]: number;
}
