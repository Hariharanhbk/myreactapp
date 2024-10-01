import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>&copy; 2024 My Website. All rights reserved.</p>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#333',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
        position: 'fixed',
        width: '100%',
        bottom: '0',
    }
};

export default Footer;
