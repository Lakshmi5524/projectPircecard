import React from 'react';
import Card from '@material-ui/core/Card';
// import Button from '@material-ui/core/Button';
function Vote(props) {
    return (
        <div className="data">
            <Card>
                <h4>{props.newdata.line}</h4>
                <h1 className="cost">{props.newdata.cost}<sub>/Month</sub></h1>
                <p className="list">
                    <p>{props.newdata.name}</p>
                    <p>{props.newdata.name1}</p>
                    <p>{props.newdata.name2}</p>
                    <p>{props.newdata.name3}</p>
                    <p>{props.newdata.name4}</p>
                    <p>{props.newdata.name5}</p>
                    <p>{props.newdata.name6}</p>
                    <p>{props.newdata.name7}</p>
                    <button className="btn">Button</button>
                </p>

            </Card>
        </div>
    )
}
export default Vote;