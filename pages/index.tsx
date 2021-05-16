import { Key, useEffect, useState } from "react";
import TrackerAddTransaction from "../components/TrackerAddTransaction";
import TrackerCalcCard from "../components/TrackerCalcCard";
import TrackerHistoryList from "../components/TrackerHistoryList";
import styles from "../styles/Home.module.scss";

type Props = {
	data: {
		id: Key;
		title: string;
		amount: number;
	}[];
};

export default function Home() {
	const [revenueData, setRevenueData] = useState<Props["data"]>([]);
	const [balance, setBalance] = useState(0);
	const [income, setIncome] = useState(0);
	const [expense, setExpense] = useState(0);

	useEffect(() => {
		const currentItem = revenueData[revenueData.length - 1];
		if (!currentItem) return;

		if (currentItem.amount >= 0) {
			setIncome(income + currentItem.amount);
			setBalance(balance + currentItem.amount);
		} else {
			setExpense(expense + currentItem.amount);
			setBalance(balance + currentItem.amount);
		}
	}, [revenueData]);

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
					<h2
						className={`${styles.trackerBalanceMoney} ${
							balance >= 0
								? styles.trackerExpenseIncome
								: styles.trackerExpenseExpense
						}`}
					>
						${balance}
					</h2>
				</div>
				<TrackerCalcCard
					expenseData={{
						income,
						expense,
					}}
				/>
				<TrackerHistoryList data={revenueData} />
				<TrackerAddTransaction
					setRevenueData={setRevenueData}
					data={revenueData}
				/>
			</div>
		</section>
	);
}
