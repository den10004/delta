import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import db from '../data.json'
import Link from 'next/link'
import Window from './Window'


export default function Home() {

  const data = db.document

  const header = ["Дата документа", "Наименование документа"];

  const [open, setOpen] = React.useState(false);
  
  function openWindow (dates) {
    setOpen(!open);
    console.log(dates)
  }

  return (
    <>
      <Head>
        <title>Next</title>
        <meta name="keywords" content="next js"></meta>
        <meta name="description" content="тестовое задание"></meta>
        <meta charSet="utf-8" content="next js"></meta>
      </Head>

      <div className={styles.container}>    

        <h1 className={styles.h1}>Тестовое задание</h1>

        <table className={styles.table}>
          <thead className={styles.table}>
            <tr className={styles.table}>{header.map((item, index) => <th key={index} className={styles.table}>{item}</th>)}</tr>
          </thead>

          <tbody className={styles.table}>
            {Object.keys(data).map((item, index) => {
              let dates = data[item];

              return (
                <tr key={index} className={styles.table}>
                  <td className={styles.table}>{dates.docDate}</td>
                  <td className={styles.table}><button className={styles.table__button} onClick={(e) => openWindow(dates)}>
                    <Link href="/"><a>{dates.displayName}</a></Link></button></td>

                </tr>
              );
            })}
               {open && <Window openWindow={openWindow} header={header}/>}
          </tbody>

        </table>

      </div>
    </>
  )
}
