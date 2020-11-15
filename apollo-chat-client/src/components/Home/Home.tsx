import React, { FC } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_CHAT_LIST } from '../../queries/chat.queries';

const Home: FC = () => {
  const { loading, data } = useQuery(GET_CHAT_LIST);

  return (
    <div>
      {loading ? (
        <h3>loading...</h3>
      ) : (
        data?.getChatList.map((chat: any) => (
          <h3 key={chat.id}>{`${chat.writer}: ${chat.description}`}</h3>
        ))
      )}
    </div>
  );
};

export default Home;
