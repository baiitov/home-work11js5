import React from 'react';
import Button from './Button';
import Card from './Card';
import classes from './ErrorModal.module.css'
const ErrorModal = (props) => {
    return (
        <div className={classes.backdrop}>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                         <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    {props.invalid ? <Button onClick={props.onConfirm}>okay</Button> : ''}
                      {props.isButton ? <Button  id={props.id}  onClick={props.deleteHandler}>да</Button> : ''}
                      {props.isButton ? <Button onClick={props.onConfirm}>Нет</Button> : ''}
                </footer>
            </Card>
        </div>
    );
};

export default ErrorModal;