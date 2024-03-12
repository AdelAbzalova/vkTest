import { FC } from 'react';
import { Spin } from 'antd';

const Loader: FC = () => (
  <Spin tip="Loading" size="large" style={{ marginTop: "60px" }}>
    <div className="content" />
  </Spin>
);

export default Loader;