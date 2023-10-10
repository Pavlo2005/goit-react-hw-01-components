import styles from '../transactionHistory.module.css';
import { Item } from './transactionItem.styled';


export const TransactionItem = ({ type, amount, currency, index }) => {
    return (
        <Item index={index}>
            <td className={styles.type}>{type}</td>
            <td className={styles.amount}>{amount}</td>
            <td className={styles.currency}>{currency}</td>
        </Item>
    );
};