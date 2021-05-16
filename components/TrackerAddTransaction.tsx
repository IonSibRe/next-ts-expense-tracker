import { ReactElement, SyntheticEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/Home.module.scss";

const TrackerAddTransaction = ({ setRevenueData, data }: any): ReactElement => {
	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState(0);

	const submitHandler = (e: SyntheticEvent) => {
		e.preventDefault();
		setRevenueData([...data, { id: uuidv4(), title, amount }]);
	};

	return (
		<div className={styles.trackerAddTransactionWrap}>
			<div className={styles.trackerAddTransactionTitleWrap}>
				<h2
					className={`${styles.trackerSubtitle} ${styles.trackerAddTransactionTitle}`}
				>
					add new transaction
				</h2>
				<hr />
			</div>
			<form
				className={styles.trackerAddTransactionForm}
				onSubmit={(e) => submitHandler(e)}
			>
				<div className={styles.trackerAddTransactionItem}>
					<h4 className={styles.trackerAddTransactionItemDesc}>
						Title
					</h4>
					<input
						type="text"
						placeholder="Enter Title..."
						onChange={(e) => setTitle(e.target.value)}
						className={styles.trackerAddTransactionItemInput}
					/>
				</div>
				<div className={styles.trackerAddTransactionItem}>
					<h4 className={styles.trackerAddTransactionItemDesc}>
						Amount
					</h4>
					<p className={styles.trackerAddTransactionItemText}>
						(negative - expense, positive - income)
					</p>
					<input
						type="text"
						placeholder="Enter Amount..."
						onChange={(e) => setAmount(parseInt(e.target.value))}
						className={styles.trackerAddTransactionItemInput}
					/>
				</div>
				<div className={styles.trackerSubmitBtnWrap}>
					<button className={styles.trackerSubmitBtn} type="submit">
						add transaction
					</button>
				</div>
			</form>
		</div>
	);
};

export default TrackerAddTransaction;
