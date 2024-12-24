"use client"

import classes from './styles.module.css';
import React from 'react';

export default function Highlights(){
    return(
        <div className={classes.container}>
            <div className={classes.wheel}>
                <span style={{ '--i': 0 } as React.CSSProperties}></span>
                <span style={{ '--i': 1 } as React.CSSProperties}></span>
                <span style={{ '--i': 2 } as React.CSSProperties}></span>
                <span style={{ '--i': 3 } as React.CSSProperties}></span>
                <span style={{ '--i': 4 } as React.CSSProperties}></span>
                <span style={{ '--i': 5 } as React.CSSProperties}></span>
                <span style={{ '--i': 6 } as React.CSSProperties}></span>
                <span style={{ '--i': 7 } as React.CSSProperties}></span>
                <div className={classes.datesMainContainer}>
                    <div style={{ '--i': 0 } as React.CSSProperties} onClick={() => console.log(2017)}>2017</div>
                    <div style={{ '--i': 1 } as React.CSSProperties} onClick={() => console.log(2018)}>2018</div>
                    <div style={{ '--i': 2 } as React.CSSProperties} onClick={() => console.log(2019)}>2019</div>
                    <div style={{ '--i': 3 } as React.CSSProperties} onClick={() => console.log(2020)}>2020</div>
                    <div style={{ '--i': 4 } as React.CSSProperties} onClick={() => console.log(2020)}>2021</div>
                    <div style={{ '--i': 5 } as React.CSSProperties} onClick={() => console.log(2022)}>2022</div>
                    <div style={{ '--i': 6 } as React.CSSProperties} onClick={() => console.log(2023)}>2023</div>
                    <div style={{ '--i': 7 } as React.CSSProperties} onClick={() => console.log(2024)}>2024</div>
                </div>
            </div>
        </div>
    )
}