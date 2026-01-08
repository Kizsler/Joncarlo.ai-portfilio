import React from 'react';
// import me from '../../assets/pictures/workingAtComputer.jpg';
// import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
// import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Joncarlo Benton</h3>
            <br />
            <div className="text-block">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <br />
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Feel free to
                    contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:jc@wearescallywag.com">
                        jc@wearescallywag.com
                    </a>
                </p>
            </div>
            {/* <ResumeDownload /> */}
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent euismod ultrices ante, ac laoreet nulla vestibulum
                    vel. Donec auctor, nunc eget ultricies tincidunt, nunc nisl
                    aliquam nunc, eget aliquam nunc nisl eget nunc. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia curae.
                </p>
                <br />
                <div className="captioned-image">
                    <div style={styles.placeholder}>
                        <p style={styles.placeholderText}>Photo Coming Soon</p>
                    </div>
                    <p>
                        <sub>
                            <b>Figure 1:</b> A real photo of me developing this
                            website :)
                        </sub>
                    </p>
                </div>

                <p>
                    Nullam quis risus eget urna mollis ornare vel eu leo.
                    Cras mattis consectetur purus sit amet fermentum. Donec
                    ullamcorper nulla non metus auctor fringilla. Maecenas
                    faucibus mollis interdum.
                </p>
                <br />
                <p>
                    Aenean lacinia bibendum nulla sed consectetur. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi
                    leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Integer posuere erat a ante venenatis
                    dapibus posuere velit aliquet.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Etiam porta sem malesuada magna mollis euismod.
                            Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor. Nullam id dolor id nibh
                            ultricies vehicula ut id elit.
                        </p>
                        <br />
                        <p>
                            Curabitur blandit tempus porttitor. Nullam quis
                            risus eget urna mollis ornare vel eu leo. Donec
                            sed odio dui. Vestibulum id ligula porta felis
                            euismod semper.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <div style={styles.placeholderVertical}>
                            <p style={styles.placeholderText}>Photo Coming Soon</p>
                        </div>
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, 2024
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris
                    condimentum nibh, ut fermentum massa justo sit amet risus.
                    Maecenas sed diam eget risus varius blandit sit amet non
                    magna. Cum sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus.
                </p>
                <br />
                <p>
                    Integer posuere erat a ante venenatis dapibus posuere velit
                    aliquet. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:jc@wearescallywag.com">
                        jc@wearescallywag.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
    placeholder: {
        width: '100%',
        height: 300,
        backgroundColor: '#e0e0e0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px dashed #999',
    },
    placeholderVertical: {
        width: '100%',
        height: 250,
        backgroundColor: '#e0e0e0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px dashed #999',
    },
    placeholderText: {
        color: '#666',
        fontSize: 16,
        fontStyle: 'italic',
    },
};

export default About;
