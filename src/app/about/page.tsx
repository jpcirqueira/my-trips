'use client';
import { CloseOutline } from "@styled-icons/evaicons-outline"
import { LinkWrapper } from "../components/link-wrapper";
import styles from './styles.module.css';

export default function About() {

    return(
        <section className={styles.aboutContent}>
            <LinkWrapper href="/">
                <CloseOutline size={32}/>
            </LinkWrapper>
            <h1 className={styles.aboutHead}>
                My trips
            </h1>
            <div className={styles.aboutBody}>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when
                    an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </section>
    )
}


