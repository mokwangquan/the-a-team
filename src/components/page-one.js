import styled from "styled-components"
import { Tabs, Collapse, Divider, Button } from 'antd';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: null,
    },
    title: {
      display: true,
      text: "Working hours per day",
    },
  },
};

const labels = ['25/1', '26/1', '27/1', '28/1', '29/1', '30/1', '31/1'];

const data = {
  labels,
  datasets: [
    {
      data: [1,2,3,4,3,4,6],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

const Component = (props) => {
  const {
    className,
    setPage,
  } = props || {}


  const getWorkTab = () => {
    return (
      <>
        <Line options={options} data={data} />

        <Collapse
          defaultActiveKey="1"
          items={[
            {
              key: '1',
              label: "January 2021",
              children: getSummaryCollapse(),
            },
            {
              key: '2',
              label: 'December 2020',
              children: getSummaryCollapse(),
            },
          ]}
        />
      </>
    )
  }

  const getHistoryTab = () => {
    const item = (
      <div>
        <h1>
          Withdrawed RM 200
        </h1>
        <p>
          29 Jan 12:00pm
        </p>
      </div>
    )
    return (
      <>
        {item}
        <Divider/>
        {item}
        <Divider/>
        {item}
        <Divider/>
        {item}
      </>
    )
  }

  const getSummaryCollapse = () => {
    const item = (
      <div>
        <h1>
          Worked 7 hours 5 mins
        </h1>
        <p>
          29 Jan 12:00pm &rarr; 29 Jan 7.30pm
        </p>
      </div>
    )
    return (
      <>
        {item}
        <Divider/>
        {item}
        <Divider/>
        {item}
        <Divider/>
        {item}
      </>
    )
  }

  return (
    <div className={className}>
    {/* TODO: make full width */}
      <Tabs 
        defaultActiveKey="1"
        items={[
          {
            key: '1',
            label: `Work`,
            children: getWorkTab(),
          },
          {
            key: `2`,
            label: `Transaction History`,
            children: getHistoryTab(),
          },
        ]}
      />
      <div
        className="footer"
      >
        <Button
          block
          onClick={() => setPage(2)}
        >
          Make a Withdrawal
        </Button>
      </div>
    </div>
  )
}


const StyledComponent = styled(Component)`
h1 {
  font-size: 1rem;
  margin: 0;
}
p {
  margin: 0;
}
`

export default StyledComponent