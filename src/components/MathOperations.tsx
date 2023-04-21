import React, { FC } from 'react'
import Button, { ButtonClickHandler } from './Button'

const operations = ['+','-','*','/','=']

const renderOperations = (onClickOperation: ButtonClickHandler, onClickEqual: ButtonClickHandler) => (
    operations.map(m => (<Button key={m} text={m.toString()} clickHandler={m==='='?onClickEqual:onClickOperation} />))
)
type Props = {
    onClickOperation:ButtonClickHandler, 
    onClickEqual:ButtonClickHandler
}
const MathOperations: FC<Props> = ({onClickOperation, onClickEqual}) => (
    <section className="math-operations">
        {
            renderOperations(onClickOperation,onClickEqual)
        }
    </section>
)

export default MathOperations