import styles from "../styles/Home.module.scss";
import { Key, ReactElement } from "react";

type Props = {
	data: {
		id: Key;
		title: string;
		amount: number;
	};
};

const TrackerHistoryItem = ({ data }: Props): ReactElement => {
	const { title, amount } = data;
	return (
		<div
			className={`${styles.trackerHistoryItem} ${
				amount >= 0
					? styles.trackerHistoryItemIncome
					: styles.trackerHistoryItemExpense
			}`}
		>
			<p className={styles.trackerHistoryItemDesc}>{title}</p>
			<p className={styles.trackerHistoryItemDesc}>
				{amount >= 0 && "+"}
				{amount}
			</p>
		</div>
	);
};

export default TrackerHistoryItem;
