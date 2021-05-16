import { Key, ReactElement } from "react";
import TrackerHistoryItem from "./TrackerHistoryItem";
import styles from "../styles/Home.module.scss";

type Props = {
	data: {
		id: Key;
		title: string;
		amount: number;
	}[];
};

const TrackerHistoryList = ({ data }: Props): ReactElement => {
	return (
		<div className={styles.trackerHistoryWrap}>
			<div className={styles.trackerHistoryTitleWrap}>
				<h2
					className={`${styles.trackerSubtitle} ${styles.trackerHistoryTitle}`}
				>
					History
				</h2>
				<hr />
			</div>
			<div className={styles.trackerHistoryList}>
				{data.map((item) => {
					return <TrackerHistoryItem data={item} key={item.id} />;
				})}
			</div>
		</div>
	);
};

export default TrackerHistoryList;
