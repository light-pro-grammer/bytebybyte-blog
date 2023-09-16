import styles from '@/styles/Footer.module.css';
import Link from 'next/link';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <hr />
        <p>
          © {new Date().getFullYear()} Byte By Byte Blog. All rights reserved.{' '}
          <Link href="/imprint">Terms of Service</Link> | <Link href="/privacy">Privacy Policy</Link>
        </p>
      </Container>
    </footer>
  );
}
