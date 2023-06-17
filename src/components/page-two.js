import styled from "styled-components"
import { Button, Input } from "antd"
import { useState } from "react"

const Component = (props) => {
  const {
    className,
    setPage,
    amount,
    setAmount,
  } = props || {}

  return (
    <div className={className}>
      <h1>
        Withdrawal amount
      </h1>
      <p>
        Withdrawable amount RM 450
      </p>

      <Input value={amount} onChange={(e) => setAmount(e.target.value)} />

      <div className="amount-row">
        <Button onClick={() => setAmount(100)}>
          RM 100
        </Button>
        <Button onClick={() => setAmount(150)}>
          RM 150
        </Button>
        <Button onClick={() => setAmount(200)}>
          RM 200
        </Button>
      </div>

      <div className="amount-row">
        <Button onClick={() => setAmount(300)}>
          RM 300
        </Button>
        <Button onClick={() => setAmount(400)}>
          RM 400
        </Button>
        <Button disabled onClick={() => setAmount(500)}>
          RM 500
        </Button>
      </div>

      <div className="action-row footer">
        <Button
          onClick={() => setPage(1)}
        >Back</Button>
        <Button
          onClick={() => setPage(3)}
        >Next</Button>
      </div>
    </div>
  )
}


const StyledComponent = styled(Component)`
*:not(input) {
  text-align: center;
}

.action-row {
  .ant-btn {
    width: 50%;
    margin-top: 2rem;
  }
}

.amount-row {
  .ant-btn {
    width: 33%;
    margin-top: 2rem;
  }
}
`

export default StyledComponent
