import { useState } from "react";
import TrackerCalcCard from "../components/TrackerCalcCard";
import TrackerHistoryList from "../components/TrackerHistoryList";
import styles from "../styles/Home.module.scss";

type Props = {
	data: {
		name: string;
		money: Number;
	}[];
};

export default function Home() {
	const [revenueData, setRevenueData] = useState<Props["data"]>([]);
	// [{name: "Cash", money: 100}, {name: "Book", money: -50}], []
	return (
		<section
			className={`${styles.homeSection} ${styles.sectionCenter} ${styles.flexCenter}`}
		>
			<div className={styles.trackerCard}>
				<div className={styles.trackerTitleWrap}>
					<h1 className={styles.trackerTitle}>Expense Tracker</h1>
				</div>
				<div className={styles.trackerBalanceWrap}>
					<h2 className={styles.trackerSubtitle}>your balance</h2>
					<h2 className={styles.trackerBalanceMoney}>$299.99</h2>
				</div>
				<TrackerCalcCard
					expenseData={{
						income: 0,
						expense: 0,
					}}
				/>
				<TrackerHistoryList data={revenueData} />
			</div>
		</section>
	);
}
