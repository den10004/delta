import Head from 'next/head'
import styles from '../styles/Window.module.css'
import React from 'react'
import db from '../data.json'
import Link from 'next/link'


export default function Window({openWindow, header}) {

    //console.log(header)

    return (
        <>
        <div className={styles.popup}>
            <div className={styles.popup__content}>
            <form className={styles.popup__form}>
                <button className={styles.button_close} onClick={openWindow}>Закрыть</button>
                <div className={styles.popup__input} placeholder="Наименование документа">{}</div>
                <div className={styles.popup__input} placeholder="Описание документа">{}</div>
                <div className={styles.popup__input} placeholder="Дата документа">{}</div>
            </form>
            </div>
        
        </div>
        </>
    )
}   
