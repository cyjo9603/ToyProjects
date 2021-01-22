import { Table } from 'antd';

const columns = [
  {
    title: '아이디',
    dataIndex: 'id',
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
  return (
    <Table
      columns={columns}
      pagination={{
        defaultCurrent: 1,
        current: undefined,
        total: undefined,
        showSizeChanger: false,
      }}
    />
  );
};

export default Feeds;
