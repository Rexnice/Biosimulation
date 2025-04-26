import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion'; // Animation

const articlesData = [
  { title: 'React Basics', summary: 'Learn the fundamentals of React.' },
  { title: 'Advanced CSS Tricks', summary: 'Take your CSS skills to the next level.' },
  { title: 'JavaScript Essentials', summary: 'Everything you need to know about JS.' },
  { title: 'Building APIs with Node.js', summary: 'Create fast and scalable backends.' },
  { title: 'Artificial Intelligence Overview', summary: 'Understanding the basics of AI.' },
  { title: 'CSS Animations', summary: 'Add life to your websites.' },
  { title: 'Data Structures', summary: 'Foundations of efficient code.' },
  { title: 'JavaScript Essentials', summary: 'Everything you need to know about JS.' },
  { title: 'Building APIs with Node.js', summary: 'Create fast and scalable backends.' },
  { title: 'Artificial Intelligence Overview', summary: 'Understanding the basics of AI.' },
  { title: 'CSS Animations', summary: 'Add life to your websites.' },
  { title: 'Data Structures', summary: 'Foundations of efficient code.' },
  { title: 'JavaScript Essentials', summary: 'Everything you need to know about JS.' },
  { title: 'Building APIs with Node.js', summary: 'Create fast and scalable backends.' },
  { title: 'Artificial Intelligence Overview', summary: 'Understanding the basics of AI.' },
  { title: 'CSS Animations', summary: 'Add life to your websites.' },
  { title: 'Data Structures', summary: 'Foundations of efficient code.' },
  { title: 'JavaScript Essentials', summary: 'Everything you need to know about JS.' },
  { title: 'Building APIs with Node.js', summary: 'Create fast and scalable backends.' },
  { title: 'Artificial Intelligence Overview', summary: 'Understanding the basics of AI.' },
  { title: 'CSS Animations', summary: 'Add life to your websites.' },
  { title: 'Data Structures', summary: 'Foundations of efficient code.' },
  { title: 'JavaScript Essentials', summary: 'Everything you need to know about JS.' },
  { title: 'Building APIs with Node.js', summary: 'Create fast and scalable backends.' },
  { title: 'Artificial Intelligence Overview', summary: 'Understanding the basics of AI.' },
  { title: 'CSS Animations', summary: 'Add life to your websites.' },
  { title: 'Data Structures', summary: 'Foundations of efficient code.' },
];

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState('');

  useEffect(() => {
    const sortedArticles = [...articlesData].sort((a, b) => a.title.localeCompare(b.title));
    setArticles(sortedArticles);
  }, []);

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredArticles = selectedLetter
    ? articles.filter((article) => article.title.toUpperCase().startsWith(selectedLetter))
    : articles;

  return (
    <Container fluid className="py-5 mt-4 pt-5">
      <Row>
        {/* Articles Section */}
        <Col xs={12} md={10}>
          <h1 className="text-center mb-4 mt-5" style={{ fontWeight: '500' }}>Recent Publications</h1>
          <Row>
            <AnimatePresence>
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article, idx) => (
                  <Col key={idx} md={6} lg={4} className="mb-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Card className="h-100 shadow-sm border-0">
                        <Card.Body>
                          <Card.Title className="text-primary">{article.title}</Card.Title>
                          <Card.Text>{article.summary}</Card.Text>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                ))
              ) : (
                <Col>
                  <motion.p
                    className="text-center text-muted"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    No articles found for "{selectedLetter}".
                  </motion.p>
                </Col>
              )}
            </AnimatePresence>
          </Row>
        </Col>
              {/*height: '100vh', top: '100px'  */}
        {/* Vertical Navbar on Right */}
        <Col
          xs="auto"
          className="d-none d-md-flex flex-column align-items-center sticky-top pt-4"
          style={{
            position: 'fixed',
            right: '0',
            top: '100px',
            height: '100vh', // Keeps it full height of the screen
            overflowY: 'auto', // Scrollable if there are more than the screen height
            paddingRight: '10px',
          }}
        >
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {alphabet.map((letter) => (
              <li
                key={letter}
                onClick={() => handleLetterClick(letter)}
                style={{
                  fontSize: '20px',
                  cursor: 'pointer',
                  marginBottom: '10px',
                  fontWeight: selectedLetter === letter ? 'bold' : 'normal',
                }}
              >
                {letter}
              </li>
            ))}
            <li
              onClick={() => {
                setSelectedLetter('');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{
                fontSize: '20px',
                cursor: 'pointer',
                marginTop: '10px',
                fontWeight: selectedLetter === '' ? 'bold' : 'normal',
              }}
            >
              All
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticlesPage;

























// import React from 'react';

// function Articles() {
//   return (
//     <div>
//       Articles
//     </div>
//   )
// }

// export default Articles;
