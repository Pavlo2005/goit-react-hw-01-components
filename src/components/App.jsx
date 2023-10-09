import { Profile } from "./profile/profile";
import { user } from "./profile/untils";

import { Statistics } from "./statistics/statistics";
import { data } from "./statistics/untils";

import { Friends } from "./friendsList/friendsList";
import { friendsList } from "./friendsList/untlis";

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics data={data} />
      <Friends friends={friendsList} />
    </>
  );
};
