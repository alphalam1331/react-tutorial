import { ReactNode } from 'react';
import classes from './Card.module.css'

export default function Card(props:{
    title: string,
    className?:string,
    children?: ReactNode

}) {
    const {title, className, children} =props;


  return (
    <div className={className + " " + classes.card}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
