import { useState } from 'react';
import { Table } from 'antd';
import { useQuery } from '@apollo/client';

import { GET_FEEDS } from '../queries/getFeeds.queries';

const columns = [
  {
    title: '아이디',
    dataIndex: '_id',
    key: 'col_id',
  },
  {
    title: '내용',
    dataIndex: 'content',
    key: 'col_content',
  },
  {
    title: '생성일',
    dataIndex: 'createdAt',
    key: 'col_createdAt',
  },
];

const Feeds = () => {
  const [page, setPage] = useState(1);
  const [feedsData, setFeedsData] = useState<any>();

  useQuery(GET_FEEDS, {
    variables: { page },
    onCompleted: ({ getFeeds }) => {
      setFeedsData(getFeeds);
    },
  });

  return (
    <Table
      columns={columns}
      dataSource={feedsData?.feeds}
      pagination={{
        defaultCurrent: 1,
        current: page,
        total: feedsData?.total,
        showSizeChanger: false,
        pageSize: 10,
        onChange: (page) => {
          setPage(page);
        },
      }}
    />
  );
};

export default Feeds;
