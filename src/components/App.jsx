import { Profile } from "./profile/profile";
import { user } from "../data/untils-user";

import { Statistics } from "./statistics/statistics";
import { data } from "../data/untils-data";

import { Friends } from "./friends/friends";
import { friendsList } from "../data/untlis-friends-list";

import { transactions } from "../data/untlis-transactions";
import { TransactionHistory } from "./transactionHistory/transactionHistory";


export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics data={data} title={"Upload stats"} />
      <Friends friends={friendsList} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
