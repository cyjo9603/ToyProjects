import React, { FC, useEffect } from 'react';
import { useQuery, useSubscription } from '@apollo/react-hooks';

import { GET_CHAT_LIST, SUB_CHAT } from '../../queries/chat.queries';

const Home: FC = () => {
  const { loading, data, subscribeToMore } = useQuery(GET_CHAT_LIST);

  useEffect(() => {
    subscribeToMore({
      document: SUB_CHAT,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newChat = subscriptionData.data.subscriptionChat;
        return { getChatList: [...prev.getChatList, newChat] };
      },
    });
  }, []);

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
