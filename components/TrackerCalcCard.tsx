import React, { ReactElement } from "react";
import styles from "../styles/Home.module.scss";

type Props = {
	expenseData: {
		income: Number;
		expense: Number;
	};
};

const TrackerCalcCard = ({ expenseData }: Props): ReactElement => {
	const { income, expense } = expenseData;

	return (
		<div className={styles.trackerExpenseCalcWrap}>
			<div
				className={`${styles.trackerExpenseCalcItemWrap} ${styles.trackerExpenseCalcIncomeWrap}`}
			>
				<h3 className={styles.trackerExpenseCalcDesc}>income</h3>
				<h3
					className={`${styles.trackerExpenseCalcMoney} ${styles.trackerExpenseCalcIncomeMoney}`}
				>
					${income}
				</h3>
			</div>
			<div
				className={`${styles.trackerExpenseCalcItemWrap} ${styles.trackerExpenseCalcExpenseWrap}`}
			>
				<h3 className={styles.trackerExpenseCalcDesc}>expense</h3>
				<h3
					className={`${styles.trackerExpenseCalcMoney} ${styles.trackerExpenseCalcExpenseMoney}`}
				>
					${expense}
				</h3>
			</div>
		</div>
	);
};

export default TrackerCalcCard;
