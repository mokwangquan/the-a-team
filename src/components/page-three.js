import styled from "styled-components"
import { Button, Alert, Divider, Row } from "antd"

const Component = (props) => {
  const {
    className,
    setPage,
    amount,
  } = props || {}

  return (
    <div className={className}>
      <Alert message="Requesting processing..." type="success" showIcon />
      <Divider />

      <h1>
        You withdraw
      </h1>

      <h1 className="amount">
        RM {amount}
      </h1>

      <Row justify="space-between">
        <h5>Service charges</h5>
        <p>RM 1</p>
      </Row>
      <Row justify="space-between">
        <h5>Beneficiary bank</h5>
        <p>Hong Leong Bank</p>
      </Row>
      <Row justify="space-between">
        <h5>Account number</h5>
        <p>******* 9991</p>
      </Row>

      <div className="action-row footer">
        <p>
          You will receive your salary advance within 1 business day.
        </p>
        <Button
          block
          onClick={() => setPage(1)}
        >Done</Button>
      </div>
    </div>
  )
}


const StyledComponent = styled(Component)`
.action-row {
  margin-top: 2rem;
}
.anticon.anticon-check-circle {
  svg {
    height: 2rem;
    width: 2rem;
  }
}
h1 {
  font-size: 2rem;
  margin: 0;
}
.amount {
  font-size: 4rem;
  color: 
}
`

export default StyledComponent
