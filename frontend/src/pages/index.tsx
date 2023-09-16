import styles from '@/styles/Home.module.css';
import logo from '../assets/images/bytebybyte-blog-logo.png';
import Image from 'next/image';
import { Button, Col, Row } from 'react-bootstrap';

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Header */}
      <Row className="align-items-center mb-4 gap-2">
        <Col md="auto" className="px-1">
          <Image src={logo} alt="The Byte By Byte Blog logo" width={100} height={100} className={styles.headlineLogo} />
        </Col>
        <Col md="auto" className="px-1">
          <h1 className={styles.headlineText}>Byte By Byte Blog</h1>
          <h2 className={styles.description}>
            Your definitive source for mastering web development, one byte at a time.
          </h2>
          <Button variant="primary" href="/">
            Get Started
          </Button>
        </Col>
      </Row>

      {/* What is Byte By Byte Blog? */}
      <Row className="mb-4">
        <Col>
          <h2 className={styles.subHeadlineText}>What is Byte By Byte Blog?</h2>
          <p>
            The Byte By Byte Blog is a dedicated platform aiming to simplify complex web development concepts. We
            believe in breaking down intricate topics into bite-sized, comprehensible pieces, making learning an
            enjoyable journey rather than a daunting task.
          </p>
        </Col>
      </Row>

      {/* Features */}
      <Row className="mb-4">
        <Col>
          <h2 className={styles.subHeadlineText}>Features</h2>
          <Row>
            <Col md={4} className={styles.feature}>
              <h3>In-depth Articles</h3>
              <p>Discover comprehensive guides and tutorials, covering all aspects of web development.</p>
            </Col>
            <Col md={4} className={styles.feature}>
              <h3>Community Driven</h3>
              <p>Join an active community of developers, share knowledge, and get your questions answered.</p>
            </Col>
            <Col md={4} className={styles.feature}>
              <h3>Latest Tech Stack</h3>
              <p>Stay updated with the newest tools, frameworks, and languages in the ever-evolving web ecosystem.</p>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Testimonials */}
      <Row className="mb-4">
        <Col>
          <h2 className={styles.subHeadlineText}>What Our Readers Say</h2>
          <Row>
            <Col md={4}>
              <p>"Byte By Byte has been a game-changer for my career."</p>
              <cite>- Alex Smith</cite>
            </Col>
            <Col md={4}>
              <p>"Never missed an article! Always on point."</p>
              <cite>- Taylor Lee</cite>
            </Col>
            <Col md={4}>
              <p>"The community here is supportive and knowledgeable."</p>
              <cite>- Jamie Ortiz</cite>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Call-to-Action */}
      <Row className="mb-4">
        <Col>
          <h2 className={styles.subHeadlineText}>Join the Byte By Byte Community</h2>
          <p>Start your journey to becoming a web development master. Sign up for updates and exclusive content.</p>
          <Button variant="primary" href="/">
            Sign Up Now
          </Button>
        </Col>
      </Row>
    </div>
  );
}
