import React from 'react';

import Button from '../../components/ButtonComponent';

const buttonList = [];

for (let i = 0; i < 1000; i++) {
    buttonList.push(<Button label={`Button #${i}`} />);
}

const BenchmarkView = () => (
    <>{buttonList}</>
);

export default BenchmarkView;
