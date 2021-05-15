import styles from "../styles/Home.module.scss";
import { ReactElement } from "react";

type Props = {
	data: {
		name: string;
		money: Number;
	};
};

const TrackerHistoryItem = ({ data }: Props): ReactElement => {
	const { name, money } = data;
	return (
		<div className={styles.trackerHistoryItem}>
			<p className={styles.trackerHistoryItemDesc}>{name}</p>
			<p className={styles.trackerHistoryItemDesc}>
				{money >= 0 ? "+" : "-"}
				{money}
			</p>
		</div>
	);
};

export default TrackerHistoryItem;
