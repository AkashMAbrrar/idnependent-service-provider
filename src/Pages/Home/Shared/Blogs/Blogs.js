import React from 'react';
import { Card } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container d-flex m-5 p-5 d-block mx-auto'>
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header>Different Betweenf Authentication And Authorization</Card.Header>
                <Card.Body>
                    <Card.Text>
                        A very short explanation: Authentication is for knowing who a user is, and authorization is what the user its allow to do. Since Firebase Auth handles different ways for only recognize the user, it will allow anyone to access your application, if you don't complement the authentication with access control.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header>What Is Firebase and its alternatives</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header>Firebase Give Us More Services Except Authentication</Card.Header>
                <Card.Body>
                    <Card.Text>
                        There are many services which Firebase provides, Most useful of them are:
                        Cloud Firestore.
                        Cloud Functions.
                        Authentication.
                        Hosting.
                        Cloud Storage.
                        Google Analytics.
                        Predictions.
                        Cloud Messaging.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blogs;