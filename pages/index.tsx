import Head from 'next/head'
import styles from '../styles/Home.module.scss'

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Simple url shortener</title>
            </Head>

            <h1>Add the link</h1>
        </div>
    )
}

export default Home
